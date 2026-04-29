import { PersonalityResult } from './types';

export const personalityResults: PersonalityResult[] = [
  // High WARMTH
  {
    traits: 'W+B',
    name: 'Nasi Lemak (The Icon)',
    emoji: '🍚',
    description: 'Grounded but commanding presence',
    image: '/assets/nasi_lemak.png',
    primaryTrait: 'W',
    secondaryTrait: 'B',
  },
  {
    traits: 'W+A',
    name: 'Chicken Rice (The Purist)',
    emoji: '🍗',
    description: 'Simple, dependable, widely loved',
    image: '/assets/chicken_rice.png',
    primaryTrait: 'W',
    secondaryTrait: 'A',
  },
  {
    traits: 'W+D',
    name: 'Fish Soup (The Grounding Presence)',
    emoji: '🍲',
    description: 'Calm, thoughtful, emotionally steady',
    image: '/assets/fish_soup.png',
    primaryTrait: 'W',
    secondaryTrait: 'D',
  },

  // High BOLDNESS
  {
    traits: 'B+W',
    name: 'Wanton Mee (The Connector)',
    emoji: '🍜',
    description: 'Charismatic, thrives with people',
    image: '/assets/wanton_mee.png',
    primaryTrait: 'B',
    secondaryTrait: 'W',
  },
  {
    traits: 'B+D',
    name: 'Sambal Stingray (The Challenger)',
    emoji: '🌶️',
    description: 'Intense, honest, unforgettable',
    image: '/assets/sambal_stingray.png',
    primaryTrait: 'B',
    secondaryTrait: 'D',
  },
  {
    traits: 'B+A',
    name: 'Satay & BBQ Wings (The Bold Presence)',
    emoji: '🍗',
    description: 'Expressive, dominant, high energy',
    image: '/assets/satay_and_bbq_wings.png',
    primaryTrait: 'B',
    secondaryTrait: 'A',
  },

  // High DEPTH
  {
    traits: 'D+W',
    name: 'Beancurd (The Support System)',
    emoji: '🧈',
    description: 'Quietly strong, uplifting others',
    image: '/assets/beancurd.png',
    primaryTrait: 'D',
    secondaryTrait: 'W',
  },
  {
    traits: 'D+B',
    name: 'Bar Chor Mee (The Intense Thinker)',
    emoji: '🍝',
    description: 'Complex, emotionally rich',
    image: '/assets/bar_chor_mee.png',
    primaryTrait: 'D',
    secondaryTrait: 'B',
  },
  {
    traits: 'D+A',
    name: 'Hokkien Mee (The Quiet Depth)',
    emoji: '🍜',
    description: 'Layered, subtle, underestimated',
    image: '/assets/hokkien_mee.png',
    primaryTrait: 'D',
    secondaryTrait: 'A',
  },

  // High ADAPTABILITY
  {
    traits: 'A+W',
    name: 'Roti Prata (The Adapter)',
    emoji: '🫓',
    description: 'Flexible, fits anywhere',
    image: '/assets/roti_prata.png',
    primaryTrait: 'A',
    secondaryTrait: 'W',
  },
  {
    traits: 'A+D',
    name: 'Orh Luak (The Individualist)',
    emoji: '🦪',
    description: 'Unique, not for everyone',
    image: '/assets/orh_luak.png',
    primaryTrait: 'A',
    secondaryTrait: 'D',
  },
  {
    traits: 'A+B',
    name: 'Duck Noodle (The Independent)',
    emoji: '🦆',
    description: 'Self-contained, strong identity',
    image: '/assets/duck_noodle.png',
    primaryTrait: 'A',
    secondaryTrait: 'B',
  },
];

export function getPersonalityResult(
  primaryTrait: string,
  secondaryTrait: string
): PersonalityResult | undefined {
  return personalityResults.find(
    (result) =>
      (result.primaryTrait === primaryTrait &&
        result.secondaryTrait === secondaryTrait) ||
      (result.primaryTrait === secondaryTrait &&
        result.secondaryTrait === primaryTrait)
  );
}
