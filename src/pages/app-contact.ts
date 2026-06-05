import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { resolveRouterPath } from '../router';

import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/input/input.js';
import '@shoelace-style/shoelace/dist/components/textarea/textarea.js';

import { styles } from '../styles/shared-styles';
import '../components/header';

@customElement('app-contact')
export class AppContact extends LitElement {
  @property() name = '';
  @property() email = '';
  @property() message = '';
  @property() submitted = false;

  private readonly supportEmail = 'dallas8000@gmail.com';

  static styles = [
    styles,
    css`
      main {
        padding: 20px;
        max-width: 760px;
        margin: 0 auto;
        color: #172033;
      }

      h1,
      h2 {
        color: #172033;
      }

      main > p {
        color: #334155;
        line-height: 1.6;
      }

      sl-card {
        margin-bottom: 24px;
      }

      sl-card::part(base) {
        background: #ffffff;
        border: 1px solid #d9e2ef;
        border-radius: 10px;
        color: #172033;
        box-shadow: 0 8px 20px rgba(31, 41, 55, 0.08);
      }

      form {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      sl-input,
      sl-textarea {
        width: 100%;
      }

      .form-group {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      label {
        font-weight: 700;
        color: #243b6b;
      }

      .success-message {
        background-color: #047857;
        color: white;
        padding: 16px;
        border-radius: 6px;
        margin-bottom: 16px;
      }

      .contact-info {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 16px;
        margin-top: 24px;
      }

      .info-box {
        background: #ffffff;
        border: 1px solid #d9e2ef;
        color: #172033;
        padding: 16px;
        border-radius: 10px;
        box-shadow: 0 8px 20px rgba(31, 41, 55, 0.08);
      }

      .info-box h3 {
        margin: 0 0 8px 0;
        color: #243b6b;
      }

      .info-box p {
        margin: 0 0 14px 0;
        color: #526070;
        line-height: 1.5;
      }

      .info-box sl-button,
      form sl-button {
        width: 100%;
      }
    `
  ];

  handleSubmit(e: Event) {
    e.preventDefault();

    if (!this.name || !this.email || !this.message) {
      alert('Please fill in all fields');
      return;
    }

    localStorage.setItem('lastContact', JSON.stringify({
      name: this.name,
      email: this.email,
      message: this.message,
      timestamp: new Date().toISOString()
    }));

    const subject = encodeURIComponent(`CaydenJoy support request from ${this.name}`);
    const body = encodeURIComponent(
      `Name: ${this.name}\nEmail: ${this.email}\n\nMessage:\n${this.message}`
    );

    this.submitted = true;
    window.location.href = `mailto:${this.supportEmail}?subject=${subject}&body=${body}`;
    this.resetForm();

    setTimeout(() => {
      this.submitted = false;
    }, 5000);
  }

  resetForm() {
    this.name = '';
    this.email = '';
    this.message = '';
  }

  render() {
    return html`
      <app-header title="Contact" enableBack></app-header>

      <main>
        <h1>Contact Support</h1>
        <p>
          Send a support email, save feedback inside the app, or get help with premium
          upgrades and one-time APK keys.
        </p>

        ${this.submitted ? html`
          <div class="success-message">
            Your message was saved locally and opened as an email draft.
          </div>
        ` : ''}

        <sl-card>
          <div slot="header">
            <h2>Send an Email</h2>
          </div>

          <form @submit=${this.handleSubmit}>
            <div class="form-group">
              <label for="name">Name</label>
              <sl-input
                id="name"
                type="text"
                placeholder="Your name"
                .value=${this.name}
                @sl-input=${(e: any) => this.name = e.target.value}
                required
              ></sl-input>
            </div>

            <div class="form-group">
              <label for="email">Email</label>
              <sl-input
                id="email"
                type="email"
                placeholder="your@email.com"
                .value=${this.email}
                @sl-input=${(e: any) => this.email = e.target.value}
                required
              ></sl-input>
            </div>

            <div class="form-group">
              <label for="message">Message</label>
              <sl-textarea
                id="message"
                placeholder="Tell us what you need help with."
                rows="6"
                .value=${this.message}
                @sl-input=${(e: any) => this.message = e.target.value}
                required
              ></sl-textarea>
            </div>

            <sl-button type="submit" variant="primary">Open Email Draft</sl-button>
            <sl-button type="reset" variant="default" @click=${() => this.resetForm()}>Clear</sl-button>
          </form>
        </sl-card>

        <div class="contact-info">
          <div class="info-box">
            <h3>Email Support</h3>
            <p>Direct support for account, purchase, app setup, or family-use questions.</p>
            <sl-button
              href="mailto:${this.supportEmail}?subject=CaydenJoy%20support"
              variant="primary"
            >
              Email Support
            </sl-button>
          </div>

          <div class="info-box">
            <h3>Feedback & Wishlist</h3>
            <p>Save improvement ideas, feature requests, success stories, or issues.</p>
            <sl-button href="${resolveRouterPath('feedback')}" variant="primary">
              Open Feedback
            </sl-button>
          </div>

          <div class="info-box">
            <h3>Upgrade Help</h3>
            <p>View premium tiers or redeem a one-time APK upgrade key.</p>
            <sl-button href="${resolveRouterPath('premium')}" variant="primary">
              View Premium
            </sl-button>
          </div>
        </div>

        <div style="text-align: center; margin-top: 48px;">
          <sl-button href="${resolveRouterPath('home')}" variant="primary">Back to Home</sl-button>
        </div>
      </main>
    `;
  }
}
