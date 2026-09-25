import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { AccessibilityManager } from '../utils/accessibility-manager.js';
import { ProgressManager } from '../utils/progress-manager.js';
import { CustomImagesManager } from '../utils/custom-images-manager.js';
import { SentenceBuilder } from '../utils/sentence-builder.js';
import { PremiumManager } from '../utils/premium-manager.js';
import { resolveRouterPath } from '../router';
import { photo } from '../utils/photos';

type PuzzleMode = 'family' | 'objects';

const IMAGE_FALLBACK = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200"%3E%3Crect width="320" height="200" fill="%23dfe8f1"/%3E%3Ccircle cx="160" cy="75" r="38" fill="%2389a0b7"/%3E%3Cpath d="M78 190c10-50 52-75 82-75s72 25 82 75" fill="%2389a0b7"/%3E%3C/svg%3E';

interface PuzzleCard {
  id: string;
  label: string;
  phrase: string;
  imageUrl: string;
  isCustom?: boolean;
}

@customElement('app-family-puzzle')
export class AppFamilyPuzzle extends LitElement {
  @state() private mode: PuzzleMode = 'family';
  @state() private familyTargetIndex = 0;
  @state() private objectTargetIndex = 0;
  @state() private selectedId: string | null = null;
  @state() private completedFamilyIds: string[] = [];
  @state() private completedObjectIds: string[] = [];
  @state() private customFamilyCards: PuzzleCard[] = [];
  @state() private customObjectCards: PuzzleCard[] = [];
  @state() private routineStep = 0;

  private accessibilityManager = AccessibilityManager.getInstance();
  private progressManager = ProgressManager.getInstance();
  private customImagesManager = CustomImagesManager.getInstance();
  private sentenceBuilder = SentenceBuilder.getInstance();
  private premiumManager = PremiumManager.getInstance();
  private readonly FAMILY_CATEGORY = 'family';
  private readonly OBJECTS_CATEGORY = 'objects';
  private readonly routineSteps = ['Look at the plan', 'Choose an activity', 'Take a short break', 'All done'];

  private readonly familyCards: PuzzleCard[] = [
    {
      id: 'mom',
      label: 'Mom',
      phrase: 'Mom.',
      imageUrl: photo('photo-1544717305-2782549b5136'),
    },
    {
      id: 'dad',
      label: 'Dad',
      phrase: 'Dad.',
      imageUrl: photo('photo-1508214751196-bcfd4ca60f91'),
    },
    {
      id: 'brother',
      label: 'Brother',
      phrase: 'Brother.',
      imageUrl: photo('photo-1503454537195-1dcabb73ffb9'),
    },
    {
      id: 'dog',
      label: 'Dog',
      phrase: 'Dog.',
      imageUrl: photo('photo-1552053831-71594a27632d'),
    },
    {
      id: 'grandad',
      label: 'Grandad',
      phrase: 'Grandad.',
      imageUrl: photo('grandad'),
    },
  ];

  private readonly objectCards: PuzzleCard[] = [
    {
      id: 'cup',
      label: 'Cup',
      phrase: 'Cup.',
      imageUrl: photo('photo-1513558161293-cdaf765ed2fd'),
    },
    {
      id: 'shoes',
      label: 'Shoes',
      phrase: 'Shoes.',
      imageUrl: photo('photo-1542291026-7eec264c27ff'),
    },
    {
      id: 'toothbrush',
      label: 'Toothbrush',
      phrase: 'Toothbrush.',
      imageUrl: photo('photo-1609840114035-3c981b782dfe'),
    },
    {
      id: 'ball',
      label: 'Ball',
      phrase: 'Ball.',
      imageUrl: photo('photo-1518611012118-696072aa579a'),
    },
    {
      id: 'headphones',
      label: 'Headphones',
      phrase: 'Headphones.',
      imageUrl: photo('photo-1505740420928-5e560c06d30e'),
    },
    {
      id: 'backpack',
      label: 'Backpack',
      phrase: 'Backpack.',
      imageUrl: photo('photo-1553062407-98eeb64c6a62'),
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

    .reset-button,
    .mode-button,
    .safety-button,
    .prompt-button,
    .puzzle-card {
      border: 0;
      border-radius: 0.5rem;
      cursor: pointer;
      font-weight: 900;
      box-shadow: 0 2px 8px rgba(25, 35, 50, 0.12);
    }

    .reset-button {
      min-height: 48px;
      padding: 0.7rem 1rem;
      background: #e8edf3;
      color: #243041;
    }

    .safety-strip {
      display: grid;
      grid-template-columns: repeat(5, minmax(0, 1fr));
      gap: 0.55rem;
      margin-bottom: 1rem;
    }

    .safety-button {
      min-height: 52px;
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
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 0.6rem;
      margin-bottom: 1rem;
    }

    .mode-button {
      min-height: 56px;
      background: #eef3f8;
      color: #243041;
      border: 2px solid transparent;
      font-size: 1rem;
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
      border-left: 6px solid #2e8f74;
      border-radius: 0.5rem;
    }

    .prompt {
      color: #1f463b;
      font-size: 1.2rem;
      font-weight: 900;
    }

    .prompt-button {
      min-height: 48px;
      padding: 0.7rem 1rem;
      background: #2e8f74;
      color: #ffffff;
    }

    .add-photos-link {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      margin-bottom: 1rem;
      padding: 0.6rem 1rem;
      border-radius: 0.5rem;
      background: #edf7f4;
      color: #1f463b;
      font-weight: 800;
      text-decoration: none;
      border: 2px dashed #2e8f74;
    }

    .custom-badge {
      display: inline-block;
      margin-left: 0.4rem;
      padding: 0.1rem 0.4rem;
      border-radius: 0.3rem;
      background: #2e8f74;
      color: #fff;
      font-size: 0.7rem;
      font-weight: 900;
      vertical-align: middle;
    }

    .puzzle-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
      gap: 0.9rem;
    }

    .routine-session {
      margin-bottom: 1rem;
      padding: 1rem;
      border: 1px solid #d8e0ea;
      border-radius: 0.5rem;
      background: #ffffff;
    }

    .routine-title {
      margin: 0 0 0.75rem;
      font-size: 1.2rem;
      color: #243041;
    }

    .routine-steps {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 0.6rem;
    }

    .routine-step {
      min-height: 72px;
      border: 2px solid #c9d4e1;
      border-radius: 0.5rem;
      background: #f8fafc;
      color: #243041;
      cursor: pointer;
      font-weight: 900;
    }

    .routine-step.current { border-color: #1f7a8c; background: #dceff4; }
    .routine-step.complete { border-color: #2e8f74; background: #edf7f4; color: #1f463b; }
    .routine-locked { margin-bottom: 1rem; padding: 1rem; border-radius: 0.5rem; background: #f8fafc; border: 1px solid #d8e0ea; color: #526070; font-weight: 700; }

    .puzzle-card {
      display: grid;
      grid-template-rows: 150px auto;
      min-height: 228px;
      padding: 0;
      overflow: hidden;
      border: 3px solid #d8e0ea;
      background: #ffffff;
      text-align: left;
    }

    .puzzle-card:hover,
    .puzzle-card:focus-visible {
      outline: 4px solid rgba(46, 143, 116, 0.22);
      border-color: #2e8f74;
    }

    .puzzle-card.selected {
      border-color: #2e8f74;
      box-shadow: 0 0 0 5px rgba(46, 143, 116, 0.18);
    }

    .puzzle-card.done {
      border-color: #4f7f8f;
      opacity: 0.72;
    }

    .puzzle-card img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      background: #dfe8f1;
    }

    .card-copy {
      display: grid;
      gap: 0.25rem;
      padding: 0.85rem;
    }

    .label {
      color: #243041;
      font-size: 1.2rem;
      font-weight: 900;
      line-height: 1.15;
    }

    .status {
      color: #657386;
      font-size: 0.9rem;
      font-weight: 800;
    }

    @media (max-width: 760px) {
      .topbar,
      .prompt-row {
        grid-template-columns: 1fr;
      }

      .safety-strip {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .routine-steps {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      h1 {
        font-size: 1.55rem;
      }
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    this.loadCustomImages();
    this.speakCurrentPrompt();
  }

  private loadCustomImages(): void {
    this.customFamilyCards = this.customImagesManager
      .getImagesByCategory(this.FAMILY_CATEGORY)
      .map((img) => ({ id: `custom-${img.id}`, label: img.name, phrase: `${img.name}.`, imageUrl: img.dataUrl, isCustom: true }));
    this.customObjectCards = this.customImagesManager
      .getImagesByCategory(this.OBJECTS_CATEGORY)
      .map((img) => ({ id: `custom-${img.id}`, label: img.name, phrase: `${img.name}.`, imageUrl: img.dataUrl, isCustom: true }));
  }

  private get activeCards(): PuzzleCard[] {
    return this.mode === 'family'
      ? [...this.familyCards, ...this.customFamilyCards]
      : [...this.objectCards, ...this.customObjectCards];
  }

  private get completedIds(): string[] {
    return this.mode === 'family' ? this.completedFamilyIds : this.completedObjectIds;
  }

  private get targetIndex(): number {
    return this.mode === 'family' ? this.familyTargetIndex : this.objectTargetIndex;
  }

  private get targetCard(): PuzzleCard {
    return this.activeCards[this.targetIndex % this.activeCards.length];
  }

  private speak(text: string): void {
    this.accessibilityManager.speakNow(text, 0.9);
  }

  private useImageFallback(event: Event): void {
    const image = event.currentTarget as HTMLImageElement;
    if (image.src !== IMAGE_FALLBACK) image.src = IMAGE_FALLBACK;
  }

  private setMode(mode: PuzzleMode): void {
    this.mode = mode;
    this.selectedId = null;
    this.speakCurrentPrompt();
  }

  private speakCurrentPrompt(): void {
    this.speak(`Find ${this.targetCard.label}.`);
  }

  private chooseCard(card: PuzzleCard): void {
    this.selectedId = card.id;

    if (card.id === this.targetCard.id) {
      this.progressManager.log('activity', `Puzzle selected: ${card.label}`, card.phrase);
      this.markComplete(card.id);
      this.speak(`Yes. ${card.phrase}`);
      this.sentenceBuilder.addWord({ label: card.label, imageUrl: card.imageUrl });
      this.advanceTarget();
      return;
    }

    this.speak(`Try again. Find ${this.targetCard.label}.`);
  }

  private markComplete(id: string): void {
    if (this.mode === 'family' && !this.completedFamilyIds.includes(id)) {
      this.completedFamilyIds = [...this.completedFamilyIds, id];
    }

    if (this.mode === 'objects' && !this.completedObjectIds.includes(id)) {
      this.completedObjectIds = [...this.completedObjectIds, id];
    }
  }

  private advanceTarget(): void {
    const cards = this.activeCards;
    const nextIndex = (this.targetIndex + 1) % cards.length;

    if (this.mode === 'family') {
      this.familyTargetIndex = nextIndex;
    } else {
      this.objectTargetIndex = nextIndex;
    }

    setTimeout(() => this.speakCurrentPrompt(), 900);
  }

  private resetActivity(): void {
    this.familyTargetIndex = 0;
    this.objectTargetIndex = 0;
    this.selectedId = null;
    this.completedFamilyIds = [];
    this.completedObjectIds = [];
    this.routineStep = 0;
    this.speak('Puzzle reset.');
    setTimeout(() => this.speakCurrentPrompt(), 700);
  }

  private selectRoutineStep(index: number): void {
    this.routineStep = index;
    const step = this.routineSteps[index];
    this.progressManager.log('activity', 'Routine session', step);
    this.speak(step);
  }

  private renderCard(card: PuzzleCard) {
    const completed = this.completedIds.includes(card.id);
    return html`
      <button
        class="puzzle-card ${this.selectedId === card.id ? 'selected' : ''} ${completed ? 'done' : ''}"
        @click=${() => this.chooseCard(card)}
      >
        <img src=${card.imageUrl} alt=${card.label} @error=${this.useImageFallback} />
        <div class="card-copy">
          <div class="label">${card.label}${card.isCustom ? html`<span class="custom-badge">Cayden's</span>` : ''}</div>
          <div class="status">${completed ? 'Found' : 'Tap to choose'}</div>
        </div>
      </button>
    `;
  }

  render() {
    const canUseLearningSessions = this.premiumManager.canAddAdditionalTabs();
    const customCategory = this.mode === 'family' ? this.FAMILY_CATEGORY : this.OBJECTS_CATEGORY;
    const addPhotosLabel = this.mode === 'family' ? "Add Cayden's real family photos" : "Add Cayden's real object photos";
    return html`
      <div class="shell">
        <div class="topbar">
          <div>
            <h1>Picture Puzzles</h1>
            <p class="subtitle">Listen for the prompt, then pick the matching picture.</p>
          </div>
          <button class="reset-button" @click=${this.resetActivity}>Reset</button>
        </div>

        <a class="add-photos-link" href="${resolveRouterPath('custom-images')}?category=${customCategory}">📸 ${addPhotosLabel}</a>

        <div class="safety-strip">
          <button class="safety-button help" @click=${() => this.speak('Help please.')}>Help</button>
          <button class="safety-button break" @click=${() => this.speak('I need a break.')}>Break</button>
          <button class="safety-button again" @click=${() => this.speakCurrentPrompt()}>Again</button>
          <button class="safety-button done" @click=${() => this.speak('All done.')}>All Done</button>
          <button class="safety-button stop" @click=${() => this.speak('Stop.')}>Stop</button>
        </div>

        ${canUseLearningSessions ? html`
          <section class="routine-session" aria-label="Visual routine session">
            <h2 class="routine-title">Visual Routine</h2>
            <div class="routine-steps">
              ${this.routineSteps.map((step, index) => html`
                <button
                  class="routine-step ${index < this.routineStep ? 'complete' : ''} ${index === this.routineStep ? 'current' : ''}"
                  @click=${() => this.selectRoutineStep(index)}
                >${index < this.routineStep ? 'Done: ' : ''}${step}</button>
              `)}
            </div>
          </section>
        ` : html`
          <div class="routine-locked">All Access adds visual routine sessions for home, therapy, and school practice.</div>
        `}

        <section class="session-card" aria-label="Picture puzzle">
          <div class="mode-tabs">
            <button class="mode-button ${this.mode === 'family' ? 'active' : ''}" @click=${() => this.setMode('family')}>
              Family
            </button>
            <button class="mode-button ${this.mode === 'objects' ? 'active' : ''}" @click=${() => this.setMode('objects')}>
              Objects
            </button>
          </div>

          <div class="prompt-row">
            <div class="prompt">Find ${this.targetCard.label}</div>
            <button class="prompt-button" @click=${() => this.speakCurrentPrompt()}>Say Again</button>
          </div>

          <div class="puzzle-grid">
            ${this.activeCards.map((card) => this.renderCard(card))}
          </div>
        </section>
      </div>
    `;
  }
}
