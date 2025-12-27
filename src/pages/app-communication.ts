import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';

interface Request {
  id: number;
  text: string;
  icon: string;
  color: string;
}

@customElement('app-communication')
export class AppCommunication extends LitElement {
  @state() activeRequest: Request | null = null;

  static styles = css`
    :host {
      display: block;
      padding: 2rem;
    }

    .container {
      max-width: 1400px;
      margin: 0 auto;
    }

    .header {
      text-align: center;
      margin-bottom: 2rem;
    }

    h1 {
      font-size: 3rem;
      font-weight: bold;
      color: #6C5CE7;
      margin-bottom: 1rem;
    }

    .subtitle {
      font-size: 1.5rem;
      color: #666;
    }

    .active-request {
      background: linear-gradient(135deg, #6C5CE7 0%, #5F3DC4 100%);
      color: white;
      padding: 2rem;
      border-radius: 1.5rem;
      margin-bottom: 2rem;
      box-shadow: 0 10px 30px rgba(108, 92, 231, 0.3);
      display: flex;
      align-items: center;
      gap: 1.5rem;
      position: relative;
    }

    .active-request-icon {
      font-size: 4rem;
    }

    .active-request-text {
      font-size: 2rem;
      font-weight: bold;
      flex: 1;
    }

    .close-btn {
      background: rgba(255, 255, 255, 0.2);
      border: none;
      color: white;
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      transition: all 0.2s;
    }

    .close-btn:hover {
      background: rgba(255, 255, 255, 0.3);
      transform: scale(1.1);
    }

    .requests-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.5rem;
      margin-bottom: 2rem;
    }

    .request-card {
      padding: 2rem;
      border-radius: 1.5rem;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      border: 4px solid white;
      cursor: pointer;
      transition: all 0.2s;
      text-align: center;
      min-height: 200px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
    }

    .request-card:hover {
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
      transform: scale(1.05);
    }

    .request-icon {
      font-size: 4rem;
      margin-bottom: 0.5rem;
    }

    .request-text {
      font-size: 1.25rem;
      font-weight: 600;
      color: #333;
    }

    .bg-green-400 { background-color: #4ade80; }
    .bg-blue-400 { background-color: #60a5fa; }
    .bg-purple-400 { background-color: #c084fc; }
    .bg-yellow-400 { background-color: #facc15; }
    .bg-red-400 { background-color: #f87171; }
    .bg-pink-400 { background-color: #f472b6; }
    .bg-indigo-400 { background-color: #818cf8; }
    .bg-orange-400 { background-color: #fb923c; }
    .bg-cyan-400 { background-color: #22d3ee; }
    .bg-rose-400 { background-color: #fb7185; }
    .bg-lime-400 { background-color: #a3e635; }
    .bg-teal-400 { background-color: #2dd4bf; }

    .footer-text {
      text-align: center;
      color: #999;
      font-size: 1.125rem;
      margin-top: 2rem;
    }

    @media (max-width: 640px) {
      h1 {
        font-size: 2rem;
      }

      .subtitle {
        font-size: 1.25rem;
      }

      .requests-grid {
        grid-template-columns: 1fr;
      }

      .request-card {
        min-height: 150px;
      }

      .request-icon {
        font-size: 3rem;
      }

      .request-text {
        font-size: 1.125rem;
      }
    }
  `;

  private requests: Request[] = [
    { id: 1, text: "I'm hungry", icon: "🍎", color: "bg-green-400" },
    { id: 2, text: "I'm thirsty", icon: "💧", color: "bg-blue-400" },
    { id: 3, text: "I need bathroom", icon: "🚽", color: "bg-purple-400" },
    { id: 4, text: "I need a break", icon: "⏸️", color: "bg-yellow-400" },
    { id: 5, text: "Help please", icon: "🆘", color: "bg-red-400" },
    { id: 6, text: "I want to play", icon: "🎮", color: "bg-pink-400" },
    { id: 7, text: "I'm tired", icon: "😴", color: "bg-indigo-400" },
    { id: 8, text: "Too loud", icon: "🔊", color: "bg-orange-400" },
    { id: 9, text: "I want my spatulas", icon: "🥄", color: "bg-cyan-400" },
    { id: 10, text: "I want my toy", icon: "🧸", color: "bg-rose-400" },
    { id: 11, text: "I want to jump", icon: "🤸", color: "bg-lime-400" },
    { id: 12, text: "I want my swing chair", icon: "🪑", color: "bg-teal-400" }
  ];

  private handleRequest(request: Request) {
    this.activeRequest = request;

    // Play audio with older child voice settings
    const utterance = new SpeechSynthesisUtterance(request.text);
    utterance.rate = 1.0;
    utterance.pitch = 1.3;
    utterance.volume = 1;

    // Try to select a natural-sounding voice
    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find(voice => 
      voice.lang.startsWith('en') && 
      (voice.name.includes('Google') || 
       voice.name.includes('Samantha') || 
       voice.name.includes('Natural') || 
       voice.name.includes('Premium'))
    );

    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }

    window.speechSynthesis.speak(utterance);
  }

  private clearRequest() {
    this.activeRequest = null;
    window.speechSynthesis.cancel();
  }

  render() {
    return html`
      <div class="container">
        <div class="header">
          <h1>CaydenJoy Communication</h1>
          <p class="subtitle">What do you need?</p>
        </div>

        ${this.activeRequest ? html`
          <div class="active-request">
            <div class="active-request-icon">${this.activeRequest.icon}</div>
            <div class="active-request-text">${this.activeRequest.text}</div>
            <button class="close-btn" @click=${this.clearRequest}>×</button>
          </div>
        ` : ''}

        <div class="requests-grid">
          ${this.requests.map(request => html`
            <div 
              class="request-card ${request.color}"
              @click=${() => this.handleRequest(request)}
            >
              <div class="request-icon">${request.icon}</div>
              <div class="request-text">${request.text}</div>
            </div>
          `)}
        </div>

        <p class="footer-text">Tap any button to make a request</p>
      </div>
    `;
  }
}
