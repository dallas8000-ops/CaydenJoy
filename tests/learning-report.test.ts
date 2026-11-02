// Run: npm run test:report   (Node >= 22.6 type-stripping; no extra deps)
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildReport, trialsToCsv, reportToHtml, type ReportTrial } from '../src/utils/learning-report.ts';

const DAY = 24 * 60 * 60 * 1000;
const NOW = new Date(2026, 10, 2, 18, 0, 0).getTime(); // 2 Nov 2026, 18:00 local

function t(partial: Partial<ReportTrial>): ReportTrial {
  return {
    game: 'puzzle-objects',
    targetId: 'cup',
    targetLabel: 'Cup',
    chosenId: 'cup',
    chosenLabel: 'Cup',
    result: 'independent',
    promptLevel: 0,
    fieldSize: 3,
    latencyMs: 1500,
    at: NOW - DAY,
    ...partial,
  };
}

/** n right-on-his-own answers for an item, spread over the given days ago. */
function independentRun(id: string, label: string, n: number, daysAgo: number[]): ReportTrial[] {
  return Array.from({ length: n }, (_, i) =>
    t({ targetId: id, targetLabel: label, chosenId: id, chosenLabel: label, at: NOW - daysAgo[i % daysAgo.length] * DAY + i * 1000 }),
  );
}

test('mastered needs 5+ questions, 80%+ on his own recently, on 2+ days', () => {
  const trials = [
    ...independentRun('cup', 'Cup', 6, [1, 2]), // mastered
    ...independentRun('ball', 'Ball', 6, [1]), // all on ONE day: not yet
    ...independentRun('shoes', 'Shoes', 4, [1, 2]), // only 4 questions: not yet
  ];
  const r = buildReport(trials, NOW);
  const items = Object.fromEntries(r.games[0].items.map((i) => [i.itemId, i.status]));
  assert.deepEqual(items, { cup: 'mastered', ball: 'learning', shoes: 'learning' });
  assert.equal(r.games[0].mastered, 1);
});

test('help and wrong picks count against mastery; errors are not questions', () => {
  const trials = [
    ...independentRun('cup', 'Cup', 6, [1, 2]),
    t({ targetId: 'cup', chosenId: 'ball', chosenLabel: 'Ball', result: 'error', at: NOW - 1000 }),
    t({ targetId: 'cup', result: 'prompted', promptLevel: 1, at: NOW - 900 }),
    t({ targetId: 'cup', result: 'prompted', promptLevel: 2, at: NOW - 800 }),
  ];
  const cup = buildReport(trials, NOW).games[0].items[0];
  assert.equal(cup.questions, 8);
  assert.equal(cup.errors, 1);
  assert.equal(cup.recentIndependentRate, 6 / 8); // 75% < 80%
  assert.equal(cup.status, 'learning');
});

test('only the last 10 questions decide mastery, so old struggles do not hold him back', () => {
  const old = Array.from({ length: 10 }, (_, i) => t({ result: 'prompted', at: NOW - 20 * DAY + i }));
  const recent = independentRun('cup', 'Cup', 10, [1, 2]);
  const cup = buildReport([...old, ...recent], NOW).games[0].items[0];
  assert.equal(cup.status, 'mastered');
  assert.equal(cup.questions, 20);
});

test('items that need the most help are listed first', () => {
  const trials = [
    ...independentRun('cup', 'Cup', 6, [1, 2]),
    t({ targetId: 'ball', targetLabel: 'Ball', result: 'prompted' }),
    t({ targetId: 'shoes', targetLabel: 'Shoes', result: 'independent' }),
  ];
  assert.deepEqual(buildReport(trials, NOW).games[0].items.map((i) => i.itemId), ['ball', 'shoes', 'cup']);
});

test('confusions: same wrong pick twice or more, most frequent first', () => {
  const err = (asked: string, picked: string) =>
    t({ game: 'puzzle-family', targetId: asked, targetLabel: asked, chosenId: picked, chosenLabel: picked, result: 'error' });
  const r = buildReport([err('Grandad', 'Mom'), err('Grandad', 'Mom'), err('Grandad', 'Mom'), err('Dad', 'Dog'), err('Dad', 'Dog'), err('Dog', 'Mom')], NOW);
  assert.deepEqual(r.confusions.map((c) => [c.askedFor, c.picked, c.count]), [['Grandad', 'Mom', 3], ['Dad', 'Dog', 2]]);
});

test('weekly buckets: 8 weeks ending today, older answers ignored', () => {
  const r = buildReport(
    [t({ at: NOW - 1000 }), t({ at: NOW - 1000, result: 'prompted' }), t({ at: NOW - 10 * DAY, result: 'error' }), t({ at: NOW - 90 * DAY })],
    NOW,
  );
  assert.equal(r.weeks.length, 8);
  const last = r.weeks[7];
  assert.equal(last.independent, 1);
  assert.equal(last.prompted, 1);
  assert.equal(r.weeks[6].errors, 1);
  assert.equal(r.weeks.reduce((n, w) => n + w.independent + w.prompted + w.errors, 0), 3);
});

test('games appear in a fixed order and only when played', () => {
  const r = buildReport([t({ game: 'numbers', targetLabel: 'Three' }), t({ game: 'colors', targetLabel: 'Red' })], NOW);
  assert.deepEqual(r.games.map((g) => g.title), ['Colors', 'Numbers']);
});

test('empty data gives an empty, valid report', () => {
  const r = buildReport([], NOW);
  assert.equal(r.games.length, 0);
  assert.equal(r.totals.questions, 0);
  assert.equal(r.firstAt, null);
  assert.match(reportToHtml(r), /No answers yet/);
});

test('CSV: readable columns, quotes escaped, spreadsheet formulas neutralised', () => {
  const csv = trialsToCsv([
    t({ targetLabel: 'Big "red" cup', chosenLabel: '=HYPERLINK("x")', result: 'error', promptLevel: 1, latencyMs: 2340 }),
  ]);
  const [header, row] = csv.trim().split('\r\n');
  assert.equal(header, 'Date and time,Game,Asked for,Picked,Result,Help given,Choices shown,Seconds to answer');
  assert.match(row, /,"Big ""red"" cup",/);
  assert.match(row, /,"'=HYPERLINK\(""x""\)",/);
  assert.match(row, /,Wrong pick,Fewer choices,3,2\.3$/);
});

test('printable report escapes names from uploaded photos', () => {
  const html = reportToHtml(buildReport([t({ targetLabel: '<img src=x onerror=alert(1)>' })], NOW));
  assert.ok(!html.includes('<img src=x'));
  assert.ok(html.includes('&lt;img src=x onerror=alert(1)&gt;'));
});
