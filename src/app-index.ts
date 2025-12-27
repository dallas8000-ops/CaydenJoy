import { LitElement, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { html } from 'lit';

import './pages/app-home';
import './components/header';
import './components/footer';
import './styles/global.css';
import { router } from './router';

@customElement('app-index')
export class AppIndex extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }

    main {
      flex: 1;
      padding-left: 16px;
      padding-right: 16px;
      padding-bottom: 16px;
      padding-top: 80px;
    }
  `;

  firstUpdated() {
    router.addEventListener('route-changed', () => {
      if ("startViewTransition" in document) {
        (document as any).startViewTransition(() => this.requestUpdate());
      }
      else {
        this.requestUpdate();
      }
    });
  }

  render() {
    // router config can be round in src/router.ts
    return html`
      ${router.render()}
      <app-footer></app-footer>
    `;
  }
}
