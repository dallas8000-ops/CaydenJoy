import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { FeedbackItem, FeedbackManager, FeedbackType } from '../utils/feedback-manager.js';

@customElement('app-feedback')
export class AppFeedback extends LitElement {
  @state() private type: FeedbackType = 'wishlist';
  @state() private feedbackTitle = '';
  @state() private details = '';
  @state() private contact = '';
  @state() private message = '';
  @state() private items: FeedbackItem[] = [];

  private feedbackManager = FeedbackManager.getInstance();

  static styles = css`
    :host {
      display: block;
      min-height: 100vh;
      padding: 1.25rem;
      background: #f6f8fb;
      color: #243041;
    }

    .container {
      max-width: 1080px;
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

    .grid {
      display: grid;
      grid-template-columns: 0.9fr 1.1fr;
      gap: 1rem;
    }

    .panel {
      padding: 1rem;
      border: 1px solid #d8e0ea;
      border-radius: 0.5rem;
      background: #ffffff;
      box-shadow: 0 4px 16px rgba(30, 42, 58, 0.08);
    }

    label {
      display: block;
      margin: 0.8rem 0 0.35rem;
      color: #243041;
      font-weight: 900;
    }

    input,
    select,
    textarea {
      width: 100%;
      box-sizing: border-box;
      border: 2px solid #c9d4e1;
      border-radius: 0.5rem;
      padding: 0.85rem;
      font: inherit;
      color: #243041;
      background: #ffffff;
    }

    textarea {
      min-height: 150px;
      resize: vertical;
    }

    .buttons {
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

    .primary {
      background: #2e8f74;
      color: #ffffff;
    }

    .danger {
      background: #c0392b;
      color: #ffffff;
    }

    .message {
      margin-top: 0.75rem;
      padding: 0.75rem;
      border-radius: 0.5rem;
      background: #edf7f4;
      color: #1f463b;
      font-weight: 800;
    }

    .item-list {
      display: grid;
      gap: 0.75rem;
    }

    .item {
      padding: 0.85rem;
      border-left: 7px solid #1f7a8c;
      border-radius: 0.5rem;
      background: #f8fafc;
    }

    .item-title {
      font-weight: 900;
      color: #243041;
    }

    .item-meta {
      margin-top: 0.25rem;
      color: #657386;
      font-size: 0.9rem;
      font-weight: 800;
    }

    .item-details {
      margin-top: 0.55rem;
      color: #334155;
      line-height: 1.45;
    }

    .empty {
      padding: 1rem;
      background: #edf7f4;
      color: #1f463b;
      border-radius: 0.5rem;
      font-weight: 800;
    }

    @media (max-width: 780px) {
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
    this.items = this.feedbackManager.getItems();
  }

  private submitFeedback(): void {
    if (!this.feedbackTitle.trim() || !this.details.trim()) {
      this.message = 'Please add a short title and details.';
      return;
    }

    this.feedbackManager.addItem(
      this.type,
      this.feedbackTitle.trim(),
      this.details.trim(),
      this.contact.trim()
    );

    this.feedbackTitle = '';
    this.details = '';
    this.contact = '';
    this.message = 'Thank you. The idea was saved on this device.';
    this.refresh();
  }

  private deleteItem(id: string): void {
    this.feedbackManager.deleteItem(id);
    this.refresh();
  }

  private exportFeedback(): void {
    const blob = new Blob([this.feedbackManager.exportData()], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `caydenjoy-feedback-${new Date().toISOString().slice(0, 10)}.json`;
    link.click();
    URL.revokeObjectURL(url);
    this.message = 'Feedback export created.';
  }

  private clearFeedback(): void {
    if (confirm('Clear all saved feedback and wishlist items?')) {
      this.feedbackManager.clear();
      this.refresh();
      this.message = 'Feedback cleared.';
    }
  }

  private formatTime(timestamp: number): string {
    return new Date(timestamp).toLocaleString();
  }

  render() {
    return html`
      <div class="container">
        <h1>Feedback & Wishlist</h1>
        <p class="subtitle">
          Save caregiver ideas, improvement requests, success stories, and bug reports. Items stay local until exported.
        </p>

        <section class="grid">
          <div class="panel">
            <label for="feedback-type">Type</label>
            <select
              id="feedback-type"
              .value=${this.type}
              @change=${(event: Event) => this.type = (event.target as HTMLSelectElement).value as FeedbackType}
            >
              <option value="wishlist">Wishlist</option>
              <option value="improvement">Improvement</option>
              <option value="bug">Bug</option>
              <option value="success">Success Story</option>
            </select>

            <label for="feedback-title">Short title</label>
            <input
              id="feedback-title"
              .value=${this.feedbackTitle}
              placeholder="Example: Add bedtime routine pictures"
              @input=${(event: Event) => this.feedbackTitle = (event.target as HTMLInputElement).value}
            />

            <label for="feedback-details">Details</label>
            <textarea
              id="feedback-details"
              .value=${this.details}
              placeholder="Tell us what would help, what was confusing, or what worked well."
              @input=${(event: Event) => this.details = (event.target as HTMLTextAreaElement).value}
            ></textarea>

            <label for="feedback-contact">Contact, optional</label>
            <input
              id="feedback-contact"
              .value=${this.contact}
              placeholder="Email or phone if follow-up is okay"
              @input=${(event: Event) => this.contact = (event.target as HTMLInputElement).value}
            />

            <div class="buttons">
              <button class="primary" @click=${this.submitFeedback}>Save Feedback</button>
              <button @click=${this.exportFeedback}>Export</button>
              <button class="danger" @click=${this.clearFeedback}>Clear All</button>
            </div>

            ${this.message ? html`<div class="message">${this.message}</div>` : ''}
          </div>

          <div class="panel">
            <h2>Saved Items</h2>
            <div class="item-list">
              ${this.items.length === 0
                ? html`<div class="empty">No feedback saved yet.</div>`
                : this.items.map((item) => html`
                    <div class="item">
                      <div class="item-title">${item.title}</div>
                      <div class="item-meta">${item.type} - ${this.formatTime(item.createdAt)}</div>
                      <div class="item-details">${item.details}</div>
                      ${item.contact ? html`<div class="item-meta">Contact: ${item.contact}</div>` : ''}
                      <div class="buttons">
                        <button @click=${() => this.deleteItem(item.id)}>Delete</button>
                      </div>
                    </div>
                  `)}
            </div>
          </div>
        </section>
      </div>
    `;
  }
}
