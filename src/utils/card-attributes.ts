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
