export type Review = { author: string; text: string; rating: number; when?: string };

export const location = {
  name: 'Imber Medical',
  category: 'Skin care clinic in St. Simons, Georgia',
  address: ['1620 Frederica Road', 'St. Simons Island, GA 31522'],
  hours: [
    { days: 'Mon – Fri', time: '9am – 5pm' },
    { days: 'Sat – Sun', time: 'Closed' },
  ],
  /** Storefront photo from the live site (hot-linked for now; see scripts/fetch-service-images.sh) */
  photo: 'https://imbermedical.com/wp-content/uploads/2026/08/imber-outside.webp',
  mapEmbed:
    'https://maps.google.com/maps?q=Imber%20Medical%2C%201620%20Frederica%20Rd%2C%20St%20Simons%20Island%2C%20GA%2031522%2C%20United%20States&t=m&z=14&output=embed&iwloc=near',
  directions:
    'https://www.google.com/maps/dir/?api=1&destination=Imber+Medical%2C+1620+Frederica+Rd%2C+St+Simons+Island%2C+GA+31522',
};

/**
 * Stand-in reviews: the patient testimonials shown on the live site.
 * They are replaced by real Google reviews when PUBLIC_GOOGLE_REVIEWS_URL is set.
 */
export const sampleReviews: Review[] = [
  { author: 'Bailey G.', rating: 5, text: "Imber has best staff ever!! I got a laser done by Taylor and loved every second of it! I can't wait to come back and get more treatments from them!" },
  { author: 'Lara S.', rating: 5, text: 'It was phenomenal. I felt more like a friend than a patient. I will be back!!' },
  { author: 'Jessica M.', rating: 5, text: 'Your friendly bedside manner and the kindness of your staff made a difficult situation as pleasant as it could be.' },
  { author: 'Stef F.', rating: 5, text: 'This was worth a million bucks. I couldn’t be happier with my surgery results and my choice of your office. Best decision ever.' },
];
