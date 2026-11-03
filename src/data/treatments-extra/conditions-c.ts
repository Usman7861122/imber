import type { Treatment } from '../treatments';

const localCity = 'St. Simons Island, GA';
const IMG = '/images/treatments/';
const group = { title: 'Conditions', href: '/conditions/' };
const BOOK = 'Book a consultation online or call us at 912-268-2103.';

export const conditionsC: Treatment[] = [
  {
    slug: 'fine-lines-wrinkles',
    group,
    title: 'Fine Lines & Wrinkles',
    seoTitle: `Fine Lines & Wrinkles in ${localCity}`,
    description:
      'Care for fine lines and wrinkles with Dr. Laura Slack at Imber Medical in St. Simons Island, GA. Natural-looking options planned around your face.',
    lede: 'Lines tell your story, and you choose how much of it shows. Dr. Laura Slack helps you soften them in a natural way.',
    images: {
      hero: IMG + 'filler-tox-1.jpg',
      overview: IMG + 'filler-tox-2.jpg',
      fit: IMG + 'filler-tox-3.jpg',
      alt: {
        hero: 'A woman with calm, smooth skin',
        overview: 'A close view of a woman with soft, healthy skin',
        fit: 'A woman looking relaxed and confident',
      },
    },
    overview: {
      title: 'Why lines and wrinkles appear',
      paragraphs: [
        'Fine lines and wrinkles are a normal part of life. Over time, skin makes less collagen and holds less moisture. Sun, smoking, stress and sleep can speed this up. Repeated facial movements also leave lines in the same places.',
        'Some lines show up only when you smile or frown. Others stay even when your face is still. The right care depends on which type you have, how deep the lines are and what you want to change.',
      ],
      cards: [
        {
          title: 'Relax the lines from movement',
          text: 'Lines caused by muscle movement, like frown lines or crow’s feet, may respond to tox. It softens the movement that creases the skin.',
        },
        {
          title: 'Support the skin itself',
          text: 'Skin treatments such as RF microneedling help skin look firmer and smoother over time. Filler can restore volume where it has faded.',
        },
      ],
    },
    fit: {
      title: 'Does this sound like you?',
      text: 'Many adults notice lines and want a natural look, not a frozen one. A consultation helps us see what is causing yours and what will help.',
      concerns: [
        'Lines across the forehead',
        'Frown lines between the brows',
        'Crow’s feet around the eyes',
        'Smile lines around the mouth',
        'Fine lines on the cheeks or neck',
        'Skin that looks tired or dull',
      ],
      goodFit: [
        'You want a natural, rested look',
        'You are in good general health',
        'You have realistic goals',
        'You can attend follow-up visits',
        'You are not pregnant or breastfeeding',
      ],
    },
    benefits: [
      { title: 'A natural look', text: 'Small, careful steps keep your face moving and expressive.' },
      { title: 'A plan for you', text: 'Lines have different causes. We match the care to your face, not a template.' },
      { title: 'Several options', text: 'Tox, filler and skin treatments can work alone or together.' },
      { title: 'Physician-led', text: 'Dr. Slack plans your care and checks your results.' },
    ],
    steps: [
      { title: 'Consultation', text: 'We look at your skin at rest and in motion, and talk about what bothers you most.' },
      { title: 'Your plan', text: 'You get a clear plan with options, steps and a fair estimate before anything starts.' },
      { title: 'Treatment', text: 'Care is done in the office. Most visits are short, and we use comfort steps as needed.' },
      { title: 'Aftercare', text: 'We share simple tips, such as sun protection and what to avoid for a short time.' },
      { title: 'Follow-up', text: 'We check your results and adjust your plan. Many people need touch-ups over time.' },
    ],
    safety: {
      title: 'Your safety comes first',
      paragraphs: [
        'No treatment stops aging, and results vary from person to person. We will tell you what is realistic for you. Some lines may soften but not disappear.',
        'Side effects can include redness, swelling, bruising or tenderness. Less common risks depend on the treatment, and we explain them before you decide.',
      ],
      items: ['Physician-led planning', 'Health and medicine review', 'Honest, realistic goals', 'Clear aftercare and follow-up'],
    },
    faqs: [
      { q: 'Can all wrinkles be treated?', a: 'Many can be softened, but not every line goes away. Deep lines may need more than one approach.' },
      { q: 'Will I look frozen?', a: 'That is not our goal. We plan small steps so your face still moves and looks like you.' },
      { q: 'What is the difference between tox and filler?', a: 'Tox relaxes the muscles that cause some lines. Filler adds volume under the skin. Some people use both.' },
      { q: 'How long do results last?', a: 'It depends on the treatment and the person. Most results fade over time, so many people return for maintenance.' },
      { q: 'Is there downtime?', a: 'Many people go back to normal life right away. Some have mild redness or bruising for a few days.' },
      { q: 'How do I get started?', a: BOOK + ' We will look at your skin and make a plan that fits you.' },
    ],
    related: [
      { label: 'All Conditions', href: '/conditions/' },
      { label: 'Filler & Tox', href: '/injectables-toxins/filler-tox/' },
      { label: 'RF Microneedling', href: '/skin-facial-rejuvenation/rf-microneedling/' },
      { label: 'All Treatments', href: '/treatments/' },
    ],
  },
  {
    slug: 'cellulite',
    group,
    title: 'Cellulite',
    seoTitle: `Cellulite in ${localCity}`,
    description:
      'Care for cellulite with Dr. Laura Slack at Imber Medical in St. Simons Island, GA. Non-surgical options to help skin look smoother and firmer.',
    lede: 'Dimpled skin is very common and not a sign of poor health. Dr. Laura Slack helps you look and feel smoother.',
    images: {
      hero: IMG + 'body-contouring-1.jpg',
      overview: IMG + 'body-contouring-2.jpg',
      fit: IMG + 'body-contouring-3.jpg',
      alt: {
        hero: 'A woman with a toned waist',
        overview: 'A close view of smooth skin on the body',
        fit: 'A woman with healthy skin on her hips and legs',
      },
    },
    overview: {
      title: 'What cellulite is',
      paragraphs: [
        'Cellulite is the dimpled or lumpy look on the thighs, hips, buttocks and belly. It happens when fat pushes up against bands of tissue under the skin. These bands pull the skin down in places.',
        'Hormones, genes, age and skin thickness all play a part. It affects people of every size, so it is not only about weight. Diet and exercise are good for your health, but they may not remove it.',
      ],
      cards: [
        {
          title: 'Tighten and smooth the skin',
          text: 'Energy-based treatments, such as RF microneedling, may help skin look firmer and smoother over time. Dr. Slack will tell you if this fits you.',
        },
        {
          title: 'Look at the whole picture',
          text: 'We talk about skin laxity, fat, hormones and lifestyle. Then we choose steps that make sense for your body.',
        },
      ],
    },
    fit: {
      title: 'Does this sound like you?',
      text: 'If dimples bother you and you want a non-surgical option, a consultation is a good place to start.',
      concerns: [
        'Dimples on the thighs or hips',
        'Lumpy texture on the buttocks',
        'Skin that looks loose or uneven',
        'Changes after weight change or pregnancy',
        'Texture you notice more with age',
        'Wanting smoother skin without surgery',
      ],
      goodFit: [
        'You want to improve skin texture',
        'You have realistic goals',
        'You are in good general health',
        'You can attend a series of visits',
        'You are not pregnant or breastfeeding',
      ],
    },
    benefits: [
      { title: 'Non-surgical', text: 'No cuts and no hospital stay. Most people keep up with daily life.' },
      { title: 'Planned for your body', text: 'Each person’s cellulite is different, so each plan is different.' },
      { title: 'Honest expectations', text: 'Cellulite can improve, but it may not fully go away. We say so up front.' },
      { title: 'Physician-led', text: 'Dr. Slack plans your care and tracks your progress.' },
    ],
    steps: [
      { title: 'Consultation', text: 'We look at your skin and talk about your goals, your health and what you have tried.' },
      { title: 'Your plan', text: 'You get a clear plan with the number of visits and a fair estimate before you start.' },
      { title: 'Treatment', text: 'Treatment is done in the office. We adjust settings for comfort and your skin type.' },
      { title: 'Aftercare', text: 'Mild redness or tenderness can happen. We share simple tips to help your skin heal.' },
      { title: 'Follow-up', text: 'We check your progress and adjust your plan. Maintenance may help results last.' },
    ],
    safety: {
      title: 'Your safety comes first',
      paragraphs: [
        'Results vary, and no treatment promises to remove cellulite for good. Some people see a small change and others see more.',
        'Common effects include redness, swelling and tenderness. We review your health, medicines and skin before we start and explain the risks.',
      ],
      items: ['Physician-led planning', 'Skin and health review', 'Honest, realistic goals', 'Clear aftercare and follow-up'],
    },
    faqs: [
      { q: 'Can cellulite go away?', a: 'It can improve for many people, but it may not disappear. Treatment aims for smoother-looking skin.' },
      { q: 'Does weight loss remove it?', a: 'Healthy habits help your body, but cellulite can appear at any weight. Weight loss may not remove it.' },
      { q: 'How many visits will I need?', a: 'It depends on your skin and the treatment. Dr. Slack will give you a plan after your consultation.' },
      { q: 'Is it painful?', a: 'Most people find it manageable. We use comfort steps and adjust as needed.' },
      { q: 'Will it come back?', a: 'Results are not always permanent, because skin keeps changing with age and hormones. Maintenance can help.' },
      { q: 'How do I get started?', a: BOOK + ' We will look at your skin and talk through your options.' },
    ],
    related: [
      { label: 'All Conditions', href: '/conditions/' },
      { label: 'RF Microneedling', href: '/skin-facial-rejuvenation/rf-microneedling/' },
      { label: 'Fat Reduction Body Contouring', href: '/body-contouring-sculpting/fat-reduction-body-contouring/' },
      { label: 'All Treatments', href: '/treatments/' },
    ],
  },
  {
    slug: 'energy-enhancement',
    group,
    title: 'Energy Enhancement',
    seoTitle: `Energy Enhancement in ${localCity}`,
    description:
      'Support for low energy with Dr. Laura Slack at Imber Medical in St. Simons Island, GA. A health review first, then a plan that fits your body.',
    lede: 'Feeling tired all the time is not something you have to accept. Dr. Laura Slack starts by finding out why.',
    images: {
      hero: IMG + 'iv-therapy-1.jpg',
      overview: IMG + 'iv-therapy-2.jpg',
      fit: IMG + 'iv-therapy-3.jpg',
      alt: {
        hero: 'A woman relaxing in a calm clinic setting',
        overview: 'A woman resting comfortably during a wellness visit',
        fit: 'A woman smiling and feeling well',
      },
    },
    overview: {
      title: 'When low energy gets in the way',
      paragraphs: [
        'Low energy has many possible causes. Poor sleep, stress, diet, hormone changes, low nutrient levels and health conditions can all play a part. Often it is a mix.',
        'Because the causes differ, one fix will not suit everyone. We start with your history and, when needed, lab work. Then we build a plan that fits your body and your life.',
      ],
      cards: [
        {
          title: 'Find the cause first',
          text: 'Dr. Slack reviews your symptoms, habits and health history. Lab tests may help show what your body needs.',
        },
        {
          title: 'Support what you need',
          text: 'Depending on the findings, options may include IV therapy, hormone care, peptide therapy and daily habit changes.',
        },
      ],
    },
    fit: {
      title: 'Does this sound like you?',
      text: 'If tiredness is affecting your work, mood or time with family, it is worth a conversation.',
      concerns: [
        'Feeling tired even after sleep',
        'An afternoon crash most days',
        'Trouble focusing',
        'Lower drive for exercise',
        'Changes in mood or motivation',
        'Slow recovery after workouts or illness',
      ],
      goodFit: [
        'You want to find out why you feel low',
        'You are willing to share your health history',
        'You can follow a plan and return for checks',
        'You are open to lifestyle changes',
        'You are open to lab testing when needed',
      ],
    },
    benefits: [
      { title: 'Start with answers', text: 'We look for causes before we suggest treatment.' },
      { title: 'A plan for you', text: 'Your plan fits your body, your health and your daily life.' },
      { title: 'More than one option', text: 'Care can include IV therapy, hormones, peptides and simple habit changes.' },
      { title: 'Physician-led', text: 'Dr. Slack reviews your health and watches your progress.' },
    ],
    steps: [
      { title: 'Consultation', text: 'We talk about your energy, sleep, stress, diet and health history.' },
      { title: 'Testing', text: 'When it helps, we use lab work to learn more about what your body needs.' },
      { title: 'Your plan', text: 'You get a clear plan that explains each step and why we suggest it.' },
      { title: 'Care', text: 'We start the plan, which may include in-office treatments and habits to follow at home.' },
      { title: 'Follow-up', text: 'We check how you feel and adjust your plan over time.' },
    ],
    safety: {
      title: 'Your safety comes first',
      paragraphs: [
        'Ongoing tiredness can be a sign of a health problem that needs a different kind of care. If you have chest pain, fainting, sudden weakness or other severe symptoms, seek medical care right away.',
        'Not every treatment is right for everyone. Dr. Slack reviews your health and medicines first, and she may refer you to another doctor if needed. Results vary.',
      ],
      items: ['Physician health review', 'Lab testing when needed', 'Referral if a different doctor is better', 'Clear plan and follow-up'],
    },
    faqs: [
      { q: 'Why am I so tired?', a: 'There are many possible reasons, such as sleep, stress, nutrition, hormones and health conditions. A health review helps find out.' },
      { q: 'Will you do lab work?', a: 'Often yes. Labs can help us see what your body needs, and Dr. Slack will explain the results.' },
      { q: 'Is IV therapy the answer?', a: 'It can help some people, but it is not right for everyone. We decide together after your review.' },
      { q: 'How fast will I feel better?', a: 'It varies. Some people notice changes soon, and others need more time. We check progress along the way.' },
      { q: 'Can lifestyle changes help?', a: 'Yes. Sleep, food, movement and stress care all matter, and we include them in your plan.' },
      { q: 'How do I get started?', a: BOOK + ' We will listen first and then suggest next steps.' },
    ],
    related: [
      { label: 'All Conditions', href: '/conditions/' },
      { label: 'IV Therapy', href: '/wellness-medical-weight-loss/iv-therapy/' },
      { label: 'Peptide Therapy', href: '/wellness-medical-weight-loss/peptide-therapy/' },
      { label: 'Bioidentical Hormone Replacement Therapy (BHRT)', href: '/wellness-medical-weight-loss/bioidentical-hormone-replacement-therapy-bhrt/' },
    ],
  },
  {
    slug: 'hair-removal',
    group,
    title: 'Hair Removal',
    seoTitle: `Hair Removal in ${localCity}`,
    description:
      'Care for unwanted hair with Dr. Laura Slack at Imber Medical in St. Simons Island, GA. Long-lasting hair reduction planned for your skin and hair.',
    lede: 'Tired of shaving, waxing and razor bumps? Dr. Laura Slack can help you reduce unwanted hair in a safe way.',
    images: {
      hero: IMG + 'laser-hair-1.jpg',
      overview: IMG + 'laser-hair-2.jpg',
      fit: IMG + 'laser-hair-3.jpg',
      alt: {
        hero: 'A woman with smooth skin on her legs',
        overview: 'A laser handpiece used on the underarm',
        fit: 'A provider treating skin with a laser handpiece',
      },
    },
    overview: {
      title: 'Why unwanted hair is a hassle',
      paragraphs: [
        'Shaving, waxing and plucking take time, and the results do not last. They can also cause razor bumps, ingrown hairs and irritated skin.',
        'Some people have thicker or darker hair because of hormones or family history. Laser hair removal targets the pigment in hair to slow future growth. It needs a series of visits, because hair grows in cycles.',
      ],
      cards: [
        {
          title: 'Long-lasting reduction',
          text: 'Over a series of visits, hair often becomes finer, lighter and less dense. Some people need occasional touch-ups.',
        },
        {
          title: 'Planned for your skin and hair',
          text: 'Skin tone, hair color and area all matter. Dr. Slack adjusts settings so treatment is safe and comfortable.',
        },
      ],
    },
    fit: {
      title: 'Does this sound like you?',
      text: 'Laser works best on darker hair. A consultation will tell you how well it may work for you.',
      concerns: [
        'Daily shaving or frequent waxing',
        'Razor bumps and ingrown hairs',
        'Dark hair on the face, lip or chin',
        'Hair on the underarms, bikini line or legs',
        'Hair on the back, chest or arms',
        'Skin that gets irritated from hair removal',
      ],
      goodFit: [
        'You want long-term hair reduction',
        'You can avoid sun and tanning before and after treatment',
        'You can commit to a series of visits',
        'You are not pregnant',
        'You have no active skin infection in the area',
      ],
    },
    benefits: [
      { title: 'Less shaving and waxing', text: 'Most people spend far less time on hair removal after their series.' },
      { title: 'Smoother, calmer skin', text: 'Fewer razor bumps and ingrown hairs over time.' },
      { title: 'Quick visits', text: 'Small areas take minutes, and larger areas take a little longer.' },
      { title: 'Physician-led', text: 'Dr. Slack plans your settings and watches your skin response.' },
    ],
    steps: [
      { title: 'Consultation', text: 'We check your skin and hair, review your health and medicines, and talk about your goals.' },
      { title: 'Prepare', text: 'You avoid sun and tanning, and you shave the area before your visit. We share a simple checklist.' },
      { title: 'Treatment', text: 'You wear eye protection. Pulses of light are applied, with cooling for comfort.' },
      { title: 'Aftercare', text: 'Skin may look pink or feel warm for a short time. We share sun protection and skin care tips.' },
      { title: 'Results', text: 'Visits are spaced several weeks apart. Many people need around six or more visits, and hair thins step by step.' },
    ],
    safety: {
      title: 'Your safety comes first',
      paragraphs: [
        'Lasers are medical devices, so skin type, settings and technique matter. Dr. Slack plans each treatment and may do a test spot first.',
        'Short-lived effects include redness, swelling and tenderness. Less common risks include blisters or color changes in the skin. We explain them before you decide. Light or gray hair may respond less.',
      ],
      items: ['Physician-planned settings', 'Skin and hair assessment', 'Eye protection and cooling', 'Clear aftercare and follow-up'],
    },
    faqs: [
      { q: 'Is laser hair removal permanent?', a: 'It gives long-lasting reduction, not a promise that every hair is gone forever. Some people need touch-ups.' },
      { q: 'Does it hurt?', a: 'Most people feel a quick snap or warmth. Cooling helps, and sensitive areas may feel stronger.' },
      { q: 'How many visits will I need?', a: 'Many people need around six or more, spaced several weeks apart. It depends on the area and your hair.' },
      { q: 'Does it work on light hair?', a: 'Laser targets pigment, so it works best on darker hair. We will tell you honestly if yours may respond less.' },
      { q: 'Can I be treated with a tan?', a: 'A tan raises the risk of side effects. Please avoid sun and tanning, and tell us about recent sun.' },
      { q: 'How do I get started?', a: BOOK + ' We will check your skin and hair and make a plan.' },
    ],
    related: [
      { label: 'All Conditions', href: '/conditions/' },
      { label: 'Laser Hair Removal', href: '/hair-restoration-removal/laser-hair-removal/' },
      { label: 'RF Microneedling', href: '/skin-facial-rejuvenation/rf-microneedling/' },
      { label: 'All Treatments', href: '/treatments/' },
    ],
  },
  {
    slug: 'toenail-fungus',
    group,
    title: 'Toenail Fungus',
    seoTitle: `Toenail Fungus in ${localCity}`,
    description:
      'Care for toenail fungus with Dr. Laura Slack at Imber Medical in St. Simons Island, GA. A careful check first, then options that fit you.',
    lede: 'Thick, yellow or brittle nails are common and can be hard to treat. Dr. Laura Slack starts with a careful check.',
    images: {
      hero: IMG + 'laser-hair-2.jpg',
      overview: IMG + 'laser-hair-3.jpg',
      fit: IMG + 'laser-hair-1.jpg',
      alt: {
        hero: 'A laser handpiece used in a clinic',
        overview: 'A provider using a laser handpiece on skin',
        fit: 'A person with healthy, smooth skin on the legs',
      },
    },
    overview: {
      title: 'What toenail fungus is',
      paragraphs: [
        'Toenail fungus is an infection under or around the nail. It can make nails thick, yellow, brown, cloudy or crumbly. It often starts small and slowly gets worse. Warm, damp shoes and shared showers can raise the risk.',
        'Other nail problems can look the same, such as injury or skin conditions. That is why a doctor should confirm what is going on before treatment. Nails also grow slowly, so any change takes time.',
      ],
      cards: [
        {
          title: 'Confirm it first',
          text: 'Dr. Slack checks the nail and may suggest a test to confirm a fungal infection. The right plan depends on the cause.',
        },
        {
          title: 'Options that fit you',
          text: 'Laser treatment may help some people. It can be used alone or with other care. Results vary, and we explain what is realistic.',
        },
      ],
    },
    fit: {
      title: 'Does this sound like you?',
      text: 'If your nails look different and are not getting better, a check can help you decide what to do next.',
      concerns: [
        'Nails that look yellow, brown or white',
        'Thick nails that are hard to trim',
        'Crumbly or brittle edges',
        'A nail lifting from the nail bed',
        'Odor or discomfort in the shoe',
        'Nails you feel self-conscious about',
      ],
      goodFit: [
        'A provider has confirmed or suspects a fungal infection',
        'You are in good general health',
        'You can commit to several visits',
        'You are willing to follow foot care tips',
        'You understand results take time and vary',
      ],
    },
    benefits: [
      { title: 'A careful check', text: 'We look for the cause so you do not treat the wrong problem.' },
      { title: 'A non-invasive option', text: 'Laser treatment is done in the office with little or no downtime for many people.' },
      { title: 'Clear expectations', text: 'Nails grow slowly. We tell you what to expect and when to check progress.' },
      { title: 'Physician-led', text: 'Dr. Slack plans your care and follows your progress.' },
    ],
    steps: [
      { title: 'Consultation', text: 'We look at your nails and feet, ask about your history and talk about what you have tried.' },
      { title: 'Confirm the cause', text: 'When needed, we suggest a test or refer you for one, so the plan fits the real problem.' },
      { title: 'Your plan', text: 'You get a clear plan with the number of visits and a fair estimate.' },
      { title: 'Treatment', text: 'Treatment is done in the office. Most people feel warmth, and visits are usually short.' },
      { title: 'Follow-up', text: 'A healthy nail grows out slowly, so we check progress over several months and adjust your plan.' },
    ],
    safety: {
      title: 'Your safety comes first',
      paragraphs: [
        'Please see a doctor before you treat a nail, especially if you have diabetes, poor circulation or a weak immune system. These conditions need extra care with foot problems.',
        'Results vary, and the fungus can come back. Mild warmth, redness or tenderness may happen after treatment. We explain the risks and do not promise a cure.',
      ],
      items: ['Physician check first', 'Health and medicine review', 'Honest, realistic expectations', 'Foot care guidance and follow-up'],
    },
    faqs: [
      { q: 'How do I know if it is really fungus?', a: 'Other problems can look the same. A doctor can check the nail and may suggest a test to be sure.' },
      { q: 'Can laser cure toenail fungus?', a: 'It may help some people, but results vary and we cannot promise a cure. We will tell you what is realistic.' },
      { q: 'How long until my nail looks better?', a: 'Nails grow slowly, so it can take many months to see clear new growth.' },
      { q: 'Is it painful?', a: 'Most people feel warmth or mild discomfort. We adjust to keep you comfortable.' },
      { q: 'Can it come back?', a: 'Yes. Good foot care, dry shoes and clean socks help lower the chance.' },
      { q: 'How do I get started?', a: BOOK + ' We will check your nails and talk through your options.' },
    ],
    related: [
      { label: 'All Conditions', href: '/conditions/' },
      { label: 'Laser Hair Removal', href: '/hair-restoration-removal/laser-hair-removal/' },
      { label: 'RF Microneedling', href: '/skin-facial-rejuvenation/rf-microneedling/' },
      { label: 'All Treatments', href: '/treatments/' },
    ],
  },
];
