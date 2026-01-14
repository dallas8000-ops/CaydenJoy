# CaydenJoy Tablet APK - Installation Guide

## 📦 What You Have

The tablet build is in: `dist/` folder
- This is a **progressive web app (PWA)** that can be installed as an APK
- All premium features are **automatically unlocked** in this build
- Perfect for your personal tablet testing

## 🔑 Upgrade Code

**Production Code:** `CyberCop3158`

This code unlocks all premium features when entered through the Upgrade page in the app.

## 📱 Installation on Android Tablet

### Option 1: Using Bubblewrap (Recommended)

Bubblewrap is already configured in your project. Follow these steps:

1. **Install Dependencies** (if not already installed)
   ```bash
   npm install -g @bubblewrap/cli
   ```

2. **Initialize Bubblewrap** (if first time)
   ```bash
   cd c:\CaydenJoy\CaydenJoy
   bubblewrap init --manifest public/manifest.json
   ```

3. **Build APK**
   ```bash
   bubblewrap build
   ```

4. **Output**
   - APK will be in: `app-release.apk` (in the current directory)
   - Copy this to your tablet or transfer via USB

### Option 2: Using Android App Bundle

If you have Android tools installed:

1. **Convert dist/ to APK using Android Studio**
   - Open Android Studio
   - File → New → Import Project
   - Select the `bubblewrap` output folder
   - Build → Build Bundle(s) / APK(s)

### Option 3: Use Existing bubblewrap.json

Your project already has `bubblewrap.json` configured:

```bash
cd c:\CaydenJoy\CaydenJoy
bubblewrap build
```

## 📥 Installing on Your Tablet

### Via USB Transfer:
1. Connect tablet to computer via USB
2. Copy `app-release.apk` to tablet
3. Open file manager on tablet
4. Tap the APK file
5. Tap "Install"
6. Allow installation from unknown sources (if prompted)

### Via Email:
1. Email yourself the APK
2. Download from email on tablet
3. Open and install

### Via Google Drive:
1. Upload APK to Google Drive
2. Share link with yourself
3. Download on tablet
4. Install

## ✨ Features Available

In this tablet build, **everything is unlocked**:
- ✅ Additional Tabs on all learning pages
- ✅ Custom Images upload
- ✅ Voice Customization
- ✅ Cloud Backup
- ✅ All 8 learning pages (Communication, Foods, Colors, Numbers, Places, Puzzle, etc.)

## 🧪 Testing the Upgrade System

To test the upgrade code flow:

1. **Build the standard version** (features locked):
   ```bash
   npm run build
   ```

2. **Install on another device** and try entering `CyberCop3158` on the Upgrade page

3. **Verify features unlock** when the code is entered

## 📊 Build Variants

| Build | Command | Features | Use Case |
|-------|---------|----------|----------|
| **Standard** | `npm run build` | Locked (paid only) | App Store |
| **Tablet** | `npm run build-tablet` | Auto-unlocked | Personal tablet |
| **APK** | `bubblewrap build` | Auto-unlocked | Android installation |

## 🔧 Bubblewrap Configuration

Your `bubblewrap.json` is already set up with:
- App name: CaydenJoy
- Package: com.caydenjoy
- Version: 1.0.0
- Display: standalone (full screen)

To customize, edit `bubblewrap.json` before building.

## 📱 Device Requirements

- **Minimum Android:** 5.0 (API 21)
- **Recommended:** Android 8.0+ (API 26+)
- **RAM:** 1GB minimum, 2GB recommended
- **Storage:** ~50MB for app + data

## 🐛 Troubleshooting

### APK won't install
- Check "Allow installation from unknown sources" in device settings
- Try a different USB cable
- Verify file isn't corrupted (try rebuilding)

### App crashes on startup
- Clear device cache/storage
- Ensure Android version is 5.0+
- Check browser compatibility (uses Chrome WebView)

### Poor performance
- Close other apps
- Clear app cache
- Update device to latest Android

## 📝 Next Steps

1. Build the APK: `bubblewrap build`
2. Transfer to tablet via USB
3. Install and test all features
4. Verify upgrade code works: `CyberCop3158`
5. Test on standard build (with paywall)

## 💡 Production Release

When ready for app store submission:

1. Generate signing key (if not already done)
2. Update version in `bubblewrap.json` and `package.json`
3. Build release APK: `bubblewrap build --release`
4. Upload to Google Play Console

For more info: https://www.web.dev/using-web-components-to-build-an-android-app/
