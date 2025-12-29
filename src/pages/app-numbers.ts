import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

interface NumberItem {
  id: string;
  number: number;
  dots: number;
}

@customElement('app-numbers')
export class AppNumbers extends LitElement {
  @state() numbers: NumberItem[] = Array.from({ length: 20 }, (_, i) => ({
    id: `num-${i + 1}`,
    number: i + 1,
    dots: i + 1
  }));

  @state() selectedNumber: NumberItem | null = null;

  static styles = css`
    :host {
      display: block;
      padding: 2rem;
    }

    .container {
      max-width: 900px;
      margin: 0 auto;
    }

    h1 {
      text-align: center;
      color: #6C5CE7;
      margin-bottom: 2rem;
      font-size: 2rem;
    }

    .selected-number {
      text-align: center;
      padding: 2rem;
      background: linear-gradient(135deg, #6C5CE7 0%, #5F3DC4 100%);
      color: white;
      border-radius: 1rem;
      margin-bottom: 2rem;
      min-height: 150px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
    }

    .selected-value {
      font-size: 4rem;
      font-weight: bold;
      line-height: 1;
    }

    .dot-display {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      justify-content: center;
      margin-top: 1rem;
      max-width: 200px;
    }

    .dot {
      width: 2rem;
      height: 2rem;
      background: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      color: #6C5CE7;
      font-size: 0.875rem;
    }

    .number-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
      gap: 1rem;
      margin-bottom: 2rem;
    }

    .number-button {
      padding: 1.5rem;
      border: 3px solid #6C5CE7;
      background: white;
      border-radius: 0.75rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s;
      font-size: 1.5rem;
      font-weight: bold;
      color: #6C5CE7;
      min-height: 80px;
      box-shadow: 0 2px 8px rgba(108, 92, 231, 0.2);
    }

    .number-button:hover {
      background: #F0E8F8;
      transform: scale(1.08);
      box-shadow: 0 6px 16px rgba(108, 92, 231, 0.3);
    }

    .number-button:active {
      transform: scale(0.95);
    }

    .clear-btn {
      width: 100%;
      padding: 1rem;
      background: #999;
      color: white;
      border: none;
      border-radius: 0.5rem;
      font-size: 1rem;
      font-weight: bold;
      cursor: pointer;
      transition: transform 0.2s;
    }

    .clear-btn:hover {
      background: #777;
    }

    .clear-btn:active {
      transform: scale(0.95);
    }

    @media (max-width: 640px) {
      .number-grid {
        grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
        gap: 0.75rem;
      }

      .number-button {
        padding: 1rem;
        min-height: 70px;
        font-size: 1.25rem;
      }

      .selected-value {
        font-size: 3rem;
      }

      .dot {
        width: 1.5rem;
        height: 1.5rem;
        font-size: 0.75rem;
      }

      h1 {
        font-size: 1.5rem;
      }
    }
  `;

  private selectNumber(numberItem: NumberItem) {
    this.selectedNumber = numberItem;
    const utterance = new SpeechSynthesisUtterance(numberItem.number.toString());
    utterance.rate = 1.0;
    utterance.pitch = 1.2;
    window.speechSynthesis.speak(utterance);
  }

  private clearSelection() {
    this.selectedNumber = null;
    window.speechSynthesis.cancel();
  }

  render() {
    return html`
      <div class="container">
        <h1>Numbers</h1>

        <div class="selected-number">
          ${this.selectedNumber ? html`
            <div class="selected-value">${this.selectedNumber.number}</div>
            <div class="dot-display">
              ${Array.from({ length: this.selectedNumber.dots }, (_, i) => html`
                <div class="dot">${i + 1}</div>
              `)}
            </div>
          ` : html`
            <p>Tap a number to select it</p>
          `}
        </div>

        <div class="number-grid">
          ${this.numbers.map(num => html`
            <button 
              class="number-button"
              @click=${() => this.selectNumber(num)}
            >
              ${num.number}
            </button>
          `)}
        </div>

        ${this.selectedNumber ? html`
          <button class="clear-btn" @click=${this.clearSelection}>
            Clear Selection
          </button>
        ` : ''}
      </div>
    `;
  }
}
