import type { Treatment } from '../treatments';

const localCity = 'St. Simons Island, GA';
const IMG = '/images/treatments/';
const group = { title: 'Skin & Facial Rejuvenation', href: '/skin-facial-rejuvenation/' };
const BOOK = 'Book a consultation online or call us at 912-268-2103.';

export const skin: Treatment[] = [
  {
    slug: 'laser-facial',
    group,
    title: 'Laser Facial',
    seoTitle: `Laser Facial in ${localCity}`,
    description:
      'Laser facial treatments with Dr. Laura Slack at Imber Medical in St. Simons Island, GA. Smoother, brighter-looking skin planned for your skin type.',
    lede: 'Light energy that helps skin look smoother, brighter and more even. Planned for your skin by Dr. Laura Slack.',
    images: {
      hero: IMG + 'laser-facial-1.jpg',
      overview: IMG + 'laser-facial-2.jpg',
      fit: IMG + 'laser-facial-3.jpg',
      alt: {
        hero: 'A woman with calm, glowing skin',
        overview: 'A woman receiving a gentle laser treatment on her face',
        fit: 'A close view of smooth, even facial skin',
      },
    },
    overview: {
      title: 'Fresh, even-looking skin with light',
      paragraphs: [
        'Sun, age and daily life can leave skin looking dull, uneven or rough. A laser facial uses controlled light energy to treat the skin so it can renew itself.',
        'Lasers are different, and so is every face. Dr. Slack picks the settings for your skin tone, your concerns and your goals, so the treatment stays safe and comfortable.',
      ],
      cards: [
        {
          title: 'Light energy for the skin',
          text: 'The laser targets the top layers of skin. This can help soften the look of tone and texture concerns over time.',
        },
        {
          title: 'Settings made for you',
          text: 'Skin tone, sun exposure and sensitivity all matter. We adjust the treatment for each visit and each person.',
        },
      ],
    },
    fit: {
      title: 'Is a laser facial right for you?',
      text: 'Many adults are good candidates. During your consultation we look at your skin, your health history and your goals, and we tell you honestly what to expect.',
      concerns: [
        'Dull or uneven skin tone',
        'Sun spots and brown spots',
        'Rough or uneven texture',
        'Redness and small visible vessels',
        'Fine lines',
        'Enlarged-looking pores',
      ],
      goodFit: [
        'You want smoother, brighter-looking skin',
        'You can protect your skin from the sun before and after',
        'You can plan for a short healing time',
        'You are open to a series of visits',
        'You have no active skin infection in the area',
      ],
    },
    benefits: [
      { title: 'Brighter look', text: 'Many people see skin that looks fresher and more even after healing.' },
      { title: 'Smoother texture', text: 'Treatment can help soften the look of rough skin and fine lines.' },
      { title: 'Planned for you', text: 'Settings are chosen for your skin type and your goals.' },
      { title: 'Physician-led', text: 'Dr. Slack plans your care and checks how your skin responds.' },
    ],
    steps: [
      { title: 'Consultation', text: 'We look at your skin, review your health history and medicines, and talk about your goals.' },
      { title: 'Prepare', text: 'You protect your skin from the sun and follow a simple skin checklist before your visit.' },
      { title: 'Treatment', text: 'Your skin is cleaned and protective eyewear is worn. The laser is passed over the area, with cooling for comfort.' },
      { title: 'Aftercare', text: 'Skin may look pink or feel warm for a short time. We share gentle skin care and sun protection tips.' },
      { title: 'Results', text: 'Skin changes over time as it heals and renews. Some plans use a series of visits. We check progress and adjust your plan.' },
    ],
    safety: {
      title: 'Your safety comes first',
      paragraphs: [
        'Lasers are medical devices, so skin type, settings and technique matter. Dr. Slack plans each treatment with care.',
        'Redness, swelling and tenderness can happen and usually fade. Less common risks include color changes in the skin. We explain the risks before you decide.',
      ],
      items: ['Physician-planned settings', 'Skin type and sun check', 'Protective eyewear and cooling', 'Clear aftercare and follow-up'],
    },
    faqs: [
      { q: 'Does a laser facial hurt?', a: 'Most people feel warmth or a quick snapping feeling. Cooling helps keep it comfortable. Tell us how you feel at any time.' },
      { q: 'Is there downtime?', a: 'It depends on the settings. Some people have redness or flaking for a few days. We will tell you what to expect for your plan.' },
      { q: 'How many visits will I need?', a: 'It depends on your skin and your goals. Some people start with a series. Dr. Slack will give you a clear plan.' },
      { q: 'Can I get a laser facial with a tan?', a: 'Tanned skin raises the risk of side effects. Please avoid sun and tanning before and after treatment, and tell us about recent sun.' },
      { q: 'Can I combine it with other treatments?', a: 'Often, yes. We may pair it with facials, peels or other skin care. We will suggest what makes sense for you.' },
      { q: 'How do I get started?', a: BOOK + ' We will look at your skin and make a plan that fits you.' },
    ],
    related: [
      { label: 'RF Microneedling', href: '/skin-facial-rejuvenation/rf-microneedling/' },
      { label: 'Chemical Peels (VI Peel)', href: '/skin-facial-rejuvenation/chemical-peels-vi-peel/' },
      { label: 'Skin & Facial Rejuvenation', href: '/skin-facial-rejuvenation/' },
      { label: 'Laser Hair Removal', href: '/hair-restoration-removal/laser-hair-removal/' },
    ],
  },
  {
    slug: 'rf-microneedling',
    group,
    title: 'RF Microneedling',
    seoTitle: `RF Microneedling in ${localCity}`,
    description:
      'RF microneedling with Dr. Laura Slack at Imber Medical in St. Simons Island, GA. Firmer, smoother-looking skin planned for your face and your goals.',
    lede: 'Tiny needles and radiofrequency energy work together to help skin look firmer and smoother. Planned by Dr. Laura Slack.',
    images: {
      hero: IMG + 'rf-microneedling-1.jpg',
      overview: IMG + 'rf-microneedling-2.jpg',
      fit: IMG + 'rf-microneedling-3.jpg',
      alt: {
        hero: 'A woman with smooth, firm-looking skin',
        overview: "A provider performing a microneedling treatment on a woman's cheek",
        fit: 'A close view of healthy, even facial skin',
      },
    },
    overview: {
      title: "Support your skin's own renewal",
      paragraphs: [
        'With time, skin can lose firmness and smoothness. RF microneedling uses very fine needles to make tiny channels in the skin and sends radiofrequency energy to the layer below.',
        'This gentle injury asks the skin to renew itself. Dr. Slack sets the depth and the energy for your face and your concerns.',
      ],
      cards: [
        {
          title: 'Needles plus energy',
          text: 'The fine needles and the radiofrequency energy work together. Many people choose it to help with tone, texture and a tighter look.',
        },
        {
          title: 'Face and beyond',
          text: 'RF microneedling is often used on the face and neck. We can talk about other areas at your consultation.',
        },
      ],
    },
    fit: {
      title: 'Is RF microneedling right for you?',
      text: 'It is a good fit for many adults who want better skin texture and a firmer look without surgery. We check your skin and health history first.',
      concerns: [
        'Early skin laxity',
        'Fine lines and rough texture',
        'Acne scars',
        'Enlarged-looking pores',
        'Uneven skin tone',
        'Skin that looks tired',
      ],
      goodFit: [
        'You want a non-surgical option',
        'You can plan for a few days of redness',
        'You are open to a series of visits',
        'You can protect your skin from the sun',
        'You have no active skin infection in the area',
      ],
    },
    benefits: [
      { title: 'Firmer look', text: 'Many people notice skin that looks tighter and smoother over time.' },
      { title: 'Better texture', text: 'It can help soften the look of scars, pores and rough skin.' },
      { title: 'No surgery', text: 'No cuts and no stitches. Healing time is usually short.' },
      { title: 'Physician-led', text: 'Dr. Slack plans the depth and energy for your skin.' },
    ],
    steps: [
      { title: 'Consultation', text: 'We look at your skin, review your history and medicines, and talk about what you want to change.' },
      { title: 'Prepare', text: 'You avoid sun and follow a short checklist. Some medicines or skin products may need a pause.' },
      { title: 'Treatment', text: 'Numbing cream is applied. The device is moved over the area. Most visits are under an hour, but time depends on the area.' },
      { title: 'Aftercare', text: 'Skin may look pink and feel warm for a short time. We share gentle care and sun protection tips.' },
      { title: 'Results', text: 'Skin keeps improving as it renews. Many plans use a series of visits. We check progress and adjust your plan.' },
    ],
    safety: {
      title: 'Your safety comes first',
      paragraphs: [
        'This is a medical treatment. Dr. Slack checks your skin and health history, and we do not treat over active infection or skin problems that need other care.',
        'Redness, swelling and small pinpoint marks are common and usually fade quickly. Less common risks include infection or color changes. We explain them before you decide.',
      ],
      items: ['Physician-planned depth and energy', 'Numbing for comfort', 'Skin and health history review', 'Clear aftercare and follow-up'],
    },
    faqs: [
      { q: 'Does RF microneedling hurt?', a: 'We use numbing cream. Most people feel pressure, warmth or a light prickling feeling.' },
      { q: 'How long is the healing time?', a: 'Many people have redness for a few days. Your plan may change this. We will tell you what to expect.' },
      { q: 'How many visits will I need?', a: 'It depends on your skin and your goals. Many plans use a series of visits. Dr. Slack will give you a clear plan.' },
      { q: 'When will I see results?', a: 'Skin renews slowly. Many people look for changes over the weeks and months after treatment.' },
      { q: 'Can I wear makeup afterward?', a: 'We usually ask you to wait a short time. We will share clear directions at your visit.' },
      { q: 'How do I get started?', a: BOOK + ' We will look at your skin and make a plan that fits you.' },
    ],
    related: [
      { label: 'Microneedling PRP/PRF', href: '/skin-facial-rejuvenation/microneedling-prp-prf/' },
      { label: 'Laser Facial', href: '/skin-facial-rejuvenation/laser-facial/' },
      { label: 'Skin & Facial Rejuvenation', href: '/skin-facial-rejuvenation/' },
      { label: 'Filler & Tox', href: '/injectables-toxins/filler-tox/' },
    ],
  },
  {
    slug: 'medical-facials-hydrafacial',
    group,
    title: 'Medical Facials & HydraFacial',
    seoTitle: `Medical Facials & HydraFacial in ${localCity}`,
    description:
      'Medical facials and HydraFacial with the team at Imber Medical in St. Simons Island, GA. Deep cleansing, hydration and glowing skin, with physician oversight.',
    lede: 'Deep cleansing, gentle exfoliation and hydration for fresh, glowing skin. Done with physician oversight.',
    images: {
      hero: IMG + 'medical-facial-1.jpg',
      overview: IMG + 'medical-facial-2.jpg',
      fit: IMG + 'medical-facial-3.jpg',
      alt: {
        hero: 'A woman relaxing during a facial treatment',
        overview: "A provider cleansing a woman's face during a facial",
        fit: 'A woman with fresh, hydrated skin',
      },
    },
    overview: {
      title: 'A facial that does more',
      paragraphs: [
        'A medical facial goes beyond a simple spa facial. It is planned for your skin and done with medical-grade tools and products.',
        'HydraFacial is one of our options. It cleans the skin, gently exfoliates, removes buildup from pores and adds hydrating serums in one visit. Your provider picks the steps that suit your skin.',
      ],
      cards: [
        {
          title: 'Clean, clear and hydrated',
          text: 'Cleansing, exfoliation and extraction help pores look clearer. Hydrating serums leave skin feeling soft and fresh.',
        },
        {
          title: 'Add-ons for your goals',
          text: 'We can add boosters for dullness, dryness or uneven tone. We choose only what makes sense for your skin.',
        },
      ],
    },
    fit: {
      title: 'Are medical facials right for you?',
      text: 'Most skin types can enjoy a medical facial. It is also a good way to start your skin plan or keep it on track between other treatments.',
      concerns: [
        'Dull-looking skin',
        'Dry or dehydrated skin',
        'Clogged or congested pores',
        'Blackheads',
        'Uneven texture',
        'Skin that needs a fresh start before an event',
      ],
      goodFit: [
        'You want a treatment with little or no downtime',
        'You want a glow for an event or season',
        'You want to build a regular skin routine',
        'You want help with congested pores',
        'You have no active skin infection or open sores',
      ],
    },
    benefits: [
      { title: 'Little downtime', text: 'Most people go right back to their day, often with a healthy glow.' },
      { title: 'Deep clean', text: "Helps clear buildup from pores and refresh the skin's surface." },
      { title: 'Hydration', text: 'Serums help skin feel soft, plump and comfortable.' },
      { title: 'Planned for you', text: 'Your facial is matched to your skin type and your goals.' },
    ],
    steps: [
      { title: 'Skin check', text: 'We look at your skin and ask about your routine, sensitivities and goals.' },
      { title: 'Your plan', text: 'We choose the facial steps and any boosters that fit your skin.' },
      { title: 'Treatment', text: 'Your skin is cleansed, exfoliated and treated, and pores are gently cleared. Hydrating serums finish the visit.' },
      { title: 'Aftercare', text: 'We share simple tips, such as daily sunscreen and gentle products.' },
      { title: 'Keep it going', text: 'Many people book a facial on a regular schedule. We will suggest a rhythm that fits your skin.' },
    ],
    safety: {
      title: 'Your safety comes first',
      paragraphs: [
        'We ask about allergies, medicines and skin conditions before every facial, and we change the plan if your skin is irritated or sensitive.',
        'Mild redness can happen for a short time. If you use strong skin products or have a flare of a skin condition, tell us before your visit.',
      ],
      items: ['Allergy and medicine check', 'Medical-grade products', 'Plan adjusted to your skin', 'Clear aftercare tips'],
    },
    faqs: [
      { q: 'What is HydraFacial?', a: 'It is a facial that cleans, exfoliates, clears pores and adds hydrating serums in one visit. It is known for its comfort and little downtime.' },
      { q: 'Does it hurt?', a: 'Most people find it comfortable and relaxing. You may feel gentle suction or a cool sensation.' },
      { q: 'Is there downtime?', a: 'Usually none. Skin may look a little pink for a short time.' },
      { q: 'How often should I get one?', a: 'It depends on your skin and goals. Many people come back on a regular schedule. We will suggest what fits you.' },
      { q: 'Can I get a facial before an event?', a: 'Yes. Many people book a facial a few days before an event. Ask us for the best timing.' },
      { q: 'How do I get started?', a: BOOK + ' We will recommend a facial that fits your skin.' },
    ],
    related: [
      { label: 'Chemical Peels (VI Peel)', href: '/skin-facial-rejuvenation/chemical-peels-vi-peel/' },
      { label: 'Plated Calm', href: '/skin-facial-rejuvenation/plated-calm/' },
      { label: 'Skin & Facial Rejuvenation', href: '/skin-facial-rejuvenation/' },
      { label: 'All treatments', href: '/treatments/' },
    ],
  },
  {
    slug: 'chemical-peels-vi-peel',
    group,
    title: 'Chemical Peels (VI Peel)',
    seoTitle: `Chemical Peels & VI Peel in ${localCity}`,
    description:
      'Chemical peels and VI Peel with Dr. Laura Slack at Imber Medical in St. Simons Island, GA. Smoother, brighter-looking skin planned for your skin type.',
    lede: 'A medical-grade peel that helps skin look smoother, brighter and more even. Chosen for your skin by Dr. Laura Slack.',
    images: {
      hero: IMG + 'chemical-peel-1.jpg',
      overview: IMG + 'chemical-peel-2.jpg',
      fit: IMG + 'chemical-peel-3.jpg',
      alt: {
        hero: 'A woman with bright, even-looking skin',
        overview: "A provider applying a peel solution to a woman's face",
        fit: 'A close view of smooth, fresh facial skin',
      },
    },
    overview: {
      title: 'Let fresh skin come through',
      paragraphs: [
        'A chemical peel uses a medical-grade solution that helps the top layers of skin renew. Over a few days, old skin sheds and newer skin shows through.',
        'VI Peel is one of the peels we offer. There are different strengths and blends, so Dr. Slack picks the one that fits your skin and your goals.',
      ],
      cards: [
        {
          title: 'Renewal from the surface',
          text: 'The peel helps lift away dull, damaged surface skin. Skin can look brighter and feel smoother as it heals.',
        },
        {
          title: 'Strength that fits you',
          text: 'Skin tone, sun history and sensitivity all matter. We choose the peel and the steps to keep it safe and comfortable.',
        },
      ],
    },
    fit: {
      title: 'Is a chemical peel right for you?',
      text: 'Peels can suit many skin types. During your consultation we look at your skin, your skin products and your health history.',
      concerns: [
        'Dull or uneven skin tone',
        'Sun spots and brown patches',
        'Fine lines',
        'Rough texture',
        'Acne and breakouts',
        'Enlarged-looking pores',
      ],
      goodFit: [
        'You want brighter, smoother-looking skin',
        'You can plan for a few days of peeling',
        'You can use sunscreen every day',
        'You can follow aftercare directions',
        'You are not pregnant or breastfeeding, or you have talked with your doctor',
      ],
    },
    benefits: [
      { title: 'Brighter look', text: 'Many people see fresher, more even-looking skin after healing.' },
      { title: 'Smoother feel', text: 'Peels can help soften the look of fine lines and rough texture.' },
      { title: 'Choices for your skin', text: 'Different peels can suit different concerns and skin tones.' },
      { title: 'Physician-led', text: 'Dr. Slack plans your peel and checks your skin response.' },
    ],
    steps: [
      { title: 'Consultation', text: 'We look at your skin, review your skin care products and medicines, and talk about your goals.' },
      { title: 'Prepare', text: 'We may ask you to pause some products and to avoid sun before your visit.' },
      { title: 'Treatment', text: 'Your skin is cleansed and the peel is applied. Many people feel warmth or a light tingle. The visit is usually short.' },
      { title: 'Aftercare', text: 'Skin may feel tight and then peel for several days. We give you a gentle care plan and sun protection tips.' },
      { title: 'Results', text: 'Skin looks fresher as peeling finishes. Some plans use a series of peels. We check progress and adjust.' },
    ],
    safety: {
      title: 'Your safety comes first',
      paragraphs: [
        'Peels are medical treatments. Dr. Slack checks your skin, your history and your products before choosing a peel, and avoids peels that are too strong for your skin.',
        'Redness, dryness and peeling are expected. Less common risks include color changes in the skin or irritation. We explain these before you decide.',
      ],
      items: ['Physician-chosen peel', 'Skin and product review', 'Sun protection plan', 'Clear aftercare and follow-up'],
    },
    faqs: [
      { q: 'Will my skin peel?', a: 'Often, yes. Some peels cause visible peeling for several days. Others are lighter. We will tell you what to expect.' },
      { q: 'Does it hurt?', a: 'Most people feel warmth or a light tingle. It is usually well tolerated.' },
      { q: 'Is there downtime?', a: 'Many people have a few days of dryness or peeling. Plan your visit with this in mind.' },
      { q: 'Can I wear makeup afterward?', a: 'We will share clear directions at your visit. Often there is a short wait.' },
      { q: 'Is it safe for all skin tones?', a: 'Peels can be used on many skin tones when chosen with care. We will check your skin first and choose the right one.' },
      { q: 'How do I get started?', a: BOOK + ' We will look at your skin and choose a peel that fits you.' },
    ],
    related: [
      { label: 'Medical Facials & HydraFacial', href: '/skin-facial-rejuvenation/medical-facials-hydrafacial/' },
      { label: 'Laser Facial', href: '/skin-facial-rejuvenation/laser-facial/' },
      { label: 'Skin & Facial Rejuvenation', href: '/skin-facial-rejuvenation/' },
      { label: 'All treatments', href: '/treatments/' },
    ],
  },
  {
    slug: 'microneedling-prp-prf',
    group,
    title: 'Microneedling PRP/PRF',
    seoTitle: `Microneedling PRP/PRF in ${localCity}`,
    description:
      'Microneedling with PRP or PRF with Dr. Laura Slack at Imber Medical in St. Simons Island, GA. A natural approach that uses your own platelets to support skin renewal.',
    lede: 'Microneedling paired with a concentrate made from your own blood to support fresher, healthier-looking skin.',
    images: {
      hero: IMG + 'prp-1.jpg',
      overview: IMG + 'prp-2.jpg',
      fit: IMG + 'prp-3.jpg',
      alt: {
        hero: 'A woman with glowing skin holding a PRP blood tube in a clinic',
        overview: "A gloved provider drawing blood from a patient arm for PRP",
        fit: 'A skin layer model beside a syringe at a doctor desk',
      },
    },
    overview: {
      title: 'Use your own body to renew your skin',
      paragraphs: [
        'PRP and PRF are made from a small sample of your own blood. The sample is spun in a machine to make a concentrate rich in platelets and other natural helpers.',
        'This concentrate is used with microneedling. The tiny channels let the skin take it in, and the treatment helps the skin renew itself. Dr. Slack plans the depth and the details for you.',
      ],
      cards: [
        {
          title: 'PRP and PRF',
          text: 'PRP is platelet-rich plasma. PRF is platelet-rich fibrin, which has a slightly different make-up. We will explain which one fits your plan.',
        },
        {
          title: 'Your own platelets',
          text: 'Because the concentrate comes from you, it is a natural option for people who prefer to avoid added synthetic products.',
        },
      ],
    },
    fit: {
      title: 'Is PRP/PRF microneedling right for you?',
      text: 'It can suit many adults who want better skin texture and a fresher look. We check your skin and health history before we start.',
      concerns: [
        'Dull, tired-looking skin',
        'Fine lines',
        'Acne scars',
        'Rough texture',
        'Uneven skin tone',
        'Under-eye area that looks thin or crepey',
      ],
      goodFit: [
        'You like a natural approach',
        'You are comfortable with a blood draw',
        'You can plan for a few days of redness',
        'You are open to a series of visits',
        'You have no blood condition that rules out PRP or PRF',
      ],
    },
    benefits: [
      { title: 'Natural approach', text: 'Uses your own platelets rather than a synthetic product.' },
      { title: 'Fresher look', text: 'Many people see smoother, brighter-looking skin over time.' },
      { title: 'Short healing time', text: 'Redness usually fades in a few days.' },
      { title: 'Physician-led', text: 'Dr. Slack plans your treatment and follows your progress.' },
    ],
    steps: [
      { title: 'Consultation', text: 'We look at your skin, review your history and medicines, and explain PRP and PRF.' },
      { title: 'Blood draw', text: 'A small sample of blood is taken, like a routine blood test. It is then spun to make your concentrate.' },
      { title: 'Treatment', text: 'Numbing cream is applied. Microneedling is done and your concentrate is applied to the skin.' },
      { title: 'Aftercare', text: 'Skin may look pink and feel warm for a short time. We share gentle care and sun protection tips.' },
      { title: 'Results', text: 'Skin renews slowly. Many people use a series of visits, with changes seen over the weeks and months. We adjust your plan as we go.' },
    ],
    safety: {
      title: 'Your safety comes first',
      paragraphs: [
        'Because it uses your own blood, allergy to the concentrate is unlikely. We still review your health history, blood conditions and medicines before treatment.',
        'Redness, swelling and tenderness are common and usually fade. Less common risks include infection or bruising. We explain these before you decide.',
      ],
      items: ['Your own platelets', 'Health and medicine review', 'Clean, careful technique', 'Clear aftercare and follow-up'],
    },
    faqs: [
      { q: 'What is the difference between PRP and PRF?', a: 'Both come from your blood. PRF is made in a way that keeps more of the natural fibrin and may release its helpers more slowly. We will help you choose.' },
      { q: 'Does it hurt?', a: 'We use numbing cream. Most people feel pressure or light prickling.' },
      { q: 'Is there downtime?', a: 'Many people have redness for a few days. We will tell you what to expect for your plan.' },
      { q: 'How many visits will I need?', a: 'It depends on your skin and goals. Many plans use a series of visits. Dr. Slack will give you a clear plan.' },
      { q: 'Who should not have it?', a: 'People with some blood conditions, active infection or certain medicines may need a different plan. We will check at your consultation.' },
      { q: 'How do I get started?', a: BOOK + ' We will look at your skin and make a plan that fits you.' },
    ],
    related: [
      { label: 'RF Microneedling', href: '/skin-facial-rejuvenation/rf-microneedling/' },
      { label: 'Regenerative Cells', href: '/skin-facial-rejuvenation/regenerative-cells/' },
      { label: 'Skin & Facial Rejuvenation', href: '/skin-facial-rejuvenation/' },
      { label: 'Peptide Therapy', href: '/wellness-medical-weight-loss/peptide-therapy/' },
    ],
  },
  {
    slug: 'regenerative-cells',
    group,
    title: 'Regenerative Cells',
    seoTitle: `Regenerative Cells Skin Treatment in ${localCity}`,
    description:
      "Regenerative cell skin treatments with Dr. Laura Slack at Imber Medical in St. Simons Island, GA. Support your skin's own repair for a fresher look.",
    lede: "Regenerative care that supports your skin's own repair. Planned and supervised by Dr. Laura Slack.",
    images: {
      hero: IMG + 'regenerative-1.jpg',
      overview: IMG + 'regenerative-2.jpg',
      fit: IMG + 'regenerative-3.jpg',
      alt: {
        hero: 'A close view of a glowing, hydrated face with a serum drop',
        overview: "A woman in a head towel with a serum dropper by her eye",
        fit: 'A woman with freckled skin and a serum dropper near her cheek',
      },
    },
    overview: {
      title: 'Help your skin repair itself',
      paragraphs: [
        "Regenerative treatments are made to support the skin's natural repair process. They are often used with other treatments such as microneedling.",
        'The goal is skin that looks and feels healthier over time. Dr. Slack will explain the options we offer, how they work and what is realistic for you.',
      ],
      cards: [
        {
          title: 'Support, not shortcuts',
          text: "These treatments aim to support the skin's own renewal. Changes are gradual, so patience matters.",
        },
        {
          title: 'Part of a plan',
          text: 'Regenerative care often works best with good skin care and other treatments. We build a plan with you.',
        },
      ],
    },
    fit: {
      title: 'Are regenerative cells right for you?',
      text: 'This treatment may suit adults who want to improve skin quality and renewal. We review your skin, goals and health history first.',
      concerns: [
        'Skin that looks tired or dull',
        'Fine lines',
        'Uneven texture',
        'Skin that feels thin or crepey',
        'Early signs of aging',
        'Healing and renewal after other treatments',
      ],
      goodFit: [
        'You like a gradual, natural approach',
        'You are open to a series of visits',
        'You can follow a skin care routine',
        'You can protect your skin from the sun',
        'You have no active skin infection in the area',
      ],
    },
    benefits: [
      { title: 'Skin quality', text: 'Aims to support healthier-looking, more even skin over time.' },
      { title: 'Natural approach', text: "Built around the skin's own renewal process." },
      { title: 'Works with other care', text: 'Often paired with microneedling or other treatments.' },
      { title: 'Physician-led', text: 'Dr. Slack plans your care and explains your options honestly.' },
    ],
    steps: [
      { title: 'Consultation', text: 'We look at your skin, review your history and talk about your goals and options.' },
      { title: 'Your plan', text: 'You get a clear plan with the treatment, the number of visits and a fair estimate.' },
      { title: 'Treatment', text: 'Your skin is cleansed and prepared, and the treatment is applied as planned. Comfort steps are used when needed.' },
      { title: 'Aftercare', text: 'We share simple care and sun protection tips to help your skin heal well.' },
      { title: 'Results', text: 'Skin changes slowly. We check your progress and adjust your plan.' },
    ],
    safety: {
      title: 'Your safety comes first',
      paragraphs: [
        'Dr. Slack reviews your health history, medicines and allergies before treatment, and uses products from sources we trust.',
        'Redness, swelling or tenderness can happen and usually fade. Results vary, and we will be honest about what is realistic for you.',
      ],
      items: ['Physician-supervised care', 'Allergy and medicine review', 'Trusted products', 'Clear aftercare and follow-up'],
    },
    faqs: [
      { q: 'What are regenerative cells?', a: "This is a skin treatment that supports the skin's own repair process. Dr. Slack will explain the exact option and how it works at your visit." },
      { q: 'Does it hurt?', a: 'Most people find it comfortable. We use comfort steps when needed.' },
      { q: 'Is there downtime?', a: 'It depends on the plan. Some people have mild redness for a short time. We will tell you what to expect.' },
      { q: 'How many visits will I need?', a: 'It depends on your skin and goals. Dr. Slack will give you a clear plan.' },
      { q: 'Can I combine it with other treatments?', a: 'Often, yes. It is commonly paired with treatments such as microneedling. We will suggest what makes sense.' },
      { q: 'How do I get started?', a: BOOK + ' We will look at your skin and make a plan that fits you.' },
    ],
    related: [
      { label: 'Microneedling PRP/PRF', href: '/skin-facial-rejuvenation/microneedling-prp-prf/' },
      { label: 'Plated Calm', href: '/skin-facial-rejuvenation/plated-calm/' },
      { label: 'Skin & Facial Rejuvenation', href: '/skin-facial-rejuvenation/' },
      { label: 'All treatments', href: '/treatments/' },
    ],
  },
  {
    slug: 'plated-calm',
    group,
    title: 'Plated Calm',
    seoTitle: `Plated Calm Skin Treatment in ${localCity}`,
    description:
      'Plated Calm at Imber Medical in St. Simons Island, GA. A soothing skin treatment planned by Dr. Laura Slack for calmer, healthier-looking skin.',
    lede: 'A soothing treatment for calmer, healthier-looking skin. Planned by Dr. Laura Slack.',
    images: {
      hero: IMG + 'plated-calm-1.jpg',
      overview: IMG + 'plated-calm-2.jpg',
      fit: IMG + 'plated-calm-3.jpg',
      alt: {
        hero: 'A woman touching her glowing skin and holding a cream jar',
        overview: 'A woman with closed eyes holding a skincare cream jar',
        fit: 'A calm woman with soft, smooth skin',
      },
    },
    overview: {
      title: 'Calm skin, comfortable skin',
      paragraphs: [
        'Skin can feel tight, red or sensitive, especially after sun, treatments or changes in the weather. Plated Calm is chosen for times when your skin needs comfort and care.',
        'It is often used to help skin feel calm and look healthier. Dr. Slack will explain how it fits into your plan and when it makes the most sense.',
      ],
      cards: [
        {
          title: 'Comfort first',
          text: 'The goal is to soothe the skin and support its natural barrier so it feels comfortable.',
        },
        {
          title: 'Pairs well with other care',
          text: 'Plated Calm can be used on its own or as part of a plan with other skin treatments.',
        },
      ],
    },
    fit: {
      title: 'Is Plated Calm right for you?',
      text: 'It may suit adults whose skin is sensitive, easily irritated or in need of recovery. We look at your skin and your products first.',
      concerns: [
        'Sensitive or reactive skin',
        'Redness',
        'Dry, tight-feeling skin',
        'Skin that feels irritated after treatments',
        'A skin barrier that needs support',
        'Skin that looks stressed or tired',
      ],
      goodFit: [
        'You want a gentle, soothing option',
        'You want to support your skin after other treatments',
        'You can follow a simple skin care routine',
        'You can protect your skin from the sun',
        'You have no known allergy to the ingredients',
      ],
    },
    benefits: [
      { title: 'Gentle', text: 'Made for skin that needs comfort rather than strong treatment.' },
      { title: 'Supports recovery', text: 'Can be part of care after other skin treatments.' },
      { title: 'Little downtime', text: 'Most people go right back to their day.' },
      { title: 'Physician-led', text: 'Dr. Slack checks your skin and plans your care.' },
    ],
    steps: [
      { title: 'Skin check', text: 'We look at your skin and ask about sensitivities, products and goals.' },
      { title: 'Your plan', text: 'We decide if Plated Calm should stand alone or join other treatments.' },
      { title: 'Treatment', text: 'Your skin is cleansed and Plated Calm is applied as planned. It is a calm, comfortable visit.' },
      { title: 'Aftercare', text: 'We share gentle care and sun protection tips to keep skin comfortable.' },
      { title: 'Follow-up', text: 'We check how your skin feels and adjust your routine if needed.' },
    ],
    safety: {
      title: 'Your safety comes first',
      paragraphs: [
        'We ask about allergies, medicines and skin conditions before treatment. If you know you react to certain ingredients, tell us first.',
        'Mild redness can happen for a short time. If your skin has an active infection or a flare that needs medical care, we will plan a different path.',
      ],
      items: ['Allergy and ingredient check', 'Skin condition review', 'Gentle, careful technique', 'Clear aftercare tips'],
    },
    faqs: [
      { q: 'What is Plated Calm?', a: 'It is a soothing skin option we offer to help skin feel calm and look healthier. Dr. Slack will explain how it works for you at your visit.' },
      { q: 'Does it hurt?', a: 'No. It is meant to be gentle and comfortable.' },
      { q: 'Is there downtime?', a: 'Usually none. Skin may look a little pink for a short time.' },
      { q: 'Can I use it after other treatments?', a: 'Often, yes. Many people use it to support skin after other treatments. We will tell you what fits your plan.' },
      { q: 'How often should I use it?', a: 'It depends on your skin and your plan. Dr. Slack will suggest a schedule.' },
      { q: 'How do I get started?', a: BOOK + ' We will look at your skin and make a plan that fits you.' },
    ],
    related: [
      { label: 'Medical Facials & HydraFacial', href: '/skin-facial-rejuvenation/medical-facials-hydrafacial/' },
      { label: 'Regenerative Cells', href: '/skin-facial-rejuvenation/regenerative-cells/' },
      { label: 'Skin & Facial Rejuvenation', href: '/skin-facial-rejuvenation/' },
      { label: 'All treatments', href: '/treatments/' },
    ],
  },
];
