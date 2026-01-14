/**
 * Premium Feature Manager
 * Handles premium feature access control based on license status
 */

import { LicenseManager } from './license-manager.js';

export interface PremiumStatus {
  isPremium: boolean;
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
    features: {
      customImages: false,
      voiceCustomization: false,
      cloudBackup: false,
      additionalTabs: false
    }
  };

  private loadStatus(): void {
    try {
      // Check if upgraded via license code
      if (this.licenseManager.isUpgraded()) {
        console.log('[LICENSE] App upgraded via license code');
        this.status.isPremium = true;
        this.status.features.customImages = true;
        this.status.features.voiceCustomization = true;
        this.status.features.cloudBackup = true;
        this.status.features.additionalTabs = true;
        return;
      }

      // Development mode: automatically unlock all premium features
      if (DEV_MODE_ENABLED) {
        console.log('[DEV MODE] Premium features automatically unlocked');
        this.status.isPremium = true;
        this.status.features.customImages = true;
        this.status.features.voiceCustomization = true;
        this.status.features.cloudBackup = true;
        this.status.features.additionalTabs = true;
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

  // Simulate purchase (in real app, this would be handled by Google Play Billing)
  simulatePremiumPurchase(): void {
    this.status.isPremium = true;
    this.status.purchaseDate = Date.now();
    this.status.features.customImages = true;
    this.status.features.voiceCustomization = true;
    this.status.features.cloudBackup = true;
    this.status.features.additionalTabs = true;
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
    this.status.isPremium = true;
    this.status.features.customImages = true;
    this.status.features.voiceCustomization = true;
    this.status.features.cloudBackup = true;
    this.status.features.additionalTabs = true;
  }

  resetPremium(): void {
    localStorage.removeItem(STORAGE_KEY);
    this.status = {
      isPremium: false,
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
