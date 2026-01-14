# Android SDK Configuration Fix Guide

## Changes Made

I've updated your Android build configuration to resolve AAB and APK build issues with proper SDK compatibility.

### 1. **Gradle Plugin Update** (`android/build.gradle`)
- Updated from `gradle:8.13.0` → `gradle:8.6.0`
- This is the stable version compatible with Build-Tools 35

### 2. **SDK Versions Alignment** (`android/variables.gradle`)
- `compileSdk`: 36 → **35** (matches your installed Build-Tools)
- `targetSdk`: 36 → **35**
- Added `buildToolsVersion = '35.0.0'` for explicit configuration

### 3. **Enhanced Gradle Configuration** (`android/gradle.properties`)
- Increased JVM memory: `1536m` → `2560m`
- Added parallel build support: `org.gradle.parallel=true`
- Enabled gradle daemon for faster builds
- Added build caching

### 4. **App Build Configuration** (`android/app/build.gradle`)
- Added `buildToolsVersion` reference
- Changed ProGuard rules to `proguard-android-optimize.txt`
- Added release signing configuration
- Added debug configuration for development

## Next Steps

### Option 1: Create a Keystore (Recommended for Release Builds)

Run this command in PowerShell from the `android/app/` directory:

```powershell
keytool -genkey -v -keystore caydenjoy.keystore -keyalg RSA -keysize 2048 -validity 10000 -alias caydenjoy
```

Then set environment variables before building:
```powershell
$env:KEYSTORE_PASSWORD = "your-password"
$env:KEY_ALIAS = "caydenjoy"
$env:KEY_PASSWORD = "your-password"
```

### Option 2: Use Environment Variables for CI/CD

Set these in your system or build environment:
- `KEYSTORE_PASSWORD` - Password for the keystore
- `KEY_ALIAS` - Key alias name
- `KEY_PASSWORD` - Key password

### For Testing (Debug Build)

```powershell
# Navigate to project root
cd c:\CaydenJoy\CaydenJoy

# Build APK
.\android\gradlew.bat assembleDebug -p android

# Build AAB (for Google Play)
.\android\gradlew.bat bundleRelease -p android
```

## Troubleshooting

### If you get "SDK not found" errors:
1. Verify `C:\Android\sdk\platforms\android-35` exists
2. Verify `C:\Android\sdk\build-tools\35.0.0` exists
3. Run Android Studio SDK Manager to install if missing

### If builds still fail:
1. Clear gradle cache: `.\android\gradlew.bat clean -p android`
2. Invalidate gradle cache: Delete `.gradle` folder in project root
3. Update JAVA_HOME if needed

### For AAB issues specifically:
- Ensure you have a valid signing configuration
- Use `bundleRelease` task instead of `assembleRelease`
- Verify your app is properly bundled with all required files

## Gradle Wrapper Info

Your project uses Gradle Wrapper which handles version management automatically. The `gradlew.bat` script in the android folder will use the correct Gradle version.

## Additional Resources

- [Android Gradle Plugin Release Notes](https://developer.android.com/studio/releases/gradle-plugin)
- [Build Tools Release Notes](https://developer.android.com/studio/releases/build-tools)
- [Configure Signing](https://developer.android.com/studio/publish/app-signing)
