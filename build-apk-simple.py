#!/usr/bin/env python3
"""
Simple APK builder for CaydenJoy web app
This creates a basic Android wrapper for the web application
"""

import os
import json
import shutil
import zipfile
from pathlib import Path

def create_apk_wrapper():
    """Create a simple APK wrapper using existing tools"""
    
    base_dir = Path(__file__).parent
    dist_dir = base_dir / 'dist'
    output_dir = base_dir / 'apk-output'
    
    # Create output directory
    output_dir.mkdir(exist_ok=True)
    
    print("📦 CaydenJoy APK Builder")
    print("=" * 50)
    
    # Check if dist folder exists
    if not dist_dir.exists():
        print("❌ ERROR: dist/ folder not found!")
        print("   Run 'npm run build-tablet' first")
        return False
    
    print(f"✅ Found dist/ folder: {dist_dir}")
    
    # For now, create a simple download instruction file
    instructions = """
# How to Build APK

Since your Android SDK installation is incomplete, here are your options:

## Option 1: Use Android Studio GUI (Recommended)
1. Open Android Studio
2. File → Open → C:\\CaydenJoy\\CaydenJoy\\android
3. Wait for Gradle sync
4. Build → Build Bundle(s) / APK(s) → Build APK(s)
5. APK will be in: android/app/build/outputs/apk/release/

## Option 2: Quick APK via Web
Use this online APK builder:
https://apkbuilder.com/ or https://www.apkbuilder.app/

Steps:
1. Zip your dist/ folder
2. Upload to the website
3. Download generated APK

## Option 3: Install Required SDK Components
Run these commands:

```powershell
# Set SDK path
$env:ANDROID_SDK_ROOT = 'C:\\Android\\sdk'

# Download and extract cmdline-tools properly
# Then use sdkmanager to install:
# sdkmanager "platforms;android-34" "build-tools;34.0.0" "ndk;26.1.10909125"
```

## Current Build Status
- Web app: ✅ Built in dist/
- Capacitor Android: ✅ Created in android/
- Gradle: Ready but needs network/SDK components
- Bubblewrap: Ready but needs complete SDK

## Quick Test
Instead of APK, test on your tablet with:
```bash
npm run dev-server
# Then visit: http://your-computer-ip:5173/
# Or install as PWA from the browser
```
"""
    
    instr_file = output_dir / 'APK_BUILD_INSTRUCTIONS.md'
    instr_file.write_text(instructions, encoding='utf-8')
    print(f"Created: {instr_file}")
    
    # Create a zip of the dist folder for web APK builders
    zip_path = output_dir / 'caydenjoy-web-build.zip'
    print(f"\n📦 Creating web archive: {zip_path}")
    
    with zipfile.ZipFile(zip_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
        for root, dirs, files in os.walk(dist_dir):
            for file in files:
                file_path = Path(root) / file
                arcname = file_path.relative_to(dist_dir)
                zipf.write(file_path, arcname)
    
    print(f"✅ Archive created: {zip_path}")
    
    # Create gradle build script
    gradle_script = output_dir / 'BUILD_WITH_GRADLE.cmd'
    gradle_cmd = """@echo off
REM Build APK using Gradle
cd /d C:\\CaydenJoy\\CaydenJoy\\android
echo Building APK with Gradle...
echo This requires network access to download Gradle dependencies
.\\gradlew.bat assembleRelease
if exist app\\build\\outputs\\apk\\release\\app-release.apk (
    echo.
    echo SUCCESS! APK created at:
    echo app\\build\\outputs\\apk\\release\\app-release.apk
    pause
) else (
    echo.
    echo Build failed. Check error messages above.
    pause
)
"""
    gradle_script.write_text(gradle_cmd)
    print(f"✅ Created Gradle build script: {gradle_script}")
    
    # Summary
    print("\n" + "=" * 50)
    print("📋 Summary:")
    print(f"  • Output folder: {output_dir}")
    print(f"  • Web archive: {zip_path}")
    print(f"  • Instructions: {instr_file}")
    print(f"  • Gradle script: {gradle_script}")
    print("\n⏭️  Next steps:")
    print("  1. Read APK_BUILD_INSTRUCTIONS.md")
    print("  2. Try Android Studio GUI (easiest)")
    print("  3. Or run BUILD_WITH_GRADLE.cmd (needs network)")
    print("=" * 50)
    
    return True

if __name__ == '__main__':
    success = create_apk_wrapper()
    exit(0 if success else 1)
