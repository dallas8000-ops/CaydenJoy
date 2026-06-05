import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { PremiumManager } from '../utils/premium-manager.js';
import { AccessibilityManager } from '../utils/accessibility-manager.js';
import { ProgressManager } from '../utils/progress-manager.js';

interface RequestCard {
  id: number;
  text: string;
  phrase: string;
  category: string;
  color: string;
  imageUrl: string;
}

interface Tab {
  id: string;
  name: string;
  requests: RequestCard[];
  createdAt: number;
}

interface TabsData {
  tabs: Tab[];
  activeTabId: string | null;
}

@customElement('app-communication')
export class AppCommunication extends LitElement {
  @state() activeRequest: RequestCard | null = null;
  @state() tabs: Tab[] = [];
  @state() activeTabId: string | null = null;
  @state() showNewTabModal = false;
  @state() newTabName = '';

  private premiumManager = PremiumManager.getInstance();
  private accessibilityManager = AccessibilityManager.getInstance();
  private progressManager = ProgressManager.getInstance();
  private readonly DEFAULT_TAB_ID = 'default';
  private readonly TABS_STORAGE_KEY = 'caydenjoy_communication_tabs';

  private requests: RequestCard[] = [
    {
      id: 1,
      text: "I'm hungry",
      phrase: "I'm hungry.",
      category: 'Food',
      color: '#2e7d32',
      imageUrl: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=700&q=85',
    },
    {
      id: 2,
      text: "I'm thirsty",
      phrase: "I'm thirsty.",
      category: 'Drink',
      color: '#1976a2',
      imageUrl: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=700&q=85',
    },
    {
      id: 3,
      text: 'Bathroom',
      phrase: 'I need the bathroom.',
      category: 'Need',
      color: '#6b5b95',
      imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=700&q=85',
    },
    {
      id: 4,
      text: 'Break',
      phrase: 'I need a break.',
      category: 'Sensory',
      color: '#1f7a8c',
      imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=700&q=85',
    },
    {
      id: 5,
      text: 'Help',
      phrase: 'Help please.',
      category: 'Urgent',
      color: '#c0392b',
      imageUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=700&q=85',
    },
    {
      id: 6,
      text: 'Play',
      phrase: 'I want to play.',
      category: 'Activity',
      color: '#7a4fb0',
      imageUrl: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=700&q=85',
    },
    {
      id: 7,
      text: "I'm tired",
      phrase: "I'm tired.",
      category: 'Body',
      color: '#536d8f',
      imageUrl: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=700&q=85',
    },
    {
      id: 8,
      text: 'Too loud',
      phrase: 'It is too loud.',
      category: 'Sensory',
      color: '#b65f1f',
      imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=85',
    },
    {
      id: 9,
      text: 'Favorite food',
      phrase: 'I want my favorite food.',
      category: 'Food',
      color: '#9a6a12',
      imageUrl: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=700&q=85',
    },
    {
      id: 10,
      text: 'Favorite toy',
      phrase: 'I want my toy.',
      category: 'Play',
      color: '#a23b72',
      imageUrl: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=700&q=85',
    },
    {
      id: 11,
      text: 'Go outside',
      phrase: 'I want to go outside.',
      category: 'Place',
      color: '#2f7d57',
      imageUrl: 'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=700&q=85',
    },
    {
      id: 12,
      text: 'Calm place',
      phrase: 'I need a calm place.',
      category: 'Sensory',
      color: '#4f7f8f',
      imageUrl: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=85',
    },
  ];

  static styles = css`
    :host {
      display: block;
      min-height: 100vh;
      background: #f6f8fb;
      color: #243041;
      padding: 1.25rem;
    }

    .container {
      max-width: 1280px;
      margin: 0 auto;
    }

    .header {
      margin-bottom: 1rem;
    }

    h1 {
      margin: 0;
      font-size: 2rem;
      line-height: 1.1;
      color: #243041;
    }

    .subtitle {
      margin: 0.4rem 0 0;
      color: #596779;
      font-size: 1.05rem;
    }

    .active-request {
      display: grid;
      grid-template-columns: 112px 1fr auto;
      gap: 1rem;
      align-items: center;
      margin-bottom: 1rem;
      padding: 0.75rem;
      border-radius: 0.5rem;
      color: #ffffff;
      background: #243041;
      box-shadow: 0 6px 18px rgba(30, 42, 58, 0.16);
    }

    .active-request img {
      width: 112px;
      height: 82px;
      object-fit: cover;
      border-radius: 0.4rem;
    }

    .active-request-text {
      font-size: 1.55rem;
      font-weight: 900;
    }

    .close-btn {
      width: 52px;
      height: 52px;
      border: 0;
      border-radius: 0.5rem;
      background: rgba(255, 255, 255, 0.18);
      color: #ffffff;
      cursor: pointer;
      font-size: 1.6rem;
      font-weight: 900;
    }

    .tabs-container {
      display: flex;
      gap: 0.5rem;
      margin-bottom: 1rem;
      align-items: center;
      flex-wrap: wrap;
      padding: 0.55rem;
      background: #e8edf3;
      border-radius: 0.5rem;
    }

    .tab-button,
    .add-tab-btn {
      border-radius: 0.4rem;
      cursor: pointer;
      font-weight: 800;
      min-height: 44px;
    }

    .tab-button {
      border: 2px solid #c9d4e1;
      background: #ffffff;
      color: #243041;
    }

    .tab-button.active {
      background: #243041;
      border-color: #243041;
      color: #ffffff;
    }

    .add-tab-btn {
      border: 0;
      background: #2e8f74;
      color: #ffffff;
    }

    .requests-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
      gap: 0.9rem;
    }

    .request-card {
      display: grid;
      grid-template-rows: 150px auto;
      min-height: 244px;
      padding: 0;
      overflow: hidden;
      border: 3px solid #d8e0ea;
      border-bottom: 8px solid var(--card-color);
      border-radius: 0.5rem;
      background: #ffffff;
      cursor: pointer;
      text-align: left;
      box-shadow: 0 3px 12px rgba(30, 42, 58, 0.12);
    }

    .request-card:hover,
    .request-card:focus-visible {
      outline: 4px solid rgba(46, 143, 116, 0.22);
      border-color: #2e8f74;
    }

    .request-card img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      background: #dfe8f1;
    }

    .request-copy {
      padding: 0.8rem;
      display: grid;
      gap: 0.3rem;
    }

    .request-text {
      font-size: 1.25rem;
      font-weight: 900;
      color: #243041;
      line-height: 1.15;
    }

    .request-category {
      color: #657386;
      font-size: 0.9rem;
      font-weight: 800;
    }

    .footer-text {
      text-align: center;
      color: #687789;
      font-size: 1rem;
      margin-top: 1.25rem;
    }

    .modal-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    }

    .modal {
      background: #ffffff;
      border-radius: 0.5rem;
      padding: 1.5rem;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
      max-width: 500px;
      width: 90%;
    }

    .modal-header {
      font-size: 1.35rem;
      font-weight: 900;
      color: #243041;
      margin-bottom: 1rem;
    }

    .modal-input {
      width: 100%;
      padding: 0.85rem;
      border: 2px solid #c9d4e1;
      border-radius: 0.4rem;
      font-size: 1rem;
      margin-bottom: 1rem;
      box-sizing: border-box;
    }

    .modal-buttons {
      display: flex;
      gap: 0.75rem;
      justify-content: flex-end;
    }

    .modal-btn {
      border: 0;
      border-radius: 0.4rem;
      cursor: pointer;
      font-size: 1rem;
      font-weight: 800;
    }

    .modal-btn-primary {
      background: #2e8f74;
      color: #ffffff;
    }

    .modal-btn-secondary {
      background: #e8edf3;
      color: #243041;
    }

    @media (max-width: 640px) {
      :host {
        padding: 0.8rem;
      }

      h1 {
        font-size: 1.55rem;
      }

      .requests-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 0.65rem;
      }

      .request-card {
        grid-template-rows: 116px auto;
        min-height: 206px;
      }

      .request-text {
        font-size: 1.05rem;
      }

      .active-request {
        grid-template-columns: 86px 1fr auto;
      }

      .active-request img {
        width: 86px;
        height: 68px;
      }

      .active-request-text {
        font-size: 1.1rem;
      }
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    this.loadTabs();
  }

  private normalizeRequest(request: any, fallback: RequestCard): RequestCard {
    return {
      id: Number(request?.id ?? fallback.id),
      text: String(request?.text ?? fallback.text),
      phrase: String(request?.phrase ?? request?.text ?? fallback.phrase),
      category: String(request?.category ?? fallback.category),
      color: String(request?.color?.startsWith?.('#') ? request.color : fallback.color),
      imageUrl: String(request?.imageUrl ?? fallback.imageUrl),
    };
  }

  private loadTabs(): void {
    try {
      const stored = localStorage.getItem(this.TABS_STORAGE_KEY);
      if (stored) {
        const data: TabsData = JSON.parse(stored);
        this.tabs = data.tabs.map((tab) => ({
          ...tab,
          requests: tab.requests.map((request, index) => this.normalizeRequest(request, this.requests[index] ?? this.requests[0])),
        }));
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
        name: 'Daily Needs',
        requests: [...this.requests],
        createdAt: Date.now(),
      },
    ];
    this.activeTabId = this.DEFAULT_TAB_ID;
    this.saveTabs();
  }

  private saveTabs(): void {
    try {
      const data: TabsData = {
        tabs: this.tabs,
        activeTabId: this.activeTabId,
      };
      localStorage.setItem(this.TABS_STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.error('Error saving tabs:', e);
    }
  }

  private getActiveTab(): Tab | undefined {
    return this.tabs.find((tab) => tab.id === this.activeTabId);
  }

  private switchTab(tabId: string): void {
    this.activeTabId = tabId;
    this.activeRequest = null;
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

    const newTab: Tab = {
      id: `tab-${Date.now()}`,
      name: this.newTabName.trim(),
      requests: [...this.requests],
      createdAt: Date.now(),
    };

    this.tabs = [...this.tabs, newTab];
    this.activeTabId = newTab.id;
    this.activeRequest = null;
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

  private handleRequest(request: RequestCard) {
    this.activeRequest = request;
    this.progressManager.log(
      request.category === 'Urgent' ? 'safety' : 'communication',
      request.text,
      request.phrase
    );
    this.accessibilityManager.playSound('click');
    this.accessibilityManager.speakNow(request.phrase, 0.9);
  }

  private clearRequest() {
    this.activeRequest = null;
    window.speechSynthesis.cancel();
  }

  render() {
    const activeTab = this.getActiveTab();
    const canAddTabs = this.premiumManager.canAddAdditionalTabs();
    const currentRequests = activeTab ? activeTab.requests : this.requests;

    return html`
      <div class="container">
        <div class="header">
          <h1>CaydenJoy Communication</h1>
          <p class="subtitle">Tap a realistic picture to speak a daily need.</p>
        </div>

        ${this.activeRequest ? html`
          <div class="active-request">
            <img src=${this.activeRequest.imageUrl} alt=${this.activeRequest.text} />
            <div class="active-request-text">${this.activeRequest.phrase}</div>
            <button class="close-btn" @click=${this.clearRequest} aria-label="Clear request">x</button>
          </div>
        ` : ''}

        ${canAddTabs ? html`
          <div class="tabs-container">
            ${this.tabs.map((tab) => html`
              <button
                class="tab-button ${tab.id === this.activeTabId ? 'active' : ''}"
                @click=${() => this.switchTab(tab.id)}
              >
                ${tab.name}
              </button>
            `)}
            <button class="add-tab-btn" @click=${this.openNewTabModal}>New Tab</button>
          </div>
        ` : ''}

        <div class="requests-grid">
          ${currentRequests.map((request) => html`
            <button
              class="request-card"
              style="--card-color: ${request.color}"
              @click=${() => this.handleRequest(request)}
            >
              <img src=${request.imageUrl} alt=${request.text} />
              <div class="request-copy">
                <div class="request-text">${request.text}</div>
                <div class="request-category">${request.category}</div>
              </div>
            </button>
          `)}
        </div>

        <p class="footer-text">Real photos work best when they show Cayden's actual cup, food, room, toy, people, and places.</p>
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
              <button class="modal-btn modal-btn-secondary" @click=${this.closeNewTabModal}>Cancel</button>
              <button class="modal-btn modal-btn-primary" @click=${this.createNewTab}>Create Tab</button>
            </div>
          </div>
        </div>
      ` : ''}
    `;
  }
}
