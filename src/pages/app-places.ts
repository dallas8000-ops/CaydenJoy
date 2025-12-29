import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

interface PlaceItem {
  id: string;
  name: string;
  emoji: string;
  color: string;
}

@customElement('app-places')
export class AppPlaces extends LitElement {
  @state() places: PlaceItem[] = [
    { id: 'home', name: 'Home', emoji: '🏠', color: '#FF6B6B' },
    { id: 'school', name: 'School', emoji: '🏫', color: '#4ECDC4' },
    { id: 'park', name: 'Park', emoji: '🌳', color: '#45B7D1' },
    { id: 'store', name: 'Store', emoji: '🏪', color: '#F7DC6F' },
    { id: 'hospital', name: 'Hospital', emoji: '🏥', color: '#BB8FCE' },
    { id: 'beach', name: 'Beach', emoji: '🏖️', color: '#85C1E2' },
    { id: 'restaurant', name: 'Restaurant', emoji: '🍽️', color: '#F8B88B' },
    { id: 'library', name: 'Library', emoji: '📚', color: '#CD7672' },
    { id: 'zoo', name: 'Zoo', emoji: '🦁', color: '#95E1D3' },
    { id: 'playground', name: 'Playground', emoji: '🎡', color: '#C7CEEA' }
  ];

  @state() selectedPlace: PlaceItem | null = null;

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

    .selected-place {
      text-align: center;
      padding: 2rem;
      background: var(--place-color, #F0E8F8);
      color: white;
      border-radius: 1rem;
      margin-bottom: 2rem;
      min-height: 150px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
    }

    .selected-emoji {
      font-size: 4rem;
      line-height: 1;
    }

    .selected-name {
      font-size: 1.75rem;
      font-weight: bold;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    }

    .place-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      gap: 1rem;
      margin-bottom: 2rem;
    }

    .place-button {
      padding: 1.5rem;
      border: 3px solid white;
      background: var(--place-color);
      border-radius: 0.75rem;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.75rem;
      transition: all 0.3s;
      color: white;
      font-weight: bold;
      min-height: 140px;
      justify-content: center;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    .place-button:hover {
      transform: scale(1.08);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    }

    .place-button:active {
      transform: scale(0.95);
    }

    .place-emoji {
      font-size: 2.5rem;
      line-height: 1;
    }

    .place-name {
      font-size: 0.875rem;
      text-align: center;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
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
      .place-grid {
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        gap: 0.75rem;
      }

      .place-button {
        padding: 1rem;
        min-height: 120px;
      }

      .place-emoji {
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

  private selectPlace(place: PlaceItem) {
    this.selectedPlace = place;
    const utterance = new SpeechSynthesisUtterance(place.name);
    utterance.rate = 1.0;
    utterance.pitch = 1.2;
    window.speechSynthesis.speak(utterance);
  }

  private clearSelection() {
    this.selectedPlace = null;
    window.speechSynthesis.cancel();
  }

  render() {
    const selectedColor = this.selectedPlace?.color || '#F0E8F8';

    return html`
      <div class="container">
        <h1>Places</h1>

        <div class="selected-place" style="--place-color: ${selectedColor};">
          ${this.selectedPlace ? html`
            <div class="selected-emoji">${this.selectedPlace.emoji}</div>
            <div class="selected-name">${this.selectedPlace.name}</div>
          ` : html`
            <p>Tap a place to select it</p>
          `}
        </div>

        <div class="place-grid">
          ${this.places.map(place => html`
            <button 
              class="place-button"
              style="--place-color: ${place.color}"
              @click=${() => this.selectPlace(place)}
            >
              <div class="place-emoji">${place.emoji}</div>
              <div class="place-name">${place.name}</div>
            </button>
          `)}
        </div>

        ${this.selectedPlace ? html`
          <button class="clear-btn" @click=${this.clearSelection}>
            Clear Selection
          </button>
        ` : ''}
      </div>
    `;
  }
}
