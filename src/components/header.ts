import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { resolveRouterPath } from '../router';

import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/dropdown/dropdown.js';
import '@shoelace-style/shoelace/dist/components/menu/menu.js';
import '@shoelace-style/shoelace/dist/components/menu-item/menu-item.js';
import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js';

@customElement('app-header')
export class AppHeader extends LitElement {
  @property({ type: String }) title = 'CaydenJoy';

  @property({ type: Boolean}) enableBack: boolean = false;

  static styles = css`
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: linear-gradient(135deg, #6C5CE7 0%, #5F3DC4 100%);
      color: white;
      padding: 12px 20px;
      padding-top: 4px;

      position: fixed;
      left: env(titlebar-area-x, 0);
      top: env(titlebar-area-y, 0);
      height: env(titlebar-area-height, auto);
      width: env(titlebar-area-width, 100%);
      -webkit-app-region: drag;
      z-index: 1000;
    }

    header h1 {
      margin-top: 0;
      margin-bottom: 0;
      font-size: 20px;
      font-weight: bold;
    }

    nav {
      display: flex;
      gap: 12px;
      align-items: center;
    }

    nav a {
      color: white;
      text-decoration: none;
      padding: 6px 12px;
      border-radius: 4px;
      font-size: 14px;
      transition: background-color 0.3s;
    }

    nav a:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }

    #back-button-block {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 8px;
    }

    @media(prefers-color-scheme: light) {
      header {
        color: white;
      }

      nav a {
        color: initial;
      }
    }
  `;

  render() {
    return html`
      <header>
        <div id="back-button-block">
          ${this.enableBack ? html`<sl-button size="small" href="${resolveRouterPath()}">
            Back
          </sl-button>` : null}
          <h1>${this.title}</h1>
        </div>

        <nav>
          <a href="${resolveRouterPath()}">Home</a>
          <a href="${resolveRouterPath('services')}">Services</a>
          <a href="${resolveRouterPath('communication')}">Communication</a>
          <a href="${resolveRouterPath('faq')}">FAQ</a>
          <a href="${resolveRouterPath('settings')}">⚙ Settings</a>
        </nav>
      </header>
    `;
  }
}
