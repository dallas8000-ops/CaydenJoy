import{s as l,i as p,r as u,a as f,b as c,x as m,t as g}from"./app-home-znz_cRBq.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();l("https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.16.0/cdn/");var h=Object.defineProperty,y=Object.getOwnPropertyDescriptor,d=(r,n,i,o)=>{for(var e=o>1?void 0:o?y(n,i):n,t=r.length-1,s;t>=0;t--)(s=r[t])&&(e=(o?s(n,i,e):s(e))||e);return o&&e&&h(n,i,e),e};let a=class extends f{constructor(){super(...arguments),this.emergencyMode=!1}firstUpdated(){c.addEventListener("route-changed",()=>{"startViewTransition"in document?document.startViewTransition(()=>this.requestUpdate()):this.requestUpdate()})}handleEmergency(){const r=new SpeechSynthesisUtterance("HELP! EMERGENCY!");r.rate=.8,r.pitch=1.5,r.volume=1,window.speechSynthesis.speak(r),this.emergencyMode=!0,setTimeout(()=>{this.emergencyMode=!1},3e3)}render(){return m`
      <app-header></app-header>
      <main>
        ${c.render()}
      </main>
      <app-footer></app-footer>
      
      <div class="emergency-bar">
        <div class="emergency-text">🆘 EMERGENCY - Need Help?</div>
        <button class="emergency-button" @click=${this.handleEmergency}>
          GET HELP
        </button>
      </div>
    `}};a.styles=p`
    :host {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }

    main {
      flex: 1;
      padding-left: 16px;
      padding-right: 16px;
      padding-bottom: 100px;
      padding-top: 80px;
    }

    .emergency-bar {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      height: 60px;
      background: linear-gradient(90deg, #E17055 0%, #D63031 100%);
      color: white;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 1rem;
      z-index: 999;
      box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.2);
    }

    .emergency-text {
      font-size: 1.125rem;
      font-weight: bold;
      flex: 1;
    }

    .emergency-button {
      background: white;
      color: #D63031;
      border: 2px solid white;
      padding: 0.75rem 1.5rem;
      border-radius: 0.5rem;
      font-size: 1rem;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.2s;
    }

    .emergency-button:hover {
      background: #FFE5E5;
      transform: scale(1.05);
    }

    .emergency-button:active {
      transform: scale(0.95);
    }
  `;d([u()],a.prototype,"emergencyMode",2);a=d([g("app-index")],a);
//# sourceMappingURL=index-CjzamJPc.js.map
