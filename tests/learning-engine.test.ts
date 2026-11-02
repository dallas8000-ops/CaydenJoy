// Run: npm run test:learning   (Node >= 22.6 type-stripping; no extra deps)
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { LearningEngine, type LearningCard } from '../src/utils/learning-engine.ts';

const objects: LearningCard[] = [
  { id: 'cup', label: 'Cup', category: 'object', fact: 'A cup is for drinking.' },
  { id: 'shoes', label: 'Shoes', category: 'object', fact: 'Shoes go on your feet.', plural: true },
  { id: 'ball', label: 'Ball', category: 'object', fact: 'A ball is for playing.' },
  { id: 'apple', label: 'Apple', category: 'object' },
  { id: 'backpack', label: 'Backpack', category: 'object' },
];
const family: LearningCard[] = [
  { id: 'mom', label: 'Mom', category: 'person', fact: 'should never be spoken' },
  { id: 'dad', label: 'Dad', category: 'person' },
  { id: 'grandad', label: 'Grandad', category: 'person' },
];

function engine(cards = objects, fieldSize = 3, seed = 42) {
  const e = new LearningEngine({ fieldSize, seed, now: () => 1000 });
  e.setCards(cards);
  return e;
}

const wrongChoice = (t: { choices: string[]; targetId: string }) => t.choices.find((c) => c !== t.targetId)!;

test('a first-try right answer is independent and builds a streak', () => {
  const e = engine();
  const t = e.nextTrial()!;
  const out = e.answer(t.targetId);
  assert.equal(out.result, 'independent');
  assert.equal(out.correct, true);
  assert.equal(out.streak, 1);
});

test('trial shows the configured number of choices, including the target, with no duplicates', () => {
  const e = engine(objects, 4);
  const t = e.nextTrial()!;
  assert.equal(t.choices.length, 4);
  assert.ok(t.choices.includes(t.targetId));
  assert.equal(new Set(t.choices).size, 4);
});

test('a guess after an error is never scored independent', () => {
  const e = engine();
  const t = e.nextTrial()!;
  const err = e.answer(wrongChoice(t));
  assert.equal(err.result, 'error');
  assert.equal(err.promptLevel, 1);
  assert.equal(e.answer(t.targetId).result, 'prompted');
});

test('first error removes the picked card and explains; later errors do not lecture', () => {
  const e = engine(objects, 4);
  const t = e.nextTrial()!;
  const picked = wrongChoice(t);
  const first = e.answer(picked);
  assert.ok(first.explanation, 'first error explains');
  assert.ok(!first.trial.choices.includes(picked), 'picked card removed');
  assert.equal(first.trial.choices.length, 3);

  const second = e.answer(wrongChoice(first.trial));
  assert.equal(second.explanation, undefined);
  assert.equal(second.promptLevel, 2);
  assert.equal(second.trial.highlightTarget, true);
  assert.equal(second.trial.choices.length, 2);
  assert.ok(second.trial.choices.includes(t.targetId));

  const third = e.answer(wrongChoice(second.trial));
  assert.equal(third.promptLevel, 3);
  assert.equal(third.trial.model, true);
  assert.ok(third.trial.choices.includes(t.targetId));
  assert.equal(third.trial.choices.length, 2);
});

test('an item answered with help starts its next trial with less help, then fades to none', () => {
  const e = engine(objects.slice(0, 2), 2, 7); // only 2 cards: target alternates
  const t = e.nextTrial()!;
  e.answer(wrongChoice(t));
  e.answer(wrongChoice(e.currentTrial!)); // level 2
  e.answer(t.targetId); // prompted at level 2
  assert.equal(e.startLevelFor(t.targetId), 1, 'starts one step easier than the level that worked');

  // Answer every trial correctly until this item is back to no help.
  for (let i = 0; i < 6; i++) {
    const n = e.nextTrial()!;
    e.answer(n.targetId);
  }
  assert.equal(e.startLevelFor(t.targetId), 0, 'help faded away');
});

test('never the same target three trials running, and not back-to-back when avoidable', () => {
  const e = engine(objects, 3, 99);
  const ids: string[] = [];
  for (let i = 0; i < 60; i++) {
    const t = e.nextTrial()!;
    e.answer(t.targetId);
    ids.push(t.targetId);
  }
  for (let i = 1; i < ids.length; i++) assert.notEqual(ids[i], ids[i - 1]);
});

test('card positions are shuffled, not fixed in array order', () => {
  const e = engine(objects, 5, 3);
  const orders = new Set<string>();
  for (let i = 0; i < 10; i++) {
    const t = e.nextTrial()!;
    orders.add(t.choices.join(','));
    e.answer(t.targetId);
  }
  assert.ok(orders.size > 1);
});

test('explanations: object fact, plural grammar, and names only for people', () => {
  const [cup, shoes, , apple] = objects;
  assert.equal(LearningEngine.explain(shoes, cup), 'Those are shoes. Shoes go on your feet. Here is the cup.');
  assert.equal(LearningEngine.explain(cup, shoes), "That's a cup. A cup is for drinking. Here are the shoes.");
  assert.equal(LearningEngine.explain(apple, cup), "That's an apple. Here is the cup.");
  assert.equal(LearningEngine.explain(family[0], family[1]), "That's Mom. Here is Dad.");
});

test('prompts, praise and model lines name the item', () => {
  assert.equal(LearningEngine.prompt(family[0]), 'Find Mom.');
  assert.equal(LearningEngine.prompt(objects[0]), 'Find the cup.');
  assert.equal(LearningEngine.praise(objects[0], 'independent'), 'Yes! Cup.');
  assert.equal(LearningEngine.praise(family[1], 'prompted'), "That's it. Dad.");
  assert.equal(LearningEngine.model(family[2]), 'This is Grandad. Tap Grandad.');
});

test('fewer than two cards means no trial instead of a broken one', () => {
  const e = engine(objects.slice(0, 1));
  assert.equal(e.nextTrial(), null);
});

test('rejects a tap on a card that is not on screen', () => {
  const e = engine(objects, 2);
  const t = e.nextTrial()!;
  const offscreen = objects.find((c) => !t.choices.includes(c.id))!;
  assert.throws(() => e.answer(offscreen.id));
});
