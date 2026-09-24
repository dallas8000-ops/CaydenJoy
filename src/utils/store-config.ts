/**
 * Build-time distribution flags.
 *
 * VITE_STORE=play  -> Google Play build. Paid tiers are sold ONLY through
 *                     Google Play Billing (Payments policy). Stripe checkout,
 *                     upgrade keys, and the direct-APK download page are
 *                     compiled out of this build.
 * (unset)          -> Direct/web build sold from gilliomfrontlinedigital.com
 *                     with Stripe + upgrade keys.
 *
 * Accessed as import.meta.env.VITE_* directly so Vite inlines the literal
 * and Rollup can drop the dead branches (and lazy Stripe/key pages).
 */
export const IS_PLAY_BUILD: boolean = (import.meta as any).env.VITE_STORE === 'play';
export const IS_DEV_MODE: boolean = (import.meta as any).env.VITE_DEV_MODE === 'true';
