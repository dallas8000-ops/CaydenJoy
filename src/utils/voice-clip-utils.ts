/**
 * Pure helpers for family voice clips (no DOM, no IndexedDB) so they can be
 * unit-tested with node:test. See voice-clips.ts for storage and playback.
 */

/** Longest recording we keep. Praise and single words are short; this also caps storage. */
export const MAX_CLIP_MS = 6000;
/** Hard size cap per clip (~6 s of Opus is ~50 KB; this leaves room for less efficient codecs). */
export const MAX_CLIP_BYTES = 1_500_000;
/** Recordings shorter than this are almost always an accidental tap. */
export const MIN_CLIP_MS = 300;
/** Praise clips are picked at random; a handful keeps it varied without a long list to manage. */
export const MAX_PRAISE_CLIPS = 6;
export const MAX_LABEL_LENGTH = 40;
export const MAX_SPEAKER_LENGTH = 30;

/** Preferred recording formats, best first. Android WebView and Chrome support the first. */
export const PREFERRED_MIME_TYPES = [
  'audio/webm;codecs=opus',
  'audio/webm',
  'audio/ogg;codecs=opus',
  'audio/mp4',
];

/**
 * Key a word clip by its spoken label, so a clip recorded for "Grandad"
 * plays wherever a "Grandad" button is tapped (core bar, family photos).
 */
export function clipKey(label: string): string {
  return label.normalize('NFKC').trim().toLowerCase().replace(/\s+/g, ' ');
}

/** Visible text only: collapses whitespace, strips control characters, caps length. */
export function cleanText(value: string, max: number): string {
  return value
    .replace(/[\u0000-\u001f\u007f]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, max);
}

/** First supported format, or '' to let the browser choose its default. */
export function pickMimeType(isSupported: (type: string) => boolean): string {
  for (const type of PREFERRED_MIME_TYPES) {
    try {
      if (isSupported(type)) return type;
    } catch {
      // Some webviews throw instead of returning false.
    }
  }
  return '';
}

export type ClipProblem = 'empty' | 'too-short' | 'too-long' | 'too-large' | 'not-audio';

/** Why a finished recording should not be saved, or null when it is fine. */
export function validateClip(clip: { size: number; durationMs: number; mimeType: string }): ClipProblem | null {
  if (!clip.size) return 'empty';
  if (clip.mimeType && !clip.mimeType.startsWith('audio/')) return 'not-audio';
  if (clip.durationMs < MIN_CLIP_MS) return 'too-short';
  // Recorder auto-stops at MAX_CLIP_MS; allow a little timer slack.
  if (clip.durationMs > MAX_CLIP_MS + 1000) return 'too-long';
  if (clip.size > MAX_CLIP_BYTES) return 'too-large';
  return null;
}

export const CLIP_PROBLEM_TEXT: Record<ClipProblem, string> = {
  empty: 'Nothing was recorded. Check the microphone and try again.',
  'too-short': 'That was too short. Hold the phone close and say it again.',
  'too-long': 'That was too long. Keep it to a few words.',
  'too-large': 'That recording is too large to save. Please try a shorter one.',
  'not-audio': 'That file is not audio.',
};

/**
 * Pick a praise clip at random, never the same one twice in a row
 * (unless it is the only one). `random` is injectable for tests.
 */
export function pickPraise<T extends { id: string }>(
  clips: T[],
  lastId: string | null,
  random: () => number = Math.random,
): T | null {
  if (clips.length === 0) return null;
  if (clips.length === 1) return clips[0];
  const pool = clips.filter((c) => c.id !== lastId);
  const index = Math.min(pool.length - 1, Math.floor(random() * pool.length));
  return pool[index];
}

/** Friendly text for getUserMedia / MediaRecorder failures. */
export function microphoneErrorText(error: unknown): string {
  const name = (error as { name?: string } | null)?.name ?? '';
  if (name === 'NotAllowedError' || name === 'SecurityError') {
    return 'Microphone permission is off. Allow the microphone for CaydenJoy (Android Settings > Apps > CaydenJoy > Permissions) and try again.';
  }
  if (name === 'NotFoundError' || name === 'OverconstrainedError') {
    return 'No microphone was found on this device.';
  }
  if (name === 'NotReadableError') {
    return 'The microphone is busy in another app. Close it and try again.';
  }
  if (name === 'NotSupportedError') {
    return 'Recording is not supported on this device or browser.';
  }
  return 'Recording did not start. Please try again.';
}
