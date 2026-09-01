require('dotenv').config();

const cors = require('cors');
const express = require('express');
const Stripe = require('stripe');

const app = express();
// Render sits in front of this app as a reverse proxy. Without trust proxy,
// req.ip resolves to Render's proxy address for every request, which would
// make the per-IP throttle below a single shared bucket for all users
// instead of one per actual client.
app.set('trust proxy', true);
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

// Legacy codes remain supported as All Access. This list — and the checksum
// algorithm below — must live ONLY on the server. Never restore either to a
// client-bundled file; that previously let anyone read the shipped JS and
// mint unlimited valid codes offline.
const LEGACY_UPGRADE_CODES = [
  'CyberCop3158',
  'CAYDENJOY-PREMIUM-2024',
  'CAYDENJOY-UNLOCK-ALL',
  'PREMIUM-UNLOCK-2025',
  'TEST-CODE-001',
  'EVAL-VERSION-2026',
  'DEMO-FULL-ACCESS',
  'TRIAL-UNLIMITED',
  'SPECIAL-OFFER-50',
].map((code) => code.toUpperCase());

const TIER_PREFIXES = {
  CJF: 'family',
  CJL: 'learning',
  CJA: 'allAccess',
};

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

function normalizeCode(code) {
  return String(code || '').trim().toUpperCase().replace(/\s+/g, '').replace(/_/g, '-');
}

function validateUpgradeCode(rawCode) {
  const normalizedCode = normalizeCode(rawCode);

  if (!normalizedCode) {
    return { valid: false, reason: 'Please enter an upgrade code' };
  }

  if (LEGACY_UPGRADE_CODES.includes(normalizedCode)) {
    return { valid: true, tier: 'allAccess', normalizedCode };
  }

  const parts = normalizedCode.split('-');
  if (parts.length !== 4) {
    return { valid: false, reason: 'Code format should look like CJA-XXXX-XXXX-XXXXX' };
  }

  const [prefix, first, second, checksum] = parts;
  const tier = TIER_PREFIXES[prefix];
  if (!tier) {
    return { valid: false, reason: 'Unknown upgrade tier prefix' };
  }

  const serial = `${first}-${second}`;
  const expectedChecksum = checksumFor(prefix, serial);
  if (checksum !== expectedChecksum) {
    return { valid: false, reason: 'Upgrade key checksum does not match' };
  }

  return { valid: true, tier, normalizedCode };
}

// Minimal in-memory per-IP throttle for the code-verification endpoint. The
// checksum keyspace (5 base36 chars) is brute-forceable if guesses are free;
// this doesn't need to be sophisticated, it just needs guessing to cost more
// than one HTTP round trip per attempt. Resets on process restart, which is
// acceptable for this threat model (a single Render instance, low traffic).
const VERIFY_RATE_LIMIT = { windowMs: 60 * 60 * 1000, maxAttempts: 20 };
const verifyAttempts = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const entry = verifyAttempts.get(ip);
  if (!entry || now - entry.windowStart > VERIFY_RATE_LIMIT.windowMs) {
    verifyAttempts.set(ip, { windowStart: now, count: 1 });
    return false;
  }
  entry.count += 1;
  return entry.count > VERIFY_RATE_LIMIT.maxAttempts;
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

app.post('/api/verify-code', (req, res) => {
  const ip = req.ip || req.headers['x-forwarded-for'] || 'unknown';
  if (isRateLimited(ip)) {
    res.status(429).json({ valid: false, reason: 'Too many attempts. Try again later.' });
    return;
  }

  const result = validateUpgradeCode(req.body && req.body.code);
  res.json(result);
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
