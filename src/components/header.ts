import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { resolveRouterPath } from '../router';

import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/dropdown/dropdown.js';
import '@shoelace-style/shoelace/dist/components/menu/menu.js';
import '@shoelace-style/shoelace/dist/components/menu-item/menu-item.js';
import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js';

// Must match the same build-time flag src/router.ts uses to decide whether
// the /admin route exists at all. Keep the nav link in sync with the route:
// showing a link to a route that doesn't exist in this build is its own bug.
const devModeEnabled = (import.meta as any).env.VITE_DEV_MODE === 'true';

@customElement('app-header')
export class AppHeader extends LitElement {
  @property({ type: String }) title = 'CaydenJoy';

  @property({ type: Boolean}) enableBack: boolean = false;

  static override readonly styles = css`
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
      background: linear-gradient(135deg, #6C5CE7 0%, #5F3DC4 100%);
      color: white;
      box-sizing: border-box;
      min-height: 72px;
      padding: 12px 20px;

      position: fixed;
      left: env(titlebar-area-x, 0);
      top: env(titlebar-area-y, 0);
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
      justify-content: flex-end;
      min-width: 0;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      white-space: nowrap;
    }

    nav a {
      color: white;
      text-decoration: none;
      padding: 6px 12px;
      border-radius: 4px;
      font-size: 14px;
      flex: 0 0 auto;
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

    }

    @media (max-width: 900px) {
      header {
        min-height: 76px;
        padding: 10px 14px;
      }

      nav {
        justify-content: flex-end;
        gap: 8px;
      }

      nav a {
        padding: 6px 10px;
        font-size: 13px;
      }
    }

    @media (max-width: 640px) {
      header {
        min-height: 68px;
        gap: 8px;
        padding: 8px 12px;
      }

      header h1 {
        font-size: 18px;
      }

      nav {
        gap: 6px;
      }

      nav a {
        padding: 5px 8px;
        font-size: 12px;
        border-radius: 999px;
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
          <a href="${resolveRouterPath()}">Communication</a>
          <a href="${resolveRouterPath('foods')}">Foods</a>
          <a href="${resolveRouterPath('colors')}">Colors</a>
          <a href="${resolveRouterPath('numbers')}">Numbers</a>
          <a href="${resolveRouterPath('places')}">Places</a>
          <a href="${resolveRouterPath('family-puzzle')}">Puzzle</a>
          <a href="${resolveRouterPath('home-enhanced')}">Quick</a>
          <a href="${resolveRouterPath('custom-images')}">📸</a>
          <a href="${resolveRouterPath('upgrade')}">🔓</a>
          <a href="${resolveRouterPath('premium')}">👑</a>
          ${devModeEnabled ? html`<a href="${resolveRouterPath('admin')}">⚙️</a>` : ''}
          <a href="${resolveRouterPath('settings')}">🛠️</a>
        </nav>
      </header>
    `;
  }
}
