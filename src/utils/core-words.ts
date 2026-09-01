/**
 * Core vocabulary word list.
 *
 * AAC design background: "core vocabulary" is the small set of high-frequency
 * words (pronouns, verbs, descriptors, negation, prepositions) that make up
 * the bulk of everyday spoken language and recombine with open-ended "fringe"
 * vocabulary (food names, place names, people's names) to generate new
 * sentences on the fly. Every established AAC system (Proloquo2Go, LAMP
 * Words for Life, TouchChat, TD Snap) puts a fixed set of these words in a
 * FIXED screen position across the whole app, so the position itself becomes
 * memorized ("motor planning") the same way a keyboard layout does.
 *
 * These 20 words are CaydenJoy's first core set. Category is used purely for
 * Fitzgerald-Key-style color coding (a long-standing AAC convention), not for
 * layout grouping - position within the bar is fixed and does not change.
 *
 * Icons: Mulberry Symbols (https://mulberrysymbols.org), CC BY-SA 4.0,
 * Copyright 2018-2026 Steve Lee. Words without a suitable pictogram in that
 * set (mostly abstract pronouns/negation) intentionally ship as clean
 * color-coded text tiles instead of a stretched or misleading icon match -
 * that's standard practice in real AAC boards, not a placeholder.
 */

import wantIcon from '../assets/symbols/core/want.svg';
import goIcon from '../assets/symbols/core/go.svg';
import helpIcon from '../assets/symbols/core/help.svg';
import lookIcon from '../assets/symbols/core/look.svg';
import eatIcon from '../assets/symbols/core/eat.svg';
import drinkIcon from '../assets/symbols/core/drink.svg';
import playIcon from '../assets/symbols/core/play.svg';
import giveIcon from '../assets/symbols/core/give.svg';
import moreIcon from '../assets/symbols/core/more.svg';
import littleIcon from '../assets/symbols/core/little.svg';
import finishedIcon from '../assets/symbols/core/finished.svg';
import inIcon from '../assets/symbols/core/in.svg';
import outIcon from '../assets/symbols/core/out.svg';

export type CoreWordCategory = 'pronoun' | 'verb' | 'descriptor' | 'preposition' | 'social' | 'negation';

export interface CoreWord {
  id: string;
  label: string;
  category: CoreWordCategory;
  iconUrl?: string;
}

export const CORE_WORDS: CoreWord[] = [
  { id: 'i', label: 'I', category: 'pronoun' },
  { id: 'you', label: 'you', category: 'pronoun' },
  { id: 'want', label: 'want', category: 'verb', iconUrl: wantIcon },
  { id: 'go', label: 'go', category: 'verb', iconUrl: goIcon },
  { id: 'stop', label: 'stop', category: 'verb' },
  { id: 'help', label: 'help', category: 'verb', iconUrl: helpIcon },
  { id: 'like', label: 'like', category: 'verb' },
  { id: 'look', label: 'look', category: 'verb', iconUrl: lookIcon },
  { id: 'eat', label: 'eat', category: 'verb', iconUrl: eatIcon },
  { id: 'drink', label: 'drink', category: 'verb', iconUrl: drinkIcon },
  { id: 'play', label: 'play', category: 'verb', iconUrl: playIcon },
  { id: 'give', label: 'give', category: 'verb', iconUrl: giveIcon },
  { id: 'more', label: 'more', category: 'descriptor', iconUrl: moreIcon },
  { id: 'little', label: 'little', category: 'descriptor', iconUrl: littleIcon },
  { id: 'finished', label: 'finished', category: 'descriptor', iconUrl: finishedIcon },
  { id: 'again', label: 'again', category: 'descriptor' },
  { id: 'in', label: 'in', category: 'preposition', iconUrl: inIcon },
  { id: 'out', label: 'out', category: 'preposition', iconUrl: outIcon },
  { id: 'yes', label: 'yes', category: 'social' },
  { id: 'no', label: 'no', category: 'negation' },
];

export const CORE_WORD_ATTRIBUTION =
  'Some core word icons: Mulberry Symbols by Steve Lee, licensed under CC BY-SA 4.0. See https://mulberrysymbols.org';
