# CaydenJoy APK Delivery And Upgrade Keys

This app now supports tiered upgrade keys that can be delivered after purchase.

## Debug APK vs Customer APK

The file below is for testing only:

```text
android/app/build/outputs/apk/debug/app-debug.apk
```

Do not use `app-debug.apk` as the paid customer download. Debug builds are easier to inspect, are not optimized like release builds, and can include development behavior.

For customers, build a release APK or Android App Bundle:

```powershell
npm run build
cd android
.\gradlew.bat assembleRelease
```

Release APK output:

```text
android/app/build/outputs/apk/release/app-release.apk
```

Google Play usually prefers an App Bundle:

```powershell
cd android
.\gradlew.bat bundleRelease
```

App Bundle output:

```text
android/app/build/outputs/bundle/release/app-release.aab
```

## Recommended Download Strategy

### Best public option: Google Play

Use Google Play for the normal public Android app download.

Flow:

1. Build a release `.aab`.
2. Upload it to Google Play Console.
3. Start with Internal Testing.
4. Move to Closed Testing.
5. Publish to Production when ready.
6. Use Google Play Billing later for automatic purchase and upgrade enforcement.

This is the cleanest option for families because Android handles install, updates, trust, and device compatibility.

### Best direct-sale option: private paid delivery page

For selling outside Google Play, do not put the paid APK on a public GitHub release if the repository is public. Anyone with the link can download it.

Better flow:

1. Customer pays through Stripe.
2. Stripe redirects to CaydenJoy's payment success page.
3. The page verifies the Stripe checkout session through the Render backend.
4. The page provides the release APK download when `APK_DOWNLOAD_URL` is configured.
5. The page shows the purchased tier and upgrade key.
5. Customer installs the APK.
6. Customer opens `Upgrade` and enters the key.

Good places to host the APK for direct sale:

- A private Render backend route after Stripe payment
- Private cloud storage with expiring signed links
- A private file delivery service connected to Stripe

## Render Blueprint

The repository includes:

```text
render.yaml
```

It creates:

- `caydenjoy-app` static site
- `caydenjoy-stripe` payment backend

The Stripe backend needs these Render environment variables:

```text
STRIPE_SECRET_KEY
STRIPE_WEBHOOK_SECRET
APK_DOWNLOAD_URL
STRIPE_PRICE_FAMILY
STRIPE_PRICE_LEARNING
STRIPE_PRICE_ALL_ACCESS
```

The Stripe price IDs are optional. If they are blank, the backend uses the one-time prices in code.

### GitHub option: useful for testing, not ideal for paid APK delivery

GitHub can store APKs as release assets or workflow artifacts.

Use GitHub for:

- Your own testing
- Internal testers
- Keeping build history

Avoid public GitHub release assets for:

- Paid APK delivery
- One-customer-only download links
- Private family data

If the repository is public, a GitHub Release APK is public too.

## GitHub APK Workflow

The repository includes:

```text
.github/workflows/release-apk.yml
```

It can run two ways:

- Manual run from GitHub Actions with `workflow_dispatch`
- Automatic run when you push a version tag like `v1.2.1`

The workflow builds:

```text
android/app/build/outputs/apk/release/app-release.apk
```

It uploads the APK as a GitHub Actions artifact named:

```text
caydenjoy-release-apk
```

Manual GitHub Release publishing is optional and defaults to `false`. Keep it off for paid/private APK delivery.

### Required GitHub Secrets

Add these in GitHub:

```text
Repository -> Settings -> Secrets and variables -> Actions -> New repository secret
```

Required secrets:

```text
ANDROID_KEYSTORE_BASE64
KEYSTORE_PASSWORD
KEY_ALIAS
KEY_PASSWORD
```

`ANDROID_KEYSTORE_BASE64` should be your release keystore converted to base64.

PowerShell example:

```powershell
[Convert]::ToBase64String([IO.File]::ReadAllBytes("android\app\caydenjoy.keystore")) | Set-Clipboard
```

Paste the copied value into the `ANDROID_KEYSTORE_BASE64` GitHub secret.

Important: Keep this keystore safe. Android app updates must be signed with the same key.

## Tiers

- `family` -> Family Photos
- `learning` -> Learning Plus
- `allAccess` -> All Access

## Generate Keys

Run one of these commands from the project root:

```powershell
node scripts/generate-upgrade-keys.js family 10
node scripts/generate-upgrade-keys.js learning 10
node scripts/generate-upgrade-keys.js allAccess 10
```

Example key format:

```text
CJA-ABC123-DEF456-1A2B3
```

Prefixes:

- `CJF` = Family Photos
- `CJL` = Learning Plus
- `CJA` = All Access

## Delivery Flow

1. Build the release APK.
2. Customer purchases the APK or upgrade.
3. Send a private APK download link.
4. Send one unused upgrade key for the tier they purchased.
5. Customer installs the APK.
6. Customer opens `Upgrade`.
7. Customer enters the key.
8. App unlocks the matching tier and records the key as redeemed on that device.

## What To Send After Purchase

Send the customer:

```text
Thank you for purchasing CaydenJoy.

Download APK:
<private download link>

Your upgrade key:
<one unused key>

Install steps:
1. Download the APK on the Android device.
2. Open the APK and allow install from this source if Android asks.
3. Open CaydenJoy.
4. Go to Upgrade.
5. Enter your upgrade key.

Support:
dallas8000@gmail.com
```

## Important Limitation

The APK can prevent the same key from being redeemed twice on the same installed device. It cannot guarantee global one-time use across every phone/tablet by itself.

For true one-time keys across all customers and devices, use one of these:

- Google Play Billing
- A small activation server
- A private license database checked during activation

The current implementation is a practical offline-friendly system for direct APK delivery.
