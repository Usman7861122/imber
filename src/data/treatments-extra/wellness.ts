import type { Treatment } from '../treatments';

const localCity = 'St. Simons Island, GA';
const IMG = '/images/treatments/';
const group = { title: 'Wellness & Medical Weight Loss', href: '/wellness-medical-weight-loss/' };
const base = '/wellness-medical-weight-loss/';

/** TODO (Dr. Slack): review all medical wording before launch. These are prescription or regulated care. */
export const wellness: Treatment[] = [
  {
    slug: 'bioidentical-hormone-replacement-therapy-bhrt',
    group,
    title: 'Bioidentical Hormone Replacement Therapy (BHRT)',
    seoTitle: `Bioidentical Hormone Replacement Therapy (BHRT) in ${localCity}`,
    description:
      'Bioidentical hormone replacement therapy (BHRT) with Dr. Laura Slack at Imber Medical in St. Simons Island, GA. Careful testing, a personal plan and regular follow-up.',
    lede: 'Hormone care built around your symptoms, your labs and your health history. Planned and monitored by Dr. Laura Slack.',
    images: {
      hero: IMG + 'bhrt-1.jpg',
      overview: IMG + 'bhrt-2.jpg',
      fit: IMG + 'bhrt-3.jpg',
      alt: {
        hero: 'A smiling woman with short grey hair enjoying a walk in the park',
        overview: 'A woman with glasses holding a yoga mat on a sunny path',
        fit: 'A confident woman in casual clothes standing outdoors',
      },
    },
    overview: {
      title: 'Support your hormones, not just your symptoms',
      paragraphs: [
        'Hormone levels can drop with age, menopause or certain health conditions. That can affect sleep, mood, energy and how you feel day to day.',
        'BHRT uses hormones that match the ones your body makes. Dr. Slack starts with a full evaluation and, when it makes sense, lab work. Then she builds a plan that fits you and changes it as you go.',
      ],
      cards: [
        {
          title: 'A plan made for you',
          text: 'Your plan may include bioidentical estrogen, progesterone or testosterone. It depends on your symptoms, your labs and your health history.',
        },
        {
          title: 'Checked along the way',
          text: 'Follow-up visits let us see how you feel and adjust your plan. Good care does not stop after the first visit.',
        },
      ],
    },
    fit: {
      title: 'Is BHRT right for you?',
      text: 'BHRT is not right for everyone. Dr. Slack decides if it is a good fit after a health review and, when needed, lab work.',
      concerns: [
        'Hot flashes and night sweats',
        'Poor sleep or waking often',
        'Mood changes',
        'Low energy or ongoing tiredness',
        'Low libido',
        'Brain fog or loss of muscle',
      ],
      goodFit: [
        'You have symptoms that affect daily life',
        'You are in perimenopause or menopause, or have confirmed low testosterone',
        'You are open to lab testing and a full health review',
        'You can come to follow-up visits',
        'You want to talk through benefits and risks first',
      ],
    },
    benefits: [
      { title: 'Personal plan', text: 'Your care is based on your symptoms and your labs, not a one-size-fits-all dose.' },
      { title: 'Symptom support', text: 'Many people look for better sleep, steadier mood and more energy over time.' },
      { title: 'Ongoing monitoring', text: 'Regular follow-up helps keep your plan safe and up to date.' },
      { title: 'Physician-led', text: 'Dr. Slack reviews your history and talks with you about risks and options.' },
    ],
    steps: [
      { title: 'Consultation', text: 'We talk about your symptoms, health history, medicines and goals.' },
      { title: 'Testing', text: 'When it makes sense, we use lab work to understand your hormone levels.' },
      { title: 'Your plan', text: 'Dr. Slack explains your options, the possible benefits and the risks, and builds a plan with you.' },
      { title: 'Start care', text: 'You begin your plan and learn how to use it. We answer your questions along the way.' },
      { title: 'Follow-up', text: 'We check how you feel and review labs when needed. Some people notice changes within weeks, and others take a few months.' },
    ],
    safety: {
      title: 'Your safety comes first',
      paragraphs: [
        'Hormone therapy needs proper screening, dosing and supervision. Bioidentical does not automatically mean safer, so we talk about benefits and risks openly.',
        'Dr. Slack will tell you if BHRT is not a good choice for you. Results vary from person to person.',
      ],
      items: ['Health history and medicine review', 'Lab testing when appropriate', 'Risks and benefits explained', 'Regular monitoring'],
    },
    faqs: [
      { q: 'What does bioidentical mean?', a: 'Bioidentical hormones match the hormones your body makes. This does not mean they are risk-free, so we review your health carefully.' },
      { q: 'Who can have BHRT?', a: 'It may help women with menopause or perimenopause symptoms and men with confirmed low testosterone. Dr. Slack decides after a health review.' },
      { q: 'Do I need lab tests?', a: 'Often, yes. Labs and your symptoms help guide your plan. Dr. Slack will tell you what is needed.' },
      { q: 'When will I feel a change?', a: 'Some people notice changes within weeks. Sleep, energy and focus often build over the first few months.' },
      { q: 'Will I need follow-up visits?', a: 'Yes. We check your progress and adjust your plan over time.' },
      { q: 'How do I get started?', a: 'Book a consultation online or call us at 912-268-2103. We will review your symptoms and health history first.' },
    ],
    related: [
      { label: 'Peptide Therapy', href: base + 'peptide-therapy/' },
      { label: 'Medical-Assisted Weight Loss (GLP-1)(GLP-3)', href: base + 'medical-assisted-weight-loss-glp-1-glp-3/' },
      { label: 'Wellness & Medical Weight Loss', href: base },
      { label: 'Male Health', href: '/sexual-wellness/male-health/' },
    ],
  },
  {
    slug: 'peptide-therapy',
    group,
    title: 'Peptide Therapy',
    seoTitle: `Peptide Therapy in ${localCity}`,
    description:
      'Peptide therapy guided by Dr. Laura Slack at Imber Medical in St. Simons Island, GA. Individual plans, a full health review and careful follow-up.',
    lede: 'Peptide options chosen with care for your goals. Every plan is individual and guided by Dr. Laura Slack and our medical team.',
    images: {
      hero: IMG + 'peptide-1.jpg',
      overview: IMG + 'peptide-2.jpg',
      fit: IMG + 'peptide-3.jpg',
      alt: {
        hero: 'A doctor talking with a patient in a bright consulting room',
        overview: 'A smiling woman with curly hair during a check-up',
        fit: 'A friendly doctor with glasses talking to a patient',
      },
    },
    overview: {
      title: 'Small signals, guided with care',
      paragraphs: [
        'Peptides are short chains of amino acids. They act as signals in the body and can play a part in things like metabolism, recovery and hormone balance.',
        'There are many peptides, and they are not all the same. Our medical team helps you understand your options and picks only what fits your goals and your health.',
      ],
      cards: [
        {
          title: 'Many possible goals',
          text: 'People ask about peptides for weight management, recovery, sleep, focus, sexual wellness and aesthetic goals. We talk about what is realistic for you.',
        },
        {
          title: 'Individual plans',
          text: 'There is no standard plan. Your plan depends on your goals, your history and your health review.',
        },
      ],
    },
    fit: {
      title: 'Is peptide therapy right for you?',
      text: 'Peptide therapy is not right for everyone. Dr. Slack decides if it fits after a full health review.',
      concerns: [
        'Slow recovery after exercise',
        'Trouble managing weight',
        'Low energy',
        'Poor sleep',
        'Brain fog or low focus',
        'Wanting extra support for healthy aging',
      ],
      goodFit: [
        'You have clear goals you want to talk about',
        'You are open to a full health review',
        'You want a physician to guide the choice',
        'You can follow directions closely',
        'You understand that results vary',
      ],
    },
    benefits: [
      { title: 'Tailored choices', text: 'We pick options that match your goals and your health, not a trend.' },
      { title: 'Clear guidance', text: 'You learn what each option is, how it is used and what to expect.' },
      { title: 'Medical oversight', text: 'Our medical team reviews your history and checks in with you.' },
      { title: 'Honest talk', text: 'We tell you what is known, what is not, and what is realistic.' },
    ],
    steps: [
      { title: 'Consultation', text: 'We talk about your goals, health history, medicines and any past care.' },
      { title: 'Health review', text: 'Dr. Slack checks if peptide therapy is safe for you and if testing is needed.' },
      { title: 'Your plan', text: 'You get a plan with clear directions and a fair talk about benefits and limits.' },
      { title: 'Start', text: 'You begin your plan and learn how to use it. We answer questions along the way.' },
      { title: 'Follow-up', text: 'We check how you feel and adjust or stop the plan if needed.' },
    ],
    safety: {
      title: 'Your safety comes first',
      paragraphs: [
        'Peptides should be used only with guidance from a qualified healthcare professional. We review your health, your medicines and any allergies before we start.',
        'We do not promise results. Your plan is individual, and we will be clear about what is known and what is still being studied.',
      ],
      items: ['Full health and medicine review', 'Physician-guided choices', 'Clear directions for use', 'Follow-up and plan changes'],
    },
    faqs: [
      { q: 'What are peptides?', a: 'Peptides are short chains of amino acids that act as signals in the body. Different peptides do different things.' },
      { q: 'What can peptide therapy help with?', a: 'People ask about weight, recovery, sleep, focus, sexual wellness and aesthetic goals. Results vary, and we will talk about what is realistic.' },
      { q: 'Is it right for everyone?', a: 'No. Dr. Slack decides after a health review. Some people should not use certain peptides.' },
      { q: 'Is one plan the same as another?', a: 'No. Every plan is individual and based on your goals and health.' },
      { q: 'Will I need follow-up?', a: 'Yes. We check your progress and change the plan when needed.' },
      { q: 'How do I get started?', a: 'Book a consultation online or call us at 912-268-2103. We will start with a health review and a talk about your goals.' },
    ],
    related: [
      { label: 'Bioidentical Hormone Replacement Therapy (BHRT)', href: base + 'bioidentical-hormone-replacement-therapy-bhrt/' },
      { label: 'Methylene Blue', href: base + 'methylene-blue/' },
      { label: 'Wellness & Medical Weight Loss', href: base },
      { label: 'Regenerative Cells', href: '/skin-facial-rejuvenation/regenerative-cells/' },
    ],
  },
  {
    slug: 'methylene-blue',
    group,
    title: 'Methylene Blue',
    seoTitle: `Methylene Blue in ${localCity}`,
    description:
      'Methylene blue wellness care guided by Dr. Laura Slack at Imber Medical in St. Simons Island, GA. A careful health review and an individual plan.',
    lede: 'A careful, physician-guided option in our wellness care. Dr. Laura Slack checks your health first and builds an individual plan.',
    images: {
      hero: IMG + 'methylene-blue-1.jpg',
      overview: IMG + 'methylene-blue-2.jpg',
      fit: IMG + 'methylene-blue-3.jpg',
      alt: {
        hero: 'A relaxed woman in a warm sweater and scarf enjoying the autumn woods',
        overview: 'A joyful woman with raised arms in the city sunshine',
        fit: 'A woman enjoying fresh air with her face turned to the sky',
      },
    },
    overview: {
      title: 'A careful approach to wellness',
      paragraphs: [
        'Methylene blue is a compound that has been used in medicine for a long time. In wellness care, people ask about it for energy and focus.',
        'It is not for everyone, and it can interact with some medicines. Dr. Slack reviews your health history and medicines first, and then decides with you if it is a good fit.',
      ],
      cards: [
        {
          title: 'Health review first',
          text: 'We look at your history and medicines before any plan. Some medicines and conditions do not mix with methylene blue.',
        },
        {
          title: 'Individual plan',
          text: 'Your plan depends on your goals and your health. We tell you what to expect and what is not known.',
        },
      ],
    },
    fit: {
      title: 'Is methylene blue right for you?',
      text: 'This option is not right for everyone. Dr. Slack decides after a careful review of your health and your medicines.',
      concerns: [
        'Low energy that affects your day',
        'Trouble focusing',
        'Wanting extra support for healthy aging',
        'Questions about methylene blue from your own reading',
        'Wanting a physician to guide the choice',
        'Wanting to compare options before you decide',
      ],
      goodFit: [
        'You are willing to share your full medicine list',
        'You want to hear the benefits and the risks',
        'You can follow directions closely',
        'You are open to follow-up visits',
        'You understand that results vary',
      ],
    },
    benefits: [
      { title: 'Careful screening', text: 'We check for medicines and conditions that could make it unsafe for you.' },
      { title: 'Clear information', text: 'You learn what is known, what is not known and what is realistic.' },
      { title: 'Individual plan', text: 'Your plan fits your goals and your health.' },
      { title: 'Physician-led', text: 'Dr. Slack guides each step and checks in with you.' },
    ],
    steps: [
      { title: 'Consultation', text: 'We talk about your goals, health history and every medicine and supplement you take.' },
      { title: 'Safety check', text: 'Dr. Slack looks for conditions and medicine combinations that could be a problem.' },
      { title: 'Your plan', text: 'If it is a fit, you get an individual plan with clear directions.' },
      { title: 'Start', text: 'You begin your plan and know who to call if you have questions.' },
      { title: 'Follow-up', text: 'We check how you feel and adjust or stop the plan if needed.' },
    ],
    safety: {
      title: 'Your safety comes first',
      paragraphs: [
        'Methylene blue can interact with some medicines, including certain medicines for mood. Please tell us everything you take, including supplements.',
        'We do not promise results, and we do not claim it treats any disease. We will tell you if another option fits you better.',
      ],
      items: ['Full medicine and supplement review', 'Screening for health conditions', 'Clear directions for use', 'Follow-up and plan changes'],
    },
    faqs: [
      { q: 'What is methylene blue?', a: 'It is a compound that has been used in medicine for many years. In wellness care, people ask about it for energy and focus.' },
      { q: 'Is it safe for everyone?', a: 'No. It can interact with some medicines and may not be right for some health conditions. Dr. Slack decides after a health review.' },
      { q: 'Will it cure a health problem?', a: 'We do not make that claim. Our goal is careful wellness support, and we will be honest about what is known.' },
      { q: 'What should I tell you before we start?', a: 'Tell us about all medicines, supplements, health conditions and allergies. This helps us keep you safe.' },
      { q: 'Will I need follow-up?', a: 'Yes. We check how you feel and adjust or stop the plan if needed.' },
      { q: 'How do I get started?', a: 'Book a consultation online or call us at 912-268-2103. We will begin with a health and medicine review.' },
    ],
    related: [
      { label: 'Peptide Therapy', href: base + 'peptide-therapy/' },
      { label: 'IV Therapy', href: base + 'iv-therapy/' },
      { label: 'Wellness & Medical Weight Loss', href: base },
      { label: 'All Treatments', href: '/treatments/' },
    ],
  },
  {
    slug: 'iv-therapy',
    group,
    title: 'IV Therapy',
    seoTitle: `IV Therapy in ${localCity}`,
    description:
      'IV therapy with vitamins, minerals and fluids at Imber Medical in St. Simons Island, GA. Customized by a medical provider and guided by Dr. Laura Slack.',
    lede: 'Fluids, vitamins and minerals delivered straight into the bloodstream. Customized for how you feel, with a medical provider by your side.',
    images: {
      hero: IMG + 'iv-therapy-1.jpg',
      overview: IMG + 'iv-therapy-2.jpg',
      fit: IMG + 'iv-therapy-3.jpg',
      alt: {
        hero: 'A woman resting in a chair during an IV infusion',
        overview: 'A woman relaxing back in a comfortable infusion chair',
        fit: 'A close view of an IV line in a patient arm',
      },
    },
    overview: {
      title: 'Hydration and nutrients, made for you',
      paragraphs: [
        'IV therapy delivers fluids, vitamins and minerals straight into the bloodstream. This can support hydration, energy and overall wellness.',
        'Every treatment is customized. We talk about how you feel, check for health concerns, and pick the blend that fits you. A qualified medical provider places the IV and stays with you.',
      ],
      cards: [
        {
          title: 'Choose your focus',
          text: 'Our menu includes blends for immune and recovery support, skin, hair and nails, energy and metabolism, and a reset after a rough night.',
        },
        {
          title: 'A calm visit',
          text: 'Plan for about an hour in total. The infusion itself usually takes about 25 to 40 minutes while you relax.',
        },
      ],
    },
    fit: {
      title: 'Is IV therapy right for you?',
      text: 'IV therapy is not right for everyone. A provider checks your health and medicines first.',
      concerns: [
        'Feeling run down or low on energy',
        'Wanting faster hydration',
        'Recovery after a hard workout or a rough night',
        'Extra support before travel or cold and flu season',
        'Wanting support for skin, hair and nails',
        'Getting ready for a big event',
      ],
      goodFit: [
        'You want a blend picked for how you feel',
        'You can share your health history and medicines',
        'You have about an hour for your visit',
        'You are comfortable with an IV',
        'You understand that results vary',
      ],
    },
    benefits: [
      { title: 'Direct delivery', text: 'Fluids and nutrients go straight into the bloodstream.' },
      { title: 'Customized blends', text: 'We pick a blend based on how you feel and what you need.' },
      { title: 'Comfortable visit', text: 'A quiet chair, a trained provider and about an hour of your time.' },
      { title: 'Medical oversight', text: 'A provider checks your health first and stays with you during treatment.' },
    ],
    steps: [
      { title: 'Check-in', text: 'We talk about how you feel, your health history, your medicines and any allergies.' },
      { title: 'Choose your blend', text: 'Your provider suggests a blend that fits you from our menu.' },
      { title: 'IV placement', text: 'A qualified provider places a small IV in your arm. You may feel a quick pinch.' },
      { title: 'Relax', text: 'The infusion usually takes about 25 to 40 minutes. You can rest, read or work quietly.' },
      { title: 'Aftercare', text: 'We check on you when it is done and share simple tips, like drinking water. Mild bruising at the IV site can happen.' },
    ],
    safety: {
      title: 'Your safety comes first',
      paragraphs: [
        'IV therapy is medical care. We screen for health conditions and medicines that could make a blend unsafe for you before we start.',
        'Small effects such as bruising or soreness at the IV site can happen. We do not claim IV therapy treats or cures any disease.',
      ],
      items: ['Health and medicine screening', 'Qualified medical provider', 'Blends chosen for you', 'Monitoring during your visit'],
    },
    faqs: [
      { q: 'How long does a visit take?', a: 'Plan for about an hour. The infusion itself usually takes about 25 to 40 minutes.' },
      { q: 'What blends do you offer?', a: 'Our menu includes blends for immune and recovery support, skin, hair and nails, energy and metabolism, and a reset after a rough night. Each can be customized.' },
      { q: 'Is IV therapy safe for everyone?', a: 'No. A provider reviews your health, medicines and allergies first and may suggest a different plan.' },
      { q: 'Does it hurt?', a: 'You may feel a quick pinch when the IV goes in. Most people then relax comfortably.' },
      { q: 'How often should I come?', a: 'It depends on your goals. Your provider will suggest a plan that makes sense for you.' },
      { q: 'How do I get started?', a: 'Book online or call us at 912-268-2103. We will go over your health and pick a blend with you.' },
    ],
    related: [
      { label: 'Methylene Blue', href: base + 'methylene-blue/' },
      { label: 'Peptide Therapy', href: base + 'peptide-therapy/' },
      { label: 'Wellness & Medical Weight Loss', href: base },
      { label: 'Regenerative Cells', href: '/skin-facial-rejuvenation/regenerative-cells/' },
    ],
  },
  {
    slug: 'medical-assisted-weight-loss-glp-1-glp-3',
    group,
    title: 'Medical-Assisted Weight Loss (GLP-1)(GLP-3)',
    seoTitle: `Medical Weight Loss (GLP-1 and GLP-3) in ${localCity}`,
    description:
      'Medically supervised weight loss with Dr. Laura Slack at Imber Medical in St. Simons Island, GA. Lifestyle support and prescription medicine when appropriate.',
    lede: 'Steady, supervised weight loss that combines lifestyle support with medical care. Planned and monitored by Dr. Laura Slack.',
    images: {
      hero: IMG + 'weight-loss-1.jpg',
      overview: IMG + 'weight-loss-2.jpg',
      fit: IMG + 'weight-loss-3.jpg',
      alt: {
        hero: 'A smiling woman measuring her waist in athletic wear',
        overview: 'A woman with a tape measure on a warm studio background',
        fit: 'A dietitian with a tape measure and a basket of fresh fruit and vegetables',
      },
    },
    overview: {
      title: 'Weight loss with real medical support',
      paragraphs: [
        'Many people have tried hard to lose weight on their own. Appetite, hormones and health conditions can make that very difficult.',
        'Our plans combine medical care with lifestyle support such as nutrition counseling, exercise tips and coaching. When it is right for you, Dr. Slack may prescribe a medicine such as a GLP-1 medicine. The goal is steady, lasting progress, not a fast fix.',
      ],
      cards: [
        {
          title: 'How GLP-1 medicines work',
          text: 'These medicines act like a natural hormone that helps control appetite and blood sugar. They can reduce hunger, help you feel full and slow digestion. They work best with healthy eating, activity and medical follow-up.',
        },
        {
          title: 'Supervised program',
          text: 'Our physician-supervised program adds personal nutrition, lifestyle coaching and clinical support to help with cravings and appetite control. Ask us about the details at your visit.',
        },
      ],
    },
    fit: {
      title: 'Is medical weight loss right for you?',
      text: 'Weight loss medicines are prescription only and are not right for everyone. Dr. Slack decides after a review of your history, current weight, conditions and goals.',
      concerns: [
        'Struggling to lose weight with diet and exercise alone',
        'Strong cravings or constant hunger',
        'Weight that affects your health',
        'High blood pressure',
        'Sleep apnea',
        'Type 2 diabetes or blood sugar concerns',
      ],
      goodFit: [
        'You are ready for lifestyle changes along with medicine',
        'You can share your full health history and medicines',
        'You can come to regular follow-up visits',
        'You are not pregnant or planning to become pregnant, or you have talked with your doctor',
        'You want steady progress, not a quick fix',
      ],
    },
    benefits: [
      { title: 'Appetite support', text: 'When appropriate, medicine can help with hunger and cravings.' },
      { title: 'Whole-person plan', text: 'Nutrition, activity and coaching are part of your care.' },
      { title: 'Regular monitoring', text: 'We track your progress and adjust your plan as needed.' },
      { title: 'Physician-led', text: 'Dr. Slack reviews your health and decides if medicine is right for you.' },
    ],
    steps: [
      { title: 'Consultation', text: 'We review your health history, current weight, lifestyle, medicines and goals.' },
      { title: 'Your plan', text: 'We look at what affects your weight and build a plan. It may include counseling, exercise, coaching and medicine if appropriate.' },
      { title: 'Start care', text: 'You begin your plan. If you are prescribed a medicine, we explain how to use it and what to watch for.' },
      { title: 'Build habits', text: 'We support you with nutrition and activity so that your progress can last.' },
      { title: 'Check in', text: 'We follow your progress and adjust your plan. Many people see gradual progress over several weeks, and we focus on steady, safe change.' },
    ],
    safety: {
      title: 'Your safety comes first',
      paragraphs: [
        'GLP-1 and similar medicines are prescription only. Common side effects can include nausea, stomach upset, constipation or diarrhea. Rare but serious problems can happen, so we review your history carefully and tell you when to call us.',
        'We do not promise a certain amount of weight loss. Results vary, and medicine works best with healthy habits and follow-up.',
      ],
      items: ['Prescription only after a health review', 'Side effects explained', 'Nutrition and activity support', 'Regular monitoring'],
    },
    faqs: [
      { q: 'Are these medicines prescription only?', a: 'Yes. Dr. Slack prescribes them only when they are appropriate for you after a health review.' },
      { q: 'What is the difference between GLP-1 and GLP-3?', a: 'GLP-1 medicines are a known group of weight and blood sugar medicines. Our GLP-3 program is a physician-supervised program. Ask us at your visit and we will explain how it works for you.' },
      { q: 'Are there side effects?', a: 'Some people have nausea, stomach upset, constipation or diarrhea. We explain what to expect and what to do.' },
      { q: 'How much weight will I lose?', a: 'We do not promise a number. Results vary, and we focus on steady, healthy progress.' },
      { q: 'Do I still need to eat well and move?', a: 'Yes. Medicine works best with healthy eating, activity and medical follow-up.' },
      { q: 'How do I get started?', a: 'Book a consultation online or call us at 912-268-2103. We will review your health and goals first.' },
    ],
    related: [
      { label: 'Peptide Therapy', href: base + 'peptide-therapy/' },
      { label: 'Bioidentical Hormone Replacement Therapy (BHRT)', href: base + 'bioidentical-hormone-replacement-therapy-bhrt/' },
      { label: 'Wellness & Medical Weight Loss', href: base },
      { label: 'Fat Reduction Body Contouring', href: '/body-contouring-sculpting/fat-reduction-body-contouring/' },
    ],
  },
];
