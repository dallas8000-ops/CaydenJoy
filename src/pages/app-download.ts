import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { resolveRouterPath } from '../router';

import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/card/card.js';

@customElement('app-download')
export class AppDownload extends LitElement {
  private readonly apkDownloadUrl = String((import.meta as any).env.VITE_APK_DOWNLOAD_URL || '').trim();

  static override readonly styles = css`
    :host {
      display: block;
      padding: 1.25rem;
      color: #172033;
    }

    .container {
      max-width: 860px;
      margin: 0 auto;
    }

    .hero {
      margin-bottom: 1.25rem;
    }

    h1 {
      margin: 0;
      font-size: 2rem;
      color: #172033;
      line-height: 1.1;
    }

    .subtitle {
      margin: 0.5rem 0 0;
      color: #4b5d73;
      font-size: 1.05rem;
      line-height: 1.5;
    }

    sl-card {
      margin-bottom: 1rem;
    }

    sl-card::part(base) {
      border-radius: 16px;
      border: 1px solid #d7e0eb;
      background: #ffffff;
      box-shadow: 0 10px 24px rgba(31, 41, 55, 0.08);
    }

    .card-body {
      display: grid;
      gap: 0.9rem;
    }

    .download-action {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
      align-items: center;
    }

    .status {
      padding: 0.75rem 0.9rem;
      border-radius: 0.75rem;
      background: #eef4ff;
      color: #1f3a68;
      line-height: 1.5;
    }

    .status strong {
      display: block;
      margin-bottom: 0.25rem;
    }

    ul {
      margin: 0;
      padding-left: 1.2rem;
      color: #4b5d73;
      line-height: 1.6;
    }

    .note {
      color: #607489;
      font-size: 0.95rem;
      line-height: 1.55;
    }

    .link-row {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
      margin-top: 1rem;
    }

    @media (max-width: 640px) {
      :host {
        padding: 0.85rem;
      }

      h1 {
        font-size: 1.6rem;
      }

      .subtitle {
        font-size: 1rem;
      }

      sl-button {
        width: 100%;
      }
    }
  `;

  render() {
    return html`
      <div class="container">
        <section class="hero">
          <h1>Download the Android APK</h1>
          <p class="subtitle">
            Send buyers here after purchase, or share the direct APK link from this page.
            After installing, they can return to the Upgrade page to redeem their key.
          </p>
        </section>

        <sl-card>
          <div class="card-body">
            <div class="status">
              <strong>APK download link</strong>
              ${this.apkDownloadUrl
                ? html`The download button below opens the APK file you configured for this build.`
                : html`Set <code>VITE_APK_DOWNLOAD_URL</code> to your hosted APK file, then rebuild the app. This page will use that link automatically.`}
            </div>

            <div class="download-action">
              ${this.apkDownloadUrl
                ? html`<sl-button variant="primary" size="large" href=${this.apkDownloadUrl} target="_blank" rel="noopener noreferrer">
                    Download APK
                  </sl-button>`
                : html`<sl-button variant="primary" size="large" href=${resolveRouterPath('contact')}>
                    Contact for Download
                  </sl-button>`}
              <sl-button variant="default" size="large" href=${resolveRouterPath('upgrade')}>
                Open Upgrade Page
              </sl-button>
            </div>

            <div>
              <ul>
                <li>Buyers install the APK on their Android phone or tablet.</li>
                <li>They open Upgrade and enter the one-time key you send them.</li>
                <li>The app unlocks premium features on that device after redemption.</li>
              </ul>
            </div>

            <div class="note">
              If you are hosting the APK in a public folder or file storage service, paste that direct
              file URL into <code>VITE_APK_DOWNLOAD_URL</code> before building.
            </div>
          </div>
        </sl-card>

        <div class="link-row">
          <sl-button variant="default" href=${resolveRouterPath('home')}>
            Back to Home
          </sl-button>
          <sl-button variant="default" href=${resolveRouterPath('contact')}>
            Support Contact
          </sl-button>
        </div>
      </div>
    `;
  }
}