# CaydenJoy — AI/UX Update Roadmap

Written after a direct code audit of the repo (not the marketing docs). Current stack: Lit + TypeScript + Vite PWA, Capacitor/Bubblewrap for Android, Stripe-backed 3-tier paywall. No AI anywhere yet. No iOS target yet.

Status snapshot as of this doc: Google Play Console account exists (listing not finalized). No Mac / no Apple Developer Program membership — iOS is blocked on that, not on code. **Hosting is currently unresolved**: `render.yaml`, `firebase.json`, and `swa-cli.config.json` are all sitting in the repo, but Render is no longer used, and neither the static app nor `server/stripe-server.js` is confirmed live anywhere right now — the Stripe backend has only ever been run locally. See "Hosting decision" below before deploying Phase 0.

---

## Phase 0 — Paywall security fix (DONE this session)

**What was broken:** `license-manager.ts` shipped the checksum salt, the checksum algorithm, and every legacy redeemable code inside the client bundle — anyone could read the JS and mint unlimited valid keys offline. Worse, the `/admin` route was registered unconditionally and linked from the header nav (⚙️) on every page of the shipped app, displaying working codes with one-tap copy. No devtools skill required — just tap the gear icon.

**What changed:**
- `server/stripe-server.js` — added `POST /api/verify-code`. The checksum algorithm, salt, and legacy code list now live only here, with a per-IP rate limit (20/hr) and `trust proxy` set (correct for any reverse-proxy host — Render, Railway, etc. — all terminate TLS in front of the app the same way).
- `src/utils/license-manager.ts` — `verifyAndApplyCode()` is now async; it calls the server instead of validating locally. No secret material left client-side.
- `src/pages/app-upgrade.ts` — awaits the async call, shows a "Verifying…" state.
- `src/router.ts` / `src/components/header.ts` — the `/admin` route and its nav link now only exist when `VITE_DEV_MODE=true` at build time. Verified via `npm run build` that the standard build's output bundle contains zero occurrences of `app-admin`, the salt string, or any legacy code.
- `src/pages/app-admin.ts` — removed the hardcoded "Valid Test Codes" list (the actual leak vector); it was redundant with the server-side list anyway.
- `vite.config.ts` — sourcemaps were unconditionally on (`sourcemap: true`), which ships full readable original TypeScript (with comments) as fetchable `.map` files on the production build. Now gated to dev/tablet builds only.

**Deploy the client and server as one unit, not incrementally.** The client now expects `/api/verify-code` to exist; if the client build reaches users before the server is live, upgrade redemption fails for everyone (safely — it errors with a clear message — but it's still broken).

**Not fixed yet (explicitly deferred, matches "Android-only for now"):**
- Redemption ("has this code been used") is still tracked client-side in `localStorage`, so a genuinely valid, unspent code can still be redeemed more than once across different devices/reinstalls. Closing this needs the server to persist redeemed codes (a KV store or small Postgres table). Low urgency: it requires an already-valid purchased code, not a manufactured one.
- This is still not real Google Play Billing. Google's Payments policy has the same "use the platform's billing for unlocking digital app features" requirement Apple does; the current Stripe-checkout-plus-manual-code flow is a gray area on Play the same way it would be a hard rejection on the App Store. Not blocking today, but factor it into Phase 4.

### Hosting decision (blocking Phase 0's actual deployment)

Render is out. Nothing is confirmed live right now — the static app's real host is unknown (worth checking what's actually behind `gilliomfrontlinedigital.com` and its `/caydenjoy/` path), and `server/stripe-server.js` has only run locally.

Recommendation: **Railway** for `server/stripe-server.js`. The account already exists (`dallas8000-ops`, already running other projects) and it's a straightforward fit for a small always-on Express service — no cold-start gap for Stripe webhooks the way a bare serverless function would have. Static hosting for `dist/` is a separate, lower-stakes decision (Firebase Hosting is already pre-configured in `firebase.json` and would work as-is with zero new setup) — resolve once it's clear whether `gilliomfrontlinedigital.com` is meant to keep serving the app or not.

Once a Node host is chosen, delete the losing configs (`render.yaml` and whichever of `firebase.json`/`swa-cli.config.json` doesn't end up used) — three competing deploy configs for one app is exactly how "I don't know where this is deployed" happens.

---

## Phase 0.5 — Core AAC architecture fix (DONE this session)

**What was broken:** every page (Communication, Foods, Colors, Numbers, Places, Family Puzzle, Quick) was a self-contained grid of atomic buttons — tap a card, hear one pre-written phrase, done. Nothing carried between pages, nothing generalized past the specific card photographed, and several pages (Family Puzzle, Quick) had no photo content or upload path at all — Family Puzzle's "Mom"/"Dad"/"Grandad" cards were stock photos of strangers, not the actual family. This is a digital flashcard app, not an AAC system — real AAC apps (Proloquo2Go, LAMP Words for Life, TouchChat, TD Snap) are built on a core/fringe vocabulary split with fixed-position core words that recombine with open-ended topic vocabulary to generate sentences, and consistent button position across the whole app ("motor planning") so word locations become muscle memory.

**What changed:**
- `src/utils/core-words.ts` — 20-word core vocabulary list (I, you, want, go, stop, help, like, look, eat, drink, play, give, more, little, finished, again, in, out, yes, no), Fitzgerald-Key color-coded by part of speech. Icons for words with a clear pictogram use [Mulberry Symbols](https://mulberrysymbols.org) (CC BY-SA 4.0, free, commercial-use-safe SVGs, self-hosted in `src/assets/symbols/core/`) — deliberately *not* ARASAAC, which is CC BY-NC-SA and would violate its NonCommercial clause the moment this app takes a Stripe payment.
- `src/utils/sentence-builder.ts` — shared app-wide singleton. A tap anywhere (core word or a fringe-vocabulary photo card on any content page) appends to one sentence, which speaks as a whole via a Speak button — "I" + "want" (core bar) + "Banana" (Foods page) → "I want Banana."
- `src/components/core-word-bar.ts` + wiring into `app-index.ts` — the core word grid and sentence strip are mounted once, fixed-position, present on every page, so word positions never move as the user navigates (the actual point of motor planning).
- Every content page's tap handler (`app-foods-enhanced.ts`, `app-colors.ts`, `app-communication.ts`, `app-numbers.ts`, `app-places.ts`, `app-family-puzzle.ts`, `app-home-enhanced.ts`) now also feeds the shared sentence builder, not just speaking its own phrase in isolation.
- `src/pages/app-license.ts` — added the Mulberry Symbols CC BY-SA attribution (license-required, and the only symbol library found that's both free and safe to use in a monetized app).

**Also fixed while wiring this in (the original "≥10 images or upload" ask):**
- `CustomImagesManager` (previously built but not connected to any page except its own standalone screen) is now wired into all seven nav-linked pages. Every page has either ≥10 default images or a working "📸 Add [child]'s real photos" upload link (most have both); each link deep-links the Custom Images page to the right category via `?category=`.
- Family Puzzle and Quick — the two pages that had neither — now support real photo uploads (`family`/`objects`/`quick` categories), which matters more here than raw image count: a stock photo of a stranger labeled "Mom" is actively wrong for a real AAC learner, not just generic.
- Numbers — was 20 cards recycling only 10 unique stock photos via modulo (so item 6 and item 16 showed the same photo), and none of the photos were verified to depict the stated quantity. Reduced to 10 unique, non-duplicated cards; the number badge (not the photo) is now the actual quantity signal, and the honest caveat about stock-photo quantities is in the README and the page's own subtitle rather than overclaimed.

**Not done yet (explicitly deferred):**
- Family/objects default photos are still stock strangers/objects until a caregiver uploads real ones through the new upload path — the fix here was making real replacement possible, not sourcing new stock photos (which wouldn't solve the actual problem anyway).
- Colors' 6 default cards using unverifiable random-per-load `loremflickr` URLs (purple/pink/orange/brown/black/white) are unchanged — same reasoning as Numbers: not going to guess-replace with unverified specific photo URLs. The upload path is the real fix.
- The core word list is a first pass (20 words). Expanding it, and adding question words (who/what/where — Mulberry has icons for these too), is straightforward follow-on work once this set is validated in actual use.
- This lays real groundwork for Phase 2 below — `sentence-builder.ts` is exactly the shared state a local frequency/prediction model would sit on top of.

---

## Phase 1 — AI board & vocabulary personalization

Closest match to what's winning in this category right now (ollie AAC's on-demand board generation). CaydenJoy already has the right data shape for this: `CustomImagesManager` stores category-tagged images, and every page already has a tab system.

**Design:**
1. Add lightweight local usage tracking (extend the existing per-item interaction pattern already used by `progress-manager.ts`) — which communication buttons, food items, and tabs actually get tapped, and how often. This is the training signal, and it's free (no API calls, stays on-device).
2. Add a server endpoint (new, alongside `stripe-server.js` or a sibling service) that takes a small JSON payload — the family's existing custom vocabulary/categories plus usage frequency — and calls an LLM (Claude or GPT-4o-mini class model is enough for this, don't reach for a frontier model) to propose: new items to add to an existing tab, a new tab name + starter items based on a one-line description ("we're going to grandma's house this weekend"), or icon/label suggestions for uploaded photos that don't have one yet.
3. This must be server-mediated, not client-direct — same lesson as Phase 0: an LLM API key shipped in the client bundle is exactly the mistake just fixed, just with a more expensive blast radius (someone else's usage burning your API bill instead of just your paywall).
4. Gate it as a premium feature (ties into the existing tier system) both because it's genuine added value and because it's the feature with a real, ongoing marginal cost (API calls) — unlike the rest of the app, which is static once purchased.

**Estimate:** this is the highest-leverage, lowest-risk AI feature to ship first — it reuses existing data structures and doesn't touch the communication page's core interaction loop.

---

## Phase 2 — Predictive phrase assembly

Closest match to Spoken/ChirpBot's next-word prediction. Split into two sub-phases deliberately, because a naive "call an LLM on every keystroke" design breaks the app's own stated offline-first PWA promise and adds live cost to every tap:

**2a — Local frequency model (ship first, no server dependency):** track n-gram/bigram frequency of item selections directly on-device (which items get tapped in sequence). Surface the top 2-3 likely-next items as suggestion chips above the keyboard/board. Zero marginal cost, works fully offline, and is genuinely more relevant than a generic LLM suggestion because it's trained purely on this specific kid's actual usage. `src/utils/sentence-builder.ts` (Phase 0.5) is exactly the shared state this sits on top of — it already sees every word tapped, in order, across every page; this phase is "add a frequency table and a suggestion-chip UI," not new plumbing.

**2b — Cloud-assisted phrase completion (premium, optional):** for users with connectivity, send the current partial phrase + recent local frequency data to the same server used in Phase 1 for richer, context-aware completions. Same reasoning as above: premium-gated, server-mediated, never client-side keys.

Ship 2a alone as a real, complete feature before touching 2b — it already closes most of the competitive gap and has none of 2b's cost or connectivity dependencies.

---

## Phase 3 — iOS / Apple App Store (blocked on account + hardware, not code)

Do not start the Capacitor iOS work until these two are true:
1. **Apple Developer Program membership** — $99/yr, enrolls at developer.apple.com, identity verification can take a few days.
2. **A Mac, or a cloud Mac CI** — Capacitor's iOS build step requires Xcode, which only runs on macOS. Without a Mac, use Codemagic or Ionic Appflow (both have free tiers sufficient for occasional builds) to build and upload from CI instead of buying hardware.

Once both exist, the technical work is:
- `npx cap add ios`, then wire up icons/splash/signing in Xcode (or CI config).
- **Monetization must move off the current Stripe-checkout-plus-code flow before submission.** Apple Guideline 3.1.1 requires StoreKit for unlocking digital features inside the app; the current flow is exactly the pattern that gets rejected. Recommended: RevenueCat, which wraps StoreKit (iOS) and Google Play Billing (Android) behind one SDK/dashboard — you'd also be closing the Play Billing gray area noted in Phase 0 at the same time, on both platforms, with one integration instead of two.
- TestFlight beta, then submission.

This phase is written up now so it's ready to execute the day the account/Mac question is resolved — it is explicitly not scheduled to start before then.

---

## Phase 4 — Finish the Google Play Console listing

Since the account already exists, what's actually left is the listing itself: store listing copy, screenshots (Play's current requirements want per-device-class screenshots), the Data Safety form (this app touches photos/custom images and, once Phase 1 ships, sends usage data to your own server — both need accurate disclosure), the content rating questionnaire (relevant given the audience), and a privacy policy URL (one already exists in the repo as `PRIVACY_POLICY.md` — confirm it's hosted somewhere Play's form can link to, and that it mentions the server-side AI processing once Phase 1 ships).

Longer-term, factor Google Play Billing into this phase too — see the Phase 0 note.

---

## Housekeeping (not urgent, worth doing before this gets more complex)

- `eas.json`, `app.json` (Expo config), and the `expo`/`eas-cli` dependencies are dead weight — nothing in the actual build pipeline (`tsc && vite build` → `cap sync android` → Bubblewrap) touches Expo/EAS. Remove them; they'll otherwise mislead whoever (including future-you) next tries to figure out how this app actually builds.
- `app-admin.ts`'s local `generateCode()` produces codes that look real but will never pass the new server-side checksum check — it's flagged in-app now, but worth replacing with a real call to a (new, auth-protected) server code-generation endpoint once Phase 1's server exists anyway.
