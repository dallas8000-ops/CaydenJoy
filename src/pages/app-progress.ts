import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { ProgressManager, ProgressSummary } from '../utils/progress-manager.js';
import { TrialStore, type TrialEvent } from '../utils/trial-store.js';
import { buildReport, trialsToCsv, reportToHtml, type LearningReport } from '../utils/learning-report.js';
import { exportFile, printOrShareHtml, isNativeApp } from '../utils/native-export.js';

@customElement('app-progress')
export class AppProgress extends LitElement {
  @state() private summary: ProgressSummary = ProgressManager.getInstance().getSummary();
  @state() private report: LearningReport = buildReport([]);
  @state() private trials: TrialEvent[] = [];
  @state() private loadingLearning = true;
  @state() private exportMessage = '';

  private progressManager = ProgressManager.getInstance();
  private trialStore = TrialStore.getInstance();

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

    .learning { margin-bottom: 1.5rem; }
    .section-title { margin: 1.5rem 0 0.4rem; font-size: 1.5rem; }
    .game-panel { margin-bottom: 1rem; }
    .game-line { margin: -0.4rem 0 0.75rem; color: #596779; font-weight: 700; }
    .item-row {
      display: grid;
      grid-template-columns: 1fr auto auto;
      gap: 0.75rem;
      align-items: center;
      padding: 0.6rem 0;
      border-bottom: 1px solid #e8edf3;
      font-weight: 800;
    }
    .item-row:last-child { border-bottom: 0; }
    .item-meta { color: #596779; font-size: 0.9rem; font-weight: 700; }
    .chip { padding: 0.2rem 0.6rem; border-radius: 999px; font-size: 0.85rem; font-weight: 900; }
    .chip.mastered { background: #dff3ea; color: #1f6b52; }
    .chip.learning { background: #fdf0d5; color: #8a5a00; }
    .confusion { padding: 0.55rem 0; border-bottom: 1px solid #e8edf3; font-weight: 700; color: #334155; }
    .confusion:last-child { border-bottom: 0; }
    .weeks { display: grid; grid-template-columns: repeat(8, minmax(0, 1fr)); gap: 0.5rem; align-items: end; height: 170px; }
    .week { display: grid; grid-template-rows: 1fr auto; height: 100%; text-align: center; }
    .bar { display: flex; flex-direction: column-reverse; justify-self: center; width: 70%; max-width: 46px; height: 100%; }
    .seg-own { background: #2e8f74; }
    .seg-help { background: #f0b429; }
    .seg-wrong { background: #b8c2cc; }
    .week-label { margin-top: 0.35rem; color: #596779; font-size: 0.75rem; font-weight: 800; }
    .legend { display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 0.6rem; color: #596779; font-size: 0.85rem; font-weight: 800; }
    .swatch { display: inline-block; width: 0.8rem; height: 0.8rem; margin-right: 0.3rem; border-radius: 0.2rem; vertical-align: -1px; }
    .rule { margin-top: 0.75rem; color: #657386; font-size: 0.85rem; }
    .primary { background: #2e8f74; color: #ffffff; }

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
    void this.loadLearning();
  }

  private async loadLearning(): Promise<void> {
    this.trials = await this.trialStore.getAll();
    this.report = buildReport(this.trials);
    this.loadingLearning = false;
  }

  private dateStamp(): string {
    return new Date().toISOString().slice(0, 10);
  }

  /** CSV of every answer: Android Share menu on the tablet, a download in the browser. */
  private async exportCsv(): Promise<void> {
    this.exportMessage = '';
    try {
      const outcome = await exportFile(
        `caydenjoy-learning-${this.dateStamp()}.csv`,
        trialsToCsv(this.trials),
        'text/csv;charset=utf-8',
        "Cayden's learning results",
      );
      if (outcome === 'downloaded') this.exportMessage = 'CSV downloaded.';
    } catch (error) {
      console.error('CSV export failed:', error);
      this.exportMessage = 'Could not export the CSV. Please try again.';
    }
  }

  /** Printable report: print dialog in the browser; Share menu on the tablet (open in Chrome to print or save as PDF). */
  private async printReport(): Promise<void> {
    this.exportMessage = '';
    try {
      const outcome = await printOrShareHtml(
        `caydenjoy-report-${this.dateStamp()}.html`,
        reportToHtml(buildReport(this.trials)),
        "Cayden's learning report",
      );
      if (outcome === 'shared') {
        this.exportMessage = 'Report shared. To print or save as PDF, open it in Chrome and use Share > Print.';
      }
    } catch (error) {
      console.error('Report export failed:', error);
      this.exportMessage = 'Could not create the report. Please try again.';
    }
  }

  private async clearLearning(): Promise<void> {
    if (confirm('Clear all learning game results? Export them first if his teacher or therapist needs them. This cannot be undone.')) {
      await this.trialStore.clear();
      await this.loadLearning();
    }
  }

  private pct(n: number): string {
    return `${Math.round(n * 100)}%`;
  }

  private weekLabel(start: number): string {
    return new Date(start).toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
  }

  private renderWeeks() {
    const max = Math.max(1, ...this.report.weeks.map((w) => w.independent + w.prompted + w.errors));
    const h = (n: number) => `height:${(n / max) * 100}%`;
    return html`
      <div class="weeks" role="img" aria-label="Answers per week for the last 8 weeks">
        ${this.report.weeks.map((w) => html`
          <div class="week" title="${w.independent} on his own, ${w.prompted} with help, ${w.errors} wrong">
            <div class="bar">
              <div class="seg-own" style=${h(w.independent)}></div>
              <div class="seg-help" style=${h(w.prompted)}></div>
              <div class="seg-wrong" style=${h(w.errors)}></div>
            </div>
            <div class="week-label">${this.weekLabel(w.start)}</div>
          </div>
        `)}
      </div>
      <div class="legend">
        <span><span class="swatch seg-own"></span>Right on his own</span>
        <span><span class="swatch seg-help"></span>Right with help</span>
        <span><span class="swatch seg-wrong"></span>Wrong pick</span>
      </div>
    `;
  }

  private renderLearning() {
    const r = this.report;
    const t = r.totals;
    if (this.loadingLearning) return html`<div class="empty">Loading learning results...</div>`;
    if (r.games.length === 0) {
      return html`<div class="empty">No learning game answers yet. Play Picture Puzzle, or the Play mode on Colors, Numbers or Places.</div>`;
    }
    return html`
      <section class="stats">
        <div class="stat"><div class="stat-value">${t.questions}</div><div class="stat-label">Questions answered</div></div>
        <div class="stat"><div class="stat-value">${t.questions ? this.pct(t.independent / t.questions) : '0%'}</div><div class="stat-label">Right on his own</div></div>
        <div class="stat"><div class="stat-value">${t.mastered}</div><div class="stat-label">Items mastered</div></div>
        <div class="stat"><div class="stat-value">${t.errors}</div><div class="stat-label">Wrong picks</div></div>
      </section>

      ${r.games.map((g) => html`
        <div class="panel game-panel" data-testid="game-report">
          <h2>${g.title}</h2>
          <p class="game-line">${g.mastered} of ${g.items.length} mastered · ${g.questions} questions · ${g.prompted} needed help</p>
          ${g.items.map((i) => html`
            <div class="item-row">
              <span>${i.label}</span>
              <span class="item-meta">${this.pct(i.recentIndependentRate)} on his own (last ${i.recentQuestions})</span>
              <span class="chip ${i.status}">${i.status === 'mastered' ? 'Mastered' : 'Learning'}</span>
            </div>
          `)}
        </div>
      `)}

      <section class="grid">
        <div class="panel">
          <h2>Often mixed up</h2>
          ${r.confusions.length === 0
            ? html`<div class="empty">Nothing mixed up more than once yet.</div>`
            : r.confusions.map((c) => html`<div class="confusion">Asked for <b>${c.askedFor}</b>, picked <b>${c.picked}</b> · ${c.count} times</div>`)}
        </div>
        <div class="panel">
          <h2>Week by week</h2>
          ${this.renderWeeks()}
        </div>
      </section>

      <p class="rule">
        Mastered = right on his own in at least 80% of his last 10 questions on that item, on at least 2 different days,
        with at least 5 questions answered.
      </p>
    `;
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
          Local caregiver view of learning and communication. Everything stays on this device and is not sent anywhere.
        </p>

        <div class="learning" data-testid="learning-section">
          <h2 class="section-title">Learning games</h2>
          ${this.renderLearning()}
          <div class="actions">
            <button class="primary" data-testid="print-report" @click=${this.printReport} ?disabled=${this.trials.length === 0}>
              ${isNativeApp() ? 'Share report (print / PDF)' : 'Print report / Save as PDF'}
            </button>
            <button data-testid="export-csv" @click=${this.exportCsv} ?disabled=${this.trials.length === 0}>
              ${isNativeApp() ? 'Share CSV' : 'Export CSV'}
            </button>
            <button class="danger" @click=${this.clearLearning} ?disabled=${this.trials.length === 0}>Clear learning results</button>
          </div>
          ${this.exportMessage ? html`<p class="rule" role="status" data-testid="export-message">${this.exportMessage}</p>` : ''}
        </div>

        <h2 class="section-title">Communication and activity log</h2>

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
