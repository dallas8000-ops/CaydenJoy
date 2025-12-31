import { LitElement, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { resolveRouterPath } from '../router';
import { PremiumManager } from '../utils/premium-manager';

import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/switch/switch.js';
import '@shoelace-style/shoelace/dist/components/divider/divider.js';

import { styles } from '../styles/shared-styles';

@customElement('app-settings')
export class AppSettings extends LitElement {
  @property() darkMode = localStorage.getItem('darkMode') === 'true';
  @property() notifications = localStorage.getItem('notifications') !== 'false';
  @property() autoSync = localStorage.getItem('autoSync') !== 'false';
  @state() isPremium = false;

  private premiumManager = PremiumManager.getInstance();

  static styles = [
    styles,
    css`
      main {
        padding: 20px;
        max-width: 600px;
        margin: 0 auto;
      }

      sl-card {
        margin-bottom: 24px;
      }

      .setting-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px 0;
        gap: 16px;
      }

      .setting-item:not(:last-child) {
        border-bottom: 1px solid #e9ecef;
      }

      .setting-label {
        flex: 1;
      }

      .setting-label h3 {
        margin: 0;
        color: #6C5CE7;
      }

      .setting-label p {
        margin: 4px 0 0 0;
        font-size: 14px;
        opacity: 0.7;
      }

      .danger-zone {
        border: 2px solid #E17055;
        border-radius: 8px;
        padding: 16px;
        margin-top: 24px;
      }

      .danger-zone h3 {
        color: #E17055;
        margin-top: 0;
      }

      sl-button {
        width: 100%;
      }

      .back-button {
        margin-top: 24px;
      }
    `
  ];

  handleDarkModeChange(e: any) {
    this.darkMode = e.target.checked;
    localStorage.setItem('darkMode', this.darkMode.toString());
    this.applyDarkMode();
  }

  handleNotificationsChange(e: any) {
    this.notifications = e.target.checked;
    localStorage.setItem('notifications', this.notifications.toString());
  }

  handleAutoSyncChange(e: any) {
    this.autoSync = e.target.checked;
    localStorage.setItem('autoSync', this.autoSync.toString());
  }

  applyDarkMode() {
    if (this.darkMode) {
      document.documentElement.style.colorScheme = 'dark';
    } else {
      document.documentElement.style.colorScheme = 'light';
    }
  }

  clearCache() {
    if (confirm('Are you sure you want to clear all cache? This will remove all stored data.')) {
      localStorage.clear();
      caches.keys().then(cacheNames => {
        cacheNames.forEach(cacheName => {
          caches.delete(cacheName);
        });
      });
      alert('Cache cleared successfully!');
    }
  }

  resetApp() {
    if (confirm('Are you sure you want to reset the app to default settings?')) {
      localStorage.clear();
      location.reload();
    }
  }

  goToPremium() {
    window.location.hash = '#/premium';
  }

  render() {
    return html`
      <app-header></app-header>

      <main>
        <h1>Settings</h1>
        <p>Customize your CaydenJoy experience</p>

        ${!this.isPremium ? html`
          <sl-card>
            <div slot="header">
              <h2>🌟 Upgrade to Premium</h2>
            </div>
            <div style="padding: 16px;">
              <p>Unlock premium features for just <strong>$5.99</strong> (one-time)</p>
              <ul style="margin: 12px 0; padding-left: 20px; text-align: left;">
                <li>Upload unlimited custom family photos</li>
                <li>Voice customization options</li>
                <li>Cloud backup of your settings</li>
                <li>Priority support</li>
              </ul>
              <sl-button variant="primary" @click=${this.goToPremium} style="width: 100%; margin-top: 12px;">
                Upgrade Now
              </sl-button>
            </div>
          </sl-card>
        ` : html`
          <sl-card>
            <div slot="header">
              <h2>👑 Premium Unlocked</h2>
            </div>
            <div style="padding: 16px;">
              <p>✓ You have access to all premium features</p>
              <p style="font-size: 14px; color: #666;">Thank you for supporting CaydenJoy!</p>
            </div>
          </sl-card>
        `}

        <sl-card>
          <div slot="header">
            <h2>Appearance</h2>
          </div>

          <div class="setting-item">
            <div class="setting-label">
              <h3>Dark Mode</h3>
              <p>Use dark theme for easier reading at night</p>
            </div>
            <sl-switch
              .checked=${this.darkMode}
              @sl-change=${this.handleDarkModeChange}
            ></sl-switch>
          </div>
        </sl-card>

        <sl-card>
          <div slot="header">
            <h2>Notifications & Sync</h2>
          </div>

          <div class="setting-item">
            <div class="setting-label">
              <h3>Push Notifications</h3>
              <p>Receive notifications about updates and events</p>
            </div>
            <sl-switch
              .checked=${this.notifications}
              @sl-change=${this.handleNotificationsChange}
            ></sl-switch>
          </div>

          <div class="setting-item">
            <div class="setting-label">
              <h3>Auto-Sync</h3>
              <p>Automatically sync data when connection is available</p>
            </div>
            <sl-switch
              .checked=${this.autoSync}
              @sl-change=${this.handleAutoSyncChange}
            ></sl-switch>
          </div>
        </sl-card>

        <sl-card>
          <div slot="header">
            <h2>Storage & Cache</h2>
          </div>

          <div style="padding: 0 16px;">
            <p>Manage your app's cached data and local storage.</p>
            <sl-button variant="warning" @click=${() => this.clearCache()}>
              Clear Cache & Data
            </sl-button>
          </div>
        </sl-card>

        <sl-card>
          <div slot="header">
            <h2>About</h2>
          </div>

          <div style="padding: 16px;">
            <p><strong>CaydenJoy PWA</strong></p>
            <p>Version: 1.0.0</p>
            <p>Build: Progressive Web App</p>
            <p style="margin-top: 16px; opacity: 0.7;">
              <a href="https://github.com/dallas8000-ops/CaydenJoy" target="_blank">View on GitHub</a>
            </p>
          </div>
        </sl-card>

        <div class="danger-zone">
          <h3>⚠️ Danger Zone</h3>
          <p>Irreversible actions that will reset your experience.</p>
          <sl-button variant="danger" @click=${() => this.resetApp()}>
            Reset App to Default
          </sl-button>
        </div>

        <div style="text-align: center; margin-top: 24px;">
          <sl-button href="${resolveRouterPath()}" variant="primary">Back to Home</sl-button>
        </div>
      </main>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    this.applyDarkMode();
    this.isPremium = this.premiumManager.isPremium();
  }
}
