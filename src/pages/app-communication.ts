import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import { PremiumManager } from '../utils/premium-manager.js';

interface Request {
  id: number;
  text: string;
  icon: string;
  color: string;
}

interface Tab {
  id: string;
  name: string;
  requests: Request[];
  createdAt: number;
}

interface TabsData {
  tabs: Tab[];
  activeTabId: string | null;
}

@customElement('app-communication')
export class AppCommunication extends LitElement {
  @state() activeRequest: Request | null = null;
  @state() tabs: Tab[] = [];
  @state() activeTabId: string | null = null;
  @state() showNewTabModal: boolean = false;
  @state() newTabName: string = '';

  private premiumManager = PremiumManager.getInstance();
  private readonly DEFAULT_TAB_ID = 'default';
  private readonly TABS_STORAGE_KEY = 'caydenjoy_communication_tabs';

  static styles = css`
    :host {
      display: block;
      padding: 2rem;
    }

    .container {
      max-width: 1400px;
      margin: 0 auto;
    }

    .header {
      text-align: center;
      margin-bottom: 2rem;
    }

    h1 {
      font-size: 3rem;
      font-weight: bold;
      color: #6C5CE7;
      margin-bottom: 1rem;
    }

    .subtitle {
      font-size: 1.5rem;
      color: #666;
    }

    .active-request {
      background: linear-gradient(135deg, #6C5CE7 0%, #5F3DC4 100%);
      color: white;
      padding: 2rem;
      border-radius: 1.5rem;
      margin-bottom: 2rem;
      box-shadow: 0 10px 30px rgba(108, 92, 231, 0.3);
      display: flex;
      align-items: center;
      gap: 1.5rem;
      position: relative;
    }

    .active-request-icon {
      font-size: 2.5rem;
    }

    .active-request-text {
      font-size: 2rem;
      font-weight: bold;
      flex: 1;
    }

    .close-btn {
      background: rgba(255, 255, 255, 0.2);
      border: none;
      color: white;
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      transition: all 0.2s;
    }

    .close-btn:hover {
      background: rgba(255, 255, 255, 0.3);
      transform: scale(1.1);
    }

    .requests-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.5rem;
      margin-bottom: 2rem;
    }

    .request-card {
      padding: 2rem;
      border-radius: 1.5rem;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      border: 4px solid white;
      cursor: pointer;
      transition: all 0.2s;
      text-align: center;
      min-height: 200px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
    }

    .request-card:hover {
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
      transform: scale(1.05);
    }

    .request-icon {
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
    }

    .request-text {
      font-size: 1.25rem;
      font-weight: 600;
      color: #333;
    }

    .bg-green-400 { background-color: #4ade80; }
    .bg-blue-400 { background-color: #60a5fa; }
    .bg-purple-400 { background-color: #c084fc; }
    .bg-yellow-400 { background-color: #facc15; }
    .bg-red-400 { background-color: #f87171; }
    .bg-pink-400 { background-color: #f472b6; }
    .bg-indigo-400 { background-color: #818cf8; }
    .bg-orange-400 { background-color: #fb923c; }
    .bg-cyan-400 { background-color: #22d3ee; }
    .bg-rose-400 { background-color: #fb7185; }
    .bg-lime-400 { background-color: #a3e635; }
    .bg-teal-400 { background-color: #2dd4bf; }

    .footer-text {
      text-align: center;
      color: #999;
      font-size: 1.125rem;
      margin-top: 2rem;
    }

    /* Tab System Styles */
    .tabs-container {
      display: flex;
      gap: 0.5rem;
      margin-bottom: 1.5rem;
      align-items: center;
      flex-wrap: wrap;
      padding: 0.5rem;
      background: #f5f5f5;
      border-radius: 0.5rem;
    }

    .tab-button {
      padding: 0.4rem 0.8rem;
      border: 2px solid #ddd;
      background: white;
      border-radius: 0.4rem;
      cursor: pointer;
      font-size: 0.85rem;
      font-weight: 500;
      line-height: 1.2;
      transition: all 0.2s;
      color: #666;
      white-space: normal;
      text-align: center;
      min-height: 2rem;
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

    .tab-button.active:hover {
      background: #5F3DC4;
      border-color: #5F3DC4;
    }

    .add-tab-btn {
      padding: 0.4rem 0.7rem;
      background: #4ade80;
      color: white;
      border: none;
      border-radius: 0.4rem;
      cursor: pointer;
      font-size: 0.85rem;
      font-weight: 600;
      line-height: 1.2;
      transition: all 0.2s;
      white-space: normal;
      min-height: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .add-tab-btn:hover {
      background: #22c55e;
      transform: scale(1.02);
    }

    .add-tab-btn:disabled {
      background: #ccc;
      cursor: not-allowed;
      transform: none;
    }

    .add-tab-btn:disabled {
      background: #ccc;
      cursor: not-allowed;
      transform: none;
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
      transition: border-color 0.2s;
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
      transform: scale(1.02);
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
        font-size: 2rem;
      }

      .subtitle {
        font-size: 1.25rem;
      }

      .requests-grid {
        grid-template-columns: 1fr;
      }

      .request-card {
        min-height: 150px;
      }

      .request-icon {
        font-size: 3rem;
      }

      .request-text {
        font-size: 1.125rem;
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

      .modal {
        padding: 1.5rem;
      }

      .modal-header {
        font-size: 1.25rem;
        margin-bottom: 1rem;
      }
    }
  `;

  private requests: Request[] = [
    { id: 1, text: "I'm hungry", icon: "🍎", color: "bg-green-400" },
    { id: 2, text: "I'm thirsty", icon: "💧", color: "bg-blue-400" },
    { id: 3, text: "I need bathroom", icon: "🚽", color: "bg-purple-400" },
    { id: 4, text: "I need a break", icon: "⏸️", color: "bg-yellow-400" },
    { id: 5, text: "Help please", icon: "🆘", color: "bg-red-400" },
    { id: 6, text: "I want to play", icon: "🎮", color: "bg-pink-400" },
    { id: 7, text: "I'm tired", icon: "😴", color: "bg-indigo-400" },
    { id: 8, text: "Too loud", icon: "🔊", color: "bg-orange-400" },
    { id: 9, text: "I want my spatulas", icon: "🥄", color: "bg-cyan-400" },
    { id: 10, text: "I want my toy", icon: "🧸", color: "bg-rose-400" },
    { id: 11, text: "I want to jump", icon: "🤸", color: "bg-lime-400" },
    { id: 12, text: "I want my swing chair", icon: "🪑", color: "bg-teal-400" }
  ];

  connectedCallback() {
    super.connectedCallback();
    this.loadTabs();
  }

  private loadTabs(): void {
    try {
      const stored = localStorage.getItem(this.TABS_STORAGE_KEY);
      if (stored) {
        const data: TabsData = JSON.parse(stored);
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
        requests: [...this.requests],
        createdAt: Date.now()
      }
    ];
    this.activeTabId = this.DEFAULT_TAB_ID;
    this.saveTabs();
  }

  private saveTabs(): void {
    try {
      const data: TabsData = {
        tabs: this.tabs,
        activeTabId: this.activeTabId
      };
      localStorage.setItem(this.TABS_STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.error('Error saving tabs:', e);
    }
  }

  private getActiveTab(): Tab | undefined {
    return this.tabs.find(tab => tab.id === this.activeTabId);
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
      createdAt: Date.now()
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

  private handleRequest(request: Request) {
    this.activeRequest = request;

    const utterance = new SpeechSynthesisUtterance(request.text);
    utterance.rate = 1.0;
    utterance.pitch = 1.3;
    utterance.volume = 1;

    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find(voice => 
      voice.lang.startsWith('en') && 
      (voice.name.includes('Google') || 
       voice.name.includes('Samantha') || 
       voice.name.includes('Natural') || 
       voice.name.includes('Premium'))
    );

    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }

    window.speechSynthesis.speak(utterance);
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
          <p class="subtitle">What do you need?</p>
        </div>

        ${this.activeRequest ? html`
          <div class="active-request">
            <div class="active-request-icon">${this.activeRequest.icon}</div>
            <div class="active-request-text">${this.activeRequest.text}</div>
            <button class="close-btn" @click=${this.clearRequest}>×</button>
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

        <div class="requests-grid">
          ${currentRequests.map(request => html`
            <div 
              class="request-card ${request.color}"
              @click=${() => this.handleRequest(request)}
            >
              <div class="request-icon">${request.icon}</div>
              <div class="request-text">${request.text}</div>
            </div>
          `)}
        </div>

        <p class="footer-text">Tap any button to make a request</p>
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
