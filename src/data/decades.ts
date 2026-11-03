export type Decade = {
  decade: string;
  name: string;
  goal: string;
  concerns: string[];
  services: string[];
  tagline: string;
  /** Photo from the live site (hot-linked for now; see scripts/fetch-service-images.sh) */
  image: string;
};

const U = 'https://imbermedical.com/wp-content/uploads/';

export const decades: Decade[] = [
  {
    decade: '20’s', name: 'Prevent + Perfect',
    goal: 'Prevention, acne control, skin clarity, and early collagen support',
    concerns: ['Acne / post-acne marks', 'Oil balance', 'Early sun damage', 'Preventative aging'],
    services: ['AviClear', 'Hydrafacial (Signature/Deluxe)', 'VI Peels', 'Pico Laser', 'Medical-grade skincare', 'LED / Red Light Therapy', 'Tox', 'Filler'],
    tagline: 'Invest early. Age later.',
    image: U + '2026/03/image-20s.webp',
  },
  {
    decade: '30’s', name: 'Correct + Maintain',
    goal: 'First signs of aging + maintaining glow',
    concerns: ['Fine lines', 'Uneven tone', 'Melasma', 'Early volume loss'],
    services: ['Tox', 'VI Peel Precision', 'Pico Laser', 'Hydrafacial Platinum', 'Microneedling / RF'],
    tagline: 'Subtle tweaks. Big impact.',
    image: U + '2026/03/background-2-2.jpg',
  },
  {
    decade: '40’s', name: 'Restore + Rebuild',
    goal: 'Collagen restoration + structural support',
    concerns: ['Volume loss', 'Skin laxity', 'Deeper lines', 'Hormonal skin changes', 'Fine Lines', 'Thinning Hair'],
    services: ['Filler', 'Attiva RF', 'Agnes RF', 'PRP / PRF', 'VI Peel Advanced', 'Hydrafacial', 'BHRT', 'Opus Plasma', 'Ted Hair Restoration', 'Submental Liposuction'],
    tagline: 'Bring back what time started to take.',
    image: U + '2026/03/40s-image-e1774986242244.webp',
  },
  {
    decade: '50’s', name: 'Lift + Tighten',
    goal: 'Skin tightening + facial contouring',
    concerns: ['Skin laxity', 'Jowls', 'Thinning skin', 'Loss of elasticity', 'Line & Wrinkles'],
    services: ['Attiva', 'BeautiFill with Fat Grafting', 'Submental Liposuction', 'Medical weight loss', 'Co2', 'Scarlett / RF', 'Opus Plasma'],
    tagline: 'Lift without surgery.',
    image: U + '2026/03/imge-50s.webp',
  },
  {
    decade: '60’s', name: 'Revitalize + Regenerate',
    goal: 'Skin health, quality, and natural rejuvenation',
    concerns: ['Volume loss', 'Thin, crepey skin', 'Age spots', 'Overall vitality'],
    services: ['CO2 resurfacing', 'Pico Laser', 'Hydrafacial', 'Red Light Therapy', 'BHRT', 'Scarlett / RF', 'Opus Plasma'],
    tagline: 'Age beautifully, not quietly.',
    image: U + '2026/08/sixty.jpg',
  },
];
