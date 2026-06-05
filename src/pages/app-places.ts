import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { PremiumManager } from '../utils/premium-manager.js';

interface PlaceItem {
  id: string;
  name: string;
  phrase: string;
  color: string;
  imageUrl: string;
}

interface PlaceTab {
  id: string;
  name: string;
  places: PlaceItem[];
  createdAt: number;
}

interface PlacesTabsData {
  tabs: PlaceTab[];
  activeTabId: string | null;
}

@customElement('app-places')
export class AppPlaces extends LitElement {
  @state() places: PlaceItem[] = [
    { id: 'home', name: 'Home', phrase: 'I want to go home.', color: '#c0392b', imageUrl: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=700&q=85' },
    { id: 'school', name: 'School', phrase: 'I am going to school.', color: '#1f7a8c', imageUrl: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=700&q=85' },
    { id: 'park', name: 'Park', phrase: 'I want to go to the park.', color: '#2e7d32', imageUrl: 'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=700&q=85' },
    { id: 'store', name: 'Store', phrase: 'We are going to the store.', color: '#9a6a12', imageUrl: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=700&q=85' },
    { id: 'doctor', name: 'Doctor', phrase: 'We are going to the doctor.', color: '#6b5b95', imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=700&q=85' },
    { id: 'beach', name: 'Beach', phrase: 'I want to go to the beach.', color: '#1976a2', imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=85' },
    { id: 'restaurant', name: 'Restaurant', phrase: 'We are going to a restaurant.', color: '#b65f1f', imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=700&q=85' },
    { id: 'library', name: 'Library', phrase: 'We are going to the library.', color: '#795548', imageUrl: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=700&q=85' },
    { id: 'zoo', name: 'Zoo', phrase: 'I want to go to the zoo.', color: '#2e7d32', imageUrl: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=700&q=90' },
    { id: 'therapy', name: 'Therapy', phrase: 'I am going to therapy.', color: '#4f7f8f', imageUrl: 'https://images.unsplash.com/photo-1576765607924-0f4d9a1d563b?auto=format&fit=crop&w=700&q=85' },
    { id: 'playground', name: 'Playground', phrase: 'I want to go to the playground.', color: '#7a4fb0', imageUrl: 'https://images.unsplash.com/photo-1596997000103-e597b3ca50df?auto=format&fit=crop&w=700&q=85' },
  ];

  @state() selectedPlace: PlaceItem | null = null;
  @state() tabs: PlaceTab[] = [];
  @state() activeTabId: string | null = null;
  @state() showNewTabModal = false;
  @state() newTabName = '';

  private premiumManager = PremiumManager.getInstance();
  private readonly DEFAULT_TAB_ID = 'default';
  private readonly TABS_STORAGE_KEY = 'caydenjoy_places_tabs';

  static styles = css`
    :host { display: block; min-height: 100vh; padding: 1.25rem; background: #f6f8fb; color: #243041; }
    .container { max-width: 1180px; margin: 0 auto; }
    h1 { margin: 0 0 0.35rem; color: #243041; font-size: 2rem; }
    .subtitle { margin: 0 0 1rem; color: #596779; }
    .selected-card { display: grid; grid-template-columns: 175px 1fr; gap: 1rem; align-items: center; margin-bottom: 1rem; padding: 0.75rem; background: #243041; color: #fff; border-radius: 0.5rem; border-left: 12px solid var(--place-color); box-shadow: 0 4px 16px rgba(30,42,58,0.12); }
    .selected-card img { width: 175px; height: 115px; object-fit: cover; border-radius: 0.4rem; }
    .selected-name { font-size: 1.65rem; font-weight: 900; }
    .selected-phrase { margin-top: 0.3rem; font-size: 1.05rem; font-weight: 800; color: #d9e2ec; }
    .place-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(175px, 1fr)); gap: 0.9rem; margin-bottom: 1.5rem; }
    .place-button { display: grid; grid-template-rows: 145px auto; min-height: 232px; padding: 0; overflow: hidden; border: 3px solid #d8e0ea; border-bottom: 8px solid var(--place-color); border-radius: 0.5rem; background: #fff; cursor: pointer; text-align: left; box-shadow: 0 3px 12px rgba(30,42,58,0.12); }
    .place-button:hover, .place-button:focus-visible { outline: 4px solid rgba(46,143,116,0.22); border-color: #2e8f74; }
    .place-button img { width: 100%; height: 100%; object-fit: cover; background: #dfe8f1; }
    .card-copy { padding: 0.85rem; }
    .place-name { font-size: 1.15rem; font-weight: 900; color: #243041; }
    .place-phrase { margin-top: 0.25rem; color: #657386; font-size: 0.88rem; font-weight: 800; line-height: 1.3; }
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
    @media (max-width: 640px) { :host { padding: 0.8rem; } h1 { font-size: 1.55rem; } .place-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0.65rem; } .place-button { grid-template-rows: 116px auto; min-height: 210px; } .selected-card { grid-template-columns: 1fr; } .selected-card img { width: 100%; height: 160px; } }
  `;

  connectedCallback() {
    super.connectedCallback();
    this.loadTabs();
  }

  private normalizePlace(place: any, fallback: PlaceItem): PlaceItem {
    const id = String(place?.id ?? fallback.id);
    const matchingDefault = this.places.find((defaultPlace) => defaultPlace.id === id) ?? fallback;

    return {
      id,
      name: String(place?.name ?? matchingDefault.name),
      phrase: String(place?.phrase ?? matchingDefault.phrase),
      color: String(place?.color ?? matchingDefault.color),
      imageUrl: matchingDefault.imageUrl,
    };
  }

  private loadTabs(): void {
    try {
      const stored = localStorage.getItem(this.TABS_STORAGE_KEY);
      if (stored) {
        const data: PlacesTabsData = JSON.parse(stored);
        this.tabs = data.tabs.map((tab) => ({
          ...tab,
          places: tab.places.map((place, index) => this.normalizePlace(place, this.places[index] ?? this.places[0])),
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
    this.tabs = [{ id: this.DEFAULT_TAB_ID, name: 'Places', places: [...this.places], createdAt: Date.now() }];
    this.activeTabId = this.DEFAULT_TAB_ID;
    this.saveTabs();
  }

  private saveTabs(): void {
    localStorage.setItem(this.TABS_STORAGE_KEY, JSON.stringify({ tabs: this.tabs, activeTabId: this.activeTabId }));
  }

  private getActiveTab(): PlaceTab | undefined {
    return this.tabs.find((tab) => tab.id === this.activeTabId);
  }

  private switchTab(tabId: string): void {
    this.activeTabId = tabId;
    this.selectedPlace = null;
    this.saveTabs();
  }

  private createNewTab(): void {
    if (!this.newTabName.trim()) {
      alert('Please enter a tab name');
      return;
    }
    const newTab = { id: `tab-${Date.now()}`, name: this.newTabName.trim(), places: [...this.places], createdAt: Date.now() };
    this.tabs = [...this.tabs, newTab];
    this.activeTabId = newTab.id;
    this.selectedPlace = null;
    this.showNewTabModal = false;
    this.newTabName = '';
    this.saveTabs();
  }

  render() {
    const canAddTabs = this.premiumManager.canAddAdditionalTabs();
    const currentPlaces = this.getActiveTab()?.places ?? this.places;
    return html`
      <div class="container">
        <h1>Places</h1>
        <p class="subtitle">Real place photos for daily routines and transitions.</p>
        ${this.selectedPlace ? html`<div class="selected-card" style="--place-color: ${this.selectedPlace.color}"><img src=${this.selectedPlace.imageUrl} alt=${this.selectedPlace.name} /><div><div class="selected-name">${this.selectedPlace.name}</div><div class="selected-phrase">${this.selectedPlace.phrase}</div></div></div>` : ''}
        ${canAddTabs ? html`<div class="tabs-container">${this.tabs.map((tab) => html`<button class="tab-button ${tab.id === this.activeTabId ? 'active' : ''}" @click=${() => this.switchTab(tab.id)}>${tab.name}</button>`)}<button class="add-tab-btn" @click=${() => this.showNewTabModal = true}>New Tab</button></div>` : ''}
        <div class="place-grid">${currentPlaces.map((place) => html`<button class="place-button" style="--place-color: ${place.color}" @click=${() => this.selectedPlace = place}><img src=${place.imageUrl} alt=${place.name} /><div class="card-copy"><div class="place-name">${place.name}</div><div class="place-phrase">${place.phrase}</div></div></button>`)}</div>
      </div>
      ${this.showNewTabModal ? html`<div class="modal-overlay" @click=${() => this.showNewTabModal = false}><div class="modal" @click=${(e: Event) => e.stopPropagation()}><div class="modal-header">Create New Tab</div><input class="modal-input" placeholder="Enter tab name" .value=${this.newTabName} @input=${(e: Event) => this.newTabName = (e.target as HTMLInputElement).value} @keydown=${(e: KeyboardEvent) => e.key === 'Enter' ? this.createNewTab() : e.key === 'Escape' ? this.showNewTabModal = false : undefined} autofocus /><div class="modal-buttons"><button class="modal-btn modal-btn-secondary" @click=${() => this.showNewTabModal = false}>Cancel</button><button class="modal-btn modal-btn-primary" @click=${this.createNewTab}>Create Tab</button></div></div></div>` : ''}
    `;
  }
}
