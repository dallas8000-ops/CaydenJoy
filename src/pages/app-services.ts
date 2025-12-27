import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { resolveRouterPath } from '../router';

import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';

import { styles } from '../styles/shared-styles';

@customElement('app-services')
export class AppServices extends LitElement {
  static styles = [
    styles,
    css`
      main {
        padding: 20px;
      }

      #servicesContainer {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 24px;
        margin-top: 24px;
      }

      sl-card {
        height: 100%;
        display: flex;
        flex-direction: column;
      }

      sl-card::part(body) {
        flex: 1;
      }

      .service-icon {
        font-size: 48px;
        margin-bottom: 16px;
      }

      h3 {
        margin-top: 0;
        color: #6C5CE7;
      }

      p {
        flex-grow: 1;
        margin-bottom: 16px;
      }

      sl-button {
        width: 100%;
      }

      .feature-list {
        list-style: none;
        padding: 0;
        margin: 12px 0;
      }

      .feature-list li {
        padding: 8px 0;
        border-bottom: 1px solid #e9ecef;
      }

      .feature-list li:before {
        content: "✓ ";
        color: #6C5CE7;
        font-weight: bold;
        margin-right: 8px;
      }
    `
  ];

  render() {
    return html`
      <app-header></app-header>

      <main>
        <h1>Our Services</h1>
        <p>Discover what CaydenJoy can do for you.</p>

        <div id="servicesContainer">
          <sl-card>
            <div slot="header">
              <div class="service-icon">📱</div>
              <h3>Responsive Design</h3>
            </div>
            <p>Access CaydenJoy on any device. Our responsive design ensures a perfect experience on mobile, tablet, and desktop.</p>
            <ul class="feature-list">
              <li>Mobile optimized</li>
              <li>Tablet friendly</li>
              <li>Desktop ready</li>
            </ul>
          </sl-card>

          <sl-card>
            <div slot="header">
              <div class="service-icon">🔌</div>
              <h3>Offline Support</h3>
            </div>
            <p>Work offline and sync when you're back online. CaydenJoy works seamlessly with or without internet connection.</p>
            <ul class="feature-list">
              <li>Offline mode</li>
              <li>Auto-sync</li>
              <li>Data persistence</li>
            </ul>
          </sl-card>

          <sl-card>
            <div slot="header">
              <div class="service-icon">🚀</div>
              <h3>Fast & Reliable</h3>
            </div>
            <p>Experience lightning-fast performance with optimized loading times and reliable service.</p>
            <ul class="feature-list">
              <li>Quick loading</li>
              <li>Smooth animations</li>
              <li>99.9% uptime</li>
            </ul>
          </sl-card>

          <sl-card>
            <div slot="header">
              <div class="service-icon">🔔</div>
              <h3>Push Notifications</h3>
            </div>
            <p>Stay updated with real-time notifications. Never miss important updates and events.</p>
            <ul class="feature-list">
              <li>Real-time alerts</li>
              <li>Custom messaging</li>
              <li>Smart scheduling</li>
            </ul>
          </sl-card>

          <sl-card>
            <div slot="header">
              <div class="service-icon">🔒</div>
              <h3>Secure & Private</h3>
            </div>
            <p>Your data is encrypted and protected. We prioritize your privacy and security.</p>
            <ul class="feature-list">
              <li>Data encryption</li>
              <li>Privacy first</li>
              <li>Secure storage</li>
            </ul>
          </sl-card>

          <sl-card>
            <div slot="header">
              <div class="service-icon">⚡</div>
              <h3>Install Anywhere</h3>
            </div>
            <p>Install CaydenJoy directly from your browser. Add it to your home screen like a native app.</p>
            <ul class="feature-list">
              <li>One-click install</li>
              <li>Native feel</li>
              <li>Easy uninstall</li>
            </ul>
          </sl-card>
        </div>

        <div style="text-align: center; margin-top: 48px;">
          <sl-button href="${resolveRouterPath()}" variant="primary">Back to Home</sl-button>
        </div>
      </main>
    `;
  }
}
