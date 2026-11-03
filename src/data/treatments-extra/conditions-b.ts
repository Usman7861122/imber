import type { Treatment } from '../treatments';

const localCity = 'St. Simons Island, GA';
const IMG = '/images/treatments/';
const group = { title: 'Conditions', href: '/conditions/' };

/** TODO (Dr. Slack): review all medical wording before launch. */
export const conditionsB: Treatment[] = [
  {
    slug: 'skin-rejuvenation-tightening',
    group,
    title: 'Skin Rejuvenation (tightening)',
    seoTitle: `Skin Rejuvenation and Tightening in ${localCity}`,
    description:
      'Loose, tired or crepey skin? Dr. Laura Slack at Imber Medical in St. Simons Island, GA plans non-surgical care to help skin look firmer and fresher.',
    lede: 'Skin that looks looser, thinner or more tired over time can often be helped without surgery. Dr. Laura Slack will plan care that fits you.',
    images: {
      hero: IMG + 'rf-microneedling-1.jpg',
      overview: IMG + 'rf-microneedling-2.jpg',
      fit: IMG + 'rf-microneedling-3.jpg',
      alt: {
        hero: 'A woman lying back during a skin tightening treatment',
        overview: 'A provider treating a woman’s face with a handheld device',
        fit: 'A woman with calm, healthy-looking skin',
      },
    },
    overview: {
      title: 'Why skin loses its bounce',
      paragraphs: [
        'Skin is held firm by proteins like collagen and elastin. Over time, age, sun, stress, weight changes and genes can break these down. Skin may look looser, thinner or less smooth.',
        'This is very common. It is not a sign that you did anything wrong. The good news is that skin can often be encouraged to look firmer, and there are several gentle ways to do it.',
      ],
      cards: [
        {
          title: 'Start with your skin',
          text: 'Dr. Slack looks at your skin type, how loose it is, and where. Mild looseness needs a different plan than more advanced changes.',
        },
        {
          title: 'Build a simple plan',
          text: 'We may suggest energy-based treatments, microneedling or skin care, often in a series. We tell you honestly what each one can and cannot do.',
        },
      ],
    },
    fit: {
      title: 'Does this sound like you?',
      text: 'If you notice your skin is changing and you want a natural, non-surgical option, a consultation is a good first step.',
      concerns: [
        'Skin that looks or feels looser',
        'Fine, crepey lines',
        'Early jowls or a softer jawline',
        'Skin on the neck that looks less firm',
        'A dull or tired look',
        'Skin that feels thin or less elastic',
      ],
      goodFit: [
        'You want a natural look, not a big change',
        'You prefer little or no downtime',
        'You can commit to a series of visits',
        'You can protect your skin from the sun',
        'You are in good general health',
      ],
    },
    benefits: [
      { title: 'No surgery', text: 'Most options use no cuts. Many people return to daily life quickly.' },
      { title: 'Gradual, natural look', text: 'Skin changes over time, so results look like you, only fresher.' },
      { title: 'Made for you', text: 'Your plan fits your skin, your goals and your schedule.' },
      { title: 'Physician-led', text: 'Dr. Slack plans your care and checks your progress.' },
    ],
    steps: [
      { title: 'Consultation', text: 'We look at your skin, review your health history and medicines, and talk about your goals.' },
      { title: 'Your plan', text: 'You get a clear plan with the treatments we suggest, the number of visits and a fair estimate.' },
      { title: 'Treatment', text: 'Your skin is cleaned and prepared. The treatment is done with comfort in mind, and we guide you each step.' },
      { title: 'Aftercare', text: 'Skin may look pink or feel warm for a short time. We share gentle care and sun protection tips.' },
      { title: 'Follow-up', text: 'Skin builds new support slowly. We check your progress over the next months and adjust your plan.' },
    ],
    safety: {
      title: 'Honest about what skin tightening can do',
      paragraphs: [
        'Non-surgical care can help skin look firmer, but it does not work like a facelift. If your skin is very loose, we will tell you that other options may help you more.',
        'Common short-term effects include redness, warmth, swelling or tenderness. Less common risks depend on the treatment, and we explain them before you decide. Please tell us about skin infections, pregnancy, implants or health conditions first.',
      ],
      items: ['Health and skin review first', 'Clear risks explained before treatment', 'Realistic expectations', 'Follow-up after your visits'],
    },
    faqs: [
      { q: 'Can skin really be tightened without surgery?', a: 'Many people see skin that looks firmer and smoother. The change is usually gradual and more modest than surgery. Dr. Slack will tell you what is realistic for you.' },
      { q: 'How many visits will I need?', a: 'It depends on your skin and the treatment. Many plans use a series of visits. You will get a clear plan after your consultation.' },
      { q: 'When will I see a change?', a: 'Skin renews slowly. Many people notice changes over several weeks to months, and results continue as skin heals.' },
      { q: 'Is there downtime?', a: 'It depends on the treatment. Some people have mild redness for a short time. We explain what to expect before you start.' },
      { q: 'Does it hurt?', a: 'We focus on comfort, and most people find it manageable. We can talk about options to keep you comfortable.' },
      { q: 'How do I get started?', a: 'Book a consultation online or call us at 912-268-2103. We will look at your skin and make a plan that fits you.' },
    ],
    related: [
      { label: 'All Conditions', href: '/conditions/' },
      { label: 'RF Microneedling', href: '/skin-facial-rejuvenation/rf-microneedling/' },
      { label: 'Microneedling PRP/PRF', href: '/skin-facial-rejuvenation/microneedling-prp-prf/' },
      { label: 'Regenerative Cells', href: '/skin-facial-rejuvenation/regenerative-cells/' },
    ],
  },
  {
    slug: 'dark-circles-under-the-eyes-skin-tightening',
    group,
    title: 'Dark circles under the eyes skin tightening',
    seoTitle: `Dark Circles Under the Eyes in ${localCity}`,
    description:
      'Dark circles under your eyes? Dr. Laura Slack at Imber Medical in St. Simons Island, GA looks for the cause and plans gentle care to brighten and firm the area.',
    lede: 'Dark circles have many causes, so the best plan starts with the right answer. Dr. Laura Slack will look closely and guide you.',
    images: {
      hero: IMG + 'medical-facial-1.jpg',
      overview: IMG + 'medical-facial-2.jpg',
      fit: IMG + 'medical-facial-3.jpg',
      alt: {
        hero: 'A woman receiving a gentle facial treatment',
        overview: 'A woman relaxing during a skin care treatment',
        fit: 'A woman with fresh, healthy-looking skin',
      },
    },
    overview: {
      title: 'Why dark circles show up',
      paragraphs: [
        'The skin under the eyes is very thin. Color from tiny blood vessels, extra pigment, shadows from hollows or loose skin, and tiredness can all make the area look dark.',
        'Family traits, allergies, sun and aging also play a part. Because the causes are different, one product or treatment does not fit everyone.',
      ],
      cards: [
        {
          title: 'Find the real cause',
          text: 'Dr. Slack checks if the darkness comes from color, shadow, thin skin or a mix. This helps us choose care that makes sense.',
        },
        {
          title: 'Gentle care for thin skin',
          text: 'The eye area needs a soft touch. We may suggest skin care, light-based care, tightening treatments or other options, step by step.',
        },
      ],
    },
    fit: {
      title: 'Does this sound like you?',
      text: 'If dark circles make you look tired even when you feel fine, a consultation can help you understand why and what to do about it.',
      concerns: [
        'Dark or bluish color under the eyes',
        'Brown tint that does not fade with rest',
        'Shadows that look worse in some light',
        'Thin, crepey skin around the eyes',
        'A tired look even after good sleep',
        'Dark circles that run in your family',
      ],
      goodFit: [
        'You want a natural, rested look',
        'You are open to a step-by-step plan',
        'You can protect your skin from the sun',
        'You can plan for a short healing time',
        'You have no active skin infection near the eyes',
      ],
    },
    benefits: [
      { title: 'A clearer answer', text: 'We look at the cause first, so you do not waste time on the wrong fix.' },
      { title: 'Gentle approach', text: 'Plans are made with the thin, sensitive eye area in mind.' },
      { title: 'Natural look', text: 'The goal is a fresher, more rested look, not a different face.' },
      { title: 'Physician-led', text: 'Dr. Slack plans your care and checks your progress.' },
    ],
    steps: [
      { title: 'Consultation', text: 'We look at the area in different light, review your health history and talk about what you have tried.' },
      { title: 'Find the cause', text: 'We explain what is likely behind your dark circles and what can and cannot be changed.' },
      { title: 'Your plan', text: 'You get a simple plan, with the number of visits and a fair estimate before we start.' },
      { title: 'Treatment', text: 'Treatment is done carefully around the eyes, with eye protection and comfort in mind.' },
      { title: 'Follow-up', text: 'Skin changes slowly. We check your progress and adjust your plan as needed.' },
    ],
    safety: {
      title: 'Care near the eyes needs extra caution',
      paragraphs: [
        'Not every dark circle can be fully erased. Some causes, like deep shadows or family traits, may only improve in part. We will be honest about what is realistic.',
        'If you have swelling, pain, vision changes or sudden changes in the area, please see a doctor first. Temporary redness, swelling or tenderness can happen after some treatments, and we explain the risks before you decide.',
      ],
      items: ['Cause checked before treatment', 'Eye protection when needed', 'Health and medicine review', 'Realistic expectations'],
    },
    faqs: [
      { q: 'Why do I have dark circles?', a: 'Common reasons include thin skin, visible blood vessels, extra pigment, shadows from hollows, allergies and family traits. Dr. Slack will look at which ones apply to you.' },
      { q: 'Can dark circles be treated?', a: 'Many people see improvement with the right plan. How much depends on the cause, so we start with an honest assessment.' },
      { q: 'Will sleep or skin care fix them?', a: 'Rest and good skin care can help some people. If the cause is color, shadow or thin skin, a medical plan may help more.' },
      { q: 'Is the treatment safe near my eyes?', a: 'We take extra care around the eyes. We use eye protection when needed and explain the risks before you decide.' },
      { q: 'How long until I see results?', a: 'Skin changes slowly, so many people look for change over weeks to months. Your plan will include a follow-up.' },
      { q: 'How do I get started?', a: 'Book a consultation online or call us at 912-268-2103. We will look at the area and make a plan that fits you.' },
    ],
    related: [
      { label: 'All Conditions', href: '/conditions/' },
      { label: 'Medical Facials & HydraFacial', href: '/skin-facial-rejuvenation/medical-facials-hydrafacial/' },
      { label: 'Microneedling PRP/PRF', href: '/skin-facial-rejuvenation/microneedling-prp-prf/' },
      { label: 'RF Microneedling', href: '/skin-facial-rejuvenation/rf-microneedling/' },
    ],
  },
  {
    slug: 'under-eye-hollows-puffiness',
    group,
    title: 'Under-eye hollows/puffiness',
    seoTitle: `Under-Eye Hollows and Puffiness in ${localCity}`,
    description:
      'Under-eye hollows or puffiness? Dr. Laura Slack at Imber Medical in St. Simons Island, GA offers careful, natural-looking, physician-led care.',
    lede: 'Hollows and puffy bags can make you look tired. Dr. Laura Slack will find the cause and suggest gentle, natural-looking care.',
    images: {
      hero: IMG + 'filler-tox-1.jpg',
      overview: IMG + 'filler-tox-2.jpg',
      fit: IMG + 'filler-tox-3.jpg',
      alt: {
        hero: 'A woman with calm, glowing skin',
        overview: 'A woman looking relaxed with soft, smooth skin',
        fit: 'A close view of a woman’s face',
      },
    },
    overview: {
      title: 'Why the under-eye area changes',
      paragraphs: [
        'With age, the soft tissue and fat under the eyes shift and thin out. This can leave a hollow, a visible dip called a tear trough, or a puffy bulge. Family traits, allergies, salt and sleep can add to it.',
        'Hollows and puffiness can look alike, but they need different care. That is why a close exam comes first.',
      ],
      cards: [
        {
          title: 'Look before we treat',
          text: 'Dr. Slack checks your face in different light and angles. We decide if the main issue is volume loss, extra fullness, skin quality or a mix.',
        },
        {
          title: 'Small, careful steps',
          text: 'The under-eye area is delicate. We may suggest filler, skin treatments or other care in small steps, so your look stays natural.',
        },
      ],
    },
    fit: {
      title: 'Does this sound like you?',
      text: 'If you want to look more rested and are open to a careful, step-by-step plan, a consultation can show you your options.',
      concerns: [
        'A hollow or dip under the eyes',
        'Puffy bags that stay all day',
        'Shadows that make you look tired',
        'A visible line between lid and cheek',
        'Thin, crepey skin under the eyes',
        'Puffiness that runs in your family',
      ],
      goodFit: [
        'You want a rested, natural look',
        'You are open to a careful, gradual plan',
        'You understand results vary from person to person',
        'You are in good general health',
        'You have no active infection near the eyes',
      ],
    },
    benefits: [
      { title: 'A more rested look', text: 'The goal is to soften shadows and hollows so you look fresher.' },
      { title: 'Natural-looking', text: 'We work in small steps so you still look like you.' },
      { title: 'The right fix', text: 'Hollows and puffiness need different care. We match the plan to the cause.' },
      { title: 'Physician-led', text: 'Dr. Slack plans and performs treatment, and follows up after.' },
    ],
    steps: [
      { title: 'Consultation', text: 'We look closely at the area, review your health history and talk about what bothers you most.' },
      { title: 'Your plan', text: 'We explain what is causing the look and what options may help, with a fair estimate.' },
      { title: 'Treatment', text: 'Treatment is done carefully with comfort in mind. We use small amounts and check your look as we go.' },
      { title: 'Aftercare', text: 'Mild swelling or bruising can happen. We share simple tips to help you heal.' },
      { title: 'Follow-up', text: 'We check your result after healing and can adjust or add a little more if it makes sense.' },
    ],
    safety: {
      title: 'Extra care for a delicate area',
      paragraphs: [
        'The under-eye area has thin skin and many small blood vessels. Treatments here need skill and caution. Puffiness caused by an eye or health problem should be checked by a doctor first.',
        'Possible effects include bruising, swelling, lumps or color changes, and rare but serious risks exist with any injection. We explain these before you decide, and we will tell you if another option is a better fit.',
      ],
      items: ['Physician-led treatment', 'Exam and history first', 'Small, careful steps', 'Clear risks explained'],
    },
    faqs: [
      { q: 'Why do I have under-eye bags?', a: 'Common causes include fat shifting with age, fluid, allergies, sleep and family traits. Dr. Slack will look at what applies to you.' },
      { q: 'What is the difference between a hollow and puffiness?', a: 'A hollow is a dip from lost volume. Puffiness is extra fullness. They can look alike but need different care.' },
      { q: 'Can filler help the under-eye area?', a: 'For some people with hollows, careful filler may help. It is not right for everyone, and Dr. Slack will tell you honestly if it fits your case.' },
      { q: 'Will it look natural?', a: 'That is our aim. We use small steps and check your look as we go.' },
      { q: 'Is there downtime?', a: 'Some people have mild swelling or bruising for a short time. We explain what to expect before treatment.' },
      { q: 'How do I get started?', a: 'Book a consultation online or call us at 912-268-2103. We will look at the area and make a plan that fits you.' },
    ],
    related: [
      { label: 'All Conditions', href: '/conditions/' },
      { label: 'Filler & Tox', href: '/injectables-toxins/filler-tox/' },
      { label: 'Facial Fat Grafting', href: '/injectables-toxins/facial-fat-grafting/' },
      { label: 'Microneedling PRP/PRF', href: '/skin-facial-rejuvenation/microneedling-prp-prf/' },
    ],
  },
  {
    slug: 'hyperpigmentation-brown-sunspots',
    group,
    title: 'Hyperpigmentation Brown/Sunspots',
    seoTitle: `Hyperpigmentation and Sunspots in ${localCity}`,
    description:
      'Brown spots or sunspots? Dr. Laura Slack at Imber Medical in St. Simons Island, GA plans safe, physician-led care to help skin look clearer and more even.',
    lede: 'Brown spots and uneven color are common, especially with sun. Dr. Laura Slack will plan care that fits your skin.',
    images: {
      hero: IMG + 'chemical-peel-1.jpg',
      overview: IMG + 'chemical-peel-2.jpg',
      fit: IMG + 'chemical-peel-3.jpg',
      alt: {
        hero: 'A woman with calm, glowing skin',
        overview: 'A woman receiving a gentle light-based facial treatment',
        fit: 'A close view of even-toned facial skin',
      },
    },
    overview: {
      title: 'Why brown spots appear',
      paragraphs: [
        'Skin makes more color, called pigment, when it is exposed to sun, or after injury, inflammation or hormone changes. The extra pigment can collect in patches or small spots.',
        'Life on the Georgia coast means plenty of sun, so sunspots are very common here. Spots can fade with the right care, but they can also return if skin is not protected.',
      ],
      cards: [
        {
          title: 'Know the spot first',
          text: 'Not every brown spot is the same. Dr. Slack looks at each one. A spot that changes, grows or bleeds should be checked by a doctor first.',
        },
        {
          title: 'Care that fits your skin',
          text: 'We may suggest light-based treatment, peels, microneedling or skin care. We choose what is safe for your skin tone and your goals.',
        },
      ],
    },
    fit: {
      title: 'Does this sound like you?',
      text: 'If uneven color bothers you and you want a clearer, more even look, a consultation is a good place to start.',
      concerns: [
        'Brown or tan spots on the face or hands',
        'Spots after sun exposure',
        'Dark marks left after acne or injury',
        'Uneven skin tone',
        'Patches that look darker in summer',
        'Spots that seem to be slowly increasing',
      ],
      goodFit: [
        'You want a clearer, more even skin tone',
        'You can use sun protection every day',
        'You can plan for a short healing time',
        'You are open to a series of visits',
        'Any spot of concern has been checked',
      ],
    },
    benefits: [
      { title: 'More even tone', text: 'Many people see spots fade and skin look brighter over time.' },
      { title: 'Safe for your skin', text: 'We choose the approach by your skin tone, to help lower the risk of side effects.' },
      { title: 'Plan for the long run', text: 'We pair treatment with sun care, to help results last.' },
      { title: 'Physician-led', text: 'Dr. Slack plans your care and checks your skin at each step.' },
    ],
    steps: [
      { title: 'Consultation', text: 'We look at your spots, review your health history and medicines, and talk about your goals.' },
      { title: 'Skin check', text: 'We tell you if any spot needs a doctor’s check first, such as one that is new, changing or unusual.' },
      { title: 'Treatment', text: 'Treatment is chosen for your skin. Protective eyewear is worn when needed, and we keep you comfortable.' },
      { title: 'Aftercare', text: 'Skin may look pink or feel warm for a short time. Spots can look darker before they fade. We share simple sun and skin care steps.' },
      { title: 'Follow-up', text: 'We check your progress and adjust your plan. Daily sun protection is a key part of keeping results.' },
    ],
    safety: {
      title: 'Safe care for every skin tone',
      paragraphs: [
        'Some treatments can make pigment worse if they are not matched to your skin and sun exposure. Dr. Slack plans carefully and may start with a small test area. Please avoid tanning before and after treatment.',
        'Possible effects include redness, swelling, flaking, and color changes in the skin. Any spot that is new, changing, bleeding or has an odd shape should be checked by a doctor before cosmetic care.',
      ],
      items: ['Spot check first', 'Plan matched to skin tone', 'Sun care guidance', 'Physician follow-up'],
    },
    faqs: [
      { q: 'What causes brown spots?', a: 'Sun is a common cause. Others include hormone changes, inflammation, injury and age. Dr. Slack will look at what applies to you.' },
      { q: 'Can brown spots be removed?', a: 'Many spots can fade with the right care. Results vary, and spots can return if skin is not protected from the sun.' },
      { q: 'Is every dark spot a cosmetic issue?', a: 'No. A spot that is new, changing, bleeding or odd in shape should be checked by a doctor first.' },
      { q: 'How many visits will I need?', a: 'It depends on your skin and the treatment. Many plans use a series of visits. You will get a clear plan.' },
      { q: 'Do I need sun protection?', a: 'Yes. Daily sun protection is one of the most important steps, before and after treatment.' },
      { q: 'How do I get started?', a: 'Book a consultation online or call us at 912-268-2103. We will look at your skin and make a plan that fits you.' },
    ],
    related: [
      { label: 'All Conditions', href: '/conditions/' },
      { label: 'Laser Facial', href: '/skin-facial-rejuvenation/laser-facial/' },
      { label: 'Chemical Peels (VI Peel)', href: '/skin-facial-rejuvenation/chemical-peels-vi-peel/' },
      { label: 'Microneedling PRP/PRF', href: '/skin-facial-rejuvenation/microneedling-prp-prf/' },
    ],
  },
  {
    slug: 'melasma',
    group,
    title: 'Melasma',
    seoTitle: `Melasma Treatment in ${localCity}`,
    description:
      'Melasma care with Dr. Laura Slack at Imber Medical in St. Simons Island, GA. Gentle, physician-led plans to help calm and fade brown patches on the face.',
    lede: 'Melasma is stubborn and often comes back, so a gentle, steady plan works best. Dr. Laura Slack will guide you.',
    images: {
      hero: IMG + 'chemical-peel-1.jpg',
      overview: IMG + 'chemical-peel-2.jpg',
      fit: IMG + 'chemical-peel-3.jpg',
      alt: {
        hero: 'A woman receiving a facial skin treatment',
        overview: 'A provider applying a skin care product to a woman’s face',
        fit: 'A close view of a woman’s facial skin',
      },
    },
    overview: {
      title: 'What melasma is',
      paragraphs: [
        'Melasma is a common skin condition that causes brown or gray-brown patches, often on the cheeks, forehead, nose or upper lip. It is more common in women, and it can be linked to hormones, sun and heat.',
        'Melasma can fade, then return. It often needs a long-term plan, not a one-time fix. The good news is that careful care can help calm it and keep it under control.',
      ],
      cards: [
        {
          title: 'Gentle, not harsh',
          text: 'Strong treatments can make melasma worse. We start gently and watch how your skin responds before going further.',
        },
        {
          title: 'Sun and heat control',
          text: 'Daily sun protection is the most important step. We also talk about triggers like heat, hormones and some medicines.',
        },
      ],
    },
    fit: {
      title: 'Does this sound like you?',
      text: 'If you have patches that do not fade and you want a steady, careful plan, a consultation can help you understand your options.',
      concerns: [
        'Brown or gray-brown patches on the face',
        'Patches on the cheeks, forehead or upper lip',
        'Color that looks worse in the sun',
        'Patches that appeared during pregnancy or on hormones',
        'Dark areas that fade, then return',
        'Uneven tone that makeup does not hide well',
      ],
      goodFit: [
        'You want a gentle, long-term plan',
        'You can use sun protection every day',
        'You understand melasma can return',
        'You are open to a series of visits',
        'You can follow a skin care routine at home',
      ],
    },
    benefits: [
      { title: 'A calmer, clearer look', text: 'Many people see patches soften and tone look more even over time.' },
      { title: 'A careful plan', text: 'We avoid treatments that are too strong for your skin.' },
      { title: 'Long-term guidance', text: 'We help you manage triggers so you can keep your results.' },
      { title: 'Physician-led', text: 'Dr. Slack plans your care and adjusts it as your skin responds.' },
    ],
    steps: [
      { title: 'Consultation', text: 'We look at your skin, review your health history, medicines and hormones, and talk about your goals.' },
      { title: 'Your plan', text: 'We build a gentle plan with a skin care routine, sun protection and, if it fits, in-office care.' },
      { title: 'Treatment', text: 'In-office care is chosen carefully, such as light peels or other gentle options. We may start with a small test area.' },
      { title: 'Aftercare', text: 'We share simple steps to calm the skin and protect it from the sun and heat.' },
      { title: 'Follow-up', text: 'Melasma needs steady care. We check your progress and adjust your plan over time.' },
    ],
    safety: {
      title: 'Honest about melasma',
      paragraphs: [
        'Melasma cannot always be cured. It can improve, but it can also return, especially with sun, heat or hormone changes. We will not promise a perfect result.',
        'Some treatments, such as strong lasers or harsh peels, can make melasma worse in some people. Dr. Slack plans carefully for your skin. Other skin conditions can look like melasma, so a proper exam is important.',
      ],
      items: ['Exam to confirm the condition', 'Gentle approach first', 'Sun and heat guidance', 'Regular follow-up'],
    },
    faqs: [
      { q: 'What causes melasma?', a: 'Hormones, sun and heat are common triggers. Family history also plays a role. Dr. Slack will look at what may apply to you.' },
      { q: 'Can melasma be cured?', a: 'It can often be improved, but it can come back. A long-term plan with sun protection helps keep it under control.' },
      { q: 'Will a laser help?', a: 'Some lasers can help some people, but strong settings can make melasma worse. Dr. Slack will tell you honestly what is safe for you.' },
      { q: 'Why is sun protection so important?', a: 'Sun and heat can trigger and darken melasma. Daily protection is one of the most helpful steps.' },
      { q: 'How long does treatment take?', a: 'Melasma responds slowly. Many people need several months of steady care, and then a plan to keep results.' },
      { q: 'How do I get started?', a: 'Book a consultation online or call us at 912-268-2103. We will look at your skin and make a plan that fits you.' },
    ],
    related: [
      { label: 'All Conditions', href: '/conditions/' },
      { label: 'Chemical Peels (VI Peel)', href: '/skin-facial-rejuvenation/chemical-peels-vi-peel/' },
      { label: 'Medical Facials & HydraFacial', href: '/skin-facial-rejuvenation/medical-facials-hydrafacial/' },
      { label: 'Laser Facial', href: '/skin-facial-rejuvenation/laser-facial/' },
    ],
  },
];
