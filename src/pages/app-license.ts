import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { resolveRouterPath } from '../router';

import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/card/card.js';

import { styles } from '../styles/shared-styles';
import '../components/header';

@customElement('app-license')
export class AppLicense extends LitElement {
  static styles = [
    styles,
    css`
      main {
        max-width: 820px;
        margin: 0 auto;
        padding: 24px;
        color: #172033;
      }

      h1 {
        color: #172033;
      }

      sl-card {
        margin-bottom: 16px;
      }

      sl-card::part(base) {
        background: #ffffff;
        border: 1px solid #d9e2ef;
        border-radius: 10px;
        color: #172033;
        box-shadow: 0 8px 20px rgba(31, 41, 55, 0.08);
      }

      sl-card::part(body) {
        color: #172033;
      }

      h2 {
        margin-top: 0;
        color: #243b6b;
      }

      p,
      li {
        color: #263241;
        line-height: 1.6;
      }
    `
  ];

  render() {
    return html`
      <app-header title="License" enableBack></app-header>

      <main>
        <h1>License and Upgrade Access</h1>

        <sl-card>
          <h2>Family use</h2>
          <p>
            CaydenJoy is built for caregiver-supported communication and learning.
            Keep private family images, child data, and purchase keys protected.
          </p>
        </sl-card>

        <sl-card>
          <h2>Upgrade keys</h2>
          <ul>
            <li>Family Photos keys start with CJF.</li>
            <li>Learning Plus keys start with CJL.</li>
            <li>All Access keys start with CJA.</li>
          </ul>
          <p>
            Keys are marked used on the installed device after redemption. For
            global one-time enforcement, connect purchases to a server or Google
            Play Billing before large public sales.
          </p>
        </sl-card>

        <sl-button href="${resolveRouterPath('upgrade')}" variant="primary">Redeem Upgrade Key</sl-button>
      </main>
    `;
  }
}
