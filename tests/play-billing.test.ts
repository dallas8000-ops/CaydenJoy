// Run: npm run test:billing   (Node >= 22.6 type-stripping; no extra deps)
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { tierFromPurchases, highestTier, tierForProductId, PLAY_PRODUCT_IDS } from '../src/utils/play-billing.ts';

const bought = (productIdentifier: string, purchaseState = '1') => ({ productIdentifier, purchaseState });

test('product IDs match the Play Console products exactly', () => {
  assert.deepEqual(PLAY_PRODUCT_IDS, {
    family: 'caydenjoy_family',
    learning: 'caydenjoy_learning',
    allAccess: 'caydenjoy_all_access',
  });
});

test('no purchases -> none', () => {
  assert.equal(tierFromPurchases([]), 'none');
});

test('highest owned tier wins regardless of order', () => {
  assert.equal(tierFromPurchases([bought('caydenjoy_all_access'), bought('caydenjoy_family')]), 'allAccess');
  assert.equal(tierFromPurchases([bought('caydenjoy_family'), bought('caydenjoy_learning')]), 'learning');
});

test('PENDING (2) or missing state never unlocks', () => {
  assert.equal(tierFromPurchases([bought('caydenjoy_all_access', '2')]), 'none');
  assert.equal(tierFromPurchases([{ productIdentifier: 'caydenjoy_learning' }]), 'none');
});

test('unknown product IDs are ignored', () => {
  assert.equal(tierFromPurchases([bought('caydenjoy_premium_old')]), 'none');
  assert.equal(tierForProductId('something_else'), null);
});

test('highestTier ordering', () => {
  assert.equal(highestTier(['family', 'none', 'learning']), 'learning');
});
