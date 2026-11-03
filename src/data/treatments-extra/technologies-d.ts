import type { Treatment } from '../treatments';

const localCity = 'St. Simons Island, GA';
const IMG = '/images/treatments/';
const group = { title: 'Technologies', href: '/technologies/' };

export const techD: Treatment[] = [
  {
    slug: 'beautifill',
    group,
    title: 'Beautifill',
    seoTitle: `Beautifill in ${localCity}`,
    description:
      'Beautifill laser-assisted fat harvesting for body and face contouring with Dr. Laura Slack at Imber Medical in St. Simons Island, GA. Your own fat, used with care.',
    lede: 'Beautifill is a laser-based system that helps prepare your own fat for contouring. Dr. Laura Slack decides if it fits your goals.',
    images: {
      hero: IMG + 'tech-beautifill-1.jpg',
      overview: IMG + 'tech-beautifill-2.jpg',
      fit: IMG + 'tech-beautifill-3.jpg',
      alt: {
        hero: 'A woman with soft, natural-looking facial contours',
        overview: 'A practitioner reviewing a contouring plan with a patient',
        fit: 'A woman looking relaxed and confident',
      },
    },
    overview: {
      title: 'Your own fat, put to good use',
      paragraphs: [
        'Beautifill is a device made by Alma, a Sisram Medical company. It uses laser energy during fat removal to help prepare your own fat so it can be used to shape another area of the body or face.',
        'At Imber Medical, Dr. Slack looks at your body and your face first. She then explains whether this approach makes sense for you, or whether another option is better.',
      ],
      cards: [
        {
          title: 'How it works',
          text: 'A thin laser fiber and gentle suction remove fat from a small area. The fat is then prepared so a physician can place it where you want more shape or volume.',
        },
        {
          title: 'Where it may help',
          text: 'Fat can be used for the face, hands or body shape, depending on your goals. Dr. Slack will tell you what is realistic for you.',
        },
      ],
    },
    fit: {
      title: 'Who is a good fit?',
      text: 'This option is for people who want a natural, long-lasting way to add shape or soften a small area of extra fat. A consultation is the best way to find out.',
      concerns: [
        'Fullness lost in the cheeks or temples',
        'Small areas of stubborn fat',
        'Hollow areas that fillers only partly improve',
        'A wish to use your own tissue instead of a filler',
        'Uneven shape in the body or face',
      ],
      goodFit: [
        'You are in good general health',
        'You have a small area where fat can be taken',
        'You want a natural approach and can allow time to heal',
        'You have realistic expectations',
        'You can follow aftercare steps',
      ],
    },
    benefits: [
      { title: 'Your own tissue', text: 'The fat comes from your body, so there is no foreign filler material.' },
      { title: 'Two goals in one plan', text: 'One treatment can soften one area and add shape to another.' },
      { title: 'A natural look', text: 'Fat feels soft and blends with the tissue around it.' },
      { title: 'Physician-led care', text: 'Dr. Slack plans each step and follows up with you after.' },
    ],
    steps: [
      { title: 'Consultation', text: 'We talk about your goals and your health, and look at the areas you want to change.' },
      { title: 'Your plan', text: 'Dr. Slack explains where fat can be taken, where it can be placed and what to expect.' },
      { title: 'Treatment day', text: 'The area is numbed. Fat is gently removed, prepared and placed in small amounts.' },
      { title: 'Recovery', text: 'You may have swelling, bruising or tenderness. We give you clear aftercare steps.' },
      { title: 'Follow-up', text: 'We check how you are healing. Fat settles over time, so we give it time before we judge the result.' },
    ],
    safety: {
      title: 'Your safety comes first',
      paragraphs: [
        'Any procedure that removes and places fat has risks, such as swelling, bruising, uneven results or infection. Dr. Slack reviews your health and explains the risks before you decide.',
        'Not every person is a candidate. Some medical conditions or medicines may mean this is not right for you. Results are different for each person and cannot be promised.',
      ],
      items: ['Physician-led planning', 'Health review before treatment', 'Clear aftercare steps', 'Honest, realistic expectations'],
    },
    faqs: [
      { q: 'What is Beautifill?', a: 'It is a laser-based platform from Alma that helps prepare a patient\'s own fat for use in contouring.' },
      { q: 'Is it a weight loss treatment?', a: 'No. It is for shaping small areas, not for losing weight.' },
      { q: 'Does it hurt?', a: 'The area is numbed. Most people feel pressure and some soreness afterward.' },
      { q: 'How long is the recovery?', a: 'It depends on the area. Many people have swelling and bruising for a few days to a few weeks. Dr. Slack will explain yours.' },
      { q: 'Will the result last?', a: 'Some of the fat usually stays and some may not. We cannot promise how much. Dr. Slack will talk about what to expect.' },
      { q: 'How do I get started?', a: 'Book a consultation online or call us at 912-268-2103.' },
    ],
    related: [
      { label: 'All technologies', href: '/technologies/' },
      { label: 'Facial Fat Grafting', href: '/injectables-toxins/facial-fat-grafting/' },
      { label: 'Fat Reduction & Body Contouring', href: '/body-contouring-sculpting/fat-reduction-body-contouring/' },
      { label: 'Filler & Tox', href: '/injectables-toxins/filler-tox/' },
    ],
  },
  {
    slug: 'neuronic-helmet',
    group,
    title: 'Neuronic Helmet',
    seoTitle: `Neuronic Helmet in ${localCity}`,
    description:
      'Near-infrared light therapy with the Neuronic Helmet at Imber Medical in St. Simons Island, GA. Learn how it works and if it may fit your wellness plan.',
    lede: 'The Neuronic Helmet uses gentle near-infrared light on the head. Dr. Laura Slack can tell you if it fits your wellness plan.',
    images: {
      hero: IMG + 'bhrt-1.jpg',
      overview: IMG + 'bhrt-2.jpg',
      fit: IMG + 'bhrt-3.jpg',
      alt: {
        hero: 'A calm woman with her eyes closed',
        overview: 'A woman relaxing during a wellness session',
        fit: 'A woman with a peaceful expression',
      },
    },
    overview: {
      title: 'Light therapy for the head',
      paragraphs: [
        'The Neuronic Helmet is a light therapy device. It uses near-infrared light, a method called transcranial photobiomodulation (tPBM). The light is gentle and you can not feel heat or pain from it.',
        'This area is still growing, and research is ongoing. We use the helmet as a support option, not as a cure. Dr. Slack will talk with you about what is known and what is not.',
      ],
      cards: [
        {
          title: 'How it works',
          text: 'You sit comfortably while the helmet delivers near-infrared light to the scalp. Sessions are short and relaxed.',
        },
        {
          title: 'How we use it',
          text: 'It can be part of a wider wellness plan, together with sleep, nutrition and other care. It does not replace medical care.',
        },
      ],
    },
    fit: {
      title: 'Who is it for?',
      text: 'Many people are curious about light therapy for focus, mood and recovery. A consultation helps us decide if it makes sense for you.',
      concerns: [
        'Wanting extra support for focus and mental energy',
        'Feeling mentally tired',
        'Interest in a non-invasive wellness option',
        'Wanting support during stressful periods',
      ],
      goodFit: [
        'You want a gentle, non-invasive option',
        'You can share your health history, including seizures or head injuries',
        'You understand that research is ongoing',
        'You are open to a plan that includes other steps',
        'You can come for a series of sessions',
      ],
    },
    benefits: [
      { title: 'Non-invasive', text: 'There are no needles, no incisions and no downtime.' },
      { title: 'Relaxed sessions', text: 'You sit back and rest while the helmet does its work.' },
      { title: 'Part of a bigger plan', text: 'We combine it with other care when it makes sense for you.' },
      { title: 'Honest guidance', text: 'We tell you what is known and what is still being studied.' },
    ],
    steps: [
      { title: 'Consultation', text: 'We talk about your goals, your health and any medicines you take.' },
      { title: 'Safety check', text: 'Dr. Slack checks if the helmet is right for you, including any past head injury or seizure history.' },
      { title: 'Your plan', text: 'We suggest how many sessions to try and how they fit into your wider plan.' },
      { title: 'Session', text: 'You sit comfortably with the helmet on and relax. Sessions are short.' },
      { title: 'Follow-up', text: 'We check how you feel and decide together if you should continue.' },
    ],
    safety: {
      title: 'Your safety comes first',
      paragraphs: [
        'Please tell us if you have a history of seizures, a head injury, light sensitivity or a medicine that makes you sensitive to light. We will decide if the helmet is safe for you.',
        'The helmet is not a treatment for any disease. Sudden confusion, severe headache or weakness need urgent care. Call 911 or go to the nearest emergency room.',
      ],
      items: ['Physician review first', 'Health history check', 'Honest expectations', 'No cure claims'],
    },
    faqs: [
      { q: 'What is the Neuronic Helmet?', a: 'It is a light therapy helmet that delivers near-infrared light to the scalp. The method is called transcranial photobiomodulation.' },
      { q: 'Does it hurt?', a: 'No. Most people feel nothing or a mild warmth.' },
      { q: 'Does it treat memory loss or brain disease?', a: 'We do not claim that. Research is ongoing. If you have memory concerns, a physician review comes first.' },
      { q: 'How long is a session?', a: 'Sessions are short. Dr. Slack will tell you the plan that fits you.' },
      { q: 'Who should not use it?', a: 'People with a seizure history or light sensitivity may need to avoid it. We check this at your visit.' },
      { q: 'How do I get started?', a: 'Book a consultation online or call us at 912-268-2103.' },
    ],
    related: [
      { label: 'All technologies', href: '/technologies/' },
      { label: 'Brain Fog/memory Loss', href: '/conditions/brain-fog-memory-loss/' },
      { label: 'Methylene Blue', href: '/wellness-medical-weight-loss/methylene-blue/' },
      { label: 'IV Therapy', href: '/wellness-medical-weight-loss/iv-therapy/' },
    ],
  },
  {
    slug: 'soprano-ice',
    group,
    title: 'Soprano Ice',
    seoTitle: `Soprano Ice Laser Hair Removal in ${localCity}`,
    description:
      'Soprano Ice diode laser hair removal at Imber Medical in St. Simons Island, GA. Comfortable, cooled treatment planned by Dr. Laura Slack.',
    lede: 'Soprano Ice is a diode laser made for comfortable hair removal. Dr. Laura Slack plans it around your skin and hair.',
    images: {
      hero: IMG + 'tech-soprano-ice-1.jpg',
      overview: IMG + 'tech-soprano-ice-2.jpg',
      fit: IMG + 'tech-soprano-ice-3.jpg',
      alt: {
        hero: 'A woman with smooth legs',
        overview: 'A practitioner preparing a laser hair removal treatment',
        fit: 'A woman looking comfortable after a laser session',
      },
    },
    overview: {
      title: 'Smooth skin, with less discomfort',
      paragraphs: [
        'Soprano Ice is a laser hair removal system made by Alma. It uses a diode laser, and the Platinum version can use more than one wavelength. The handpiece keeps the skin cool during treatment.',
        'The laser light is absorbed by the dark pigment in the hair. This helps slow future hair growth. Dr. Slack chooses the settings for your skin tone and hair type.',
      ],
      cards: [
        {
          title: 'How it works',
          text: 'The handpiece glides over the skin while the laser light targets the hair at its root. The cooling tip helps keep you comfortable.',
        },
        {
          title: 'Where it can be used',
          text: 'Common areas are the underarms, legs, bikini line, arms, back and face. Ask us about the area you have in mind.',
        },
      ],
    },
    fit: {
      title: 'Who is a good fit?',
      text: 'Laser hair removal works best on dark hair. A consultation helps us pick the right settings and plan for your skin.',
      concerns: [
        'Tired of shaving or waxing',
        'Ingrown hairs and razor bumps',
        'Hair that returns quickly',
        'Large areas such as legs or back',
        'Sensitive skin that needs gentle cooling',
      ],
      goodFit: [
        'You have dark hair that can absorb laser light',
        'You can stay out of the sun before and after treatment',
        'You can avoid waxing and plucking between visits',
        'You can come for a series of visits',
        'You understand that results vary from person to person',
      ],
    },
    benefits: [
      { title: 'Cooled comfort', text: 'The cooling tip makes treatment more comfortable.' },
      { title: 'Settings for you', text: 'We choose the settings for your skin tone and hair type.' },
      { title: 'Fewer visits spent shaving', text: 'Many people shave or wax much less after a series.' },
      { title: 'Physician-led care', text: 'Dr. Slack oversees your plan and checks your progress.' },
    ],
    steps: [
      { title: 'Consultation', text: 'We check your skin, your hair and your health, and talk about your goals.' },
      { title: 'Prepare', text: 'You shave the area before your visit. Avoid tanning and waxing.' },
      { title: 'Treatment', text: 'We clean the area and treat it with the laser. Sessions are short for small areas.' },
      { title: 'Aftercare', text: 'Your skin may feel warm or look pink. We give you simple aftercare steps and sun protection advice.' },
      { title: 'More visits', text: 'Hair grows in cycles, so you will need a series of visits spaced a few weeks apart.' },
    ],
    safety: {
      title: 'Your safety comes first',
      paragraphs: [
        'Laser treatment can cause redness, swelling, color changes or, rarely, blisters. Sun on treated skin raises these risks. We explain how to protect your skin.',
        'Hair removal results vary. Light, gray or red hair may respond less. We will be honest about what we expect for you.',
      ],
      items: ['Physician-led planning', 'Cooling for comfort', 'Settings matched to your skin', 'Clear aftercare steps'],
    },
    faqs: [
      { q: 'What is Soprano Ice?', a: 'It is a diode laser hair removal system from Alma with a cooled handpiece.' },
      { q: 'Does it hurt?', a: 'Most people feel warmth or a quick snap. The cooling helps keep it comfortable.' },
      { q: 'How many visits will I need?', a: 'Most people need a series of visits. Dr. Slack will suggest a plan after she sees your hair and skin.' },
      { q: 'Is it permanent?', a: 'It can give long-lasting hair reduction, but we cannot promise that every hair will be gone.' },
      { q: 'Can I treat tanned skin?', a: 'Tanned skin raises the risk of side effects. Tell us at your visit so we can plan safely.' },
      { q: 'How do I get started?', a: 'Book a consultation online or call us at 912-268-2103.' },
    ],
    related: [
      { label: 'All technologies', href: '/technologies/' },
      { label: 'Laser Hair Removal', href: '/hair-restoration-removal/laser-hair-removal/' },
      { label: 'Hair Removal', href: '/conditions/hair-removal/' },
      { label: 'Laser Facial', href: '/skin-facial-rejuvenation/laser-facial/' },
    ],
  },
  {
    slug: 'femilift',
    group,
    title: 'Femilift',
    seoTitle: `FemiLift in ${localCity}`,
    description:
      'FemiLift CO2 laser for female health at Imber Medical in St. Simons Island, GA. A private, physician-led treatment with Dr. Laura Slack.',
    lede: 'FemiLift is a gentle CO2 laser used for female health. Dr. Laura Slack explains if it is right for you, in private and with care.',
    images: {
      hero: IMG + 'tech-femilift-1.jpg',
      overview: IMG + 'tech-femilift-2.jpg',
      fit: IMG + 'tech-femilift-3.jpg',
      alt: {
        hero: 'A woman looking calm and confident',
        overview: 'A woman relaxing during a private consultation',
        fit: 'A woman smiling softly',
      },
    },
    overview: {
      title: 'Gentle laser care for female health',
      paragraphs: [
        'FemiLift is a fractional CO2 laser system made by Alma. It sends tiny pulses of laser energy to the vaginal tissue. The goal is to support the health and comfort of that tissue.',
        'At Imber Medical, treatment is private and planned by Dr. Slack. She explains each step and answers your questions before you decide.',
      ],
      cards: [
        {
          title: 'How it works',
          text: 'A small probe delivers gentle laser pulses. The energy is designed to prompt the tissue to renew itself over time.',
        },
        {
          title: 'What it may help',
          text: 'Women often ask about dryness, discomfort, urinary leakage and changes after childbirth or menopause. Dr. Slack will tell you if FemiLift fits your concern.',
        },
      ],
    },
    fit: {
      title: 'Who is it for?',
      text: 'Many women have these concerns and do not talk about them. A private visit is a safe place to start.',
      concerns: [
        'Vaginal dryness or discomfort',
        'Changes after menopause',
        'Changes after childbirth',
        'Mild urinary leakage',
        'Pain or discomfort with intimacy',
      ],
      goodFit: [
        'You have talked with a physician about your symptoms',
        'You are up to date on your gynecologic exams',
        'You are not pregnant and have no active infection',
        'You can come for a series of visits',
        'You understand that results vary from person to person',
      ],
    },
    benefits: [
      { title: 'In-office and quick', text: 'Sessions are short and you can usually go back to normal activities.' },
      { title: 'No cutting', text: 'It is a laser treatment, not surgery.' },
      { title: 'Private care', text: 'Your visit is private, respectful and without rush.' },
      { title: 'Physician-led', text: 'Dr. Slack plans and oversees each treatment.' },
    ],
    steps: [
      { title: 'Consultation', text: 'We talk privately about your symptoms and your health history.' },
      { title: 'Exam and plan', text: 'Dr. Slack checks that FemiLift is safe for you and suggests how many sessions to try.' },
      { title: 'Treatment', text: 'A small probe delivers gentle laser pulses. Sessions are short.' },
      { title: 'Aftercare', text: 'We give simple aftercare steps, such as a short rest from intimacy.' },
      { title: 'Follow-up', text: 'We check how you feel and plan any additional sessions.' },
    ],
    safety: {
      title: 'Your safety comes first',
      paragraphs: [
        'Some women feel mild warmth, discharge or irritation after treatment. We explain what is normal and when to call us.',
        'FemiLift is not for everyone. We review your health first. Results vary and cannot be promised. Persistent pain, bleeding or other new symptoms need a physician visit.',
      ],
      items: ['Physician review first', 'Private, respectful care', 'Clear aftercare steps', 'Honest, realistic expectations'],
    },
    faqs: [
      { q: 'What is FemiLift?', a: 'It is a CO2 laser system from Alma used to treat vaginal tissue.' },
      { q: 'Does it hurt?', a: 'Most women feel mild warmth or a tingling feeling. Dr. Slack will make you as comfortable as possible.' },
      { q: 'How many sessions will I need?', a: 'It depends on your concern. Many plans use a short series of visits. Dr. Slack will tell you what she suggests.' },
      { q: 'Is there downtime?', a: 'Most women return to normal daily activities. We may ask you to pause intimacy for a short time.' },
      { q: 'Can I have it after menopause?', a: 'Many women ask about it for menopause changes. Dr. Slack will check if it fits your situation.' },
      { q: 'How do I get started?', a: 'Book a private consultation online or call us at 912-268-2103.' },
    ],
    related: [
      { label: 'All technologies', href: '/technologies/' },
      { label: 'Female Health & Vaginal Rejuvenation', href: '/sexual-wellness/female-health-vaginal-rejuv/' },
      { label: 'Bioidentical Hormone Replacement Therapy (BHRT)', href: '/wellness-medical-weight-loss/bioidentical-hormone-replacement-therapy-bhrt/' },
      { label: 'Male Health', href: '/sexual-wellness/male-health/' },
    ],
  },
];
