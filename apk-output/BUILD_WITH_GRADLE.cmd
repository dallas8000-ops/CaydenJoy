@echo off
REM Build APK using Gradle
cd /d C:\CaydenJoy\CaydenJoy\android
echo Building APK with Gradle...
echo This requires network access to download Gradle dependencies
.\gradlew.bat assembleRelease
if exist app\build\outputs\apk\release\app-release.apk (
    echo.
    echo SUCCESS! APK created at:
    echo app\build\outputs\apk\release\app-release.apk
    pause
) else (
    echo.
    echo Build failed. Check error messages above.
    pause
)
