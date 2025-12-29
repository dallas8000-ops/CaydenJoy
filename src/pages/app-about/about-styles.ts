import { css } from 'lit';

// these styles can be imported from any component
// for an example of how to use this, check /pages/about-about.ts
export const styles = css`
  main {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    padding: 20px;
  }

  main h2 {
    color: white;
    text-align: center;
    font-size: 32px;
    margin: 20px 0;
  }

  sl-card {
    background: white;
    border-radius: 16px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    margin: 20px auto;
  }

  sl-card h2 {
    color: #667eea;
    font-size: 24px;
    margin-top: 0;
  }

  sl-card h3 {
    color: #764ba2;
    font-size: 18px;
    margin-top: 20px;
  }

  sl-card p {
    color: #333;
    line-height: 1.6;
    font-size: 16px;
  }

  sl-card ul {
    color: #333;
    line-height: 1.8;
  }

  sl-card ul li {
    margin: 10px 0;
  }

  sl-card a {
    color: #667eea;
    text-decoration: none;
    font-weight: bold;
  }

  sl-card a:hover {
    text-decoration: underline;
  }

  @media(min-width: 1000px) {
    sl-card {
      max-width: 70vw;
    }
  }
`;