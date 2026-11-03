import type { Treatment } from '../treatments';

const localCity = 'St. Simons Island, GA';
const IMG = '/images/treatments/';
const group = { title: 'Technologies', href: '/technologies/' };
const allTech = { label: 'All Technologies', href: '/technologies/' };

type Spec = {
  slug: string; title: string; set: string; description: string; lede: string;
  alt: [string, string, string];
  ovTitle: string; ov: [string, string]; cards: [{ title: string; text: string }, { title: string; text: string }];
  fitTitle: string; fitText: string; concerns: string[]; goodFit: string[];
  benefits: { title: string; text: string }[];
  steps: { title: string; text: string }[];
  safetyTitle: string; safety: [string, string]; safetyItems: string[];
  faqs: { q: string; a: string }[];
  related: { label: string; href: string }[];
};

const build = (s: Spec): Treatment => ({
  slug: s.slug,
  group,
  title: s.title,
  seoTitle: `${s.title} in ${localCity}`,
  description: s.description,
  lede: s.lede,
  images: {
    hero: IMG + s.set + '-1.jpg',
    overview: IMG + s.set + '-2.jpg',
    fit: IMG + s.set + '-3.jpg',
    alt: { hero: s.alt[0], overview: s.alt[1], fit: s.alt[2] },
  },
  overview: { title: s.ovTitle, paragraphs: s.ov, cards: s.cards },
  fit: { title: s.fitTitle, text: s.fitText, concerns: s.concerns, goodFit: s.goodFit },
  benefits: s.benefits,
  steps: s.steps,
  safety: { title: s.safetyTitle, paragraphs: s.safety, items: s.safetyItems },
  faqs: s.faqs,
  related: [...s.related, allTech],
});

const bookFaq = { q: 'How do I get started?', a: 'Book a consultation online or call us at 912-268-2103. Dr. Slack will listen and plan with you.' };

export const techC: Treatment[] = [
  build({
    slug: 'hydrafacial',
    title: 'HydraFacial',
    set: 'tech-hydrafacial',
    description:
      'HydraFacial at Imber Medical in St. Simons Island, GA. A gentle facial that cleanses, exfoliates, extracts and hydrates, planned by Dr. Laura Slack.',
    lede: 'A gentle facial that cleans, exfoliates and hydrates in one visit. Your skin feels fresh and there is no downtime.',
    alt: ['A woman with fresh, hydrated skin', 'A provider giving a facial treatment', 'A woman smiling with glowing skin'],
    ovTitle: 'A deep clean that feels calm',
    ov: [
      'HydraFacial is a medical-style facial. A handheld device uses a gentle swirl and suction to clear dead skin and clogged pores, then it delivers a serum to hydrate your skin.',
      'At Imber Medical, we choose the serums and add-ons for your skin type and goals. It is a good way to refresh your skin before an event or to keep it healthy between other treatments.',
    ],
    cards: [
      { title: 'Cleanse and exfoliate', text: 'The device lifts away dead skin cells and oil so your skin looks clearer and smoother.' },
      { title: 'Extract and hydrate', text: 'Gentle suction clears pores, and a hydrating serum goes in right after.' },
    ],
    fitTitle: 'Who is HydraFacial for?',
    fitText: 'Most skin types can enjoy it. We check your skin first and tell you if another treatment fits you better.',
    concerns: ['Dull or tired-looking skin', 'Clogged pores or blackheads', 'Dry or dehydrated skin', 'Uneven texture', 'Fine lines that look worse when skin is dry', 'Skin that needs a refresh before an event'],
    goodFit: ['You want a gentle treatment with no downtime', 'You like a regular skin care routine', 'Your skin is not currently irritated or sunburned', 'You want to keep skin healthy between other treatments', 'You understand results are mild and short term'],
    benefits: [
      { title: 'Comfortable', text: 'Most people find it relaxing, with no needles and no cuts.' },
      { title: 'No downtime', text: 'You can return to your day right after your visit.' },
      { title: 'Made for your skin', text: 'We pick serums and boosters that match your skin type.' },
      { title: 'A simple start', text: 'It is an easy first step into medical skin care.' },
    ],
    steps: [
      { title: 'Skin check', text: 'We look at your skin and ask about products, allergies and goals.' },
      { title: 'Cleanse and peel', text: 'The device cleans the skin and gently exfoliates.' },
      { title: 'Extract', text: 'Suction clears out pores in a comfortable way.' },
      { title: 'Hydrate', text: 'A serum is applied to feed and hydrate your skin.' },
      { title: 'Aftercare', text: 'We give you simple tips, including daily sunscreen.' },
    ],
    safetyTitle: 'Gentle, and checked first',
    safety: [
      'HydraFacial is a low-risk treatment. Some people have mild redness for a short time. Tell us about allergies, active acne flares, sunburn or skin conditions before we start.',
      'Results vary from person to person. For deeper concerns, Dr. Slack may suggest a peel, microneedling or laser treatment instead or in addition.',
    ],
    safetyItems: ['Skin check first', 'Serums matched to your skin', 'Honest advice on other options', 'Physician-led clinic'],
    faqs: [
      { q: 'Does it hurt?', a: 'No. Most people feel a light tingle or gentle suction and find it relaxing.' },
      { q: 'How long does it take?', a: 'A visit usually takes about 30 to 60 minutes, depending on the add-ons you choose.' },
      { q: 'Is there downtime?', a: 'Usually not. Some people see light redness that fades soon after.' },
      { q: 'How often should I come?', a: 'Many people come every few weeks to a few months. We will suggest a schedule for your skin.' },
      { q: 'Is it the same as a chemical peel?', a: 'No. It is gentler and works on the surface. A peel goes deeper. We can help you choose.' },
      bookFaq,
    ],
    related: [
      { label: 'Medical Facials / HydraFacial', href: '/skin-facial-rejuvenation/medical-facials-hydrafacial/' },
      { label: 'Chemical Peels / VI Peel', href: '/skin-facial-rejuvenation/chemical-peels-vi-peel/' },
      { label: 'Laser Facial', href: '/skin-facial-rejuvenation/laser-facial/' },
    ],
  }),
  build({
    slug: 'verju',
    title: 'Verju',
    set: 'body-contouring',
    description:
      'Verju non-invasive body contouring technology at Imber Medical in St. Simons Island, GA. Physician-led care with Dr. Laura Slack.',
    lede: 'Verju is a non-invasive body contouring device. Dr. Laura Slack decides if it fits your goals and plans it with you.',
    alt: ['A woman standing tall in a bright room', 'A provider planning a body contouring treatment', 'A woman feeling confident after treatment'],
    ovTitle: 'Shaping the body without surgery',
    ov: [
      'Verju is a body contouring system from Cutera. It is made to help improve the look of areas where stubborn fat or soft skin bother you, with no surgery and no cuts.',
      'Body contouring is not weight loss. It works best for people close to their goal weight. At Imber Medical, Dr. Slack explains what Verju can and cannot do, and she may suggest other devices if they fit better.',
    ],
    cards: [
      { title: 'Non-invasive', text: 'The device works from outside the body. There are no needles and no cuts.' },
      { title: 'Made for you', text: 'Your plan depends on the area, your goals and your health.' },
    ],
    fitTitle: 'Who is Verju for?',
    fitText: 'It is for people who want to refine their shape, not lose a large amount of weight. A consultation tells us if it is a fit.',
    concerns: ['Stubborn areas that do not respond to diet and exercise', 'Soft or loose-feeling areas on the body', 'Wanting to refine your shape without surgery', 'Wanting a treatment with little or no downtime'],
    goodFit: ['You are near a steady, healthy weight', 'You want a non-surgical option', 'You understand results build over time and vary', 'You can follow your plan and aftercare', 'You are not pregnant and have no condition that rules it out'],
    benefits: [
      { title: 'No surgery', text: 'There are no cuts, stitches or time in a hospital.' },
      { title: 'Little downtime', text: 'Most people return to normal activity soon after a visit.' },
      { title: 'A realistic plan', text: 'We talk openly about what to expect before you decide.' },
      { title: 'More than one tool', text: 'If another device suits you better, we will tell you.' },
    ],
    steps: [
      { title: 'Consultation', text: 'We talk about your goals, health and areas of concern.' },
      { title: 'Plan', text: 'Dr. Slack tells you if Verju fits, and how many visits may be needed.' },
      { title: 'Treatment', text: 'The provider treats the area with the device. We keep you comfortable.' },
      { title: 'Aftercare', text: 'We share simple tips, such as drinking water and staying active.' },
      { title: 'Follow-up', text: 'We check your progress and adjust the plan if needed.' },
    ],
    safetyTitle: 'Safe, with honest expectations',
    safety: [
      'Verju is a non-invasive treatment, but it is not for everyone. We review your health history, medicines and any implants before we start. Mild redness or warmth can happen for a short time.',
      'Results vary, and we cannot promise a specific outcome. Body contouring does not replace healthy habits.',
    ],
    safetyItems: ['Health review first', 'Device used by trained providers', 'Clear plan and honest limits', 'Other options explained'],
    faqs: [
      { q: 'Is Verju a weight loss treatment?', a: 'No. It helps refine the shape of certain areas. It works best when you are near your goal weight.' },
      { q: 'Does it hurt?', a: 'Most people find it comfortable. Your provider will check how you feel during the visit.' },
      { q: 'How many visits will I need?', a: 'It depends on your goals and the area. We will suggest a plan at your consultation.' },
      { q: 'When will I see changes?', a: 'Changes build over time and vary from person to person. We cannot promise a result.' },
      { q: 'Can I combine it with other treatments?', a: 'Often yes. Dr. Slack may combine devices to treat fat and skin together.' },
      bookFaq,
    ],
    related: [
      { label: 'Fat Reduction / Body Contouring', href: '/body-contouring-sculpting/fat-reduction-body-contouring/' },
      { label: 'Trusculpt', href: '/technologies/trusculpt/' },
      { label: 'Emsculpt', href: '/technologies/emsculpt/' },
    ],
  }),
  build({
    slug: 'accent-prime',
    title: 'Accent Prime',
    set: 'tech-accent-prime',
    description:
      'Accent Prime from Alma at Imber Medical in St. Simons Island, GA. Radiofrequency and ultrasound for skin tightening and body contouring, planned by Dr. Laura Slack.',
    lede: 'Accent Prime uses radiofrequency and ultrasound energy to help tighten skin and refine shape without surgery.',
    alt: ['A woman with firm, smooth skin', 'A provider using a handheld skin device', 'A woman relaxed after a skin treatment'],
    ovTitle: 'Two kinds of energy, one device',
    ov: [
      'Accent Prime is a platform from Alma. It combines radiofrequency (RF) and ultrasound energy. These gently warm the skin and the tissue under it.',
      'Warming can help skin look firmer and help treat the look of stubborn fat in some areas. It is used on the face and body. Dr. Slack decides if it suits you and which areas to treat.',
    ],
    cards: [
      { title: 'RF energy', text: 'Radiofrequency warms the skin to help it look tighter and smoother.' },
      { title: 'Ultrasound energy', text: 'Ultrasound reaches a little deeper to treat the look of stubborn fat in some areas.' },
    ],
    fitTitle: 'Who is Accent Prime for?',
    fitText: 'It is for people who want gentle tightening or shaping without surgery. A consultation tells us if it is right for you.',
    concerns: ['Mild skin looseness on the face or body', 'Soft areas that bother you', 'Skin that looks less firm than before', 'Wanting no surgery and little downtime'],
    goodFit: ['You have mild to moderate looseness, not severe', 'You want a comfortable, no-cut option', 'You can come for a series of visits', 'You do not have an implant or device in the area that rules it out', 'You understand results build slowly and vary'],
    benefits: [
      { title: 'No surgery', text: 'There are no cuts and no stitches.' },
      { title: 'Face and body', text: 'The device can be used on several areas, based on your plan.' },
      { title: 'Little downtime', text: 'Most people return to their day right away.' },
      { title: 'Combines well', text: 'It can work with other treatments in your plan.' },
    ],
    steps: [
      { title: 'Consultation', text: 'We look at your skin, discuss your goals and review your health.' },
      { title: 'Plan', text: 'Dr. Slack picks the areas and the number of visits.' },
      { title: 'Treatment', text: 'The provider moves the handpiece over the skin. You feel warmth.' },
      { title: 'Aftercare', text: 'You get simple tips, such as sunscreen and staying hydrated.' },
      { title: 'Follow-up', text: 'We check your progress and plan next steps.' },
    ],
    safetyTitle: 'Safe, planned and checked',
    safety: [
      'Accent Prime is non-invasive. You may feel warmth, and some people have mild redness afterwards. Tell us about implants, pacemakers, pregnancy or skin conditions before treatment.',
      'Results vary, and we cannot promise a specific outcome. Dr. Slack will tell you honestly if another option suits you better.',
    ],
    safetyItems: ['Health review first', 'Trained providers', 'Honest expectations', 'Other options explained'],
    faqs: [
      { q: 'Does it hurt?', a: 'Most people feel comfortable warmth. Your provider adjusts the settings to keep you comfortable.' },
      { q: 'How many visits will I need?', a: 'It depends on your goals. Many plans use a series of visits. We will explain at your consultation.' },
      { q: 'When will I see results?', a: 'Changes build over weeks and months and vary from person to person.' },
      { q: 'Is there downtime?', a: 'Usually not. Mild redness may fade soon after.' },
      { q: 'Can it replace surgery?', a: 'It can help with mild to moderate concerns. It does not give the same change as surgery.' },
      bookFaq,
    ],
    related: [
      { label: 'RF Microneedling', href: '/skin-facial-rejuvenation/rf-microneedling/' },
      { label: 'Fat Reduction / Body Contouring', href: '/body-contouring-sculpting/fat-reduction-body-contouring/' },
      { label: 'Skin Rejuvenation (tightening)', href: '/conditions/skin-rejuvenation-tightening/' },
    ],
  }),
  build({
    slug: 'trusculpt',
    title: 'Trusculpt',
    set: 'tech-trusculpt',
    description:
      'truSculpt iD at Imber Medical in St. Simons Island, GA. Non-invasive body contouring with radiofrequency, planned by Dr. Laura Slack.',
    lede: 'truSculpt iD uses radiofrequency heat to help reduce stubborn fat in treated areas. There is no surgery and little downtime.',
    alt: ['A woman standing with confidence', 'A provider using a body contouring device', 'A woman relaxed after a body treatment'],
    ovTitle: 'Warm the fat, refine your shape',
    ov: [
      'truSculpt iD is a body contouring device from Cutera. It uses radiofrequency energy to heat the fat layer under the skin. The body then clears away the treated fat cells over time.',
      'It is used on areas such as the abdomen, flanks and thighs. It is not a weight loss tool. At Imber Medical, Dr. Slack plans each treatment around your body and goals.',
    ],
    cards: [
      { title: 'Radiofrequency heat', text: 'The device heats the fat layer in a controlled way, from outside the body.' },
      { title: 'Gradual change', text: 'The body clears treated cells over time, so changes build slowly.' },
    ],
    fitTitle: 'Who is truSculpt iD for?',
    fitText: 'It is for people near a steady weight who want to refine certain areas without surgery.',
    concerns: ['Stubborn belly or flank fat', 'Fat on the thighs or other areas', 'Areas that stay the same despite diet and exercise', 'Wanting no surgery and no cuts'],
    goodFit: ['You are near a healthy, steady weight', 'You want a non-surgical option', 'You can follow a plan over time', 'You are not pregnant', 'You understand results build slowly and vary'],
    benefits: [
      { title: 'No surgery', text: 'There are no cuts, needles or hospital stay.' },
      { title: 'Little downtime', text: 'Most people go back to normal life after the visit.' },
      { title: 'Comfortable warmth', text: 'You feel warmth, and we adjust the settings to keep you comfortable.' },
      { title: 'Clear plan', text: 'Dr. Slack explains the areas, the visits and what to expect.' },
    ],
    steps: [
      { title: 'Consultation', text: 'We talk about your goals and review your health.' },
      { title: 'Plan', text: 'Dr. Slack picks the areas and the number of visits.' },
      { title: 'Treatment', text: 'The provider places the handpiece on the area and checks your comfort.' },
      { title: 'Aftercare', text: 'Drink water and keep active. You may feel mild tenderness.' },
      { title: 'Follow-up', text: 'We track your progress and plan next steps.' },
    ],
    safetyTitle: 'Planned with care',
    safety: [
      'truSculpt iD is non-invasive. You may feel warmth, and some people have mild redness or tenderness afterwards. Tell us about implants, pregnancy, medicines and health conditions first.',
      'Results vary, and we cannot promise a specific outcome. It does not replace healthy habits.',
    ],
    safetyItems: ['Health review first', 'Trained providers', 'Honest expectations', 'Other options explained'],
    faqs: [
      { q: 'Does it hurt?', a: 'Most people feel warmth and find it comfortable. We adjust settings during the visit.' },
      { q: 'Is it a weight loss treatment?', a: 'No. It helps refine certain areas and works best near your goal weight.' },
      { q: 'How long does a visit take?', a: 'It depends on the area. We will give you an idea at your consultation.' },
      { q: 'When will I see changes?', a: 'Changes build over weeks to months and vary. We cannot promise a result.' },
      { q: 'Can I combine it with Emsculpt?', a: 'Often yes. Fat reduction and muscle toning can work together. Dr. Slack will advise.' },
      bookFaq,
    ],
    related: [
      { label: 'Fat Reduction / Body Contouring', href: '/body-contouring-sculpting/fat-reduction-body-contouring/' },
      { label: 'Emsculpt', href: '/technologies/emsculpt/' },
      { label: 'Cellulite', href: '/conditions/cellulite/' },
    ],
  }),
  build({
    slug: 'emsculpt',
    title: 'Emsculpt',
    set: 'tech-emsculpt',
    description:
      'Emsculpt at Imber Medical in St. Simons Island, GA. Non-invasive muscle toning with focused electromagnetic energy, planned by Dr. Laura Slack.',
    lede: 'Emsculpt uses focused electromagnetic energy to make muscles contract, to help tone and strengthen them without effort at the gym.',
    alt: ['A fit woman stretching', 'A provider using a muscle toning device', 'A woman feeling strong after treatment'],
    ovTitle: 'Muscle work, without the workout',
    ov: [
      'Emsculpt is a body contouring device from BTL. It uses high-intensity focused electromagnetic energy (HIFEM) to make muscles contract much more strongly than normal exercise.',
      'It is used on areas such as the abdomen and buttocks. At Imber Medical, we use it to help tone and strengthen muscle. Dr. Slack decides if it suits you and how to pair it with other treatments.',
    ],
    cards: [
      { title: 'Strong contractions', text: 'The device makes the muscle contract again and again during the session.' },
      { title: 'Tone and strength', text: 'Regular sessions can help build muscle tone in the treated area.' },
    ],
    fitTitle: 'Who is Emsculpt for?',
    fitText: 'It is for people who want to tone and strengthen muscle in certain areas, with no surgery and no downtime.',
    concerns: ['Wanting a firmer abdomen or buttocks', 'Muscle tone that is hard to build with exercise', 'Wanting no surgery and no downtime', 'Wanting a boost on top of a workout routine'],
    goodFit: ['You are near a healthy, steady weight', 'You can come for a series of visits', 'You do not have a metal implant in the area or a pacemaker', 'You are not pregnant', 'You understand results build over time and vary'],
    benefits: [
      { title: 'No surgery', text: 'The device works from outside the body.' },
      { title: 'No downtime', text: 'You can go back to your day right after your session.' },
      { title: 'Short sessions', text: 'Sessions are timed, and we explain the length at your consultation.' },
      { title: 'Pairs well', text: 'It can work with fat reduction treatments in a full plan.' },
    ],
    steps: [
      { title: 'Consultation', text: 'We talk about your goals and review your health history.' },
      { title: 'Plan', text: 'Dr. Slack picks the areas and the number of sessions.' },
      { title: 'Session', text: 'The applicator is placed on the area. You feel strong muscle contractions.' },
      { title: 'Aftercare', text: 'You may feel like you did a hard workout. Drink water and rest as needed.' },
      { title: 'Follow-up', text: 'We check your progress and plan next steps.' },
    ],
    safetyTitle: 'Checked before every treatment',
    safety: [
      'Emsculpt is not for everyone. People with a pacemaker, metal implants in the area, pregnancy or certain health conditions should not have it. We review this with you before treatment.',
      'You may feel muscle soreness afterwards, like after a workout. Results vary and we cannot promise a specific outcome.',
    ],
    safetyItems: ['Health review first', 'Trained providers', 'Honest expectations', 'Other options explained'],
    faqs: [
      { q: 'Does it hurt?', a: 'It feels like a very strong muscle workout. We adjust the intensity so you stay comfortable.' },
      { q: 'Will it burn fat?', a: 'Emsculpt is made to tone muscle. For fat, Dr. Slack may suggest a device such as truSculpt iD.' },
      { q: 'How many sessions will I need?', a: 'Many plans use a series of sessions. We will explain at your consultation.' },
      { q: 'Is there downtime?', a: 'No. You may feel sore, like after exercise.' },
      { q: 'Does it replace exercise?', a: 'No. It supports your routine. Healthy habits still matter.' },
      bookFaq,
    ],
    related: [
      { label: 'Fat Reduction / Body Contouring', href: '/body-contouring-sculpting/fat-reduction-body-contouring/' },
      { label: 'Trusculpt', href: '/technologies/trusculpt/' },
      { label: 'Muscle Building', href: '/conditions/muscle-building/' },
    ],
  }),
];
