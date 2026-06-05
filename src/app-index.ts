import { LitElement, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import './pages/app-home';
import './components/header';
import './components/footer';
import './styles/global.css';
import { router } from './router';
import { AccessibilityManager } from './utils/accessibility-manager';

@customElement('app-index')
export class AppIndex extends LitElement {
  @state() emergencyMode = false;
  private readonly accessibilityManager = AccessibilityManager.getInstance();

  static override readonly styles = css`
    :host {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      --app-shell-padding-x: 16px;
      --app-shell-padding-top: 88px;
      --app-shell-padding-bottom: 100px;
    }

    main {
      flex: 1;
      padding-left: var(--app-shell-padding-x);
      padding-right: var(--app-shell-padding-x);
      padding-bottom: var(--app-shell-padding-bottom);
      padding-top: var(--app-shell-padding-top);
    }

    .emergency-bar {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      height: 60px;
      background: linear-gradient(90deg, #E17055 0%, #D63031 100%);
      color: white;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 1rem;
      z-index: 999;
      box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.2);
    }

    .emergency-text {
      font-size: 1.125rem;
      font-weight: bold;
      flex: 1;
    }

    .emergency-button {
      background: white;
      color: #D63031;
      border: 2px solid white;
      padding: 0.75rem 1.5rem;
      border-radius: 0.5rem;
      font-size: 1rem;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.2s;
    }

    .emergency-button:hover {
      background: #FFE5E5;
      transform: scale(1.05);
    }

    .emergency-button:active {
      transform: scale(0.95);
    }

    @media (max-width: 900px) {
      :host {
        --app-shell-padding-top: 112px;
      }
    }

    @media (max-width: 640px) {
      :host {
        --app-shell-padding-x: 12px;
        --app-shell-padding-top: 128px;
        --app-shell-padding-bottom: 112px;
      }

      .emergency-bar {
        height: auto;
        min-height: 60px;
        padding: 0.75rem 0.875rem;
        gap: 0.75rem;
      }

      .emergency-text {
        font-size: 1rem;
      }

      .emergency-button {
        padding: 0.7rem 1rem;
        font-size: 0.95rem;
      }
    }
  `;

  firstUpdated() {
    // Initialize accessibility manager
    router.addEventListener('route-changed', () => {
      if ("startViewTransition" in document) {
        (document as any).startViewTransition(() => this.requestUpdate());
      }
      else {
        this.requestUpdate();
      }
    });
  }

  private handleEmergency() {
    this.accessibilityManager.playSound('error');
    this.accessibilityManager.speakNow('HELP! EMERGENCY!', 0.85);

    // Visual feedback
    this.emergencyMode = true;
    setTimeout(() => {
      this.emergencyMode = false;
    }, 3000);
  }

  render() {
    // router config can be found in src/router.ts
    return html`
      <app-header></app-header>
      <main>
        ${router.render()}
      </main>
      <app-footer></app-footer>

      <div class="emergency-bar">
        <div class="emergency-text">🆘 EMERGENCY - Need Help?</div>
        <button class="emergency-button" @click=${this.handleEmergency}>
          GET HELP
        </button>
      </div>
    `;
  }
}

