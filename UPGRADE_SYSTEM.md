# CaydenJoy Upgrade System

## Overview

The app now uses an **upgrade code** system instead of environment-variable-based feature toggling. All features are fully implemented in the app, and premium features are locked until the user enters a valid upgrade code.

## How It Works

### For Users

1. **Free Version** - Users access the app with basic features available. Premium features (Additional Tabs, Custom Images, Voice Customization, Cloud Backup) are blocked.

2. **Upgrading** - Users can navigate to the **Upgrade** page (🔓 icon in header) and enter an upgrade code to unlock all premium features instantly.

3. **Persistent License** - Once unlocked with an upgrade code, the premium features remain unlocked even after closing/reopening the app (stored in localStorage).

### For Developers/Testing

#### Available Upgrade Codes (for testing)
- `CAYDENJOY-PREMIUM-2024`
- `CAYDENJOY-UNLOCK-ALL`
- `PREMIUM-UNLOCK-2025`

To add more codes, edit `src/utils/license-manager.ts` and add them to the `VALID_UPGRADE_CODES` array.

#### Testing the System

1. **Test with Free Features** - Open the app normally and verify premium features are blocked
2. **Test Upgrade Flow** - Go to Upgrade page and enter one of the valid codes
3. **Test Dev Mode** - Build with `npm run build-tablet` to auto-unlock all features for testing

## Architecture

### Files Modified/Created

**New Files:**
- `src/utils/license-manager.ts` - Manages upgrade codes and license verification
- `src/pages/app-upgrade.ts` - Upgrade code entry page

**Modified Files:**
- `src/utils/premium-manager.ts` - Updated to check license status
- `src/router.ts` - Added upgrade page route
- `src/components/header.ts` - Added upgrade button (🔓)

### Key Components

#### LicenseManager (`license-manager.ts`)
```typescript
// Check if upgraded
licenseManager.isUpgraded()

// Verify and apply code
licenseManager.verifyAndApplyCode('CODE-HERE')

// Get upgrade info
licenseManager.getUpgradeCode()
licenseManager.getUpgradeDate()

// Reset (dev only)
licenseManager.resetLicense()
```

#### PremiumManager (`premium-manager.ts`)
- Now checks `LicenseManager.isUpgraded()` first
- Falls back to dev mode check
- Premium features only available if upgraded OR in dev mode

## Feature Control

### Premium-Gated Features
These features are only available when `isPremium()` returns true:

1. **Additional Tabs** - Create custom communication tabs
2. **Custom Images** - Upload and use custom images
3. **Voice Customization** - Adjust speech voice settings
4. **Cloud Backup** - Save progress to cloud

### How Features Are Controlled

Example from `app-communication.ts`:
```typescript
const canAddTabs = this.premiumManager.canAddAdditionalTabs();

if (canAddTabs) {
  // Show tabs container
} else {
  // Hide tabs - show upgrade prompt
}
```

## Build Configurations

### Standard Build (App Store)
```bash
npm run build
```
- All premium features locked by default
- Users must enter upgrade code to unlock
- No dev mode enabled

### Tablet Build (Personal Development)
```bash
npm run build-tablet
```
- All premium features auto-unlocked via VITE_DEV_MODE=true
- Used for internal testing and development

### App Store Build (Production)
```bash
npm run build-tablet-apk
```
- Creates APK with all features unlocked
- Only for personal use on your tablet
- Not for app store distribution

## Upgrade Codes

### Current Valid Codes
- `CAYDENJOY-PREMIUM-2024` ✓
- `CAYDENJOY-UNLOCK-ALL` ✓
- `PREMIUM-UNLOCK-2025` ✓

### Adding New Codes
1. Edit `src/utils/license-manager.ts`
2. Add code to `VALID_UPGRADE_CODES` array:
```typescript
const VALID_UPGRADE_CODES = [
  'CAYDENJOY-PREMIUM-2024',
  'CAYDENJOY-UNLOCK-ALL',
  'PREMIUM-UNLOCK-2025',
  'YOUR-NEW-CODE-HERE'  // ← Add here
];
```
3. Rebuild and deploy

## Storage

### License Data (localStorage)
- Key: `caydenjoy_license_status`
- Stores: `{ isUpgraded: boolean, upgradeDate?: number, upgradeCode?: string }`

### Tab Data (localStorage)
- Persists per page (e.g., `caydenjoy_communication_tabs`)
- Only available if additional tabs are enabled

## Testing Checklist

- [ ] Basic app loads without premium features
- [ ] Upgrade page accessible from header (🔓)
- [ ] Invalid codes rejected with error message
- [ ] Valid code accepted and features unlocked
- [ ] Premium features visible after upgrade
- [ ] License persists after reload
- [ ] Dev mode unlocks features on tablet build
- [ ] Premium manager reads license status

## Future Enhancements

1. **Server-Side Validation** - Verify codes against backend
2. **License Expiration** - Add expiration dates to codes
3. **Serial Numbers** - Unique codes per customer
4. **Analytics** - Track upgrade conversions
5. **Subscription** - Recurring billing instead of one-time codes
