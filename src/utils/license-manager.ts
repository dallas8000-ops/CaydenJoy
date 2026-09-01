/**
 * License/Upgrade Code Manager
 * Handles tiered upgrade codes and local one-time redemption.
 *
 * SECURITY: Code validity is verified server-side (see server/stripe-server.js,
 * POST /api/verify-code). The checksum algorithm and legacy code list must never
 * live in this file or any other client-bundled module — this file used to embed
 * both directly, which let anyone read the shipped JS bundle and mint unlimited
 * valid upgrade keys offline. Do not reintroduce that pattern.
 *
 * Note: redemption ("has this code been used") is still tracked only in
 * localStorage on this device. An APK/PWA install alone cannot enforce
 * one-time use across every device/install. Global one-time enforcement needs
 * the server to persist redeemed codes (see PROJECT_STATUS roadmap).
 */

export type LicenseTier = 'family' | 'learning' | 'allAccess';

export interface LicenseStatus {
  isUpgraded: boolean;
  tier: LicenseTier | 'none';
  upgradeDate?: number;
  upgradeCode?: string;
}

interface ServerVerifyResponse {
  valid: boolean;
  tier?: LicenseTier;
  normalizedCode?: string;
  reason?: string;
}

const LICENSE_STORAGE_KEY = 'caydenjoy_license_status';
const REDEEMED_CODES_KEY = 'caydenjoy_redeemed_upgrade_codes';

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

  private get verifyEndpoint(): string {
    const base = String((import.meta as any).env.VITE_STRIPE_API_BASE || '').replace(/\/$/, '');
    return base ? `${base}/api/verify-code` : '';
  }

  static normalizeCode(code: string): string {
    return code.trim().toUpperCase().replace(/\s+/g, '').replace(/_/g, '-');
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

  private getRedeemedCodes(): string[] {
    try {
      const stored = localStorage.getItem(REDEEMED_CODES_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      console.error('Error loading redeemed upgrade codes:', e);
      return [];
    }
  }

  private markCodeRedeemed(normalizedCode: string): void {
    const redeemed = new Set(this.getRedeemedCodes());
    redeemed.add(normalizedCode);
    localStorage.setItem(REDEEMED_CODES_KEY, JSON.stringify([...redeemed]));
  }

  private hasCodeBeenRedeemed(normalizedCode: string): boolean {
    return this.getRedeemedCodes().includes(normalizedCode);
  }

  /**
   * Verify a code against the server and, if valid and unused on this device,
   * apply the upgrade. Async because validity is no longer computable client-side.
   */
  async verifyAndApplyCode(code: string): Promise<boolean> {
    this.lastError = '';

    if (!code.trim()) {
      this.lastError = 'Please enter an upgrade code';
      return false;
    }

    const endpoint = this.verifyEndpoint;
    if (!endpoint) {
      this.lastError = 'Upgrade verification is not configured for this build.';
      return false;
    }

    const normalizedCode = LicenseManager.normalizeCode(code);

    if (this.hasCodeBeenRedeemed(normalizedCode)) {
      this.lastError = 'This upgrade key has already been redeemed on this device';
      return false;
    }

    let result: ServerVerifyResponse;
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: normalizedCode }),
      });
      result = await response.json();
    } catch (e) {
      console.error('Error verifying upgrade code:', e);
      this.lastError = 'Could not reach the server to verify your code. Check your connection and try again.';
      return false;
    }

    if (!result.valid || !result.tier) {
      this.lastError = result.reason || 'Invalid upgrade code. Please check and try again.';
      return false;
    }

    this.status.isUpgraded = true;
    this.status.tier = result.tier;
    this.status.upgradeDate = Date.now();
    this.status.upgradeCode = result.normalizedCode || normalizedCode;
    this.markCodeRedeemed(result.normalizedCode || normalizedCode);
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
