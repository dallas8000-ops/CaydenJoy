import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { PremiumManager } from '../utils/premium-manager.js';
import { AccessibilityManager } from '../utils/accessibility-manager.js';
import { CustomImagesManager } from '../utils/custom-images-manager.js';
import { SentenceBuilder } from '../utils/sentence-builder.js';
import { resolveRouterPath } from '../router';

interface NumberItem {
  id: string;
  number: number;
  label: string;
  imageUrl: string;
  isCustom?: boolean;
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

// One unique photo per number, 1:1 - no reuse. These are themed photos next
// to the number badge, NOT a claim that the photo shows that exact count of
// objects (most stock photography can't be verified to show a precise
// quantity). The number badge on each card is the actual quantity signal.
// Real quantity-accurate photos (e.g. "6 crayons lined up") can be added
// through the upload link below using the 'numbers' custom-image category.
const numberImages: Record<number, string> = {
  1: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=700&q=85',
  2: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=700&q=85',
  3: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=700&q=85',
  4: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=700&q=85',
  5: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=700&q=85',
  6: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=700&q=85',
  7: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=700&q=85',
  8: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=700&q=85',
  9: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=700&q=85',
  10: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=700&q=85',
};

@customElement('app-numbers')
export class AppNumbers extends LitElement {
  @state() numbers: NumberItem[] = Array.from({ length: 10 }, (_, i) => ({
    id: `num-${i + 1}`,
    number: i + 1,
    label: `Number ${i + 1}`,
    imageUrl: numberImages[i + 1],
  }));

  @state() selectedNumber: NumberItem | null = null;
  @state() tabs: NumberTab[] = [];
  @state() activeTabId: string | null = null;
  @state() showNewTabModal = false;
  @state() newTabName = '';
  @state() customNumbers: NumberItem[] = [];

  private premiumManager = PremiumManager.getInstance();
  private accessibilityManager = AccessibilityManager.getInstance();
  private customImagesManager = CustomImagesManager.getInstance();
  private sentenceBuilder = SentenceBuilder.getInstance();
  private readonly DEFAULT_TAB_ID = 'default';
  private readonly TABS_STORAGE_KEY = 'caydenjoy_numbers_tabs';
  private readonly CUSTOM_CATEGORY = 'numbers';

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
    .add-photos-link { display: inline-flex; align-items: center; gap: 0.4rem; margin-bottom: 1rem; padding: 0.6rem 1rem; border-radius: 0.4rem; background: #edf7f4; color: #1f463b; font-weight: 800; text-decoration: none; border: 2px dashed #2e8f74; }
    .custom-badge { display: inline-block; margin-left: 0.4rem; padding: 0.1rem 0.4rem; border-radius: 0.3rem; background: #2e8f74; color: #fff; font-size: 0.7rem; font-weight: 900; vertical-align: middle; }
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
    this.loadCustomImages();
  }

  private loadCustomImages(): void {
    this.customNumbers = this.customImagesManager
      .getImagesByCategory(this.CUSTOM_CATEGORY)
      .map((img) => ({ id: `custom-${img.id}`, number: 0, label: img.name, imageUrl: img.dataUrl, isCustom: true }));
  }

  private normalizeNumber(item: any, fallback: NumberItem): NumberItem {
    return {
      id: String(item?.id ?? fallback.id),
      number: Number(item?.number ?? fallback.number),
      label: String(item?.label ?? `Number ${item?.number ?? fallback.number}`),
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

  private selectNumber(item: NumberItem): void {
    this.selectedNumber = item;
    this.accessibilityManager.speakNow(item.isCustom ? item.label : `${item.number}. ${item.label}.`, 0.9);
    this.sentenceBuilder.addWord({ label: item.isCustom ? item.label : String(item.number), imageUrl: item.imageUrl });
  }

  render() {
    const canAddTabs = this.premiumManager.canAddAdditionalTabs();
    const currentNumbers: NumberItem[] = [...(this.getActiveTab()?.numbers ?? this.numbers), ...this.customNumbers];
    return html`
      <div class="container">
        <h1>Numbers</h1>
        <p class="subtitle">Tap a number to hear it. Add real, quantity-accurate photos of Cayden's own things below.</p>
        <a class="add-photos-link" href="${resolveRouterPath('custom-images')}?category=${this.CUSTOM_CATEGORY}">📸 Add Cayden's real counting photos</a>
        ${this.selectedNumber ? html`<div class="selected-card"><img src=${this.selectedNumber.imageUrl} alt=${this.selectedNumber.label} /><div><div class="selected-value">${this.selectedNumber.isCustom ? '' : this.selectedNumber.number}</div><div class="selected-label">${this.selectedNumber.label}</div></div></div>` : ''}
        ${canAddTabs ? html`<div class="tabs-container">${this.tabs.map((tab) => html`<button class="tab-button ${tab.id === this.activeTabId ? 'active' : ''}" @click=${() => this.switchTab(tab.id)}>${tab.name}</button>`)}<button class="add-tab-btn" @click=${() => this.showNewTabModal = true}>New Tab</button></div>` : ''}
        <div class="number-grid">${currentNumbers.map((item) => html`<button class="number-button" @click=${() => this.selectNumber(item)}>${item.isCustom ? '' : html`<span class="number-badge">${item.number}</span>`}<img src=${item.imageUrl} alt=${item.label} /><div class="card-copy"><div class="number-name">${item.isCustom ? item.label : item.number}${item.isCustom ? html`<span class="custom-badge">Cayden's</span>` : ''}</div><div class="number-label">${item.label}</div></div></button>`)}</div>
      </div>
      ${this.showNewTabModal ? html`<div class="modal-overlay" @click=${() => this.showNewTabModal = false}><div class="modal" @click=${(e: Event) => e.stopPropagation()}><div class="modal-header">Create New Tab</div><input class="modal-input" placeholder="Enter tab name" .value=${this.newTabName} @input=${(e: Event) => this.newTabName = (e.target as HTMLInputElement).value} @keydown=${(e: KeyboardEvent) => e.key === 'Enter' ? this.createNewTab() : e.key === 'Escape' ? this.showNewTabModal = false : undefined} autofocus /><div class="modal-buttons"><button class="modal-btn modal-btn-secondary" @click=${() => this.showNewTabModal = false}>Cancel</button><button class="modal-btn modal-btn-primary" @click=${this.createNewTab}>Create Tab</button></div></div></div>` : ''}
    `;
  }
}
