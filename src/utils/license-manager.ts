/**
 * License/Upgrade Code Manager
 * Handles tiered upgrade codes and local one-time redemption.
 *
 * Note: an APK alone cannot enforce one-time use across every device. This
 * prevents reusing a key on the same install. Global one-time enforcement needs
 * Google Play Billing or a small activation server.
 */

export type LicenseTier = 'family' | 'learning' | 'allAccess';

export interface LicenseStatus {
  isUpgraded: boolean;
  tier: LicenseTier | 'none';
  upgradeDate?: number;
  upgradeCode?: string;
}

type UpgradeCodeValidation =
  | { valid: true; tier: LicenseTier; normalizedCode: string }
  | { valid: false; reason: string };

const LICENSE_STORAGE_KEY = 'caydenjoy_license_status';
const REDEEMED_CODES_KEY = 'caydenjoy_redeemed_upgrade_codes';
const CODE_SALT = 'CAYDENJOY-APK-UPGRADE-2026';

const TIER_PREFIXES: Record<string, LicenseTier> = {
  CJF: 'family',
  CJL: 'learning',
  CJA: 'allAccess',
};

// Legacy codes remain supported as All Access, but are still marked as redeemed
// after use on the device.
const LEGACY_UPGRADE_CODES = [
  'CyberCop3158',
  'CAYDENJOY-PREMIUM-2024',
  'CAYDENJOY-UNLOCK-ALL',
  'PREMIUM-UNLOCK-2025',
  'TEST-CODE-001',
  'EVAL-VERSION-2026',
  'DEMO-FULL-ACCESS',
  'TRIAL-UNLIMITED',
  'SPECIAL-OFFER-50'
].map(code => code.toUpperCase());

export class LicenseManager {
  private static instance: LicenseManager;
  private lastError = '';

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
    isUpgraded: false,
    tier: 'none'
  };

  static normalizeCode(code: string): string {
    return code.trim().toUpperCase().replace(/\s+/g, '').replace(/_/g, '-');
  }

  static hashCode(value: string): string {
    let hash = 2166136261;
    for (let index = 0; index < value.length; index += 1) {
      hash ^= value.charCodeAt(index);
      hash = Math.imul(hash, 16777619);
    }
    return (hash >>> 0).toString(36).toUpperCase().padStart(7, '0');
  }

  static checksumFor(prefix: string, serial: string): string {
    return LicenseManager.hashCode(`${CODE_SALT}:${prefix}:${serial}`).slice(0, 5);
  }

  private loadLicense(): void {
    try {
      const stored = localStorage.getItem(LICENSE_STORAGE_KEY);
      if (stored) {
        this.status = { tier: 'none', ...JSON.parse(stored) };
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

  private getRedeemedCodeHashes(): string[] {
    try {
      const stored = localStorage.getItem(REDEEMED_CODES_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      console.error('Error loading redeemed upgrade codes:', e);
      return [];
    }
  }

  private markCodeRedeemed(code: string): void {
    const hash = LicenseManager.hashCode(code);
    const redeemed = new Set(this.getRedeemedCodeHashes());
    redeemed.add(hash);
    localStorage.setItem(REDEEMED_CODES_KEY, JSON.stringify([...redeemed]));
  }

  private hasCodeBeenRedeemed(code: string): boolean {
    return this.getRedeemedCodeHashes().includes(LicenseManager.hashCode(code));
  }

  private validateGeneratedCode(normalizedCode: string): UpgradeCodeValidation {
    const parts = normalizedCode.split('-');
    if (parts.length !== 4) {
      return { valid: false, reason: 'Code format should look like CJA-XXXX-XXXX-XXXXX' };
    }

    const [prefix, first, second, checksum] = parts;
    const tier = TIER_PREFIXES[prefix];
    if (!tier) {
      return { valid: false, reason: 'Unknown upgrade tier prefix' };
    }

    const serial = `${first}-${second}`;
    const expectedChecksum = LicenseManager.checksumFor(prefix, serial);
    if (checksum !== expectedChecksum) {
      return { valid: false, reason: 'Upgrade key checksum does not match' };
    }

    return { valid: true, tier, normalizedCode };
  }

  private validateUpgradeCode(code: string): UpgradeCodeValidation {
    const normalizedCode = LicenseManager.normalizeCode(code);

    if (LEGACY_UPGRADE_CODES.includes(normalizedCode)) {
      return { valid: true, tier: 'allAccess', normalizedCode };
    }

    return this.validateGeneratedCode(normalizedCode);
  }

  /**
   * Verify and apply an upgrade code.
   * @param code The upgrade code entered by user.
   * @returns true if code is valid and upgrade successful, false otherwise.
   */
  verifyAndApplyCode(code: string): boolean {
    this.lastError = '';
    const result = this.validateUpgradeCode(code);

    if (!result.valid) {
      this.lastError = result.reason;
      return false;
    }

    if (this.hasCodeBeenRedeemed(result.normalizedCode)) {
      this.lastError = 'This upgrade key has already been redeemed on this device';
      return false;
    }

    this.status.isUpgraded = true;
    this.status.tier = result.tier;
    this.status.upgradeDate = Date.now();
    this.status.upgradeCode = result.normalizedCode;
    this.markCodeRedeemed(result.normalizedCode);
    this.saveLicense();

    return true;
  }

  getLastError(): string {
    return this.lastError;
  }

  isUpgraded(): boolean {
    return this.status.isUpgraded;
  }

  getTier(): LicenseTier | 'none' {
    return this.status.tier ?? 'none';
  }

  getUpgradeCode(): string | undefined {
    return this.status.upgradeCode;
  }

  getUpgradeDate(): number | undefined {
    return this.status.upgradeDate;
  }

  resetLicense(): void {
    this.status = {
      isUpgraded: false,
      tier: 'none'
    };
    this.lastError = '';
    localStorage.removeItem(LICENSE_STORAGE_KEY);
  }
}
