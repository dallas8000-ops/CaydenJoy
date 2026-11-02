/**
 * Learning Engine
 *
 * Shared, DOM-free engine for every CaydenJoy learning game (Picture Puzzle
 * today; Colors, Numbers and Places next). It decides what to ask, which
 * choices to show, how much help to give, and how to score each answer.
 *
 * Teaching model (error correction with a most-to-least prompt ladder):
 *   level 0  no help: full field of choices
 *   level 1  after the 1st error: short spoken explanation, the card he
 *            picked is removed (one fewer choice)
 *   level 2  after the 2nd error: down to 2 choices, the target is
 *            highlighted before he taps
 *   level 3  after the 3rd error: the app models the answer, he copies
 *
 * A right answer at level 0 with no errors is "independent"; any right
 * answer that needed help is "prompted"; a wrong tap is an "error". Help
 * then fades: an item answered with help starts its next trial one level
 * easier than plain, and drops back toward level 0 as he succeeds.
 *
 * This file must stay dependency-free: tests load it straight into Node
 * (`node --test`, type stripping), so no imports, enums or decorators.
 */

export type CardCategory = 'person' | 'object' | 'food' | 'color' | 'number' | 'place';

export interface LearningCard {
  id: string;
  label: string;
  category: CardCategory;
  /** One short sentence about the item, spoken after a wrong pick: "A cup is for drinking." */
  fact?: string;
  /** Plural nouns read "Those are shoes" instead of "That's a shoes". */
  plural?: boolean;
}

export type TrialResult = 'independent' | 'prompted' | 'error';
export type PromptLevel = 0 | 1 | 2 | 3;

export interface Trial {
  targetId: string;
  /** Card ids currently on screen, in display order. */
  choices: string[];
  promptLevel: PromptLevel;
  /** Level 2+: the target should be visibly highlighted before he taps. */
  highlightTarget: boolean;
  /** Level 3: the app demonstrates the answer before he taps. */
  model: boolean;
  errors: number;
  startedAt: number;
}

export interface AnswerOutcome {
  result: TrialResult;
  correct: boolean;
  /** Spoken explanation for a wrong pick, only on the first error of a trial. */
  explanation?: string;
  /** The trial after this answer (reduced choices / new prompt level on error). */
  trial: Trial;
  promptLevel: PromptLevel;
  /** Consecutive independent answers, reset by any error or prompted answer. */
  streak: number;
  latencyMs: number;
}

export interface LearningEngineOptions {
  /** Choices shown at level 0. Clamped to 2..6 and to the number of cards. */
  fieldSize?: number;
  /** Seed for repeatable shuffles (tests). Omit for Math.random. */
  seed?: number;
  /** Clock override (tests). */
  now?: () => number;
}

const MIN_FIELD = 2;
/** Longest fact the app will speak; keeps explanations to one short sentence. */
export const MAX_FACT_LENGTH = 120;
const MAX_FIELD = 6;
/** Highest level an item may START a trial at; level 3 (model) only follows errors. */
const MAX_START_LEVEL: PromptLevel = 2;

/** mulberry32: tiny, fast, good-enough seeded PRNG for shuffles. */
function seededRandom(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function clampLevel(n: number): PromptLevel {
  return Math.max(0, Math.min(3, n)) as PromptLevel;
}

export class LearningEngine {
  private cards: LearningCard[] = [];
  private readonly random: () => number;
  private readonly now: () => number;
  private baseField: number;
  /** Per-item starting prompt level, so help fades item by item. */
  private startLevels = new Map<string, PromptLevel>();
  private recentTargets: string[] = [];
  private current: Trial | null = null;
  private streakCount = 0;

  constructor(options: LearningEngineOptions = {}) {
    this.random = options.seed === undefined ? Math.random : seededRandom(options.seed);
    this.now = options.now ?? (() => Date.now());
    this.baseField = Math.max(MIN_FIELD, Math.min(MAX_FIELD, Math.round(options.fieldSize ?? 3)));
  }

  setCards(cards: LearningCard[]): void {
    const seen = new Set<string>();
    this.cards = cards.filter((c) => c && c.id && !seen.has(c.id) && seen.add(c.id));
    this.recentTargets = this.recentTargets.filter((id) => seen.has(id));
    if (this.current && !seen.has(this.current.targetId)) this.current = null;
  }

  setFieldSize(size: number): void {
    this.baseField = Math.max(MIN_FIELD, Math.min(MAX_FIELD, Math.round(size)));
  }

  get cardCount(): number {
    return this.cards.length;
  }

  get currentTrial(): Trial | null {
    return this.current ? { ...this.current, choices: [...this.current.choices] } : null;
  }

  get currentPromptLevel(): PromptLevel {
    return this.current?.promptLevel ?? 0;
  }

  get streak(): number {
    return this.streakCount;
  }

  getCard(id: string): LearningCard | undefined {
    return this.cards.find((c) => c.id === id);
  }

  /** Starting help level for an item (0 = no help). Exposed for the progress view and tests. */
  startLevelFor(id: string): PromptLevel {
    return this.startLevels.get(id) ?? 0;
  }

  /** Begin a new trial. Returns null when there are fewer than 2 cards to choose between. */
  nextTrial(): Trial | null {
    if (this.cards.length < MIN_FIELD) {
      this.current = null;
      return null;
    }

    const target = this.pickTarget();
    const level = this.startLevelFor(target.id);
    const field = this.fieldSizeFor(level);
    const distractors = this.shuffle(this.cards.filter((c) => c.id !== target.id)).slice(0, field - 1);
    const choices = this.shuffle([target, ...distractors]).map((c) => c.id);

    this.recentTargets = [...this.recentTargets, target.id].slice(-2);
    this.current = {
      targetId: target.id,
      choices,
      promptLevel: level,
      highlightTarget: level >= 2,
      model: false,
      errors: 0,
      startedAt: this.now(),
    };
    return this.currentTrial;
  }

  /** Score a tap. Throws if there is no active trial or the id is not on screen. */
  answer(choiceId: string): AnswerOutcome {
    const trial = this.current;
    if (!trial) throw new Error('No active trial');
    if (!trial.choices.includes(choiceId)) throw new Error(`Choice ${choiceId} is not on screen`);

    const latencyMs = Math.max(0, this.now() - trial.startedAt);

    if (choiceId === trial.targetId) {
      const independent = trial.errors === 0 && trial.promptLevel === 0;
      const result: TrialResult = independent ? 'independent' : 'prompted';
      const start = this.startLevelFor(trial.targetId);
      if (trial.errors === 0) {
        // Right at the help level the trial started with: fade one step.
        this.startLevels.set(trial.targetId, clampLevel(start - 1));
      } else {
        // Needed more help: next time start one step below the level that
        // finally worked, never at the model step and never with no help.
        this.startLevels.set(
          trial.targetId,
          clampLevel(Math.min(MAX_START_LEVEL, Math.max(1, trial.promptLevel - 1)))
        );
      }
      this.streakCount = independent ? this.streakCount + 1 : 0;
      const done = { ...trial, choices: [...trial.choices] };
      this.current = null;
      return { result, correct: true, trial: done, promptLevel: trial.promptLevel, streak: this.streakCount, latencyMs };
    }

    // Wrong tap: raise help one level and make the next try easier.
    this.streakCount = 0;
    const errors = trial.errors + 1;
    const level = clampLevel(trial.promptLevel + 1);
    let choices = trial.choices.filter((id) => id !== choiceId);
    if (level >= 2) {
      // Two choices: the target and one remaining distractor.
      const others = choices.filter((id) => id !== trial.targetId);
      choices = this.shuffle([trial.targetId, ...others.slice(0, 1)]);
      if (choices.length < 2) choices = this.shuffle([trial.targetId, choiceId]);
    } else if (choices.length < MIN_FIELD) {
      choices = this.shuffle([trial.targetId, choiceId]);
    }

    const picked = this.getCard(choiceId);
    const target = this.getCard(trial.targetId);
    const explanation = errors === 1 && picked && target ? LearningEngine.explain(picked, target) : undefined;

    this.current = {
      ...trial,
      choices,
      errors,
      promptLevel: level,
      highlightTarget: level >= 2,
      model: level >= 3,
    };
    return {
      result: 'error',
      correct: false,
      explanation,
      trial: this.currentTrial as Trial,
      promptLevel: level,
      streak: 0,
      latencyMs,
    };
  }

  /**
   * One short spoken contrast: "That's a cup. A cup is for drinking. Here is the ball."
   * People are named only; the app never states facts about real family members.
   */
  static explain(picked: LearningCard, target: LearningCard): string {
    return `${LearningEngine.describe(picked)} Here ${target.plural ? 'are' : 'is'} ${LearningEngine.targetName(target)}.`;
  }

  /**
   * What the app says about one card: "That's a cup. A cup is for drinking."
   * Also used for the live preview on the photo-upload form.
   */
  static describe(card: LearningCard): string {
    const parts = [`${LearningEngine.thatIs(card)}.`];
    const fact = card.category === 'person' ? '' : LearningEngine.normalizeFact(card, card.fact ?? '');
    if (fact) parts.push(fact);
    return parts.join(' ');
  }

  /**
   * Turn a caregiver's short answer into one clean sentence:
   *   "for drinking"   -> "A cup is for drinking."
   *   "to carry books" -> "A backpack is to carry books."
   *   "goes on feet"   -> "Goes on feet."
   * Full sentences are kept as written (first letter capitalised, end mark added).
   */
  static normalizeFact(card: Pick<LearningCard, 'label' | 'plural'>, raw: string): string {
    let t = raw.replace(/\s+/g, ' ').trim().slice(0, MAX_FACT_LENGTH);
    if (!t) return '';
    if (/^(for|to|used for|used to)\b/i.test(t)) {
      const name = LearningEngine.lower(card.label);
      const subject = card.plural
        ? LearningEngine.capital(name)
        : `${/^[aeiou]/i.test(name) ? 'An' : 'A'} ${name}`;
      t = `${subject} ${card.plural ? 'are' : 'is'} ${t.charAt(0).toLowerCase()}${t.slice(1)}`;
    }
    return LearningEngine.sentence(LearningEngine.capital(t));
  }

  /** Spoken prompt for a trial: "Find Mom." / "Find the cup." */
  static prompt(target: LearningCard): string {
    return `Find ${LearningEngine.targetName(target)}.`;
  }

  /** Praise naming the item, so praise also teaches the word. */
  static praise(target: LearningCard, result: TrialResult): string {
    const name = target.category === 'person' ? target.label : LearningEngine.lower(target.label);
    return result === 'independent' ? `Yes! ${LearningEngine.capital(name)}.` : `That's it. ${LearningEngine.capital(name)}.`;
  }

  /** Model step: "This is Mom. Tap Mom." */
  static model(target: LearningCard): string {
    const name = LearningEngine.targetName(target);
    return `This is ${name}. Tap ${name}.`;
  }

  private static thatIs(card: LearningCard): string {
    if (card.category === 'person') return `That's ${card.label}`;
    const name = LearningEngine.lower(card.label);
    if (card.plural) return `Those are ${name}`;
    return `That's ${/^[aeiou]/i.test(name) ? 'an' : 'a'} ${name}`;
  }

  private static targetName(card: LearningCard): string {
    return card.category === 'person' ? card.label : `the ${LearningEngine.lower(card.label)}`;
  }

  private static lower(s: string): string {
    return s.trim().toLowerCase();
  }

  private static capital(s: string): string {
    return s ? s.charAt(0).toUpperCase() + s.slice(1) : s;
  }

  private static sentence(s: string): string {
    const t = s.trim();
    return /[.!?]$/.test(t) ? t : `${t}.`;
  }

  private fieldSizeFor(level: PromptLevel): number {
    const max = Math.min(this.baseField, this.cards.length);
    if (level >= 2) return Math.min(2, max);
    if (level === 1) return Math.max(MIN_FIELD, max - 1);
    return Math.max(MIN_FIELD, max);
  }

  /** Random target, never the same item three trials running, and not the last one when avoidable. */
  private pickTarget(): LearningCard {
    const last = this.recentTargets.at(-1);
    const pool = this.cards.length > 1 ? this.cards.filter((c) => c.id !== last) : this.cards;
    // Weight items that still need help so practice goes where it is needed.
    const weights = pool.map((c) => 1 + this.startLevelFor(c.id));
    const total = weights.reduce((a, b) => a + b, 0);
    let r = this.random() * total;
    for (let i = 0; i < pool.length; i++) {
      r -= weights[i];
      if (r < 0) return pool[i];
    }
    return pool[pool.length - 1];
  }

  private shuffle<T>(items: T[]): T[] {
    const a = [...items];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(this.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
}
