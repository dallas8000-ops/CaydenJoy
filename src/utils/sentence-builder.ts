/**
 * Sentence Builder
 *
 * Shared, app-wide state for assembling a spoken sentence out of taps made
 * on DIFFERENT pages: a core word tapped in the persistent core-word-bar
 * ("I", "want") plus a fringe-vocabulary card tapped on a content page
 * ("Banana" on the Foods page) combine into one sentence ("I want Banana")
 * instead of each tap only ever speaking itself in isolation.
 *
 * This is what turns per-page "tap a picture, hear a phrase" buttons into
 * an actual generative AAC system: a fixed, small set of core words
 * recombined with an open-ended set of fringe vocabulary.
 */

export interface SentenceWord {
  id: string;
  label: string;
  imageUrl?: string;
}

type Listener = (words: SentenceWord[]) => void;

/**
 * Modeling mode (aided language modeling): a caregiver taps words on HIS
 * board while speaking, so he sees where words live and hears them used.
 * Those taps are spoken and shown, but never added to his sentence strip,
 * which stays his own voice.
 */
export interface ModelingState {
  on: boolean;
  /** Words the caregiver tapped while modeling, newest last (kept short). */
  modeled: string[];
}
type ModelingListener = (state: ModelingState) => void;

const MAX_SENTENCE_LENGTH = 8;
const MAX_MODELED_WORDS = 6;
/** Modeling switches itself off after this long without a modeled tap, so it is never left on by mistake. */
export const MODELING_IDLE_MS = 5 * 60 * 1000;

export interface SentenceBuilderClock {
  setTimeout: (fn: () => void, ms: number) => unknown;
  clearTimeout: (handle: unknown) => void;
}

const defaultClock: SentenceBuilderClock = {
  setTimeout: (fn, ms) => setTimeout(fn, ms),
  clearTimeout: (h) => clearTimeout(h as ReturnType<typeof setTimeout>),
};

export class SentenceBuilder {
  private static instance: SentenceBuilder;

  private words: SentenceWord[] = [];
  private listeners: Set<Listener> = new Set();
  private modeling: ModelingState = { on: false, modeled: [] };
  private modelingListeners: Set<ModelingListener> = new Set();
  private idleTimer: unknown = null;
  private clock: SentenceBuilderClock;

  /** Use getInstance() in the app; the constructor is public for tests. */
  constructor(clock: SentenceBuilderClock = defaultClock) {
    this.clock = clock;
  }

  static getInstance(): SentenceBuilder {
    if (!SentenceBuilder.instance) {
      SentenceBuilder.instance = new SentenceBuilder();
    }
    return SentenceBuilder.instance;
  }

  subscribe(listener: Listener): () => void {
    this.listeners.add(listener);
    listener(this.getWords());
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notify(): void {
    const snapshot = this.getWords();
    this.listeners.forEach((listener) => listener(snapshot));
  }

  getWords(): SentenceWord[] {
    return [...this.words];
  }

  /** Adds a word to his sentence. Returns false when nothing was added (blank, or modeling mode). */
  addWord(word: Omit<SentenceWord, 'id'>): boolean {
    if (!word.label || !word.label.trim()) return false;
    if (this.modeling.on) {
      this.modeling = {
        on: true,
        modeled: [...this.modeling.modeled, word.label.trim()].slice(-MAX_MODELED_WORDS),
      };
      this.armIdleTimer();
      this.notifyModeling();
      return false;
    }
    if (this.words.length >= MAX_SENTENCE_LENGTH) {
      this.words = this.words.slice(1);
    }
    this.words = [...this.words, { id: `w-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`, ...word }];
    this.notify();
    return true;
  }

  isModeling(): boolean {
    return this.modeling.on;
  }

  getModeling(): ModelingState {
    return { on: this.modeling.on, modeled: [...this.modeling.modeled] };
  }

  setModeling(on: boolean): void {
    if (on === this.modeling.on) return;
    this.modeling = { on, modeled: [] };
    if (on) this.armIdleTimer();
    else this.disarmIdleTimer();
    this.notifyModeling();
  }

  subscribeModeling(listener: ModelingListener): () => void {
    this.modelingListeners.add(listener);
    listener(this.getModeling());
    return () => {
      this.modelingListeners.delete(listener);
    };
  }

  private notifyModeling(): void {
    const snapshot = this.getModeling();
    this.modelingListeners.forEach((l) => l(snapshot));
  }

  private armIdleTimer(): void {
    this.disarmIdleTimer();
    this.idleTimer = this.clock.setTimeout(() => {
      this.idleTimer = null;
      this.setModeling(false);
    }, MODELING_IDLE_MS);
  }

  private disarmIdleTimer(): void {
    if (this.idleTimer !== null) {
      this.clock.clearTimeout(this.idleTimer);
      this.idleTimer = null;
    }
  }

  removeLast(): void {
    if (this.words.length === 0) return;
    this.words = this.words.slice(0, -1);
    this.notify();
  }

  clear(): void {
    if (this.words.length === 0) return;
    this.words = [];
    this.notify();
  }

  getSentenceText(): string {
    return this.words.map((w) => w.label).join(' ');
  }

  isEmpty(): boolean {
    return this.words.length === 0;
  }
}

export default SentenceBuilder.getInstance();
