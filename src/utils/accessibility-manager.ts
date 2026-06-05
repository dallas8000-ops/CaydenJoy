/**
 * Accessibility Manager
 * Handles user preferences for color themes, font size, animations, sounds, and text-to-speech
 * Optimized for autistic children and users with sensory sensitivities
 */

export type ColorTheme = 'calm' | 'highContrast' | 'normal';
export type FontSize = 'small' | 'medium' | 'large' | 'xlarge';

export interface AccessibilitySettings {
  colorTheme: ColorTheme;
  fontSize: FontSize;
  enableAnimations: boolean;
  enableSounds: boolean;
  enableTextToSpeech: boolean;
  enableReducedMotion: boolean;
  highlightInteractive: boolean;
}

export const DEFAULT_SETTINGS: AccessibilitySettings = {
  colorTheme: 'normal',
  fontSize: 'medium',
  enableAnimations: true,
  enableSounds: true,
  enableTextToSpeech: false,
  enableReducedMotion: false,
  highlightInteractive: false,
};

const STORAGE_KEY = 'caydenjoy_accessibility_settings';

export class AccessibilityManager {
  private static instance: AccessibilityManager;
  private settings: AccessibilitySettings = { ...DEFAULT_SETTINGS };
  private listeners: Set<(settings: AccessibilitySettings) => void> = new Set();
  private audioContext?: AudioContext;
  private audioUnlockAttached = false;

  private constructor() {
    this.loadSettings();
    this.attachAudioUnlockHandlers();
  }

  static getInstance(): AccessibilityManager {
    if (!AccessibilityManager.instance) {
      AccessibilityManager.instance = new AccessibilityManager();
    }
    return AccessibilityManager.instance;
  }

  private loadSettings(): void {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        this.settings = { ...DEFAULT_SETTINGS, ...parsed };
      }
      this.applySettings();
    } catch (e) {
      console.error('Failed to load accessibility settings:', e);
      this.settings = { ...DEFAULT_SETTINGS };
    }
  }

  saveSettings(settings: Partial<AccessibilitySettings>): void {
    this.settings = { ...this.settings, ...settings };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.settings));
      this.applySettings();
      this.notifyListeners();
    } catch (e) {
      console.error('Failed to save accessibility settings:', e);
    }
  }

  getSettings(): AccessibilitySettings {
    return { ...this.settings };
  }

  subscribe(listener: (settings: AccessibilitySettings) => void): () => void {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notifyListeners(): void {
    this.listeners.forEach(listener => listener(this.getSettings()));
  }

  private applySettings(): void {
    const root = document.documentElement;

    // Apply color theme
    root.setAttribute('data-theme', this.settings.colorTheme);

    // Apply font size
    root.setAttribute('data-font-size', this.settings.fontSize);

    // Apply motion reduction
    if (this.settings.enableReducedMotion) {
      root.style.setProperty('--disable-animations', '1');
    } else {
      root.style.setProperty('--disable-animations', '0');
    }

    // Apply prefers-reduced-motion
    if (this.settings.enableReducedMotion) {
      root.classList.add('prefers-reduced-motion');
    } else {
      root.classList.remove('prefers-reduced-motion');
    }

    // Apply interactive highlighting
    if (this.settings.highlightInteractive) {
      root.classList.add('highlight-interactive');
    } else {
      root.classList.remove('highlight-interactive');
    }
  }

  private getAudioContext(): AudioContext | null {
    try {
      if (!this.audioContext) {
        const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
        if (!AudioCtx) {
          return null;
        }
        this.audioContext = new AudioCtx();
      }
      return this.audioContext;
    } catch (e) {
      console.error('AudioContext unavailable:', e);
      return null;
    }
  }

  private attachAudioUnlockHandlers(): void {
    if (this.audioUnlockAttached) return;
    this.audioUnlockAttached = true;

    const unlock = () => {
      const context = this.getAudioContext();
      if (context && context.state === 'suspended') {
        context.resume().catch(() => {
          // Some webviews may reject resume before full gesture lifecycle.
        });
      }
    };

    window.addEventListener('pointerdown', unlock, { passive: true });
    window.addEventListener('touchstart', unlock, { passive: true });
    window.addEventListener('keydown', unlock, { passive: true });
  }

  speak(text: string, rate: number = 1): void {
    if (!this.settings.enableTextToSpeech) return;
    this.speakNow(text, rate);
  }

  speakNow(text: string, rate: number = 1): void {
    if (!('speechSynthesis' in window) || typeof SpeechSynthesisUtterance === 'undefined') {
      this.playSound('error');
      return;
    }

    try {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();
      window.speechSynthesis.resume();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = rate;
      utterance.pitch = 1;
      utterance.volume = 1;

      window.speechSynthesis.speak(utterance);
    } catch (e) {
      console.error('Text-to-speech failed:', e);
      this.playSound('error');
    }
  }

  playSound(type: 'success' | 'error' | 'click'): void {
    if (!this.settings.enableSounds) return;

    // Simple audio cues (can be enhanced with actual audio files)
    const audioContext = this.getAudioContext();
    if (!audioContext) return;

    if (audioContext.state === 'suspended') {
      audioContext.resume().catch(() => {
        // Continue anyway; some environments resume on next interaction.
      });
    }

    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    switch (type) {
      case 'success':
        oscillator.frequency.value = 800;
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.2);
        break;

      case 'error':
        oscillator.frequency.value = 400;
        gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.3);
        break;

      case 'click':
        oscillator.frequency.value = 600;
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
        break;
    }
  }

  resetToDefaults(): void {
    this.settings = { ...DEFAULT_SETTINGS };
    localStorage.removeItem(STORAGE_KEY);
    this.applySettings();
    this.notifyListeners();
  }
}
