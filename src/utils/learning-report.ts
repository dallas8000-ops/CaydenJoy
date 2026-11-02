/**
 * Learning Report
 *
 * Turns the saved learning-game answers (TrialStore) into what a caregiver,
 * teacher or therapist needs: which items Cayden knows on his own, which
 * still need help, what he mixes up, and the trend week by week.
 *
 * Pure functions, no DOM and no imports, so `node --test` can load it.
 *
 * Counting: one QUESTION ends with a right answer. A question answered
 * right on the first try with no help is "independent"; one answered right
 * after an error or with help is "prompted". Wrong taps are counted
 * separately as errors.
 *
 * Mastery rule (common teaching benchmark, adjustable via options):
 *   at least MIN_QUESTIONS questions on the item, and of the last
 *   WINDOW questions at least MASTERY_RATE were independent, spread
 *   across at least MIN_DAYS different days.
 */

export type ReportGame = 'puzzle-family' | 'puzzle-objects' | 'colors' | 'numbers' | 'places';
export type ReportResult = 'independent' | 'prompted' | 'error';

export interface ReportTrial {
  game: ReportGame;
  targetId: string;
  targetLabel: string;
  chosenId: string;
  chosenLabel: string;
  result: ReportResult;
  promptLevel: number;
  fieldSize: number;
  latencyMs: number;
  at: number;
}

export type ItemStatus = 'mastered' | 'learning';

export interface ItemReport {
  itemId: string;
  label: string;
  status: ItemStatus;
  questions: number;
  /** Share of the last WINDOW questions answered right on his own (0..1). */
  recentIndependentRate: number;
  recentQuestions: number;
  errors: number;
  lastSeen: number;
}

export interface GameReport {
  game: ReportGame;
  title: string;
  questions: number;
  independent: number;
  prompted: number;
  errors: number;
  mastered: number;
  items: ItemReport[];
}

export interface ConfusionPair {
  game: ReportGame;
  askedFor: string;
  picked: string;
  count: number;
}

export interface WeekBucket {
  /** Start of the 7-day window (ms). */
  start: number;
  independent: number;
  prompted: number;
  errors: number;
}

export interface LearningReport {
  generatedAt: number;
  firstAt: number | null;
  lastAt: number | null;
  totals: { questions: number; independent: number; prompted: number; errors: number; mastered: number };
  games: GameReport[];
  confusions: ConfusionPair[];
  weeks: WeekBucket[];
}

export interface ReportOptions {
  window?: number;
  masteryRate?: number;
  minQuestions?: number;
  minDays?: number;
  weeks?: number;
}

export const GAME_TITLES: Record<ReportGame, string> = {
  'puzzle-family': 'Picture Puzzle: Family',
  'puzzle-objects': 'Picture Puzzle: Objects',
  colors: 'Colors',
  numbers: 'Numbers',
  places: 'Places',
};

const GAME_ORDER: ReportGame[] = ['puzzle-family', 'puzzle-objects', 'colors', 'numbers', 'places'];
const DAY = 24 * 60 * 60 * 1000;

export const HELP_LEVEL_TEXT = ['No help', 'Fewer choices', 'Answer highlighted', 'Shown how'];

function dayKey(ms: number): string {
  const d = new Date(ms);
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}

export function buildReport(trials: ReportTrial[], now: number = Date.now(), options: ReportOptions = {}): LearningReport {
  const windowSize = options.window ?? 10;
  const masteryRate = options.masteryRate ?? 0.8;
  const minQuestions = options.minQuestions ?? 5;
  const minDays = options.minDays ?? 2;
  const weekCount = options.weeks ?? 8;

  const sorted = [...trials].filter((t) => t && GAME_TITLES[t.game]).sort((a, b) => a.at - b.at);
  const games: GameReport[] = [];

  for (const game of GAME_ORDER) {
    const gameTrials = sorted.filter((t) => t.game === game);
    if (gameTrials.length === 0) continue;

    const byItem = new Map<string, ReportTrial[]>();
    for (const t of gameTrials) {
      const list = byItem.get(t.targetId) ?? [];
      list.push(t);
      byItem.set(t.targetId, list);
    }

    const items: ItemReport[] = [];
    for (const [itemId, list] of byItem) {
      const answers = list.filter((t) => t.result !== 'error');
      const recent = answers.slice(-windowSize);
      const recentIndependent = recent.filter((t) => t.result === 'independent');
      const rate = recent.length ? recentIndependent.length / recent.length : 0;
      const days = new Set(recentIndependent.map((t) => dayKey(t.at))).size;
      const mastered = answers.length >= minQuestions && rate >= masteryRate && days >= minDays;
      items.push({
        itemId,
        label: list[list.length - 1].targetLabel,
        status: mastered ? 'mastered' : 'learning',
        questions: answers.length,
        recentIndependentRate: rate,
        recentQuestions: recent.length,
        errors: list.length - answers.length,
        lastSeen: list[list.length - 1].at,
      });
    }

    // Items that need the most help first; mastered items last.
    items.sort((a, b) =>
      a.status !== b.status
        ? (a.status === 'learning' ? -1 : 1)
        : a.recentIndependentRate - b.recentIndependentRate || a.label.localeCompare(b.label),
    );

    const independent = gameTrials.filter((t) => t.result === 'independent').length;
    const prompted = gameTrials.filter((t) => t.result === 'prompted').length;
    games.push({
      game,
      title: GAME_TITLES[game],
      questions: independent + prompted,
      independent,
      prompted,
      errors: gameTrials.length - independent - prompted,
      mastered: items.filter((i) => i.status === 'mastered').length,
      items,
    });
  }

  const pairCounts = new Map<string, ConfusionPair>();
  for (const t of sorted) {
    if (t.result !== 'error') continue;
    const key = `${t.game}|${t.targetId}|${t.chosenId}`;
    const pair = pairCounts.get(key) ?? { game: t.game, askedFor: t.targetLabel, picked: t.chosenLabel, count: 0 };
    pair.count += 1;
    pairCounts.set(key, pair);
  }
  const confusions = [...pairCounts.values()]
    .filter((p) => p.count >= 2)
    .sort((a, b) => b.count - a.count || a.askedFor.localeCompare(b.askedFor))
    .slice(0, 6);

  const startOfToday = new Date(now);
  startOfToday.setHours(0, 0, 0, 0);
  const end = startOfToday.getTime() + DAY;
  const weeks: WeekBucket[] = Array.from({ length: weekCount }, (_, i) => ({
    start: end - (weekCount - i) * 7 * DAY,
    independent: 0,
    prompted: 0,
    errors: 0,
  }));
  for (const t of sorted) {
    const idx = Math.floor((t.at - weeks[0].start) / (7 * DAY));
    if (idx < 0 || idx >= weekCount) continue;
    weeks[idx][t.result === 'independent' ? 'independent' : t.result === 'prompted' ? 'prompted' : 'errors'] += 1;
  }

  const totals = games.reduce(
    (acc, g) => ({
      questions: acc.questions + g.questions,
      independent: acc.independent + g.independent,
      prompted: acc.prompted + g.prompted,
      errors: acc.errors + g.errors,
      mastered: acc.mastered + g.mastered,
    }),
    { questions: 0, independent: 0, prompted: 0, errors: 0, mastered: 0 },
  );

  return {
    generatedAt: now,
    firstAt: sorted.length ? sorted[0].at : null,
    lastAt: sorted.length ? sorted[sorted.length - 1].at : null,
    totals,
    games,
    confusions,
    weeks,
  };
}

function csvCell(value: string | number): string {
  const s = String(value);
  // Neutralise spreadsheet formula injection from uploaded photo names.
  const safe = /^[=+\-@\t\r]/.test(s) ? `'${s}` : s;
  return /[",\n\r]/.test(safe) ? `"${safe.replace(/"/g, '""')}"` : safe;
}

function isoLocal(ms: number): string {
  const d = new Date(ms);
  const p = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())} ${p(d.getHours())}:${p(d.getMinutes())}`;
}

/** Every answer, one row each, oldest first. Opens in Excel, Google Sheets or Numbers. */
export function trialsToCsv(trials: ReportTrial[]): string {
  const header = ['Date and time', 'Game', 'Asked for', 'Picked', 'Result', 'Help given', 'Choices shown', 'Seconds to answer'];
  const resultText: Record<ReportResult, string> = {
    independent: 'Right on his own',
    prompted: 'Right with help',
    error: 'Wrong pick',
  };
  const rows = [...trials]
    .sort((a, b) => a.at - b.at)
    .map((t) => [
      isoLocal(t.at),
      GAME_TITLES[t.game] ?? t.game,
      t.targetLabel,
      t.chosenLabel,
      resultText[t.result] ?? t.result,
      HELP_LEVEL_TEXT[t.promptLevel] ?? String(t.promptLevel),
      t.fieldSize,
      (Math.max(0, t.latencyMs) / 1000).toFixed(1),
    ]);
  return [header, ...rows].map((r) => r.map(csvCell).join(',')).join('\r\n') + '\r\n';
}

function esc(s: string | number): string {
  return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c] as string);
}

function pct(n: number): string {
  return `${Math.round(n * 100)}%`;
}

function shortDate(ms: number): string {
  return new Date(ms).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
}

/** A self-contained, printable HTML report (print it, or "Save as PDF"). */
export function reportToHtml(report: LearningReport, childName = 'Cayden'): string {
  const range = report.firstAt && report.lastAt ? `${shortDate(report.firstAt)} to ${shortDate(report.lastAt)}` : 'No answers yet';
  const t = report.totals;
  const own = t.questions ? pct(t.independent / t.questions) : '0%';

  const gameSections = report.games
    .map(
      (g) => `
      <h2>${esc(g.title)}</h2>
      <p>${g.questions} questions · ${g.independent} right on his own · ${g.prompted} right with help · ${g.errors} wrong picks · ${g.mastered} of ${g.items.length} items mastered</p>
      <table>
        <thead><tr><th>Item</th><th>Status</th><th>On his own (recent)</th><th>Questions</th><th>Wrong picks</th><th>Last practised</th></tr></thead>
        <tbody>
          ${g.items
            .map(
              (i) => `<tr><td>${esc(i.label)}</td><td>${i.status === 'mastered' ? 'Mastered' : 'Learning'}</td><td>${pct(i.recentIndependentRate)} of ${i.recentQuestions}</td><td>${i.questions}</td><td>${i.errors}</td><td>${esc(shortDate(i.lastSeen))}</td></tr>`,
            )
            .join('')}
        </tbody>
      </table>`,
    )
    .join('');

  const confusions = report.confusions.length
    ? `<h2>Often mixed up</h2><ul>${report.confusions
        .map((c) => `<li>Asked for <b>${esc(c.askedFor)}</b>, picked <b>${esc(c.picked)}</b> (${c.count} times, ${esc(GAME_TITLES[c.game])})</li>`)
        .join('')}</ul>`
    : '';

  const weeks = `<h2>Week by week</h2><table><thead><tr><th>Week starting</th><th>Right on his own</th><th>Right with help</th><th>Wrong picks</th></tr></thead><tbody>${report.weeks
    .map((w) => `<tr><td>${esc(shortDate(w.start))}</td><td>${w.independent}</td><td>${w.prompted}</td><td>${w.errors}</td></tr>`)
    .join('')}</tbody></table>`;

  return `<!doctype html><html><head><meta charset="utf-8"><title>${esc(childName)} - CaydenJoy learning report</title>
<style>
  body { font-family: -apple-system, Segoe UI, Roboto, Arial, sans-serif; color: #1f2937; margin: 24px; }
  h1 { margin: 0 0 4px; font-size: 22px; } h2 { margin: 22px 0 6px; font-size: 16px; }
  p { margin: 4px 0; font-size: 13px; } .meta { color: #4b5563; }
  table { width: 100%; border-collapse: collapse; font-size: 12px; margin-top: 6px; }
  th, td { border: 1px solid #d1d5db; padding: 5px 7px; text-align: left; } th { background: #f3f4f6; }
  ul { font-size: 13px; padding-left: 18px; } .note { margin-top: 20px; color: #6b7280; font-size: 11px; }
  @page { margin: 14mm; }
</style></head><body>
  <h1>${esc(childName)}'s learning report</h1>
  <p class="meta">CaydenJoy · ${esc(range)} · printed ${esc(shortDate(report.generatedAt))}</p>
  <p><b>${t.questions}</b> questions answered · <b>${own}</b> right on his own · <b>${t.mastered}</b> items mastered</p>
  ${gameSections}
  ${confusions}
  ${weeks}
  <p class="note">Mastered = right on his own in at least 80% of his last 10 questions on that item, on at least 2 different days, with at least 5 questions answered. Data is recorded on the device and is not sent anywhere.</p>
</body></html>`;
}
