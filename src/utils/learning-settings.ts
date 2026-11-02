/**
 * Learning Settings
 *
 * Caregiver choices for how the learning games teach and celebrate.
 * Kept apart from AccessibilitySettings because these shape teaching,
 * not the look of the app.
 */

export type RewardStyle = 'voice' | 'sound' | 'animation' | 'family';

export interface LearningSettings {
  /** Choices shown before any help (2, 3, 4 or 6). Start small; grow as he masters items. */
  startingChoices: 2 | 3 | 4 | 6;
  /**
   * Extra celebration on a right answer, on top of the spoken praise. Never a sound for wrong answers.
   * 'family' plays a recorded family praise clip first (falls back to spoken praise when none is recorded).
   */
  rewardStyle: RewardStyle;
  /** Speak a one-line reason after the first wrong pick ("That's a cup. A cup is for drinking."). */
  explainWhy: boolean;
}

export const DEFAULT_LEARNING_SETTINGS: LearningSettings = {
  startingChoices: 3,
  rewardStyle: 'voice',
  explainWhy: true,
};

const STORAGE_KEY = 'caydenjoy_learning_settings';
const VALID_CHOICES = [2, 3, 4, 6];
const VALID_REWARDS: RewardStyle[] = ['voice', 'sound', 'animation', 'family'];

type Listener = (settings: LearningSettings) => void;

export class LearningSettingsManager {
  private static instance: LearningSettingsManager;
  private settings: LearningSettings = { ...DEFAULT_LEARNING_SETTINGS };
  private listeners = new Set<Listener>();

  private constructor() {
    this.load();
  }

  static getInstance(): LearningSettingsManager {
    if (!LearningSettingsManager.instance) {
      LearningSettingsManager.instance = new LearningSettingsManager();
    }
    return LearningSettingsManager.instance;
  }

  private load(): void {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) this.settings = this.sanitize({ ...DEFAULT_LEARNING_SETTINGS, ...JSON.parse(raw) });
    } catch {
      this.settings = { ...DEFAULT_LEARNING_SETTINGS };
    }
  }

  private sanitize(s: LearningSettings): LearningSettings {
    return {
      startingChoices: (VALID_CHOICES.includes(Number(s.startingChoices))
        ? Number(s.startingChoices)
        : DEFAULT_LEARNING_SETTINGS.startingChoices) as LearningSettings['startingChoices'],
      rewardStyle: VALID_REWARDS.includes(s.rewardStyle) ? s.rewardStyle : DEFAULT_LEARNING_SETTINGS.rewardStyle,
      explainWhy: typeof s.explainWhy === 'boolean' ? s.explainWhy : DEFAULT_LEARNING_SETTINGS.explainWhy,
    };
  }

  get(): LearningSettings {
    return { ...this.settings };
  }

  save(patch: Partial<LearningSettings>): void {
    this.settings = this.sanitize({ ...this.settings, ...patch });
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.settings));
    } catch {
      // Storage full or blocked: keep the in-memory value for this session.
    }
    this.listeners.forEach((l) => l(this.get()));
  }

  subscribe(listener: Listener): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }
}

export default LearningSettingsManager.getInstance();
