import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { AccessibilityManager } from '../utils/accessibility-manager.js';
import { CustomImagesManager } from '../utils/custom-images-manager.js';
import { ProgressManager } from '../utils/progress-manager.js';

type ActivityMode = 'choice' | 'match' | 'sequence' | 'puzzle';

interface ActivityCard {
  id: string;
  label: string;
  phrase: string;
  category: string;
  imageUrl: string;
}

interface RoutineStep extends ActivityCard {
  order: number;
}

@customElement('app-family-puzzle')
export class AppFamilyPuzzle extends LitElement {
  @state() private activeMode: ActivityMode = 'choice';
  @state() private selectedCard: ActivityCard | null = null;
  @state() private matchTarget: string | null = null;
  @state() private matchedIds: string[] = [];
  @state() private routine: RoutineStep[] = [];
  @state() private puzzlePieces: string[] = ['bottom-right', 'top-left', 'bottom-left', 'top-right'];
  @state() private selectedPuzzlePiece: string | null = null;
  @state() private placedPuzzlePieces: Record<string, string> = {};
  @state() private uploadedCards: ActivityCard[] = [];

  private accessibilityManager = AccessibilityManager.getInstance();
  private customImagesManager = CustomImagesManager.getInstance();
  private progressManager = ProgressManager.getInstance();

  private readonly dailyCards: ActivityCard[] = [
    {
      id: 'water',
      label: 'Water',
      phrase: 'I want water.',
      category: 'Drink',
      imageUrl: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=500&q=80',
    },
    {
      id: 'apple',
      label: 'Apple',
      phrase: 'I want an apple.',
      category: 'Food',
      imageUrl: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=500&q=80',
    },
    {
      id: 'shoes',
      label: 'Shoes',
      phrase: 'I need my shoes.',
      category: 'Clothes',
      imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80',
    },
    {
      id: 'toothbrush',
      label: 'Brush Teeth',
      phrase: 'It is time to brush teeth.',
      category: 'Routine',
      imageUrl: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=500&q=80',
    },
    {
      id: 'bathroom',
      label: 'Bathroom',
      phrase: 'I need the bathroom.',
      category: 'Need',
      imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=500&q=80',
    },
    {
      id: 'headphones',
      label: 'Headphones',
      phrase: 'I need headphones.',
      category: 'Sensory',
      imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80',
    },
  ];

  private readonly routineCards: RoutineStep[] = [
    {
      id: 'wake',
      label: 'Wake Up',
      phrase: 'Wake up.',
      category: 'Routine',
      order: 1,
      imageUrl: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=500&q=80',
    },
    {
      id: 'dress',
      label: 'Get Dressed',
      phrase: 'Get dressed.',
      category: 'Routine',
      order: 2,
      imageUrl: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=500&q=80',
    },
    {
      id: 'breakfast',
      label: 'Breakfast',
      phrase: 'Eat breakfast.',
      category: 'Routine',
      order: 3,
      imageUrl: 'https://images.unsplash.com/photo-1493770348161-369560ae357d?auto=format&fit=crop&w=500&q=80',
    },
    {
      id: 'school',
      label: 'School',
      phrase: 'Go to school.',
      category: 'Routine',
      order: 4,
      imageUrl: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=500&q=80',
    },
  ];

  static styles = css`
    :host {
      display: block;
      min-height: 100vh;
      background: #f6f8fb;
      color: #243041;
    }

    .shell {
      max-width: 1180px;
      margin: 0 auto;
      padding: 1.25rem;
    }

    .topbar {
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 1rem;
      align-items: end;
      margin-bottom: 1rem;
    }

    h1 {
      margin: 0;
      color: #243041;
      font-size: 2rem;
      line-height: 1.1;
    }

    .subtitle {
      margin: 0.35rem 0 0;
      color: #596779;
      font-size: 1rem;
    }

    .safety-strip {
      display: grid;
      grid-template-columns: repeat(5, minmax(0, 1fr));
      gap: 0.55rem;
      margin-bottom: 1rem;
    }

    .safety-button,
    .mode-button,
    .speak-button,
    .reset-button {
      border: 0;
      border-radius: 0.5rem;
      cursor: pointer;
      font-weight: 800;
      min-height: 52px;
      box-shadow: 0 2px 8px rgba(25, 35, 50, 0.12);
    }

    .safety-button {
      color: #ffffff;
      font-size: 1rem;
    }

    .help { background: #c0392b; }
    .break { background: #1f7a8c; }
    .again { background: #7a4fb0; }
    .done { background: #2e7d32; }
    .stop { background: #9d1c1c; }

    .session-card {
      background: #ffffff;
      border: 1px solid #d8e0ea;
      border-radius: 0.5rem;
      padding: 1rem;
      box-shadow: 0 6px 18px rgba(30, 42, 58, 0.08);
    }

    .mode-tabs {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 0.6rem;
      margin-bottom: 1rem;
    }

    .mode-button {
      background: #eef3f8;
      color: #243041;
      border: 2px solid transparent;
    }

    .mode-button.active {
      background: #243041;
      color: #ffffff;
      border-color: #87c5d8;
    }

    .prompt-row {
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 1rem;
      align-items: center;
      margin-bottom: 1rem;
      padding: 0.85rem;
      background: #edf7f4;
      border-radius: 0.5rem;
      border-left: 6px solid #2e8f74;
    }

    .prompt {
      font-size: 1.15rem;
      font-weight: 800;
      color: #1f463b;
    }

    .speak-button {
      background: #2e8f74;
      color: #ffffff;
      padding: 0.75rem 1rem;
    }

    .activity-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
      gap: 0.9rem;
    }

    .photo-card {
      display: grid;
      grid-template-rows: 132px auto;
      gap: 0;
      padding: 0;
      overflow: hidden;
      border: 3px solid #d8e0ea;
      border-radius: 0.5rem;
      background: #ffffff;
      cursor: pointer;
      min-height: 210px;
      text-align: left;
      box-shadow: 0 3px 10px rgba(30, 42, 58, 0.1);
    }

    .photo-card.selected,
    .photo-card.matched {
      border-color: #2e8f74;
      box-shadow: 0 0 0 4px rgba(46, 143, 116, 0.18);
    }

    .photo-card img,
    .puzzle-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      background: #dfe8f1;
    }

    .card-copy {
      padding: 0.75rem;
    }

    .label {
      font-size: 1.1rem;
      font-weight: 900;
      color: #243041;
      margin-bottom: 0.25rem;
    }

    .category {
      color: #687789;
      font-size: 0.9rem;
      font-weight: 700;
    }

    .match-layout {
      display: grid;
      grid-template-columns: minmax(180px, 0.7fr) 1.3fr;
      gap: 1rem;
    }

    .target-panel {
      background: #f8fafc;
      border: 2px dashed #9fb0c3;
      border-radius: 0.5rem;
      padding: 1rem;
      min-height: 260px;
    }

    .target-word {
      font-size: 1.8rem;
      font-weight: 900;
      color: #243041;
      margin: 1rem 0;
    }

    .sequence-list {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 0.85rem;
    }

    .sequence-card {
      position: relative;
    }

    .step-number {
      position: absolute;
      top: 0.5rem;
      left: 0.5rem;
      z-index: 1;
      width: 38px;
      height: 38px;
      border-radius: 50%;
      display: grid;
      place-items: center;
      background: #243041;
      color: #ffffff;
      font-weight: 900;
    }

    .puzzle-workspace {
      display: grid;
      grid-template-columns: minmax(260px, 420px) 1fr;
      gap: 1rem;
      align-items: start;
    }

    .puzzle-board {
      display: grid;
      grid-template-columns: repeat(2, minmax(120px, 1fr));
      gap: 0.35rem;
      padding: 0.5rem;
      background: #e8edf3;
      border: 3px solid #9fb0c3;
      border-radius: 0.5rem;
      aspect-ratio: 1;
      max-width: 420px;
      width: 100%;
    }

    .puzzle-slot {
      position: relative;
      display: grid;
      place-items: center;
      border: 3px dashed #8da0b5;
      border-radius: 0.35rem;
      background: #f8fafc;
      color: #687789;
      cursor: pointer;
      overflow: hidden;
      min-height: 120px;
      font-weight: 900;
    }

    .puzzle-slot.filled {
      border-style: solid;
      border-color: #2e8f74;
      background: #ffffff;
    }

    .puzzle-tray {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      gap: 0.75rem;
      padding: 0.75rem;
      background: #f8fafc;
      border: 1px solid #d8e0ea;
      border-radius: 0.5rem;
    }

    .tray-title {
      grid-column: 1 / -1;
      color: #243041;
      font-weight: 900;
    }

    .puzzle-piece {
      position: relative;
      border: 3px solid #d8e0ea;
      padding: 0;
      aspect-ratio: 1;
      overflow: hidden;
      border-radius: 0.5rem;
      cursor: pointer;
      background: #ffffff;
      box-shadow: 0 3px 12px rgba(30, 42, 58, 0.14);
    }

    .puzzle-piece.selected {
      border-color: #2e8f74;
      box-shadow: 0 0 0 5px rgba(46, 143, 116, 0.2);
    }

    .puzzle-piece.used {
      opacity: 0.35;
      cursor: default;
    }

    .puzzle-tile-image {
      width: 100%;
      height: 100%;
      background-image: var(--puzzle-image);
      background-size: 200% 200%;
      background-position: var(--puzzle-position);
      background-repeat: no-repeat;
    }

    .puzzle-preview {
      grid-column: 1 / -1;
      display: grid;
      grid-template-columns: 88px 1fr;
      gap: 0.75rem;
      align-items: center;
      margin-bottom: 0.75rem;
      padding: 0.75rem;
      background: #edf7f4;
      border-radius: 0.5rem;
    }

    .puzzle-preview img {
      width: 88px;
      height: 88px;
      object-fit: cover;
      border-radius: 0.4rem;
    }

    .puzzle-preview-text {
      color: #1f463b;
      font-weight: 900;
    }

    .reset-button {
      background: #e8edf3;
      color: #243041;
      padding: 0.7rem 1rem;
      margin-top: 1rem;
    }

    @media (max-width: 760px) {
      .topbar,
      .prompt-row,
      .match-layout {
        grid-template-columns: 1fr;
      }

      .safety-strip {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .mode-tabs,
      .sequence-list {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .puzzle-workspace {
        grid-template-columns: 1fr;
      }

      h1 {
        font-size: 1.55rem;
      }
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    this.loadUploadedCards();
    this.routine = [...this.routineCards];
    this.pickMatchTarget();
  }

  private get activityCards(): ActivityCard[] {
    return [...this.uploadedCards, ...this.dailyCards].slice(0, 10);
  }

  private loadUploadedCards(): void {
    const customImages = this.customImagesManager.getAllImages();
    this.uploadedCards = customImages.slice(0, 6).map((image) => ({
      id: image.id,
      label: image.name,
      phrase: `I choose ${image.name}.`,
      category: image.category || 'My Photos',
      imageUrl: image.dataUrl,
    }));
  }

  private setMode(mode: ActivityMode): void {
    this.activeMode = mode;
    this.selectedCard = null;
    if (mode === 'match') {
      this.pickMatchTarget();
    }
  }

  private speak(text: string): void {
    this.accessibilityManager.playSound('click');
    this.accessibilityManager.speakNow(text, 0.9);
  }

  private chooseCard(card: ActivityCard): void {
    this.selectedCard = card;
    this.progressManager.log('activity', `Choice: ${card.label}`, card.phrase);
    this.speak(card.phrase);
  }

  private pickMatchTarget(): void {
    const cards = this.activityCards;
    const unmatched = cards.filter((card) => !this.matchedIds.includes(card.id));
    const next = unmatched[0];
    this.matchTarget = next?.id ?? null;
  }

  private tryMatch(card: ActivityCard): void {
    if (!this.matchTarget) return;

    if (card.id === this.matchTarget) {
      this.matchedIds = [...this.matchedIds, card.id];
      this.progressManager.log('activity', `Matched: ${card.label}`, 'Matching activity');
      this.speak(`Yes. ${card.label}.`);
      this.pickMatchTarget();
    } else {
      this.speak(`Try again. Find ${this.currentMatchCard?.label ?? 'the picture'}.`);
    }
  }

  private get currentMatchCard(): ActivityCard | undefined {
    return this.activityCards.find((card) => card.id === this.matchTarget);
  }

  private moveRoutineStep(index: number): void {
    if (index === 0) {
      this.speak(this.routine[index].phrase);
      return;
    }

    const next = [...this.routine];
    const moved = next.splice(index, 1)[0];
    next.splice(index - 1, 0, moved);
    this.routine = next;
    this.progressManager.log('activity', `Routine: ${moved.label}`, moved.phrase);
    this.speak(moved.phrase);
  }

  private selectPuzzlePiece(piece: string): void {
    if (Object.values(this.placedPuzzlePieces).includes(piece)) {
      return;
    }
    this.selectedPuzzlePiece = piece;
    this.speak('Piece selected.');
  }

  private placePuzzlePiece(slot: string): void {
    if (!this.selectedPuzzlePiece) {
      this.speak('Choose a puzzle piece first.');
      return;
    }

    if (this.selectedPuzzlePiece !== slot) {
      this.speak('Try a different spot.');
      return;
    }

    this.placedPuzzlePieces = {
      ...this.placedPuzzlePieces,
      [slot]: this.selectedPuzzlePiece,
    };
    this.progressManager.log('activity', 'Puzzle piece placed', slot);
    this.selectedPuzzlePiece = null;

    if (Object.keys(this.placedPuzzlePieces).length === this.puzzleSlots.length) {
      this.speak('Puzzle finished. Great job.');
    } else {
      this.speak('Yes. That piece fits.');
    }
  }

  private resetActivity(): void {
    this.selectedCard = null;
    this.matchedIds = [];
    this.routine = [...this.routineCards];
    this.puzzlePieces = ['bottom-right', 'top-left', 'bottom-left', 'top-right'];
    this.selectedPuzzlePiece = null;
    this.placedPuzzlePieces = {};
    this.pickMatchTarget();
    this.speak('Activity reset.');
  }

  private get puzzleSlots(): string[] {
    return ['top-left', 'top-right', 'bottom-left', 'bottom-right'];
  }

  private getPuzzlePosition(piece: string): string {
    const positions: Record<string, string> = {
      'top-left': '0% 0%',
      'top-right': '100% 0%',
      'bottom-left': '0% 100%',
      'bottom-right': '100% 100%',
    };
    return positions[piece] ?? '0% 0%';
  }

  private renderPrompt() {
    const prompt = {
      choice: 'Choice activity: pick what you want or what you see.',
      match: `Matching activity: find ${this.currentMatchCard?.label ?? 'the picture'}.`,
      sequence: 'Routine activity: tap steps to hear them and move them earlier.',
      puzzle: 'Puzzle activity: choose a piece, then tap where it belongs.',
    }[this.activeMode];

    return html`
      <div class="prompt-row">
        <div class="prompt">${prompt}</div>
        <button class="speak-button" @click=${() => this.speak(prompt)}>Speak Prompt</button>
      </div>
    `;
  }

  private renderChoiceActivity() {
    return html`
      <div class="activity-grid">
        ${this.activityCards.map((card) => this.renderPhotoCard(card, () => this.chooseCard(card), this.selectedCard?.id === card.id))}
      </div>
    `;
  }

  private renderMatchActivity() {
    return html`
      <div class="match-layout">
        <div class="target-panel">
          <div class="category">Find this picture</div>
          <div class="target-word">${this.currentMatchCard?.label ?? 'All done'}</div>
          ${this.currentMatchCard ? html`
            <img class="puzzle-image" src=${this.currentMatchCard.imageUrl} alt=${this.currentMatchCard.label} />
          ` : html`<p>All matching cards are finished.</p>`}
        </div>
        <div class="activity-grid">
          ${this.activityCards.map((card) => this.renderPhotoCard(
            card,
            () => this.tryMatch(card),
            this.matchedIds.includes(card.id),
            this.matchedIds.includes(card.id)
          ))}
        </div>
      </div>
    `;
  }

  private renderSequenceActivity() {
    return html`
      <div class="sequence-list">
        ${this.routine.map((card, index) => html`
          <div class="sequence-card">
            <div class="step-number">${index + 1}</div>
            ${this.renderPhotoCard(card, () => this.moveRoutineStep(index))}
          </div>
        `)}
      </div>
    `;
  }

  private renderPuzzleActivity() {
    const puzzleImage = this.uploadedCards[0]?.imageUrl ?? this.dailyCards[1].imageUrl;
    const imageStyle = `--puzzle-image: url("${puzzleImage}")`;

    return html`
      <div class="puzzle-preview">
        <img src=${puzzleImage} alt="Completed puzzle preview" />
        <div class="puzzle-preview-text">Look at the whole picture, then put the four pieces in the board.</div>
      </div>

      <div class="puzzle-workspace">
        <div class="puzzle-board" aria-label="Puzzle board">
          ${this.puzzleSlots.map((slot) => {
            const placedPiece = this.placedPuzzlePieces[slot];
            return html`
              <button
                class="puzzle-slot ${placedPiece ? 'filled' : ''}"
                @click=${() => this.placePuzzlePiece(slot)}
                aria-label="Puzzle spot ${slot}"
              >
                ${placedPiece ? html`
                  <div
                    class="puzzle-tile-image"
                    style="${imageStyle}; --puzzle-position: ${this.getPuzzlePosition(placedPiece)}"
                  ></div>
                ` : html`Place Here`}
              </button>
            `;
          })}
        </div>

        <div class="puzzle-tray" aria-label="Puzzle pieces">
          <div class="tray-title">Pieces</div>
          ${this.puzzlePieces.map((piece) => {
            const used = Object.values(this.placedPuzzlePieces).includes(piece);
            return html`
              <button
                class="puzzle-piece ${this.selectedPuzzlePiece === piece ? 'selected' : ''} ${used ? 'used' : ''}"
                @click=${() => this.selectPuzzlePiece(piece)}
                aria-label="Puzzle piece ${piece}"
              >
                <div
                  class="puzzle-tile-image"
                  style="${imageStyle}; --puzzle-position: ${this.getPuzzlePosition(piece)}"
                ></div>
              </button>
            `;
          })}
        </div>
      </div>
    `;
  }

  private renderPhotoCard(card: ActivityCard, action: () => void, selected = false, matched = false) {
    return html`
      <button class="photo-card ${selected ? 'selected' : ''} ${matched ? 'matched' : ''}" @click=${action}>
        <img src=${card.imageUrl} alt=${card.label} />
        <div class="card-copy">
          <div class="label">${card.label}</div>
          <div class="category">${card.category}</div>
        </div>
      </button>
    `;
  }

  render() {
    return html`
      <div class="shell">
        <div class="topbar">
          <div>
            <h1>Activity Sessions</h1>
            <p class="subtitle">Photo choices, matching, routines, and puzzles with spoken support.</p>
          </div>
          <button class="reset-button" @click=${this.resetActivity}>Reset</button>
        </div>

        <div class="safety-strip">
          <button class="safety-button help" @click=${() => this.speak('Help please.')}>Help</button>
          <button class="safety-button break" @click=${() => this.speak('I need a break.')}>Break</button>
          <button class="safety-button again" @click=${() => this.speak('Again please.')}>Again</button>
          <button class="safety-button done" @click=${() => this.speak('All done.')}>All Done</button>
          <button class="safety-button stop" @click=${() => this.speak('Stop.')}>Stop</button>
        </div>

        <section class="session-card" aria-label="Activity session">
          <div class="mode-tabs">
            <button class="mode-button ${this.activeMode === 'choice' ? 'active' : ''}" @click=${() => this.setMode('choice')}>Choice</button>
            <button class="mode-button ${this.activeMode === 'match' ? 'active' : ''}" @click=${() => this.setMode('match')}>Match</button>
            <button class="mode-button ${this.activeMode === 'sequence' ? 'active' : ''}" @click=${() => this.setMode('sequence')}>Routine</button>
            <button class="mode-button ${this.activeMode === 'puzzle' ? 'active' : ''}" @click=${() => this.setMode('puzzle')}>Puzzle</button>
          </div>

          ${this.renderPrompt()}

          ${this.activeMode === 'choice' ? this.renderChoiceActivity() : ''}
          ${this.activeMode === 'match' ? this.renderMatchActivity() : ''}
          ${this.activeMode === 'sequence' ? this.renderSequenceActivity() : ''}
          ${this.activeMode === 'puzzle' ? this.renderPuzzleActivity() : ''}
        </section>
      </div>
    `;
  }
}
