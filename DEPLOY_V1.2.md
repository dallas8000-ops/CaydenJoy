# 🚀 CaydenJoy v1.2 - Accessibility Update Build Guide

## What's New in v1.2

✨ **Major Accessibility Improvements:**
- 🎨 **Calm Color Theme** - Soft, muted palette for sensory sensitivity
- 🔤 **Font Size Controls** - 4 size options (Small to Extra Large)
- 🎬 **Reduced Motion** - Disable animations for users sensitive to motion
- 🔊 **Text-to-Speech** - Read communication phrases aloud
- 🎯 **High Contrast Mode** - Better visibility with pure colors & borders
- 🔘 **Larger Touch Targets** - 48-56px minimum buttons for easier tapping
- ⚙️ **Settings Page** - Dedicated page for all accessibility customizations

---

## Build Method 1: Local Build (Fastest)

### Prerequisites
- Node.js v18+ installed
- Java 17 installed
- Android SDK setup
- Keystore file ready (`caydenjoy.keystore`)

### Steps

```bash
# 1. Navigate to project
cd c:\CaydenJoy

# 2. Install dependencies
npm install

# 3. Build the web files
npm run build

# 4. Build APK (creates unsigned APK)
cd android
./gradlew.bat assembleRelease

# Output: android/app/build/outputs/apk/release/app-release.apk
```

**Sign the APK:**
```bash
# Use your keystore to sign
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 ^
  -keystore caydenjoy.keystore ^
  app-release.apk caydenjoy

# Optimize (optional)
zipalign -v 4 app-release.apk app-release-aligned.apk
```

---

## Build Method 2: EAS Build (Recommended - Handles Everything)

### Prerequisites
- Expo CLI installed: `npm install -g eas-cli`
- Expo account (free)
- Logged in: `eas login`

### Steps

```bash
# 1. Navigate to project
cd c:\CaydenJoy

# 2. Build for Android (cloud build)
eas build --platform android --non-interactive

# This builds automatically:
# ✓ Compiles TypeScript
# ✓ Bundles web files
# ✓ Signs APK with production config
# ✓ Outputs: app-release.aab (App Bundle)

# 3. Wait for build to complete (~5-10 min)
# You'll get a download link when done
```

**Check build status:**
```bash
eas build:list
```

---

## Upload to Google Play Console

### Prerequisite Setup (One-time only)
1. Go to [Google Play Console](https://play.google.com/console)
2. Create app if not done: **CaydenJoy** → Educational
3. Create **Release** track
4. Add app description, screenshots, privacy policy

### Upload Steps

**For EAS Build (Recommended):**
```bash
# Upload directly to Play Console
eas submit --platform android --track internal --non-interactive
```

**For Local Build:**
1. Go to Play Console → Your App → Release → Internal Testing
2. Click **Create Release**
3. Upload APK or App Bundle
4. Add release notes:
   ```
   Version 1.2 - Accessibility Update

   New Features:
   ✨ Color themes (Calm, Normal, High Contrast)
   🔤 Adjustable font sizes
   🎬 Reduced motion support
   🔊 Text-to-speech
   🎯 Larger touch targets

   Perfect for children with sensory sensitivities
   ```
5. Click **Review Release**
6. **Start Rollout** to Internal Testing

---

## Testing Before Release

### On Your Tablet

**Method 1: Local Network (Fastest)**
```bash
npm run dev-server
# On tablet browser: http://<your-computer-ip>:5173
```

**Method 2: Installed APK**
- Install APK on tablet
- Test all accessibility settings
- Try each color theme
- Test text-to-speech
- Verify touch targets are large enough

### What to Test
- [ ] All color themes work
- [ ] Font sizes display correctly
- [ ] Text-to-speech works
- [ ] Sounds play (if enabled)
- [ ] Settings persist after reload
- [ ] All pages accessible
- [ ] No animations when "Reduce Motion" enabled

---

## Version Increments for Future Updates

Update these files for each new release:

**app.json:**
```json
"version": "1.2.0"  // Increment as: 1.2.1, 1.3.0, 2.0.0, etc.
```

**android/app/build.gradle:**
```gradle
versionCode 3        // Always increment (3, 4, 5...)
versionName "1.2"    // Matches app.json version
```

**Google Play Console:**
- Always increment `versionCode` - Google requires this
- `versionName` can be same or higher

---

## Rollout Strategy

**Recommended:**
1. ✅ Internal Testing (you + testers)
2. ✅ Closed Testing (5-10 beta users)
3. ✅ Full Release (everyone)

### Monitor After Release
- Check crash reports in Play Console
- Monitor user ratings & reviews
- Check for accessibility feedback

---

## Troubleshooting

**"Build failed"**
- Check Java 17 is installed: `java -version`
- Clear gradle cache: `cd android && ./gradlew.bat clean`

**"APK signing error"**
- Verify keystore exists: `caydenjoy.keystore`
- Check environment variables are set

**"Play Console won't accept APK"**
- Ensure `versionCode` is higher than previous
- Check manifest package name: `io.github.dallas8000_ops.caydenjoy`

---

## What Happens After Upload

1. **Internal Testing**: Immediately available to testers
2. **Review**: Google reviews (usually 2-4 hours)
3. **Approval**: Available in Play Store
4. **Rollout**: Gradual to users (24-48 hours)

---

## Support for Your Grandson

The new settings page lets him customize:
- **Colors** - Calm theme reduces sensory overload
- **Animations** - Disable if they're distracting
- **Sounds** - Quiet or off if too loud
- **Speech** - Hear each word read aloud
- **Button Size** - Easier to tap accurately

All settings are saved automatically!

---

**Questions?** Check the build output or run:
```bash
npm run build-tablet    # Test locally first
```
