import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { AccessibilityManager } from '../utils/accessibility-manager.js';
import { ProgressManager } from '../utils/progress-manager.js';
import { CustomImagesManager } from '../utils/custom-images-manager.js';
import { PremiumManager } from '../utils/premium-manager.js';
import { LearningEngine, type LearningCard, type Trial, type TrialResult } from '../utils/learning-engine.js';
import { LearningSettingsManager, type LearningSettings } from '../utils/learning-settings.js';
import { TrialStore } from '../utils/trial-store.js';
import { objectFact } from '../utils/card-attributes.js';
import { resolveRouterPath } from '../router';
import { photo } from '../utils/photos';

type PuzzleMode = 'family' | 'objects';
type FeedbackKind = 'correct' | 'wrong';

const IMAGE_FALLBACK = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200"%3E%3Crect width="320" height="200" fill="%23dfe8f1"/%3E%3Ccircle cx="160" cy="75" r="38" fill="%2389a0b7"/%3E%3Cpath d="M78 190c10-50 52-75 82-75s72 25 82 75" fill="%2389a0b7"/%3E%3C/svg%3E';

/** How long feedback stays on screen before the next step, in ms. */
const CORRECT_PAUSE = 1600;
/** Long enough for the spoken explanation ("That's Mom. Here is Grandad.") to finish. */
const WRONG_PAUSE = 2200;

interface PuzzleCard {
  id: string;
  label: string;
  imageUrl: string;
  isCustom?: boolean;
  /** Spoken after a wrong pick of this card. Objects only; people are named, never described. */
  fact?: string;
  plural?: boolean;
}

@customElement('app-family-puzzle')
export class AppFamilyPuzzle extends LitElement {
  @state() private mode: PuzzleMode = 'family';
  @state() private trial: Trial | null = null;
  @state() private feedback: { cardId: string; kind: FeedbackKind } | null = null;
  @state() private explanation = '';
  @state() private celebrate = false;
  @state() private independentCount = 0;
  @state() private promptedCount = 0;
  @state() private customFamilyCards: PuzzleCard[] = [];
  @state() private customObjectCards: PuzzleCard[] = [];
  @state() private routineStep = 0;

  private accessibilityManager = AccessibilityManager.getInstance();
  private progressManager = ProgressManager.getInstance();
  private customImagesManager = CustomImagesManager.getInstance();
  private premiumManager = PremiumManager.getInstance();
  private learningSettings = LearningSettingsManager.getInstance();
  private trialStore = TrialStore.getInstance();
  private settings: LearningSettings = this.learningSettings.get();
  private engines: Record<PuzzleMode, LearningEngine> = this.createEngines();
  private busy = false;
  private timers: number[] = [];
  private unsubscribeSettings?: () => void;

  private readonly FAMILY_CATEGORY = 'family';
  private readonly OBJECTS_CATEGORY = 'objects';
  private readonly routineSteps = ['Look at the plan', 'Choose an activity', 'Take a short break', 'All done'];

  private readonly familyCards: PuzzleCard[] = [
    { id: 'mom', label: 'Mom', imageUrl: photo('photo-1544717305-2782549b5136') },
    { id: 'dad', label: 'Dad', imageUrl: photo('photo-1508214751196-bcfd4ca60f91') },
    { id: 'brother', label: 'Brother', imageUrl: photo('photo-1503454537195-1dcabb73ffb9') },
    { id: 'dog', label: 'Dog', imageUrl: photo('photo-1552053831-71594a27632d') },
    { id: 'grandad', label: 'Grandad', imageUrl: photo('grandad') },
  ];

  private readonly objectCards: PuzzleCard[] = [
    { id: 'cup', label: 'Cup', imageUrl: photo('photo-1513558161293-cdaf765ed2fd') },
    { id: 'shoes', label: 'Shoes', imageUrl: photo('photo-1542291026-7eec264c27ff') },
    { id: 'toothbrush', label: 'Toothbrush', imageUrl: photo('photo-1609840114035-3c981b782dfe') },
    { id: 'ball', label: 'Ball', imageUrl: photo('photo-1518611012118-696072aa579a') },
    { id: 'headphones', label: 'Headphones', imageUrl: photo('photo-1505740420928-5e560c06d30e') },
    { id: 'backpack', label: 'Backpack', imageUrl: photo('photo-1553062407-98eeb64c6a62') },
  ].map((card) => ({ ...card, ...objectFact(card.id) }));

  static styles = css`
    :host {
      display: block;
      min-height: 100vh;
      background: #f6f8fb;
      color: #243041;
    }

    .shell {
      max-width: 1180px;
      margin: 0 auto;
      padding: 1.25rem;
    }

    .topbar {
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 1rem;
      align-items: end;
      margin-bottom: 1rem;
    }

    h1 {
      margin: 0;
      color: #243041;
      font-size: 2rem;
      line-height: 1.1;
    }

    .subtitle {
      margin: 0.35rem 0 0;
      color: #596779;
      font-size: 1rem;
    }

    .reset-button,
    .mode-button,
    .safety-button,
    .prompt-button,
    .puzzle-card {
      border: 0;
      border-radius: 0.5rem;
      cursor: pointer;
      font-weight: 900;
      box-shadow: 0 2px 8px rgba(25, 35, 50, 0.12);
    }

    .reset-button {
      min-height: 48px;
      padding: 0.7rem 1rem;
      background: #e8edf3;
      color: #243041;
    }

    .safety-strip {
      display: grid;
      grid-template-columns: repeat(5, minmax(0, 1fr));
      gap: 0.55rem;
      margin-bottom: 1rem;
    }

    .safety-button {
      min-height: 52px;
      color: #ffffff;
      font-size: 1rem;
    }

    .help { background: #c0392b; }
    .break { background: #1f7a8c; }
    .again { background: #7a4fb0; }
    .done { background: #2e7d32; }
    .stop { background: #9d1c1c; }

    .session-card {
      background: #ffffff;
      border: 1px solid #d8e0ea;
      border-radius: 0.5rem;
      padding: 1rem;
      box-shadow: 0 6px 18px rgba(30, 42, 58, 0.08);
    }

    .mode-tabs {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 0.6rem;
      margin-bottom: 1rem;
    }

    .mode-button {
      min-height: 56px;
      background: #eef3f8;
      color: #243041;
      border: 2px solid transparent;
      font-size: 1rem;
    }

    .mode-button.active {
      background: #243041;
      color: #ffffff;
      border-color: #87c5d8;
    }

    .prompt-row {
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 1rem;
      align-items: center;
      margin-bottom: 0.75rem;
      padding: 0.85rem;
      background: #edf7f4;
      border-left: 6px solid #2e8f74;
      border-radius: 0.5rem;
    }

    .prompt {
      color: #1f463b;
      font-size: 1.4rem;
      font-weight: 900;
    }

    .prompt-button {
      min-height: 48px;
      padding: 0.7rem 1rem;
      background: #2e8f74;
      color: #ffffff;
    }

    /* Explanation after a wrong pick: calm, neutral, never red. */
    .explanation {
      min-height: 1.6rem;
      margin: 0 0 0.75rem;
      color: #3d4b5c;
      font-size: 1.1rem;
      font-weight: 700;
    }

    .score {
      margin: 0 0 1rem;
      color: #596779;
      font-size: 0.95rem;
      font-weight: 700;
    }

    .add-photos-link {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      margin-bottom: 1rem;
      padding: 0.6rem 1rem;
      border-radius: 0.5rem;
      background: #edf7f4;
      color: #1f463b;
      font-weight: 800;
      text-decoration: none;
      border: 2px dashed #2e8f74;
    }

    .custom-badge {
      display: inline-block;
      margin-left: 0.4rem;
      padding: 0.1rem 0.4rem;
      border-radius: 0.3rem;
      background: #2e8f74;
      color: #fff;
      font-size: 0.7rem;
      font-weight: 900;
      vertical-align: middle;
    }

    /* Few, large choices: start with 2-3 so each picture is easy to see. */
    .puzzle-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(170px, 280px));
      justify-content: center;
      gap: 1rem;
    }

    .empty-state {
      padding: 1.5rem;
      text-align: center;
      color: #526070;
      font-weight: 700;
    }

    .routine-session {
      margin-bottom: 1rem;
      padding: 1rem;
      border: 1px solid #d8e0ea;
      border-radius: 0.5rem;
      background: #ffffff;
    }

    .routine-title {
      margin: 0 0 0.75rem;
      font-size: 1.2rem;
      color: #243041;
    }

    .routine-steps {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 0.6rem;
    }

    .routine-step {
      min-height: 72px;
      border: 2px solid #c9d4e1;
      border-radius: 0.5rem;
      background: #f8fafc;
      color: #243041;
      cursor: pointer;
      font-weight: 900;
    }

    .routine-step.current { border-color: #1f7a8c; background: #dceff4; }
    .routine-step.complete { border-color: #2e8f74; background: #edf7f4; color: #1f463b; }
    .routine-locked { margin-bottom: 1rem; padding: 1rem; border-radius: 0.5rem; background: #f8fafc; border: 1px solid #d8e0ea; color: #526070; font-weight: 700; }

    .puzzle-card {
      position: relative;
      display: grid;
      grid-template-rows: 180px auto;
      min-height: 230px;
      padding: 0;
      overflow: hidden;
      border: 4px solid #d8e0ea;
      background: #ffffff;
      text-align: center;
      transition: opacity 0.2s ease, border-color 0.2s ease;
    }

    .puzzle-card:focus-visible {
      outline: 4px solid rgba(36, 48, 65, 0.35);
      outline-offset: 2px;
    }

    .puzzle-card img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      background: #dfe8f1;
    }

    .card-copy {
      display: grid;
      place-items: center;
      min-height: 50px;
      padding: 0.6rem;
    }

    .label {
      color: #243041;
      font-size: 1.3rem;
      font-weight: 900;
      line-height: 1.15;
    }

    /* Right answer: the only green state. */
    .puzzle-card.correct {
      border-color: #2e8f74;
      box-shadow: 0 0 0 6px rgba(46, 143, 116, 0.22);
    }

    .puzzle-card.correct::after {
      content: '✓';
      position: absolute;
      top: 0.5rem;
      right: 0.6rem;
      width: 2.4rem;
      height: 2.4rem;
      border-radius: 50%;
      background: #2e8f74;
      color: #fff;
      font-size: 1.5rem;
      line-height: 2.4rem;
    }

    /* Wrong pick: neutral grey, no red, no X. */
    .puzzle-card.wrong {
      border-color: #9aa5b1;
      border-style: dashed;
      opacity: 0.55;
    }

    /* Help steps 2-3: the target is shown before he taps. */
    .puzzle-card.hint,
    .puzzle-card.model {
      border-color: #1f7a8c;
      animation: hint-pulse 1.2s ease-in-out infinite;
    }

    .puzzle-card.model {
      border-width: 6px;
    }

    @keyframes hint-pulse {
      0%, 100% { box-shadow: 0 0 0 0 rgba(31, 122, 140, 0.45); }
      50% { box-shadow: 0 0 0 10px rgba(31, 122, 140, 0); }
    }

    .puzzle-card.celebrate {
      animation: celebrate-pop 0.6s ease-out;
    }

    @keyframes celebrate-pop {
      0% { transform: scale(1); }
      40% { transform: scale(1.06); }
      100% { transform: scale(1); }
    }

    /* Respect the app's reduce-motion setting and the device setting. */
    :host-context(.prefers-reduced-motion) .puzzle-card.hint,
    :host-context(.prefers-reduced-motion) .puzzle-card.model,
    :host-context(.prefers-reduced-motion) .puzzle-card.celebrate {
      animation: none;
      box-shadow: 0 0 0 6px rgba(31, 122, 140, 0.3);
    }

    @media (prefers-reduced-motion: reduce) {
      .puzzle-card.hint,
      .puzzle-card.model,
      .puzzle-card.celebrate {
        animation: none;
        box-shadow: 0 0 0 6px rgba(31, 122, 140, 0.3);
      }
    }

    @media (max-width: 760px) {
      .topbar,
      .prompt-row {
        grid-template-columns: 1fr;
      }

      .safety-strip {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .routine-steps {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .puzzle-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      h1 {
        font-size: 1.55rem;
      }
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    this.loadCustomImages();
    this.unsubscribeSettings = this.learningSettings.subscribe((s) => {
      this.settings = s;
      this.engines.family.setFieldSize(s.startingChoices);
      this.engines.objects.setFieldSize(s.startingChoices);
    });
    this.startTrial();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.clearTimers();
    this.unsubscribeSettings?.();
  }

  private createEngines(): Record<PuzzleMode, LearningEngine> {
    const fieldSize = LearningSettingsManager.getInstance().get().startingChoices;
    return {
      family: new LearningEngine({ fieldSize }),
      objects: new LearningEngine({ fieldSize }),
    };
  }

  private loadCustomImages(): void {
    this.customFamilyCards = this.customImagesManager
      .getImagesByCategory(this.FAMILY_CATEGORY)
      .map((img) => ({ id: `custom-${img.id}`, label: img.name, imageUrl: img.dataUrl, isCustom: true }));
    this.customObjectCards = this.customImagesManager
      .getImagesByCategory(this.OBJECTS_CATEGORY)
      .map((img) => ({
        id: `custom-${img.id}`,
        label: img.name,
        imageUrl: img.dataUrl,
        isCustom: true,
        fact: img.fact,
        plural: img.plural,
      }));
    this.engines.family.setCards(this.cardsFor('family').map((c) => this.toLearningCard(c, 'family')));
    this.engines.objects.setCards(this.cardsFor('objects').map((c) => this.toLearningCard(c, 'objects')));
  }

  private cardsFor(mode: PuzzleMode): PuzzleCard[] {
    return mode === 'family'
      ? [...this.familyCards, ...this.customFamilyCards]
      : [...this.objectCards, ...this.customObjectCards];
  }

  private toLearningCard(card: PuzzleCard, mode: PuzzleMode): LearningCard {
    return {
      id: card.id,
      label: card.label,
      // Family mode includes pets ("Dog"); they are named like people, never described.
      category: mode === 'family' ? 'person' : 'object',
      fact: mode === 'objects' ? card.fact : undefined,
      plural: mode === 'objects' ? card.plural : undefined,
    };
  }

  private get engine(): LearningEngine {
    return this.engines[this.mode];
  }

  private cardById(id: string): PuzzleCard | undefined {
    return this.cardsFor(this.mode).find((c) => c.id === id);
  }

  private learningCard(id: string): LearningCard | undefined {
    return this.engine.getCard(id);
  }

  private speak(text: string): void {
    this.accessibilityManager.speakNow(text, 0.9);
  }

  private later(fn: () => void, ms: number): void {
    this.timers.push(window.setTimeout(fn, ms));
  }

  private clearTimers(): void {
    this.timers.forEach((t) => window.clearTimeout(t));
    this.timers = [];
  }

  private useImageFallback(event: Event): void {
    const image = event.currentTarget as HTMLImageElement;
    if (image.src !== IMAGE_FALLBACK) image.src = IMAGE_FALLBACK;
  }

  private startTrial(): void {
    this.clearTimers();
    this.busy = false;
    this.feedback = null;
    this.explanation = '';
    this.celebrate = false;
    this.trial = this.engine.nextTrial();
    this.speakCurrentPrompt();
  }

  private speakCurrentPrompt(): void {
    const target = this.trial ? this.learningCard(this.trial.targetId) : undefined;
    if (!target || !this.trial) return;
    this.speak(this.trial.model ? LearningEngine.model(target) : LearningEngine.prompt(target));
  }

  private setMode(mode: PuzzleMode): void {
    if (mode === this.mode) return;
    this.mode = mode;
    this.startTrial();
  }

  private chooseCard(card: PuzzleCard): void {
    if (this.busy || !this.trial) return;
    const trial = this.trial;
    const target = this.learningCard(trial.targetId);
    const chosen = this.learningCard(card.id);
    if (!target || !chosen) return;

    const outcome = this.engine.answer(card.id);
    this.recordTrial(trial, target, chosen, outcome.result, outcome.promptLevel, outcome.latencyMs);
    this.busy = true;

    if (outcome.correct) {
      // Game answers never go into the sentence strip: that strip is his voice, not a quiz log.
      this.feedback = { cardId: card.id, kind: 'correct' };
      this.explanation = '';
      if (outcome.result === 'independent') this.independentCount += 1;
      else this.promptedCount += 1;

      const milestone = outcome.result === 'independent' && outcome.streak > 0 && outcome.streak % 5 === 0;
      this.speak(milestone ? `${LearningEngine.praise(target, outcome.result)} Five in a row!` : LearningEngine.praise(target, outcome.result));
      this.reward(milestone);
      this.later(() => this.startTrial(), milestone ? CORRECT_PAUSE + 800 : CORRECT_PAUSE);
      return;
    }

    // Wrong pick: calm, neutral, then the next try is easier.
    this.feedback = { cardId: card.id, kind: 'wrong' };
    const next = outcome.trial;
    const explain = this.settings.explainWhy && outcome.explanation ? outcome.explanation : '';
    this.explanation = explain;

    if (next.model) {
      this.speak(LearningEngine.model(target));
    } else if (explain) {
      this.speak(explain);
    } else {
      this.speak(LearningEngine.prompt(target));
    }

    this.later(() => {
      this.trial = next;
      this.feedback = null;
      this.busy = false;
    }, WRONG_PAUSE);
  }

  private reward(milestone: boolean): void {
    const a11y = this.accessibilityManager.getSettings();
    if (this.settings.rewardStyle === 'sound' || milestone) {
      this.accessibilityManager.playSound('success'); // respects the "Enable sounds" setting
    }
    const motionOk = a11y.enableAnimations && !a11y.enableReducedMotion;
    if (motionOk && (this.settings.rewardStyle === 'animation' || milestone)) {
      this.celebrate = true;
    }
  }

  private recordTrial(
    trial: Trial,
    target: LearningCard,
    chosen: LearningCard,
    result: TrialResult,
    promptLevel: Trial['promptLevel'],
    latencyMs: number,
  ): void {
    void this.trialStore.add({
      game: this.mode === 'family' ? 'puzzle-family' : 'puzzle-objects',
      targetId: target.id,
      targetLabel: target.label,
      chosenId: chosen.id,
      chosenLabel: chosen.label,
      result,
      promptLevel,
      fieldSize: trial.choices.length,
      latencyMs,
      at: Date.now(),
    });
    const detail = result === 'independent'
      ? 'Right on his own'
      : result === 'prompted'
        ? 'Right with help'
        : `Picked ${chosen.label}`;
    this.progressManager.log('activity', `Puzzle: ${target.label}`, detail);
  }

  private resetActivity(): void {
    this.engines = this.createEngines();
    this.loadCustomImages();
    this.independentCount = 0;
    this.promptedCount = 0;
    this.routineStep = 0;
    this.speak('Puzzle reset.');
    this.clearTimers();
    this.later(() => this.startTrial(), 700);
  }

  private selectRoutineStep(index: number): void {
    this.routineStep = index;
    const step = this.routineSteps[index];
    this.progressManager.log('activity', 'Routine session', step);
    this.speak(step);
  }

  private renderCard(card: PuzzleCard) {
    const trial = this.trial;
    const isTarget = trial?.targetId === card.id;
    const fb = this.feedback?.cardId === card.id ? this.feedback.kind : null;
    // After a wrong pick the target glows while "Here is X" is spoken; from help
    // step 2 it glows before he taps.
    const pointingAfterError = this.feedback?.kind === 'wrong' && isTarget;
    const showHint = !!trial && isTarget && !trial.model && fb !== 'correct'
      && (trial.highlightTarget || pointingAfterError);
    const showModel = !!trial && isTarget && trial.model && fb !== 'correct';
    // Labels stay hidden during a question so he matches the picture, not the word;
    // they appear on the right answer and during the model step.
    const showLabel = fb === 'correct' || showModel;
    const classes = [
      'puzzle-card',
      fb ?? '',
      showHint ? 'hint' : '',
      showModel ? 'model' : '',
      fb === 'correct' && this.celebrate ? 'celebrate' : '',
    ].filter(Boolean).join(' ');

    return html`
      <button
        class=${classes}
        data-testid="puzzle-card"
        data-card-id=${card.id}
        aria-label=${card.label}
        @click=${() => this.chooseCard(card)}
      >
        <img src=${card.imageUrl} alt="" @error=${this.useImageFallback} />
        <div class="card-copy">
          ${showLabel
            ? html`<div class="label">${card.label}${card.isCustom ? html`<span class="custom-badge">Cayden's</span>` : ''}</div>`
            : card.isCustom ? html`<span class="custom-badge">Cayden's</span>` : ''}
        </div>
      </button>
    `;
  }

  private renderGame() {
    const trial = this.trial;
    if (!trial) {
      return html`<div class="empty-state">Add at least two pictures to play this puzzle.</div>`;
    }
    const target = this.learningCard(trial.targetId);
    const choices = trial.choices
      .map((id) => this.cardById(id))
      .filter((c): c is PuzzleCard => !!c);

    return html`
      <div class="prompt-row">
        <div class="prompt" data-testid="puzzle-prompt">Find ${target?.label ?? ''}</div>
        <button class="prompt-button" @click=${() => this.speakCurrentPrompt()}>Say Again</button>
      </div>
      <p class="explanation" data-testid="puzzle-feedback" aria-live="polite">${this.explanation}</p>
      <div class="puzzle-grid">
        ${choices.map((card) => this.renderCard(card))}
      </div>
    `;
  }

  render() {
    const canUseLearningSessions = this.premiumManager.canAddAdditionalTabs();
    const customCategory = this.mode === 'family' ? this.FAMILY_CATEGORY : this.OBJECTS_CATEGORY;
    const addPhotosLabel = this.mode === 'family' ? "Add Cayden's real family photos" : "Add Cayden's real object photos";
    return html`
      <div class="shell">
        <div class="topbar">
          <div>
            <h1>Picture Puzzles</h1>
            <p class="subtitle">Listen for the prompt, then pick the matching picture.</p>
          </div>
          <button class="reset-button" @click=${this.resetActivity}>Reset</button>
        </div>

        <a class="add-photos-link" href="${resolveRouterPath('custom-images')}?category=${customCategory}">📸 ${addPhotosLabel}</a>

        <div class="safety-strip">
          <button class="safety-button help" @click=${() => this.speak('Help please.')}>Help</button>
          <button class="safety-button break" @click=${() => this.speak('I need a break.')}>Break</button>
          <button class="safety-button again" @click=${() => this.speakCurrentPrompt()}>Again</button>
          <button class="safety-button done" @click=${() => this.speak('All done.')}>All Done</button>
          <button class="safety-button stop" @click=${() => this.speak('Stop.')}>Stop</button>
        </div>

        ${canUseLearningSessions ? html`
          <section class="routine-session" aria-label="Visual routine session">
            <h2 class="routine-title">Visual Routine</h2>
            <div class="routine-steps">
              ${this.routineSteps.map((step, index) => html`
                <button
                  class="routine-step ${index < this.routineStep ? 'complete' : ''} ${index === this.routineStep ? 'current' : ''}"
                  @click=${() => this.selectRoutineStep(index)}
                >${index < this.routineStep ? 'Done: ' : ''}${step}</button>
              `)}
            </div>
          </section>
        ` : html`
          <div class="routine-locked">All Access adds visual routine sessions for home, therapy, and school practice.</div>
        `}

        <section class="session-card" aria-label="Picture puzzle">
          <div class="mode-tabs">
            <button class="mode-button ${this.mode === 'family' ? 'active' : ''}" @click=${() => this.setMode('family')}>
              Family
            </button>
            <button class="mode-button ${this.mode === 'objects' ? 'active' : ''}" @click=${() => this.setMode('objects')}>
              Objects
            </button>
          </div>

          <p class="score" data-testid="puzzle-score">
            On his own: ${this.independentCount} · With help: ${this.promptedCount}
          </p>

          ${this.renderGame()}
        </section>
      </div>
    `;
  }
}
