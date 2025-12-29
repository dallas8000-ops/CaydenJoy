/**
 * Premium Feature Manager
 * Handles in-app purchase status and premium features
 */

export interface PremiumStatus {
  isPremium: boolean;
  purchaseDate?: number;
  features: {
    customImages: boolean;
    voiceCustomization: boolean;
    cloudBackup: boolean;
  };
}

const STORAGE_KEY = 'caydenjoy_premium_status';
const PREMIUM_FEATURE_KEY = 'caydenjoy_premium_unlocked';

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
    features: {
      customImages: false,
      voiceCustomization: false,
      cloudBackup: false
    }
  };

  private loadStatus(): void {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        this.status = JSON.parse(stored);
      } else {
        // Check if premium was unlocked (for testing/development)
        const unlocked = localStorage.getItem(PREMIUM_FEATURE_KEY);
        if (unlocked === 'true') {
          this.status.isPremium = true;
          this.status.features.customImages = true;
          this.status.features.voiceCustomization = true;
          this.status.features.cloudBackup = true;
        }
      }
    } catch (e) {
      console.error('Error loading premium status:', e);
    }
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

  // Simulate purchase (in real app, this would be handled by Google Play Billing)
  simulatePremiumPurchase(): void {
    this.status.isPremium = true;
    this.status.purchaseDate = Date.now();
    this.status.features.customImages = true;
    this.status.features.voiceCustomization = true;
    this.status.features.cloudBackup = true;
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
    localStorage.setItem(PREMIUM_FEATURE_KEY, 'true');
    this.simulatePremiumPurchase();
  }

  resetPremium(): void {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(PREMIUM_FEATURE_KEY);
    this.status = {
      isPremium: false,
      features: {
        customImages: false,
        voiceCustomization: false,
        cloudBackup: false
      }
    };
  }
}

export default PremiumManager.getInstance();
