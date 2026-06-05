import { LitElement, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { resolveRouterPath } from '../router';

import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/card/card.js';

interface PaymentResult {
  paid: boolean;
  tier: string;
  tierName: string;
  customerEmail?: string;
  upgradeKey: string;
  apkDownloadUrl?: string;
}

@customElement('app-payment-success')
export class AppPaymentSuccess extends LitElement {
  @state() private loading = true;
  @state() private error = '';
  @state() private result?: PaymentResult;

  private readonly stripeApiBase = String((import.meta as any).env.VITE_STRIPE_API_BASE || '').replace(/\/$/, '');

  static styles = css`
    :host {
      display: block;
      min-height: 100vh;
      padding: 1.25rem;
      background: #f6f8fb;
      color: #172033;
    }

    .container {
      max-width: 820px;
      margin: 0 auto;
    }

    h1 {
      margin: 0 0 0.5rem;
      color: #172033;
      line-height: 1.15;
    }

    .subtitle {
      color: #526070;
      line-height: 1.6;
      margin-bottom: 1rem;
    }

    sl-card::part(base) {
      background: #ffffff;
      border: 1px solid #d9e2ef;
      border-radius: 10px;
      box-shadow: 0 8px 20px rgba(31, 41, 55, 0.08);
      color: #172033;
    }

    .key-box {
      padding: 1rem;
      border-radius: 0.5rem;
      background: #eef5ff;
      border: 2px solid #4263eb;
      color: #172033;
      font-size: 1.25rem;
      font-weight: 900;
      letter-spacing: 0.03em;
      word-break: break-word;
    }

    .actions {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
      margin-top: 1rem;
    }

    .status {
      color: #334155;
      line-height: 1.6;
    }
  `;

  connectedCallback(): void {
    super.connectedCallback();
    this.loadPayment();
  }

  private async loadPayment(): Promise<void> {
    const sessionId = new URLSearchParams(window.location.search).get('session_id');

    if (!sessionId) {
      this.error = 'Missing Stripe checkout session.';
      this.loading = false;
      return;
    }

    if (!this.stripeApiBase) {
      this.error = 'Payment verification is not configured. Set VITE_STRIPE_API_BASE.';
      this.loading = false;
      return;
    }

    try {
      const response = await fetch(`${this.stripeApiBase}/api/checkout-session/${encodeURIComponent(sessionId)}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Unable to verify payment.');
      }

      this.result = data;
    } catch (error) {
      this.error = error instanceof Error ? error.message : 'Unable to verify payment.';
    } finally {
      this.loading = false;
    }
  }

  render() {
    return html`
      <div class="container">
        <h1>Payment Complete</h1>
        <p class="subtitle">
          Use this page to copy the upgrade key and download the Android APK.
        </p>

        <sl-card>
          ${this.loading ? html`
            <p class="status">Verifying payment with Stripe...</p>
          ` : this.error ? html`
            <p class="status"><strong>Payment verification problem:</strong> ${this.error}</p>
            <div class="actions">
              <sl-button href="${resolveRouterPath('contact')}" variant="primary">Contact Support</sl-button>
              <sl-button href="${resolveRouterPath('premium')}" variant="default">Back to Premium</sl-button>
            </div>
          ` : this.result ? html`
            <p class="status">
              <strong>${this.result.tierName}</strong> is paid and ready to unlock.
              ${this.result.customerEmail ? html` Receipt email: ${this.result.customerEmail}.` : ''}
            </p>

            <p class="status">Copy this upgrade key, then open CaydenJoy's Upgrade page and redeem it.</p>
            <div class="key-box">${this.result.upgradeKey}</div>

            <div class="actions">
              ${this.result.apkDownloadUrl ? html`
                <sl-button href="${this.result.apkDownloadUrl}" target="_blank" rel="noopener noreferrer" variant="primary">
                  Download APK
                </sl-button>
              ` : ''}
              <sl-button href="${resolveRouterPath('upgrade')}" variant="primary">Open Upgrade</sl-button>
              <sl-button href="${resolveRouterPath('contact')}" variant="default">Support</sl-button>
            </div>
          ` : ''}
        </sl-card>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-payment-success': AppPaymentSuccess;
  }
}
