import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { PremiumManager } from '../utils/premium-manager.js';

interface NumberItem {
  id: string;
  number: number;
  dots: number;
}

interface NumberTab {
  id: string;
  name: string;
  numbers: NumberItem[];
  createdAt: number;
}

interface NumbersTabsData {
  tabs: NumberTab[];
  activeTabId: string | null;
}

@customElement('app-numbers')
export class AppNumbers extends LitElement {
  @state() numbers: NumberItem[] = Array.from({ length: 20 }, (_, i) => ({
    id: `num-${i + 1}`,
    number: i + 1,
    dots: i + 1
  }));

  @state() selectedNumber: NumberItem | null = null;
  @state() tabs: NumberTab[] = [];
  @state() activeTabId: string | null = null;
  @state() showNewTabModal: boolean = false;
  @state() newTabName: string = '';

  private premiumManager = PremiumManager.getInstance();
  private readonly DEFAULT_TAB_ID = 'default';
  private readonly TABS_STORAGE_KEY = 'caydenjoy_numbers_tabs';

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
    }

    .number-button:hover {
      transform: scale(1.1);
      background: #f0e8f8;
      box-shadow: 0 4px 12px rgba(108, 92, 231, 0.2);
    }

    .number-button:active {
      transform: scale(0.95);
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
        const data: NumbersTabsData = JSON.parse(stored);
        this.tabs = data.tabs;
        this.activeTabId = data.activeTabId;
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
        numbers: [...this.numbers],
        createdAt: Date.now()
      }
    ];
    this.activeTabId = this.DEFAULT_TAB_ID;
    this.saveTabs();
  }

  private saveTabs(): void {
    try {
      const data: NumbersTabsData = {
        tabs: this.tabs,
        activeTabId: this.activeTabId
      };
      localStorage.setItem(this.TABS_STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.error('Error saving tabs:', e);
    }
  }

  private getActiveTab(): NumberTab | undefined {
    return this.tabs.find(tab => tab.id === this.activeTabId);
  }

  private switchTab(tabId: string): void {
    this.activeTabId = tabId;
    this.selectedNumber = null;
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

    const newTab: NumberTab = {
      id: `tab-${Date.now()}`,
      name: this.newTabName.trim(),
      numbers: [...this.numbers],
      createdAt: Date.now()
    };

    this.tabs = [...this.tabs, newTab];
    this.activeTabId = newTab.id;
    this.selectedNumber = null;
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

  private selectNumber(number: NumberItem): void {
    this.selectedNumber = number;
  }

  render() {
    const activeTab = this.getActiveTab();
    const canAddTabs = this.premiumManager.canAddAdditionalTabs();
    const currentNumbers = activeTab ? activeTab.numbers : this.numbers;

    return html`
      <div class="container">
        <h1>Numbers</h1>

        ${this.selectedNumber ? html`
          <div class="selected-number">
            <div class="selected-value">${this.selectedNumber.number}</div>
            <div class="dot-display">
              ${Array.from({ length: this.selectedNumber.dots }, (_, i) => html`
                <div class="dot">${i + 1}</div>
              `)}
            </div>
          </div>
        ` : ''}

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

        <div class="number-grid">
          ${currentNumbers.map(number => html`
            <button 
              class="number-button"
              @click=${() => this.selectNumber(number)}
            >
              ${number.number}
            </button>
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
