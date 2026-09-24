import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { PremiumManager, PremiumTier, PREMIUM_CHANGED_EVENT } from '../utils/premium-manager';
import { IS_PLAY_BUILD, IS_DEV_MODE } from '../utils/store-config';
import { fetchPlayPrices, purchaseTier, type PaidTier } from '../utils/play-billing';
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
  @state() private checkoutError = '';
  @state() private isCheckingOut = false;
  @state() private playPrices: Partial<Record<PaidTier, string>> = {};
  @state() private isRestoring = false;

  private premiumManager = PremiumManager.getInstance();
  private readonly stripeApiBase = String((import.meta as any).env.VITE_STRIPE_API_BASE || '').replace(/\/$/, '');

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
      summary: 'Adds a voice that fits your child.',
      bestFor: 'Daily communication at home and school.',
      features: [
        'Everything in Family Photos',
        'Choose a preferred device voice',
        'Set a speaking rate across every board',
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
        'Additional named tabs on every board (Home, Grandma\'s House)',
        'Export and import custom image backups',
        'Puzzle learning sessions for home, therapy, and school',
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

    .error {
      width: 100%;
      padding: 0.85rem;
      border-radius: 0.5rem;
      background: #fff1f2;
      color: #9f1239;
      font-weight: 800;
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

  private readonly onPremiumChanged = () => this.refreshPremiumState();

  connectedCallback(): void {
    super.connectedCallback();
    this.refreshPremiumState();
    window.addEventListener(PREMIUM_CHANGED_EVENT, this.onPremiumChanged);
    if (IS_PLAY_BUILD) {
      void this.loadPlayPrices();
    }
  }

  disconnectedCallback(): void {
    window.removeEventListener(PREMIUM_CHANGED_EVENT, this.onPremiumChanged);
    super.disconnectedCallback();
  }

  /** Localized prices straight from Google Play (e.g. UGX for Ugandan users). */
  private async loadPlayPrices(): Promise<void> {
    try {
      const prices = await fetchPlayPrices();
      this.playPrices = Object.fromEntries(prices.map((p) => [p.tier, p.priceString]));
    } catch (e) {
      console.warn('[BILLING] Could not load Play prices', e);
    }
  }

  private displayPrice(tier: TierOption): string {
    return (tier.id !== 'none' && this.playPrices[tier.id as PaidTier]) || tier.price;
  }

  private async startPlayPurchase(): Promise<void> {
    if (this.selectedTier === 'none') return;
    const rank: Record<PremiumTier, number> = { none: 0, family: 1, learning: 2, allAccess: 3 };
    if (rank[this.selectedTier] <= rank[this.activeTier]) {
      // Tiers are separate Play products; never charge for one already included.
      this.checkoutError = 'Your current tier already includes this. Choose a higher tier to upgrade.';
      return;
    }
    this.checkoutError = '';
    this.isCheckingOut = true;
    const result = await purchaseTier(this.selectedTier as PaidTier);
    this.isCheckingOut = false;

    if (result.status === 'purchased') {
      this.premiumManager.applyStoreTier(result.tier);
      this.refreshPremiumState();
      this.showPurchaseConfirm = false;
      this.purchaseMessage = `${this.selectedTierOption.name} is active. Thank you!`;
    } else if (result.status === 'pending') {
      this.showPurchaseConfirm = false;
      this.purchaseMessage = 'Your payment is processing. Premium unlocks automatically once Google Play confirms it.';
    } else if (result.status === 'cancelled') {
      this.showPurchaseConfirm = false;
    } else {
      this.checkoutError = result.message;
    }
  }

  private async restorePurchases(): Promise<void> {
    this.isRestoring = true;
    this.checkoutError = '';
    const tier = await this.premiumManager.syncWithPlay();
    this.isRestoring = false;
    this.refreshPremiumState();
    this.purchaseMessage = tier === 'none'
      ? 'No purchases found for this Google account.'
      : `${this.tiers.find((t) => t.id === tier)?.name ?? 'Premium'} restored.`;
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

  private async startStripeCheckout(): Promise<void> {
    if (IS_PLAY_BUILD) return;
    if (!this.stripeApiBase) {
      if (!IS_DEV_MODE) {
        this.checkoutError = 'Checkout is not available in this build yet. Please contact support.';
        return;
      }
      this.premiumManager.simulatePremiumPurchase(this.selectedTier);
      this.refreshPremiumState();
      this.showPurchaseConfirm = false;
      this.purchaseMessage = `${this.selectedTierOption.name} is active.`;
      return;
    }

    this.checkoutError = '';
    this.isCheckingOut = true;

    try {
      const response = await fetch(`${this.stripeApiBase}/api/create-checkout-session`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ tier: this.selectedTier }),
      });
      const data = await response.json();

      if (!response.ok || !data.url) {
        throw new Error(data.error || 'Unable to start Stripe checkout.');
      }

      window.location.href = data.url;
    } catch (error) {
      this.checkoutError = error instanceof Error ? error.message : 'Unable to start Stripe checkout.';
      this.isCheckingOut = false;
    }
  }

  private confirmPurchase(): void {
    if (IS_PLAY_BUILD) {
      void this.startPlayPurchase();
      return;
    }
    void this.startStripeCheckout();
  }

  private simulatePurchaseForTesting(): void {
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
                <div class="tier-price">${this.displayPrice(tier)}</div>
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
          ${IS_PLAY_BUILD ? html`
            <button class="secondary-button" @click=${this.restorePurchases} ?disabled=${this.isRestoring}>
              ${this.isRestoring ? 'Checking Google Play...' : 'Restore Purchases'}
            </button>
          ` : html`<a class="secondary-button" href=${resolveRouterPath('upgrade')}>Use Upgrade Code</a>`}
          <a class="secondary-button" href=${resolveRouterPath('settings')}>Later</a>
          <div class="note">
            ${IS_PLAY_BUILD
              ? 'Payment is handled securely by Google Play. Purchases stay with your Google account and can be restored on a new device.'
              : this.stripeApiBase
                ? 'Secure checkout is handled by Stripe. After payment, CaydenJoy shows the APK download and upgrade key.'
                : 'Checkout is not configured for this build.'}
          </div>
          ${this.checkoutError ? html`<div class="error">${this.checkoutError}</div>` : ''}
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
            <p><strong>${selected.name}</strong> will be purchased for ${this.displayPrice(selected)}.</p>
            <p class="note">
              ${IS_PLAY_BUILD
                ? 'Google Play will ask you to confirm the payment.'
                : this.stripeApiBase
                  ? 'You will be sent to Stripe Checkout. After payment, your upgrade key and APK download link will be shown.'
                  : 'Checkout is not configured in this build.'}
            </p>
            <div class="modal-buttons">
              <button class="confirm-button" @click=${this.confirmPurchase} ?disabled=${this.isCheckingOut}>
                ${IS_PLAY_BUILD
                  ? (this.isCheckingOut ? 'Opening Google Play...' : 'Buy with Google Play')
                  : this.isCheckingOut ? 'Opening Stripe...' : this.stripeApiBase ? 'Continue to Stripe' : IS_DEV_MODE ? 'Simulate Unlock' : 'Unavailable'}
              </button>
              <button class="secondary-button" @click=${this.cancelPurchase}>Cancel</button>
            </div>
            ${IS_DEV_MODE && !IS_PLAY_BUILD && !this.stripeApiBase ? html`
              <p class="note">
                Local test shortcut:
                <button class="secondary-button" @click=${this.simulatePurchaseForTesting}>Unlock Without Stripe</button>
              </p>
            ` : ''}
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
