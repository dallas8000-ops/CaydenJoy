#!/usr/bin/env node

/**
 * Generate CaydenJoy upgrade keys.
 *
 * Usage:
 *   node scripts/generate-upgrade-keys.js family 10
 *   node scripts/generate-upgrade-keys.js learning 25
 *   node scripts/generate-upgrade-keys.js allAccess 5
 */

const crypto = require('crypto');

const CODE_SALT = 'CAYDENJOY-APK-UPGRADE-2026';
const TIERS = {
  family: 'CJF',
  learning: 'CJL',
  allAccess: 'CJA',
};

function hashCode(value) {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return (hash >>> 0).toString(36).toUpperCase().padStart(7, '0');
}

function checksumFor(prefix, serial) {
  return hashCode(`${CODE_SALT}:${prefix}:${serial}`).slice(0, 5);
}

function randomSegment() {
  return crypto.randomBytes(3).toString('hex').toUpperCase();
}

function generateKey(tier) {
  const prefix = TIERS[tier];
  const serial = `${randomSegment()}-${randomSegment()}`;
  const checksum = checksumFor(prefix, serial);
  return `${prefix}-${serial}-${checksum}`;
}

const tier = process.argv[2];
const count = Number(process.argv[3] || 1);

if (!TIERS[tier] || !Number.isInteger(count) || count < 1 || count > 500) {
  console.error('Usage: node scripts/generate-upgrade-keys.js <family|learning|allAccess> <1-500>');
  process.exit(1);
}

for (let index = 0; index < count; index += 1) {
  console.log(generateKey(tier));
}
