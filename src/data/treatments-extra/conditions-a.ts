import type { Treatment } from '../treatments';

const localCity = 'St. Simons Island, GA';
const IMG = '/images/treatments/';
const group = { title: 'Conditions', href: '/conditions/' };

export const conditionsA: Treatment[] = [
  {
    slug: 'brain-fog-memory-loss',
    group,
    title: 'Brain Fog/memory Loss',
    seoTitle: `Brain Fog and Memory Loss Care in ${localCity}`,
    description:
      'Foggy thinking, poor focus or forgetfulness? Dr. Laura Slack at Imber Medical in St. Simons Island, GA looks at the whole picture and plans care for you.',
    lede: 'Foggy thinking and forgetfulness have many causes. Dr. Laura Slack looks at the whole picture before she plans your care.',
    images: {
      hero: IMG + 'bhrt-1.jpg',
      overview: IMG + 'bhrt-2.jpg',
      fit: IMG + 'bhrt-3.jpg',
      alt: {
        hero: 'A calm woman with her eyes closed',
        overview: 'A woman relaxing with her hands in her hair',
        fit: 'A woman with a calm, thoughtful expression',
      },
    },
    overview: {
      title: 'When your thinking feels slow',
      paragraphs: [
        'Brain fog is a term for slow thinking, poor focus, word-finding trouble or forgetfulness. It is not a diagnosis. It is a sign that something may need attention.',
        'Sleep, stress, hormones, nutrition, thyroid health, medicines and past illness can all play a part. Some causes need a doctor first. We start by listening and then we look for what may be behind it.',
      ],
      cards: [
        {
          title: 'Look for the cause',
          text: 'We review your history, symptoms, sleep, stress and medicines. When it makes sense, Dr. Slack may order lab work.',
        },
        {
          title: 'Support, step by step',
          text: 'Your plan may include lifestyle steps and, when right for you, options such as hormone care or nutrient support. We go at a pace that feels right.',
        },
      ],
    },
    fit: {
      title: 'Does this sound like you?',
      text: 'Many people notice changes in focus and memory at some point. A visit helps sort out what is common and what needs more attention.',
      concerns: [
        'Trouble focusing or finishing tasks',
        'Forgetting words, names or plans',
        'Feeling mentally tired or slow',
        'Poor sleep or waking unrefreshed',
        'Low energy through the day',
        'Changes that started after illness, stress or a hormone shift',
      ],
      goodFit: [
        'You want a physician to look at the whole picture',
        'You can share your health history and current medicines',
        'You are open to lab work if it is needed',
        'You can follow a plan for several weeks or months',
        'You understand that care starts with finding the cause',
      ],
    },
    benefits: [
      { title: 'Time to listen', text: 'Your story matters. We take time to understand when it started and what changed.' },
      { title: 'A full review', text: 'We look at sleep, stress, hormones, nutrition and medicines, not just one piece.' },
      { title: 'A plan that fits', text: 'Your steps match your health, your goals and your daily life.' },
      { title: 'Follow-up care', text: 'We check how you feel and adjust the plan as you go.' },
    ],
    steps: [
      { title: 'Consultation', text: 'We talk about your symptoms, when they began and how they affect your day.' },
      { title: 'Health review', text: 'Dr. Slack reviews your history and medicines and may suggest lab work.' },
      { title: 'Your plan', text: 'You get a clear plan with simple steps. Some may be lifestyle changes, and some may be treatments from our clinic.' },
      { title: 'Start care', text: 'We begin with the steps that make the most sense first and explain what to watch for.' },
      { title: 'Follow-up', text: 'We check in, review how you feel and adjust your plan. If we find a cause that needs another specialist, we say so.' },
    ],
    safety: {
      title: 'Your safety comes first',
      paragraphs: [
        'Sudden memory loss, confusion, severe headache, weakness or trouble speaking need urgent medical care. Please call 911 or go to the nearest emergency room. Do not wait for an appointment.',
        'Brain fog can have causes that are outside our clinic, such as a medical or neurologic condition. If we think you need a specialist, we will tell you and help you take the next step. We cannot promise a result.',
      ],
      items: ['Physician review first', 'Lab work when needed', 'Referral when another specialist is right', 'Honest, realistic expectations'],
    },
    faqs: [
      { q: 'Is brain fog a disease?', a: 'No. It is a group of symptoms. The cause can be different from person to person, so we start by looking for what may be behind it.' },
      { q: 'Could it be a serious problem?', a: 'Sometimes it can be. That is why a physician review matters. If anything worries us, we will recommend the right next step.' },
      { q: 'Will I need lab work?', a: 'Often it helps. Dr. Slack decides after she hears your history and symptoms.' },
      { q: 'How long until I feel better?', a: 'It depends on the cause. Some people notice small changes within weeks. Others need more time. We will check in with you along the way.' },
      { q: 'Can hormones play a role?', a: 'They can for some people. If it fits your health picture, Dr. Slack may talk with you about hormone care. It is not right for everyone.' },
      { q: 'How do I get started?', a: 'Book a consultation online or call us at 912-268-2103. We will listen and plan with you.' },
    ],
    related: [
      { label: 'All Conditions', href: '/conditions/' },
      { label: 'Bioidentical Hormone Replacement Therapy (BHRT)', href: '/wellness-medical-weight-loss/bioidentical-hormone-replacement-therapy-bhrt/' },
      { label: 'Methylene Blue', href: '/wellness-medical-weight-loss/methylene-blue/' },
      { label: 'IV Therapy', href: '/wellness-medical-weight-loss/iv-therapy/' },
    ],
  },
  {
    slug: 'hair-thinning',
    group,
    title: 'Hair Thinning',
    seoTitle: `Hair Thinning Care in ${localCity}`,
    description:
      'Noticing thinner hair or a wider part? Dr. Laura Slack at Imber Medical in St. Simons Island, GA checks your scalp and plans care that fits you.',
    lede: 'Thinner hair can be upsetting, and it often has a cause you can look into. Dr. Laura Slack helps you find a plan.',
    images: {
      hero: IMG + 'ted-1.jpg',
      overview: IMG + 'ted-2.jpg',
      fit: IMG + 'ted-3.jpg',
      alt: {
        hero: 'A woman applying a scalp serum with a dropper',
        overview: 'A woman massaging her scalp with a soft brush',
        fit: 'A woman with long, healthy hair looking over her shoulder',
      },
    },
    overview: {
      title: 'Why hair gets thinner',
      paragraphs: [
        'Hair can thin because of family history, hormones, stress, illness, diet or certain medicines. Often more than one thing is going on at once.',
        'Hair grows slowly, so changes can take months to show. The earlier you look into it, the more options you may have. We start by finding out what is likely behind your thinning.',
      ],
      cards: [
        {
          title: 'Check first',
          text: 'Dr. Slack looks at your scalp and hair and reviews your health history. If lab work makes sense, she will suggest it.',
        },
        {
          title: 'Support the follicle',
          text: 'Options may include in-office scalp care and a home routine. We choose what matches your stage of thinning.',
        },
      ],
    },
    fit: {
      title: 'Does this sound like you?',
      text: 'Some shedding every day is normal. A visit can help you tell what is normal and what may need care.',
      concerns: [
        'A wider part than before',
        'Thinning at the crown or temples',
        'More hair in the brush or drain',
        'Hair that feels finer or weaker',
        'Shedding after stress, illness or a big life change',
        'A dry or unhappy scalp',
      ],
      goodFit: [
        'You want to act early, before more hair is lost',
        'You prefer non-surgical care',
        'You can stick with a routine for several months',
        'You are open to a health review',
        'You understand that hair changes take time',
      ],
    },
    benefits: [
      { title: 'A real look at the cause', text: 'We do not guess. We check your scalp and health history first.' },
      { title: 'Non-surgical options', text: 'Care can include in-office scalp treatment and an at-home routine.' },
      { title: 'A plan for your stage', text: 'Early thinning and more advanced loss need different steps. We match the plan to you.' },
      { title: 'Progress checks', text: 'We review how your hair is doing and adjust the plan.' },
    ],
    steps: [
      { title: 'Consultation', text: 'We look at your scalp, talk about when you noticed changes and review your history.' },
      { title: 'Find the cause', text: 'Dr. Slack may suggest lab work or other checks if they could explain your thinning.' },
      { title: 'Your plan', text: 'You get a clear plan, with home care and, if it fits, an in-office treatment.' },
      { title: 'Start care', text: 'We begin your routine and explain how to use each step.' },
      { title: 'Check progress', text: 'Hair grows slowly. We check in after a few months and adjust.' },
    ],
    safety: {
      title: 'Your safety comes first',
      paragraphs: [
        'Sudden hair loss, patchy bald spots, or scalp pain, sores or scarring should be checked by a physician first. Some causes need a different kind of care.',
        'Results vary from person to person, and we cannot promise regrowth. We will be honest about what is realistic for you.',
      ],
      items: ['Scalp and health review first', 'Allergy and medicine check', 'Referral when another specialist is right', 'Honest, realistic expectations'],
    },
    faqs: [
      { q: 'How much shedding is normal?', a: 'Some daily shedding is normal. If your part looks wider or your hair feels thinner, it is worth a visit.' },
      { q: 'Can stress cause thinning?', a: 'Yes, stress and illness can cause a period of heavy shedding. Other causes can happen at the same time, so a review helps.' },
      { q: 'Will I need lab work?', a: 'Sometimes. Dr. Slack decides based on your history and what she sees on your scalp.' },
      { q: 'How long until I see a change?', a: 'Hair grows slowly. Many people look for changes after a few months of steady care.' },
      { q: 'Do you offer non-surgical options?', a: 'Yes. We offer in-office scalp care and a home routine. We will explain which one fits your stage.' },
      { q: 'How do I get started?', a: 'Book a consultation online or call us at 912-268-2103. We will check your scalp and make a plan.' },
    ],
    related: [
      { label: 'All Conditions', href: '/conditions/' },
      { label: 'TED Hair Restoration', href: '/hair-restoration-removal/ted-hair-restoration/' },
      { label: 'All Xtresse Products', href: '/hair-restoration-removal/all-xtresse-products/' },
      { label: 'Bioidentical Hormone Replacement Therapy (BHRT)', href: '/wellness-medical-weight-loss/bioidentical-hormone-replacement-therapy-bhrt/' },
    ],
  },
  {
    slug: 'rosacea',
    group,
    title: 'Rosacea',
    seoTitle: `Rosacea Care in ${localCity}`,
    description:
      'Facial redness, flushing or visible vessels? Dr. Laura Slack at Imber Medical in St. Simons Island, GA plans gentle care for rosacea-prone skin.',
    lede: 'Redness and flushing do not have to run your day. Dr. Laura Slack plans gentle care for sensitive, rosacea-prone skin.',
    images: {
      hero: IMG + 'laser-facial-1.jpg',
      overview: IMG + 'laser-facial-2.jpg',
      fit: IMG + 'laser-facial-3.jpg',
      alt: {
        hero: 'A woman with calm, glowing skin',
        overview: 'A woman receiving a gentle light treatment on her face',
        fit: 'A close view of smooth, even facial skin',
      },
    },
    overview: {
      title: 'Living with redness and flushing',
      paragraphs: [
        'Rosacea is a long-term skin condition. It often shows up as redness on the cheeks, nose and forehead, flushing, small visible vessels and sometimes bumps. It can come and go in flares.',
        'Triggers differ for each person. Sun, heat, spicy food, alcohol, stress and some skin products are common ones. There is no one cure, but care can help calm the look of the skin and reduce flares for many people.',
      ],
      cards: [
        {
          title: 'Calm and protect',
          text: 'We start with a gentle skin routine, sun protection and ways to spot your triggers.',
        },
        {
          title: 'Treat the look of redness',
          text: 'When it fits your skin, light-based treatment may help soften the look of redness and small visible vessels.',
        },
      ],
    },
    fit: {
      title: 'Does this sound like you?',
      text: 'Rosacea is common and can look different from person to person. A skin check helps confirm what you have.',
      concerns: [
        'Redness on the cheeks, nose or chin',
        'Flushing that comes and goes',
        'Small visible blood vessels',
        'Skin that stings or feels sensitive',
        'Bumps that look like acne',
        'Flares from sun, heat or stress',
      ],
      goodFit: [
        'You want a clear plan for sensitive skin',
        'You can protect your skin from the sun',
        'You are open to changing some skin products',
        'You can plan for a series of gentle visits',
        'You have no active skin infection in the area',
      ],
    },
    benefits: [
      { title: 'A calmer look', text: 'Care aims to soften the look of redness and reduce flares over time.' },
      { title: 'Gentle methods', text: 'We choose settings and products that respect sensitive skin.' },
      { title: 'Trigger guidance', text: 'We help you spot what sets off your skin and how to manage it.' },
      { title: 'Physician-led', text: 'Dr. Slack confirms what is going on and plans your care.' },
    ],
    steps: [
      { title: 'Consultation', text: 'We look at your skin, talk about flares and triggers and review your routine.' },
      { title: 'Your plan', text: 'You get a clear plan that may include home care and, if it fits, in-office treatment.' },
      { title: 'Gentle start', text: 'We often begin with a calm routine and sun protection before other steps.' },
      { title: 'Treatment', text: 'If light-based care is right for you, we use careful settings for your skin tone and sensitivity.' },
      { title: 'Follow-up', text: 'We check how your skin responds and adjust. Rosacea can come back, so ongoing care may help.' },
    ],
    safety: {
      title: 'Your safety comes first',
      paragraphs: [
        'Not every red face is rosacea. Eye redness or irritation, burning or swelling should be checked by a physician. Some skin conditions look alike and need different care.',
        'Sensitive skin can react to treatment. Common, short-lived effects include redness and tenderness. We choose gentle settings and explain risks before you decide. We cannot promise a cure.',
      ],
      items: ['Skin check before treatment', 'Gentle settings for sensitive skin', 'Sun protection guidance', 'Honest, realistic expectations'],
    },
    faqs: [
      { q: 'Can rosacea be cured?', a: 'No, it is a long-term condition. Many people can calm their skin and reduce flares with the right care.' },
      { q: 'What are common triggers?', a: 'Sun, heat, spicy food, alcohol, stress and some skin products. Your triggers may be different.' },
      { q: 'Can a laser or light treatment help?', a: 'For some people it can soften the look of redness and small visible vessels. Dr. Slack will tell you if it fits your skin.' },
      { q: 'Is it painful?', a: 'Most people feel a quick snap or warmth. Cooling helps keep it comfortable.' },
      { q: 'How many visits will I need?', a: 'It depends on your skin. Many plans use a series of visits, followed by occasional touch-ups.' },
      { q: 'How do I get started?', a: 'Book a consultation online or call us at 912-268-2103. We will look at your skin and plan with you.' },
    ],
    related: [
      { label: 'All Conditions', href: '/conditions/' },
      { label: 'Laser Facial', href: '/skin-facial-rejuvenation/laser-facial/' },
      { label: 'Medical Facials & HydraFacial', href: '/skin-facial-rejuvenation/medical-facials-hydrafacial/' },
      { label: 'Chemical Peels (VI Peel)', href: '/skin-facial-rejuvenation/chemical-peels-vi-peel/' },
    ],
  },
  {
    slug: 'cherry-angioma',
    group,
    title: 'Cherry Angioma',
    seoTitle: `Cherry Angioma Removal in ${localCity}`,
    description:
      'Small red spots on your skin? Dr. Laura Slack at Imber Medical in St. Simons Island, GA checks them first and can discuss gentle removal options.',
    lede: 'Small red dots are common and usually harmless. Dr. Laura Slack checks them first and then explains your options.',
    images: {
      hero: IMG + 'laser-facial-3.jpg',
      overview: IMG + 'laser-facial-2.jpg',
      fit: IMG + 'laser-facial-1.jpg',
      alt: {
        hero: 'A close view of smooth, even facial skin',
        overview: 'A woman receiving a gentle light treatment on her face',
        fit: 'A woman with calm, glowing skin',
      },
    },
    overview: {
      title: 'Small red spots on the skin',
      paragraphs: [
        'A cherry angioma is a small, bright red or purple spot made of tiny blood vessels. It is a very common skin growth, and it is usually not dangerous.',
        'They tend to show up more as we age, and they can appear on the chest, back, arms or stomach. Some people leave them alone. Others want them removed because of how they look or because they get bumped or catch on clothing.',
      ],
      cards: [
        {
          title: 'Check first',
          text: 'Dr. Slack looks at each spot to make sure it is what it seems. Anything unusual should be examined before it is treated.',
        },
        {
          title: 'Gentle removal',
          text: 'If you want a spot treated and it is a good fit, a short, targeted treatment can help it fade or go away.',
        },
      ],
    },
    fit: {
      title: 'Does this sound like you?',
      text: 'If you have small red spots and want to know what they are, a quick visit can help.',
      concerns: [
        'Small, bright red dots on the skin',
        'Round, slightly raised red spots',
        'New red spots that seem to be adding up',
        'A spot that bleeds when bumped',
        'Spots that snag on clothing or jewelry',
        'Spots you want checked or removed for how they look',
      ],
      goodFit: [
        'You want a physician to confirm what the spot is',
        'You understand some spots may need more than one visit',
        'You can protect the area from the sun while it heals',
        'You have no active skin infection in the area',
        'You are open to a short healing time',
      ],
    },
    benefits: [
      { title: 'A clear answer', text: 'You learn what the spot is and whether it needs treatment at all.' },
      { title: 'Quick visits', text: 'Treating a small spot is usually fast.' },
      { title: 'Little downtime', text: 'Most people go back to normal activities. The area may look red or crusty while it heals.' },
      { title: 'Physician-led', text: 'Dr. Slack checks your skin and plans safe treatment.' },
    ],
    steps: [
      { title: 'Consultation', text: 'We look at your spots and talk about your goals.' },
      { title: 'Skin check', text: 'Dr. Slack confirms what each spot is. If one looks unusual, we recommend it be examined first.' },
      { title: 'Your plan', text: 'You get a clear plan, including what to expect and how the area will heal.' },
      { title: 'Treatment', text: 'A targeted treatment is used on the spot, usually in a short visit.' },
      { title: 'Aftercare', text: 'We share simple tips for healing and sun protection. Some spots need a second visit.' },
    ],
    safety: {
      title: 'Your safety comes first',
      paragraphs: [
        'Not every red or dark spot is an angioma. A spot that is changing, growing, bleeding without being bumped, or looks different from the others should be examined by a physician before any treatment.',
        'Short-lived redness, crusting or tenderness can happen. Less common risks include a mark or color change in the skin. New spots can appear over time. We will explain the risks before you decide.',
      ],
      items: ['Every spot checked first', 'Unusual spots examined before treatment', 'Careful, targeted settings', 'Clear aftercare'],
    },
    faqs: [
      { q: 'Are cherry angiomas dangerous?', a: 'They are usually harmless. Still, it is smart to have any new or changing spot checked by a physician.' },
      { q: 'Why do I have them?', a: 'They are common and tend to appear with age. We do not always know why a person gets them.' },
      { q: 'Do I have to remove them?', a: 'No. Many people leave them alone. Treatment is a choice for how they look or feel.' },
      { q: 'Does treatment hurt?', a: 'Most people feel a quick pinch or warmth. It is usually brief.' },
      { q: 'Will they come back?', a: 'A treated spot may fade for good, but new spots can appear later in other places.' },
      { q: 'How do I get started?', a: 'Book a consultation online or call us at 912-268-2103. We will check your skin and explain your options.' },
    ],
    related: [
      { label: 'All Conditions', href: '/conditions/' },
      { label: 'Laser Facial', href: '/skin-facial-rejuvenation/laser-facial/' },
      { label: 'RF Microneedling', href: '/skin-facial-rejuvenation/rf-microneedling/' },
      { label: 'All Treatments', href: '/treatments/' },
    ],
  },
  {
    slug: 'face-and-leg-veins',
    group,
    title: 'Face and leg Veins',
    seoTitle: `Face and Leg Vein Care in ${localCity}`,
    description:
      'Visible veins on your face or legs? Dr. Laura Slack at Imber Medical in St. Simons Island, GA checks them and plans care for the look of small veins.',
    lede: 'Small visible veins are common and often bother how you feel about your skin. Dr. Laura Slack checks them and plans your care.',
    images: {
      hero: IMG + 'laser-hair-1.jpg',
      overview: IMG + 'laser-hair-2.jpg',
      fit: IMG + 'laser-hair-3.jpg',
      alt: {
        hero: 'A woman with smooth, glowing legs',
        overview: 'A laser handpiece used on the skin',
        fit: 'A provider treating the skin with a handheld device',
      },
    },
    overview: {
      title: 'Small veins you can see',
      paragraphs: [
        'Small red, blue or purple lines on the face or legs are often called spider veins or broken vessels. They are tiny blood vessels close to the skin surface.',
        'Family history, sun, age, hormones and long hours on your feet can all play a part. Most small veins are a cosmetic concern. Still, leg symptoms like pain or swelling should be checked by a physician first.',
      ],
      cards: [
        {
          title: 'Check first',
          text: 'Dr. Slack looks at your veins and asks about symptoms, such as aching, swelling or heaviness, before she plans treatment.',
        },
        {
          title: 'Treat the look of veins',
          text: 'For small surface veins, light-based treatment may help soften how they look. We choose settings for your skin and your veins.',
        },
      ],
    },
    fit: {
      title: 'Does this sound like you?',
      text: 'Small veins are common, and many people are good candidates for care. A short visit tells you what you have and what may help.',
      concerns: [
        'Fine red lines on the cheeks or nose',
        'Small blue or purple veins on the legs',
        'Web-like patterns on the thighs or ankles',
        'Veins that make you avoid shorts or skirts',
        'Redness that does not fade',
        'Veins that have been slowly increasing',
      ],
      goodFit: [
        'You want to improve the look of small surface veins',
        'You have no pain or swelling that needs a medical check first',
        'You can avoid sun and tanning before and after',
        'You can plan for a series of visits',
        'You are not pregnant',
      ],
    },
    benefits: [
      { title: 'A clearer look', text: 'Care aims to soften the look of small visible veins over time.' },
      { title: 'Short visits', text: 'Treatment sessions are usually quick, and most people return to daily life.' },
      { title: 'Settings for you', text: 'Skin tone and vein size matter. We adjust each visit to your skin.' },
      { title: 'Physician-led', text: 'Dr. Slack checks for symptoms first and plans safe care.' },
    ],
    steps: [
      { title: 'Consultation', text: 'We look at your veins, ask about symptoms and review your health history and medicines.' },
      { title: 'Your plan', text: 'You get a clear plan with the number of visits and what to expect.' },
      { title: 'Prepare', text: 'You avoid sun and tanning, and we share a simple checklist.' },
      { title: 'Treatment', text: 'Protective eyewear is worn. Pulses of light are applied to the veins, with cooling for comfort.' },
      { title: 'Follow-up', text: 'The area may look pink or feel warm for a short time. Many people need more than one visit. We check how your veins respond.' },
    ],
    safety: {
      title: 'Your safety comes first',
      paragraphs: [
        'Leg pain, swelling, heaviness, skin color changes, sores or a sudden change in a vein need a physician check first. Larger or deeper veins may need a different kind of care, and we will refer you when that is right.',
        'Short-lived redness, swelling and tenderness are common. Less common risks include bruising, blisters or color changes in the skin. We will explain the risks before you decide. Results vary, and veins can come back or new ones can appear.',
      ],
      items: ['Symptom review first', 'Referral for larger or deeper veins', 'Skin-safe settings', 'Honest, realistic expectations'],
    },
    faqs: [
      { q: 'Are spider veins harmful?', a: 'Most small surface veins are a cosmetic concern. If you have pain, swelling or heaviness, see a physician first.' },
      { q: 'Can face veins and leg veins be treated?', a: 'Often yes, when they are small and near the surface. Dr. Slack will tell you if your veins are a good fit.' },
      { q: 'Does it hurt?', a: 'Most people feel a quick snap or warmth. Cooling helps keep it comfortable.' },
      { q: 'How many visits will I need?', a: 'It depends on the area and the veins. Many people need more than one visit.' },
      { q: 'Will the veins come back?', a: 'Treated veins may fade well, but new veins can appear over time. We will share tips to help you care for your skin.' },
      { q: 'How do I get started?', a: 'Book a consultation online or call us at 912-268-2103. We will check your veins and plan with you.' },
    ],
    related: [
      { label: 'All Conditions', href: '/conditions/' },
      { label: 'Laser Facial', href: '/skin-facial-rejuvenation/laser-facial/' },
      { label: 'Laser Hair Removal', href: '/hair-restoration-removal/laser-hair-removal/' },
      { label: 'All Treatments', href: '/treatments/' },
    ],
  },
];
