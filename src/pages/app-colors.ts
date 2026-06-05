import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { PremiumManager } from '../utils/premium-manager.js';

interface ColorItem {
  id: string;
  name: string;
  hex: string;
  imageUrl: string;
  example: string;
}

interface ColorTab {
  id: string;
  name: string;
  colors: ColorItem[];
  createdAt: number;
}

interface ColorsTabsData {
  tabs: ColorTab[];
  activeTabId: string | null;
}

@customElement('app-colors')
export class AppColors extends LitElement {
  @state() colors: ColorItem[] = [
    { id: 'red', name: 'Red', hex: '#c0392b', example: 'red strawberries', imageUrl: 'https://loremflickr.com/700/500/red,strawberries/all' },
    { id: 'blue', name: 'Blue', hex: '#1976a2', example: 'blue water', imageUrl: 'https://loremflickr.com/700/500/blue,water/all' },
    { id: 'green', name: 'Green', hex: '#2e7d32', example: 'green leaves', imageUrl: 'https://loremflickr.com/700/500/green,leaves/all' },
    { id: 'yellow', name: 'Yellow', hex: '#c99700', example: 'yellow lemon', imageUrl: 'https://loremflickr.com/700/500/yellow,lemon/all' },
    { id: 'purple', name: 'Purple', hex: '#6b4fa3', example: 'purple lavender', imageUrl: 'https://loremflickr.com/700/500/purple,lavender/all' },
    { id: 'pink', name: 'Pink', hex: '#c04d86', example: 'pink rose', imageUrl: 'https://loremflickr.com/700/500/pink,rose/all' },
    { id: 'orange', name: 'Orange', hex: '#d66a1f', example: 'orange fruit', imageUrl: 'https://loremflickr.com/700/500/orange,fruit/all' },
    { id: 'brown', name: 'Brown', hex: '#795548', example: 'brown wood', imageUrl: 'https://loremflickr.com/700/500/brown,wood/all' },
    { id: 'black', name: 'Black', hex: '#20252b', example: 'black shirt', imageUrl: 'https://loremflickr.com/700/500/black,shirt/all' },
    { id: 'white', name: 'White', hex: '#f4f6f8', example: 'white towel', imageUrl: 'https://loremflickr.com/700/500/white,towel/all' },
  ];

  @state() selectedColor: ColorItem | null = null;
  @state() tabs: ColorTab[] = [];
  @state() activeTabId: string | null = null;
  @state() showNewTabModal = false;
  @state() newTabName = '';

  private premiumManager = PremiumManager.getInstance();
  private readonly DEFAULT_TAB_ID = 'default';
  private readonly TABS_STORAGE_KEY = 'caydenjoy_colors_tabs';

  static styles = css`
    :host { display: block; min-height: 100vh; padding: 1.25rem; background: #f6f8fb; color: #243041; }
    .container { max-width: 1180px; margin: 0 auto; }
    h1 { margin: 0 0 0.35rem; color: #243041; font-size: 2rem; }
    .subtitle { margin: 0 0 1rem; color: #596779; }
    .selected-card { display: grid; grid-template-columns: 170px 1fr; gap: 1rem; align-items: center; margin-bottom: 1rem; padding: 0.75rem; background: #fff; border-left: 12px solid var(--selected-color); border-radius: 0.5rem; box-shadow: 0 4px 16px rgba(30,42,58,0.12); }
    .selected-card img { width: 170px; height: 115px; object-fit: cover; border-radius: 0.4rem; }
    .selected-name { font-size: 1.65rem; font-weight: 900; color: #243041; }
    .selected-example { color: #596779; font-weight: 800; }
    .photo-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(170px, 1fr)); gap: 0.9rem; margin-bottom: 1.5rem; }
    .photo-button { display: grid; grid-template-rows: 145px 18px auto; min-height: 248px; padding: 0; overflow: hidden; border: 3px solid #d8e0ea; border-radius: 0.5rem; background: #fff; cursor: pointer; text-align: left; box-shadow: 0 3px 12px rgba(30,42,58,0.12); }
    .photo-button:hover, .photo-button:focus-visible { outline: 4px solid rgba(46,143,116,0.22); border-color: #2e8f74; }
    .photo-button img { width: 100%; height: 100%; object-fit: cover; background: #dfe8f1; }
    .color-strip { background: var(--color); border-top: 1px solid rgba(36,48,65,0.14); border-bottom: 1px solid rgba(36,48,65,0.14); }
    .card-copy { padding: 0.8rem; }
    .photo-name { font-size: 1.15rem; font-weight: 900; color: #243041; }
    .photo-example { margin-top: 0.25rem; color: #657386; font-size: 0.9rem; font-weight: 800; }
    .tabs-container { display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1rem; padding: 0.55rem; background: #e8edf3; border-radius: 0.5rem; }
    .tab-button, .add-tab-btn, .modal-btn { border-radius: 0.4rem; cursor: pointer; font-weight: 800; min-height: 44px; }
    .tab-button { border: 2px solid #c9d4e1; background: #fff; color: #243041; }
    .tab-button.active { background: #243041; border-color: #243041; color: #fff; }
    .add-tab-btn, .modal-btn-primary { border: 0; background: #2e8f74; color: #fff; }
    .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 1000; }
    .modal { width: 90%; max-width: 500px; padding: 1.5rem; border-radius: 0.5rem; background: #fff; box-shadow: 0 20px 60px rgba(0,0,0,0.3); }
    .modal-header { margin-bottom: 1rem; font-size: 1.35rem; font-weight: 900; color: #243041; }
    .modal-input { width: 100%; box-sizing: border-box; margin-bottom: 1rem; padding: 0.85rem; border: 2px solid #c9d4e1; border-radius: 0.4rem; font-size: 1rem; }
    .modal-buttons { display: flex; gap: 0.75rem; justify-content: flex-end; }
    .modal-btn-secondary { border: 0; background: #e8edf3; color: #243041; }
    @media (max-width: 640px) { :host { padding: 0.8rem; } h1 { font-size: 1.55rem; } .photo-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0.65rem; } .photo-button { grid-template-rows: 116px 16px auto; min-height: 220px; } .selected-card { grid-template-columns: 1fr; } .selected-card img { width: 100%; height: 160px; } }
  `;

  connectedCallback() {
    super.connectedCallback();
    this.loadTabs();
  }

  private normalizeColor(color: any, fallback: ColorItem): ColorItem {
    return {
      id: String(color?.id ?? fallback.id),
      name: String(color?.name ?? fallback.name),
      hex: String(color?.hex ?? fallback.hex),
      imageUrl: fallback.imageUrl,
      example: fallback.example,
    };
  }

  private loadTabs(): void {
    try {
      const stored = localStorage.getItem(this.TABS_STORAGE_KEY);
      if (stored) {
        const data: ColorsTabsData = JSON.parse(stored);
        this.tabs = data.tabs.map((tab) => ({
          ...tab,
          colors: tab.colors.map((color, index) => this.normalizeColor(color, this.colors[index] ?? this.colors[0])),
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
    this.tabs = [{ id: this.DEFAULT_TAB_ID, name: 'Colors', colors: [...this.colors], createdAt: Date.now() }];
    this.activeTabId = this.DEFAULT_TAB_ID;
    this.saveTabs();
  }

  private saveTabs(): void {
    localStorage.setItem(this.TABS_STORAGE_KEY, JSON.stringify({ tabs: this.tabs, activeTabId: this.activeTabId }));
  }

  private getActiveTab(): ColorTab | undefined {
    return this.tabs.find((tab) => tab.id === this.activeTabId);
  }

  private switchTab(tabId: string): void {
    this.activeTabId = tabId;
    this.selectedColor = null;
    this.saveTabs();
  }

  private createNewTab(): void {
    if (!this.newTabName.trim()) {
      alert('Please enter a tab name');
      return;
    }
    const newTab = { id: `tab-${Date.now()}`, name: this.newTabName.trim(), colors: [...this.colors], createdAt: Date.now() };
    this.tabs = [...this.tabs, newTab];
    this.activeTabId = newTab.id;
    this.selectedColor = null;
    this.showNewTabModal = false;
    this.newTabName = '';
    this.saveTabs();
  }

  render() {
    const canAddTabs = this.premiumManager.canAddAdditionalTabs();
    const currentColors = this.getActiveTab()?.colors ?? this.colors;
    return html`
      <div class="container">
        <h1>Colors</h1>
        <p class="subtitle">Real objects help connect colors to daily life.</p>
        ${this.selectedColor ? html`<div class="selected-card" style="--selected-color: ${this.selectedColor.hex}"><img src=${this.selectedColor.imageUrl} alt=${this.selectedColor.example} /><div><div class="selected-name">${this.selectedColor.name}</div><div class="selected-example">${this.selectedColor.example}</div></div></div>` : ''}
        ${canAddTabs ? html`<div class="tabs-container">${this.tabs.map((tab) => html`<button class="tab-button ${tab.id === this.activeTabId ? 'active' : ''}" @click=${() => this.switchTab(tab.id)}>${tab.name}</button>`)}<button class="add-tab-btn" @click=${() => this.showNewTabModal = true}>New Tab</button></div>` : ''}
        <div class="photo-grid">${currentColors.map((color) => html`<button class="photo-button" style="--color: ${color.hex}" @click=${() => this.selectedColor = color}><img src=${color.imageUrl} alt=${color.example} /><div class="color-strip" aria-hidden="true"></div><div class="card-copy"><div class="photo-name">${color.name}</div><div class="photo-example">${color.example}</div></div></button>`)}</div>
      </div>
      ${this.showNewTabModal ? html`<div class="modal-overlay" @click=${() => this.showNewTabModal = false}><div class="modal" @click=${(e: Event) => e.stopPropagation()}><div class="modal-header">Create New Tab</div><input class="modal-input" placeholder="Enter tab name" .value=${this.newTabName} @input=${(e: Event) => this.newTabName = (e.target as HTMLInputElement).value} @keydown=${(e: KeyboardEvent) => e.key === 'Enter' ? this.createNewTab() : e.key === 'Escape' ? this.showNewTabModal = false : undefined} autofocus /><div class="modal-buttons"><button class="modal-btn modal-btn-secondary" @click=${() => this.showNewTabModal = false}>Cancel</button><button class="modal-btn modal-btn-primary" @click=${this.createNewTab}>Create Tab</button></div></div></div>` : ''}
    `;
  }
}
