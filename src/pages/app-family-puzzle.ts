import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

interface PuzzlePiece {
  id: string;
  name: string;
  emoji: string;
  x: number;
  y: number;
}

@customElement('app-family-puzzle')
export class AppFamilyPuzzle extends LitElement {
  @state() pieces: PuzzlePiece[] = [
    { id: 'mom', name: 'Mom', emoji: '👩', x: 20, y: 20 },
    { id: 'dad', name: 'Dad', emoji: '👨', x: 200, y: 20 },
    { id: 'brother', name: 'Brother', emoji: '👦', x: 380, y: 20 },
    { id: 'dog', name: 'Dog', emoji: '🐕', x: 20, y: 220 },
    { id: 'grandad', name: 'Grandad', emoji: '👴', x: 200, y: 220 }
  ];

  @state() draggedPiece: PuzzlePiece | null = null;
  @state() dragOffset = { x: 0, y: 0 };

  static styles = css`
    :host {
      display: block;
      padding: 2rem;
    }

    .container {
      max-width: 600px;
      margin: 0 auto;
    }

    h1 {
      text-align: center;
      color: #6C5CE7;
      margin-bottom: 2rem;
      font-size: 2rem;
    }

    .puzzle-board {
      position: relative;
      width: 100%;
      height: 500px;
      background: linear-gradient(135deg, #E8F4F8 0%, #F0E8F8 100%);
      border: 3px solid #6C5CE7;
      border-radius: 1rem;
      margin-bottom: 2rem;
      touch-action: none;
      overflow: hidden;
    }

    .puzzle-piece {
      position: absolute;
      width: 80px;
      height: 80px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      background: white;
      border: 2px solid #6C5CE7;
      border-radius: 0.5rem;
      cursor: grab;
      user-select: none;
      transition: box-shadow 0.2s;
      box-shadow: 0 2px 8px rgba(108, 92, 231, 0.2);
    }

    .puzzle-piece:active {
      cursor: grabbing;
      box-shadow: 0 8px 16px rgba(108, 92, 231, 0.4);
      z-index: 1000;
    }

    .puzzle-piece.dragging {
      opacity: 0.8;
      z-index: 1000;
    }

    .emoji {
      font-size: 2.5rem;
      line-height: 1;
    }

    .label {
      font-size: 0.75rem;
      font-weight: bold;
      color: #333;
      text-align: center;
    }

    .instructions {
      text-align: center;
      font-size: 1.125rem;
      color: #666;
      margin-bottom: 1rem;
    }

    .reset-btn {
      width: 100%;
      padding: 1rem;
      background: linear-gradient(135deg, #6C5CE7 0%, #5F3DC4 100%);
      color: white;
      border: none;
      border-radius: 0.5rem;
      font-size: 1.125rem;
      font-weight: bold;
      cursor: pointer;
      transition: transform 0.2s;
    }

    .reset-btn:hover {
      transform: scale(1.05);
    }

    .reset-btn:active {
      transform: scale(0.95);
    }

    @media (max-width: 640px) {
      .puzzle-board {
        height: 400px;
      }

      .puzzle-piece {
        width: 70px;
        height: 70px;
      }

      .emoji {
        font-size: 2rem;
      }
    }
  `;

  private handlePointerDown(piece: PuzzlePiece, e: PointerEvent) {
    e.preventDefault();
    this.draggedPiece = piece;
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    this.dragOffset = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  }

  private handlePointerMove(e: PointerEvent) {
    if (!this.draggedPiece) return;

    const board = this.shadowRoot?.querySelector('.puzzle-board') as HTMLElement;
    if (!board) return;

    const rect = board.getBoundingClientRect();
    let newX = e.clientX - rect.left - this.dragOffset.x;
    let newY = e.clientY - rect.top - this.dragOffset.y;

    // Keep within bounds
    newX = Math.max(0, Math.min(newX, rect.width - 80));
    newY = Math.max(0, Math.min(newY, rect.height - 80));

    this.draggedPiece.x = newX;
    this.draggedPiece.y = newY;
    this.requestUpdate();
  }

  private handlePointerUp() {
    this.draggedPiece = null;
  }

  private resetPuzzle() {
    this.pieces = [
      { id: 'mom', name: 'Mom', emoji: '👩', x: 20, y: 20 },
      { id: 'dad', name: 'Dad', emoji: '👨', x: 200, y: 20 },
      { id: 'brother', name: 'Brother', emoji: '👦', x: 380, y: 20 },
      { id: 'dog', name: 'Dog', emoji: '🐕', x: 20, y: 220 },
      { id: 'grandad', name: 'Grandad', emoji: '👴', x: 200, y: 220 }
    ];
  }

  render() {
    return html`
      <div class="container">
        <h1>Family Puzzle</h1>
        <p class="instructions">Drag the pieces to arrange your family!</p>
        
        <div 
          class="puzzle-board"
          @pointermove=${this.handlePointerMove}
          @pointerup=${this.handlePointerUp}
          @pointerleave=${this.handlePointerUp}
        >
          ${this.pieces.map(piece => html`
            <div
              class="puzzle-piece ${this.draggedPiece?.id === piece.id ? 'dragging' : ''}"
              style="left: ${piece.x}px; top: ${piece.y}px;"
              @pointerdown=${(e: PointerEvent) => this.handlePointerDown(piece, e)}
            >
              <div class="emoji">${piece.emoji}</div>
              <div class="label">${piece.name}</div>
            </div>
          `)}
        </div>

        <button class="reset-btn" @click=${this.resetPuzzle}>
          Reset Puzzle
        </button>
      </div>
    `;
  }
}
