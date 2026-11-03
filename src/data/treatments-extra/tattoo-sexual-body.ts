/**
 * Tattoo Removal, Sexual Wellness and Body Contouring pages.
 * TODO (Dr. Slack): review all medical wording, devices, timelines and the list of products before launch.
 */
import type { Treatment } from '../treatments';

const localCity = 'St. Simons Island, GA';
const IMG = '/images/treatments/';

export const tattooSexualBody: Treatment[] = [
  {
    slug: 'body-brow-tattoo-removal',
    group: { title: 'Tattoo Removal', href: '/tattoo-removal/' },
    title: 'Body/Brow Tattoo Removal',
    seoTitle: `Body/Brow Tattoo Removal in ${localCity}`,
    description:
      'Tattoo and brow tattoo removal with Dr. Laura Slack at Imber Medical in St. Simons Island, GA. Careful, physician-led care to fade ink you no longer want.',
    lede: 'Fade the ink you no longer want, on the body or the brows. Planned step by step by Dr. Laura Slack.',
    images: {
      hero: IMG + 'tattoo-removal-1.jpg',
      overview: IMG + 'tattoo-removal-2.jpg',
      fit: IMG + 'tattoo-removal-3.jpg',
      alt: {
        hero: 'A woman with clear, healthy skin on her arm',
        overview: 'A provider treating a small area of skin with a handheld device',
        fit: 'A woman with calm, even skin tone',
      },
    },
    overview: {
      title: 'A fresh start for your skin',
      paragraphs: [
        'Tastes change. A tattoo you loved years ago may not fit your life now. Brow tattoos can also fade to a color or shape you do not like.',
        'Tattoo removal uses light energy that breaks the ink into tiny pieces. Your body then clears them away over time. Dr. Slack looks at your skin and your ink first, then plans safe settings for you.',
      ],
      cards: [
        {
          title: 'Body tattoos',
          text: 'Ink in different areas, colors and depths responds in different ways. We plan a series of visits and adjust as we go.',
        },
        {
          title: 'Brow tattoos',
          text: 'The brow area is delicate and close to the eyes. It needs extra care and eye protection. Dr. Slack treats this area with great attention.',
        },
      ],
    },
    fit: {
      title: 'Is tattoo removal right for you?',
      text: 'Many adults can be treated. During your consultation we look at your ink, your skin tone and your health history, and we tell you honestly what to expect.',
      concerns: [
        'A tattoo you no longer like',
        'A faded or uneven tattoo you want to lighten before a cover-up',
        'Brow tattoos that changed color',
        'Brow shape you want to correct',
        'Old ink that looks blurred',
        'A small tattoo you want gone',
      ],
      goodFit: [
        'You are ready for a series of visits',
        'You can protect the area from the sun',
        'You are in good general health',
        'You have no active skin infection in the area',
        'You understand that fading takes time and results vary',
      ],
    },
    benefits: [
      { title: 'Gradual fading', text: 'Ink often becomes lighter with each visit, so you can see progress along the way.' },
      { title: 'Planned for your skin', text: 'Settings are chosen for your skin tone, ink color and the area being treated.' },
      { title: 'Cover-up ready', text: 'Lightening old ink can make a cover-up design easier for your tattoo artist.' },
      { title: 'Physician-led', text: 'Dr. Slack plans your care and checks your skin at each visit.' },
    ],
    steps: [
      { title: 'Consultation', text: 'We look at your tattoo, your skin and your health history, and talk about your goals.' },
      { title: 'Your plan', text: 'You get a clear plan, with the expected number of visits and a fair estimate before we start.' },
      { title: 'Treatment', text: 'Protective eyewear is worn. Short pulses of light are applied to the ink, with cooling for comfort.' },
      { title: 'Aftercare', text: 'The skin may look red or feel tender for a while. We share simple steps for care and sun protection.' },
      { title: 'Healing between visits', text: 'Visits are spaced several weeks apart so your body can clear the ink. We check your progress and adjust your plan.' },
    ],
    safety: {
      title: 'Your safety comes first',
      paragraphs: [
        'Lasers are medical devices, so skin type, settings and technique matter. Dr. Slack plans each treatment with care and may start with a small test area.',
        'Common short-lived effects include redness, swelling and tenderness. Less common risks include blisters, scarring or changes in skin color. Some inks and colors fade less than others. We explain the risks before you decide.',
      ],
      items: ['Physician-planned settings', 'Skin and ink assessment', 'Eye protection for brow treatment', 'Clear aftercare and follow-up'],
    },
    faqs: [
      { q: 'Does it hurt?', a: 'Many people describe a quick snap or a hot-pinch feeling. Cooling helps, and we will tell you what to expect for your area.' },
      { q: 'How many visits will I need?', a: 'It depends on the size, color and age of the ink and on your skin. Most people need a series of visits. Dr. Slack will give you an estimate.' },
      { q: 'Will the tattoo disappear completely?', a: 'Many tattoos fade a lot, but we cannot promise full removal. Some colors and old or deep ink can be harder to clear.' },
      { q: 'Can you treat brow tattoos?', a: 'Yes. The brow area needs special care, and Dr. Slack will talk with you about the risks and what is realistic.' },
      { q: 'How long between visits?', a: 'Visits are usually spaced several weeks apart, so your skin can heal and your body can clear the ink.' },
      { q: 'How do I get started?', a: 'Book a consultation online or call us at 912-268-2103. We will look at your tattoo and make a plan that fits you.' },
    ],
    related: [
      { label: 'Tattoo Removal', href: '/tattoo-removal/' },
      { label: 'Laser Hair Removal', href: '/hair-restoration-removal/laser-hair-removal/' },
      { label: 'Laser Facial', href: '/skin-facial-rejuvenation/laser-facial/' },
      { label: 'All Treatments', href: '/treatments/' },
    ],
  },
  {
    slug: 'male-health',
    group: { title: 'Sexual Wellness', href: '/sexual-wellness/' },
    title: 'Male Health',
    seoTitle: `Male Health in ${localCity}`,
    description:
      'Private, physician-led male health care with Dr. Laura Slack at Imber Medical in St. Simons Island, GA. Support for hormones, vitality and overall well-being.',
    lede: 'Private, respectful care for hormones, energy and vitality. Planned around you by Dr. Laura Slack.',
    images: {
      hero: IMG + 'male-health-1.jpg',
      overview: IMG + 'male-health-2.jpg',
      fit: IMG + 'male-health-3.jpg',
      alt: {
        hero: 'A confident man smiling outdoors',
        overview: 'A man relaxing at home after a workout',
        fit: 'A man talking with a provider during a consultation',
      },
    },
    overview: {
      title: 'Feel like yourself again',
      paragraphs: [
        'Energy, mood, sleep, strength and sexual health are linked. When one slips, others can follow. Many men are not sure where to start, or feel awkward asking.',
        'At Imber Medical, the visit is private and calm. Dr. Slack listens, reviews your history and any lab work, and explains your options in plain words.',
      ],
      cards: [
        {
          title: 'Start with a conversation',
          text: 'We talk about how you feel, what has changed and what you want to improve. There are no rushed answers.',
        },
        {
          title: 'A plan made for you',
          text: 'Your plan may include lab tests, lifestyle support and treatment options when they are right for you. We explain the benefits and the risks.',
        },
      ],
    },
    fit: {
      title: 'Who is male health care for?',
      text: 'It is for adult men who want support with how they feel and function. Your first visit helps us decide what makes sense and what does not.',
      concerns: [
        'Low energy or constant tiredness',
        'Changes in mood or motivation',
        'Poor sleep',
        'Loss of muscle or strength',
        'Changes in sexual health or desire',
        'Wanting a clear check-up of your hormones',
      ],
      goodFit: [
        'You want private, respectful care',
        'You are open to lab testing',
        'You can follow a plan and return for check-ins',
        'You will share your full health history',
        'You are open to lifestyle changes as part of care',
      ],
    },
    benefits: [
      { title: 'Private and comfortable', text: 'A quiet visit with time to talk. No judgment and no rush.' },
      { title: 'Clear next steps', text: 'You leave knowing what we found and what we suggest.' },
      { title: 'Whole-person care', text: 'We look at sleep, stress, nutrition and activity as well as hormones.' },
      { title: 'Physician-led', text: 'Dr. Slack reviews your history and follows your progress over time.' },
    ],
    steps: [
      { title: 'Consultation', text: 'We talk about your symptoms, health history and goals in a private setting.' },
      { title: 'Testing', text: 'When needed, we order lab tests so your plan is based on facts, not guesses.' },
      { title: 'Your plan', text: 'Dr. Slack reviews the results with you and suggests options that fit your health and goals.' },
      { title: 'Start care', text: 'If treatment is right for you, we explain how it works, what to expect and how we will watch your safety.' },
      { title: 'Follow-up', text: 'We check in, review how you feel and adjust your plan as needed.' },
    ],
    safety: {
      title: 'Your safety comes first',
      paragraphs: [
        'Men’s health treatments are not right for everyone. Dr. Slack reviews your history, medicines and lab results before suggesting any treatment.',
        'Some options need regular monitoring. We explain the possible benefits and risks, and we tell you if another approach, or a visit to another specialist, would serve you better.',
      ],
      items: ['Full history and medication review', 'Lab testing when needed', 'Regular monitoring', 'Honest advice and referrals when needed'],
    },
    faqs: [
      { q: 'Is my visit private?', a: 'Yes. Your visit is held in a private room, and your health information is protected.' },
      { q: 'Do I need blood tests?', a: 'Often yes. Lab tests help us understand what is going on, so your plan is based on facts.' },
      { q: 'What treatments might be suggested?', a: 'It depends on your history and results. Options can include lifestyle support, hormone care or other therapies. We only suggest what makes sense for you.' },
      { q: 'How long until I feel a difference?', a: 'It varies from person to person. We will tell you what is realistic and check your progress at follow-up visits.' },
      { q: 'Will I need to stay on treatment?', a: 'Some plans are ongoing, and some are short. Dr. Slack reviews this with you at each step.' },
      { q: 'How do I get started?', a: 'Book a consultation online or call us at 912-268-2103. We will make a private plan that fits you.' },
    ],
    related: [
      { label: 'Female Health (Vaginal Rejuv)', href: '/sexual-wellness/female-health-vaginal-rejuv/' },
      { label: 'Sexual Wellness', href: '/sexual-wellness/' },
      { label: 'Bioidentical Hormone Replacement Therapy (BHRT)', href: '/wellness-medical-weight-loss/bioidentical-hormone-replacement-therapy-bhrt/' },
      { label: 'Peptide Therapy', href: '/wellness-medical-weight-loss/peptide-therapy/' },
    ],
  },
  {
    slug: 'female-health-vaginal-rejuv',
    group: { title: 'Sexual Wellness', href: '/sexual-wellness/' },
    title: 'Female Health (Vaginal Rejuv)',
    seoTitle: `Female Health & Vaginal Rejuvenation in ${localCity}`,
    description:
      'Private, physician-led female health care and vaginal rejuvenation with Dr. Laura Slack at Imber Medical in St. Simons Island, GA, including CO2 laser FemiLift.',
    lede: 'Private, gentle care for comfort, confidence and intimate wellness. Planned around you by Dr. Laura Slack.',
    images: {
      hero: IMG + 'female-health-1.jpg',
      overview: IMG + 'female-health-2.jpg',
      fit: IMG + 'female-health-3.jpg',
      alt: {
        hero: 'A woman smiling with calm confidence',
        overview: 'A woman relaxing at home with a cup of tea',
        fit: 'A woman talking with a provider during a consultation',
      },
    },
    overview: {
      title: 'Comfort and confidence, in private',
      paragraphs: [
        'Childbirth, hormone changes and aging can affect comfort, dryness, and bladder control. Many women live with these changes and do not talk about them.',
        'At Imber Medical, we make it easy to start the conversation. Dr. Slack listens, explains your options in plain words, and plans care that suits your body and your goals.',
      ],
      cards: [
        {
          title: 'CO2 laser FemiLift',
          text: 'FemiLift is a gentle, in-office CO2 laser treatment. It is designed to support the health and comfort of the vaginal tissue. Dr. Slack will explain if it is right for you.',
        },
        {
          title: 'Whole-body view',
          text: 'Intimate health is linked to hormones and overall health. Your plan may include other care, such as hormone support, when it makes sense.',
        },
      ],
    },
    fit: {
      title: 'Is female health care right for you?',
      text: 'Many women are good candidates for a consultation. We review your health history and exam needs first, and we tell you honestly what may help.',
      concerns: [
        'Dryness or discomfort',
        'Changes after childbirth',
        'Changes during or after menopause',
        'Mild bladder leaks with coughing or laughing',
        'Feeling less confident with intimacy',
        'Wanting a private, professional place to ask questions',
      ],
      goodFit: [
        'You want private, respectful care',
        'You are not pregnant',
        'You have no active infection',
        'You can attend a series of visits',
        'You will share your full health history',
      ],
    },
    benefits: [
      { title: 'Private and gentle', text: 'A calm setting, time to talk and care that respects your comfort at every step.' },
      { title: 'In-office, little downtime', text: 'Laser visits are short, and many women return to normal activities soon after.' },
      { title: 'No cuts or surgery', text: 'Treatment is non-surgical, so there are no incisions.' },
      { title: 'Physician-led', text: 'Dr. Slack plans your care and follows your progress.' },
    ],
    steps: [
      { title: 'Consultation', text: 'We talk about your symptoms, health history and goals in a private room.' },
      { title: 'Your plan', text: 'Dr. Slack explains your options, the number of visits and a fair estimate before anything begins.' },
      { title: 'Treatment', text: 'Treatment is done in the office. We explain each step, and we stop or adjust if you feel uncomfortable.' },
      { title: 'Aftercare', text: 'We share simple guidance for the days after treatment, including what to avoid for a short time.' },
      { title: 'Follow-up', text: 'We check in on how you feel and decide if more visits or other care would help.' },
    ],
    safety: {
      title: 'Your safety comes first',
      paragraphs: [
        'Laser treatment is not right for everyone. Dr. Slack reviews your history, medicines and any current symptoms first, and may suggest an exam or other care before treatment.',
        'Mild redness, warmth or discharge can happen for a short time. Less common risks exist, and we explain them before you decide. Results vary from person to person.',
      ],
      items: ['Private consultation and history review', 'Check for infection or other conditions', 'Clear aftercare steps', 'Honest expectations'],
    },
    faqs: [
      { q: 'Is it private?', a: 'Yes. Your visit takes place in a private room, and your health information is protected.' },
      { q: 'Does it hurt?', a: 'Most women describe mild discomfort or warmth. We explain each step, and you can tell us to pause at any time.' },
      { q: 'How many visits will I need?', a: 'It depends on your symptoms and goals. Many plans use a short series of visits. Dr. Slack will give you a clear plan.' },
      { q: 'Is there downtime?', a: 'Often very little. We will share what to avoid for a short time after treatment.' },
      { q: 'Can it help after menopause?', a: 'It may help with comfort for some women. Dr. Slack will talk with you about whether laser, hormone support or both could help.' },
      { q: 'How do I get started?', a: 'Book a consultation online or call us at 912-268-2103. We will make a private plan that fits you.' },
    ],
    related: [
      { label: 'Male Health', href: '/sexual-wellness/male-health/' },
      { label: 'Sexual Wellness', href: '/sexual-wellness/' },
      { label: 'Bioidentical Hormone Replacement Therapy (BHRT)', href: '/wellness-medical-weight-loss/bioidentical-hormone-replacement-therapy-bhrt/' },
      { label: 'RF Microneedling', href: '/skin-facial-rejuvenation/rf-microneedling/' },
    ],
  },
  {
    slug: 'fat-reduction-body-contouring',
    group: { title: 'Body Contouring & Sculpting', href: '/body-contouring-sculpting/' },
    title: 'Fat Reduction Body Contouring',
    seoTitle: `Fat Reduction Body Contouring in ${localCity}`,
    description:
      'Non-surgical fat reduction and body contouring with Dr. Laura Slack at Imber Medical in St. Simons Island, GA, using devices such as truSculpt iD and Emsculpt.',
    lede: 'Shape stubborn areas without surgery. Body contouring plans are made for you by Dr. Laura Slack.',
    images: {
      hero: IMG + 'body-contouring-1.jpg',
      overview: IMG + 'body-contouring-2.jpg',
      fit: IMG + 'body-contouring-3.jpg',
      alt: {
        hero: 'A woman with a toned, healthy midsection',
        overview: 'A provider using a handheld device on a patient’s abdomen',
        fit: 'A fit man and woman after exercise',
      },
    },
    overview: {
      title: 'Sculpt, tone and refine',
      paragraphs: [
        'Diet and exercise are the base of a healthy body. Still, some areas can hold on to fat or feel soft, no matter how hard you work.',
        'Non-surgical body contouring uses energy-based devices to target those areas. We offer options such as truSculpt iD for fat reduction and Emsculpt for muscle toning. Dr. Slack helps you choose what fits your goals and your body.',
      ],
      cards: [
        {
          title: 'Fat reduction',
          text: 'Some devices use controlled heat to target fat cells in a chosen area. Your body clears them over time. This is not a weight loss treatment.',
        },
        {
          title: 'Muscle toning',
          text: 'Some devices use energy to cause deep muscle contractions. This can help strengthen and tone areas like the abdomen and buttocks.',
        },
      ],
    },
    fit: {
      title: 'Is body contouring right for you?',
      text: 'It is best for people near their goal weight who want to refine one or more areas. During your consultation we look at your body and tell you honestly what to expect.',
      concerns: [
        'Stubborn belly fat',
        'Love handles or flanks',
        'Soft areas on the thighs',
        'Upper arms and back',
        'Wanting more tone in the abdomen',
        'Wanting a lifted look in the buttocks',
      ],
      goodFit: [
        'You are near your goal weight',
        'You want a non-surgical option',
        'You are in good general health',
        'You are not pregnant',
        'You understand that results build over time and vary',
      ],
    },
    benefits: [
      { title: 'Non-surgical', text: 'No cuts, no general anesthesia and no long recovery.' },
      { title: 'Little downtime', text: 'Most people return to normal activities soon after a visit.' },
      { title: 'Targeted care', text: 'We treat the exact areas that bother you.' },
      { title: 'Physician-led', text: 'Dr. Slack plans your treatment and follows your progress.' },
    ],
    steps: [
      { title: 'Consultation', text: 'We look at your body, talk about your goals and review your health history.' },
      { title: 'Your plan', text: 'We choose the right device and areas. You get a clear plan and a fair estimate.' },
      { title: 'Treatment', text: 'The device is applied to the area. Most people feel warmth or a strong tightening feeling, depending on the device.' },
      { title: 'Aftercare', text: 'You can usually go back to your day. We share simple steps, such as drinking water and staying active.' },
      { title: 'Results', text: 'Changes build slowly over the weeks and months after treatment. We review your progress and plan any next steps.' },
    ],
    safety: {
      title: 'Your safety comes first',
      paragraphs: [
        'Body contouring is not for everyone. Dr. Slack reviews your history and medicines, and checks whether another approach would suit you better.',
        'Common short-term effects include redness, tenderness, swelling or muscle soreness. Less common effects exist, and we explain them first. Results vary, and a healthy lifestyle helps them last.',
      ],
      items: ['Physician review before treatment', 'Right device for your goal', 'Clear aftercare steps', 'Honest, realistic expectations'],
    },
    faqs: [
      { q: 'Is body contouring a weight loss treatment?', a: 'No. It helps refine and shape specific areas. It does not replace healthy habits or medical weight loss care.' },
      { q: 'Does it hurt?', a: 'Most people feel warmth, pressure or strong muscle contractions, depending on the device. We adjust for comfort.' },
      { q: 'How many visits will I need?', a: 'It depends on the device and your goals. Dr. Slack will give you a clear plan at your consultation.' },
      { q: 'When will I see results?', a: 'Changes are gradual. Many people notice them over several weeks to months. Results vary from person to person.' },
      { q: 'Is there downtime?', a: 'Usually very little. Most people return to normal activities right away.' },
      { q: 'How do I get started?', a: 'Book a consultation online or call us at 912-268-2103. We will look at your goals and make a plan that fits you.' },
    ],
    related: [
      { label: 'Jaw Contouring', href: '/body-contouring-sculpting/jaw-contouring/' },
      { label: 'Body Contouring & Sculpting', href: '/body-contouring-sculpting/' },
      { label: 'Medical-Assisted Weight Loss (GLP-1)(GLP-3)', href: '/wellness-medical-weight-loss/medical-assisted-weight-loss-glp-1-glp-3/' },
      { label: 'RF Microneedling', href: '/skin-facial-rejuvenation/rf-microneedling/' },
    ],
  },
  {
    slug: 'jaw-contouring',
    group: { title: 'Body Contouring & Sculpting', href: '/body-contouring-sculpting/' },
    title: 'Jaw Contouring',
    seoTitle: `Jaw Contouring in ${localCity}`,
    description:
      'Non-surgical jaw contouring with Dr. Laura Slack at Imber Medical in St. Simons Island, GA. A more defined jawline and lower face, planned around your features.',
    lede: 'A cleaner, more defined jawline without surgery. Planned for your face by Dr. Laura Slack.',
    images: {
      hero: IMG + 'jaw-contouring-1.jpg',
      overview: IMG + 'jaw-contouring-2.jpg',
      fit: IMG + 'jaw-contouring-3.jpg',
      alt: {
        hero: 'A woman with a defined jawline in profile',
        overview: 'A man with a strong, defined jawline',
        fit: 'A woman touching her jaw with a calm expression',
      },
    },
    overview: {
      title: 'Define the lower face',
      paragraphs: [
        'The jawline shapes how the whole face looks. Over time, volume shifts, skin loosens and the line between face and neck can soften.',
        'Jaw contouring is a non-surgical way to refine this area. Dr. Slack studies your face from every angle, then suggests the treatments that fit your features and your goals.',
      ],
      cards: [
        {
          title: 'Define',
          text: 'Careful placement of treatment can add structure along the jaw and chin, so the lower face looks more balanced.',
        },
        {
          title: 'Refine',
          text: 'For some faces, the goal is a slimmer or smoother lower face. Dr. Slack explains what can help and what cannot.',
        },
      ],
    },
    fit: {
      title: 'Is jaw contouring right for you?',
      text: 'Many adults are good candidates. During your consultation we look at your bone structure, skin and goals, and we tell you honestly what is possible without surgery.',
      concerns: [
        'A soft or undefined jawline',
        'Early jowls',
        'A weak or small chin',
        'A heavy or square lower face',
        'Fullness under the chin',
        'Wanting more balance between the jaw and the cheeks',
      ],
      goodFit: [
        'You want a non-surgical option',
        'You want natural-looking results',
        'You are in good general health',
        'You are not pregnant or breastfeeding',
        'You are open to a plan with more than one step',
      ],
    },
    benefits: [
      { title: 'Non-surgical', text: 'No cuts and no general anesthesia. Many people are back to normal activities soon after.' },
      { title: 'Natural balance', text: 'The goal is a face that looks like you, with better structure and balance.' },
      { title: 'Planned for your face', text: 'We look at your whole face, not only the jaw.' },
      { title: 'Physician-led', text: 'Dr. Slack plans and performs your treatment and follows up after.' },
    ],
    steps: [
      { title: 'Consultation', text: 'We look at your face from the front and the side, review your history and talk about what you want to change.' },
      { title: 'Your plan', text: 'Dr. Slack suggests the right options for your face, such as filler, toxin or skin tightening. You get a clear plan and estimate.' },
      { title: 'Treatment', text: 'The area is prepared and treated with care. Visits are usually short.' },
      { title: 'Aftercare', text: 'Some swelling, redness or small bruises can happen. We share simple tips to help you heal.' },
      { title: 'Review', text: 'We check your results and decide whether a small touch-up would help.' },
    ],
    safety: {
      title: 'Your safety comes first',
      paragraphs: [
        'Every treatment around the face needs a clear understanding of facial anatomy. Dr. Slack plans carefully and uses small steps so results stay natural.',
        'Common short-term effects include swelling, redness and bruising. Less common risks exist, and we explain them before you decide. Results vary from person to person.',
      ],
      items: ['Physician-led planning', 'Detailed facial assessment', 'Small, careful steps', 'Clear aftercare and follow-up'],
    },
    faqs: [
      { q: 'What treatments can be used for the jaw?', a: 'It depends on your face. Options can include filler for structure, toxin for a heavy lower face, and skin tightening. Dr. Slack will suggest what fits you.' },
      { q: 'Will it look natural?', a: 'That is our goal. We plan in small steps and aim for balance, not change for the sake of change.' },
      { q: 'Does it hurt?', a: 'Most people feel mild discomfort. We use comfort measures, and visits are short.' },
      { q: 'Is there downtime?', a: 'Usually little. Some swelling or bruising can happen for a short time.' },
      { q: 'How long do results last?', a: 'It depends on the treatment used. We will explain how long each option may last and when a touch-up may help.' },
      { q: 'How do I get started?', a: 'Book a consultation online or call us at 912-268-2103. We will look at your face and make a plan that fits you.' },
    ],
    related: [
      { label: 'Fat Reduction Body Contouring', href: '/body-contouring-sculpting/fat-reduction-body-contouring/' },
      { label: 'Body Contouring & Sculpting', href: '/body-contouring-sculpting/' },
      { label: 'Facial Slimming (Face, Neck, Jaw)', href: '/injectables-toxins/facial-slimming-face-neck-jaw/' },
      { label: 'RF Microneedling', href: '/skin-facial-rejuvenation/rf-microneedling/' },
    ],
  },
];
