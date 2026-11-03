import type { Treatment } from '../treatments';

const localCity = 'St. Simons Island, GA';
const IMG = '/images/treatments/';
const group = { title: 'Technologies', href: '/technologies/' };

export const techB: Treatment[] = [
  {
    slug: 'scarlet-rf',
    group,
    title: 'Scarlet RF',
    seoTitle: `Scarlet RF in ${localCity}`,
    description:
      'Scarlet RF fractional radiofrequency microneedling at Imber Medical in St. Simons Island, GA. Planned and overseen by Dr. Laura Slack.',
    lede: 'Scarlet RF pairs tiny needles with gentle radiofrequency energy to help smooth, firm and refresh skin. Dr. Laura Slack plans each session for you.',
    images: {
      hero: IMG + 'rf-microneedling-1.jpg',
      overview: IMG + 'rf-microneedling-2.jpg',
      fit: IMG + 'rf-microneedling-3.jpg',
      alt: {
        hero: 'A woman with smooth, even skin',
        overview: 'A practitioner treating the face with a microneedling device',
        fit: 'A woman with a calm, glowing look',
      },
    },
    overview: {
      title: 'How Scarlet RF works',
      paragraphs: [
        'Scarlet RF is a fractional radiofrequency (RF) microneedling device. Tiny needles make small channels in the skin. At the same time, RF energy warms the layers below the surface.',
        'This controlled warmth and the skin’s natural healing response help support new collagen over time. Collagen is the protein that gives skin its firmness.',
        'At Imber Medical, Dr. Slack chooses the depth and settings for your skin and your goals.',
      ],
      cards: [
        { title: 'Needles plus RF', text: 'Needles reach below the surface while RF energy warms the deeper layers.' },
        { title: 'Settings made for you', text: 'Depth and energy are set for your skin type, area and goals.' },
      ],
    },
    fit: {
      title: 'Is Scarlet RF right for you?',
      text: 'Scarlet RF is often considered for skin that needs a little more texture, tone and firmness. A consultation tells us if it is the right tool for you.',
      concerns: ['Fine lines and uneven texture', 'Early skin laxity', 'Enlarged-looking pores', 'Some acne scars', 'Dull or rough-looking skin'],
      goodFit: ['You want a non-surgical option', 'You can plan for a few days of redness', 'You can follow aftercare and avoid the sun', 'You understand that results build over a series', 'You are in good general health'],
    },
    benefits: [
      { title: 'Targeted energy', text: 'RF is delivered at the depth your plan needs.' },
      { title: 'Texture and tone', text: 'Many people choose it to refine how skin looks and feels.' },
      { title: 'Short downtime', text: 'Most people have redness for a few days.' },
      { title: 'Physician-led', text: 'Dr. Slack plans and oversees your treatment.' },
    ],
    steps: [
      { title: 'Consultation', text: 'We review your skin, your goals and your health history.' },
      { title: 'Preparation', text: 'Your skin is cleaned and a numbing cream is used for comfort.' },
      { title: 'Treatment', text: 'The handpiece glides over the area in careful passes. You may feel warmth and light pressure.' },
      { title: 'Aftercare', text: 'We give you simple steps for redness, skincare and sun care.' },
      { title: 'Follow-up', text: 'Treatments are often planned in a series. We check how your skin is doing and adjust.' },
    ],
    safety: {
      title: 'Your safety comes first',
      paragraphs: [
        'Treatment is not right for everyone. Active skin infections, some medical conditions, pregnancy and certain medicines may mean you should wait. We check this at your visit.',
        'Temporary redness, swelling or small pinpoint marks can happen. Dr. Slack explains risks and what to expect before you start. Results vary and cannot be promised.',
      ],
      items: ['Skin and health screening first', 'Numbing for comfort', 'Clear aftercare steps', 'Physician oversight'],
    },
    faqs: [
      { q: 'Is it painful?', a: 'Most people feel warmth and pressure. A numbing cream helps keep you comfortable.' },
      { q: 'How many sessions will I need?', a: 'It depends on your skin and goals. Many plans use a series of treatments spaced several weeks apart.' },
      { q: 'How long is the downtime?', a: 'Redness often settles in a few days. We explain what to expect for your plan.' },
      { q: 'When will I see results?', a: 'Skin often looks fresher as it heals, and changes in firmness build over weeks to months. Results vary.' },
      { q: 'Is it the same as RF Microneedling?', a: 'Scarlet RF is one device used for RF microneedling. Dr. Slack chooses the device that suits your needs.' },
      { q: 'How do I get started?', a: 'Book a consultation online or call us at 912-268-2103.' },
    ],
    related: [
      { label: 'All Technologies', href: '/technologies/' },
      { label: 'RF Microneedling', href: '/skin-facial-rejuvenation/rf-microneedling/' },
      { label: 'Microneedling PRP/PRF', href: '/skin-facial-rejuvenation/microneedling-prp-prf/' },
      { label: 'Scar Treatment', href: '/conditions/scar-treatment/' },
    ],
  },
  {
    slug: 'attiva-rf',
    group,
    title: 'Attiva RF',
    seoTitle: `Attiva RF in ${localCity}`,
    description:
      'Attiva subdermal radiofrequency for skin tightening at Imber Medical in St. Simons Island, GA, planned by Dr. Laura Slack.',
    lede: 'Attiva uses radiofrequency energy under the skin to help tighten and refine. Dr. Laura Slack decides if it fits your face or body.',
    images: {
      hero: IMG + 'tech-attiva-rf-1.jpg',
      overview: IMG + 'tech-attiva-rf-2.jpg',
      fit: IMG + 'tech-attiva-rf-3.jpg',
      alt: {
        hero: 'A woman with smooth, firm-looking skin',
        overview: 'A practitioner using a radiofrequency device on the skin',
        fit: 'A woman looking relaxed after a skin treatment',
      },
    },
    overview: {
      title: 'How Attiva RF works',
      paragraphs: [
        'Attiva is a subdermal radiofrequency device. It sends RF energy below the skin surface to warm the deeper tissue in a controlled way.',
        'This warmth is meant to help firm the skin as it heals. It is used on areas where skin has lost some tightness.',
        'At Imber Medical, Dr. Slack reviews your skin and decides if Attiva is the right option or if another technology suits you better.',
      ],
      cards: [
        { title: 'Under the surface', text: 'Energy works below the skin, where firmness begins.' },
        { title: 'Chosen with you', text: 'Dr. Slack picks the area, settings and number of visits.' },
      ],
    },
    fit: {
      title: 'Is Attiva RF right for you?',
      text: 'Attiva may be considered if you notice mild to moderate looseness. Your consultation tells us if it is a good match.',
      concerns: ['Mild to moderate skin laxity', 'Softening along the jawline or neck', 'Loose skin on the body', 'Skin that looks less firm than it used to'],
      goodFit: ['You want to avoid major surgery', 'You are in good general health', 'You can follow care instructions', 'You have realistic goals', 'You understand results vary'],
    },
    benefits: [
      { title: 'Targeted tightening', text: 'Energy is aimed at the area that needs it.' },
      { title: 'Non-surgical approach', text: 'Many people choose it to avoid a large procedure.' },
      { title: 'Planned with a physician', text: 'Dr. Slack guides each step.' },
      { title: 'Honest advice', text: 'If another option suits you better, we say so.' },
    ],
    steps: [
      { title: 'Consultation', text: 'We talk about your goals and review your skin and health.' },
      { title: 'Planning', text: 'Dr. Slack marks the treatment area and explains each step.' },
      { title: 'Treatment', text: 'The area is numbed for comfort, and RF energy is delivered with careful control.' },
      { title: 'Aftercare', text: 'We explain how to care for the area and what swelling or redness to expect.' },
      { title: 'Follow-up', text: 'We check your progress and talk about next steps.' },
    ],
    safety: {
      title: 'Your safety comes first',
      paragraphs: [
        'Treatment is not right for everyone. Pregnancy, some implants, active infections and certain conditions may mean you should wait. We screen for this first.',
        'Swelling, redness, bruising or tenderness can happen after treatment. Results vary and cannot be promised. Dr. Slack explains risks before you decide.',
      ],
      items: ['Health screening first', 'Numbing for comfort', 'Clear aftercare steps', 'Physician oversight'],
    },
    faqs: [
      { q: 'Is it surgery?', a: 'It is a minimally invasive approach. We explain how it works and what to expect for your plan.' },
      { q: 'Will it hurt?', a: 'The area is numbed. You may feel pressure or warmth.' },
      { q: 'How long is the recovery?', a: 'Many people return to daily life quickly, but swelling or tenderness can last for a time. We will tell you what to expect.' },
      { q: 'When will I see results?', a: 'Skin changes gradually as it heals. Results vary from person to person.' },
      { q: 'Is it the same as RF microneedling?', a: 'They are different tools. Dr. Slack helps you choose between them.' },
      { q: 'How do I get started?', a: 'Book a consultation online or call us at 912-268-2103.' },
    ],
    related: [
      { label: 'All Technologies', href: '/technologies/' },
      { label: 'RF Microneedling', href: '/skin-facial-rejuvenation/rf-microneedling/' },
      { label: 'Facial Slimming (Face, Neck & Jaw)', href: '/injectables-toxins/facial-slimming-face-neck-jaw/' },
      { label: 'Skin Rejuvenation (tightening)', href: '/conditions/skin-rejuvenation-tightening/' },
    ],
  },
  {
    slug: 'agnes-rf',
    group,
    title: 'Agnes RF',
    seoTitle: `Agnes RF in ${localCity}`,
    description:
      'Agnes RF precision radiofrequency treatment at Imber Medical in St. Simons Island, GA, planned by Dr. Laura Slack.',
    lede: 'Agnes RF uses very fine, insulated needles to place energy exactly where it is needed. Dr. Laura Slack plans it for small, detailed areas.',
    images: {
      hero: IMG + 'medical-facial-1.jpg',
      overview: IMG + 'medical-facial-2.jpg',
      fit: IMG + 'medical-facial-3.jpg',
      alt: {
        hero: 'A woman with a clear, fresh complexion',
        overview: 'A practitioner doing a detailed facial treatment',
        fit: 'A woman looking calm and refreshed',
      },
    },
    overview: {
      title: 'How Agnes RF works',
      paragraphs: [
        'Agnes is a radiofrequency (RF) system made by Agnes Medical. It uses very fine needles that are insulated, so energy is released only at the tip.',
        'This lets the provider target small areas with care, such as around the eyes or on specific spots on the face.',
        'At Imber Medical, Dr. Slack decides if this precise approach is right for your concern.',
      ],
      cards: [
        { title: 'Precise by design', text: 'Energy is placed only where the plan calls for it.' },
        { title: 'Good for small areas', text: 'It can be used on delicate, detailed spots.' },
      ],
    },
    fit: {
      title: 'Is Agnes RF right for you?',
      text: 'Agnes RF is often chosen when a detailed, targeted approach is needed. A consultation helps us decide.',
      concerns: ['Small areas of loose skin', 'Lines or crepey skin around the eyes', 'Blemishes or acne-prone spots', 'Specific skin concerns that need fine control'],
      goodFit: ['You have a specific, small area in mind', 'You want a non-surgical option', 'You can follow aftercare', 'You understand results vary', 'You are in good general health'],
    },
    benefits: [
      { title: 'Fine control', text: 'Small, targeted areas can be treated with care.' },
      { title: 'Short visits', text: 'Detailed work is often quick.' },
      { title: 'Customized', text: 'Settings are matched to your skin and area.' },
      { title: 'Physician-led', text: 'Dr. Slack guides your plan.' },
    ],
    steps: [
      { title: 'Consultation', text: 'We review your goals, skin and health history.' },
      { title: 'Preparation', text: 'Your skin is cleaned and numbing is used for comfort.' },
      { title: 'Treatment', text: 'The provider uses the fine needle with careful control. You may feel small sensations or warmth.' },
      { title: 'Aftercare', text: 'We explain skincare and sun care and what to expect as you heal.' },
      { title: 'Follow-up', text: 'We check progress and decide if more visits make sense.' },
    ],
    safety: {
      title: 'Your safety comes first',
      paragraphs: [
        'Treatment is not right for everyone. Active infections, pregnancy and some medical conditions may mean you should wait. We check at your visit.',
        'Redness, swelling or small marks can happen for a short time. Results vary and cannot be promised.',
      ],
      items: ['Screening first', 'Numbing for comfort', 'Clear aftercare', 'Physician oversight'],
    },
    faqs: [
      { q: 'Is it painful?', a: 'Numbing helps. You may feel small sensations.' },
      { q: 'Can it treat the area around the eyes?', a: 'Fine needles are often used for detail work. Dr. Slack decides if it is right for you.' },
      { q: 'How long is the downtime?', a: 'Redness and swelling may last a few days. We explain what to expect.' },
      { q: 'How many visits will I need?', a: 'It depends on your goals. We plan it with you.' },
      { q: 'Will I see results right away?', a: 'Skin changes build as it heals. Results vary.' },
      { q: 'How do I get started?', a: 'Book a consultation online or call us at 912-268-2103.' },
    ],
    related: [
      { label: 'All Technologies', href: '/technologies/' },
      { label: 'RF Microneedling', href: '/skin-facial-rejuvenation/rf-microneedling/' },
      { label: 'Medical Facials & HydraFacial', href: '/skin-facial-rejuvenation/medical-facials-hydrafacial/' },
      { label: 'Dark Circles Under the Eyes', href: '/conditions/dark-circles-under-the-eyes-skin-tightening/' },
    ],
  },
  {
    slug: 'plasma-pen',
    group,
    title: 'Plasma Pen',
    seoTitle: `Plasma Pen in ${localCity}`,
    description:
      'Plasma pen skin treatment at Imber Medical in St. Simons Island, GA, planned by Dr. Laura Slack for small, targeted skin concerns.',
    lede: 'A plasma pen uses a tiny point of energy to treat small skin areas with control. Dr. Laura Slack decides if it fits your concern.',
    images: {
      hero: IMG + 'laser-facial-1.jpg',
      overview: IMG + 'laser-facial-2.jpg',
      fit: IMG + 'laser-facial-3.jpg',
      alt: {
        hero: 'A woman with smooth facial skin',
        overview: 'A practitioner treating a small area of the face',
        fit: 'A woman with a calm, even complexion',
      },
    },
    overview: {
      title: 'How a Plasma Pen works',
      paragraphs: [
        'A plasma pen turns gas in the air into a tiny spark of energy at its tip. The spark does not touch the skin. It warms very small spots on the surface.',
        'This controlled warmth can tighten the area as the skin heals. It is used for small, targeted concerns.',
        'At Imber Medical, Dr. Slack checks your skin type and decides if this tool is right for you.',
      ],
      cards: [
        { title: 'Small and precise', text: 'It treats tiny areas with careful control.' },
        { title: 'Chosen with care', text: 'Dr. Slack reviews your skin type and history first.' },
      ],
    },
    fit: {
      title: 'Is a Plasma Pen right for you?',
      text: 'A plasma pen may be considered for small areas that need extra attention. Your consultation tells us if it is a safe choice.',
      concerns: ['Small areas of loose skin', 'Fine lines in limited spots', 'Some small skin growths', 'Specific spots that need detail'],
      goodFit: ['You have a small, specific area', 'You can plan for healing time', 'You can protect your skin from the sun', 'You understand results vary', 'Your skin type and history are suitable'],
    },
    benefits: [
      { title: 'Targeted care', text: 'Small spots can be treated without treating the whole face.' },
      { title: 'No cuts', text: 'It works from the surface without cutting.' },
      { title: 'Planned for you', text: 'Settings match your skin and concern.' },
      { title: 'Physician-led', text: 'Dr. Slack guides your plan.' },
    ],
    steps: [
      { title: 'Consultation', text: 'We review your skin, goals and health history.' },
      { title: 'Preparation', text: 'Your skin is cleaned and a numbing cream is used.' },
      { title: 'Treatment', text: 'The pen is passed close to the skin in small, careful points. You may feel warmth or a light sting.' },
      { title: 'Healing', text: 'Tiny crusts can form and fall off as the area heals. We explain how to care for them.' },
      { title: 'Follow-up', text: 'We check how your skin heals and plan next steps.' },
    ],
    safety: {
      title: 'Your safety comes first',
      paragraphs: [
        'Treatment is not right for everyone. Some skin types and histories, active infections and certain medical conditions may need extra care or another option. We screen for this first.',
        'Redness, swelling and small crusts are expected for a time. Color changes can happen in some skin. Results vary and cannot be promised.',
      ],
      items: ['Skin type screening', 'Numbing for comfort', 'Careful healing guidance', 'Physician oversight'],
    },
    faqs: [
      { q: 'Does it hurt?', a: 'Numbing helps. Most people feel warmth or light stinging.' },
      { q: 'How long does healing take?', a: 'Small crusts often form and fall off within days to a couple of weeks. We explain what to expect.' },
      { q: 'Can it treat my whole face?', a: 'It is usually for small, targeted areas. Dr. Slack can suggest other options.' },
      { q: 'Will I see results?', a: 'Skin often looks better as it heals. Results vary.' },
      { q: 'Is it safe for all skin tones?', a: 'Not always. We check your skin type first and suggest another option when needed.' },
      { q: 'How do I get started?', a: 'Book a consultation online or call us at 912-268-2103.' },
    ],
    related: [
      { label: 'All Technologies', href: '/technologies/' },
      { label: 'Laser Facial', href: '/skin-facial-rejuvenation/laser-facial/' },
      { label: 'RF Microneedling', href: '/skin-facial-rejuvenation/rf-microneedling/' },
      { label: 'Skin Tag, Wart, Benign Mole Removal', href: '/conditions/skin-tag-wart-benign-mole-removal/' },
    ],
  },
  {
    slug: 'opus-plasma',
    group,
    title: 'Opus Plasma',
    seoTitle: `Opus Plasma in ${localCity}`,
    description:
      'Opus Plasma fractional radiofrequency resurfacing at Imber Medical in St. Simons Island, GA, planned by Dr. Laura Slack.',
    lede: 'Opus Plasma, made by Alma, uses plasma radiofrequency to refresh skin texture and tone. Dr. Laura Slack plans each session for you.',
    images: {
      hero: IMG + 'tech-opus-plasma-1.jpg',
      overview: IMG + 'tech-opus-plasma-2.jpg',
      fit: IMG + 'tech-opus-plasma-3.jpg',
      alt: {
        hero: 'A woman with smooth, refreshed skin',
        overview: 'A practitioner using a skin resurfacing device',
        fit: 'A woman with a clear, even complexion',
      },
    },
    overview: {
      title: 'How Opus Plasma works',
      paragraphs: [
        'Opus Plasma is a fractional skin resurfacing device made by Alma. It uses plasma radiofrequency energy to create tiny, controlled treatment points in the skin.',
        'Between these points, healthy skin stays in place to help it heal. As the skin renews, texture and tone can look more even.',
        'At Imber Medical, Dr. Slack sets the depth and settings for your skin and your goals.',
      ],
      cards: [
        { title: 'Fractional by design', text: 'Only tiny points are treated, and nearby skin helps healing.' },
        { title: 'Customized depth', text: 'Settings match your concern and skin type.' },
      ],
    },
    fit: {
      title: 'Is Opus Plasma right for you?',
      text: 'Opus Plasma is often considered for skin that needs refreshing. A consultation tells us if it is right for you.',
      concerns: ['Uneven skin texture', 'Fine lines and wrinkles', 'Some acne scars', 'Uneven tone or sun damage', 'Rough, dull-looking skin'],
      goodFit: ['You want to refresh your skin', 'You can plan for downtime', 'You can avoid the sun and follow aftercare', 'You understand results vary and may need a series', 'Your skin type and health suit treatment'],
    },
    benefits: [
      { title: 'Skin renewal', text: 'It supports your skin’s natural healing.' },
      { title: 'Texture and tone', text: 'Many choose it to refine how skin looks.' },
      { title: 'Customized', text: 'Depth and energy are set for you.' },
      { title: 'Physician-led', text: 'Dr. Slack guides each step.' },
    ],
    steps: [
      { title: 'Consultation', text: 'We review your skin, goals and health history.' },
      { title: 'Preparation', text: 'Your skin is cleaned and numbing is used for comfort.' },
      { title: 'Treatment', text: 'The handpiece creates a pattern of tiny points in the area. You may feel heat and a light prickling.' },
      { title: 'Healing', text: 'Your skin may look pink or feel rough for a few days. We explain aftercare.' },
      { title: 'Follow-up', text: 'We check your healing and decide if more sessions make sense.' },
    ],
    safety: {
      title: 'Your safety comes first',
      paragraphs: [
        'Treatment is not right for everyone. Active infections, pregnancy, some medicines and certain skin conditions may mean you should wait. We check this at your visit.',
        'Redness, swelling, dryness and flaking can happen for a time. Color changes are possible in some skin. Results vary and cannot be promised.',
      ],
      items: ['Skin and health screening', 'Numbing for comfort', 'Clear aftercare steps', 'Physician oversight'],
    },
    faqs: [
      { q: 'Does it hurt?', a: 'Numbing helps. Most people feel heat and light prickling.' },
      { q: 'How long is the downtime?', a: 'Redness and rough skin often settle in a few days to a week. We explain your plan.' },
      { q: 'How many sessions will I need?', a: 'It depends on your goals. We plan it with you.' },
      { q: 'When will I see results?', a: 'Skin changes as it heals. Results vary.' },
      { q: 'Can it treat scars?', a: 'It is sometimes used for texture and some scars. Dr. Slack decides if it fits.' },
      { q: 'How do I get started?', a: 'Book a consultation online or call us at 912-268-2103.' },
    ],
    related: [
      { label: 'All Technologies', href: '/technologies/' },
      { label: 'Laser Facial', href: '/skin-facial-rejuvenation/laser-facial/' },
      { label: 'RF Microneedling', href: '/skin-facial-rejuvenation/rf-microneedling/' },
      { label: 'Fine Lines & Wrinkles', href: '/conditions/fine-lines-wrinkles/' },
    ],
  },
];
