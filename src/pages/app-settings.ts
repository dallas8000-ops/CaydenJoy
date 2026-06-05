import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/select/select.js';
import '@shoelace-style/shoelace/dist/components/option/option.js';
import '@shoelace-style/shoelace/dist/components/switch/switch.js';
import { AccessibilityManager, AccessibilitySettings, ColorTheme, FontSize } from '../utils/accessibility-manager.js';
import { styles } from '../styles/shared-styles.js';
import '../components/header.js';
import '../components/footer.js';

@customElement('app-settings')
export class AppSettings extends LitElement {
  @state() settings: AccessibilitySettings = AccessibilityManager.getInstance().getSettings();

  private accessibilityManager = AccessibilityManager.getInstance();
  private unsubscribe?: () => void;

  static styles = [
    styles,
    css`
      :host {
        display: block;
      }

      main {
        max-width: 800px;
        margin: 2rem auto;
        padding: 1rem;
      }

      h1 {
        text-align: center;
        font-size: 2.5rem;
        margin-bottom: 2rem;
      }

      .settings-grid {
        display: grid;
        gap: 2rem;
      }

      sl-card {
        border-radius: 1rem;
      }

      .setting-group {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1.5rem;
      }

      .setting-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        flex-wrap: wrap;
      }

      .setting-label {
        font-size: calc(1.1rem * var(--base-font-multiplier));
        font-weight: 600;
        flex: 1;
        min-width: 200px;
      }

      .setting-description {
        font-size: calc(0.9rem * var(--base-font-multiplier));
        color: #666;
        margin-top: 0.5rem;
        margin-left: 0;
      }

      sl-select, sl-switch {
        min-width: 200px;
      }

      .button-group {
        display: flex;
        gap: 1rem;
        justify-content: center;
        margin-top: 2rem;
        flex-wrap: wrap;
      }

      sl-button {
        padding: 0.75rem 1.5rem;
        font-size: calc(1rem * var(--base-font-multiplier));
        min-height: 48px;
        min-width: 48px;
      }

      .preview-section {
        background: var(--bg-color);
        color: var(--text-color);
        padding: 2rem;
        border-radius: 1rem;
        text-align: center;
        margin-top: 2rem;
      }

      .preview-title {
        font-size: calc(1.5rem * var(--base-font-multiplier));
        font-weight: bold;
        margin-bottom: 1rem;
      }

      .preview-buttons {
        display: flex;
        gap: 1rem;
        justify-content: center;
        flex-wrap: wrap;
      }

      .preview-buttons sl-button {
        margin: 0.5rem;
      }

      .theme-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 1rem;
        margin-top: 1rem;
      }

      .theme-sample {
        padding: 1rem;
        border-radius: 0.5rem;
        text-align: center;
        font-weight: bold;
        cursor: pointer;
        border: 3px solid transparent;
        transition: all 0.3s ease;
        min-height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .theme-sample:hover {
        transform: scale(1.05);
      }

      .theme-sample.selected {
        border-color: var(--primary-color);
        box-shadow: 0 0 10px rgba(108, 92, 231, 0.5);
      }

      .calm-theme {
        background-color: #F5F3F0;
        color: #3E3E3E;
      }

      .high-contrast-theme {
        background-color: #FFFFFF;
        color: #000000;
        border: 2px solid #000000;
      }

      .normal-theme {
        background-color: #F8F9FA;
        color: #2C3E50;
      }

      @media (max-width: 600px) {
        main {
          padding: 0.5rem;
        }

        h1 {
          font-size: 1.8rem;
        }

        .theme-grid {
          grid-template-columns: 1fr;
        }

        .setting-item {
          flex-direction: column;
          align-items: flex-start;
        }

        sl-select, sl-switch {
          width: 100%;
        }
      }
    `
  ];

  connectedCallback(): void {
    super.connectedCallback();
    this.unsubscribe = this.accessibilityManager.subscribe((settings) => {
      this.settings = settings;
    });
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  private onThemeChange(theme: ColorTheme): void {
    this.accessibilityManager.saveSettings({ colorTheme: theme });
  }

  private onFontSizeChange(e: Event): void {
    const size = (e.target as HTMLSelectElement).value as FontSize;
    this.accessibilityManager.saveSettings({ fontSize: size });
  }

  private onAnimationsChange(e: Event): void {
    const enabled = (e.target as HTMLInputElement).checked;
    this.accessibilityManager.saveSettings({ enableAnimations: enabled });
  }

  private onSoundsChange(e: Event): void {
    const enabled = (e.target as HTMLInputElement).checked;
    this.accessibilityManager.saveSettings({ enableSounds: enabled });
  }

  private onTextToSpeechChange(e: Event): void {
    const enabled = (e.target as HTMLInputElement).checked;
    this.accessibilityManager.saveSettings({ enableTextToSpeech: enabled });
    if (enabled) {
      this.accessibilityManager.speak('Text to speech enabled');
    }
  }

  private onReducedMotionChange(e: Event): void {
    const enabled = (e.target as HTMLInputElement).checked;
    this.accessibilityManager.saveSettings({ enableReducedMotion: enabled });
  }

  private onHighlightInteractiveChange(e: Event): void {
    const enabled = (e.target as HTMLInputElement).checked;
    this.accessibilityManager.saveSettings({ highlightInteractive: enabled });
  }

  private resetSettings(): void {
    if (confirm('Reset all settings to defaults? This cannot be undone.')) {
      this.accessibilityManager.resetToDefaults();
    }
  }

  private testSound(): void {
    this.accessibilityManager.playSound('success');
  }

  private testSpeech(): void {
    this.accessibilityManager.speak('This is a test of the text to speech feature.');
  }

  render() {
    return html`
      <app-header></app-header>

      <main>
        <h1>⚙️ Settings</h1>

        <div class="settings-grid">
          <!-- Color Theme -->
          <sl-card>
            <div slot="header">
              <h2>🎨 Color Theme</h2>
            </div>
            <div class="setting-group">
              <p class="setting-description">
                Choose a theme that's comfortable for you. The calm theme uses softer colors to reduce sensory overload.
              </p>
              <div class="theme-grid">
                <div
                  class="theme-sample calm-theme ${this.settings.colorTheme === 'calm' ? 'selected' : ''}"
                  @click="${() => this.onThemeChange('calm')}"
                  role="button"
                  tabindex="0"
                >
                  Calm
                </div>
                <div
                  class="theme-sample normal-theme ${this.settings.colorTheme === 'normal' ? 'selected' : ''}"
                  @click="${() => this.onThemeChange('normal')}"
                  role="button"
                  tabindex="0"
                >
                  Normal
                </div>
                <div
                  class="theme-sample high-contrast-theme ${this.settings.colorTheme === 'highContrast' ? 'selected' : ''}"
                  @click="${() => this.onThemeChange('highContrast')}"
                  role="button"
                  tabindex="0"
                >
                  High Contrast
                </div>
              </div>
            </div>
          </sl-card>

          <!-- Font Size -->
          <sl-card>
            <div slot="header">
              <h2>🔤 Font Size</h2>
            </div>
            <div class="setting-group">
              <div class="setting-item">
                <label class="setting-label">Choose text size:</label>
                <sl-select
                  value="${this.settings.fontSize}"
                  @change="${this.onFontSizeChange}"
                >
                  <sl-option value="small">Small</sl-option>
                  <sl-option value="medium">Medium</sl-option>
                  <sl-option value="large">Large</sl-option>
                  <sl-option value="xlarge">Extra Large</sl-option>
                </sl-select>
              </div>
            </div>
          </sl-card>

          <!-- Motion & Animations -->
          <sl-card>
            <div slot="header">
              <h2>🎬 Motion & Animations</h2>
            </div>
            <div class="setting-group">
              <div class="setting-item">
                <label class="setting-label">Enable animations:</label>
                <sl-switch
                  ?checked="${this.settings.enableAnimations}"
                  @change="${this.onAnimationsChange}"
                ></sl-switch>
              </div>
              <p class="setting-description">
                Turn off animations if they make you uncomfortable or distracted.
              </p>

              <div class="setting-item">
                <label class="setting-label">Reduce motion:</label>
                <sl-switch
                  ?checked="${this.settings.enableReducedMotion}"
                  @change="${this.onReducedMotionChange}"
                ></sl-switch>
              </div>
              <p class="setting-description">
                Reduces scrolling, transitions, and other movement effects.
              </p>
            </div>
          </sl-card>

          <!-- Sounds & Speech -->
          <sl-card>
            <div slot="header">
              <h2>🔊 Sounds & Speech</h2>
            </div>
            <div class="setting-group">
              <div class="setting-item">
                <label class="setting-label">Enable sounds:</label>
                <sl-switch
                  ?checked="${this.settings.enableSounds}"
                  @change="${this.onSoundsChange}"
                ></sl-switch>
              </div>
              <sl-button @click="${this.testSound}" size="medium">
                Test Sound
              </sl-button>

              <div class="setting-item" style="margin-top: 1rem;">
                <label class="setting-label">Text-to-speech:</label>
                <sl-switch
                  ?checked="${this.settings.enableTextToSpeech}"
                  @change="${this.onTextToSpeechChange}"
                ></sl-switch>
              </div>
              <sl-button @click="${this.testSpeech}" size="medium">
                Test Speech
              </sl-button>
            </div>
          </sl-card>

          <!-- Interactive Elements -->
          <sl-card>
            <div slot="header">
              <h2>🎯 Interactive Elements</h2>
            </div>
            <div class="setting-group">
              <div class="setting-item">
                <label class="setting-label">Highlight buttons & links:</label>
                <sl-switch
                  ?checked="${this.settings.highlightInteractive}"
                  @change="${this.onHighlightInteractiveChange}"
                ></sl-switch>
              </div>
              <p class="setting-description">
                Adds outlines to buttons and links to make them easier to see.
              </p>
            </div>
          </sl-card>

          <!-- Preview -->
          <sl-card>
            <div slot="header">
              <h2>👁️ Preview</h2>
            </div>
            <div class="preview-section">
              <div class="preview-title">Preview your settings</div>
              <div class="preview-buttons">
                <sl-button variant="primary">Primary Button</sl-button>
                <sl-button variant="success">Success Button</sl-button>
                <sl-button variant="warning">Warning Button</sl-button>
              </div>
            </div>
          </sl-card>
        </div>

        <!-- Action Buttons -->
        <div class="button-group">
          <sl-button variant="default" @click="${this.resetSettings}">
            Reset to Defaults
          </sl-button>
        </div>
      </main>

      <app-footer></app-footer>
    `;
  }
}
