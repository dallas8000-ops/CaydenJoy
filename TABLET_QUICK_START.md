# 🚀 Quick Start: Tablet Build

## TL;DR

To build an APK with all premium features unlocked for your tablet:

```bash
cd C:\CaydenJoy\CaydenJoy
npm run build-tablet
```

Done! The optimized build is in the `dist/` folder, ready to convert to APK.

---

## Two Build Options

### Standard Build (Features Locked)
```bash
npm run build
```
✅ For app stores  
✅ Users must pay to unlock features  
✅ Premium paywall active  

### Tablet Build (All Features Unlocked)
```bash
npm run build-tablet
```
✅ For your personal tablet  
✅ All premium features instantly available  
✅ No paywall, no purchases needed  

---

## What Gets Unlocked in Tablet Build

📑 **Additional Tabs** - Create multiple tabs on 6 different pages
📸 **Custom Images** - Upload photos
🎤 **Voice Customization** - Adjust audio settings
☁️ **Cloud Backup** - Save your settings

---

## Local Testing (Before Building APK)

To test with all features in your browser:

```bash
npx cross-env VITE_DEV_MODE=true npm run dev
```

Opens at `http://localhost:5174/` with all features enabled.

---

## After Building

The `dist/` folder contains your production-ready app.

### Convert to APK:
Use your existing build tool:
```bash
npm run build-apk
```

Or manually use Bubblewrap/Capacitor with the `dist/` folder.

---

## Key Commands Reference

| Goal | Command |
|------|---------|
| Build APK (features locked) | `npm run build` |
| Build APK (all features unlocked) | `npm run build-tablet` |
| Test in browser (unlocked) | `npx cross-env VITE_DEV_MODE=true npm run dev` |
| Check what's in dist/ | `npm run build-tablet` then check `dist/` folder |

---

## One-Liner for Your Tablet Build

Copy and paste this to build your tablet APK:

```bash
cd C:\CaydenJoy\CaydenJoy && npm run build-tablet
```

That's it! Look in the `dist/` folder for your app.

---

**Enjoy all the premium features on your tablet!** 🎉
