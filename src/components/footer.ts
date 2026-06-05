import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { resolveRouterPath } from '../router';

@customElement('app-footer')
export class AppFooter extends LitElement {
  static override readonly styles = css`
    footer {
      background-color: #26384a;
      color: white;
      padding: 40px 20px;
      margin-top: 60px;
    }

    .footer-container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .footer-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 32px;
      margin-bottom: 32px;
    }

    .footer-section h3 {
      color: #8f84ff;
      margin-top: 0;
      margin-bottom: 16px;
      font-size: 16px;
    }

    .footer-section ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .footer-section li {
      margin-bottom: 10px;
    }

    .footer-section a {
      color: #ffffff;
      text-decoration: none;
      opacity: 0.84;
      transition: opacity 0.2s, color 0.2s;
    }

    .footer-section a:hover,
    .footer-section a:focus-visible {
      color: #ffffff;
      opacity: 1;
      text-decoration: underline;
      text-underline-offset: 4px;
    }

    .footer-bottom {
      border-top: 1px solid rgba(255, 255, 255, 0.12);
      padding-top: 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 16px;
    }

    .quick-links {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
    }

    .quick-links a {
      min-width: 88px;
      height: 36px;
      border-radius: 6px;
      background-color: rgba(143, 132, 255, 0.18);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 12px;
      color: white;
      font-size: 13px;
      font-weight: 700;
      text-decoration: none;
      transition: background-color 0.2s;
    }

    .quick-links a:hover,
    .quick-links a:focus-visible {
      background-color: #6c5ce7;
    }

    .copyright {
      opacity: 0.76;
      font-size: 14px;
    }

    @media (max-width: 640px) {
      footer {
        padding: 28px 16px;
        margin-top: 40px;
      }

      .footer-grid {
        gap: 24px;
      }

      .footer-bottom {
        flex-direction: column;
        align-items: flex-start;
      }

      .quick-links {
        width: 100%;
      }

      .quick-links a {
        flex: 1;
      }
    }

    @media (max-width: 900px) {
      .footer-grid {
        grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
      }
    }
  `;

  render() {
    return html`
      <footer>
        <div class="footer-container">
          <div class="footer-grid">
            <div class="footer-section">
              <h3>Product</h3>
              <ul>
                <li><a href="${resolveRouterPath('home')}">Home Dashboard</a></li>
                <li><a href="${resolveRouterPath()}">Communication Board</a></li>
                <li><a href="${resolveRouterPath('family-puzzle')}">Activity Sessions</a></li>
                <li><a href="${resolveRouterPath('premium')}">Premium Tiers</a></li>
              </ul>
            </div>

            <div class="footer-section">
              <h3>Support</h3>
              <ul>
                <li><a href="${resolveRouterPath('faq')}">FAQ</a></li>
                <li><a href="${resolveRouterPath('contact')}">Contact Support</a></li>
                <li><a href="${resolveRouterPath('feedback')}">Feedback & Wishlist</a></li>
                <li><a href="${resolveRouterPath('documentation')}">Documentation</a></li>
              </ul>
            </div>

            <div class="footer-section">
              <h3>Company</h3>
              <ul>
                <li><a href="${resolveRouterPath('about')}">About CaydenJoy</a></li>
                <li><a href="${resolveRouterPath('privacy')}">Privacy Policy</a></li>
                <li><a href="${resolveRouterPath('terms')}">Terms of Service</a></li>
                <li><a href="${resolveRouterPath('license')}">License</a></li>
              </ul>
            </div>

            <div class="footer-section">
              <h3>Resources</h3>
              <ul>
                <li><a href="${resolveRouterPath('download')}">Download Android APK</a></li>
                <li><a href="${resolveRouterPath('custom-images')}">Custom Photos</a></li>
                <li><a href="${resolveRouterPath('progress')}">Progress Dashboard</a></li>
                <li><a href="${resolveRouterPath('upgrade')}">APK Upgrade Keys</a></li>
              </ul>
            </div>
          </div>

          <div class="footer-bottom">
            <div class="copyright">
              (c) ${new Date().getFullYear()} CaydenJoy. All rights reserved.
            </div>
            <div class="quick-links">
              <a href="${resolveRouterPath('feedback')}">Feedback</a>
              <a href="${resolveRouterPath('contact')}">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    `;
  }
}
