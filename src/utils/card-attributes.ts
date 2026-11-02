/**
 * Card Attributes
 *
 * The short facts the learning games speak after a wrong pick, for the
 * built-in pictures. Caregiver-uploaded photos carry their own fact
 * (CustomImage.fact). Family members and pets get no facts on purpose:
 * the app names people, it never describes them.
 *
 * Keyed by the card id each page already uses. Colors, Numbers and Places
 * add their entries here when their learning games arrive (plan step 4).
 */

export interface CardFact {
  fact: string;
  plural?: boolean;
}

export const OBJECT_FACTS: Record<string, CardFact> = {
  cup: { fact: 'A cup is for drinking.' },
  shoes: { fact: 'Shoes go on your feet.', plural: true },
  toothbrush: { fact: 'A toothbrush cleans your teeth.' },
  ball: { fact: 'A ball is for playing.' },
  headphones: { fact: 'Headphones go on your ears.', plural: true },
  backpack: { fact: 'A backpack carries your things.' },
};

export function objectFact(id: string): CardFact | undefined {
  return OBJECT_FACTS[id];
}

/** Colors game: one familiar thing of that color. */
export const COLOR_FACTS: Record<string, CardFact> = {
  red: { fact: 'A fire truck is red.' },
  blue: { fact: 'The sky is blue.' },
  green: { fact: 'Grass is green.' },
  yellow: { fact: 'A banana is yellow.' },
  purple: { fact: 'Grapes can be purple.' },
  pink: { fact: 'A flamingo is pink.' },
  orange: { fact: 'An orange is orange.' },
  brown: { fact: 'Chocolate is brown.' },
  black: { fact: 'The night sky is black.' },
  white: { fact: 'Milk is white.' },
};

/** Places game: what we do there. */
export const PLACE_FACTS: Record<string, CardFact> = {
  home: { fact: 'We sleep at home.' },
  school: { fact: 'We learn at school.' },
  park: { fact: 'We play outside at the park.' },
  store: { fact: 'We buy food at the store.' },
  doctor: { fact: 'The doctor helps us feel better.' },
  beach: { fact: 'We play in the sand at the beach.' },
  restaurant: { fact: 'We eat at a restaurant.' },
  library: { fact: 'We read books at the library.' },
  zoo: { fact: 'We see animals at the zoo.' },
  therapy: { fact: 'We practise new things at therapy.' },
  playground: { fact: 'We swing and slide at the playground.' },
};

export function colorFact(id: string): CardFact | undefined {
  return COLOR_FACTS[id];
}

export function placeFact(id: string): CardFact | undefined {
  return PLACE_FACTS[id];
}
