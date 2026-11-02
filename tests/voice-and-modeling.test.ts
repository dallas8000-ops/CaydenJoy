import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  clipKey,
  cleanText,
  pickMimeType,
  pickPraise,
  validateClip,
  microphoneErrorText,
  MAX_CLIP_MS,
  MAX_CLIP_BYTES,
} from '../src/utils/voice-clip-utils.ts';
import { SentenceBuilder, MODELING_IDLE_MS, type SentenceBuilderClock } from '../src/utils/sentence-builder.ts';

// ---------- voice clip helpers ----------

test('clipKey matches the same word however it is typed', () => {
  assert.equal(clipKey('  Grandad '), 'grandad');
  assert.equal(clipKey('GRANDAD'), clipKey('grandad'));
  assert.equal(clipKey('Ice   cream'), 'ice cream');
  assert.equal(clipKey(''), '');
});

test('cleanText strips control characters and caps length', () => {
  assert.equal(cleanText('Good\njob\t!', 40), 'Good job !');
  assert.equal(cleanText('x'.repeat(100), 30).length, 30);
  assert.equal(cleanText('   ', 30), '');
});

test('pickMimeType prefers Opus WebM and survives a throwing isTypeSupported', () => {
  assert.equal(pickMimeType(() => true), 'audio/webm;codecs=opus');
  assert.equal(pickMimeType((t) => t === 'audio/mp4'), 'audio/mp4');
  assert.equal(pickMimeType(() => false), '');
  assert.equal(pickMimeType(() => { throw new Error('nope'); }), '');
});

test('validateClip rejects empty, accidental, oversized and non-audio recordings', () => {
  const ok = { size: 20_000, durationMs: 1500, mimeType: 'audio/webm' };
  assert.equal(validateClip(ok), null);
  assert.equal(validateClip({ ...ok, size: 0 }), 'empty');
  assert.equal(validateClip({ ...ok, durationMs: 100 }), 'too-short');
  assert.equal(validateClip({ ...ok, durationMs: MAX_CLIP_MS + 5000 }), 'too-long');
  assert.equal(validateClip({ ...ok, size: MAX_CLIP_BYTES + 1 }), 'too-large');
  assert.equal(validateClip({ ...ok, mimeType: 'text/html' }), 'not-audio');
  // Auto-stop lands slightly past the cap; that must still save.
  assert.equal(validateClip({ ...ok, durationMs: MAX_CLIP_MS + 300 }), null);
});

test('pickPraise never repeats the last clip when there is a choice', () => {
  const clips = [{ id: 'a' }, { id: 'b' }, { id: 'c' }];
  for (const r of [0, 0.4, 0.99]) {
    assert.notEqual(pickPraise(clips, 'b', () => r)?.id, 'b');
  }
  assert.equal(pickPraise([{ id: 'only' }], 'only')?.id, 'only');
  assert.equal(pickPraise([], null), null);
  assert.ok(pickPraise(clips, null, () => 0.999999)); // index stays in range
});

test('microphoneErrorText explains permission and missing-mic failures', () => {
  assert.match(microphoneErrorText({ name: 'NotAllowedError' }), /permission/i);
  assert.match(microphoneErrorText({ name: 'NotFoundError' }), /no microphone/i);
  assert.match(microphoneErrorText(null), /try again/i);
});

// ---------- modeling mode ----------

function fakeClock() {
  let next = 1;
  const timers = new Map<number, () => void>();
  const clock: SentenceBuilderClock = {
    setTimeout: (fn) => { const id = next++; timers.set(id, fn); return id; },
    clearTimeout: (h) => { timers.delete(h as number); },
  };
  return { clock, timers, fireAll: () => { const fns = [...timers.values()]; timers.clear(); fns.forEach((f) => f()); } };
}

test('modeling: taps are shown but never added to his sentence', () => {
  const { clock } = fakeClock();
  const sb = new SentenceBuilder(clock);
  assert.equal(sb.addWord({ label: 'I' }), true);
  sb.setModeling(true);
  assert.equal(sb.addWord({ label: 'want' }), false);
  assert.equal(sb.addWord({ label: 'Banana' }), false);
  assert.deepEqual(sb.getWords().map((w) => w.label), ['I']);
  assert.deepEqual(sb.getModeling().modeled, ['want', 'Banana']);
  sb.setModeling(false);
  assert.equal(sb.addWord({ label: 'want' }), true);
  assert.deepEqual(sb.getWords().map((w) => w.label), ['I', 'want']);
  assert.deepEqual(sb.getModeling(), { on: false, modeled: [] });
});

test('modeling: notifies listeners and keeps only the last few modeled words', () => {
  const { clock } = fakeClock();
  const sb = new SentenceBuilder(clock);
  const seen: boolean[] = [];
  sb.subscribeModeling((s) => seen.push(s.on));
  sb.setModeling(true);
  for (let i = 0; i < 10; i++) sb.addWord({ label: `w${i}` });
  assert.equal(sb.getModeling().modeled.length, 6);
  assert.equal(sb.getModeling().modeled.at(-1), 'w9');
  assert.deepEqual(seen.slice(0, 2), [false, true]);
});

test('modeling: switches itself off after the idle timeout', () => {
  const { clock, timers, fireAll } = fakeClock();
  const sb = new SentenceBuilder(clock);
  sb.setModeling(true);
  assert.equal(timers.size, 1, 'one idle timer armed');
  sb.addWord({ label: 'go' });
  assert.equal(timers.size, 1, 'a modeled tap re-arms, never stacks timers');
  fireAll();
  assert.equal(sb.isModeling(), false);
  assert.equal(sb.addWord({ label: 'go' }), true);
  assert.ok(MODELING_IDLE_MS >= 60_000);
});

test('modeling: turning it off clears the idle timer', () => {
  const { clock, timers } = fakeClock();
  const sb = new SentenceBuilder(clock);
  sb.setModeling(true);
  sb.setModeling(false);
  assert.equal(timers.size, 0);
});

test('blank words are ignored in both modes', () => {
  const { clock } = fakeClock();
  const sb = new SentenceBuilder(clock);
  assert.equal(sb.addWord({ label: '  ' }), false);
  sb.setModeling(true);
  sb.addWord({ label: '' });
  assert.deepEqual(sb.getModeling().modeled, []);
});
