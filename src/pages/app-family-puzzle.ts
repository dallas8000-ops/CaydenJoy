import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { PremiumManager } from '../utils/premium-manager.js';

interface PuzzlePiece {
  id: string;
  name: string;
  emoji: string;
  x: number;
  y: number;
}

interface PuzzleTab {
  id: string;
  name: string;
  pieces: PuzzlePiece[];
  createdAt: number;
}

interface PuzzleTabsData {
  tabs: PuzzleTab[];
  activeTabId: string | null;
}

@customElement('app-family-puzzle')
export class AppFamilyPuzzle extends LitElement {
  @state() defaultPieces: PuzzlePiece[] = [
    { id: 'mom', name: 'Mom', emoji: '👩', x: 20, y: 20 },
    { id: 'dad', name: 'Dad', emoji: '👨', x: 200, y: 20 },
    { id: 'brother', name: 'Brother', emoji: '👦', x: 380, y: 20 },
    { id: 'dog', name: 'Dog', emoji: '🐕', x: 20, y: 220 },
    { id: 'grandad', name: 'Grandad', emoji: '👴', x: 200, y: 220 }
  ];

  @state() pieces: PuzzlePiece[] = [];
  @state() draggedPiece: PuzzlePiece | null = null;
  @state() dragOffset = { x: 0, y: 0 };
  @state() tabs: PuzzleTab[] = [];
  @state() activeTabId: string | null = null;
  @state() showNewTabModal: boolean = false;
  @state() newTabName: string = '';

  private premiumManager = PremiumManager.getInstance();
  private readonly DEFAULT_TAB_ID = 'default';
  private readonly TABS_STORAGE_KEY = 'caydenjoy_puzzle_tabs';

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

    /* Tab System Styles */
    .tabs-container {
      display: flex;
      gap: 0.75rem;
      margin-bottom: 1.75rem;
      align-items: center;
      flex-wrap: wrap;
      padding: 0.75rem;
      background: #f5f5f5;
      border-radius: 0.75rem;
    }

    .tab-button {
      padding: 0.7rem 1.4rem;
      border: 2px solid #ddd;
      background: white;
      border-radius: 0.5rem;
      cursor: pointer;
      font-size: 1.1rem;
      font-weight: 500;
      line-height: 1.4;
      transition: all 0.2s;
      color: #666;
      white-space: normal;
      text-align: center;
      min-height: 2.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .tab-button:hover {
      border-color: #6C5CE7;
      color: #6C5CE7;
    }

    .tab-button.active {
      background: #6C5CE7;
      color: white;
      border-color: #6C5CE7;
    }

    .add-tab-btn {
      padding: 0.7rem 1.2rem;
      background: #4ade80;
      color: white;
      border: none;
      border-radius: 0.5rem;
      cursor: pointer;
      font-size: 1.1rem;
      font-weight: 600;
      line-height: 1.4;
      transition: all 0.2s;
      white-space: normal;
      min-height: 2.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .add-tab-btn:hover {
      background: #22c55e;
      transform: scale(1.03);
    }

    /* Modal Styles */
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    }

    .modal {
      background: white;
      border-radius: 1.5rem;
      padding: 2rem;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
      max-width: 500px;
      width: 90%;
    }

    .modal-header {
      font-size: 1.5rem;
      font-weight: bold;
      color: #333;
      margin-bottom: 1.5rem;
    }

    .modal-input {
      width: 100%;
      padding: 0.75rem;
      border: 2px solid #ddd;
      border-radius: 0.5rem;
      font-size: 1rem;
      margin-bottom: 1.5rem;
      box-sizing: border-box;
    }

    .modal-input:focus {
      outline: none;
      border-color: #6C5CE7;
    }

    .modal-buttons {
      display: flex;
      gap: 1rem;
      justify-content: flex-end;
    }

    .modal-btn {
      padding: 0.75rem 1.5rem;
      border: none;
      border-radius: 0.5rem;
      cursor: pointer;
      font-size: 1rem;
      font-weight: 600;
      transition: all 0.2s;
    }

    .modal-btn-primary {
      background: #6C5CE7;
      color: white;
    }

    .modal-btn-primary:hover {
      background: #5F3DC4;
    }

    .modal-btn-secondary {
      background: #eee;
      color: #333;
    }

    .modal-btn-secondary:hover {
      background: #ddd;
    }

    @media (max-width: 640px) {
      h1 {
        font-size: 1.5rem;
      }

      .tabs-container {
        gap: 0.5rem;
      }

      .tab-button {
        padding: 0.5rem 1rem;
        font-size: 0.9rem;
      }

      .add-tab-btn {
        padding: 0.5rem 1rem;
        font-size: 0.9rem;
      }
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    this.loadTabs();
  }

  private loadTabs(): void {
    try {
      const stored = localStorage.getItem(this.TABS_STORAGE_KEY);
      if (stored) {
        const data: PuzzleTabsData = JSON.parse(stored);
        this.tabs = data.tabs;
        this.activeTabId = data.activeTabId;
        this.pieces = this.getActivePieces();
      } else {
        this.initializeDefaultTab();
      }
    } catch (e) {
      console.error('Error loading tabs:', e);
      this.initializeDefaultTab();
    }
  }

  private initializeDefaultTab(): void {
    this.tabs = [
      {
        id: this.DEFAULT_TAB_ID,
        name: 'Default',
        pieces: [...this.defaultPieces],
        createdAt: Date.now()
      }
    ];
    this.activeTabId = this.DEFAULT_TAB_ID;
    this.pieces = [...this.defaultPieces];
    this.saveTabs();
  }

  private saveTabs(): void {
    try {
      const data: PuzzleTabsData = {
        tabs: this.tabs,
        activeTabId: this.activeTabId
      };
      localStorage.setItem(this.TABS_STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.error('Error saving tabs:', e);
    }
  }

  private getActivePieces(): PuzzlePiece[] {
    const activeTab = this.tabs.find(tab => tab.id === this.activeTabId);
    return activeTab ? [...activeTab.pieces] : [...this.defaultPieces];
  }

  private switchTab(tabId: string): void {
    this.activeTabId = tabId;
    this.pieces = this.getActivePieces();
    this.draggedPiece = null;
    this.saveTabs();
  }

  private openNewTabModal(): void {
    this.showNewTabModal = true;
    this.newTabName = '';
  }

  private closeNewTabModal(): void {
    this.showNewTabModal = false;
    this.newTabName = '';
  }

  private createNewTab(): void {
    if (!this.newTabName.trim()) {
      alert('Please enter a tab name');
      return;
    }

    const newTab: PuzzleTab = {
      id: `tab-${Date.now()}`,
      name: this.newTabName.trim(),
      pieces: [...this.defaultPieces],
      createdAt: Date.now()
    };

    this.tabs = [...this.tabs, newTab];
    this.activeTabId = newTab.id;
    this.pieces = [...this.defaultPieces];
    this.draggedPiece = null;
    this.saveTabs();
    this.closeNewTabModal();
  }

  private handleTabNameInput(e: Event): void {
    const input = e.target as HTMLInputElement;
    this.newTabName = input.value;
  }

  private handleTabNameKeydown(e: KeyboardEvent): void {
    if (e.key === 'Enter') {
      this.createNewTab();
    } else if (e.key === 'Escape') {
      this.closeNewTabModal();
    }
  }

  private onMouseDown(e: MouseEvent, piece: PuzzlePiece) {
    this.draggedPiece = piece;
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    this.dragOffset = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  }

  private onMouseMove(e: MouseEvent) {
    if (!this.draggedPiece) return;

    const board = this.shadowRoot?.querySelector('.puzzle-board') as HTMLElement;
    if (!board) return;

    const rect = board.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left - this.dragOffset.x, rect.width - 80));
    const y = Math.max(0, Math.min(e.clientY - rect.top - this.dragOffset.y, rect.height - 80));

    const activeTab = this.tabs.find(tab => tab.id === this.activeTabId);
    if (activeTab) {
      const piece = activeTab.pieces.find(p => p.id === this.draggedPiece!.id);
      if (piece) {
        piece.x = x;
        piece.y = y;
        this.saveTabs();
        this.requestUpdate();
      }
    }
  }

  private onMouseUp() {
    this.draggedPiece = null;
  }

  connectedCallbackEnd() {
    document.addEventListener('mousemove', (e) => this.onMouseMove(e));
    document.addEventListener('mouseup', () => this.onMouseUp());
  }

  render() {
    const canAddTabs = this.premiumManager.canAddAdditionalTabs();
    const activeTab = this.tabs.find(tab => tab.id === this.activeTabId);
    const currentPieces = activeTab ? activeTab.pieces : this.pieces;

    return html`
      <div class="container">
        <h1>Family Puzzle</h1>
        <p class="instructions">Drag the family members to arrange them!</p>

        ${canAddTabs ? html`
          <div class="tabs-container">
            ${this.tabs.map(tab => html`
              <button 
                class="tab-button ${tab.id === this.activeTabId ? 'active' : ''}"
                @click=${() => this.switchTab(tab.id)}
              >
                ${tab.name}
              </button>
            `)}
            <button class="add-tab-btn" @click=${this.openNewTabModal}>
              + New Tab
            </button>
          </div>
        ` : ''}

        <div class="puzzle-board" @mousemove=${this.onMouseMove} @mouseup=${this.onMouseUp}>
          ${currentPieces.map(piece => html`
            <div
              class="puzzle-piece ${this.draggedPiece?.id === piece.id ? 'dragging' : ''}"
              style="left: ${piece.x}px; top: ${piece.y}px"
              @mousedown=${(e: MouseEvent) => this.onMouseDown(e, piece)}
            >
              <div class="emoji">${piece.emoji}</div>
              <div class="label">${piece.name}</div>
            </div>
          `)}
        </div>
      </div>

      ${this.showNewTabModal ? html`
        <div class="modal-overlay" @click=${this.closeNewTabModal}>
          <div class="modal" @click=${(e: Event) => e.stopPropagation()}>
            <div class="modal-header">Create New Tab</div>
            <input 
              type="text" 
              class="modal-input" 
              placeholder="Enter tab name"
              .value=${this.newTabName}
              @input=${this.handleTabNameInput}
              @keydown=${this.handleTabNameKeydown}
              autofocus
            />
            <div class="modal-buttons">
              <button class="modal-btn modal-btn-secondary" @click=${this.closeNewTabModal}>
                Cancel
              </button>
              <button class="modal-btn modal-btn-primary" @click=${this.createNewTab}>
                Create Tab
              </button>
            </div>
          </div>
        </div>
      ` : ''}
    `;
  }
}
