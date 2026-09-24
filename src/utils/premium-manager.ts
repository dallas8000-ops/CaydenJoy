/**
 * Premium Feature Manager
 * Handles premium feature access control based on license status
 */

import { LicenseManager } from './license-manager.js';
import { IS_PLAY_BUILD, IS_DEV_MODE } from './store-config';
import { isPlayBillingAvailable, queryOwnedTier } from './play-billing';

export type PremiumTier = 'none' | 'family' | 'learning' | 'allAccess';

export interface PremiumStatus {
  isPremium: boolean;
  tier: PremiumTier;
  purchaseDate?: number;
  features: {
    customImages: boolean;
    voiceCustomization: boolean;
    cloudBackup: boolean;
    additionalTabs: boolean;
  };
}

const STORAGE_KEY = 'caydenjoy_premium_status';
const DEV_MODE_ENABLED = IS_DEV_MODE;
export const PREMIUM_CHANGED_EVENT = 'caydenjoy-premium-changed';

export class PremiumManager {
  private static instance: PremiumManager;

  private constructor() {
    this.loadStatus();
  }

  static getInstance(): PremiumManager {
    if (!PremiumManager.instance) {
      PremiumManager.instance = new PremiumManager();
    }
    return PremiumManager.instance;
  }

  private status: PremiumStatus = {
    isPremium: false,
    tier: 'none',
    features: {
      customImages: false,
      voiceCustomization: false,
      cloudBackup: false,
      additionalTabs: false
    }
  };

  private loadStatus(): void {
    try {
      this.status = {
        isPremium: false,
        tier: 'none',
        features: {
          customImages: false,
          voiceCustomization: false,
          cloudBackup: false,
          additionalTabs: false
        }
      };

      // Upgrade keys are a direct-sale (Stripe) feature only. The Play build
      // must never unlock from a key: Play Billing is the only entitlement source.
      const licenseManager = IS_PLAY_BUILD ? null : LicenseManager.getInstance();
      if (licenseManager && licenseManager.isUpgraded()) {
        console.log('[LICENSE] App upgraded via license code');
        const licenseTier = licenseManager.getTier();
        this.status = this.createStatusForTier(licenseTier === 'none' ? 'allAccess' : licenseTier);
        return;
      }

      // Development mode: automatically unlock all premium features
      if (DEV_MODE_ENABLED) {
        console.log('[DEV MODE] Premium features automatically unlocked');
        this.status = this.createStatusForTier('allAccess');
        return;
      }

      // Default: no premium features
      // Cached tier (written only by a verified Play purchase sync or dev tools).
      // Features are always re-derived from the tier, so a stale or hand-edited
      // features object can never grant more than the tier allows.
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const tier = (JSON.parse(stored)?.tier ?? 'none') as PremiumTier;
        const valid: PremiumTier[] = ['none', 'family', 'learning', 'allAccess'];
        this.status = this.createStatusForTier(valid.includes(tier) ? tier : 'none');
      }
    } catch (e) {
      console.error('Error loading premium status:', e);
    }
  }

  /**
   * Refresh premium status (call after license verification)
   */
  refreshStatus(): void {
    this.loadStatus();
  }

  /**
   * Play build: re-read owned purchases from Google Play and make them the
   * entitlement (grants new purchases, revokes refunds). No-op elsewhere.
   * Network/Play errors keep the cached tier so the app still works offline.
   */
  async syncWithPlay(): Promise<PremiumTier> {
    if (!IS_PLAY_BUILD || DEV_MODE_ENABLED || !isPlayBillingAvailable()) return this.getTier();
    try {
      this.applyStoreTier(await queryOwnedTier());
    } catch (e) {
      console.warn('[BILLING] Could not sync purchases from Google Play; keeping cached tier.', e);
    }
    return this.getTier();
  }

  /** Persist a tier confirmed by Google Play and notify the UI. */
  applyStoreTier(tier: PremiumTier): void {
    const previous = this.status.tier;
    this.status = this.createStatusForTier(tier);
    if (tier === 'none') {
      localStorage.removeItem(STORAGE_KEY);
    } else {
      this.saveStatus();
    }
    if (previous !== tier) {
      window.dispatchEvent(new CustomEvent(PREMIUM_CHANGED_EVENT, { detail: { tier } }));
    }
  }

  getStatus(): PremiumStatus {
    return { ...this.status };
  }

  getTier(): PremiumTier {
    return this.status.tier ?? 'none';
  }

  isPremium(): boolean {
    return this.status.isPremium;
  }

  hasFeature(feature: keyof PremiumStatus['features']): boolean {
    return this.status.features[feature] || false;
  }

  canUseCustomImages(): boolean {
    return this.hasFeature('customImages');
  }

  canCustomizeVoice(): boolean {
    return this.hasFeature('voiceCustomization');
  }

  canUseCloudBackup(): boolean {
    return this.hasFeature('cloudBackup');
  }

  canAddAdditionalTabs(): boolean {
    return this.hasFeature('additionalTabs');
  }

  private createStatusForTier(tier: PremiumTier): PremiumStatus {
    const status: PremiumStatus = {
      isPremium: tier !== 'none',
      tier,
      purchaseDate: tier === 'none' ? undefined : Date.now(),
      features: {
        customImages: false,
        voiceCustomization: false,
        cloudBackup: false,
        additionalTabs: false
      }
    };

    if (tier === 'family') {
      status.features.customImages = true;
    }

    // Learning Plus: Family Photos + voice choice and speaking rate. Tabs, backup, puzzle sessions are All Access only.
    if (tier === 'learning') {
      status.features.customImages = true;
      status.features.voiceCustomization = true;
    }

    if (tier === 'allAccess') {
      status.features.customImages = true;
      status.features.voiceCustomization = true;
      status.features.cloudBackup = true;
      status.features.additionalTabs = true;
    }

    return status;
  }

  // Simulate purchase (in real app, this would be handled by Google Play Billing)
  simulatePremiumPurchase(tier: PremiumTier = 'allAccess'): void {
    // Dev/tablet builds only. Previously any build without a Stripe URL let
    // anyone tap "Simulate Unlock" and get a paid tier for free.
    if (!DEV_MODE_ENABLED) {
      console.warn('[PREMIUM] simulatePremiumPurchase ignored outside dev mode');
      return;
    }
    this.status = this.createStatusForTier(tier);
    this.saveStatus();
  }

  private saveStatus(): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.status));
    } catch (e) {
      console.error('Error saving premium status:', e);
    }
  }

  // For development/testing
  unlockPremium(): void {
    if (!DEV_MODE_ENABLED) return;
    this.status = this.createStatusForTier('allAccess');
    this.saveStatus();
  }

  resetPremium(): void {
    localStorage.removeItem(STORAGE_KEY);
    this.status = {
      isPremium: false,
      tier: 'none',
      features: {
        customImages: false,
        voiceCustomization: false,
        cloudBackup: false,
        additionalTabs: false
      }
    };
  }
}

export default PremiumManager.getInstance();
