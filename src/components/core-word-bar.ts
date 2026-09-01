import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { AccessibilityManager } from '../utils/accessibility-manager.js';
import { SentenceBuilder, type SentenceWord } from '../utils/sentence-builder.js';
import { CORE_WORDS, type CoreWord } from '../utils/core-words.js';

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

  private accessibilityManager = AccessibilityManager.getInstance();
  private sentenceBuilder = SentenceBuilder.getInstance();
  private unsubscribe: (() => void) | null = null;

  static override readonly styles = css`
    :host {
      display: block;
      position: fixed;
      left: 0;
      right: 0;
      top: 88px;
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

    @media (max-width: 900px) {
      :host { top: 112px; }
    }

    @media (max-width: 640px) {
      :host { top: 128px; }
      .core-word-btn { min-width: 54px; min-height: 50px; font-size: 0.65rem; }
      .core-word-btn img { width: 21px; height: 21px; }
    }
  `;

  connectedCallback(): void {
    super.connectedCallback();
    this.unsubscribe = this.sentenceBuilder.subscribe((words) => {
      this.sentence = words;
    });
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.unsubscribe?.();
  }

  private tapCoreWord(word: CoreWord): void {
    this.accessibilityManager.speakNow(word.label, 0.9);
    this.sentenceBuilder.addWord({ label: word.label });
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
    return html`
      <div class="sentence-strip">
        <div class="sentence-words">
          ${hasWords
            ? this.sentence.map((word) => html`<span class="sentence-chip">${word.label}</span>`)
            : html`<span class="sentence-placeholder">Tap words below to build a sentence</span>`}
        </div>
        <div class="sentence-controls">
          <button class="ctrl-btn back-btn" @click=${this.removeLast} ?disabled=${!hasWords} aria-label="Remove last word">⌫</button>
          <button class="ctrl-btn clear-btn" @click=${this.clearSentence} ?disabled=${!hasWords} aria-label="Clear sentence">✕</button>
          <button class="ctrl-btn speak-btn" @click=${this.speakSentence} ?disabled=${!hasWords} aria-label="Speak sentence">🔊 Speak</button>
        </div>
      </div>
      <div class="core-words">
        ${CORE_WORDS.map((word) => html`
          <button class="core-word-btn cat-${word.category}" @click=${() => this.tapCoreWord(word)}>
            ${word.iconUrl ? html`<img src=${word.iconUrl} alt="" />` : ''}
            <span>${word.label}</span>
          </button>
        `)}
      </div>
    `;
  }
}
