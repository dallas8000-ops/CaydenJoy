# CaydenJoy APK Delivery And Upgrade Keys

This app now supports tiered upgrade keys that can be delivered after purchase.

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

1. Build the APK.
2. Customer purchases the APK or upgrade.
3. Send the APK download link.
4. Send one unused upgrade key for the tier they purchased.
5. Customer installs the APK.
6. Customer opens `Upgrade`.
7. Customer enters the key.
8. App unlocks the matching tier and records the key as redeemed on that device.

## Important Limitation

The APK can prevent the same key from being redeemed twice on the same installed device. It cannot guarantee global one-time use across every phone/tablet by itself.

For true one-time keys across all customers and devices, use one of these:

- Google Play Billing
- A small activation server
- A private license database checked during activation

The current implementation is a practical offline-friendly system for direct APK delivery.
