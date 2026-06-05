/**
 * Premium Feature Manager
 * Handles premium feature access control based on license status
 */

import { LicenseManager } from './license-manager.js';

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
const DEV_MODE_ENABLED = (import.meta as any).env.VITE_DEV_MODE === 'true';

export class PremiumManager {
  private static instance: PremiumManager;
  private licenseManager = LicenseManager.getInstance();

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

      // Check if upgraded via license code
      if (this.licenseManager.isUpgraded()) {
        console.log('[LICENSE] App upgraded via license code');
        const licenseTier = this.licenseManager.getTier();
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
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        this.status = JSON.parse(stored);
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

    if (tier === 'learning') {
      status.features.customImages = true;
      status.features.cloudBackup = true;
      status.features.additionalTabs = true;
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
