import{a as u,x as s,c as n,i as h,r as d,t as m}from"./app-home-BBp0ydmG.js";var f=Object.defineProperty,g=Object.getOwnPropertyDescriptor,l=(o,e,t,i)=>{for(var r=i>1?void 0:i?g(e,t):e,p=o.length-1,c;p>=0;p--)(c=o[p])&&(r=(i?c(e,t,r):c(r))||r);return i&&r&&f(e,t,r),r};let a=class extends u{constructor(){super(...arguments),this.loading=!0,this.error="",this.stripeApiBase="".replace(/\/$/,"")}connectedCallback(){super.connectedCallback(),this.loadPayment()}async loadPayment(){const o=new URLSearchParams(window.location.search).get("session_id");if(!o){this.error="Missing Stripe checkout session.",this.loading=!1;return}if(!this.stripeApiBase){this.error="Payment verification is not configured. Set VITE_STRIPE_API_BASE.",this.loading=!1;return}try{const e=await fetch(`${this.stripeApiBase}/api/checkout-session/${encodeURIComponent(o)}`),t=await e.json();if(!e.ok)throw new Error(t.error||"Unable to verify payment.");this.result=t}catch(e){this.error=e instanceof Error?e.message:"Unable to verify payment."}finally{this.loading=!1}}render(){return s`
      <div class="container">
        <h1>Payment Complete</h1>
        <p class="subtitle">
          Use this page to copy the upgrade key and download the Android APK.
        </p>

        <sl-card>
          ${this.loading?s`
            <p class="status">Verifying payment with Stripe...</p>
          `:this.error?s`
            <p class="status"><strong>Payment verification problem:</strong> ${this.error}</p>
            <div class="actions">
              <sl-button href="${n("contact")}" variant="primary">Contact Support</sl-button>
              <sl-button href="${n("premium")}" variant="default">Back to Premium</sl-button>
            </div>
          `:this.result?s`
            <p class="status">
              <strong>${this.result.tierName}</strong> is paid and ready to unlock.
              ${this.result.customerEmail?s` Receipt email: ${this.result.customerEmail}.`:""}
            </p>

            <p class="status">Copy this upgrade key, then open CaydenJoy's Upgrade page and redeem it.</p>
            <div class="key-box">${this.result.upgradeKey}</div>

            <div class="actions">
              ${this.result.apkDownloadUrl?s`
                <sl-button href="${this.result.apkDownloadUrl}" target="_blank" rel="noopener noreferrer" variant="primary">
                  Download APK
                </sl-button>
              `:""}
              <sl-button href="${n("upgrade")}" variant="primary">Open Upgrade</sl-button>
              <sl-button href="${n("contact")}" variant="default">Support</sl-button>
            </div>
          `:""}
        </sl-card>
      </div>
    `}};a.styles=h`
    :host {
      display: block;
      min-height: 100vh;
      padding: 1.25rem;
      background: #f6f8fb;
      color: #172033;
    }

    .container {
      max-width: 820px;
      margin: 0 auto;
    }

    h1 {
      margin: 0 0 0.5rem;
      color: #172033;
      line-height: 1.15;
    }

    .subtitle {
      color: #526070;
      line-height: 1.6;
      margin-bottom: 1rem;
    }

    sl-card::part(base) {
      background: #ffffff;
      border: 1px solid #d9e2ef;
      border-radius: 10px;
      box-shadow: 0 8px 20px rgba(31, 41, 55, 0.08);
      color: #172033;
    }

    .key-box {
      padding: 1rem;
      border-radius: 0.5rem;
      background: #eef5ff;
      border: 2px solid #4263eb;
      color: #172033;
      font-size: 1.25rem;
      font-weight: 900;
      letter-spacing: 0.03em;
      word-break: break-word;
    }

    .actions {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
      margin-top: 1rem;
    }

    .status {
      color: #334155;
      line-height: 1.6;
    }
  `;l([d()],a.prototype,"loading",2);l([d()],a.prototype,"error",2);l([d()],a.prototype,"result",2);a=l([m("app-payment-success")],a);export{a as AppPaymentSuccess};
