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

const MAX_SENTENCE_LENGTH = 8;

export class SentenceBuilder {
  private static instance: SentenceBuilder;

  private words: SentenceWord[] = [];
  private listeners: Set<Listener> = new Set();

  private constructor() {}

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

  addWord(word: Omit<SentenceWord, 'id'>): void {
    if (!word.label || !word.label.trim()) return;
    if (this.words.length >= MAX_SENTENCE_LENGTH) {
      this.words = this.words.slice(1);
    }
    this.words = [...this.words, { id: `w-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`, ...word }];
    this.notify();
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
