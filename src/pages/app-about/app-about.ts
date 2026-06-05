import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import { styles } from './about-styles';
import { styles as sharedStyles } from '../../styles/shared-styles';

import '@shoelace-style/shoelace/dist/components/card/card.js';
import '../../components/header';
import '../../components/footer';

@customElement('app-about')
export class AppAbout extends LitElement {
  static styles = [
    sharedStyles,
    styles
  ];

  render() {
    return html`
      <app-header title="About" enableBack></app-header>

      <main>
        <h2>About CaydenJoy</h2>

        <sl-card>
          <h2>Why I Created CaydenJoy</h2>

          <p>
            CaydenJoy was created with love for my nonverbal grandson.
            Communication is a fundamental human right, and I wanted to give him
            a simple, intuitive tool to express himself.
          </p>

          <p>
            <strong>The Problem:</strong> Expensive AAC programs can cost
            $199-$300 or more, and many are complicated for families to set up
            and for children to navigate.
          </p>

          <p>
            <strong>The Solution:</strong> CaydenJoy focuses on daily-life
            communication, realistic images, caregiver uploads, activity
            sessions, and clear speech feedback.
          </p>

          <h3>Core Features</h3>
          <ul>
            <li><strong>Communication Board:</strong> Everyday needs, feelings, choices, and safety words.</li>
            <li><strong>Realistic Categories:</strong> Foods, colors, numbers, places, and daily objects using real images.</li>
            <li><strong>Activity Sessions:</strong> Choice, matching, routine sequencing, and real puzzle activities.</li>
            <li><strong>Voice Feedback:</strong> Buttons speak aloud for instant confirmation.</li>
            <li><strong>Custom Images:</strong> Caregivers can add familiar people, places, and objects.</li>
            <li><strong>Progress Dashboard:</strong> Local caregiver view of recent communication and activity use.</li>
            <li><strong>Feedback & Wishlist:</strong> Families can save improvement ideas and export them.</li>
            <li><strong>Offline-first Design:</strong> Built to keep key communication available on device.</li>
          </ul>

          <h3>Fair Pricing</h3>
          <p>
            <strong>Family Photos:</strong> $39.99 one-time<br>
            <strong>Learning Plus:</strong> $99.99 one-time<br>
            <strong>All Access:</strong> $149.99 one-time
          </p>

          <p class="note">
            CaydenJoy is priced below many major AAC apps while still supporting
            development, app delivery, payment fees, hosting fees, and future
            improvements.
          </p>

          <h4>Why This Pricing?</h4>
          <ul>
            <li><strong>No Subscriptions:</strong> Each tier is a one-time upgrade.</li>
            <li><strong>Below Major Alternatives:</strong> Many professional AAC apps cost far more.</li>
            <li><strong>Supports Development:</strong> Purchases help fund updates and support.</li>
            <li><strong>Caregiver Focused:</strong> Premium features are built around real family use.</li>
          </ul>

          <h4>What Premium Adds</h4>
          <ul>
            <li>Custom image uploads and organization.</li>
            <li>Backup export and import tools.</li>
            <li>Additional learning and activity tools.</li>
            <li>Voice and accessibility customization.</li>
            <li>All future premium feature updates for the selected tier.</li>
            <li><strong>No ads. No tracking.</strong></li>
          </ul>

          <h3>Get in Touch</h3>
          <p>
            Questions about pricing, family plans, or support?<br>
            <strong>Email: <a href="mailto:dallas8000@gmail.com">dallas8000@gmail.com</a></strong>
          </p>

          <p class="closing">
            "Communication is connection. Connection is love."
          </p>
        </sl-card>
      </main>

      <app-footer></app-footer>
    `;
  }
}
