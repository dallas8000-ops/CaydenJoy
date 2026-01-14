@echo off
REM Install OpenJDK 17 for Android Development
REM Download from: https://github.com/adoptium/temurin17-binaries/releases/download/jdk-17.0.9%2B9/OpenJDK17U-jdk_x64_windows_hotspot_17.0.9_9.msi

echo.
echo ============================================
echo Installing OpenJDK 17 (Required for APK build)
echo ============================================
echo.
echo Step 1: Download the installer from:
echo https://github.com/adoptium/temurin17-binaries/releases/download/jdk-17.0.9%2B9/OpenJDK17U-jdk_x64_windows_hotspot_17.0.9_9.msi
echo.
echo Step 2: Run the installer (click Next, accept defaults)
echo.
echo Step 3: After installation, verify with:
echo   java -version
echo.
echo Quick Install (PowerShell - Run as Admin):
echo ============================================
echo Invoke-WebRequest -Uri "https://github.com/adoptium/temurin17-binaries/releases/download/jdk-17.0.9%%2B9/OpenJDK17U-jdk_x64_windows_hotspot_17.0.9_9.msi" -OutFile "$env:TEMP\java17.msi"
echo Start-Process "$env:TEMP\java17.msi" -Wait
echo.
pause
