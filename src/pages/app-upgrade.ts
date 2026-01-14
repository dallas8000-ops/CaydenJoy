import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { LicenseManager } from '../utils/license-manager.js';
import { PremiumManager } from '../utils/premium-manager.js';

@customElement('app-upgrade')
export class AppUpgrade extends LitElement {
  @state() upgradeCode: string = '';
  @state() message: string = '';
  @state() messageType: 'success' | 'error' | '' = '';
  @state() isUpgraded: boolean = false;

  private licenseManager = LicenseManager.getInstance();
  private premiumManager = PremiumManager.getInstance();

  connectedCallback() {
    super.connectedCallback();
    this.isUpgraded = this.licenseManager.isUpgraded();
  }

  static styles = css`
    :host {
      display: block;
      padding: 2rem;
    }

    .container {
      max-width: 600px;
      margin: 0 auto;
    }

    .header {
      text-align: center;
      margin-bottom: 2rem;
    }

    h1 {
      font-size: 2rem;
      font-weight: bold;
      color: #6C5CE7;
      margin-bottom: 1rem;
    }

    .subtitle {
      font-size: 1.125rem;
      color: #666;
      margin-bottom: 2rem;
    }

    .upgrade-card {
      background: linear-gradient(135deg, #6C5CE7 0%, #5F3DC4 100%);
      color: white;
      padding: 2rem;
      border-radius: 1.5rem;
      box-shadow: 0 10px 30px rgba(108, 92, 231, 0.3);
      margin-bottom: 2rem;
    }

    .upgrade-title {
      font-size: 1.5rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }

    .features-list {
      list-style: none;
      padding: 0;
      margin-bottom: 1.5rem;
    }

    .features-list li {
      margin-bottom: 0.75rem;
      padding-left: 2rem;
      position: relative;
    }

    .features-list li::before {
      content: '✓';
      position: absolute;
      left: 0;
      font-size: 1.25rem;
      font-weight: bold;
    }

    .input-section {
      margin-bottom: 1.5rem;
    }

    .input-label {
      display: block;
      font-size: 1rem;
      font-weight: 600;
      margin-bottom: 0.75rem;
      color: #333;
    }

    .input-container {
      display: flex;
      gap: 0.75rem;
      margin-bottom: 1rem;
    }

    .upgrade-input {
      flex: 1;
      padding: 0.75rem;
      border: 2px solid #ddd;
      border-radius: 0.5rem;
      font-size: 1rem;
      font-family: monospace;
      transition: border-color 0.2s;
      text-transform: uppercase;
    }

    .upgrade-input:focus {
      outline: none;
      border-color: #6C5CE7;
    }

    .upgrade-btn {
      padding: 0.75rem 1.5rem;
      background: #6C5CE7;
      color: white;
      border: none;
      border-radius: 0.5rem;
      cursor: pointer;
      font-size: 1rem;
      font-weight: 600;
      transition: all 0.2s;
    }

    .upgrade-btn:hover {
      background: #5F3DC4;
      transform: scale(1.02);
    }

    .upgrade-btn:disabled {
      background: #ccc;
      cursor: not-allowed;
      transform: none;
    }

    .message {
      padding: 1rem;
      border-radius: 0.5rem;
      margin-bottom: 1rem;
      font-weight: 500;
    }

    .message.success {
      background: #d4edda;
      color: #155724;
      border: 1px solid #c3e6cb;
    }

    .message.error {
      background: #f8d7da;
      color: #721c24;
      border: 1px solid #f5c6cb;
    }

    .success-state {
      text-align: center;
      padding: 2rem;
      background: #f0f9ff;
      border-radius: 1.5rem;
      border: 2px solid #0ea5e9;
    }

    .success-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .success-text {
      font-size: 1.25rem;
      color: #0369a1;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    .success-subtext {
      font-size: 1rem;
      color: #0c4a6e;
    }

    .reset-btn {
      padding: 0.75rem 1.5rem;
      background: #f87171;
      color: white;
      border: none;
      border-radius: 0.5rem;
      cursor: pointer;
      font-size: 0.875rem;
      font-weight: 600;
      transition: all 0.2s;
      margin-top: 1.5rem;
    }

    .reset-btn:hover {
      background: #dc2626;
      transform: scale(1.02);
    }

    .code-instructions {
      background: #f5f5f5;
      padding: 1.5rem;
      border-radius: 0.75rem;
      margin-bottom: 1.5rem;
      font-size: 0.95rem;
      line-height: 1.6;
    }

    .code-instructions strong {
      color: #6C5CE7;
    }
  `;

  private handleCodeInput(e: Event) {
    const input = e.target as HTMLInputElement;
    this.upgradeCode = input.value;
    this.message = '';
  }

  private submitUpgradeCode() {
    if (!this.upgradeCode.trim()) {
      this.message = 'Please enter an upgrade code';
      this.messageType = 'error';
      return;
    }

    const isValid = this.licenseManager.verifyAndApplyCode(this.upgradeCode);

    if (isValid) {
      this.premiumManager.refreshStatus();
      this.isUpgraded = true;
      this.message = 'Upgrade successful! All premium features are now unlocked.';
      this.messageType = 'success';
      this.upgradeCode = '';
    } else {
      this.message = 'Invalid upgrade code. Please check and try again.';
      this.messageType = 'error';
    }
  }

  private resetLicense() {
    if (confirm('Are you sure? This will reset the license and lock premium features.')) {
      this.licenseManager.resetLicense();
      this.premiumManager.refreshStatus();
      this.isUpgraded = false;
      this.message = '';
      this.upgradeCode = '';
    }
  }

  private handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      this.submitUpgradeCode();
    }
  }

  render() {
    if (this.isUpgraded) {
      return html`
        <div class="container">
          <div class="header">
            <h1>Premium Unlocked</h1>
          </div>

          <div class="success-state">
            <div class="success-icon">🎉</div>
            <div class="success-text">All Premium Features Unlocked</div>
            <div class="success-subtext">
              Enjoy custom images, voice customization, cloud backup, and additional tabs!
            </div>
            <button class="reset-btn" @click=${this.resetLicense}>
              Reset License (Dev Only)
            </button>
          </div>
        </div>
      `;
    }

    return html`
      <div class="container">
        <div class="header">
          <h1>Unlock Premium Features</h1>
          <p class="subtitle">Enter your upgrade code to unlock all premium features</p>
        </div>

        <div class="upgrade-card">
          <div class="upgrade-title">What you'll get:</div>
          <ul class="features-list">
            <li>Custom Images - Upload your own images</li>
            <li>Voice Customization - Adjust speech settings</li>
            <li>Additional Tabs - Create custom communication tabs</li>
            <li>Cloud Backup - Save your progress safely</li>
          </ul>
        </div>

        ${this.message ? html`
          <div class="message ${this.messageType}">
            ${this.message}
          </div>
        ` : ''}

        <div class="code-instructions">
          <strong>How to use:</strong> Enter the upgrade code provided with your purchase
          to unlock all premium features instantly.
        </div>

        <div class="input-section">
          <label class="input-label">Upgrade Code</label>
          <div class="input-container">
            <input
              type="text"
              class="upgrade-input"
              placeholder="Enter your upgrade code"
              .value=${this.upgradeCode}
              @input=${this.handleCodeInput}
              @keydown=${this.handleKeydown}
            />
            <button
              class="upgrade-btn"
              @click=${this.submitUpgradeCode}
              ?disabled=${!this.upgradeCode.trim()}
            >
              Unlock
            </button>
          </div>
        </div>
      </div>
    `;
  }
}
