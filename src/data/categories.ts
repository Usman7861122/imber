/** Category (group) pages. Hero images are chosen per category. TODO (Dr. Slack): review copy. */
import { localCity } from './treatments';

export type Category = {
  slug: string;
  title: string;
  href: string;
  intro: string; // used on the treatments page card
  description: string;
  lede: string;
  hero: string;
  heroAlt: string;
  heroPosition?: string;
  listTitle: string;
  listText: string;
  approachTitle: string;
  approach: { t: string; x: string }[];
  /** true = listed on the Treatments page. Conditions are listed there only through the menu. */
  inTreatments?: boolean;
};

const IMG = '/images/treatments/';

export const categories: Category[] = [
  {
    slug: 'injectables-toxins',
    title: 'Injectables & Toxins',
    href: '/injectables-toxins/',
    intro: 'Soften lines, restore volume and shape your face with natural-looking results.',
    description: `Filler, tox, facial slimming, lip volume and facial fat grafting with Dr. Laura Slack at Imber Medical in ${localCity}. Natural-looking results planned around your face.`,
    lede: 'Soften lines, restore volume and shape your face with care. Every plan is made for you by Dr. Laura Slack.',
    hero: IMG + 'filler-tox-1.jpg',
    heroAlt: 'A woman with calm, glowing skin',
    listTitle: 'Find the care that fits your face',
    listText: 'Not sure which one you need? Book a consultation. Dr. Slack will look at your whole face and suggest only what makes sense.',
    approachTitle: 'Natural, never overdone',
    approach: [
      { t: 'Listen first', x: 'We start with what you see in the mirror and what you want to change.' },
      { t: 'Plan small', x: 'Small, careful steps keep your look natural. We can always add more later.' },
      { t: 'Physician-led', x: 'Dr. Slack plans and performs each treatment, and follows up after.' },
    ],
  },
  {
    slug: 'hair-restoration-removal',
    title: 'Hair Restoration & Removal',
    href: '/hair-restoration-removal/',
    intro: 'Support the hair you want to keep and remove the hair you do not.',
    description: `TED hair restoration, Xtresse hair growth products and laser hair removal with Dr. Laura Slack at Imber Medical in ${localCity}. Care planned around your hair and skin.`,
    lede: 'Support the hair you want to keep and remove the hair you do not. Every plan is made for you by Dr. Laura Slack.',
    hero: IMG + 'ted-1.jpg',
    heroAlt: 'A specialist checking a patient scalp with a magnifying light',
    listTitle: 'Find the care that fits your hair and skin',
    listText: 'Not sure which one you need? Book a consultation. Dr. Slack will look at your hair, scalp and skin and suggest only what makes sense.',
    approachTitle: 'Honest plans, steady results',
    approach: [
      { t: 'Listen first', x: 'We start with your goals and what you have already tried.' },
      { t: 'Plan small', x: 'Hair and skin change slowly. We set a clear plan and fair expectations.' },
      { t: 'Physician-led', x: 'Dr. Slack plans your care and checks your progress along the way.' },
    ],
  },
  {
    slug: 'tattoo-removal',
    title: 'Tattoo Removal',
    href: '/tattoo-removal/',
    intro: 'Fade unwanted body and brow tattoos safely, one careful step at a time.',
    description: `Body and brow tattoo removal with Dr. Laura Slack at Imber Medical in ${localCity}. Careful, physician-led laser treatment planned around your skin and your tattoo.`,
    lede: 'Fade a tattoo you no longer want, one careful step at a time. Every plan is made for you by Dr. Laura Slack.',
    hero: IMG + 'tattoo-removal-1.jpg',
    heroAlt: 'A woman with clear skin on her arm',
    listTitle: 'Find the care that fits your skin',
    listText: 'Every tattoo is different. Book a consultation and Dr. Slack will look at the ink, your skin and your goals, then explain what to expect.',
    approachTitle: 'Careful, one step at a time',
    approach: [
      { t: 'Look closely', x: 'We check the size, colors, age and place of your tattoo before we plan anything.' },
      { t: 'Go gently', x: 'Treatments are spaced apart so your skin can heal well between visits.' },
      { t: 'Physician-led', x: 'Dr. Slack plans your care and follows your progress at every visit.' },
    ],
  },
  {
    slug: 'skin-facial-rejuvenation',
    title: 'Skin & Facial Rejuvenation',
    href: '/skin-facial-rejuvenation/',
    intro: 'Refresh your skin with lasers, facials, peels, microneedling and regenerative care.',
    description: `Laser facials, RF microneedling, HydraFacial, chemical peels, PRP and regenerative skin care with Dr. Laura Slack at Imber Medical in ${localCity}.`,
    lede: 'Brighter, smoother, healthier-looking skin. Every plan is made for your skin by Dr. Laura Slack.',
    hero: IMG + 'laser-facial-1.jpg',
    heroAlt: 'A woman with glowing, healthy skin',
    listTitle: 'Find the care that fits your skin',
    listText: 'Not sure where to start? Book a consultation. Dr. Slack will look at your skin and suggest only what makes sense for you.',
    approachTitle: 'Healthy skin first',
    approach: [
      { t: 'Listen first', x: 'We start with your skin goals, your routine and what you have tried.' },
      { t: 'Match the treatment', x: 'Each option works in a different way. We choose the one that fits your skin and your time.' },
      { t: 'Physician-led', x: 'Dr. Slack plans your care and checks how your skin responds.' },
    ],
  },
  {
    slug: 'sexual-wellness',
    title: 'Sexual Wellness',
    href: '/sexual-wellness/',
    intro: 'Private, respectful care for men and women, led by a physician.',
    description: `Private, physician-led sexual wellness care for men and women with Dr. Laura Slack at Imber Medical in ${localCity}.`,
    lede: 'Private, respectful care for men and women. Every plan is made for you by Dr. Laura Slack.',
    hero: IMG + 'female-health-1.jpg',
    heroAlt: 'A doctor talking with a woman patient in a bright clinic',
    listTitle: 'Find the care that fits you',
    listText: 'These are personal topics, and we treat them that way. Book a private consultation and Dr. Slack will listen and explain your options.',
    approachTitle: 'Private and respectful',
    approach: [
      { t: 'Listen first', x: 'We start with a calm, private talk about what you are feeling and what you want.' },
      { t: 'Explain clearly', x: 'You get honest, plain answers about your options, so you can decide with confidence.' },
      { t: 'Physician-led', x: 'Dr. Slack leads your care and keeps your information private.' },
    ],
  },
  {
    slug: 'wellness-medical-weight-loss',
    title: 'Wellness & Medical Weight Loss',
    href: '/wellness-medical-weight-loss/',
    intro: 'Hormones, peptides, IV therapy and medical weight loss, guided by a physician.',
    description: `BHRT, peptide therapy, methylene blue, IV therapy and medical weight loss with Dr. Laura Slack at Imber Medical in ${localCity}.`,
    lede: 'Feel better from the inside out. Every plan is built around your health by Dr. Laura Slack.',
    hero: IMG + 'bhrt-1.jpg',
    heroAlt: 'A calm woman with her eyes closed',
    listTitle: 'Find the care that fits your health',
    listText: 'Your body and goals are your own. Book a consultation and Dr. Slack will review your health and suggest only what is right for you.',
    approachTitle: 'Your health, reviewed first',
    approach: [
      { t: 'Review first', x: 'We start with your history, your symptoms and, when needed, lab work.' },
      { t: 'Plan for you', x: 'Your plan fits your body and your life, and we adjust it as you go.' },
      { t: 'Physician-led', x: 'Dr. Slack decides what is safe for you and checks your progress.' },
    ],
  },
  {
    slug: 'body-contouring-sculpting',
    title: 'Body Contouring & Sculpting',
    href: '/body-contouring-sculpting/',
    intro: 'Non-surgical ways to reduce stubborn fat and define your shape.',
    description: `Non-surgical fat reduction body contouring and jaw contouring with Dr. Laura Slack at Imber Medical in ${localCity}.`,
    lede: 'Smooth, shape and define without surgery. Every plan is made for you by Dr. Laura Slack.',
    hero: IMG + 'body-contouring-1.jpg',
    heroAlt: 'A care provider checking a patient with a wearable monitor',
    listTitle: 'Find the care that fits your shape',
    listText: 'Not sure what will help? Book a consultation. Dr. Slack will look at your goals and suggest only what makes sense.',
    approachTitle: 'Shape with care',
    approach: [
      { t: 'Listen first', x: 'We start with the areas you want to change and what you hope to see.' },
      { t: 'Plan honestly', x: 'We tell you what a treatment can and cannot do, so your goals stay realistic.' },
      { t: 'Physician-led', x: 'Dr. Slack plans your care and checks your progress.' },
    ],
  },
  {
    slug: 'conditions',
    title: 'Conditions',
    href: '/conditions/',
    inTreatments: false,
    intro: 'Start with what you want to improve and see how we can help.',
    description: `Find care by concern at Imber Medical in ${localCity}: skin, hair, body, energy and more, guided by Dr. Laura Slack.`,
    lede: 'Start with what you want to improve. Dr. Laura Slack will explain how we can help.',
    hero: IMG + 'laser-facial-1.jpg',
    heroAlt: 'A woman receiving a gentle facial treatment',
    listTitle: 'Find care by concern',
    listText: 'Pick the concern that sounds most like you. Each page explains what it is, how we can help and what to expect.',
    approachTitle: 'Start with your concern',
    approach: [
      { t: 'Listen first', x: 'We start with what you notice and how long it has been going on.' },
      { t: 'Find the cause', x: 'We look at your skin, health history and goals before we suggest anything.' },
      { t: 'Physician-led', x: 'Dr. Slack plans your care and checks that it is safe and right for you.' },
    ],
  },
  {
    slug: 'technologies',
    title: 'Technologies',
    href: '/technologies/',
    inTreatments: false,
    intro: 'The devices we use for safe, precise, natural-looking results.',
    description: `The aesthetic devices used at Imber Medical in ${localCity}: lasers, radiofrequency, body contouring and more, guided by Dr. Laura Slack.`,
    lede: 'The right device is only part of great care. Dr. Laura Slack picks the tool that fits you, not the other way around.',
    hero: IMG + 'laser-facial-2.jpg',
    heroAlt: 'A woman receiving a gentle laser facial treatment',
    listTitle: 'Explore our devices',
    listText: 'Each page explains what the device does, who it suits and what to expect. Not sure which one you need? Book a consultation.',
    approachTitle: 'Technology with a plan',
    approach: [
      { t: 'Goals first', x: 'We start with what you want to change, then choose the device, not the other way around.' },
      { t: 'Right tool, right dose', x: 'Settings are planned for your skin type and comfort.' },
      { t: 'Physician-led', x: 'Dr. Slack oversees every plan and checks that it is safe for you.' },
    ],
  },
];
