require('dotenv').config();

const cors = require('cors');
const express = require('express');
const Stripe = require('stripe');

const app = express();
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
const appUrl = process.env.APP_URL || 'http://localhost:5173';
const apkDownloadUrl = process.env.APK_DOWNLOAD_URL || '';
const port = Number(process.env.PORT || 4242);

if (!stripeSecretKey) {
  console.warn('[stripe] STRIPE_SECRET_KEY is not set. Checkout endpoints will fail until configured.');
}

const stripe = stripeSecretKey ? new Stripe(stripeSecretKey) : null;

const CODE_SALT = 'CAYDENJOY-APK-UPGRADE-2026';

const tiers = {
  family: {
    name: 'Family Photos',
    amount: 3999,
    prefix: 'CJF',
    envPrice: 'STRIPE_PRICE_FAMILY',
  },
  learning: {
    name: 'Learning Plus',
    amount: 9999,
    prefix: 'CJL',
    envPrice: 'STRIPE_PRICE_LEARNING',
  },
  allAccess: {
    name: 'All Access',
    amount: 14999,
    prefix: 'CJA',
    envPrice: 'STRIPE_PRICE_ALL_ACCESS',
  },
};

function hashCode(value) {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return (hash >>> 0).toString(36).toUpperCase().padStart(7, '0');
}

function checksumFor(prefix, serial) {
  return hashCode(`${CODE_SALT}:${prefix}:${serial}`).slice(0, 5);
}

function createUpgradeKey(tier, seed) {
  const config = tiers[tier];
  if (!config) {
    throw new Error(`Unknown tier: ${tier}`);
  }

  const first = hashCode(`${tier}:${seed}:first`).slice(0, 6);
  const second = hashCode(`${tier}:${seed}:second`).slice(0, 6);
  const serial = `${first}-${second}`;
  const checksum = checksumFor(config.prefix, serial);
  return `${config.prefix}-${serial}-${checksum}`;
}

function requireStripe(res) {
  if (!stripe) {
    res.status(500).json({ error: 'Stripe is not configured on the server.' });
    return false;
  }
  return true;
}

app.post('/api/stripe/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  if (!requireStripe(res)) return;

  let event;
  try {
    event = webhookSecret
      ? stripe.webhooks.constructEvent(req.body, req.headers['stripe-signature'], webhookSecret)
      : JSON.parse(req.body.toString());
  } catch (error) {
    console.error('[stripe] webhook verification failed:', error.message);
    res.status(400).send(`Webhook Error: ${error.message}`);
    return;
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const tier = session.metadata && session.metadata.tier;
    if (tier && tiers[tier]) {
      const upgradeKey = createUpgradeKey(tier, session.id);
      console.log('[stripe] paid checkout completed', {
        sessionId: session.id,
        tier,
        customerEmail: session.customer_details && session.customer_details.email,
        upgradeKey,
      });
    }
  }

  res.json({ received: true });
});

app.use(cors({
  origin: process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(',') : true,
}));
app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({ ok: true, service: 'caydenjoy-stripe' });
});

app.post('/api/create-checkout-session', async (req, res) => {
  if (!requireStripe(res)) return;

  const tier = String((req.body && req.body.tier) || '');
  const config = tiers[tier];
  if (!config) {
    res.status(400).json({ error: 'Unknown premium tier.' });
    return;
  }

  const priceId = process.env[config.envPrice];
  const lineItem = priceId
    ? { price: priceId, quantity: 1 }
    : {
        quantity: 1,
        price_data: {
          currency: 'usd',
          unit_amount: config.amount,
          product_data: {
            name: `CaydenJoy ${config.name}`,
            description: 'One-time CaydenJoy Android upgrade key',
          },
        },
      };

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [lineItem],
      allow_promotion_codes: true,
      billing_address_collection: 'auto',
      customer_creation: 'if_required',
      metadata: {
        app: 'CaydenJoy',
        tier,
      },
      success_url: `${appUrl}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${appUrl}/premium`,
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error('[stripe] checkout session failed:', error);
    res.status(500).json({ error: 'Unable to create Stripe checkout session.' });
  }
});

app.get('/api/checkout-session/:id', async (req, res) => {
  if (!requireStripe(res)) return;

  try {
    const session = await stripe.checkout.sessions.retrieve(req.params.id);
    const tier = session.metadata && session.metadata.tier;

    if (session.payment_status !== 'paid') {
      res.status(402).json({ error: 'Payment is not complete yet.' });
      return;
    }

    if (!tier || !tiers[tier]) {
      res.status(400).json({ error: 'Checkout session is missing a valid tier.' });
      return;
    }

    res.json({
      paid: true,
      tier,
      tierName: tiers[tier].name,
      customerEmail: session.customer_details && session.customer_details.email,
      upgradeKey: createUpgradeKey(tier, session.id),
      apkDownloadUrl,
    });
  } catch (error) {
    console.error('[stripe] checkout lookup failed:', error);
    res.status(500).json({ error: 'Unable to verify checkout session.' });
  }
});

app.listen(port, () => {
  console.log(`CaydenJoy Stripe server listening on port ${port}`);
});
