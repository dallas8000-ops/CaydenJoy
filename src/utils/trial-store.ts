/**
 * Trial Store
 *
 * Every learning-game answer (right on his own, right with help, or wrong)
 * is saved here so caregivers and therapists can see what Cayden knows and
 * where he still needs help. Data stays on the device in IndexedDB, which
 * holds far more than the 500-event localStorage log in progress-manager.
 * If IndexedDB is unavailable (some private-browsing webviews), trials are
 * kept in memory for the session so the game never breaks.
 */

import type { PromptLevel, TrialResult } from './learning-engine.js';

export type LearningGame = 'puzzle-family' | 'puzzle-objects' | 'colors' | 'numbers' | 'places';

export interface TrialEvent {
  id?: number;
  game: LearningGame;
  targetId: string;
  targetLabel: string;
  chosenId: string;
  chosenLabel: string;
  result: TrialResult;
  promptLevel: PromptLevel;
  fieldSize: number;
  latencyMs: number;
  at: number;
}

const DB_NAME = 'caydenjoy-learning';
const DB_VERSION = 1;
const STORE = 'trials';

export class TrialStore {
  private static instance: TrialStore;
  private dbPromise: Promise<IDBDatabase | null> | null = null;
  private memory: TrialEvent[] = [];

  static getInstance(): TrialStore {
    if (!TrialStore.instance) TrialStore.instance = new TrialStore();
    return TrialStore.instance;
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
            const store = db.createObjectStore(STORE, { keyPath: 'id', autoIncrement: true });
            store.createIndex('at', 'at');
            store.createIndex('game', 'game');
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

  async add(event: TrialEvent): Promise<void> {
    const db = await this.open();
    if (!db) {
      this.memory.push(event);
      return;
    }
    await new Promise<void>((resolve) => {
      try {
        const tx = db.transaction(STORE, 'readwrite');
        tx.objectStore(STORE).add(event);
        tx.oncomplete = () => resolve();
        tx.onerror = () => {
          this.memory.push(event);
          resolve();
        };
      } catch {
        this.memory.push(event);
        resolve();
      }
    });
  }

  /** All trials, oldest first. Optionally only one game. */
  async getAll(game?: LearningGame): Promise<TrialEvent[]> {
    const db = await this.open();
    let stored: TrialEvent[] = [];
    if (db) {
      stored = await new Promise<TrialEvent[]>((resolve) => {
        try {
          const req = db.transaction(STORE, 'readonly').objectStore(STORE).getAll();
          req.onsuccess = () => resolve((req.result as TrialEvent[]) ?? []);
          req.onerror = () => resolve([]);
        } catch {
          resolve([]);
        }
      });
    }
    const all = [...stored, ...this.memory].sort((a, b) => a.at - b.at);
    return game ? all.filter((t) => t.game === game) : all;
  }

  async clear(): Promise<void> {
    this.memory = [];
    const db = await this.open();
    if (!db) return;
    await new Promise<void>((resolve) => {
      try {
        const tx = db.transaction(STORE, 'readwrite');
        tx.objectStore(STORE).clear();
        tx.oncomplete = () => resolve();
        tx.onerror = () => resolve();
      } catch {
        resolve();
      }
    });
  }
}

export default TrialStore.getInstance();
