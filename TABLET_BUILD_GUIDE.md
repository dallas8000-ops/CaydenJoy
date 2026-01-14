# CaydenJoy Tablet Development Build Guide

## Overview
You can now build two versions of the CaydenJoy app:
1. **Standard Build** - Features locked behind premium paywall (for app store)
2. **Tablet Build** - All premium features unlocked (for your personal tablet use)

## Build Commands

### Standard Build (For Users - Features Locked)
```bash
npm run build
```
This creates a production-ready build where users must purchase to unlock premium features.

### Tablet Development Build (For You - All Features Unlocked)
```bash
npm run build-tablet
```
This creates a production-ready build with **ALL premium features automatically unlocked** for your personal use.

### Alternative Tablet Build Command
```bash
npm run build-tablet-apk
```
Same as `build-tablet` with a confirmation message at the end.

## What Gets Unlocked with Tablet Build

When you use `npm run build-tablet`, the following premium features are automatically enabled:

✅ **Additional Tabs** - Create multiple tabs on Communication, Foods, Colors, Numbers, Places, Family Puzzle
✅ **Custom Images** - Upload photos of family, food, and places
✅ **Voice Customization** - Personalize voice speed, pitch, and language
✅ **Cloud Backup** - Backup and sync settings across devices

## How It Works

### Development Mode Flag
The tablet build sets an environment variable `VITE_DEV_MODE=true` which:
- Automatically unlocks all premium features on app startup
- Logs "[DEV MODE] Premium features automatically unlocked" to console
- Does NOT require users to see or purchase anything
- All features work exactly as if they were purchased

### Environment Files
- `.env.development` - Standard dev environment (features locked)
- `.env.tablet` - Tablet build environment (features unlocked)

### Code Implementation
The `premium-manager.ts` checks for `VITE_DEV_MODE` during initialization:
- If `VITE_DEV_MODE=true`, all features are instantly enabled
- If `VITE_DEV_MODE=false`, features require purchase
- The check happens before any UI is rendered

## Building Your APK

### Steps to Create Tablet APK:

1. **Build the tablet version:**
   ```bash
   npm run build-tablet
   ```
   This creates the optimized build in the `dist/` folder with all features unlocked.

2. **Convert to APK using Bubblewrap/Capacitor:**
   ```bash
   npm run build-apk
   ```
   (or use your existing APK build process with the generated dist folder)

3. **Deploy to your tablet**
   Install the APK on your tablet to get the full experience with all premium features enabled.

## Testing Premium Features

When running the tablet build locally:

1. All tabs features are automatically enabled on:
   - Communication page ➜ Create multiple tabs
   - Foods page ➜ Create multiple tabs
   - Colors page ➜ Create multiple tabs
   - Numbers page ➜ Create multiple tabs
   - Places page ➜ Create multiple tabs
   - Family Puzzle page ➜ Create multiple tabs

2. NO need to unlock via the 👑 premium page
3. NO need to click "Unlock Premium" button
4. NO payment required
5. All features work immediately on startup

## Development vs Production

| Aspect | Standard Build | Tablet Build |
|--------|---|---|
| **Command** | `npm run build` | `npm run build-tablet` |
| **Premium Features** | Locked (users pay) | Unlocked (dev mode) |
| **Use Case** | App Store / Google Play | Personal tablet testing |
| **Environment** | `VITE_DEV_MODE=false` | `VITE_DEV_MODE=true` |
| **Features Available** | Base features only | All premium + base |

## Checking the Build Type

Open browser console on your running tablet app and look for:
- **Dev/Tablet Build:** Console shows `[DEV MODE] Premium features automatically unlocked`
- **Standard Build:** Console shows normal loading, no dev mode message

## Important Notes

⚠️ **For App Store Submissions:**
- Always use `npm run build` (NOT `build-tablet`)
- This ensures users see the premium paywall
- The dev mode flag should NOT be in production releases

✅ **For Personal Use:**
- Use `npm run build-tablet` for your tablet
- All features instantly available
- Perfect for testing and personal demonstrations

## Reverting to Standard Build

To go back to the locked version for any reason:
```bash
npm run build
```

## Need to Update?

After making code changes:

**For standard build:**
```bash
npm run build
```

**For tablet build:**
```bash
npm run build-tablet
```

Both commands will recompile TypeScript and rebuild with your latest changes.
