/**
 * License/Upgrade Code Manager
 * Manages upgrade codes that unlock premium features
 */

export interface LicenseStatus {
  isUpgraded: boolean;
  upgradeDate?: number;
  upgradeCode?: string;
}

const LICENSE_STORAGE_KEY = 'caydenjoy_license_status';

// Valid upgrade codes (in production, these would be validated against a server)
const VALID_UPGRADE_CODES = [
  'CyberCop3158',
  'CAYDENJOY-PREMIUM-2024',
  'CAYDENJOY-UNLOCK-ALL',
  'PREMIUM-UNLOCK-2025',
  'TEST-CODE-001',
  'EVAL-VERSION-2026',
  'DEMO-FULL-ACCESS',
  'TRIAL-UNLIMITED',
  'SPECIAL-OFFER-50'
];

export class LicenseManager {
  private static instance: LicenseManager;

  private constructor() {
    this.loadLicense();
  }

  static getInstance(): LicenseManager {
    if (!LicenseManager.instance) {
      LicenseManager.instance = new LicenseManager();
    }
    return LicenseManager.instance;
  }

  private status: LicenseStatus = {
    isUpgraded: false
  };

  private loadLicense(): void {
    try {
      const stored = localStorage.getItem(LICENSE_STORAGE_KEY);
      if (stored) {
        this.status = JSON.parse(stored);
      }
    } catch (e) {
      console.error('Error loading license status:', e);
    }
  }

  private saveLicense(): void {
    try {
      localStorage.setItem(LICENSE_STORAGE_KEY, JSON.stringify(this.status));
    } catch (e) {
      console.error('Error saving license status:', e);
    }
  }

  /**
   * Verify and apply an upgrade code
   * @param code The upgrade code entered by user
   * @returns true if code is valid and upgrade successful, false otherwise
   */
  verifyAndApplyCode(code: string): boolean {
    // Normalize the code (uppercase, trim whitespace)
    const normalizedCode = code.trim().toUpperCase();

    // Check if it's a valid code
    if (!VALID_UPGRADE_CODES.includes(normalizedCode)) {
      return false;
    }

    // Apply the upgrade
    this.status.isUpgraded = true;
    this.status.upgradeDate = Date.now();
    this.status.upgradeCode = normalizedCode;
    this.saveLicense();

    return true;
  }

  /**
   * Check if app has been upgraded
   */
  isUpgraded(): boolean {
    return this.status.isUpgraded;
  }

  /**
   * Get the upgrade code (for admin/verification purposes)
   */
  getUpgradeCode(): string | undefined {
    return this.status.upgradeCode;
  }

  /**
   * Get upgrade date
   */
  getUpgradeDate(): number | undefined {
    return this.status.upgradeDate;
  }

  /**
   * Reset license (for testing)
   */
  resetLicense(): void {
    this.status = {
      isUpgraded: false
    };
    localStorage.removeItem(LICENSE_STORAGE_KEY);
  }
}
