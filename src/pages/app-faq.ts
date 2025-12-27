import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { resolveRouterPath } from '../router';

import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/details/details.js';

import { styles } from '../styles/shared-styles';

interface FAQItem {
  question: string;
  answer: string;
}

@customElement('app-faq')
export class AppFAQ extends LitElement {
  static styles = [
    styles,
    css`
      main {
        padding: 20px;
        max-width: 700px;
        margin: 0 auto;
      }

      sl-card {
        margin-bottom: 24px;
      }

      sl-details {
        margin-bottom: 8px;
      }

      sl-details::part(header) {
        background-color: #f0f0f0;
        padding: 12px;
        cursor: pointer;
      }

      sl-details::part(summary) {
        font-weight: 600;
        color: #6C5CE7;
      }

      sl-details::part(body) {
        padding: 16px;
        border-top: 1px solid #e0e0e0;
      }

      .category {
        margin-top: 24px;
      }

      .category h2 {
        color: #6C5CE7;
        border-bottom: 2px solid #6C5CE7;
        padding-bottom: 8px;
      }

      .search-box {
        margin-bottom: 24px;
      }

      .contact-cta {
        background: linear-gradient(135deg, #6C5CE7 0%, #5F3DC4 100%);
        color: white;
        padding: 24px;
        border-radius: 8px;
        text-align: center;
        margin-top: 32px;
      }

      .contact-cta h3 {
        color: white;
        margin-top: 0;
      }

      .contact-cta sl-button::part(base) {
        background-color: white;
        color: #6C5CE7;
      }
    `
  ];

  faqData: FAQItem[] = [
    {
      question: 'What is a Progressive Web App (PWA)?',
      answer: 'A Progressive Web App is a web application that uses web technologies to provide a native app-like experience. PWAs can be installed on your device, work offline, and send push notifications.'
    },
    {
      question: 'Can I use CaydenJoy offline?',
      answer: 'Yes! CaydenJoy is built as a PWA with offline support. Once you\'ve loaded the app, it will work without an internet connection and sync data when you\'re back online.'
    },
    {
      question: 'How do I install CaydenJoy on my device?',
      answer: 'On most browsers and devices, you can install CaydenJoy by clicking the "Install" button that appears in the address bar, or through the browser menu. On some devices, you can add it to your home screen.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes, your data is encrypted and stored securely. We use HTTPS to protect data in transit and implement industry-standard security practices.'
    },
    {
      question: 'How do I enable notifications?',
      answer: 'You can enable notifications in the Settings page. When you enable them, your browser may ask for permission to send notifications.'
    },
    {
      question: 'What devices are supported?',
      answer: 'CaydenJoy works on any device with a modern web browser, including smartphones, tablets, and computers. It supports iOS, Android, Windows, and macOS.'
    },
    {
      question: 'How do I update CaydenJoy?',
      answer: 'CaydenJoy updates automatically in the background. You\'ll always have the latest version without needing to manually update.'
    },
    {
      question: 'Can I use CaydenJoy on multiple devices?',
      answer: 'Yes! You can install and use CaydenJoy on as many devices as you want. Each installation can be customized with your preferences.'
    },
    {
      question: 'How do I backup my data?',
      answer: 'Your data is automatically backed up in your browser\'s local storage. You can export your data from the Settings page.'
    },
    {
      question: 'Is CaydenJoy free?',
      answer: 'Yes, CaydenJoy is completely free to use. There are no hidden costs or premium features.'
    }
  ];

  render() {
    return html`
      <app-header></app-header>

      <main>
        <h1>Frequently Asked Questions</h1>
        <p>Find answers to common questions about CaydenJoy</p>

        <sl-card class="search-box">
          <div slot="header">Quick Help</div>
          <p>Can't find what you're looking for? <a href="${resolveRouterPath('contact')}">Contact us</a> for personalized support.</p>
        </sl-card>

        <div class="category">
          <h2>General</h2>
          ${this.faqData.slice(0, 4).map(item => this.renderFAQItem(item))}
        </div>

        <div class="category">
          <h2>Installation & Access</h2>
          ${this.faqData.slice(4, 8).map(item => this.renderFAQItem(item))}
        </div>

        <div class="category">
          <h2>Data & Privacy</h2>
          ${this.faqData.slice(8, 10).map(item => this.renderFAQItem(item))}
        </div>

        <div class="contact-cta">
          <h3>Still have questions?</h3>
          <p>Our support team is here to help!</p>
          <sl-button href="${resolveRouterPath('contact')}" variant="primary">
            Contact Support
          </sl-button>
        </div>

        <div style="text-align: center; margin-top: 48px;">
          <sl-button href="${resolveRouterPath()}" variant="primary">Back to Home</sl-button>
        </div>
      </main>
    `;
  }

  private renderFAQItem(item: FAQItem) {
    return html`
      <sl-details>
        <span slot="summary">${item.question}</span>
        <p>${item.answer}</p>
      </sl-details>
    `;
  }
}
