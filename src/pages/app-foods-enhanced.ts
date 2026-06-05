import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { PremiumManager } from '../utils/premium-manager.js';

interface FoodItem {
  id: string;
  name: string;
  imageUrl: string;
}

interface FoodTab {
  id: string;
  name: string;
  foods: FoodItem[];
  createdAt: number;
}

interface FoodsTabsData {
  tabs: FoodTab[];
  activeTabId: string | null;
}

@customElement('app-foods-enhanced')
export class AppFoodsEnhanced extends LitElement {
  @state() foods: FoodItem[] = [
    { id: 'chicken', name: 'Chicken', imageUrl: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=700&q=85' },
    { id: 'noodles', name: 'Noodles', imageUrl: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=700&q=85' },
    { id: 'rice', name: 'Rice', imageUrl: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=700&q=85' },
    { id: 'cereal', name: 'Cereal', imageUrl: 'https://images.unsplash.com/photo-1521483451569-e33803c0330c?auto=format&fit=crop&w=700&q=85' },
    { id: 'bread', name: 'Bread', imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=85' },
    { id: 'potatoes', name: 'Potatoes', imageUrl: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=700&q=85' },
    { id: 'donut', name: 'Donut', imageUrl: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=700&q=85' },
    { id: 'candy', name: 'Candy', imageUrl: 'https://images.unsplash.com/photo-1581798459219-318e76aecc7b?auto=format&fit=crop&w=700&q=85' },
    { id: 'juice', name: 'Juice', imageUrl: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?auto=format&fit=crop&w=700&q=85' },
    { id: 'water', name: 'Water', imageUrl: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=700&q=85' },
    { id: 'apple', name: 'Apple', imageUrl: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=700&q=85' },
    { id: 'banana', name: 'Banana', imageUrl: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=700&q=85' },
  ];

  @state() selectedFood: FoodItem | null = null;
  @state() tabs: FoodTab[] = [];
  @state() activeTabId: string | null = null;
  @state() showNewTabModal = false;
  @state() newTabName = '';

  private premiumManager = PremiumManager.getInstance();
  private readonly DEFAULT_TAB_ID = 'default';
  private readonly TABS_STORAGE_KEY = 'caydenjoy_foods_tabs';

  static styles = css`
    :host { display: block; min-height: 100vh; padding: 1.25rem; background: #f6f8fb; color: #243041; }
    .container { max-width: 1180px; margin: 0 auto; }
    h1 { margin: 0 0 0.35rem; color: #243041; font-size: 2rem; }
    .subtitle { margin: 0 0 1rem; color: #596779; }
    .selected-card { display: grid; grid-template-columns: 160px 1fr; gap: 1rem; align-items: center; margin-bottom: 1rem; padding: 0.75rem; background: #243041; color: #fff; border-radius: 0.5rem; }
    .selected-card img { width: 160px; height: 110px; object-fit: cover; border-radius: 0.4rem; }
    .selected-name { font-size: 1.65rem; font-weight: 900; }
    .photo-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(170px, 1fr)); gap: 0.9rem; margin-bottom: 1.5rem; }
    .photo-button { display: grid; grid-template-rows: 145px auto; min-height: 220px; padding: 0; overflow: hidden; border: 3px solid #d8e0ea; border-radius: 0.5rem; background: #fff; cursor: pointer; text-align: left; box-shadow: 0 3px 12px rgba(30, 42, 58, 0.12); }
    .photo-button:hover, .photo-button:focus-visible { outline: 4px solid rgba(46, 143, 116, 0.22); border-color: #2e8f74; }
    .photo-button img { width: 100%; height: 100%; object-fit: cover; background: #dfe8f1; }
    .photo-name { padding: 0.85rem; font-size: 1.15rem; font-weight: 900; color: #243041; }
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
    @media (max-width: 640px) { :host { padding: 0.8rem; } h1 { font-size: 1.55rem; } .photo-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0.65rem; } .photo-button { grid-template-rows: 116px auto; min-height: 190px; } .selected-card { grid-template-columns: 1fr; } .selected-card img { width: 100%; height: 160px; } }
  `;

  connectedCallback() {
    super.connectedCallback();
    this.loadTabs();
  }

  private normalizeFood(food: any, fallback: FoodItem): FoodItem {
    return {
      id: String(food?.id ?? fallback.id),
      name: String(food?.name ?? fallback.name),
      imageUrl: String(food?.imageUrl ?? fallback.imageUrl),
    };
  }

  private loadTabs(): void {
    try {
      const stored = localStorage.getItem(this.TABS_STORAGE_KEY);
      if (stored) {
        const data: FoodsTabsData = JSON.parse(stored);
        this.tabs = data.tabs.map((tab) => ({
          ...tab,
          foods: tab.foods.map((food, index) => this.normalizeFood(food, this.foods[index] ?? this.foods[0])),
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
    this.tabs = [{ id: this.DEFAULT_TAB_ID, name: 'Foods', foods: [...this.foods], createdAt: Date.now() }];
    this.activeTabId = this.DEFAULT_TAB_ID;
    this.saveTabs();
  }

  private saveTabs(): void {
    localStorage.setItem(this.TABS_STORAGE_KEY, JSON.stringify({ tabs: this.tabs, activeTabId: this.activeTabId }));
  }

  private getActiveTab(): FoodTab | undefined {
    return this.tabs.find((tab) => tab.id === this.activeTabId);
  }

  private switchTab(tabId: string): void {
    this.activeTabId = tabId;
    this.selectedFood = null;
    this.saveTabs();
  }

  private createNewTab(): void {
    if (!this.newTabName.trim()) {
      alert('Please enter a tab name');
      return;
    }
    const newTab = { id: `tab-${Date.now()}`, name: this.newTabName.trim(), foods: [...this.foods], createdAt: Date.now() };
    this.tabs = [...this.tabs, newTab];
    this.activeTabId = newTab.id;
    this.selectedFood = null;
    this.showNewTabModal = false;
    this.newTabName = '';
    this.saveTabs();
  }

  render() {
    const canAddTabs = this.premiumManager.canAddAdditionalTabs();
    const currentFoods = this.getActiveTab()?.foods ?? this.foods;
    return html`
      <div class="container">
        <h1>Foods</h1>
        <p class="subtitle">Detailed real food photos for recognition and choice-making.</p>
        ${this.selectedFood ? html`<div class="selected-card"><img src=${this.selectedFood.imageUrl} alt=${this.selectedFood.name} /><div class="selected-name">${this.selectedFood.name}</div></div>` : ''}
        ${canAddTabs ? html`<div class="tabs-container">${this.tabs.map((tab) => html`<button class="tab-button ${tab.id === this.activeTabId ? 'active' : ''}" @click=${() => this.switchTab(tab.id)}>${tab.name}</button>`)}<button class="add-tab-btn" @click=${() => this.showNewTabModal = true}>New Tab</button></div>` : ''}
        <div class="photo-grid">${currentFoods.map((food) => html`<button class="photo-button" @click=${() => this.selectedFood = food}><img src=${food.imageUrl} alt=${food.name} /><div class="photo-name">${food.name}</div></button>`)}</div>
      </div>
      ${this.showNewTabModal ? html`<div class="modal-overlay" @click=${() => this.showNewTabModal = false}><div class="modal" @click=${(e: Event) => e.stopPropagation()}><div class="modal-header">Create New Tab</div><input class="modal-input" placeholder="Enter tab name" .value=${this.newTabName} @input=${(e: Event) => this.newTabName = (e.target as HTMLInputElement).value} @keydown=${(e: KeyboardEvent) => e.key === 'Enter' ? this.createNewTab() : e.key === 'Escape' ? this.showNewTabModal = false : undefined} autofocus /><div class="modal-buttons"><button class="modal-btn modal-btn-secondary" @click=${() => this.showNewTabModal = false}>Cancel</button><button class="modal-btn modal-btn-primary" @click=${this.createNewTab}>Create Tab</button></div></div></div>` : ''}
    `;
  }
}
