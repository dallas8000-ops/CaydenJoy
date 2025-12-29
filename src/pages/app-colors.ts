import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

interface ColorItem {
  id: string;
  name: string;
  hex: string;
  emoji: string;
}

@customElement('app-colors')
export class AppColors extends LitElement {
  @state() colors: ColorItem[] = [
    { id: 'red', name: 'Red', hex: '#E17055', emoji: '🔴' },
    { id: 'blue', name: 'Blue', hex: '#0984E3', emoji: '🔵' },
    { id: 'green', name: 'Green', hex: '#00B894', emoji: '🟢' },
    { id: 'yellow', name: 'Yellow', hex: '#FDCB6E', emoji: '🟡' },
    { id: 'purple', name: 'Purple', hex: '#6C5CE7', emoji: '🟣' },
    { id: 'pink', name: 'Pink', hex: '#FD79A8', emoji: '🌸' },
    { id: 'orange', name: 'Orange', hex: '#FF9F43', emoji: '🟠' },
    { id: 'brown', name: 'Brown', hex: '#8B4513', emoji: '🟤' },
    { id: 'black', name: 'Black', hex: '#2D3436', emoji: '⚫' },
    { id: 'white', name: 'White', hex: '#F8F9FA', emoji: '⚪' }
  ];

  @state() selectedColor: ColorItem | null = null;

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

    .selected-color {
      text-align: center;
      padding: 2rem;
      background: var(--selected-color, #F0E8F8);
      color: ${this.selectedColor && this.shouldUseDarkText(this.selectedColor.hex) ? '#000' : '#fff'};
      border-radius: 1rem;
      margin-bottom: 2rem;
      min-height: 150px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      border: 4px solid #6C5CE7;
    }

    .selected-emoji {
      font-size: 4rem;
    }

    .selected-name {
      font-size: 1.75rem;
      font-weight: bold;
    }

    .selected-hex {
      font-size: 0.875rem;
      opacity: 0.8;
    }

    .color-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
      gap: 1rem;
      margin-bottom: 2rem;
    }

    .color-button {
      padding: 1.5rem;
      border: 3px solid white;
      background: var(--button-color);
      border-radius: 0.75rem;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.75rem;
      transition: all 0.3s;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      min-height: 120px;
      justify-content: center;
    }

    .color-button:hover {
      transform: scale(1.08);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }

    .color-button:active {
      transform: scale(0.95);
    }

    .color-emoji {
      font-size: 2.5rem;
      line-height: 1;
    }

    .color-name {
      font-size: 1rem;
      font-weight: bold;
      color: white;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
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
      .color-grid {
        grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
        gap: 0.75rem;
      }

      .color-button {
        padding: 1rem;
        min-height: 100px;
      }

      .color-emoji {
        font-size: 2rem;
      }

      .selected-emoji {
        font-size: 3rem;
      }

      h1 {
        font-size: 1.5rem;
      }
    }
  `;

  private selectColor(color: ColorItem) {
    this.selectedColor = color;
    const utterance = new SpeechSynthesisUtterance(color.name);
    utterance.rate = 1.0;
    utterance.pitch = 1.2;
    window.speechSynthesis.speak(utterance);
  }

  private clearSelection() {
    this.selectedColor = null;
    window.speechSynthesis.cancel();
  }

  private shouldUseDarkText(hex: string): boolean {
    const rgb = parseInt(hex.slice(1), 16);
    const r = (rgb >> 16) & 255;
    const g = (rgb >> 8) & 255;
    const b = rgb & 255;
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 128;
  }

  render() {
    const selectedColor = this.selectedColor;
    const bgColor = selectedColor ? selectedColor.hex : '#F0E8F8';
    const textColor = selectedColor && this.shouldUseDarkText(selectedColor.hex) ? '#000' : '#fff';

    return html`
      <div class="container">
        <h1>Colors</h1>

        <div class="selected-color" style="background-color: ${bgColor}; color: ${textColor};">
          ${this.selectedColor ? html`
            <div class="selected-emoji">${this.selectedColor.emoji}</div>
            <div class="selected-name">${this.selectedColor.name}</div>
            <div class="selected-hex">${this.selectedColor.hex}</div>
          ` : html`
            <p>Tap a color to select it</p>
          `}
        </div>

        <div class="color-grid">
          ${this.colors.map(color => html`
            <button 
              class="color-button"
              style="--button-color: ${color.hex}"
              @click=${() => this.selectColor(color)}
            >
              <div class="color-emoji">${color.emoji}</div>
              <div class="color-name">${color.name}</div>
            </button>
          `)}
        </div>

        ${this.selectedColor ? html`
          <button class="clear-btn" @click=${this.clearSelection}>
            Clear Selection
          </button>
        ` : ''}
      </div>
    `;
  }
}
