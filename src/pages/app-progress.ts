import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { ProgressManager, ProgressSummary } from '../utils/progress-manager.js';

@customElement('app-progress')
export class AppProgress extends LitElement {
  @state() private summary: ProgressSummary = ProgressManager.getInstance().getSummary();

  private progressManager = ProgressManager.getInstance();

  static styles = css`
    :host {
      display: block;
      min-height: 100vh;
      padding: 1.25rem;
      background: #f6f8fb;
      color: #243041;
    }

    .container {
      max-width: 1180px;
      margin: 0 auto;
    }

    h1 {
      margin: 0;
      color: #243041;
      font-size: 2rem;
      line-height: 1.1;
    }

    .subtitle {
      margin: 0.4rem 0 1rem;
      color: #596779;
      line-height: 1.45;
    }

    .stats {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 0.8rem;
      margin-bottom: 1rem;
    }

    .stat,
    .panel {
      background: #ffffff;
      border: 1px solid #d8e0ea;
      border-radius: 0.5rem;
      box-shadow: 0 4px 16px rgba(30, 42, 58, 0.08);
    }

    .stat {
      padding: 1rem;
    }

    .stat-value {
      font-size: 2rem;
      font-weight: 900;
      color: #1f7a8c;
    }

    .stat-label {
      color: #596779;
      font-weight: 800;
    }

    .grid {
      display: grid;
      grid-template-columns: 0.8fr 1.2fr;
      gap: 1rem;
    }

    .panel {
      padding: 1rem;
    }

    h2 {
      margin: 0 0 0.75rem;
      color: #243041;
      font-size: 1.25rem;
    }

    .row {
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 0.75rem;
      padding: 0.65rem 0;
      border-bottom: 1px solid #e8edf3;
      color: #334155;
      font-weight: 800;
    }

    .row:last-child {
      border-bottom: 0;
    }

    .recent {
      display: grid;
      gap: 0.55rem;
    }

    .event {
      padding: 0.75rem;
      border-left: 6px solid #2e8f74;
      border-radius: 0.5rem;
      background: #f8fafc;
    }

    .event-label {
      font-weight: 900;
      color: #243041;
    }

    .event-meta {
      margin-top: 0.25rem;
      color: #657386;
      font-size: 0.9rem;
      font-weight: 700;
    }

    .empty {
      padding: 1rem;
      background: #edf7f4;
      border-radius: 0.5rem;
      color: #1f463b;
      font-weight: 800;
    }

    .actions {
      display: flex;
      gap: 0.75rem;
      flex-wrap: wrap;
      margin-top: 1rem;
    }

    button {
      min-height: 52px;
      border: 0;
      border-radius: 0.5rem;
      padding: 0.75rem 1rem;
      cursor: pointer;
      font-weight: 900;
      background: #e8edf3;
      color: #243041;
    }

    .danger {
      background: #c0392b;
      color: #ffffff;
    }

    @media (max-width: 800px) {
      .stats,
      .grid {
        grid-template-columns: 1fr;
      }
    }
  `;

  connectedCallback(): void {
    super.connectedCallback();
    this.refresh();
  }

  private refresh(): void {
    this.summary = this.progressManager.getSummary();
  }

  private clearProgress(): void {
    if (confirm('Clear local progress history?')) {
      this.progressManager.clear();
      this.refresh();
    }
  }

  private formatTime(timestamp: number): string {
    return new Date(timestamp).toLocaleString();
  }

  render() {
    return html`
      <div class="container">
        <h1>Progress Dashboard</h1>
        <p class="subtitle">
          Local caregiver view of recent communication and activity use. This stays on the device and is not sent anywhere.
        </p>

        <section class="stats">
          <div class="stat">
            <div class="stat-value">${this.summary.todayEvents}</div>
            <div class="stat-label">Today</div>
          </div>
          <div class="stat">
            <div class="stat-value">${this.summary.totalEvents}</div>
            <div class="stat-label">Total</div>
          </div>
          <div class="stat">
            <div class="stat-value">${this.summary.typeCounts.communication}</div>
            <div class="stat-label">Communication</div>
          </div>
          <div class="stat">
            <div class="stat-value">${this.summary.typeCounts.activity}</div>
            <div class="stat-label">Activities</div>
          </div>
        </section>

        <section class="grid">
          <div class="panel">
            <h2>Most Used</h2>
            ${this.summary.topLabels.length === 0
              ? html`<div class="empty">No use recorded yet.</div>`
              : this.summary.topLabels.map((item) => html`
                  <div class="row">
                    <span>${item.label}</span>
                    <span>${item.count}</span>
                  </div>
                `)}
          </div>

          <div class="panel">
            <h2>Recent Activity</h2>
            <div class="recent">
              ${this.summary.recentEvents.length === 0
                ? html`<div class="empty">Tap communication or activity cards to begin collecting local progress.</div>`
                : this.summary.recentEvents.map((event) => html`
                    <div class="event">
                      <div class="event-label">${event.label}</div>
                      <div class="event-meta">${event.type} - ${this.formatTime(event.createdAt)}</div>
                      ${event.detail ? html`<div class="event-meta">${event.detail}</div>` : ''}
                    </div>
                  `)}
            </div>
          </div>
        </section>

        <div class="actions">
          <button @click=${this.refresh}>Refresh</button>
          <button class="danger" @click=${this.clearProgress}>Clear Progress</button>
        </div>
      </div>
    `;
  }
}
