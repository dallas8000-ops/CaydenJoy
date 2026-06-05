# CaydenJoy Stripe Setup

This project now includes a small Stripe backend for paid premium tiers and APK delivery.

## What It Does

- Creates Stripe Checkout Sessions for Family Photos, Learning Plus, and All Access.
- Redirects buyers to `/payment-success?session_id=...` after payment.
- Verifies the Checkout Session with Stripe.
- Generates a CaydenJoy upgrade key that the Android app accepts.
- Shows the APK download link when `APK_DOWNLOAD_URL` is configured.

## Local Test

Create a `.env` file:

```text
STRIPE_SECRET_KEY=sk_test_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx
APP_URL=http://localhost:5173
CORS_ORIGIN=http://localhost:5173
APK_DOWNLOAD_URL=https://your-private-download-url.example/caydenjoy.apk
```

Optional Stripe Price IDs:

```text
STRIPE_PRICE_FAMILY=price_xxx
STRIPE_PRICE_LEARNING=price_xxx
STRIPE_PRICE_ALL_ACCESS=price_xxx
```

If price IDs are not set, the server creates one-time Checkout line items using the app prices.

Run the frontend:

```powershell
npm run dev
```

Run the Stripe backend:

```powershell
npm run server
```

Set this frontend environment variable when deployed:

```text
VITE_STRIPE_API_BASE=https://your-render-service.onrender.com
```

## Render Setup

The repository includes a Render Blueprint:

```text
render.yaml
```

In Render:

1. Open Dashboard.
2. Click **New**.
3. Choose **Blueprint**.
4. Connect the CaydenJoy GitHub repository.
5. Select the `render.yaml` file.
6. Fill in the secret values Render asks for.
7. Apply the Blueprint.

The Blueprint creates:

- `caydenjoy-app` static site
- `caydenjoy-stripe` Node web service

The static site uses:

```text
npm ci && npm run build
```

The Stripe service uses:

```text
npm run server
```

Environment variables Render will ask for:

```text
STRIPE_SECRET_KEY
STRIPE_WEBHOOK_SECRET
APK_DOWNLOAD_URL
STRIPE_PRICE_FAMILY
STRIPE_PRICE_LEARNING
STRIPE_PRICE_ALL_ACCESS
```

The Blueprint sets these defaults:

```text
APP_URL=https://caydenjoy-app.onrender.com
CORS_ORIGIN=https://caydenjoy-app.onrender.com
VITE_STRIPE_API_BASE=https://caydenjoy-stripe.onrender.com
```

If Render gives either service a different URL, update those three values in the Render Dashboard.

The `caydenjoy-stripe` service is set to the `starter` plan because payment checkout and webhooks should not rely on a sleeping free web service. The static app can stay on the free static-site plan.

## Stripe Webhook

In Stripe Dashboard:

1. Go to Developers -> Webhooks.
2. Add endpoint:

```text
https://your-render-service.onrender.com/api/stripe/webhook
```

3. Listen for:

```text
checkout.session.completed
```

4. Copy the webhook signing secret into:

```text
STRIPE_WEBHOOK_SECRET
```

## Buyer Flow

1. Buyer selects a Premium tier.
2. App opens Stripe Checkout.
3. Buyer pays.
4. Stripe redirects to `/payment-success`.
5. CaydenJoy verifies payment with the backend.
6. Buyer receives:
   - tier purchased
   - upgrade key
   - APK download button, when configured

## Important

Do not put secret keys in frontend files.

Only use `pk_...` keys in the browser. This setup does not require a publishable key because the browser redirects to a Checkout URL created by the backend.
