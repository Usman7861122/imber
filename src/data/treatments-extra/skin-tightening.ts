import type { Treatment } from '../treatments';

const localCity = 'St. Simons Island, GA';
const IMG = '/images/treatments/';
const group = { title: 'Skin & Facial Rejuvenation', href: '/skin-facial-rejuvenation/' };
const BOOK = 'Book a consultation online or call us at 912-268-2103.';

// TODO (Dr. Slack): review all copy. Photos are temporary stand-ins.
export const skinTightening: Treatment[] = [
  {
    slug: 'skin-tightening',
    group,
    title: 'Skin Tightening',
    seoTitle: `Skin Tightening in ${localCity}`,
    description:
      'Non-surgical skin tightening with Dr. Laura Slack at Imber Medical in St. Simons Island, GA. Radiofrequency options for firmer, smoother-looking skin on the face and body.',
    lede: 'Non-surgical options for skin that looks firmer and smoother, planned for your face and body by Dr. Laura Slack.',
    images: {
      hero: IMG + 'rf-microneedling-1.jpg',
      overview: IMG + 'tech-attiva-rf-2.jpg',
      fit: IMG + 'rf-microneedling-3.jpg',
      alt: {
        hero: 'A woman with smooth, firm-looking skin',
        overview: 'A skin tightening device used at Imber Medical',
        fit: 'A close view of healthy, even skin',
      },
    },
    overview: {
      title: 'Firmer skin, without surgery',
      paragraphs: [
        'Over time, skin can lose some of its firmness. It may look looser around the jawline, neck, cheeks or body. Skin tightening treatments aim to help it look firmer and smoother again.',
        'At Imber Medical, we use radiofrequency-based care. Dr. Slack looks at your skin first, then chooses the treatment and the settings that fit you.',
      ],
      cards: [
        {
          title: 'Energy that warms the skin',
          text: 'Radiofrequency energy gently warms the skin. Many people choose it to help skin look tighter and smoother over time.',
        },
        {
          title: 'More than one option',
          text: 'We can use RF microneedling, subdermal radiofrequency such as Attiva RF, or other tools. Which one fits you depends on your skin and your goals.',
        },
      ],
    },
    fit: {
      title: 'Is skin tightening right for you?',
      text: 'It is often a good fit for adults with mild to moderate looseness who want to avoid surgery. We check your skin and health history before we suggest anything.',
      concerns: [
        'Early looseness along the jawline',
        'Softening of the neck',
        'Skin that looks tired or crepey',
        'Mild looseness on the body',
        'Loss of firmness after weight change',
        'Rough texture or fine lines',
      ],
      goodFit: [
        'You want a non-surgical option',
        'You are open to a plan over time',
        'You have realistic goals',
        'You can plan for a short healing time',
        'You are in good general health',
      ],
    },
    benefits: [
      { title: 'Firmer look', text: 'Many people notice skin that looks tighter and smoother over time.' },
      { title: 'No surgery', text: 'No large cuts and no long recovery. Most people return to daily life quickly.' },
      { title: 'Face and body', text: 'We can plan care for areas such as the jawline, neck, face and body.' },
      { title: 'Physician-led', text: 'Dr. Slack plans each treatment and checks that it is right for you.' },
    ],
    steps: [
      { title: 'Consultation', text: 'We look at your skin, review your history and talk about what you want to change.' },
      { title: 'Plan', text: 'Dr. Slack chooses the treatment, the area and the number of visits that make sense for you.' },
      { title: 'Treatment', text: 'We prepare the area and use comfort measures such as numbing. Visit length depends on the area.' },
      { title: 'Aftercare', text: 'Skin may look pink or feel warm for a short time. We share clear care and sun protection tips.' },
      { title: 'Results', text: 'Skin keeps improving over weeks and months. We check your progress and adjust your plan.' },
    ],
    safety: {
      title: 'Your safety comes first',
      paragraphs: [
        'This is a medical treatment. Dr. Slack checks your skin and health history first, and we do not treat when it is not safe or when another kind of care would serve you better.',
        'Redness, warmth and mild swelling are common and usually fade quickly. Less common risks are explained before you decide. If you need a surgical option, we will tell you honestly.',
      ],
      items: ['Physician-planned treatment', 'Comfort measures for your visit', 'Skin and health history review', 'Honest advice on what fits you'],
    },
    faqs: [
      { q: 'Does skin tightening hurt?', a: 'Most people feel warmth or light pressure. We use comfort measures such as numbing when needed.' },
      { q: 'How long is the healing time?', a: 'It depends on the treatment. Many people have mild redness for a short time. We will tell you what to expect at your visit.' },
      { q: 'How many visits will I need?', a: 'It depends on your skin and goals. Dr. Slack will give you a clear plan.' },
      { q: 'When will I see results?', a: 'Skin renews slowly. Many people look for changes over the weeks and months after treatment.' },
      { q: 'Is it the same as skin rejuvenation?', a: 'They are related but not the same. Tightening focuses on firmness. Rejuvenation looks at texture, tone and overall skin health. We can plan both together.' },
      { q: 'How do I get started?', a: BOOK + ' We will look at your skin and make a plan that fits you.' },
    ],
    related: [
      { label: 'Attiva RF', href: '/technologies/attiva-rf/' },
      { label: 'RF Microneedling', href: '/skin-facial-rejuvenation/rf-microneedling/' },
      { label: 'Skin Rejuvenation (tightening)', href: '/conditions/skin-rejuvenation-tightening/' },
      { label: 'Skin & Facial Rejuvenation', href: '/skin-facial-rejuvenation/' },
    ],
  },
];
