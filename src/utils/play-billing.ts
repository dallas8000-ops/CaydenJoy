/**
 * Google Play Billing for the Play Store build.
 *
 * Source of truth for paid tiers in the Play build is Google Play's purchase
 * records (getPurchases), not localStorage. PremiumManager caches the result
 * so the app works offline, and every launch re-syncs from Play, which also
 * revokes refunded purchases.
 *
 * Products are one-time, non-consumable ("inapp") and are auto-acknowledged
 * by the plugin (Play refunds unacknowledged purchases after 3 days).
 */
import { Capacitor } from '@capacitor/core';
import type { PremiumTier } from './premium-manager';

export type PaidTier = Exclude<PremiumTier, 'none'>;

export const PLAY_PRODUCT_IDS: Record<PaidTier, string> = {
  family: 'caydenjoy_family',
  learning: 'caydenjoy_learning',
  allAccess: 'caydenjoy_all_access',
};

const TIER_RANK: Record<PremiumTier, number> = { none: 0, family: 1, learning: 2, allAccess: 3 };

// Android Purchase.PurchaseState.PURCHASED === 1; PENDING (2) must not unlock.
const PURCHASED_STATE = '1';

export interface PlayPrice {
  tier: PaidTier;
  priceString: string;
}

export function highestTier(tiers: PremiumTier[]): PremiumTier {
  return tiers.reduce<PremiumTier>((best, t) => (TIER_RANK[t] > TIER_RANK[best] ? t : best), 'none');
}

export function tierForProductId(productId: string): PaidTier | null {
  const match = (Object.keys(PLAY_PRODUCT_IDS) as PaidTier[]).find((t) => PLAY_PRODUCT_IDS[t] === productId);
  return match ?? null;
}

/** Pure mapping used by sync and by unit tests. */
export function tierFromPurchases(
  purchases: Array<{ productIdentifier: string; purchaseState?: string }>
): PremiumTier {
  const owned = purchases
    // Strict: a missing or PENDING state never unlocks a tier.
    .filter((p) => p.purchaseState === PURCHASED_STATE)
    .map((p) => tierForProductId(p.productIdentifier))
    .filter((t): t is PaidTier => t !== null);
  return highestTier(owned);
}

/** True only inside the native Android app (not the PWA / desktop browser). */
export function isPlayBillingAvailable(): boolean {
  return Capacitor.isNativePlatform() && Capacitor.getPlatform() === 'android';
}

// Lazy import keeps the native plugin out of the web/PWA bundle path.
async function plugin() {
  const mod = await import('@capgo/native-purchases');
  return { NativePurchases: mod.NativePurchases, PURCHASE_TYPE: mod.PURCHASE_TYPE };
}

export async function fetchPlayPrices(): Promise<PlayPrice[]> {
  if (!isPlayBillingAvailable()) return [];
  const { NativePurchases, PURCHASE_TYPE } = await plugin();
  const { products } = await NativePurchases.getProducts({
    productIdentifiers: Object.values(PLAY_PRODUCT_IDS),
    productType: PURCHASE_TYPE.INAPP,
  });
  return products
    .map((p) => ({ tier: tierForProductId(p.identifier), priceString: p.priceString }))
    .filter((p): p is PlayPrice => p.tier !== null);
}

/** Reads owned purchases from Google Play and returns the highest owned tier. */
export async function queryOwnedTier(): Promise<PremiumTier> {
  if (!isPlayBillingAvailable()) return 'none';
  const { NativePurchases, PURCHASE_TYPE } = await plugin();
  const { purchases } = await NativePurchases.getPurchases({ productType: PURCHASE_TYPE.INAPP });
  return tierFromPurchases(purchases);
}

export type PurchaseResult =
  | { status: 'purchased'; tier: PremiumTier }
  | { status: 'pending' }
  | { status: 'cancelled' }
  | { status: 'error'; message: string };

export async function purchaseTier(tier: PaidTier): Promise<PurchaseResult> {
  if (!isPlayBillingAvailable()) {
    return { status: 'error', message: 'Purchases are only available in the Google Play app.' };
  }
  const { NativePurchases, PURCHASE_TYPE } = await plugin();
  try {
    const tx = await NativePurchases.purchaseProduct({
      productIdentifier: PLAY_PRODUCT_IDS[tier],
      productType: PURCHASE_TYPE.INAPP,
      quantity: 1,
    });
    if (tx.purchaseState !== PURCHASED_STATE) {
      // e.g. cash/bank payment still clearing; unlocks on a later sync.
      return { status: 'pending' };
    }
    // Re-read from Play so the unlocked tier reflects everything owned.
    return { status: 'purchased', tier: await queryOwnedTier() };
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    if (/cancel/i.test(message)) return { status: 'cancelled' };
    return { status: 'error', message };
  }
}
