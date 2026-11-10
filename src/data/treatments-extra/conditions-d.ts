import type { Treatment } from '../treatments';

const localCity = 'St. Simons Island, GA';
const IMG = '/images/treatments/';
const group = { title: 'Conditions', href: '/conditions/' };
const CONDITIONS = { label: 'All Conditions', href: '/conditions/' };

// TODO (Dr. Slack): review all medical wording before launch.
export const conditionsD: Treatment[] = [
  {
    slug: 'muscle-building',
    group,
    title: 'Muscle Building',
    seoTitle: `Muscle Building in ${localCity}`,
    description:
      'Build and tone muscle with a physician-led plan at Imber Medical in St. Simons Island, GA. Dr. Laura Slack helps you reach your strength and shape goals.',
    lede: 'Stronger, firmer and more defined, with a plan built around your body and your health by Dr. Laura Slack.',
    images: {
      hero: IMG + 'body-contouring-1.jpg',
      overview: IMG + 'body-contouring-2.jpg',
      fit: IMG + 'body-contouring-3.jpg',
      alt: {
        hero: 'A care provider checking a patient with a wearable monitor during a visit',
        overview: 'A smiling doctor talking with a woman patient in a bright clinic',
        fit: 'A dietitian with a tape measure and a basket of fresh fruit and vegetables',
      },
    },
    overview: {
      title: 'Why muscle can be hard to build',
      paragraphs: [
        'Muscle helps you move, stay strong and keep a firm shape. Many people find it harder to build or keep muscle as they age, after weight loss, or when hormones and energy change.',
        'Training and food matter most. Some people also want extra support, and others want to know if something in their health is holding them back. Dr. Slack looks at the whole picture first.',
      ],
      cards: [
        {
          title: 'Start with your health',
          text: 'We review your history, your symptoms and, when needed, lab work. This helps us see what may be affecting your progress.',
        },
        {
          title: 'Support that fits your plan',
          text: 'Depending on your goals, options may include in-office body treatments, nutrition guidance and wellness care. We suggest only what makes sense for you.',
        },
      ],
    },
    fit: {
      title: 'Does this sound like you?',
      text: 'Many adults want more strength and definition. These are common signs that extra guidance may help.',
      concerns: [
        'Progress in the gym has stalled',
        'Losing muscle tone with age',
        'Soft areas that do not firm up with training',
        'Low energy that cuts workouts short',
        'Slow recovery after exercise',
        'Muscle loss after weight loss',
      ],
      goodFit: [
        'You want a safe, physician-guided plan',
        'You are willing to keep training and eating well',
        'You are open to a health review and labs',
        'You have realistic goals',
        'You can commit to a plan over several months',
      ],
    },
    benefits: [
      { title: 'A clear starting point', text: 'We look at your health first, so you are not guessing.' },
      { title: 'Options in one place', text: 'Body treatments, wellness care and guidance can work together.' },
      { title: 'Plans that fit your life', text: 'Your plan matches your schedule, your body and your goals.' },
      { title: 'Physician oversight', text: 'Dr. Slack checks your progress and adjusts your plan.' },
    ],
    steps: [
      { title: 'Consultation', text: 'We talk about your goals, your training, your food and your health history.' },
      { title: 'Health review', text: 'We look for anything that may affect muscle, energy or recovery. Lab work may be advised.' },
      { title: 'Your plan', text: 'You get a clear plan with options, steps and a fair estimate before you begin.' },
      { title: 'Treatment and support', text: 'We start your plan and share simple tips for training, food and rest.' },
      { title: 'Follow-up', text: 'We check your progress and adjust. Muscle changes take time, so we plan for the long run.' },
    ],
    safety: {
      title: 'Honest limits and safety',
      paragraphs: [
        'No treatment replaces training, good food and rest. We will tell you honestly what a treatment can help with and what it cannot do.',
        'Some options are not right for everyone. Dr. Slack reviews your health, medicines and any conditions first, and may suggest your primary doctor or a specialist if something needs a closer look.',
      ],
      items: ['Full health review first', 'Honest, realistic goals', 'Medicine and health check', 'Regular progress check-ins'],
    },
    faqs: [
      { q: 'Can a treatment build muscle for me?', a: 'No treatment replaces training and food. Some options can support your plan, and we will tell you what is realistic.' },
      { q: 'Why am I not building muscle?', a: 'Many things can play a part, such as sleep, food, stress, age and hormones. A health review helps us look for the cause.' },
      { q: 'Do I need lab work?', a: 'Often it helps. Dr. Slack will tell you if tests make sense for you.' },
      { q: 'How long until I see a change?', a: 'Muscle changes slowly. Most people need several months of steady effort before they see a clear difference.' },
      { q: 'Is it safe for everyone?', a: 'Not always. We review your health and medicines first, and we only suggest what is safe for you.' },
      { q: 'How do I get started?', a: 'Book a consultation online or call us at 912-268-2103. We will look at your goals and make a plan that fits you.' },
    ],
    related: [
      CONDITIONS,
      { label: 'Fat Reduction Body Contouring', href: '/body-contouring-sculpting/fat-reduction-body-contouring/' },
      { label: 'Peptide Therapy', href: '/wellness-medical-weight-loss/peptide-therapy/' },
      { label: 'Bioidentical Hormone Replacement Therapy (BHRT)', href: '/wellness-medical-weight-loss/bioidentical-hormone-replacement-therapy-bhrt/' },
    ],
  },
  {
    slug: 'long-covid-post-covid',
    group,
    title: 'Long Covid – Post Covid',
    seoTitle: `Long Covid – Post Covid Care in ${localCity}`,
    description:
      'Supportive care for long Covid and post-Covid symptoms at Imber Medical in St. Simons Island, GA. Dr. Laura Slack helps you feel more like yourself.',
    lede: 'Supportive, physician-led care for tiredness, fog and other lingering symptoms after Covid.',
    images: {
      hero: IMG + 'iv-therapy-1.jpg',
      overview: IMG + 'iv-therapy-2.jpg',
      fit: IMG + 'iv-therapy-3.jpg',
      alt: {
        hero: 'A woman relaxing during a wellness treatment',
        overview: 'A calm woman resting in a comfortable chair',
        fit: 'A woman relaxing with a gentle smile',
      },
    },
    overview: {
      title: 'When Covid leaves something behind',
      paragraphs: [
        'Some people keep having symptoms for weeks or months after Covid. Common ones include tiredness, brain fog, poor sleep, low mood and trouble with exercise. Everyone is different.',
        'There is no single fix, and we do not promise one. Our goal is to look at your whole health, ease what we can, and support your body while it recovers.',
      ],
      cards: [
        {
          title: 'Listen and look closely',
          text: 'We take time to hear your story, review your history and, when needed, check labs. Other health issues can look like long Covid, so this step matters.',
        },
        {
          title: 'Supportive care',
          text: 'Depending on your needs, options may include hydration and nutrient support, wellness care and healthy habit guidance. We choose gently and adjust as you go.',
        },
      ],
    },
    fit: {
      title: 'Does this sound like you?',
      text: 'These are common signs people notice after Covid. Please see your primary doctor first for any new or severe symptom.',
      concerns: [
        'Tiredness that does not go away',
        'Brain fog or trouble focusing',
        'Poor or broken sleep',
        'Low stamina for exercise',
        'Low mood or feeling unwell',
        'Slow recovery after normal activity',
      ],
      goodFit: [
        'Your symptoms began after a Covid infection',
        'Your primary doctor has ruled out urgent problems',
        'You want gentle, supportive care',
        'You can share your health history and medicines',
        'You are open to a step-by-step plan',
      ],
    },
    benefits: [
      { title: 'Time to be heard', text: 'We listen to what you have been through and what you want to feel again.' },
      { title: 'A whole-health view', text: 'We look at sleep, food, stress, energy and more, not just one symptom.' },
      { title: 'Gentle options', text: 'Supportive care is chosen to match how you feel right now.' },
      { title: 'Physician-led', text: 'Dr. Slack plans your care and checks your progress.' },
    ],
    steps: [
      { title: 'Consultation', text: 'We talk about your symptoms, when they began and how they affect your days.' },
      { title: 'Health review', text: 'We review your history and medicines. Lab work may be advised, and we may suggest you see your primary doctor.' },
      { title: 'Your plan', text: 'You get a simple plan with supportive options and a fair estimate.' },
      { title: 'Supportive care', text: 'We begin with gentle steps and share tips for rest, food and pacing your activity.' },
      { title: 'Follow-up', text: 'We check how you feel and adjust your plan. Recovery can be slow, and that is normal.' },
    ],
    safety: {
      title: 'Honest limits and safety',
      paragraphs: [
        'We do not claim to cure long Covid. Our care is supportive and aims to help you feel better. Results vary from person to person.',
        'Please see your primary care doctor or seek urgent care for new or severe symptoms, such as chest pain, trouble breathing, fainting or sudden weakness. Dr. Slack also reviews your health and medicines before any treatment.',
      ],
      items: ['Primary doctor first for new or severe symptoms', 'Full health and medicine review', 'Gentle, step-by-step care', 'Honest expectations'],
    },
    faqs: [
      { q: 'What is long Covid?', a: 'It describes symptoms that last for weeks or months after a Covid infection. Tiredness, brain fog and poor sleep are common.' },
      { q: 'Can you cure it?', a: 'We do not promise a cure. We offer supportive care that aims to help you feel better over time.' },
      { q: 'Should I see my primary doctor first?', a: 'Yes, especially for new or severe symptoms. Other health problems can look like long Covid and need their own care.' },
      { q: 'What does supportive care include?', a: 'It may include hydration and nutrient support, wellness care and habit guidance. Dr. Slack will explain what fits you.' },
      { q: 'How long will recovery take?', a: 'It is different for everyone. Some people improve slowly over months. We check in often and adjust your plan.' },
      { q: 'How do I get started?', a: 'Book a consultation online or call us at 912-268-2103. We will listen first and then suggest next steps.' },
    ],
    related: [
      CONDITIONS,
      { label: 'IV Therapy', href: '/wellness-medical-weight-loss/iv-therapy/' },
      { label: 'Peptide Therapy', href: '/wellness-medical-weight-loss/peptide-therapy/' },
      { label: 'Methylene Blue', href: '/wellness-medical-weight-loss/methylene-blue/' },
    ],
  },
  {
    slug: 'acne',
    group,
    title: 'Acne',
    seoTitle: `Acne Treatment in ${localCity}`,
    description:
      'Acne care with Dr. Laura Slack at Imber Medical in St. Simons Island, GA. Calm breakouts and improve the look of your skin with a plan made for you.',
    lede: 'Clearer, calmer skin with a plan built for your skin type and your breakouts by Dr. Laura Slack.',
    images: {
      hero: IMG + 'chemical-peel-1.jpg',
      overview: IMG + 'chemical-peel-2.jpg',
      fit: IMG + 'chemical-peel-3.jpg',
      alt: {
        hero: 'A woman receiving a skin treatment on her face',
        overview: 'A provider applying a treatment to a woman’s face',
        fit: 'A close view of a woman during a facial skin treatment',
      },
    },
    overview: {
      title: 'Why acne happens',
      paragraphs: [
        'Acne starts when pores get clogged with oil and dead skin. Bacteria and swelling can then cause pimples, bumps and sore spots. It is common in teens and in adults.',
        'Hormones, stress, some products and family history can all play a part. Acne can also leave marks or scars, so early care helps. Dr. Slack looks at your skin and your health to find a plan that fits.',
      ],
      cards: [
        {
          title: 'Treat the cause and the skin',
          text: 'We look at your skin type, your breakout pattern and your routine. Then we build a plan to calm breakouts and support healthy skin.',
        },
        {
          title: 'In-office options',
          text: 'Depending on your skin, options may include medical facials, chemical peels, laser and other treatments. We choose what is gentle and right for you.',
        },
      ],
    },
    fit: {
      title: 'Does this sound like you?',
      text: 'Acne looks different on each person. These are common signs that professional care may help.',
      concerns: [
        'Frequent pimples or clogged pores',
        'Deep, sore bumps',
        'Breakouts around the jaw and chin',
        'Dark marks left after breakouts',
        'Oily or congested skin',
        'Acne that has not improved with store products',
      ],
      goodFit: [
        'You want a plan made for your skin',
        'You can follow a simple home routine',
        'You can plan for a series of visits',
        'You can protect your skin from the sun',
        'You have no active skin infection in the treated area',
      ],
    },
    benefits: [
      { title: 'A plan for your skin', text: 'Your skin type and your goals shape every step.' },
      { title: 'Calmer breakouts', text: 'The aim is fewer breakouts and healthier-looking skin over time.' },
      { title: 'Help with marks', text: 'We can also talk about marks and texture that acne leaves behind.' },
      { title: 'Physician-led', text: 'Dr. Slack plans your care and adjusts as your skin changes.' },
    ],
    steps: [
      { title: 'Consultation', text: 'We look at your skin and talk about your breakouts, your routine and your health history.' },
      { title: 'Your plan', text: 'You get a clear plan with in-office care, home care and a fair estimate.' },
      { title: 'Treatment', text: 'Your skin is cleansed and treated with the options we chose together. Most visits are short.' },
      { title: 'Aftercare', text: 'We share simple tips for gentle cleansing, moisturizer and sun protection.' },
      { title: 'Follow-up', text: 'Skin takes time to settle. We check your progress and adjust your plan.' },
    ],
    safety: {
      title: 'Honest limits and safety',
      paragraphs: [
        'Acne can take weeks or months to improve, and it can flare up again. We will be honest about what is realistic and we do not promise clear skin.',
        'Some medicines and skin conditions affect which treatments are safe. Dr. Slack reviews your health, medicines and any past reactions first. Mild redness, dryness or peeling can happen after treatment.',
      ],
      items: ['Skin and health review first', 'Medicine and allergy check', 'Gentle, step-by-step plan', 'Sun protection guidance'],
    },
    faqs: [
      { q: 'What causes acne?', a: 'Clogged pores, oil, bacteria and swelling all play a part. Hormones, stress and family history can add to it.' },
      { q: 'Can you clear my acne completely?', a: 'We cannot promise that. Our goal is calmer breakouts and healthier-looking skin, and we will be honest about what is realistic.' },
      { q: 'How many visits will I need?', a: 'It depends on your skin. Many plans use a series of visits plus a home routine.' },
      { q: 'Will you treat acne marks too?', a: 'We can talk about marks and texture as well. Some options can help the look of marks over time.' },
      { q: 'Should I stop picking my skin?', a: 'Yes. Picking can cause more swelling and marks. We can share tips to help.' },
      { q: 'How do I get started?', a: 'Book a consultation online or call us at 912-268-2103. We will look at your skin and make a plan that fits you.' },
    ],
    related: [
      CONDITIONS,
      { label: 'Chemical Peels (VI Peel)', href: '/skin-facial-rejuvenation/chemical-peels-vi-peel/' },
      { label: 'Medical Facials & HydraFacial', href: '/skin-facial-rejuvenation/medical-facials-hydrafacial/' },
      { label: 'Laser Facial', href: '/skin-facial-rejuvenation/laser-facial/' },
    ],
  },
  {
    slug: 'skin-tag-wart-benign-mole-removal',
    group,
    title: 'Skin Tag, Wart, Benign Mole Removal',
    seoTitle: `Skin Tag, Wart and Mole Removal in ${localCity}`,
    description:
      'Safe removal of skin tags, warts and benign moles at Imber Medical in St. Simons Island, GA. Every spot is checked by Dr. Laura Slack first.',
    lede: 'Small spots that bother you, checked first and removed with care by Dr. Laura Slack.',
    images: {
      hero: IMG + 'laser-facial-2.jpg',
      overview: IMG + 'laser-facial-3.jpg',
      fit: IMG + 'laser-facial-1.jpg',
      alt: {
        hero: 'A woman receiving a gentle skin treatment',
        overview: 'A provider treating a small area of skin',
        fit: 'A woman with smooth, healthy skin',
      },
    },
    overview: {
      title: 'Small spots, big annoyance',
      paragraphs: [
        'Skin tags, warts and moles are very common. Many are harmless, but they can catch on clothing, look unwanted or make you self-conscious.',
        'Not every spot is harmless, so every one must be checked first. Dr. Slack examines the spot and tells you if it is safe to remove here or if it needs to be seen by another specialist.',
      ],
      cards: [
        {
          title: 'Check first',
          text: 'We look closely at the spot and ask about changes in size, shape or color. Any spot that looks concerning is not removed here and is sent for further care.',
        },
        {
          title: 'Gentle removal',
          text: 'When a spot is safe to treat, we remove it with a method that suits its type and place. Many visits are quick.',
        },
      ],
    },
    fit: {
      title: 'Does this sound like you?',
      text: 'These are common reasons people ask about removal. Please tell us about any spot that is changing.',
      concerns: [
        'Skin tags on the neck, underarms or eyelids',
        'Small rough warts',
        'Raised moles that rub on clothes',
        'A spot you dislike the look of',
        'A spot that gets caught or irritated',
        'Several small spots in one area',
      ],
      goodFit: [
        'The spot has been checked and looks benign',
        'The spot has not changed recently',
        'You understand a small mark may remain',
        'You can follow simple aftercare',
        'You have no active infection in the area',
      ],
    },
    benefits: [
      { title: 'Safety first', text: 'Every spot is examined before any treatment.' },
      { title: 'Quick visits', text: 'Many small spots can be treated in a short visit.' },
      { title: 'Comfort', text: 'We take steps to keep you comfortable during treatment.' },
      { title: 'Physician-led', text: 'Dr. Slack examines your skin and plans your care.' },
    ],
    steps: [
      { title: 'Consultation', text: 'We look at the spot and ask about how long it has been there and any changes.' },
      { title: 'Safety check', text: 'Dr. Slack decides if the spot looks benign. If it looks concerning, we refer you to a specialist.' },
      { title: 'Treatment', text: 'The area is cleaned and the spot is removed with the method that fits it. Comfort steps are used as needed.' },
      { title: 'Aftercare', text: 'You get simple instructions to keep the area clean and protected while it heals.' },
      { title: 'Follow-up', text: 'We check the area, and we remind you to watch your skin for new changes.' },
    ],
    safety: {
      title: 'Honest limits and safety',
      paragraphs: [
        'Please do not remove a mole or spot at home. Any mole that is new, changing, bleeding, itchy or uneven in color or shape must be examined by a clinician before removal. Some spots may need a skin specialist or testing.',
        'After removal, redness, scabbing and a small mark can occur. Rarely, a spot can come back or leave a scar. Dr. Slack will explain the risks before you decide.',
      ],
      items: ['Every spot examined first', 'Concerning spots are referred', 'Clear aftercare steps', 'Skin check reminders'],
    },
    faqs: [
      { q: 'Are skin tags dangerous?', a: 'Most are harmless, but any spot should be checked. We look at it before we suggest removal.' },
      { q: 'Can you remove any mole?', a: 'No. We only treat spots that look benign. A concerning mole needs a specialist and may need testing.' },
      { q: 'Does it hurt?', a: 'Most people feel brief pinching or warmth. We use comfort steps as needed.' },
      { q: 'Will it leave a scar?', a: 'There may be a small mark while it heals. Scarring is not common, but it can happen.' },
      { q: 'Can warts come back?', a: 'Sometimes. Warts are caused by a virus, so they can return. We will tell you what to expect.' },
      { q: 'How do I get started?', a: 'Book a consultation online or call us at 912-268-2103. We will examine the spot and explain your options.' },
    ],
    related: [
      CONDITIONS,
      { label: 'Laser Facial', href: '/skin-facial-rejuvenation/laser-facial/' },
      { label: 'Medical Facials & HydraFacial', href: '/skin-facial-rejuvenation/medical-facials-hydrafacial/' },
      { label: 'All Treatments', href: '/treatments/' },
    ],
  },
  {
    slug: 'scar-treatment',
    group,
    title: 'Scar Treatment',
    seoTitle: `Scar Treatment in ${localCity}`,
    description:
      'Scar treatment with Dr. Laura Slack at Imber Medical in St. Simons Island, GA. Improve the look and feel of acne, surgical and other scars.',
    lede: 'Softer, smoother-looking scars with care planned for your skin by Dr. Laura Slack.',
    images: {
      hero: IMG + 'rf-microneedling-1.jpg',
      overview: IMG + 'rf-microneedling-2.jpg',
      fit: IMG + 'rf-microneedling-3.jpg',
      alt: {
        hero: 'A provider using a skin treatment device on a woman’s face',
        overview: 'A woman relaxing during a facial skin treatment',
        fit: 'A close view of a skin treatment device on the face',
      },
    },
    overview: {
      title: 'Why scars stay',
      paragraphs: [
        'A scar forms when skin heals after an injury, surgery, acne or a burn. The new skin does not match the old skin, so a scar can look raised, sunken, dark or red.',
        'Scars do not disappear fully, but many can look softer and smoother with the right care. The best choice depends on the type of scar, its age and your skin. Dr. Slack looks at all of this first.',
      ],
      cards: [
        {
          title: 'Know your scar',
          text: 'Acne scars, surgical scars and raised scars are different and need different care. We look at your scar before we suggest anything.',
        },
        {
          title: 'Help skin rebuild',
          text: 'Depending on the scar, options may include microneedling, radiofrequency treatment, laser and PRP. These aim to improve the look and feel of the skin over time.',
        },
      ],
    },
    fit: {
      title: 'Does this sound like you?',
      text: 'Many people have a scar that bothers them. These are common types we see.',
      concerns: [
        'Pitted or sunken acne scars',
        'A raised or thick scar',
        'A flat scar that looks red or dark',
        'A surgical or injury scar',
        'Uneven skin texture',
        'A scar that feels tight or rough',
      ],
      goodFit: [
        'Your scar is healed and no longer open',
        'You want a gentle, step-by-step approach',
        'You can plan for a series of visits',
        'You can protect your skin from the sun',
        'You understand results are improvement, not erasing the scar',
      ],
    },
    benefits: [
      { title: 'Smoother look and feel', text: 'The goal is to soften the look and texture of the scar over time.' },
      { title: 'Options for each scar', text: 'We match the treatment to the type and age of your scar.' },
      { title: 'Little downtime', text: 'Many plans need only a short healing time.' },
      { title: 'Physician-led', text: 'Dr. Slack plans each step and watches how your skin responds.' },
    ],
    steps: [
      { title: 'Consultation', text: 'We look at your scar, ask how it formed and review your health history.' },
      { title: 'Your plan', text: 'You get a clear plan with options, the number of visits and a fair estimate.' },
      { title: 'Treatment', text: 'Your skin is cleansed and numbed if needed, then treated with the chosen method.' },
      { title: 'Aftercare', text: 'We share tips for gentle care and sun protection while your skin heals.' },
      { title: 'Results', text: 'Skin builds new tissue slowly. Many people see changes over several months, and we check progress as we go.' },
    ],
    safety: {
      title: 'Honest limits and safety',
      paragraphs: [
        'Scars can be improved but not fully removed, and results vary. Some thick or raised scars need extra care or a different approach, and we will tell you honestly if so.',
        'Redness, swelling and mild peeling can happen after treatment. Rarely, skin color can change or a scar can get worse. Dr. Slack reviews your skin, health and past scarring before you begin.',
      ],
      items: ['Scar type assessment first', 'Health and healing review', 'Gentle, step-by-step care', 'Sun protection guidance'],
    },
    faqs: [
      { q: 'Can you remove my scar completely?', a: 'No. Scars can look softer and smoother, but they do not disappear fully. We will be honest about what is realistic.' },
      { q: 'Does scar age matter?', a: 'Yes. A scar is usually treated once it is fully healed. Dr. Slack will tell you if your scar is ready.' },
      { q: 'How many visits will I need?', a: 'It depends on the scar. Many plans use a series of visits spaced weeks apart.' },
      { q: 'Is there downtime?', a: 'Often a little. Redness and mild swelling are common for a short time.' },
      { q: 'Can raised scars be treated?', a: 'Some can. Raised scars need special care, and Dr. Slack will explain your options.' },
      { q: 'How do I get started?', a: 'Book a consultation online or call us at 912-268-2103. We will look at your scar and make a plan that fits you.' },
    ],
    related: [
      CONDITIONS,
      { label: 'RF Microneedling', href: '/skin-facial-rejuvenation/rf-microneedling/' },
      { label: 'Microneedling PRP/PRF', href: '/skin-facial-rejuvenation/microneedling-prp-prf/' },
      { label: 'Laser Facial', href: '/skin-facial-rejuvenation/laser-facial/' },
    ],
  },
];
