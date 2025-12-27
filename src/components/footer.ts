import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { resolveRouterPath } from '../router';

@customElement('app-footer')
export class AppFooter extends LitElement {
  static styles = css`
    footer {
      background-color: #2C3E50;
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
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 32px;
      margin-bottom: 32px;
    }

    .footer-section h3 {
      color: #6C5CE7;
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
      margin-bottom: 8px;
    }

    .footer-section a {
      color: #FFFFFF;
      text-decoration: none;
      opacity: 0.8;
      transition: opacity 0.3s;
    }

    .footer-section a:hover {
      opacity: 1;
    }

    .footer-bottom {
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      padding-top: 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 16px;
    }

    .social-links {
      display: flex;
      gap: 16px;
    }

    .social-links a {
      display: inline-block;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background-color: rgba(108, 92, 231, 0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color 0.3s;
    }

    .social-links a:hover {
      background-color: #6C5CE7;
    }

    .copyright {
      opacity: 0.7;
      font-size: 14px;
    }

    @media (max-width: 640px) {
      .footer-bottom {
        flex-direction: column;
        text-align: center;
      }

      .social-links {
        justify-content: center;
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
                <li><a href="${resolveRouterPath()}">Home</a></li>
                <li><a href="${resolveRouterPath('services')}">Services</a></li>
                <li><a href="${resolveRouterPath('about')}">About</a></li>
              </ul>
            </div>

            <div class="footer-section">
              <h3>Support</h3>
              <ul>
                <li><a href="${resolveRouterPath('faq')}">FAQ</a></li>
                <li><a href="${resolveRouterPath('contact')}">Contact</a></li>
                <li><a href="#">Documentation</a></li>
              </ul>
            </div>

            <div class="footer-section">
              <h3>Company</h3>
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">License</a></li>
              </ul>
            </div>

            <div class="footer-section">
              <h3>Resources</h3>
              <ul>
                <li><a href="https://github.com/dallas8000-ops/CaydenJoy" target="_blank">GitHub</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Community</a></li>
              </ul>
            </div>
          </div>

          <div class="footer-bottom">
            <div class="copyright">
              © ${new Date().getFullYear()} CaydenJoy. All rights reserved.
            </div>
            <div class="social-links">
              <a href="https://twitter.com" target="_blank" title="Twitter">𝕏</a>
              <a href="https://github.com" target="_blank" title="GitHub">⚙</a>
              <a href="https://discord.com" target="_blank" title="Discord">💬</a>
            </div>
          </div>
        </div>
      </footer>
    `;
  }
}
