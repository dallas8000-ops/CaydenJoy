# CaydenJoy - Test Tablet Installation Methods

## 🔑 Premium Code
**`CyberCop3158`** - Use this to unlock all premium features

---

## 📱 Method 1: Web App (Easiest - No APK Needed)

### Deploy to Azure Static Web App (Already Configured)

1. **Build the tablet version**
   ```bash
   npm run build-tablet
   ```

2. **Deploy to Azure**
   ```bash
   npm run deploy
   ```

3. **Access on Tablet**
   - Go to your deployed URL in tablet browser
   - Click "Install" (browser will prompt to install as app)
   - Or use the menu → "Add to Home Screen"

**Benefits:**
- ✅ Instant updates
- ✅ No APK upload needed
- ✅ Works on any device with browser
- ✅ All features unlocked

---

## 📦 Method 2: Build APK (Requires Android SDK)

### Quick Setup

1. **Install Android SDK** (one-time setup)
   ```bash
   # Download Android SDK from: https://developer.android.com/studio
   # Or use: `choco install android-sdk` (if using Chocolatey)
   ```

2. **Update bubblewrap config** (`bubblewrap.json`)
   ```json
   {
     "android_sdk_path": "C:\\Android\\sdk",
     ...
   }
   ```

3. **Build APK**
   ```bash
   cd c:\CaydenJoy\CaydenJoy
   bubblewrap build
   ```

4. **Result:** `app-release.apk` in current directory

5. **Transfer to Tablet**
   - USB cable: Drag APK to tablet storage
   - ADB: `adb install app-release.apk`
   - Cloud: Upload to Drive, download on tablet

---

## 🌐 Method 3: Progressive Web App (PWA) - Recommended

### Fastest Way to Test

1. **Run dev server locally**
   ```bash
   npm run dev-server
   ```

2. **Access on tablet** (same network)
   ```
   http://<your-computer-ip>:5173/
   ```

3. **Install as app**
   - Chrome menu → "Install app"
   - Or: "Add to Home Screen"

4. **Offline ready** - Works without internet connection

---

## 🚀 Method 4: Microsoft Teams or SharePoint

If you have Microsoft 365:

1. Upload `dist/` folder to SharePoint
2. Share link with tablet
3. Open in browser
4. Install as PWA

---

## 💾 Current Build Status

### Tablet Build Ready ✅
- Location: `c:\CaydenJoy\CaydenJoy\dist\`
- Size: ~3.5 MB
- Status: All features unlocked
- Dev Mode: VITE_DEV_MODE=true

### How to Access Files
```bash
# List build files
dir dist

# Check file sizes
ls -la dist
```

---

## 🎯 Recommended Quick Test

**Step 1:** Run dev server
```bash
cd c:\CaydenJoy\CaydenJoy
npm run dev-server
```

**Step 2:** Get your IP address
```powershell
ipconfig | Select-String "IPv4"
# Example output: 192.168.1.100
```

**Step 3:** Access on tablet
```
http://192.168.1.100:5173/
```

**Step 4:** Install as PWA
- Chrome menu → "Install CaydenJoy"
- Now works offline with all features!

---

## 📊 Comparison Table

| Method | Setup Time | Testing Speed | Mobile Ready | Offline |
|--------|-----------|--------------|------------|---------|
| Web App (Local) | 2 min | Instant | Yes | No |
| PWA (Local) | 2 min | Instant | Yes | Yes |
| Azure Deployed | 5 min | Instant | Yes | Yes |
| APK (w/ SDK) | 30 min | Good | Yes | Yes |

---

## 🔄 Testing Workflow

### Option A: Local Testing (Quickest)
```bash
npm run dev-server
# Open on tablet: http://your-ip:5173
# Test all features (auto-unlocked)
```

### Option B: Cloud Testing (Best for iteration)
```bash
npm run build-tablet
npm run deploy
# Open deployed URL on tablet
# Features auto-unlocked
```

### Option C: APK Testing (Final validation)
```bash
npm run build-tablet
# Build APK (requires Android SDK)
# Install on tablet
# Test everything offline
```

---

## 🧪 Testing Checklist

- [ ] App loads on tablet
- [ ] All pages accessible (Communication, Foods, Colors, etc.)
- [ ] Tabs work on each page
- [ ] Icons properly sized
- [ ] Speech synthesis works
- [ ] Offline functionality works (PWA)
- [ ] Premium features unlocked
- [ ] Try upgrade code `CyberCop3158` on standard build

---

## 📲 Next Steps

**Choose your preferred method above and follow the steps.**

For fastest results: **Use Method 1 or 3** (no SDK needed, instant testing)

Need help? Check the detailed guides:
- `TABLET_APK_INSTALLATION.md` - For APK method
- `UPGRADE_SYSTEM.md` - For upgrade code details
- `TABLET_BUILD_GUIDE.md` - For build configuration
