# APK Installation & Runtime Issues - Troubleshooting Guide

## Issue: APK Opens and Redirects to GitHub

**Problem**: APK installs but when opened, it redirects to GitHub instead of showing your app.

**Root Cause**: The manifest `start_url` was pointing to "/" instead of "/index.html", causing the PWABuilder wrapper to redirect incorrectly.

**✅ FIXED**: Updated to `start_url: "/index.html"`

**Steps to Fix**:
1. Go to: https://www.pwabuilder.com
2. Enter app URL: `https://github.com/dallas8000-ops/CaydenJoy`
3. Click "Package" → Select "Android"
4. Click "Generate"
5. Download **new APK**
6. Uninstall old APK from tablet
7. Install new APK
8. App should now load correctly! ✅

---

## Issue: APK Won't Install

**Error**: "App not installed" or "Installation failed"

**Solutions**:

### Solution 1: Enable Unknown Sources
1. Settings → Apps & notifications → Special app access
2. Select "Install unknown apps"
3. Choose your file manager or email app
4. Toggle "Allow from this source" ON
5. Try installing APK again

### Solution 2: Check Android Version
- Minimum required: Android 5.0 (API 24)
- Check device Settings → About → Android version
- If older, app won't work on that device

### Solution 3: Clear Cache
1. Settings → Apps → CaydenJoy (if installed)
2. Storage → Clear Cache
3. Uninstall app
4. Reinstall APK

### Solution 4: Check File Integrity
- Download APK file size should be 2-5 MB
- If smaller (<1 MB), download may be corrupted
- Try downloading again from PWABuilder

---

## Issue: App Crashes on Startup

**Error**: App opens then immediately closes

**Solutions**:

### Check Device Logs
```powershell
# Via Android SDK:
adb logcat | findstr "CaydenJoy"
```

### Common Fixes
1. **Clear app data**:
   - Settings → Apps → CaydenJoy → Storage → Clear All Data
   - Try launching again

2. **Reinstall app**:
   - Uninstall completely
   - Restart device
   - Reinstall APK

3. **Update Android**:
   - Check for system updates
   - Install latest Android version
   - Some features require newer Android

4. **Check JavaScript Errors**:
   - If you have Chrome on tablet, try:
   - Open Chrome → enter `about:inspect`
   - Check for JavaScript errors in console

---

## Issue: Offline Pages Not Loading

**Problem**: App requires internet to load pages

**Solution**: First load must be online
1. Connect to WiFi
2. Open app and navigate to all pages
3. Let service worker cache everything
4. Then you can use offline

---

## Issue: Dark Mode Not Working

**Problem**: Dark mode toggle in Settings has no effect

**Solution**:
1. Settings → CaydenJoy → Permissions
2. Ensure all permissions are granted
3. Go to Settings page in app
4. Toggle dark mode OFF then ON
5. Restart app

---

## Issue: Notifications Not Working

**Problem**: App won't send push notifications

**Solutions**:

1. **Enable Notifications**:
   - Settings → Apps → CaydenJoy → Notifications
   - Toggle "Allow notifications" ON

2. **Check Battery Optimization**:
   - Settings → Battery → Battery optimization
   - Find CaydenJoy → Don't optimize
   - Allows notifications in background

3. **Test Notification**:
   - Open Settings page in app
   - Toggle "Enable Notifications" ON
   - Should see permission request
   - Grant permission

---

## Issue: Contact Form Not Saving

**Problem**: Form data disappears when you close app

**Solution**: 
1. Check device storage permissions:
   - Settings → Apps → CaydenJoy → Permissions
   - Allow "Storage" permission
2. Data saves to localStorage automatically
3. Reopen app and check if data persists

---

## Issue: App is Slow

**Problem**: App takes a long time to load or respond

**Solutions**:

1. **Clear Cache**:
   - Settings → Apps → CaydenJoy → Storage → Clear Cache
   - Not the same as Clear Data (which deletes settings)

2. **Close Background Apps**:
   - Close other apps running in background
   - Try again

3. **Restart Device**:
   - Full restart of tablet
   - Often fixes performance issues

4. **Check Free Space**:
   - Settings → Storage
   - Ensure at least 1 GB free
   - Low storage slows apps

---

## Issue: Pages Not Loading

**Problem**: Specific pages show blank or error

**Solutions**:

1. **Check Internet Connection**:
   - Pages require first online load to cache
   - Connect to WiFi
   - Reload page (pull down to refresh)

2. **Clear App Data**:
   ```
   Settings → Apps → CaydenJoy → Storage → Clear All Data
   ```
   - Warning: This resets settings too

3. **Reinstall App**:
   - Uninstall
   - Clear app cache in Settings → Apps
   - Reinstall APK

---

## Testing Checklist

After installing APK, verify:

- [ ] App launches without crashing
- [ ] Home page displays
- [ ] Navigation menu works
- [ ] Can navigate to Services page
- [ ] Can navigate to Contact page
- [ ] Can navigate to Settings page
- [ ] Can navigate to FAQ page
- [ ] Can navigate to About page
- [ ] Dark mode toggle works
- [ ] Online/offline badge displays correctly
- [ ] Contact form submits without errors
- [ ] Pages load when offline (after initial online load)
- [ ] App doesn't redirect to external websites

---

## Advanced Debugging

### Using ADB (Android Debug Bridge)

```powershell
# Connect device via USB
# Enable USB debugging: Settings → Developer options → USB debugging

# Install APK via command line:
adb install -r path\to\caydenjoypwa-release.apk

# View app logs:
adb logcat | findstr "CaydenJoy"

# Clear app data:
adb shell pm clear com.caydendev.caydenjoypwa

# Uninstall app:
adb uninstall com.caydendev.caydenjoypwa

# Check installed packages:
adb shell pm list packages | findstr "cayden"
```

### Using Chrome DevTools (for web debugging)

1. On desktop Chrome:
   - Go to `chrome://inspect`
   - Enable "Discover USB devices"
2. Connect Android device via USB
3. Enable USB debugging on device
4. Open app on device
5. Device should appear in Chrome inspect
6. Click "Inspect" to debug

---

## If All Else Fails

### Regenerate APK Completely

1. Delete old APK from device
2. Wait 24 hours (PWABuilder cache clears)
3. Visit https://www.pwabuilder.com
4. Enter URL: `https://github.com/dallas8000-ops/CaydenJoy`
5. Generate new APK
6. Download and test

### Contact Support

If issues persist:
- PWABuilder: https://docs.pwabuilder.com/
- Android Issues: Check `adb logcat` output
- Device manufacturer support

---

## Success! 🎉

Once APK loads and app displays:
1. ✅ Test all features
2. ✅ Try offline mode
3. ✅ Share with users
4. ✅ Deploy to Google Play or Facebook
