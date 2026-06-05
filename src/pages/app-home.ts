import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { resolveRouterPath } from '../router';

import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/badge/badge.js';

import '../components/header';

@customElement('app-home')
export class AppHome extends LitElement {
  @property() message = 'CaydenJoy';
  @property() isOnline = navigator.onLine;

  static styles = css`
    :host {
      display: block;
      min-height: 100vh;
      background: #f6f8fb;
      color: #243041;
    }

    main {
      max-width: 1180px;
      margin: 0 auto;
      padding: 1.25rem;
    }

    .intro {
      display: grid;
      gap: 0.6rem;
      margin: 0.5rem 0 1.2rem;
    }

    h1 {
      margin: 0;
      color: #243041;
      font-size: 2.25rem;
      line-height: 1.05;
    }

    .lead {
      margin: 0;
      max-width: 720px;
      color: #586778;
      font-size: 1.08rem;
      line-height: 1.5;
    }

    .status-row {
      display: flex;
      gap: 0.75rem;
      flex-wrap: wrap;
      align-items: center;
    }

    .urgent-grid {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 0.65rem;
      margin: 1rem 0;
    }

    .urgent {
      min-height: 62px;
      border: 0;
      border-radius: 0.5rem;
      color: #ffffff;
      font-size: 1.05rem;
      font-weight: 900;
      box-shadow: 0 3px 10px rgba(30, 42, 58, 0.16);
    }

    .help { background: #c0392b; }
    .bathroom { background: #6b5b95; }
    .break { background: #1f7a8c; }
    .stop { background: #9d1c1c; }

    .feature-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 1rem;
    }

    .feature {
      display: grid;
      grid-template-columns: 112px 1fr;
      gap: 1rem;
      align-items: stretch;
      min-height: 160px;
      padding: 0;
      overflow: hidden;
      border: 1px solid #d9e2ec;
      border-radius: 0.5rem;
      background: #ffffff;
      text-decoration: none;
      color: inherit;
      box-shadow: 0 6px 18px rgba(30, 42, 58, 0.08);
    }

    .feature:hover {
      outline: 4px solid rgba(46, 143, 116, 0.18);
      text-decoration: none;
    }

    .feature img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      background: #dfe8f1;
    }

    .feature-copy {
      padding: 1rem 1rem 1rem 0;
      display: grid;
      align-content: center;
      gap: 0.35rem;
    }

    .feature-title {
      font-size: 1.25rem;
      font-weight: 900;
      color: #243041;
    }

    .feature-text {
      color: #657386;
      line-height: 1.4;
    }

    @media (max-width: 760px) {
      .feature-grid,
      .urgent-grid {
        grid-template-columns: 1fr;
      }

      .feature {
        grid-template-columns: 96px 1fr;
      }

      h1 {
        font-size: 1.75rem;
      }
    }
  `;

  firstUpdated() {
    window.addEventListener('online', () => {
      this.isOnline = true;
    });
    window.addEventListener('offline', () => {
      this.isOnline = false;
    });
  }

  private speak(text: string) {
    if ('speechSynthesis' in window && typeof SpeechSynthesisUtterance !== 'undefined') {
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(new SpeechSynthesisUtterance(text));
    }
  }

  render() {
    return html`
      <app-header></app-header>

      <main>
        <section class="intro">
          <div class="status-row">
            <h1>${this.message}</h1>
            ${this.isOnline
              ? html`<sl-badge variant="success">Online</sl-badge>`
              : html`<sl-badge variant="warning">Offline</sl-badge>`}
          </div>
          <p class="lead">
            A photo-first communication and activity app for daily needs, choices, matching,
            routines, and therapy-style sessions.
          </p>
        </section>

        <div class="urgent-grid" aria-label="Always available communication buttons">
          <button class="urgent help" @click=${() => this.speak('Help please.')}>Help</button>
          <button class="urgent bathroom" @click=${() => this.speak('I need the bathroom.')}>Bathroom</button>
          <button class="urgent break" @click=${() => this.speak('I need a break.')}>Break</button>
          <button class="urgent stop" @click=${() => this.speak('Stop.')}>Stop</button>
        </div>

        <section class="feature-grid" aria-label="Main app areas">
          <a class="feature" href=${resolveRouterPath('family-puzzle')}>
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=500&q=80"
              alt="Child activity table"
            />
            <div class="feature-copy">
              <div class="feature-title">Activity Sessions</div>
              <div class="feature-text">Photo choices, matching, routine sequencing, and simple puzzle work.</div>
            </div>
          </a>

          <a class="feature" href=${resolveRouterPath()}>
            <img
              src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=500&q=80"
              alt="Communication cards"
            />
            <div class="feature-copy">
              <div class="feature-title">Communication Board</div>
              <div class="feature-text">Large request buttons with speech for daily needs and sensory support.</div>
            </div>
          </a>

          <a class="feature" href=${resolveRouterPath('custom-images')}>
            <img
              src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=500&q=80"
              alt="Camera for custom photos"
            />
            <div class="feature-copy">
              <div class="feature-title">Custom Photos</div>
              <div class="feature-text">Add real pictures from the child's home, family, foods, toys, and places.</div>
            </div>
          </a>

          <a class="feature" href=${resolveRouterPath('settings')}>
            <img
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=500&q=80"
              alt="Calm settings workspace"
            />
            <div class="feature-copy">
              <div class="feature-title">Comfort Settings</div>
              <div class="feature-text">Adjust theme, text size, sound, speech, contrast, and motion sensitivity.</div>
            </div>
          </a>

          <a class="feature" href=${resolveRouterPath('progress')}>
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=80"
              alt="Progress notes and charts"
            />
            <div class="feature-copy">
              <div class="feature-title">Progress Dashboard</div>
              <div class="feature-text">See local usage patterns for communication, activities, and safety buttons.</div>
            </div>
          </a>

          <a class="feature" href=${resolveRouterPath('feedback')}>
            <img
              src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=500&q=80"
              alt="Notebook for feedback and ideas"
            />
            <div class="feature-copy">
              <div class="feature-title">Feedback & Wishlist</div>
              <div class="feature-text">Save caregiver ideas, improvement requests, bug reports, and success stories.</div>
            </div>
          </a>
        </section>
      </main>
    `;
  }
}
