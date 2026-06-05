# CaydenJoy Domain Download Setup

Use this when your landing page and CaydenJoy download are on the same domain.

## Recommended URL Layout

- Landing page for all projects: `https://gilliomfrontlinedigital.com/`
- CaydenJoy APK file: `https://gilliomfrontlinedigital.com/downloads/caydenjoy.apk`
- CaydenJoy web app (optional): `https://gilliomfrontlinedigital.com/caydenjoy/`

## 1) Create APK File Location

Create a `downloads` folder at your web host root and upload:

- `caydenjoy.apk`

The file must be publicly reachable at:

- `https://gilliomfrontlinedigital.com/downloads/caydenjoy.apk`

## 2) Keep Landing Page As-Is

Keep your existing `index.html` at domain root for all projects. Do not replace it.

Add a CaydenJoy card/button on the landing page that links to:

- Web app: `https://gilliomfrontlinedigital.com/caydenjoy/` (if hosted)
- Android download: `https://gilliomfrontlinedigital.com/downloads/caydenjoy.apk`

## 3) Configure This App Link

This repo already uses:

- `VITE_APK_DOWNLOAD_URL=https://gilliomfrontlinedigital.com/downloads/caydenjoy.apk`

If you change the file name/path, update that env var and rebuild/redeploy.

## 4) Optional Server MIME Type (If Downloads Fail)

If your host does not serve `.apk` files correctly, configure MIME type:

- `application/vnd.android.package-archive`

## 5) Quick Verification

1. Open `https://gilliomfrontlinedigital.com/downloads/caydenjoy.apk` in a browser.
2. Open app download page in this app: `/download`.
3. Tap Download APK and confirm the file downloads.
4. Install on Android and test Upgrade flow.