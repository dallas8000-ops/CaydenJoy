import { css } from 'lit';

export const styles = css`
  main {
    background: #f4f7fb;
    min-height: 100vh;
    padding: 24px;
  }

  main > h2 {
    color: #172033;
    text-align: center;
    font-size: 32px;
    margin: 20px 0;
  }

  sl-card {
    margin: 20px auto;
  }

  sl-card::part(base) {
    background: #ffffff;
    border: 1px solid #d9e2ef;
    border-radius: 12px;
    box-shadow: 0 12px 30px rgba(31, 41, 55, 0.12);
    color: #172033;
  }

  sl-card::part(body) {
    color: #172033;
  }

  sl-card h2 {
    color: #243b6b;
    font-size: 24px;
    margin-top: 0;
  }

  sl-card h3,
  sl-card h4 {
    color: #334f85;
  }

  sl-card p,
  sl-card li {
    color: #263241;
    line-height: 1.65;
    font-size: 16px;
  }

  sl-card ul {
    padding-left: 22px;
  }

  sl-card li {
    margin: 10px 0;
  }

  sl-card a {
    color: #284fbd;
    font-weight: 700;
    text-decoration: none;
  }

  sl-card a:hover,
  sl-card a:focus-visible {
    text-decoration: underline;
  }

  .note {
    background: #eef5ff;
    border-left: 4px solid #4263eb;
    color: #172033;
    padding: 12px;
    border-radius: 4px;
    margin: 15px 0;
  }

  .closing {
    color: #526070;
    font-style: italic;
    margin-top: 20px;
  }

  @media (min-width: 1000px) {
    sl-card {
      max-width: 70vw;
    }
  }
`;
