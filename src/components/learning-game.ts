/**
 * <learning-game>
 *
 * The "Play" mode shared by Colors, Numbers and Places. It runs the same
 * teaching rules as Picture Puzzle through LearningEngine:
 *   - a few large choices, shuffled every trial, labels hidden until answered
 *   - right answer: short praise that names the item, green check
 *   - wrong answer: neutral grey, one short reason, the target glows,
 *     then the help ladder (fewer choices -> highlight -> model)
 *   - Numbers: a wrong answer starts a count-along on the target's dots
 *   - every answer saved to TrialStore and the progress log
 *   - never writes to the sentence strip (that strip is Cayden's voice)
 *
 * Usage: <learning-game game="colors" .cards=${cards}></learning-game>
 */

import { LitElement, html, css, svg, type PropertyValues } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { AccessibilityManager } from '../utils/accessibility-manager.js';
import { ProgressManager } from '../utils/progress-manager.js';
import { LearningEngine, type LearningCard, type Trial, type TrialResult } from '../utils/learning-engine.js';
import { LearningSettingsManager, type LearningSettings } from '../utils/learning-settings.js';
import { TrialStore, type LearningGame as GameId } from '../utils/trial-store.js';

export interface GameCard extends LearningCard {
  /** Photo for places and uploads. */
  imageUrl?: string;
  /** Solid color for the Colors game. */
  swatch?: string;
  isCustom?: boolean;
}

const CORRECT_PAUSE = 1600;
const WRONG_PAUSE = 2200;
const COUNT_STEP = 750;

const GAME_LABELS: Record<GameId, string> = {
  'puzzle-family': 'Puzzle',
  'puzzle-objects': 'Puzzle',
  colors: 'Colors game',
  numbers: 'Numbers game',
  places: 'Places game',
};

@customElement('learning-game')
export class LearningGameElement extends LitElement {
  @property({ type: String }) game: GameId = 'colors';
  @property({ attribute: false }) cards: GameCard[] = [];

  @state() private trial: Trial | null = null;
  @state() private feedback: { cardId: string; kind: 'correct' | 'wrong' } | null = null;
  @state() private explanation = '';
  @state() private celebrate = false;
  @state() private countLit = 0;
  @state() private independentCount = 0;
  @state() private promptedCount = 0;

  private accessibility = AccessibilityManager.getInstance();
  private progress = ProgressManager.getInstance();
  private trialStore = TrialStore.getInstance();
  private learningSettings = LearningSettingsManager.getInstance();
  private settings: LearningSettings = this.learningSettings.get();
  private engine = new LearningEngine({ fieldSize: this.settings.startingChoices });
  private busy = false;
  private timers: number[] = [];
  private unsubscribe?: () => void;

  static styles = css`
    :host { display: block; }

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
    .prompt { color: #1f463b; font-size: 1.4rem; font-weight: 900; }
    .prompt-button {
      min-height: 48px; padding: 0.7rem 1rem; border: 0; border-radius: 0.5rem;
      background: #2e8f74; color: #fff; font-weight: 900; cursor: pointer;
    }
    .explanation { min-height: 1.6rem; margin: 0 0 0.75rem; color: #3d4b5c; font-size: 1.1rem; font-weight: 700; }
    .score { margin: 0 0 0.75rem; color: #596779; font-size: 0.95rem; font-weight: 700; }
    .empty-state { padding: 1.5rem; text-align: center; color: #526070; font-weight: 700; }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(170px, 280px));
      justify-content: center;
      gap: 1rem;
    }

    .card {
      position: relative;
      display: grid;
      grid-template-rows: 180px auto;
      min-height: 230px;
      padding: 0;
      overflow: hidden;
      border: 4px solid #d8e0ea;
      border-radius: 0.5rem;
      background: #fff;
      cursor: pointer;
      text-align: center;
      font: inherit;
      box-shadow: 0 2px 8px rgba(25, 35, 50, 0.12);
      transition: opacity 0.2s ease, border-color 0.2s ease;
    }
    .card:focus-visible { outline: 4px solid rgba(36, 48, 65, 0.35); outline-offset: 2px; }
    .card img { width: 100%; height: 100%; object-fit: cover; background: #dfe8f1; }
    .swatch { width: 100%; height: 100%; border-bottom: 1px solid rgba(36, 48, 65, 0.14); }
    .dots { width: 100%; height: 100%; background: #f8fafc; }
    .copy { display: grid; place-items: center; min-height: 50px; padding: 0.6rem; }
    .label { color: #243041; font-size: 1.3rem; font-weight: 900; }

    .card.correct { border-color: #2e8f74; box-shadow: 0 0 0 6px rgba(46, 143, 116, 0.22); }
    .card.correct::after {
      content: '✓'; position: absolute; top: 0.5rem; right: 0.6rem;
      width: 2.4rem; height: 2.4rem; border-radius: 50%;
      background: #2e8f74; color: #fff; font-size: 1.5rem; line-height: 2.4rem;
    }
    .card.wrong { border-color: #9aa5b1; border-style: dashed; opacity: 0.55; }
    .card.hint, .card.model { border-color: #1f7a8c; animation: hint-pulse 1.2s ease-in-out infinite; }
    .card.model { border-width: 6px; }
    .card.celebrate { animation: pop 0.6s ease-out; }

    @keyframes hint-pulse {
      0%, 100% { box-shadow: 0 0 0 0 rgba(31, 122, 140, 0.45); }
      50% { box-shadow: 0 0 0 10px rgba(31, 122, 140, 0); }
    }
    @keyframes pop { 0% { transform: scale(1); } 40% { transform: scale(1.06); } 100% { transform: scale(1); } }

    :host-context(.prefers-reduced-motion) .card.hint,
    :host-context(.prefers-reduced-motion) .card.model,
    :host-context(.prefers-reduced-motion) .card.celebrate { animation: none; box-shadow: 0 0 0 6px rgba(31, 122, 140, 0.3); }
    @media (prefers-reduced-motion: reduce) {
      .card.hint, .card.model, .card.celebrate { animation: none; box-shadow: 0 0 0 6px rgba(31, 122, 140, 0.3); }
    }
    @media (max-width: 760px) {
      .prompt-row { grid-template-columns: 1fr; }
      .grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    }
  `;

  connectedCallback(): void {
    super.connectedCallback();
    this.unsubscribe = this.learningSettings.subscribe((s) => {
      this.settings = s;
      this.engine.setFieldSize(s.startingChoices);
    });
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.clearTimers();
    this.unsubscribe?.();
  }

  protected willUpdate(changed: PropertyValues<this>): void {
    if (changed.has('cards')) {
      this.engine.setCards(this.cards);
      if (!this.trial || !this.cards.some((c) => c.id === this.trial?.targetId)) {
        this.startTrial();
      }
    }
  }

  private card(id: string): GameCard | undefined {
    return this.cards.find((c) => c.id === id);
  }

  private speak(text: string): void {
    this.accessibility.speakNow(text, 0.9);
  }

  private later(fn: () => void, ms: number): void {
    this.timers.push(window.setTimeout(fn, ms));
  }

  private clearTimers(): void {
    this.timers.forEach((t) => window.clearTimeout(t));
    this.timers = [];
  }

  private startTrial(): void {
    this.clearTimers();
    this.busy = false;
    this.feedback = null;
    this.explanation = '';
    this.celebrate = false;
    this.countLit = 0;
    this.trial = this.engine.nextTrial();
    this.speakPrompt();
  }

  private speakPrompt(): void {
    const target = this.trial ? this.card(this.trial.targetId) : undefined;
    if (!target || !this.trial) return;
    this.speak(this.trial.model ? LearningEngine.model(target) : LearningEngine.prompt(target));
  }

  private choose(card: GameCard): void {
    if (this.busy || !this.trial) return;
    const trial = this.trial;
    const target = this.card(trial.targetId);
    if (!target) return;

    const outcome = this.engine.answer(card.id);
    this.record(trial, target, card, outcome.result, outcome.promptLevel, outcome.latencyMs);
    this.busy = true;

    if (outcome.correct) {
      this.feedback = { cardId: card.id, kind: 'correct' };
      this.explanation = '';
      if (outcome.result === 'independent') this.independentCount += 1;
      else this.promptedCount += 1;
      const milestone = outcome.result === 'independent' && outcome.streak > 0 && outcome.streak % 5 === 0;
      const praise = LearningEngine.praise(target, outcome.result);
      this.speak(milestone ? `${praise} Five in a row!` : praise);
      this.reward(milestone);
      this.later(() => this.startTrial(), milestone ? CORRECT_PAUSE + 800 : CORRECT_PAUSE);
      return;
    }

    this.feedback = { cardId: card.id, kind: 'wrong' };
    const next = outcome.trial;
    const explain = this.settings.explainWhy && outcome.explanation ? outcome.explanation : '';
    this.explanation = explain;

    let pause = WRONG_PAUSE;
    if (next.model) {
      this.speak(LearningEngine.model(target));
    } else if (explain) {
      this.speak(explain);
      if (target.count) {
        // Count-along: light the target's dots one at a time.
        this.countLit = 0;
        const delay = 1200;
        for (let i = 1; i <= target.count; i++) this.later(() => { this.countLit = i; }, delay + i * COUNT_STEP);
        pause = Math.max(WRONG_PAUSE, delay + (target.count + 1) * COUNT_STEP);
      }
    } else {
      this.speak(LearningEngine.prompt(target));
    }

    this.later(() => {
      this.trial = next;
      this.feedback = null;
      this.countLit = 0;
      this.busy = false;
    }, pause);
  }

  private reward(milestone: boolean): void {
    const a11y = this.accessibility.getSettings();
    if (this.settings.rewardStyle === 'sound' || milestone) this.accessibility.playSound('success');
    if (a11y.enableAnimations && !a11y.enableReducedMotion && (this.settings.rewardStyle === 'animation' || milestone)) {
      this.celebrate = true;
    }
  }

  private record(
    trial: Trial,
    target: GameCard,
    chosen: GameCard,
    result: TrialResult,
    promptLevel: Trial['promptLevel'],
    latencyMs: number,
  ): void {
    void this.trialStore.add({
      game: this.game,
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
    const detail = result === 'independent' ? 'Right on his own' : result === 'prompted' ? 'Right with help' : `Picked ${chosen.label}`;
    this.progress.log('activity', `${GAME_LABELS[this.game]}: ${target.label}`, detail);
  }

  /**
   * Quantity-accurate dots, up to 5 per row. Every card uses the same frame
   * and dot size, so "more" is never confused with "bigger". Lit dots show
   * the count-along.
   */
  private renderDots(count: number, lit: number) {
    const perRow = 5;
    const cell = 46;
    const maxCount = Math.max(...this.cards.map((c) => c.count ?? 0), count);
    const frameRows = Math.max(1, Math.ceil(maxCount / perRow));
    const frameW = perRow * cell;
    const frameH = frameRows * cell;
    const rows = Math.ceil(count / perRow);
    const offsetY = (frameH - rows * cell) / 2;
    const dots = Array.from({ length: count }, (_, i) => {
      const row = Math.floor(i / perRow);
      const inRow = Math.min(perRow, count - row * perRow);
      const offsetX = (frameW - inRow * cell) / 2;
      const x = offsetX + (i % perRow) * cell + cell / 2;
      const y = offsetY + row * cell + cell / 2;
      const on = i < lit;
      return svg`<circle cx=${x} cy=${y} r="16" fill=${on ? '#2e8f74' : '#243041'}></circle>`;
    });
    return html`<svg class="dots" viewBox="-12 -12 ${frameW + 24} ${frameH + 24}" role="img" aria-hidden="true">${dots}</svg>`;
  }

  private renderVisual(card: GameCard, isTarget: boolean) {
    if (card.count) return this.renderDots(card.count, isTarget ? this.countLit : 0);
    if (card.swatch) return html`<div class="swatch" style="background:${card.swatch}"></div>`;
    return html`<img src=${card.imageUrl ?? ''} alt="" />`;
  }

  private renderCard(card: GameCard) {
    const trial = this.trial;
    const isTarget = trial?.targetId === card.id;
    const fb = this.feedback?.cardId === card.id ? this.feedback.kind : null;
    const pointingAfterError = this.feedback?.kind === 'wrong' && isTarget;
    const showHint = !!trial && isTarget && !trial.model && fb !== 'correct' && (trial.highlightTarget || pointingAfterError);
    const showModel = !!trial && isTarget && trial.model && fb !== 'correct';
    const showLabel = fb === 'correct' || showModel;
    const classes = ['card', fb ?? '', showHint ? 'hint' : '', showModel ? 'model' : '', fb === 'correct' && this.celebrate ? 'celebrate' : '']
      .filter(Boolean)
      .join(' ');
    return html`
      <button class=${classes} data-testid="game-card" data-card-id=${card.id} aria-label=${card.label} @click=${() => this.choose(card)}>
        ${this.renderVisual(card, isTarget)}
        <div class="copy">${showLabel ? html`<div class="label">${card.label}</div>` : ''}</div>
      </button>
    `;
  }

  render() {
    const trial = this.trial;
    if (!trial) return html`<div class="empty-state">This game needs at least two pictures.</div>`;
    const target = this.card(trial.targetId);
    const promptText = target ? LearningEngine.prompt(target).replace(/\.$/, '') : '';
    const choices = trial.choices.map((id) => this.card(id)).filter((c): c is GameCard => !!c);
    return html`
      <p class="score" data-testid="game-score">On his own: ${this.independentCount} · With help: ${this.promptedCount}</p>
      <div class="prompt-row">
        <div class="prompt" data-testid="game-prompt">${promptText}${target?.count ? html` (${target.count})` : ''}</div>
        <button class="prompt-button" @click=${() => this.speakPrompt()}>Say Again</button>
      </div>
      <p class="explanation" data-testid="game-feedback" aria-live="polite">${this.explanation}</p>
      <div class="grid">${choices.map((c) => this.renderCard(c))}</div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'learning-game': LearningGameElement;
  }
}
