import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { resolveRouterPath } from '../router';

import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/card/card.js';

import { styles } from '../styles/shared-styles';
import '../components/header';

@customElement('app-documentation')
export class AppDocumentation extends LitElement {
  static override readonly styles = [
    styles,
    css`
      main {
        max-width: 900px;
        margin: 0 auto;
        padding: 24px;
        color: #172033;
      }

      h1 {
        color: #172033;
      }

      .lead {
        color: #334155;
        font-size: 18px;
        line-height: 1.6;
      }

      .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        gap: 16px;
        margin-top: 24px;
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

      sl-card h2 {
        margin-top: 0;
        color: #243b6b;
      }

      sl-card p {
        color: #263241;
        line-height: 1.5;
      }

      .actions {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        margin-top: 28px;
      }
    `
  ];

  render() {
    return html`
      <app-header title="Documentation" enableBack></app-header>

      <main>
        <h1>CaydenJoy Documentation</h1>
        <p class="lead">
          Quick reference for caregivers setting up communication, realistic images,
          activity sessions, premium access, and upgrade keys.
        </p>

        <div class="grid">
          <sl-card>
            <h2>Daily Communication</h2>
            <p>
              Start with core needs like help, bathroom, break, stop, food, places,
              and familiar people. Keep the first boards simple and predictable.
            </p>
            <sl-button href="${resolveRouterPath()}" variant="primary">Open Board</sl-button>
          </sl-card>

          <sl-card>
            <h2>Real Photos</h2>
            <p>
              Add family, food, classroom, therapy, and home photos so the child
              recognizes real objects from daily life.
            </p>
            <sl-button href="${resolveRouterPath('custom-images')}" variant="primary">Manage Photos</sl-button>
          </sl-card>

          <sl-card>
            <h2>Activity Sessions</h2>
            <p>
              Use choice, matching, routine, and puzzle activities during learning
              sessions. Safety words stay available while the child works.
            </p>
            <sl-button href="${resolveRouterPath('family-puzzle')}" variant="primary">Start Activities</sl-button>
          </sl-card>

          <sl-card>
            <h2>APK Upgrades</h2>
            <p>
              Families can unlock paid tiers with a one-time upgrade key after
              purchase. Keep generated keys in your private sales records.
            </p>
            <sl-button href="${resolveRouterPath('upgrade')}" variant="primary">Open Upgrade</sl-button>
          </sl-card>

          <sl-card>
            <h2>Download And Install</h2>
            <p>
              Share one link with buyers so they can download CaydenJoy on Android,
              then return to redeem their upgrade key.
            </p>
            <sl-button href="${resolveRouterPath('download')}" variant="primary">Open Download Page</sl-button>
          </sl-card>
        </div>

        <div class="actions">
          <sl-button href="${resolveRouterPath('faq')}" variant="default">FAQ</sl-button>
          <sl-button href="${resolveRouterPath('feedback')}" variant="default">Feedback</sl-button>
        </div>
      </main>
    `;
  }
}
