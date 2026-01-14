# OpenJDK 17 Installation Script
# Run as Administrator: powershell -ExecutionPolicy Bypass -File install-java17.ps1

Write-Host "======================================" -ForegroundColor Green
Write-Host "OpenJDK 17 Installation for Android Build" -ForegroundColor Green
Write-Host "======================================" -ForegroundColor Green
Write-Host ""

# Check if running as admin
$isAdmin = ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole] "Administrator")

if (-not $isAdmin) {
    Write-Host "ERROR: This script must be run as Administrator!" -ForegroundColor Red
    Write-Host "Right-click PowerShell and select 'Run as Administrator'" -ForegroundColor Yellow
    exit 1
}

Write-Host "Downloading OpenJDK 17..." -ForegroundColor Cyan

# Try multiple mirrors
$urls = @(
    "https://github.com/adoptium/temurin17-binaries/releases/download/jdk-17.0.9%2B9/OpenJDK17U-jdk_x64_windows_hotspot_17.0.9_9.msi",
    "https://adoptium.net/temurin/releases/download/jdk-17.0.9%2B9/OpenJDK17U-jdk_x64_windows_hotspot_17.0.9_9.msi"
)

$installerPath = "$env:TEMP\OpenJDK17-installer.msi"
$downloadSuccess = $false

foreach ($url in $urls) {
    try {
        Write-Host "Trying: $url" -ForegroundColor Gray
        [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor [System.Net.SecurityProtocolType]::Tls12
        Invoke-WebRequest -Uri $url -OutFile $installerPath -UseBasicParsing -TimeoutSec 30 -ErrorAction Stop
        $downloadSuccess = $true
        Write-Host "Downloaded successfully!" -ForegroundColor Green
        break
    } catch {
        Write-Host "Download failed: $($_.Exception.Message)" -ForegroundColor Yellow
    }
}

if (-not $downloadSuccess) {
    Write-Host ""
    Write-Host "Automatic download failed. Please download manually:" -ForegroundColor Red
    Write-Host "URL: https://adoptium.net/temurin/releases/" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Then run:" -ForegroundColor Cyan
    Write-Host "msiexec /i C:\path\to\OpenJDK17U-jdk_x64_windows_hotspot_17.0.9_9.msi" -ForegroundColor White
    exit 1
}

Write-Host ""
Write-Host "Installing OpenJDK 17..." -ForegroundColor Cyan
Write-Host "(This may take a few minutes)" -ForegroundColor Gray
Write-Host ""

try {
    Start-Process -FilePath "msiexec.exe" -ArgumentList "/i `"$installerPath`" /quiet /norestart" -Wait -ErrorAction Stop
    Write-Host "Installation complete!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Verifying installation..." -ForegroundColor Cyan
    Start-Sleep -Seconds 2
    
    # Refresh PATH
    $env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")
    
    java -version
    
    Write-Host ""
    Write-Host "SUCCESS! Java 17 is installed." -ForegroundColor Green
    Write-Host ""
    Write-Host "You can now build your APK:" -ForegroundColor Cyan
    Write-Host "cd c:\CaydenJoy\CaydenJoy\android" -ForegroundColor White
    Write-Host ".\gradlew.bat clean assembleDebug" -ForegroundColor White
    
} catch {
    Write-Host "Installation error: $($_.Exception.Message)" -ForegroundColor Red
    exit 1
}
