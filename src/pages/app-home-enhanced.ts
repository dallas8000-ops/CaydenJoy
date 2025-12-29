import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

interface QuickButton {
  id: string;
  label: string;
  emoji: string;
  color: string;
}

@customElement('app-home-enhanced')
export class AppHomeEnhanced extends LitElement {
  @state() buttons: QuickButton[] = [
    { id: 'yes', label: 'YES', emoji: '✅', color: '#00B894' },
    { id: 'no', label: 'NO', emoji: '❌', color: '#E17055' },
    { id: 'stop', label: 'STOP', emoji: '🛑', color: '#D63031' },
    { id: 'food', label: 'FOOD', emoji: '🍽️', color: '#FDCB6E' },
    { id: 'tv', label: 'TV', emoji: '📺', color: '#0984E3' }
  ];

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
      margin-bottom: 1rem;
      font-size: 2.5rem;
    }

    .subtitle {
      text-align: center;
      color: #666;
      margin-bottom: 2rem;
      font-size: 1.125rem;
    }

    .buttons-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 1.5rem;
      margin-bottom: 2rem;
    }

    .quick-button {
      padding: 2rem 1.5rem;
      border: 4px solid white;
      background: var(--button-color);
      border-radius: 1rem;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      transition: all 0.3s;
      color: white;
      font-weight: bold;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    .quick-button:hover {
      transform: scale(1.08);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    }

    .quick-button:active {
      transform: scale(0.95);
    }

    .button-emoji {
      font-size: 3.5rem;
      line-height: 1;
    }

    .button-label {
      font-size: 1.5rem;
      text-align: center;
    }

    .info {
      background: #F0E8F8;
      padding: 1.5rem;
      border-radius: 1rem;
      border-left: 4px solid #6C5CE7;
      color: #333;
      font-size: 1rem;
      line-height: 1.6;
    }

    @media (max-width: 640px) {
      .buttons-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
      }

      .quick-button {
        padding: 1.5rem 1rem;
      }

      .button-emoji {
        font-size: 2.5rem;
      }

      .button-label {
        font-size: 1.125rem;
      }

      h1 {
        font-size: 1.75rem;
      }
    }
  `;

  private handleButtonClick(button: QuickButton) {
    // Play sound/speech
    const utterance = new SpeechSynthesisUtterance(button.label);
    utterance.rate = 1.0;
    utterance.pitch = 1.2;
    utterance.volume = 1;
    window.speechSynthesis.speak(utterance);
  }

  render() {
    return html`
      <div class="container">
        <h1>Quick Communication</h1>
        <p class="subtitle">Tap a button to communicate</p>

        <div class="buttons-grid">
          ${this.buttons.map(button => html`
            <button 
              class="quick-button"
              style="--button-color: ${button.color}"
              @click=${() => this.handleButtonClick(button)}
            >
              <div class="button-emoji">${button.emoji}</div>
              <div class="button-label">${button.label}</div>
            </button>
          `)}
        </div>

        <div class="info">
          <p><strong>How to use:</strong></p>
          <ul style="margin: 0.5rem 0 0 1.5rem; padding: 0;">
            <li>✅ <strong>YES</strong> - Agree or affirmative response</li>
            <li>❌ <strong>NO</strong> - Disagree or negative response</li>
            <li>🛑 <strong>STOP</strong> - Stop current activity immediately</li>
            <li>🍽️ <strong>FOOD</strong> - Request food or eating</li>
            <li>📺 <strong>TV</strong> - Request television or watch</li>
          </ul>
        </div>
      </div>
    `;
  }
}
