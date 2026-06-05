import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { PremiumManager } from '../utils/premium-manager.js';

interface NumberItem {
  id: string;
  number: number;
  label: string;
  imageUrl: string;
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

const quantityImages = [
  'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=700&q=85',
  'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=700&q=85',
  'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=700&q=85',
  'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=700&q=85',
  'https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=700&q=85',
  'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=700&q=85',
  'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=700&q=85',
  'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=700&q=85',
  'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=700&q=85',
  'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=700&q=85',
];

@customElement('app-numbers')
export class AppNumbers extends LitElement {
  @state() numbers: NumberItem[] = Array.from({ length: 20 }, (_, i) => ({
    id: `num-${i + 1}`,
    number: i + 1,
    label: `${i + 1} item${i === 0 ? '' : 's'}`,
    imageUrl: quantityImages[i % quantityImages.length],
  }));

  @state() selectedNumber: NumberItem | null = null;
  @state() tabs: NumberTab[] = [];
  @state() activeTabId: string | null = null;
  @state() showNewTabModal = false;
  @state() newTabName = '';

  private premiumManager = PremiumManager.getInstance();
  private readonly DEFAULT_TAB_ID = 'default';
  private readonly TABS_STORAGE_KEY = 'caydenjoy_numbers_tabs';

  static styles = css`
    :host { display: block; min-height: 100vh; padding: 1.25rem; background: #f6f8fb; color: #243041; }
    .container { max-width: 1180px; margin: 0 auto; }
    h1 { margin: 0 0 0.35rem; color: #243041; font-size: 2rem; }
    .subtitle { margin: 0 0 1rem; color: #596779; }
    .selected-card { display: grid; grid-template-columns: 170px 1fr; gap: 1rem; align-items: center; margin-bottom: 1rem; padding: 0.75rem; background: #243041; color: #fff; border-radius: 0.5rem; box-shadow: 0 4px 16px rgba(30,42,58,0.12); }
    .selected-card img { width: 170px; height: 115px; object-fit: cover; border-radius: 0.4rem; }
    .selected-value { font-size: 3rem; line-height: 1; font-weight: 900; }
    .selected-label { margin-top: 0.3rem; font-size: 1.2rem; font-weight: 800; }
    .number-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 0.9rem; margin-bottom: 1.5rem; }
    .number-button { position: relative; display: grid; grid-template-rows: 135px auto; min-height: 220px; padding: 0; overflow: hidden; border: 3px solid #d8e0ea; border-radius: 0.5rem; background: #fff; cursor: pointer; text-align: left; box-shadow: 0 3px 12px rgba(30,42,58,0.12); }
    .number-button:hover, .number-button:focus-visible { outline: 4px solid rgba(46,143,116,0.22); border-color: #2e8f74; }
    .number-button img { width: 100%; height: 100%; object-fit: cover; background: #dfe8f1; }
    .number-badge { position: absolute; top: 0.55rem; left: 0.55rem; display: grid; place-items: center; width: 48px; height: 48px; border-radius: 50%; background: #243041; color: #fff; font-size: 1.45rem; font-weight: 900; }
    .card-copy { padding: 0.85rem; }
    .number-name { font-size: 1.15rem; font-weight: 900; color: #243041; }
    .number-label { margin-top: 0.25rem; color: #657386; font-size: 0.9rem; font-weight: 800; }
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
    @media (max-width: 640px) { :host { padding: 0.8rem; } h1 { font-size: 1.55rem; } .number-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0.65rem; } .number-button { grid-template-rows: 112px auto; min-height: 198px; } .selected-card { grid-template-columns: 1fr; } .selected-card img { width: 100%; height: 160px; } }
  `;

  connectedCallback() {
    super.connectedCallback();
    this.loadTabs();
  }

  private normalizeNumber(item: any, fallback: NumberItem): NumberItem {
    return {
      id: String(item?.id ?? fallback.id),
      number: Number(item?.number ?? fallback.number),
      label: String(item?.label ?? `${item?.number ?? fallback.number} item${Number(item?.number ?? fallback.number) === 1 ? '' : 's'}`),
      imageUrl: String(item?.imageUrl ?? fallback.imageUrl),
    };
  }

  private loadTabs(): void {
    try {
      const stored = localStorage.getItem(this.TABS_STORAGE_KEY);
      if (stored) {
        const data: NumbersTabsData = JSON.parse(stored);
        this.tabs = data.tabs.map((tab) => ({
          ...tab,
          numbers: tab.numbers.map((item, index) => this.normalizeNumber(item, this.numbers[index] ?? this.numbers[0])),
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
    this.tabs = [{ id: this.DEFAULT_TAB_ID, name: 'Numbers', numbers: [...this.numbers], createdAt: Date.now() }];
    this.activeTabId = this.DEFAULT_TAB_ID;
    this.saveTabs();
  }

  private saveTabs(): void {
    localStorage.setItem(this.TABS_STORAGE_KEY, JSON.stringify({ tabs: this.tabs, activeTabId: this.activeTabId }));
  }

  private getActiveTab(): NumberTab | undefined {
    return this.tabs.find((tab) => tab.id === this.activeTabId);
  }

  private switchTab(tabId: string): void {
    this.activeTabId = tabId;
    this.selectedNumber = null;
    this.saveTabs();
  }

  private createNewTab(): void {
    if (!this.newTabName.trim()) {
      alert('Please enter a tab name');
      return;
    }
    const newTab = { id: `tab-${Date.now()}`, name: this.newTabName.trim(), numbers: [...this.numbers], createdAt: Date.now() };
    this.tabs = [...this.tabs, newTab];
    this.activeTabId = newTab.id;
    this.selectedNumber = null;
    this.showNewTabModal = false;
    this.newTabName = '';
    this.saveTabs();
  }

  render() {
    const canAddTabs = this.premiumManager.canAddAdditionalTabs();
    const currentNumbers = this.getActiveTab()?.numbers ?? this.numbers;
    return html`
      <div class="container">
        <h1>Numbers</h1>
        <p class="subtitle">Numbers shown with real quantity photos and clear number badges.</p>
        ${this.selectedNumber ? html`<div class="selected-card"><img src=${this.selectedNumber.imageUrl} alt=${this.selectedNumber.label} /><div><div class="selected-value">${this.selectedNumber.number}</div><div class="selected-label">${this.selectedNumber.label}</div></div></div>` : ''}
        ${canAddTabs ? html`<div class="tabs-container">${this.tabs.map((tab) => html`<button class="tab-button ${tab.id === this.activeTabId ? 'active' : ''}" @click=${() => this.switchTab(tab.id)}>${tab.name}</button>`)}<button class="add-tab-btn" @click=${() => this.showNewTabModal = true}>New Tab</button></div>` : ''}
        <div class="number-grid">${currentNumbers.map((item) => html`<button class="number-button" @click=${() => this.selectedNumber = item}><span class="number-badge">${item.number}</span><img src=${item.imageUrl} alt=${item.label} /><div class="card-copy"><div class="number-name">${item.number}</div><div class="number-label">${item.label}</div></div></button>`)}</div>
      </div>
      ${this.showNewTabModal ? html`<div class="modal-overlay" @click=${() => this.showNewTabModal = false}><div class="modal" @click=${(e: Event) => e.stopPropagation()}><div class="modal-header">Create New Tab</div><input class="modal-input" placeholder="Enter tab name" .value=${this.newTabName} @input=${(e: Event) => this.newTabName = (e.target as HTMLInputElement).value} @keydown=${(e: KeyboardEvent) => e.key === 'Enter' ? this.createNewTab() : e.key === 'Escape' ? this.showNewTabModal = false : undefined} autofocus /><div class="modal-buttons"><button class="modal-btn modal-btn-secondary" @click=${() => this.showNewTabModal = false}>Cancel</button><button class="modal-btn modal-btn-primary" @click=${this.createNewTab}>Create Tab</button></div></div></div>` : ''}
    `;
  }
}
