import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { AccessibilityManager } from '../utils/accessibility-manager.js';
import { CustomImagesManager } from '../utils/custom-images-manager.js';
import { SentenceBuilder } from '../utils/sentence-builder.js';
import { resolveRouterPath } from '../router';

interface QuickButton {
  id: string;
  label: string;
  emoji: string;
  color: string;
}

interface QuickPhoto {
  id: string;
  label: string;
  imageUrl: string;
}

@customElement('app-home-enhanced')
export class AppHomeEnhanced extends LitElement {
  private accessibilityManager = AccessibilityManager.getInstance();
  private customImagesManager = CustomImagesManager.getInstance();
  private sentenceBuilder = SentenceBuilder.getInstance();
  private readonly CUSTOM_CATEGORY = 'quick';

  @state() buttons: QuickButton[] = [
    { id: 'yes', label: 'YES', emoji: '✅', color: '#00B894' },
    { id: 'no', label: 'NO', emoji: '❌', color: '#E17055' },
    { id: 'stop', label: 'STOP', emoji: '🛑', color: '#D63031' },
    { id: 'food', label: 'FOOD', emoji: '🍽️', color: '#FDCB6E' },
    { id: 'tv', label: 'TV', emoji: '📺', color: '#0984E3' }
  ];

  @state() quickPhotos: QuickPhoto[] = [];

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

    .add-photos-link {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      margin: 0 auto 1.5rem;
      padding: 0.6rem 1rem;
      border-radius: 0.5rem;
      background: #edf7f4;
      color: #1f463b;
      font-weight: 800;
      text-decoration: none;
      border: 2px dashed #2e8f74;
      justify-content: center;
    }

    .quick-photos-section {
      margin-bottom: 2rem;
    }

    .section-title {
      color: #6C5CE7;
      font-size: 1.2rem;
      font-weight: 900;
      margin-bottom: 0.75rem;
    }

    .quick-photo-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 0.9rem;
    }

    .quick-photo-button {
      display: grid;
      grid-template-rows: 130px auto;
      min-height: 200px;
      padding: 0;
      overflow: hidden;
      border: 3px solid #e0d8f5;
      border-radius: 0.75rem;
      background: #fff;
      cursor: pointer;
      text-align: left;
      box-shadow: 0 3px 12px rgba(30, 42, 58, 0.1);
    }

    .quick-photo-button img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      background: #dfe8f1;
    }

    .quick-photo-name {
      padding: 0.7rem;
      font-size: 1.05rem;
      font-weight: 900;
      color: #243041;
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

  connectedCallback() {
    super.connectedCallback();
    this.loadQuickPhotos();
  }

  private loadQuickPhotos(): void {
    this.quickPhotos = this.customImagesManager
      .getImagesByCategory(this.CUSTOM_CATEGORY)
      .map((img) => ({ id: img.id, label: img.name, imageUrl: img.dataUrl }));
  }

  private handleButtonClick(button: QuickButton) {
    this.accessibilityManager.speakNow(button.label, 1);
    this.sentenceBuilder.addWord({ label: button.label });
  }

  private handlePhotoClick(photo: QuickPhoto) {
    this.accessibilityManager.speakNow(photo.label, 1);
    this.sentenceBuilder.addWord({ label: photo.label, imageUrl: photo.imageUrl });
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

        <a class="add-photos-link" href="${resolveRouterPath('custom-images')}?category=${this.CUSTOM_CATEGORY}">📸 Add Cayden's own quick-tap photos</a>

        ${this.quickPhotos.length > 0 ? html`
          <div class="quick-photos-section">
            <div class="section-title">Cayden's Quick Photos</div>
            <div class="quick-photo-grid">
              ${this.quickPhotos.map((photo) => html`
                <button class="quick-photo-button" @click=${() => this.handlePhotoClick(photo)}>
                  <img src=${photo.imageUrl} alt=${photo.label} />
                  <div class="quick-photo-name">${photo.label}</div>
                </button>
              `)}
            </div>
          </div>
        ` : ''}

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
