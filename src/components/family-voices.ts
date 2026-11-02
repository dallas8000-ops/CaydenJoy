/**
 * <family-voices>
 *
 * Caregiver panel (Settings) for recording family voices:
 *   - praise clips, played as the "family voice" reward in learning games
 *   - a family voice for a word or name, played wherever that word is tapped
 *
 * Flow: fill in the fields -> Record -> (auto-stops after a few seconds or on
 * Stop) -> Listen / Save / Discard. Nothing is saved until Save is pressed,
 * and recordings never leave the device.
 */

import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import {
  VoiceClipStore,
  recordingSupported,
  startRecording,
  type ClipKind,
  type Recording,
  type RecordingSession,
  type VoiceClip,
} from '../utils/voice-clips.js';
import {
  MAX_CLIP_MS,
  MAX_LABEL_LENGTH,
  MAX_PRAISE_CLIPS,
  MAX_SPEAKER_LENGTH,
  microphoneErrorText,
} from '../utils/voice-clip-utils.js';
import { CORE_WORDS } from '../utils/core-words.js';

type Phase = 'idle' | 'starting' | 'recording' | 'review' | 'saving';

@customElement('family-voices')
export class FamilyVoices extends LitElement {
  @state() private clips: VoiceClip[] = [];
  @state() private phase: Phase = 'idle';
  @state() private kind: ClipKind = 'praise';
  @state() private praiseSpeaker = '';
  @state() private praiseWords = '';
  @state() private wordLabel = '';
  @state() private wordSpeaker = '';
  @state() private message = '';
  @state() private messageKind: 'info' | 'error' = 'info';
  @state() private secondsLeft = 0;

  private store = VoiceClipStore.getInstance();
  private unsubscribe?: () => void;
  private session: RecordingSession | null = null;
  private recording: Recording | null = null;
  private countdown = 0;

  static styles = css`
    :host { display: block; }
    .panel { display: grid; gap: 1.25rem; padding: 1.5rem; }
    .note { margin: 0; color: #4a5868; font-size: 0.95rem; line-height: 1.45; }
    h3 { margin: 0 0 0.5rem; font-size: 1.1rem; color: #243041; }
    .fields { display: grid; grid-template-columns: 1fr 1fr; gap: 0.6rem; margin-bottom: 0.6rem; }
    label { display: grid; gap: 0.25rem; font-weight: 700; font-size: 0.9rem; color: #243041; }
    input {
      min-height: 44px; padding: 0.5rem 0.65rem; font: inherit; font-size: 1rem;
      border: 2px solid #cfd8e3; border-radius: 0.45rem; background: #fff;
    }
    input:focus-visible { outline: 3px solid rgba(46, 143, 116, 0.35); border-color: #2e8f74; }
    button {
      min-height: 44px; padding: 0.5rem 0.9rem; border: 0; border-radius: 0.45rem;
      font: inherit; font-weight: 800; cursor: pointer;
    }
    button:disabled { opacity: 0.45; cursor: default; }
    .record { background: #c0392b; color: #fff; }
    .stop { background: #243041; color: #fff; }
    .save { background: #2e8f74; color: #fff; }
    .plain { background: #e8edf3; color: #243041; }
    .row-actions { display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: center; }
    .recorder {
      display: flex; flex-wrap: wrap; gap: 0.6rem; align-items: center;
      padding: 0.8rem; border-radius: 0.5rem; background: #fff4f2; border: 2px solid #f0b8ae;
    }
    .recorder.review { background: #edf7f4; border-color: #9fd6c4; }
    .dot { width: 0.8rem; height: 0.8rem; border-radius: 50%; background: #c0392b; animation: blink 1s infinite; }
    @keyframes blink { 50% { opacity: 0.25; } }
    @media (prefers-reduced-motion: reduce) { .dot { animation: none; } }
    ul { list-style: none; margin: 0 0 0.6rem; padding: 0; display: grid; gap: 0.4rem; }
    li {
      display: flex; gap: 0.5rem; align-items: center; justify-content: space-between;
      padding: 0.45rem 0.6rem; border: 1px solid #e3e8ef; border-radius: 0.45rem; background: #fafbfd;
    }
    .clip-text { font-weight: 700; color: #243041; overflow-wrap: anywhere; }
    .clip-meta { color: #6a7787; font-weight: 600; font-size: 0.85rem; }
    .empty { color: #6a7787; font-style: italic; margin: 0 0 0.6rem; }
    .msg { margin: 0; font-weight: 700; }
    .msg.info { color: #1f6b56; }
    .msg.error { color: #a5281b; }
    @media (max-width: 640px) { .fields { grid-template-columns: 1fr; } }
  `;

  connectedCallback(): void {
    super.connectedCallback();
    this.unsubscribe = this.store.subscribe((clips) => {
      this.clips = clips;
    });
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.unsubscribe?.();
    this.session?.cancel();
    this.session = null;
    window.clearInterval(this.countdown);
    this.store.stop();
  }

  private say(text: string, kind: 'info' | 'error' = 'info'): void {
    this.message = text;
    this.messageKind = kind;
  }

  private async record(kind: ClipKind): Promise<void> {
    if (this.phase !== 'idle') return;
    if (kind === 'word' && !this.wordLabel.trim()) {
      this.say('Type the word or name first, for example "Grandad" or "want".', 'error');
      return;
    }
    if (kind === 'praise' && this.clips.filter((c) => c.kind === 'praise').length >= MAX_PRAISE_CLIPS) {
      this.say(`You can keep up to ${MAX_PRAISE_CLIPS} praise clips. Delete one first.`, 'error');
      return;
    }
    this.store.stop();
    this.kind = kind;
    this.recording = null;
    this.phase = 'starting';
    this.say('');
    try {
      this.session = await startRecording(MAX_CLIP_MS);
    } catch (error) {
      this.phase = 'idle';
      this.say(microphoneErrorText(error), 'error');
      return;
    }
    this.phase = 'recording';
    this.secondsLeft = Math.round(MAX_CLIP_MS / 1000);
    window.clearInterval(this.countdown);
    this.countdown = window.setInterval(() => {
      this.secondsLeft = Math.max(0, this.secondsLeft - 1);
    }, 1000);
    const session = this.session;
    session.done
      .then((rec) => {
        if (this.session !== session) return;
        this.finishRecording(rec);
      })
      .catch(() => {
        if (this.session !== session) return;
        this.session = null;
        window.clearInterval(this.countdown);
        this.phase = 'idle';
      });
  }

  private finishRecording(rec: Recording): void {
    this.session = null;
    window.clearInterval(this.countdown);
    this.recording = rec;
    this.phase = 'review';
    this.say('Listen, then Save or Discard.');
  }

  private stopRecording(): void {
    void this.session?.stop();
  }

  private listen(): void {
    if (!this.recording) return;
    const preview: VoiceClip = {
      id: 'preview',
      kind: this.kind,
      key: 'preview',
      label: '',
      speaker: '',
      blob: this.recording.blob,
      mimeType: this.recording.mimeType,
      durationMs: this.recording.durationMs,
      createdAt: Date.now(),
    };
    void this.store.play(preview).then((ok) => {
      if (!ok) this.say('That recording would not play on this device. Please record it again.', 'error');
    });
  }

  private discard(): void {
    this.store.stop();
    this.recording = null;
    this.phase = 'idle';
    this.say('Recording discarded.');
  }

  private async save(): Promise<void> {
    if (!this.recording || this.phase !== 'review') return;
    this.store.stop();
    this.phase = 'saving';
    const isPraise = this.kind === 'praise';
    try {
      const clip = await this.store.save({
        kind: this.kind,
        label: isPraise ? this.praiseWords : this.wordLabel,
        speaker: isPraise ? this.praiseSpeaker : this.wordSpeaker,
        blob: this.recording.blob,
        durationMs: this.recording.durationMs,
      });
      this.recording = null;
      this.phase = 'idle';
      if (isPraise) {
        this.praiseWords = '';
        this.say('Praise saved. Choose "Family voice" under Learning Games to use it.');
      } else {
        this.wordLabel = '';
        this.say(`Saved. Tapping "${clip.label}" now plays this recording.`);
      }
    } catch (error) {
      this.phase = 'review';
      this.say(error instanceof Error ? error.message : 'The recording could not be saved.', 'error');
    }
  }

  private async deleteClip(clip: VoiceClip): Promise<void> {
    const what = clip.kind === 'praise' ? 'this praise clip' : `the recording for "${clip.label}"`;
    if (!confirm(`Delete ${what}?`)) return;
    await this.store.remove(clip.id);
    this.say('Deleted.');
  }

  private renderClip(clip: VoiceClip) {
    const seconds = (clip.durationMs / 1000).toFixed(1);
    return html`
      <li data-testid="voice-clip" data-kind=${clip.kind}>
        <span>
          <span class="clip-text">${clip.label}</span>
          <span class="clip-meta">${clip.speaker ? ` · ${clip.speaker}` : ''} · ${seconds} s</span>
        </span>
        <span class="row-actions">
          <button class="plain" aria-label="Play ${clip.label}" @click=${() => void this.store.play(clip)}>▶</button>
          <button class="plain" aria-label="Delete ${clip.label}" @click=${() => void this.deleteClip(clip)}>🗑</button>
        </span>
      </li>
    `;
  }

  private renderRecorder(kind: ClipKind) {
    if (this.kind !== kind || this.phase === 'idle') return '';
    if (this.phase === 'starting') {
      return html`<div class="recorder" role="status">Allow the microphone if asked…</div>`;
    }
    if (this.phase === 'recording') {
      return html`
        <div class="recorder" role="status" data-testid="recorder">
          <span class="dot" aria-hidden="true"></span>
          <strong>Recording… ${this.secondsLeft}s</strong>
          <button class="stop" data-testid="stop-recording" @click=${this.stopRecording}>■ Stop</button>
        </div>
      `;
    }
    return html`
      <div class="recorder review" data-testid="recorder-review">
        <button class="plain" data-testid="listen-recording" @click=${this.listen}>▶ Listen</button>
        <button class="save" data-testid="save-recording" ?disabled=${this.phase === 'saving'} @click=${() => void this.save()}>Save</button>
        <button class="plain" ?disabled=${this.phase === 'saving'} @click=${this.discard}>Discard</button>
      </div>
    `;
  }

  render() {
    const praise = this.clips.filter((c) => c.kind === 'praise');
    const words = this.clips.filter((c) => c.kind === 'word');
    const busy = this.phase !== 'idle';
    const supported = recordingSupported();

    return html`
      <div class="panel">
        <p class="note">
          Record short clips in a family member's own voice. They stay on this device only: they are never uploaded
          and are not part of any report or export.
        </p>
        ${supported ? '' : html`<p class="msg error">Recording is not available in this browser. Use the CaydenJoy app on the tablet.</p>`}

        <section>
          <h3>Praise for right answers</h3>
          ${praise.length ? html`<ul>${praise.map((c) => this.renderClip(c))}</ul>` : html`<p class="empty">No praise clips yet.</p>`}
          <div class="fields">
            <label>Who is speaking?
              <input data-testid="praise-speaker" maxlength=${MAX_SPEAKER_LENGTH} placeholder="Grandad"
                .value=${this.praiseSpeaker} @input=${(e: Event) => { this.praiseSpeaker = (e.target as HTMLInputElement).value; }} />
            </label>
            <label>What you will say (optional)
              <input data-testid="praise-words" maxlength=${MAX_LABEL_LENGTH} placeholder="Good job, Cayden!"
                .value=${this.praiseWords} @input=${(e: Event) => { this.praiseWords = (e.target as HTMLInputElement).value; }} />
            </label>
          </div>
          <div class="row-actions">
            <button class="record" data-testid="record-praise" ?disabled=${busy || !supported || praise.length >= MAX_PRAISE_CLIPS}
              @click=${() => void this.record('praise')}>● Record praise</button>
            <span class="clip-meta">${praise.length}/${MAX_PRAISE_CLIPS} · up to ${MAX_CLIP_MS / 1000} seconds</span>
          </div>
          ${this.renderRecorder('praise')}
        </section>

        <section>
          <h3>Words and names in a family voice</h3>
          ${words.length ? html`<ul>${words.map((c) => this.renderClip(c))}</ul>` : html`<p class="empty">No words recorded yet.</p>`}
          <div class="fields">
            <label>Word or name (exactly as on the button)
              <input data-testid="word-label" list="core-word-list" maxlength=${MAX_LABEL_LENGTH} placeholder="Grandad"
                .value=${this.wordLabel} @input=${(e: Event) => { this.wordLabel = (e.target as HTMLInputElement).value; }} />
              <datalist id="core-word-list">${CORE_WORDS.map((w) => html`<option value=${w.label}></option>`)}</datalist>
            </label>
            <label>Who is speaking?
              <input data-testid="word-speaker" maxlength=${MAX_SPEAKER_LENGTH} placeholder="Mom"
                .value=${this.wordSpeaker} @input=${(e: Event) => { this.wordSpeaker = (e.target as HTMLInputElement).value; }} />
            </label>
          </div>
          <div class="row-actions">
            <button class="record" data-testid="record-word" ?disabled=${busy || !supported} @click=${() => void this.record('word')}>● Record word</button>
            <span class="clip-meta">Recording a word again replaces the old one.</span>
          </div>
          ${this.renderRecorder('word')}
        </section>

        <p class="msg ${this.messageKind}" data-testid="voice-message" aria-live="polite">${this.message}</p>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'family-voices': FamilyVoices;
  }
}
