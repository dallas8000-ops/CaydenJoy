import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

// You can also import styles from another file
// if you prefer to keep your CSS seperate from your component
import { styles } from './about-styles';

import { styles as sharedStyles } from '../../styles/shared-styles'

import '@shoelace-style/shoelace/dist/components/card/card.js';
import '../../components/header';
import '../../components/footer';

@customElement('app-about')
export class AppAbout extends LitElement {
  static styles = [
    sharedStyles,
    styles
  ]

  render() {
    return html`
      <app-header ?enableBack="${true}"></app-header>

      <main>
        <h2>About CaydenJoy</h2>

        <sl-card>
          <h2>👋 Why I Created CaydenJoy</h2>

          <p>
            CaydenJoy was created with love for my nonverbal grandson. Communication is a fundamental human right, 
            and I wanted to give him a simple, intuitive tool to express himself.
          </p>

          <p>
            <strong>The Problem:</strong> Expensive AAC (Augmentative and Alternative Communication) programs can cost 
            $99-$300+ and are often complicated and difficult to navigate. My grandson struggled with the complexity—
            navigating menus, remembering button locations, and understanding how to express what he needed.
          </p>

          <p>
            <strong>The Solution:</strong> CaydenJoy is designed with simplicity and accessibility at its core. 
            Large buttons, bright colors, clear organization, and voice feedback make communication easy and fun. 
            Every feature is built with the user in mind—not complexity.
          </p>

          <h3>🎯 Our Features</h3>
          <ul style="text-align: left; padding-left: 20px;">
            <li><strong>Communication Board:</strong> 12 common phrases for immediate, everyday communication</li>
            <li><strong>Interactive Categories:</strong> Foods, Colors, Numbers, Places, Family members, and more</li>
            <li><strong>Puzzle Games:</strong> Family puzzle game for engagement and learning</li>
            <li><strong>Voice Feedback:</strong> Every button speaks—instant audio confirmation</li>
            <li><strong>Custom Images:</strong> Upload your own family photos (premium feature)</li>
            <li><strong>Offline Support:</strong> Works without internet connection</li>
            <li><strong>Emergency Button:</strong> Quick access to get help when needed</li>
          </ul>

          <h3>💰 Affordable & Fair Pricing</h3>
          <p>
            <strong>Base App:</strong> $19.99 (one-time purchase)<br>
            <strong>Premium Upgrade:</strong> $5.99 (one-time purchase)<br>
            <strong>Total with Premium:</strong> $25.98
          </p>

          <p style="background: #f0f7ff; border-left: 4px solid #667eea; padding: 12px; border-radius: 4px; margin: 15px 0;">
            <em>That's less than most coffee subscriptions—and it could change a life.</em>
          </p>

          <h4>Why This Pricing?</h4>
          <ul style="text-align: left; padding-left: 20px;">
            <li><strong>No Subscriptions:</strong> Unlike apps charging $5-15/month ($60-180/year), this is one-time</li>
            <li><strong>Cheaper Than Alternatives:</strong> Professional AAC apps cost $99-$300+</li>
            <li><strong>Supports Development:</strong> Your payment directly funds updates and improvements</li>
            <li><strong>Forever Yours:</strong> Once purchased, premium features are yours permanently</li>
          </ul>

          <h4>What's Included in Premium?</h4>
          <ul style="text-align: left; padding-left: 20px;">
            <li>Unlimited custom image uploads</li>
            <li>Organize family photos by category</li>
            <li>Voice customization (speed, pitch, language)</li>
            <li>Cloud backup of your data (optional)</li>
            <li>Priority customer support</li>
            <li>All future premium feature updates</li>
            <li><strong>No ads • No tracking</strong></li>
          </ul>

          <h3>💬 Get in Touch</h3>
          <p>
            Questions about pricing? Interested in bulk licensing or family plans?<br>
            <strong>Email: <a href="mailto:dallas8000@gmail.com" style="color: #667eea; text-decoration: none;">dallas8000@gmail.com</a></strong>
          </p>

          <p style="font-style: italic; color: #999; margin-top: 20px;">
            "Communication is connection. Connection is love." 💜
          </p>
        </sl-card>
      </main>
    `;
  }
}
