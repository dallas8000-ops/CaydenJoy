/**
 * Family Voice Clips
 *
 * Short recordings made by family members on this device:
 *   - praise clips ("Good job, Cayden!") played as a learning-game reward
 *   - word clips: a family voice for a word or name ("Grandad", "want"),
 *     played instead of the synthetic voice wherever that word is tapped
 *
 * Recordings never leave the device: they live in IndexedDB only and are not
 * uploaded, synced or included in any export. If IndexedDB is unavailable
 * they are kept in memory for the session.
 */

import { AccessibilityManager } from './accessibility-manager.js';
import {
  MAX_CLIP_MS,
  MAX_LABEL_LENGTH,
  MAX_PRAISE_CLIPS,
  MAX_SPEAKER_LENGTH,
  CLIP_PROBLEM_TEXT,
  cleanText,
  clipKey,
  pickMimeType,
  pickPraise,
  validateClip,
} from './voice-clip-utils.js';

export type ClipKind = 'praise' | 'word';

export interface VoiceClip {
  id: string;
  kind: ClipKind;
  /** clipKey(label) for word clips, 'praise' for praise clips. */
  key: string;
  label: string;
  speaker: string;
  blob: Blob;
  mimeType: string;
  durationMs: number;
  createdAt: number;
}

export interface NewClip {
  kind: ClipKind;
  label: string;
  speaker: string;
  blob: Blob;
  durationMs: number;
}

export interface Recording {
  blob: Blob;
  mimeType: string;
  durationMs: number;
}

export interface RecordingSession {
  /** Stop now. Resolves with the recording (also resolves when the time cap stops it). */
  stop(): Promise<Recording>;
  /** Stop and throw the audio away. */
  cancel(): void;
  /** Resolves when recording ends for any reason. */
  readonly done: Promise<Recording>;
}

const DB_NAME = 'caydenjoy-voice';
const DB_VERSION = 1;
const STORE = 'clips';
/** Longest a clip is allowed to hold up the game (covers a slow decoder). */
const PLAYBACK_CAP_MS = MAX_CLIP_MS + 2000;

type Listener = (clips: VoiceClip[]) => void;

export class VoiceClipStore {
  private static instance: VoiceClipStore;
  private dbPromise: Promise<IDBDatabase | null> | null = null;
  private clips: VoiceClip[] = [];
  private loaded: Promise<void>;
  private listeners = new Set<Listener>();
  private current: { audio: HTMLAudioElement; url: string; finish: (played: boolean) => void } | null = null;
  private lastPraiseId: string | null = null;

  static getInstance(): VoiceClipStore {
    if (!VoiceClipStore.instance) VoiceClipStore.instance = new VoiceClipStore();
    return VoiceClipStore.instance;
  }

  private constructor() {
    this.loaded = this.load();
  }

  private open(): Promise<IDBDatabase | null> {
    if (this.dbPromise) return this.dbPromise;
    this.dbPromise = new Promise((resolve) => {
      try {
        if (typeof indexedDB === 'undefined') return resolve(null);
        const req = indexedDB.open(DB_NAME, DB_VERSION);
        req.onupgradeneeded = () => {
          const db = req.result;
          if (!db.objectStoreNames.contains(STORE)) {
            const store = db.createObjectStore(STORE, { keyPath: 'id' });
            store.createIndex('key', 'key');
          }
        };
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => resolve(null);
        req.onblocked = () => resolve(null);
      } catch {
        resolve(null);
      }
    });
    return this.dbPromise;
  }

  private async load(): Promise<void> {
    const db = await this.open();
    if (!db) return;
    this.clips = await new Promise<VoiceClip[]>((resolve) => {
      try {
        const req = db.transaction(STORE, 'readonly').objectStore(STORE).getAll();
        req.onsuccess = () => resolve((req.result as VoiceClip[]) ?? []);
        req.onerror = () => resolve([]);
      } catch {
        resolve([]);
      }
    });
    this.clips.sort((a, b) => a.createdAt - b.createdAt);
    this.notify();
  }

  private async write(mutate: (store: IDBObjectStore) => void): Promise<boolean> {
    const db = await this.open();
    if (!db) return true; // memory-only mode
    return new Promise<boolean>((resolve) => {
      try {
        const tx = db.transaction(STORE, 'readwrite');
        mutate(tx.objectStore(STORE));
        tx.oncomplete = () => resolve(true);
        tx.onerror = () => resolve(false);
        tx.onabort = () => resolve(false);
      } catch {
        resolve(false);
      }
    });
  }

  private notify(): void {
    const snapshot = this.list();
    this.listeners.forEach((l) => l(snapshot));
  }

  subscribe(listener: Listener): () => void {
    this.listeners.add(listener);
    void this.loaded.then(() => listener(this.list()));
    return () => this.listeners.delete(listener);
  }

  ready(): Promise<void> {
    return this.loaded;
  }

  list(kind?: ClipKind): VoiceClip[] {
    return this.clips.filter((c) => !kind || c.kind === kind);
  }

  /** Synchronous: is there a family recording for this word? */
  hasWord(label: string): boolean {
    const key = clipKey(label);
    return !!key && this.clips.some((c) => c.kind === 'word' && c.key === key);
  }

  /** Save a clip. A word clip replaces any earlier clip for the same word. Throws with a friendly message. */
  async save(input: NewClip): Promise<VoiceClip> {
    await this.loaded;
    const label = cleanText(input.label, MAX_LABEL_LENGTH);
    const speaker = cleanText(input.speaker, MAX_SPEAKER_LENGTH);
    if (input.kind === 'word' && !label) throw new Error('Type the word or name first.');
    const mimeType = input.blob.type || 'audio/webm';
    const problem = validateClip({ size: input.blob.size, durationMs: input.durationMs, mimeType });
    if (problem) throw new Error(CLIP_PROBLEM_TEXT[problem]);
    if (input.kind === 'praise' && this.list('praise').length >= MAX_PRAISE_CLIPS) {
      throw new Error(`You can keep up to ${MAX_PRAISE_CLIPS} praise clips. Delete one first.`);
    }

    const key = input.kind === 'praise' ? 'praise' : clipKey(label);
    const clip: VoiceClip = {
      id: `clip-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      kind: input.kind,
      key,
      label: input.kind === 'praise' ? label || 'Praise' : label,
      speaker,
      blob: input.blob,
      mimeType,
      durationMs: Math.round(input.durationMs),
      createdAt: Date.now(),
    };
    const replaced = input.kind === 'word' ? this.clips.filter((c) => c.kind === 'word' && c.key === key) : [];

    const ok = await this.write((store) => {
      replaced.forEach((c) => store.delete(c.id));
      store.put(clip);
    });
    if (!ok) throw new Error('The recording could not be saved. The device may be out of space.');

    this.clips = [...this.clips.filter((c) => !replaced.includes(c)), clip];
    this.notify();
    return clip;
  }

  async remove(id: string): Promise<void> {
    await this.loaded;
    if (this.current && this.clips.find((c) => c.id === id)) this.stop();
    await this.write((store) => store.delete(id));
    this.clips = this.clips.filter((c) => c.id !== id);
    this.notify();
  }

  /** Play a specific clip (caregiver preview). */
  play(clip: VoiceClip): Promise<boolean> {
    return this.playBlob(clip.blob);
  }

  /** Play the family recording for this word if there is one. Resolves false when there is none. */
  async playWord(label: string): Promise<boolean> {
    await this.loaded;
    const key = clipKey(label);
    const clip = this.clips.find((c) => c.kind === 'word' && c.key === key);
    return clip ? this.playBlob(clip.blob) : false;
  }

  /** Play a random praise clip and resolve when it has finished (false when there is none). */
  async playPraise(): Promise<boolean> {
    await this.loaded;
    const clip = pickPraise(this.list('praise'), this.lastPraiseId);
    if (!clip) return false;
    this.lastPraiseId = clip.id;
    return this.playBlob(clip.blob);
  }

  stop(): void {
    const current = this.current;
    if (!current) return;
    this.current = null;
    try {
      current.audio.pause();
    } catch {
      // ignore
    }
    URL.revokeObjectURL(current.url);
    current.finish(false);
  }

  private playBlob(blob: Blob): Promise<boolean> {
    this.stop();
    if (typeof Audio === 'undefined') return Promise.resolve(false);
    return new Promise<boolean>((resolve) => {
      const url = URL.createObjectURL(blob);
      const audio = new Audio(url);
      let settled = false;
      let cap = 0;
      const finish = (played: boolean) => {
        if (settled) return;
        settled = true;
        window.clearTimeout(cap);
        if (this.current?.audio === audio) {
          this.current = null;
          URL.revokeObjectURL(url);
        }
        resolve(played);
      };
      this.current = { audio, url, finish };
      cap = window.setTimeout(() => {
        if (this.current?.audio === audio) this.stop();
        finish(true);
      }, PLAYBACK_CAP_MS);
      audio.onended = () => finish(true);
      audio.onerror = () => finish(false);
      audio.play().catch(() => finish(false));
    });
  }
}

/**
 * Speak a tapped word: the family recording when there is one, otherwise the
 * device voice. Synchronous decision, so a tap never waits on storage.
 */
export function speakWord(label: string, fallbackText: string = label, rate = 0.9): void {
  const clips = VoiceClipStore.getInstance();
  const a11y = AccessibilityManager.getInstance();
  if (clips.hasWord(label)) {
    void clips.playWord(label).then((played) => {
      if (!played) a11y.speakNow(fallbackText, rate);
    });
    return;
  }
  a11y.speakNow(fallbackText, rate);
}

export function recordingSupported(): boolean {
  return (
    typeof navigator !== 'undefined' &&
    !!navigator.mediaDevices?.getUserMedia &&
    typeof MediaRecorder !== 'undefined'
  );
}

/** Start recording from the microphone. Stops by itself after MAX_CLIP_MS. Rejects if the mic is unavailable. */
export async function startRecording(maxMs = MAX_CLIP_MS): Promise<RecordingSession> {
  if (!recordingSupported()) {
    const err = new Error('Recording is not supported here.');
    err.name = 'NotSupportedError';
    throw err;
  }
  const stream = await navigator.mediaDevices.getUserMedia({
    audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true },
  });
  const mimeType = pickMimeType((t) => MediaRecorder.isTypeSupported(t));
  let recorder: MediaRecorder;
  try {
    recorder = mimeType ? new MediaRecorder(stream, { mimeType }) : new MediaRecorder(stream);
  } catch (e) {
    stream.getTracks().forEach((t) => t.stop());
    throw e;
  }

  const chunks: Blob[] = [];
  let cancelled = false;
  let startedAt = 0;
  let stoppedAt = 0;
  let capTimer = 0;

  const done = new Promise<Recording>((resolve, reject) => {
    recorder.ondataavailable = (e) => {
      if (e.data && e.data.size > 0) chunks.push(e.data);
    };
    recorder.onstop = () => {
      window.clearTimeout(capTimer);
      stream.getTracks().forEach((t) => t.stop());
      if (cancelled) return reject(new Error('cancelled'));
      const type = recorder.mimeType || mimeType || 'audio/webm';
      resolve({ blob: new Blob(chunks, { type }), mimeType: type, durationMs: (stoppedAt || Date.now()) - startedAt });
    };
    recorder.onerror = () => {
      window.clearTimeout(capTimer);
      stream.getTracks().forEach((t) => t.stop());
      reject(new Error('Recording failed.'));
    };
  });
  // Callers that only use stop() should not see an unhandled rejection on cancel.
  done.catch(() => undefined);

  const stopRecorder = () => {
    if (recorder.state !== 'inactive') {
      stoppedAt = Date.now();
      recorder.stop();
    }
  };

  recorder.start();
  startedAt = Date.now();
  capTimer = window.setTimeout(stopRecorder, maxMs);

  return {
    done,
    stop() {
      stopRecorder();
      return done;
    },
    cancel() {
      cancelled = true;
      stopRecorder();
    },
  };
}

export default VoiceClipStore.getInstance();
