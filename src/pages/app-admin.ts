import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

interface GeneratedCode {
  code: string;
  createdAt: number;
  description: string;
}

@customElement('app-admin')
export class AppAdmin extends LitElement {
  @state() generatedCodes: GeneratedCode[] = [];
  @state() newCodeDescription: string = '';
  @state() showCodeList: boolean = false;

  private readonly GENERATED_CODES_KEY = 'caydenjoy_generated_codes';

  connectedCallback() {
    super.connectedCallback();
    this.loadGeneratedCodes();
  }

  static styles = css`
    :host {
      display: block;
      padding: 2rem;
    }

    .container {
      max-width: 900px;
      margin: 0 auto;
    }

    .header {
      text-align: center;
      margin-bottom: 2rem;
    }

    h1 {
      font-size: 2rem;
      font-weight: bold;
      color: #6C5CE7;
      margin-bottom: 0.5rem;
    }

    .subtitle {
      font-size: 1rem;
      color: #999;
    }

    .warning {
      background: #fff3cd;
      border: 1px solid #ffeaa7;
      color: #856404;
      padding: 1rem;
      border-radius: 0.5rem;
      margin-bottom: 2rem;
      font-size: 0.95rem;
    }

    .section {
      background: white;
      border: 1px solid #ddd;
      border-radius: 1rem;
      padding: 1.5rem;
      margin-bottom: 1.5rem;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .section-title {
      font-size: 1.25rem;
      font-weight: 600;
      color: #333;
      margin-bottom: 1rem;
      padding-bottom: 0.75rem;
      border-bottom: 2px solid #f0f0f0;
    }

    .form-group {
      margin-bottom: 1rem;
    }

    .label {
      display: block;
      font-size: 0.95rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
      color: #333;
    }

    .input-row {
      display: flex;
      gap: 0.75rem;
      align-items: flex-end;
    }

    input[type="text"] {
      flex: 1;
      padding: 0.75rem;
      border: 2px solid #ddd;
      border-radius: 0.5rem;
      font-size: 0.95rem;
      transition: border-color 0.2s;
    }

    input[type="text"]:focus {
      outline: none;
      border-color: #6C5CE7;
    }

    button {
      padding: 0.75rem 1.5rem;
      border: none;
      border-radius: 0.5rem;
      cursor: pointer;
      font-size: 0.95rem;
      font-weight: 600;
      transition: all 0.2s;
    }

    .btn-primary {
      background: #6C5CE7;
      color: white;
    }

    .btn-primary:hover {
      background: #5F3DC4;
      transform: scale(1.02);
    }

    .btn-secondary {
      background: #f0f0f0;
      color: #333;
    }

    .btn-secondary:hover {
      background: #e0e0e0;
    }

    .btn-danger {
      background: #f87171;
      color: white;
    }

    .btn-danger:hover {
      background: #dc2626;
    }

    .btn-copy {
      background: #60a5fa;
      color: white;
      padding: 0.5rem 1rem;
      font-size: 0.85rem;
    }

    .btn-copy:hover {
      background: #3b82f6;
    }

    .codes-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .code-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      background: #f9f9f9;
      border: 1px solid #eee;
      border-radius: 0.5rem;
      margin-bottom: 0.75rem;
      gap: 1rem;
    }

    .code-info {
      flex: 1;
    }

    .code-text {
      font-family: monospace;
      font-size: 1.1rem;
      font-weight: bold;
      color: #6C5CE7;
      margin-bottom: 0.25rem;
    }

    .code-description {
      font-size: 0.85rem;
      color: #666;
      margin-bottom: 0.25rem;
    }

    .code-date {
      font-size: 0.8rem;
      color: #999;
    }

    .code-actions {
      display: flex;
      gap: 0.5rem;
    }

    .empty-message {
      text-align: center;
      padding: 2rem;
      color: #999;
    }

    .stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
      margin-bottom: 1.5rem;
    }

    .stat-card {
      background: linear-gradient(135deg, #6C5CE7 0%, #5F3DC4 100%);
      color: white;
      padding: 1.5rem;
      border-radius: 0.75rem;
      text-align: center;
    }

    .stat-number {
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 0.25rem;
    }

    .stat-label {
      font-size: 0.9rem;
      opacity: 0.9;
    }

    .toggle-btn {
      background: #f0f0f0;
      color: #333;
      padding: 0.5rem 1rem;
      font-size: 0.85rem;
    }

    .toggle-btn:hover {
      background: #e0e0e0;
    }
  `;

  private loadGeneratedCodes(): void {
    try {
      const stored = localStorage.getItem(this.GENERATED_CODES_KEY);
      if (stored) {
        this.generatedCodes = JSON.parse(stored);
      }
    } catch (e) {
      console.error('Error loading generated codes:', e);
    }
  }

  private saveGeneratedCodes(): void {
    try {
      localStorage.setItem(this.GENERATED_CODES_KEY, JSON.stringify(this.generatedCodes));
    } catch (e) {
      console.error('Error saving generated codes:', e);
    }
  }

  private generateCode(): void {
    if (!this.newCodeDescription.trim()) {
      alert('Please enter a description for the code');
      return;
    }

    // Generate a random code
    const timestamp = Date.now().toString(36).toUpperCase();
    const random = Math.random().toString(36).substring(2, 8).toUpperCase();
    const code = `GEN-${timestamp}-${random}`;

    const newCode: GeneratedCode = {
      code,
      createdAt: Date.now(),
      description: this.newCodeDescription.trim()
    };

    this.generatedCodes = [newCode, ...this.generatedCodes];
    this.saveGeneratedCodes();
    this.newCodeDescription = '';
  }

  private deleteCode(code: string): void {
    if (confirm(`Delete code ${code}?`)) {
      this.generatedCodes = this.generatedCodes.filter(c => c.code !== code);
      this.saveGeneratedCodes();
    }
  }

  private copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text).then(() => {
      alert('Code copied to clipboard!');
    });
  }

  private formatDate(timestamp: number): string {
    return new Date(timestamp).toLocaleString();
  }

  private handleDescriptionKeydown(e: KeyboardEvent): void {
    if (e.key === 'Enter') {
      this.generateCode();
    }
  }

  render() {
    const totalCodes = this.generatedCodes.length;
    const recentCodes = this.generatedCodes.slice(0, 5);

    return html`
      <div class="container">
        <div class="header">
          <h1>⚙️ Admin Panel</h1>
          <p class="subtitle">Manage upgrade codes and licenses</p>
        </div>

        <div class="warning">
          ⚠️ <strong>Admin Only:</strong> This panel is for development and testing only.
          In production, integrate code generation with a backend server.
        </div>

        <div class="stats">
          <div class="stat-card">
            <div class="stat-number">${totalCodes}</div>
            <div class="stat-label">Generated Codes</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">8</div>
            <div class="stat-label">Valid Test Codes</div>
          </div>
        </div>

        <div class="section">
          <div class="section-title">Generate New Code</div>
          <div class="form-group">
            <label class="label">Code Description (for what purpose?)</label>
            <div class="input-row">
              <input
                type="text"
                placeholder="e.g., Customer evaluation, Beta tester, etc."
                .value=${this.newCodeDescription}
                @input=${(e: Event) => {
                  this.newCodeDescription = (e.target as HTMLInputElement).value;
                }}
                @keydown=${this.handleDescriptionKeydown}
              />
              <button class="btn-primary" @click=${this.generateCode}>
                Generate Code
              </button>
            </div>
          </div>
        </div>

        <div class="section">
          <div class="section-title">
            Generated Codes
            <button
              class="toggle-btn"
              style="float: right; margin-top: -0.5rem;"
              @click=${() => {
                this.showCodeList = !this.showCodeList;
              }}
            >
              ${this.showCodeList ? 'Hide' : 'Show All'} (${totalCodes})
            </button>
          </div>

          ${this.generatedCodes.length === 0
            ? html`<div class="empty-message">No codes generated yet</div>`
            : html`
                <ul class="codes-list">
                  ${(this.showCodeList ? this.generatedCodes : recentCodes).map(
                    code => html`
                      <li class="code-item">
                        <div class="code-info">
                          <div class="code-text">${code.code}</div>
                          <div class="code-description">${code.description}</div>
                          <div class="code-date">Created: ${this.formatDate(code.createdAt)}</div>
                        </div>
                        <div class="code-actions">
                          <button class="btn-copy" @click=${() => this.copyToClipboard(code.code)}>
                            📋 Copy
                          </button>
                          <button class="btn-danger" @click=${() => this.deleteCode(code.code)}>
                            🗑️ Delete
                          </button>
                        </div>
                      </li>
                    `
                  )}
                </ul>
              `}
        </div>

        <div class="section">
          <div class="section-title">Valid Test Codes</div>
          <ul class="codes-list">
            <li class="code-item">
              <div class="code-info">
                <div class="code-text">CAYDENJOY-PREMIUM-2024</div>
                <div class="code-description">Primary test code</div>
              </div>
              <button class="btn-copy" @click=${() => this.copyToClipboard('CAYDENJOY-PREMIUM-2024')}>
                📋 Copy
              </button>
            </li>
            <li class="code-item">
              <div class="code-info">
                <div class="code-text">TEST-CODE-001</div>
                <div class="code-description">Quick test code</div>
              </div>
              <button class="btn-copy" @click=${() => this.copyToClipboard('TEST-CODE-001')}>
                📋 Copy
              </button>
            </li>
            <li class="code-item">
              <div class="code-info">
                <div class="code-text">DEMO-FULL-ACCESS</div>
                <div class="code-description">Demo/evaluation code</div>
              </div>
              <button class="btn-copy" @click=${() => this.copyToClipboard('DEMO-FULL-ACCESS')}>
                📋 Copy
              </button>
            </li>
          </ul>
        </div>
      </div>
    `;
  }
}
