import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { resolveRouterPath } from '../router';

import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/card/card.js';

import { styles } from '../styles/shared-styles';
import '../components/header';

@customElement('app-privacy')
export class AppPrivacy extends LitElement {
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

      main > p {
        color: #334155;
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
      <app-header title="Privacy Policy" enableBack></app-header>

      <main>
        <h1>Privacy Policy</h1>
        <p>Last updated: June 5, 2026</p>

        <sl-card>
          <h2>Privacy-first design</h2>
          <p>
            CaydenJoy is designed for children and caregivers. Communication
            boards, custom images, progress, and feedback are stored locally on
            the device unless a caregiver exports or shares them.
          </p>
        </sl-card>

        <sl-card>
          <h2>Information stored by the app</h2>
          <ul>
            <li>Custom communication photos and labels added by a caregiver.</li>
            <li>Local progress events used for the caregiver dashboard.</li>
            <li>Feedback and wishlist notes saved inside the app.</li>
            <li>Upgrade tier status and redeemed upgrade key records.</li>
          </ul>
        </sl-card>

        <sl-card>
          <h2>Caregiver control</h2>
          <p>
            Caregivers can export, import, or clear supported local data from
            the related pages. Do not upload private child photos to public
            websites or shared repositories.
          </p>
        </sl-card>

        <sl-button href="${resolveRouterPath('contact')}" variant="primary">Contact Support</sl-button>
      </main>
    `;
  }
}
