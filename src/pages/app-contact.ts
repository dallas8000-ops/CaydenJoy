import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { resolveRouterPath } from '../router';

import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/input/input.js';
import '@shoelace-style/shoelace/dist/components/textarea/textarea.js';

import { styles } from '../styles/shared-styles';

@customElement('app-contact')
export class AppContact extends LitElement {
  @property() name = '';
  @property() email = '';
  @property() message = '';
  @property() submitted = false;

  static styles = [
    styles,
    css`
      main {
        padding: 20px;
        max-width: 600px;
        margin: 0 auto;
      }

      sl-card {
        margin-bottom: 24px;
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
        font-weight: 600;
        color: #6C5CE7;
      }

      .success-message {
        background-color: #00B894;
        color: white;
        padding: 16px;
        border-radius: 4px;
        margin-bottom: 16px;
      }

      .contact-info {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 16px;
        margin-top: 24px;
      }

      .info-box {
        background: linear-gradient(135deg, #6C5CE7 0%, #5F3DC4 100%);
        color: white;
        padding: 16px;
        border-radius: 8px;
        text-align: center;
      }

      .info-box h3 {
        margin: 0 0 8px 0;
        color: white;
      }

      .info-box p {
        margin: 0;
        opacity: 0.9;
      }

      button {
        width: 100%;
      }
    `
  ];

  handleSubmit(e: Event) {
    e.preventDefault();
    
    // Validate form
    if (!this.name || !this.email || !this.message) {
      alert('Please fill in all fields');
      return;
    }

    // Here you would normally send data to a backend
    console.log('Form submitted:', {
      name: this.name,
      email: this.email,
      message: this.message,
      timestamp: new Date().toISOString()
    });

    // Store in localStorage as backup
    localStorage.setItem('lastContact', JSON.stringify({
      name: this.name,
      email: this.email,
      message: this.message,
      timestamp: new Date().toISOString()
    }));

    this.submitted = true;
    this.resetForm();

    // Hide success message after 3 seconds
    setTimeout(() => {
      this.submitted = false;
    }, 3000);
  }

  resetForm() {
    this.name = '';
    this.email = '';
    this.message = '';
  }

  render() {
    return html`
      <app-header></app-header>

      <main>
        <h1>Contact Us</h1>
        <p>Have questions or feedback? We'd love to hear from you!</p>

        ${this.submitted ? html`
          <div class="success-message">
            ✓ Thank you! Your message has been received. We'll get back to you soon.
          </div>
        ` : ''}

        <sl-card>
          <div slot="header">
            <h2>Send us a Message</h2>
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
                placeholder="Your message here..."
                rows="6"
                .value=${this.message}
                @sl-input=${(e: any) => this.message = e.target.value}
                required
              ></sl-textarea>
            </div>

            <sl-button type="submit" variant="primary">Send Message</sl-button>
            <sl-button type="reset" variant="default" @click=${() => this.resetForm()}>Clear</sl-button>
          </form>
        </sl-card>

        <div class="contact-info">
          <div class="info-box">
            <h3>📧 Email</h3>
            <p>support@caydenjo.dev</p>
          </div>
          <div class="info-box">
            <h3>💬 Discord</h3>
            <p>Join our community</p>
          </div>
          <div class="info-box">
            <h3>🐦 Twitter</h3>
            <p>@CaydenJoyApp</p>
          </div>
        </div>

        <div style="text-align: center; margin-top: 48px;">
          <sl-button href="${resolveRouterPath()}" variant="primary">Back to Home</sl-button>
        </div>
      </main>
    `;
  }
}
