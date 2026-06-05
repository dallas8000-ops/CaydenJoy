import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { resolveRouterPath } from '../router';

import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/card/card.js';

import { styles } from '../styles/shared-styles';
import '../components/header';

@customElement('app-terms')
export class AppTerms extends LitElement {
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
      <app-header title="Terms" enableBack></app-header>

      <main>
        <h1>Terms of Service</h1>
        <p>Last updated: June 5, 2026</p>

        <sl-card>
          <h2>Caregiver responsibility</h2>
          <p>
            CaydenJoy supports communication, learning, and daily routines. It
            does not replace professional medical, speech therapy, behavioral,
            emergency, or educational advice.
          </p>
        </sl-card>

        <sl-card>
          <h2>Safe use</h2>
          <ul>
            <li>Use the app with adult supervision when needed.</li>
            <li>Keep emergency care options outside the app available.</li>
            <li>Only add photos and labels you have permission to use.</li>
            <li>Protect upgrade keys and purchase records.</li>
          </ul>
        </sl-card>

        <sl-card>
          <h2>Purchases and upgrades</h2>
          <p>
            Premium tiers unlock additional caregiver tools. APK upgrade keys
            are intended for the purchaser and should not be publicly shared.
          </p>
        </sl-card>

        <sl-button href="${resolveRouterPath('premium')}" variant="primary">View Premium Tiers</sl-button>
      </main>
    `;
  }
}
