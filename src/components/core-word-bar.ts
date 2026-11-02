import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { AccessibilityManager } from '../utils/accessibility-manager.js';
import { SentenceBuilder, type SentenceWord, type ModelingState } from '../utils/sentence-builder.js';
import { CORE_WORDS, type CoreWord } from '../utils/core-words.js';
import { speakWord } from '../utils/voice-clips.js';

/** How long a caregiver holds the Model button to turn modeling on (a quick tap by Cayden does nothing). */
const MODEL_HOLD_MS = 700;
const MODELED_GLOW_MS = 1400;

/**
 * Persistent, fixed-position core-vocabulary bar mounted once in app-index.ts
 * (not per-page) so word positions never move as the user navigates - see
 * core-words.ts for why that matters. Combines with fringe-vocabulary taps
 * on content pages via the shared SentenceBuilder to build real sentences
 * instead of speaking one isolated word/phrase per tap.
 */
@customElement('core-word-bar')
export class CoreWordBar extends LitElement {
  @state() sentence: SentenceWord[] = [];
  @state() modeling: ModelingState = { on: false, modeled: [] };
  @state() private modeledWordId = '';
  @state() private holdHint = false;

  private accessibilityManager = AccessibilityManager.getInstance();
  private sentenceBuilder = SentenceBuilder.getInstance();
  private unsubscribe: (() => void) | null = null;
  private unsubscribeModeling: (() => void) | null = null;
  private holdTimer = 0;
  private glowTimer = 0;
  private hintTimer = 0;
  private holdFired = false;

  static override readonly styles = css`
    :host {
      display: block;
      position: fixed;
      left: 0;
      right: 0;
      top: 72px;
      z-index: 900;
      background: #fff;
      border-bottom: 3px solid #d8e0ea;
      box-shadow: 0 4px 10px rgba(30, 42, 58, 0.08);
    }

    .sentence-strip {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      min-height: 46px;
      padding: 0.35rem 0.6rem;
      background: #f6f8fb;
      border-bottom: 1px solid #e3e8ef;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
    }

    .sentence-words {
      display: flex;
      align-items: center;
      gap: 0.35rem;
      flex: 1;
      overflow-x: auto;
      min-width: 0;
    }

    .sentence-placeholder {
      color: #9aa7b8;
      font-weight: 700;
      font-size: 0.85rem;
      white-space: nowrap;
    }

    .sentence-chip {
      background: #243041;
      color: #fff;
      padding: 0.3rem 0.7rem;
      border-radius: 999px;
      font-weight: 800;
      font-size: 0.85rem;
      white-space: nowrap;
      flex-shrink: 0;
    }

    .sentence-controls {
      display: flex;
      gap: 0.35rem;
      flex-shrink: 0;
    }

    .ctrl-btn {
      min-height: 38px;
      min-width: 38px;
      border: 0;
      border-radius: 0.4rem;
      cursor: pointer;
      font-weight: 800;
      font-size: 1rem;
      padding: 0 0.6rem;
    }

    .ctrl-btn:disabled {
      opacity: 0.4;
      cursor: default;
    }

    .speak-btn { background: #2e8f74; color: #fff; }
    .back-btn, .clear-btn { background: #e8edf3; color: #243041; }

    .core-words {
      display: flex;
      gap: 0.4rem;
      overflow-x: auto;
      padding: 0.45rem 0.6rem 0.5rem;
      -webkit-overflow-scrolling: touch;
    }

    .core-word-btn {
      flex: 0 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.15rem;
      min-width: 62px;
      min-height: 58px;
      padding: 0.3rem 0.45rem;
      border-radius: 0.5rem;
      border: 2px solid rgba(0, 0, 0, 0.14);
      cursor: pointer;
      font-weight: 900;
      font-size: 0.72rem;
      color: #20252b;
    }

    .core-word-btn:hover, .core-word-btn:focus-visible {
      outline: 3px solid rgba(36, 48, 65, 0.25);
    }

    .core-word-btn img {
      width: 26px;
      height: 26px;
      object-fit: contain;
    }

    .cat-pronoun { background: #fff6b3; border-color: #e8d24a; }
    .cat-verb { background: #d3f3e0; border-color: #57c98e; }
    .cat-descriptor { background: #cfe6fb; border-color: #5aa6e0; }
    .cat-preposition { background: #ffe3c2; border-color: #f0a850; }
    .cat-social { background: #ffd6e8; border-color: #ea7fb0; }
    .cat-negation { background: #ffd0d0; border-color: #e06060; }

    .model-btn {
      background: #eef0f4;
      color: #243041;
      touch-action: manipulation;
      user-select: none;
      -webkit-user-select: none;
    }
    .model-btn.on { background: #f2a516; color: #2b1d00; }

    .sentence-strip.modeling { background: #fff4dc; border-bottom-color: #f2c66d; }
    .modeling-label {
      color: #7a4b00;
      font-weight: 900;
      font-size: 0.85rem;
      white-space: nowrap;
    }
    .modeled-chip {
      background: #fff;
      color: #7a4b00;
      border: 2px dashed #e0a030;
      padding: 0.25rem 0.6rem;
      border-radius: 999px;
      font-weight: 800;
      font-size: 0.85rem;
      white-space: nowrap;
      flex-shrink: 0;
    }
    .hold-hint {
      color: #7a4b00;
      font-size: 0.8rem;
      font-weight: 800;
      white-space: nowrap;
    }

    .core-word-btn.modeled {
      outline: 4px solid #f2a516;
      outline-offset: 1px;
      animation: model-pulse 0.7s ease-in-out 2;
    }
    @keyframes model-pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.08); }
    }
    :host-context(.prefers-reduced-motion) .core-word-btn.modeled { animation: none; }
    @media (prefers-reduced-motion: reduce) {
      .core-word-btn.modeled { animation: none; }
    }

    @media (max-width: 900px) {
      :host { top: 76px; }
    }

    @media (max-width: 640px) {
      :host { top: 68px; }
      .core-word-btn { min-width: 54px; min-height: 50px; font-size: 0.65rem; }
      .core-word-btn img { width: 21px; height: 21px; }
    }
  `;

  connectedCallback(): void {
    super.connectedCallback();
    this.unsubscribe = this.sentenceBuilder.subscribe((words) => {
      this.sentence = words;
    });
    this.unsubscribeModeling = this.sentenceBuilder.subscribeModeling((state) => {
      this.modeling = state;
    });
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.unsubscribe?.();
    this.unsubscribeModeling?.();
    window.clearTimeout(this.holdTimer);
    window.clearTimeout(this.glowTimer);
    window.clearTimeout(this.hintTimer);
  }

  private tapCoreWord(word: CoreWord): void {
    // A family recording of this word plays when there is one; otherwise the device voice.
    speakWord(word.label);
    const added = this.sentenceBuilder.addWord({ label: word.label });
    if (!added && this.modeling.on) {
      // Modeling: light up the button the caregiver tapped so he sees where the word lives.
      this.modeledWordId = word.id;
      window.clearTimeout(this.glowTimer);
      this.glowTimer = window.setTimeout(() => { this.modeledWordId = ''; }, MODELED_GLOW_MS);
    }
  }

  // Modeling is turned ON by holding the button (so a quick tap from Cayden does nothing)
  // and turned OFF by a single tap.
  private onModelDown(e: PointerEvent): void {
    if (e.button !== undefined && e.button > 0) return;
    this.holdFired = false;
    window.clearTimeout(this.holdTimer);
    if (this.modeling.on) return;
    this.holdTimer = window.setTimeout(() => {
      this.holdFired = true;
      this.holdHint = false;
      this.sentenceBuilder.setModeling(true);
    }, MODEL_HOLD_MS);
  }

  private onModelUp(): void {
    window.clearTimeout(this.holdTimer);
  }

  private onModelClick(): void {
    if (this.holdFired) {
      this.holdFired = false;
      return;
    }
    if (this.modeling.on) {
      this.sentenceBuilder.setModeling(false);
      return;
    }
    // Short tap while off: show how to turn it on, briefly.
    this.holdHint = true;
    window.clearTimeout(this.hintTimer);
    this.hintTimer = window.setTimeout(() => { this.holdHint = false; }, 2500);
  }

  private onModelKey(e: KeyboardEvent): void {
    // Keyboard and switch users: Enter/Space toggles directly.
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      this.holdFired = false;
      this.sentenceBuilder.setModeling(!this.modeling.on);
    }
  }

  private speakSentence(): void {
    const text = this.sentenceBuilder.getSentenceText();
    if (!text) return;
    this.accessibilityManager.speakNow(text, 0.9);
  }

  private removeLast(): void {
    this.sentenceBuilder.removeLast();
  }

  private clearSentence(): void {
    this.sentenceBuilder.clear();
  }

  render() {
    const hasWords = this.sentence.length > 0;
    const modeling = this.modeling.on;
    return html`
      <div class="sentence-strip ${modeling ? 'modeling' : ''}" data-testid="sentence-strip">
        <div class="sentence-words">
          ${modeling
            ? html`
                <span class="modeling-label" data-testid="modeling-label">👀 Modeling, not added:</span>
                ${this.modeling.modeled.map((w) => html`<span class="modeled-chip" data-testid="modeled-chip">${w}</span>`)}
              `
            : this.holdHint
              ? html`<span class="hold-hint" role="status" data-testid="hold-hint">Caregivers: hold "Model" to show words without adding them</span>`
              : hasWords
                ? this.sentence.map((word) => html`<span class="sentence-chip" data-testid="sentence-chip">${word.label}</span>`)
                : html`<span class="sentence-placeholder">Tap words below to build a sentence</span>`}
        </div>
        <div class="sentence-controls">
          <button
            class="ctrl-btn model-btn ${modeling ? 'on' : ''}"
            data-testid="model-toggle"
            aria-pressed=${modeling ? 'true' : 'false'}
            aria-label=${modeling ? 'Modeling on. Tap to stop modeling' : 'Model words. Hold to start'}
            title=${modeling ? 'Tap to stop modeling' : 'Hold to start modeling'}
            @pointerdown=${this.onModelDown}
            @pointerup=${this.onModelUp}
            @pointerleave=${this.onModelUp}
            @pointercancel=${this.onModelUp}
            @contextmenu=${(e: Event) => e.preventDefault()}
            @click=${this.onModelClick}
            @keydown=${this.onModelKey}
          >${modeling ? '👀 Stop' : '👀 Model'}</button>
          <button class="ctrl-btn back-btn" @click=${this.removeLast} ?disabled=${!hasWords} aria-label="Remove last word">⌫</button>
          <button class="ctrl-btn clear-btn" @click=${this.clearSentence} ?disabled=${!hasWords} aria-label="Clear sentence">✕</button>
          <button class="ctrl-btn speak-btn" @click=${this.speakSentence} ?disabled=${!hasWords} aria-label="Speak sentence">🔊 Speak</button>
        </div>
      </div>
      <div class="core-words">
        ${CORE_WORDS.map((word) => html`
          <button
            class="core-word-btn cat-${word.category} ${this.modeledWordId === word.id ? 'modeled' : ''}"
            data-testid="core-word"
            data-word-id=${word.id}
            @click=${() => this.tapCoreWord(word)}
          >
            ${word.iconUrl ? html`<img src=${word.iconUrl} alt="" />` : ''}
            <span>${word.label}</span>
          </button>
        `)}
      </div>
    `;
  }
}
