@echo off
REM CaydenJoy Android Build Script
REM This script sets up Java 17 and builds the Android app

echo.
echo ============================================
echo CaydenJoy Android Builder
echo ============================================
echo.

REM Set Java 17 path
set JAVA_HOME=C:\Program Files\Eclipse Adoptium\jdk-17.0.17.10-hotspot
set PATH=%JAVA_HOME%\bin;%PATH%

REM Navigate to android folder
cd /d "%~dp0android"

REM Check which build type
if "%1"=="debug" (
    echo Building Debug APK...
    echo.
    call gradlew.bat assembleDebug
    if errorlevel 1 (
        echo ERROR: Debug build failed
        exit /b 1
    )
    echo.
    echo DEBUG APK READY:
    echo Location: app\build\outputs\apk\debug\app-debug.apk
) else if "%1"=="release" (
    echo Building Release AAB...
    echo.
    call gradlew.bat bundleRelease -x lint
    if errorlevel 1 (
        echo ERROR: Release build failed
        exit /b 1
    )
    echo.
    echo RELEASE AAB READY:
    echo Location: app\build\outputs\bundle\release\app-release.aab
) else (
    echo Usage: build.bat [debug ^| release]
    echo.
    echo Examples:
    echo   build.bat debug     - Build debug APK
    echo   build.bat release   - Build release AAB
    exit /b 1
)

echo.
echo Build completed successfully!
pause
