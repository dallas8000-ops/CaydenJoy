import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { PremiumManager, PremiumTier } from '../utils/premium-manager';
import { resolveRouterPath } from '../router';

interface TierOption {
  id: PremiumTier;
  name: string;
  price: string;
  summary: string;
  bestFor: string;
  features: string[];
}

@customElement('app-premium')
export class Premium extends LitElement {
  @state() private isPremium = false;
  @state() private activeTier: PremiumTier = 'none';
  @state() private selectedTier: PremiumTier = 'learning';
  @state() private showPurchaseConfirm = false;
  @state() private purchaseMessage = '';

  private premiumManager = PremiumManager.getInstance();

  private readonly tiers: TierOption[] = [
    {
      id: 'family',
      name: 'Family Photos',
      price: '$39.99',
      summary: 'Personalize the app with real pictures.',
      bestFor: 'Families who mainly need custom photos.',
      features: [
        'Upload custom images',
        'Organize photos by category',
        'Use real family, food, toy, and place pictures',
        'Local device storage',
      ],
    },
    {
      id: 'learning',
      name: 'Learning Plus',
      price: '$99.99',
      summary: 'Adds organization and backup tools.',
      bestFor: 'Home practice, therapy sessions, and school routines.',
      features: [
        'Everything in Family Photos',
        'Additional custom tabs',
        'Export and import custom image backups',
        'Better setup for activity sessions',
      ],
    },
    {
      id: 'allAccess',
      name: 'All Access',
      price: '$149.99',
      summary: 'Full feature access for serious long-term use.',
      bestFor: 'Caregivers, therapy teams, and multi-context use.',
      features: [
        'Everything in Learning Plus',
        'Voice customization access',
        'All current premium features',
        'Future premium feature updates',
        'Priority support',
      ],
    },
  ];

  static styles = css`
    :host {
      display: block;
      min-height: 100vh;
      padding: 1.25rem;
      background: #f6f8fb;
      color: #243041;
    }

    .container {
      max-width: 1180px;
      margin: 0 auto;
    }

    .header {
      margin-bottom: 1rem;
    }

    h1 {
      margin: 0;
      color: #243041;
      font-size: 2rem;
      line-height: 1.1;
    }

    .subtitle {
      margin: 0.4rem 0 0;
      max-width: 780px;
      color: #596779;
      font-size: 1.05rem;
      line-height: 1.45;
    }

    .status-banner {
      display: grid;
      gap: 0.4rem;
      margin: 1rem 0;
      padding: 1rem;
      border-left: 8px solid #2e8f74;
      border-radius: 0.5rem;
      background: #edf7f4;
      color: #1f463b;
      font-weight: 800;
    }

    .tier-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 1rem;
      margin: 1rem 0;
    }

    .tier-card {
      display: grid;
      gap: 0.75rem;
      align-content: start;
      min-height: 520px;
      padding: 1rem;
      border: 3px solid #d8e0ea;
      border-radius: 0.5rem;
      background: #ffffff;
      box-shadow: 0 4px 16px rgba(30, 42, 58, 0.1);
    }

    .tier-card.selected {
      border-color: #2e8f74;
      box-shadow: 0 0 0 5px rgba(46, 143, 116, 0.18);
    }

    .tier-name {
      font-size: 1.35rem;
      font-weight: 900;
      color: #243041;
    }

    .tier-price {
      font-size: 2.4rem;
      line-height: 1;
      font-weight: 900;
      color: #1f7a8c;
    }

    .one-time {
      color: #657386;
      font-weight: 800;
    }

    .tier-summary {
      color: #243041;
      font-weight: 800;
      line-height: 1.35;
    }

    .best-for {
      padding: 0.75rem;
      border-radius: 0.5rem;
      background: #edf7f4;
      color: #1f463b;
      font-weight: 800;
      line-height: 1.35;
    }

    ul {
      margin: 0;
      padding-left: 1.2rem;
      color: #4e5d70;
      line-height: 1.45;
      font-weight: 700;
    }

    li {
      margin-bottom: 0.45rem;
    }

    .tier-button,
    .secondary-button,
    .confirm-button {
      min-height: 52px;
      border: 0;
      border-radius: 0.5rem;
      cursor: pointer;
      font-weight: 900;
      font-size: 1rem;
    }

    .tier-button {
      align-self: end;
      margin-top: auto;
      background: #243041;
      color: #ffffff;
    }

    .tier-button.selected {
      background: #2e8f74;
    }

    .actions {
      display: flex;
      gap: 0.75rem;
      flex-wrap: wrap;
      align-items: center;
      margin: 1rem 0;
      padding: 1rem;
      border-radius: 0.5rem;
      background: #ffffff;
      border: 1px solid #d8e0ea;
    }

    .confirm-button {
      min-width: 220px;
      padding: 0.75rem 1rem;
      background: #2e8f74;
      color: #ffffff;
    }

    .secondary-button {
      padding: 0.75rem 1rem;
      background: #e8edf3;
      color: #243041;
    }

    .note {
      color: #657386;
      font-weight: 700;
      line-height: 1.4;
    }

    .feature-panel {
      margin-top: 1rem;
      padding: 1rem;
      border-radius: 0.5rem;
      background: #ffffff;
      border: 1px solid #d8e0ea;
    }

    .feature-panel h2 {
      margin: 0 0 0.75rem;
      color: #243041;
      font-size: 1.3rem;
    }

    .feature-grid {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 0.75rem;
    }

    .feature {
      padding: 0.85rem;
      border-radius: 0.5rem;
      background: #f8fafc;
      border-left: 6px solid #1f7a8c;
      color: #243041;
      font-weight: 800;
      line-height: 1.35;
    }

    .modal-overlay {
      position: fixed;
      inset: 0;
      display: grid;
      place-items: center;
      padding: 1rem;
      background: rgba(0, 0, 0, 0.55);
      z-index: 1000;
    }

    .modal {
      width: min(520px, 100%);
      padding: 1.25rem;
      border-radius: 0.5rem;
      background: #ffffff;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.28);
    }

    .modal h2 {
      margin: 0 0 0.5rem;
      color: #243041;
    }

    .modal-buttons {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0.75rem;
      margin-top: 1rem;
    }

    @media (max-width: 900px) {
      .tier-grid,
      .feature-grid {
        grid-template-columns: 1fr;
      }

      .tier-card {
        min-height: auto;
      }
    }
  `;

  connectedCallback(): void {
    super.connectedCallback();
    this.refreshPremiumState();
  }

  private refreshPremiumState(): void {
    this.isPremium = this.premiumManager.isPremium();
    this.activeTier = this.premiumManager.getTier();
    if (this.activeTier !== 'none') {
      this.selectedTier = this.activeTier;
    }
  }

  private get selectedTierOption(): TierOption {
    return this.tiers.find((tier) => tier.id === this.selectedTier) ?? this.tiers[1];
  }

  private selectTier(tier: PremiumTier): void {
    if (tier === 'none') return;
    this.selectedTier = tier;
  }

  private openPurchaseConfirm(): void {
    this.showPurchaseConfirm = true;
  }

  private cancelPurchase(): void {
    this.showPurchaseConfirm = false;
  }

  private confirmPurchase(): void {
    this.premiumManager.simulatePremiumPurchase(this.selectedTier);
    this.refreshPremiumState();
    this.showPurchaseConfirm = false;
    this.purchaseMessage = `${this.selectedTierOption.name} is active.`;
  }

  render() {
    const selected = this.selectedTierOption;

    return html`
      <div class="container">
        <section class="header">
          <h1>Premium Tiers</h1>
          <p class="subtitle">
            Choose the level that fits the family. These suggested one-time prices keep CaydenJoy below major AAC apps while reflecting serious communication, activity, backup, and caregiver value.
            Early access discounts can be offered without lowering the long-term value of the app.
          </p>
        </section>

        ${this.isPremium ? html`
          <div class="status-banner">
            <div>Premium active: ${this.tiers.find((tier) => tier.id === this.activeTier)?.name ?? 'All Access'}</div>
            <div>${this.purchaseMessage || 'Premium features are unlocked for this device.'}</div>
          </div>
        ` : ''}

        <section class="tier-grid" aria-label="Premium tier options">
          ${this.tiers.map((tier) => html`
            <article class="tier-card ${this.selectedTier === tier.id ? 'selected' : ''}">
              <div class="tier-name">${tier.name}</div>
              <div>
                <div class="tier-price">${tier.price}</div>
                <div class="one-time">one-time purchase</div>
              </div>
              <div class="tier-summary">${tier.summary}</div>
              <div class="best-for">${tier.bestFor}</div>
              <ul>
                ${tier.features.map((feature) => html`<li>${feature}</li>`)}
              </ul>
              <button
                class="tier-button ${this.selectedTier === tier.id ? 'selected' : ''}"
                @click=${() => this.selectTier(tier.id)}
              >
                ${this.selectedTier === tier.id ? 'Selected' : 'Select'}
              </button>
            </article>
          `)}
        </section>

        <section class="actions">
          <button class="confirm-button" @click=${this.openPurchaseConfirm}>
            Unlock ${selected.name}
          </button>
          <a class="secondary-button" href=${resolveRouterPath('upgrade')}>Use Upgrade Code</a>
          <a class="secondary-button" href=${resolveRouterPath('settings')}>Later</a>
          <div class="note">
            In production, this will connect to Google Play Billing. In this build it simulates the selected tier so the feature gates can be tested.
          </div>
        </section>

        <section class="feature-panel">
          <h2>Enhanced Premium Value</h2>
          <div class="feature-grid">
            <div class="feature">Real photo uploads for food, people, places, activities, and routines.</div>
            <div class="feature">Custom tabs for communication boards and learning pages.</div>
            <div class="feature">Export/import backup tools for custom image libraries.</div>
            <div class="feature">All Access keeps room for future caregiver and therapy tools.</div>
          </div>
        </section>
      </div>

      ${this.showPurchaseConfirm ? html`
        <div class="modal-overlay" @click=${this.cancelPurchase}>
          <div class="modal" @click=${(event: Event) => event.stopPropagation()}>
            <h2>Confirm Tier</h2>
            <p><strong>${selected.name}</strong> will be unlocked for ${selected.price} in this simulated test purchase.</p>
            <p class="note">This is not a real charge. It verifies the premium flow inside the app.</p>
            <div class="modal-buttons">
              <button class="confirm-button" @click=${this.confirmPurchase}>Confirm</button>
              <button class="secondary-button" @click=${this.cancelPurchase}>Cancel</button>
            </div>
          </div>
        </div>
      ` : ''}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-premium': Premium;
  }
}
