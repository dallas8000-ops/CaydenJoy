import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

interface FoodItem {
  id: string;
  name: string;
  emoji: string;
}

@customElement('app-foods-enhanced')
export class AppFoodsEnhanced extends LitElement {
  @state() foods: FoodItem[] = [
    { id: 'chicken', name: 'Chicken', emoji: '🍗' },
    { id: 'noodles', name: 'Noodles', emoji: '🍜' },
    { id: 'rice', name: 'Rice', emoji: '🍚' },
    { id: 'cereal', name: 'Cereal', emoji: '🥣' },
    { id: 'bread', name: 'Bread', emoji: '🍞' },
    { id: 'potatoes', name: 'Potatoes', emoji: '🥔' },
    { id: 'donut', name: 'Donut', emoji: '🍩' },
    { id: 'candy', name: 'Candy', emoji: '🍬' },
    { id: 'juice', name: 'Juice', emoji: '🧃' },
    { id: 'water', name: 'Water', emoji: '💧' },
    { id: 'apple', name: 'Apple', emoji: '🍎' },
    { id: 'banana', name: 'Banana', emoji: '🍌' }
  ];

  @state() selectedFood: FoodItem | null = null;

  static styles = css`
    :host {
      display: block;
      padding: 2rem;
    }

    .container {
      max-width: 800px;
      margin: 0 auto;
    }

    h1 {
      text-align: center;
      color: #6C5CE7;
      margin-bottom: 2rem;
      font-size: 2rem;
    }

    .selected-food {
      text-align: center;
      padding: 2rem;
      background: linear-gradient(135deg, #6C5CE7 0%, #5F3DC4 100%);
      color: white;
      border-radius: 1rem;
      margin-bottom: 2rem;
      min-height: 120px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
    }

    .selected-emoji {
      font-size: 4rem;
    }

    .selected-name {
      font-size: 1.5rem;
      font-weight: bold;
    }

    .food-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
      gap: 1rem;
      margin-bottom: 2rem;
    }

    .food-button {
      padding: 1.5rem;
      border: 3px solid #ddd;
      background: white;
      border-radius: 0.75rem;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      transition: all 0.3s;
      font-size: 1rem;
      font-weight: bold;
    }

    .food-button:hover {
      transform: scale(1.05);
      border-color: #6C5CE7;
      box-shadow: 0 4px 12px rgba(108, 92, 231, 0.2);
    }

    .food-button:active {
      transform: scale(0.95);
    }

    .food-emoji {
      font-size: 2.5rem;
      line-height: 1;
    }

    .food-name {
      font-size: 0.875rem;
      color: #333;
      text-align: center;
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
      .food-grid {
        grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
        gap: 0.75rem;
      }

      .food-button {
        padding: 1rem;
      }

      .food-emoji {
        font-size: 2rem;
      }

      .selected-emoji {
        font-size: 3rem;
      }
    }
  `;

  private selectFood(food: FoodItem) {
    this.selectedFood = food;
    // Play text-to-speech
    const utterance = new SpeechSynthesisUtterance(food.name);
    utterance.rate = 1.0;
    utterance.pitch = 1.2;
    window.speechSynthesis.speak(utterance);
  }

  private clearSelection() {
    this.selectedFood = null;
    window.speechSynthesis.cancel();
  }

  render() {
    return html`
      <div class="container">
        <h1>Foods</h1>

        ${this.selectedFood ? html`
          <div class="selected-food">
            <div class="selected-emoji">${this.selectedFood.emoji}</div>
            <div class="selected-name">${this.selectedFood.name}</div>
          </div>
        ` : html`
          <div class="selected-food">
            <p>Tap a food to select it</p>
          </div>
        `}

        <div class="food-grid">
          ${this.foods.map(food => html`
            <button 
              class="food-button"
              @click=${() => this.selectFood(food)}
            >
              <div class="food-emoji">${food.emoji}</div>
              <div class="food-name">${food.name}</div>
            </button>
          `)}
        </div>

        ${this.selectedFood ? html`
          <button class="clear-btn" @click=${this.clearSelection}>
            Clear Selection
          </button>
        ` : ''}
      </div>
    `;
  }
}
