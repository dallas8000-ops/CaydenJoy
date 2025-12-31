import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { PremiumManager } from '../utils/premium-manager';

@customElement('app-premium')
export class Premium extends LitElement {
  @state() isPremium = false;
  @state() purchaseMessage = '';
  @state() showPurchaseConfirm = false;

  private premiumManager = PremiumManager.getInstance();

  static styles = css`
    :host {
      display: block;
      background: linear-gradient(135deg, #ffd89b 0%, #19547b 100%);
      min-height: 100vh;
      padding: 20px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
        Cantarell, sans-serif;
    }

    .container {
      max-width: 800px;
      margin: 0 auto;
    }

    .header {
      text-align: center;
      color: white;
      margin-bottom: 40px;
    }

    .header h1 {
      font-size: 36px;
      margin: 0 0 10px 0;
      text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    }

    .header p {
      font-size: 18px;
      opacity: 0.9;
      margin: 0;
    }

    .premium-card {
      background: white;
      border-radius: 16px;
      padding: 30px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
      margin-bottom: 20px;
    }

    .status-banner {
      background: #d4edda;
      border: 2px solid #28a745;
      border-radius: 12px;
      padding: 20px;
      text-align: center;
      margin-bottom: 30px;
      color: #155724;
    }

    .status-banner h2 {
      margin: 0 0 10px 0;
      font-size: 24px;
    }

    .status-banner p {
      margin: 0;
      font-size: 16px;
    }

    .features-section h2 {
      color: #333;
      text-align: center;
      margin-top: 0;
      font-size: 28px;
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin: 30px 0;
    }

    .feature-card {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border-radius: 12px;
      padding: 20px;
      text-align: center;
      transition: all 0.3s;
    }

    .feature-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
    }

    .feature-icon {
      font-size: 40px;
      margin-bottom: 10px;
    }

    .feature-title {
      font-size: 18px;
      font-weight: bold;
      margin: 10px 0;
    }

    .feature-description {
      font-size: 14px;
      opacity: 0.9;
    }

    .pricing-section {
      text-align: center;
      margin: 40px 0;
    }

    .price-tag {
      display: inline-block;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 30px 40px;
      border-radius: 16px;
      margin: 20px 0;
      box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
    }

    .price-amount {
      font-size: 48px;
      font-weight: bold;
      margin: 0;
    }

    .price-label {
      font-size: 18px;
      opacity: 0.9;
      margin: 0;
    }

    .benefits-list {
      list-style: none;
      padding: 0;
      margin: 20px 0;
      text-align: left;
    }

    .benefits-list li {
      padding: 12px 0;
      border-bottom: 1px solid #eee;
      display: flex;
      align-items: center;
      gap: 12px;
      color: #333;
    }

    .benefits-list li:last-child {
      border-bottom: none;
    }

    .benefits-list li::before {
      content: '✓';
      color: #28a745;
      font-weight: bold;
      font-size: 20px;
    }

    .action-buttons {
      display: flex;
      gap: 15px;
      justify-content: center;
      flex-wrap: wrap;
      margin: 30px 0;
    }

    .btn {
      padding: 16px 32px;
      border: none;
      border-radius: 10px;
      font-size: 18px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s;
      font-family: inherit;
      text-transform: uppercase;
    }

    .btn-primary {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
    }

    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 15px 35px rgba(102, 126, 234, 0.4);
    }

    .btn-secondary {
      background: #e0e0e0;
      color: #333;
    }

    .btn-secondary:hover {
      background: #d0d0d0;
    }

    .btn-success {
      background: #28a745;
      color: white;
    }

    .btn-success:hover {
      background: #218838;
    }

    .message {
      padding: 15px 20px;
      border-radius: 10px;
      margin: 20px 0;
      text-align: center;
      font-weight: bold;
    }

    .message.success {
      background: #d4edda;
      color: #155724;
      border: 2px solid #28a745;
    }

    .message.error {
      background: #f8d7da;
      color: #721c24;
      border: 2px solid #f5c6cb;
    }

    .confirmation-modal {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    }

    .confirmation-dialog {
      background: white;
      border-radius: 16px;
      padding: 40px;
      max-width: 500px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
      text-align: center;
    }

    .confirmation-dialog h2 {
      color: #333;
      margin-top: 0;
      font-size: 24px;
    }

    .confirmation-dialog p {
      color: #666;
      font-size: 18px;
      margin: 15px 0;
    }

    .confirmation-buttons {
      display: flex;
      gap: 15px;
      justify-content: center;
      margin-top: 30px;
    }

    .confirmation-buttons button {
      flex: 1;
      padding: 12px;
      border: none;
      border-radius: 8px;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;
      font-family: inherit;
    }

    .confirm-yes {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
    }

    .confirm-no {
      background: #e0e0e0;
      color: #333;
    }

    .faq-section {
      background: #f8f9fa;
      border-radius: 12px;
      padding: 20px;
      margin: 30px 0;
    }

    .faq-section h3 {
      color: #333;
      margin-top: 0;
    }

    .faq-item {
      margin: 15px 0;
      padding: 15px;
      background: white;
      border-radius: 8px;
    }

    .faq-question {
      font-weight: bold;
      color: #667eea;
      margin-bottom: 8px;
    }

    .faq-answer {
      color: #666;
      font-size: 14px;
    }

    .already-premium {
      text-align: center;
      color: white;
    }

    .already-premium h2 {
      font-size: 32px;
      margin: 20px 0;
    }

    .back-link {
      display: inline-block;
      color: white;
      text-decoration: none;
      padding: 10px 20px;
      border: 2px solid white;
      border-radius: 8px;
      margin-top: 20px;
      transition: all 0.3s;
    }

    .back-link:hover {
      background: rgba(255, 255, 255, 0.1);
    }
  `;

  connectedCallback(): void {
    super.connectedCallback();
    this.checkPremium();
  }

  private checkPremium(): void {
    this.isPremium = this.premiumManager.isPremium();
  }

  private simulatePurchase(): void {
    this.showPurchaseConfirm = true;
  }

  private confirmPurchase(): void {
    this.premiumManager.simulatePremiumPurchase();
    this.isPremium = true;
    this.showPurchaseConfirm = false;
    this.purchaseMessage = '🎉 Premium unlocked! Thank you for your purchase!';

    // Clear message after 4 seconds
    setTimeout(() => {
      this.purchaseMessage = '';
    }, 4000);
  }

  private cancelPurchase(): void {
    this.showPurchaseConfirm = false;
  }

  private navigateTo(path: string): void {
    window.location.hash = `#${path}`;
  }

  render() {
    if (this.isPremium) {
      return html`
        <div class="container">
          <div class="header already-premium">
            <h1>👑 Premium Active</h1>
            <p>Thank you for supporting CaydenJoy!</p>
            <a href="/#/custom-images" class="back-link">📸 Go to Custom Images</a>
            <a href="/#/settings" class="back-link">⚙️ Back to Settings</a>
          </div>

          <div class="premium-card">
            <div class="status-banner">
              <h2>✅ You have premium access!</h2>
              <p>Enjoy all premium features including custom image uploads and more.</p>
            </div>

            <div class="features-section">
              <h2>✨ Your Premium Features</h2>
              <div class="features-grid">
                <div class="feature-card">
                  <div class="feature-icon">📸</div>
                  <div class="feature-title">Custom Images</div>
                  <div class="feature-description">Upload photos of family, food, and places</div>
                </div>

                <div class="feature-card">
                  <div class="feature-icon">🎤</div>
                  <div class="feature-title">Voice Customization</div>
                  <div class="feature-description">Personalize voice characteristics</div>
                </div>

                <div class="feature-card">
                  <div class="feature-icon">☁️</div>
                  <div class="feature-title">Cloud Backup</div>
                  <div class="feature-description">Backup your settings and images</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    return html`
      <div class="container">
        <div class="header">
          <h1>🌟 Upgrade to Premium</h1>
          <p>Unlock all features for just $5.99</p>
        </div>

        ${this.purchaseMessage
          ? html`
              <div class="premium-card">
                <div class="message success">${this.purchaseMessage}</div>
              </div>
            `
          : ''}

        <div class="premium-card">
          <div class="features-section">
            <h2>✨ Premium Features</h2>
            <div class="features-grid">
              <div class="feature-card">
                <div class="feature-icon">📸</div>
                <div class="feature-title">Custom Images</div>
                <div class="feature-description">
                  Upload photos of family members, favorite foods, places you visit, and more
                </div>
              </div>

              <div class="feature-card">
                <div class="feature-icon">🎤</div>
                <div class="feature-title">Voice Customization</div>
                <div class="feature-description">
                  Personalize voice speed, pitch, and language preferences
                </div>
              </div>

              <div class="feature-card">
                <div class="feature-icon">☁️</div>
                <div class="feature-title">Cloud Backup</div>
                <div class="feature-description">
                  Backup and sync your custom images and settings across devices
                </div>
              </div>
            </div>

            <ul class="benefits-list">
              <li>Unlimited custom image uploads</li>
              <li>Organize images by category</li>
              <li>Priority support</li>
              <li>No ads or tracking</li>
              <li>One-time purchase - yours forever</li>
            </ul>
          </div>
        </div>

        <div class="premium-card">
          <div class="pricing-section">
            <h3 style="margin-top: 0; color: #333;">Pricing & Upgrade Details</h3>
            
            <div style="background: #f0f7ff; border-left: 4px solid #667eea; padding: 15px; border-radius: 8px; margin: 15px 0;">
              <p style="margin: 0 0 10px 0;"><strong>Base App Cost:</strong> $19.99 (One-Time Purchase)</p>
              <p style="margin: 0 0 10px 0;"><strong>Premium Upgrade:</strong> <span style="color: #28a745; font-weight: bold;">$5.99</span> (One-Time Purchase)</p>
              <p style="margin: 0; font-size: 13px; color: #666;"><em>Total investment: $25.98 for full access</em></p>
            </div>

            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 15px 0;">
              <h4 style="margin-top: 0; color: #333;">Why This Price?</h4>
              <ul style="margin: 10px 0; padding-left: 20px;">
                <li>Unlike subscription apps ($5-15/month = $60-180/year), this is a <strong>lifetime</strong> investment</li>
                <li>Professional AAC software costs $99-$300+</li>
                <li>Your payment directly supports development and updates</li>
                <li>No hidden fees or recurring charges ever</li>
              </ul>
            </div>

            <div class="price-tag">
              <p class="price-amount">$5.99</p>
              <p class="price-label">One-Time Premium Upgrade</p>
            </div>
            <p style="color: #666; margin-top: 10px; font-size: 14px;">✓ Save money compared to similar apps ($9.99 - $19.99)</p>
          </div>

          <div style="background: #e8f5e9; border: 1px solid #4caf50; border-radius: 8px; padding: 15px; margin: 20px 0;">
            <h4 style="margin-top: 0; color: #2e7d32;">✓ What You're Getting</h4>
            <ul style="margin: 10px 0; padding-left: 20px; color: #333;">
              <li>Unlimited custom image uploads</li>
              <li>Organize your family photos by category</li>
              <li>Voice customization options</li>
              <li>Cloud backup of your settings (optional)</li>
              <li>Priority customer support</li>
              <li>All future premium feature updates</li>
              <li>No ads • No tracking • No subscriptions</li>
            </ul>
          </div>

          <div class="action-buttons">
            <button class="btn btn-primary" @click="${this.simulatePurchase}">
              🛒 Unlock Premium Now ($5.99)
            </button>
            <button class="btn btn-secondary" @click="${() => this.navigateTo('/settings')}">
              Later
            </button>
          </div>
        </div>

        <div class="premium-card faq-section">
          <h3>❓ Frequently Asked Questions</h3>

          <div class="faq-item">
            <div class="faq-question">Is this a subscription?</div>
            <div class="faq-answer">
              No! Premium is a one-time purchase of $5.99. You keep it forever. There are no monthly or yearly fees.
            </div>
          </div>

          <div class="faq-item">
            <div class="faq-question">How much does the base app cost?</div>
            <div class="faq-answer">
              The base app is $19.99 (one-time purchase). Premium upgrade is an additional $5.99 for a total of $25.98.
            </div>
          </div>

          <div class="faq-item">
            <div class="faq-question">Why is it more affordable than other AAC apps?</div>
            <div class="faq-answer">
              Professional AAC software costs $99-$300+. We believe quality communication tools should be accessible to everyone. Our pricing reflects this mission.
            </div>
          </div>

          <div class="faq-item">
            <div class="faq-question">Can I upgrade from free to premium?</div>
            <div class="faq-answer">
              Yes! You can upgrade anytime by clicking the "Upgrade to Premium" button in Settings or visiting this page.
            </div>
          </div>

          <div class="faq-item">
            <div class="faq-question">Can I get a refund?</div>
            <div class="faq-answer">
              Yes! You have 48 hours after purchase to request a refund if you're not satisfied. Visit your app store's account settings to request a refund.
            </div>
          </div>

          <div class="faq-item">
            <div class="faq-question">Is there a family or group discount?</div>
            <div class="faq-answer">
              Contact us at dallas8000@gmail.com for bulk licensing, family plans, or institutional pricing.
            </div>
          </div>

          <div class="faq-item">
            <div class="faq-question">Will my data be safe?</div>
            <div class="faq-answer">
              All data stays on your device by default. We never track users. Optional cloud backup is encrypted and secure.
            </div>
          </div>

          <div class="faq-item">
            <div class="faq-question">What if I have more questions about payment?</div>
            <div class="faq-answer">
              Email us at dallas8000@gmail.com with any payment or upgrade questions. We're here to help!
            </div>
          </div>

          <div class="faq-item">
            <div class="faq-question">What about accessibility?</div>
            <div class="faq-answer">
              CaydenJoy is built for accessibility. All features including premium features work with all assistive technologies.
            </div>
          </div>
        </div>

        ${this.showPurchaseConfirm
          ? html`
              <div class="confirmation-modal" @click="${this.cancelPurchase}">
                <div class="confirmation-dialog" @click="${(e: Event) => e.stopPropagation()}">
                  <h2>💳 Complete Purchase</h2>
                  <p>Unlock Premium for $5.99</p>
                  <p style="font-size: 14px; color: #999;">
                    This is a simulated purchase. In production, this would connect to Google Play
                    In-App Billing.
                  </p>
                  <div class="confirmation-buttons">
                    <button class="confirm-yes" @click="${this.confirmPurchase}">
                      ✓ Confirm Purchase
                    </button>
                    <button class="confirm-no" @click="${this.cancelPurchase}">Cancel</button>
                  </div>
                </div>
              </div>
            `
          : ''}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-premium': Premium;
  }
}
