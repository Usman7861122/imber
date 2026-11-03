import { tattooSexualBody } from './treatments-extra/tattoo-sexual-body';
import { skin } from './treatments-extra/skin';
import { wellness } from './treatments-extra/wellness';
import { conditionsA } from './treatments-extra/conditions-a';
import { conditionsB } from './treatments-extra/conditions-b';
import { conditionsC } from './treatments-extra/conditions-c';
import { conditionsD } from './treatments-extra/conditions-d';
import { techA } from './treatments-extra/technologies-a';
import { techB } from './treatments-extra/technologies-b';
import { techC } from './treatments-extra/technologies-c';
import { techD } from './treatments-extra/technologies-d';

/**
 * Treatment pages. The live page for Filler & Tox only has a title, so this copy is written for the redesign.
 */
export type Treatment = {
  slug: string;
  group: { title: string; href: string };
  title: string;
  seoTitle: string;
  description: string;
  lede: string;
  images: { heroPosition?: string; hero: string; overview: string; fit: string; alt: { hero: string; overview: string; fit: string } };
  overview: { title: string; paragraphs: string[]; cards: { title: string; text: string }[] };
  fit: { title: string; text: string; concerns: string[]; goodFit: string[] };
  benefits: { title: string; text: string }[];
  steps: { title: string; text: string }[];
  safety: { title: string; paragraphs: string[]; items: string[] };
  faqs: { q: string; a: string }[];
  related: { label: string; href: string }[];
};

export const localCity = 'St. Simons Island, GA';
export const localAreas = ['St. Simons Island', 'Sea Island', 'Brunswick', 'Jekyll Island', 'Saint Simons Village', 'Golden Isles'];

const IMG = '/images/treatments/';

const base: Treatment[] = [
  {
    slug: 'filler-tox',
    group: { title: 'Injectables & Toxins', href: '/injectables-toxins/' },
    title: 'Filler & Tox',
    seoTitle: `Filler & Tox in ${localCity}`,
    description:
      'Dermal filler and neuromodulator (tox) treatments with Dr. Laura Slack at Imber Medical in St. Simons Island, GA. Natural-looking results planned around your face.',
    lede: 'Soften lines, restore volume and keep every expression yours. Filler and tox are planned one face at a time by Dr. Laura Slack.',
    images: {
      hero: IMG + 'filler-tox-1.jpg',
      overview: IMG + 'filler-tox-2.jpg',
      fit: IMG + 'filler-tox-3.jpg',
      alt: {
        hero: 'A woman with smooth, natural-looking skin',
        overview: 'A practitioner preparing a facial injection treatment',
        fit: 'A woman looking relaxed after a facial aesthetic treatment',
      },
    },
    overview: {
      title: 'Two tools, one goal: a fresher you',
      paragraphs: [
        'Faces change in two main ways. Lines appear where we use our muscles most, and volume fades as we age. Filler and tox answer each one in a different way.',
        'At Imber Medical, Dr. Slack looks at your whole face first. Then she suggests only what you need, in small steps, so the result looks rested and natural.',
      ],
      cards: [
        {
          title: 'Dermal filler',
          text: 'A smooth gel, often made with hyaluronic acid, placed under the skin to restore volume, shape and support. It can soften folds, define lips, and lift flat areas.',
        },
        {
          title: 'Tox (neuromodulator)',
          text: 'A purified protein that relaxes the small muscles behind expression lines. Forehead lines, frown lines and crow’s feet look softer while your face still moves.',
        },
      ],
    },
    fit: {
      title: 'Is filler or tox right for you?',
      text: 'Most healthy adults with early or moderate signs of aging are good candidates. During your consultation we will talk about your goals, your history and what is realistic.',
      concerns: [
        'Forehead lines and frown lines',
        'Crow’s feet around the eyes',
        'Smile lines and marionette lines',
        'Cheek and temple volume loss',
        'Thin or uneven lips',
        'Chin and jawline definition',
      ],
      goodFit: [
        'You want a refreshed look, not a changed one',
        'You prefer little or no downtime',
        'You are in good general health',
        'You are not pregnant or breastfeeding',
        'You have realistic expectations and want a plan',
      ],
    },
    benefits: [
      { title: 'Natural-looking', text: 'Small, well-placed amounts keep your expressions and your character.' },
      { title: 'Quick visits', text: 'Most treatments take about 15 to 30 minutes, with little or no downtime.' },
      { title: 'Easy to adjust', text: 'We start gently and build up. Your plan can change as your goals change.' },
      { title: 'Physician-led', text: 'Dr. Slack plans and performs your treatment from start to finish.' },
    ],
    steps: [
      { title: 'Consultation', text: 'We talk about what you see in the mirror, review your health history, and look at your face at rest and in motion.' },
      { title: 'Your plan', text: 'You get a clear plan with the areas, products and a fair estimate, before anything starts.' },
      { title: 'Treatment', text: 'The area is cleansed and, if needed, numbed. Fine needles or cannulas are used, and most visits take 15 to 30 minutes.' },
      { title: 'Aftercare', text: 'You can usually return to daily life right away. We will share simple aftercare steps and book a check-in if you need one.' },
      { title: 'Results', text: 'Tox starts to work in a few days and settles in about two weeks. Filler shows its shape right away and softens into place over the following days.' },
    ],
    safety: {
      title: 'Your safety comes first',
      paragraphs: [
        'Filler and tox are medical treatments, and they are done best by a trained physician who knows facial anatomy. We use medical-grade products and review your history before every visit.',
        'Common, short-lived effects can include redness, swelling, tenderness or small bruises. Serious problems are rare, and we will explain the risks and what to watch for before you decide.',
      ],
      items: ['Physician-performed treatments', 'Medical-grade products', 'Full health and medication review', 'Clear aftercare and follow-up'],
    },
    faqs: [
      { q: 'Will I look “done”?', a: 'That is the opposite of our goal. We use small amounts and build gradually, so people notice that you look rested, not that you had treatment.' },
      { q: 'How long do results last?', a: 'It depends on the product, the area and your body. Tox often lasts around three to four months. Filler can last from several months to more than a year. We will give you an honest range for your plan.' },
      { q: 'Does it hurt?', a: 'Most people feel quick pinches. We can use numbing cream or ice, and the needles and cannulas are very fine.' },
      { q: 'Is there downtime?', a: 'Usually very little. You may have small bumps, redness or bruises for a few days. Most people go back to normal activities the same day.' },
      { q: 'Can I have filler and tox together?', a: 'Yes. They treat different things, so many people use both. Dr. Slack will tell you if one, the other, or both make sense.' },
      { q: 'How do I get started?', a: 'Book a consultation online or call us at 912-268-2103. We will talk about your goals and make a plan that fits you.' },
    ],
    related: [
      { label: 'Facial Slimming (Face, Neck, Jaw)', href: '/injectables-toxins/facial-slimming-face-neck-jaw/' },
      { label: 'Volume Rejuvenation Lips', href: '/injectables-toxins/volume-rejuvenation-lips/' },
      { label: 'Facial Fat Grafting', href: '/injectables-toxins/facial-fat-grafting/' },
      { label: 'Skin & Facial Rejuvenation', href: '/skin-facial-rejuvenation/' },
    ],
  },
  {
    slug: 'facial-slimming-face-neck-jaw',
    group: { title: 'Injectables & Toxins', href: '/injectables-toxins/' },
    title: 'Facial Slimming: Face, Neck & Jaw',
    seoTitle: `Facial Slimming for Face, Neck & Jaw in ${localCity}`,
    description:
      'Non-surgical facial slimming for the face, neck and jaw with Dr. Laura Slack at Imber Medical in St. Simons Island, GA. Smooth the chin line, define the jaw and soften a full lower face, with no surgery.',
    lede: 'Define your jawline, smooth the area under your chin and slim a full lower face, without surgery. Every plan is made for your face by Dr. Laura Slack.',
    images: {
      hero: IMG + 'facial-slimming-1.jpg',
      overview: IMG + 'facial-slimming-2.jpg',
      fit: IMG + 'facial-slimming-3.jpg',
      alt: {
        hero: 'A woman with a defined jawline and smooth neck',
        overview: 'A woman with a balanced, slim lower face in soft light',
        fit: 'A woman turning her head to show a smooth jaw and neck',
      },
    },
    overview: {
      title: 'A softer, sharper lower face',
      paragraphs: [
        'A full lower face can come from three places: small pockets of fat under the chin, strong jaw muscles, or skin that has lost some tightness. Diet and exercise often cannot change these areas.',
        'Dr. Slack finds the cause first. Then she picks the right tool, or a mix of tools, so your chin line, jaw and neck look balanced and natural, never overdone.',
      ],
      cards: [
        {
          title: 'Fat reduction',
          text: 'Targeted injections can break down small pockets of fat under the chin and along the jaw. The body clears the fat over time, so the area looks smoother and more defined.',
        },
        {
          title: 'Jaw slimming with tox',
          text: 'Small amounts of tox relax an overactive jaw muscle (the masseter). Over a few weeks the lower face can look narrower and softer, and clenching can ease too.',
        },
      ],
    },
    fit: {
      title: 'Is facial slimming right for you?',
      text: 'It works best for people with mild to moderate fullness who are close to their ideal weight. During your consultation we check your face, neck and skin tightness, and we tell you honestly what to expect.',
      concerns: [
        'Fullness under the chin',
        'A soft or undefined jawline',
        'A wide or square lower face from jaw muscles',
        'Jowl area and lower cheek fullness',
        'A fuller neck line',
        'Jaw clenching or teeth grinding',
      ],
      goodFit: [
        'You have small, firm pockets of fat you cannot lose',
        'You want a clear result without surgery',
        'You can plan for a few days of swelling',
        'You are in good general health',
        'You are not pregnant or breastfeeding',
      ],
    },
    benefits: [
      { title: 'No surgery', text: 'Treatments are done in the office with fine needles, with no cuts and no general anesthesia.' },
      { title: 'Lasting change', text: 'Fat cells that are treated do not come back, so results can last when your weight stays stable.' },
      { title: 'Balanced profile', text: 'We shape the chin, jaw and neck together, so the whole lower face looks in harmony.' },
      { title: 'Physician-led', text: 'Dr. Slack plans and performs your treatment and adjusts it as you see results.' },
    ],
    steps: [
      { title: 'Consultation', text: 'We look at your face from the front and the side, review your health history and talk about the look you want.' },
      { title: 'Your plan', text: 'You get a clear plan with the areas, the number of visits and a fair estimate before anything starts.' },
      { title: 'Treatment', text: 'The area is marked and cleansed, and numbing is used if needed. Small injections are placed in a careful pattern, and a visit often takes about 20 to 30 minutes.' },
      { title: 'Aftercare', text: 'Expect some swelling, tenderness or small bruises for several days. We will share simple aftercare steps, such as cold packs and what to avoid.' },
      { title: 'Results', text: 'Swelling settles in one to two weeks. Fat reduction builds over a few weeks, and some people need more than one visit. Jaw slimming with tox appears in about two to six weeks.' },
    ],
    safety: {
      title: 'Your safety comes first',
      paragraphs: [
        'The jaw and neck have important nerves and blood vessels, so careful placement matters. Dr. Slack knows this anatomy well and uses a measured, step-by-step approach.',
        'Common, short-lived effects can include swelling, numbness, redness, tenderness and bruises. Serious problems are rare, and we will explain the risks and what to watch for before you decide.',
      ],
      items: ['Physician-performed treatments', 'Careful anatomy-based placement', 'Full health and medication review', 'Clear aftercare and follow-up'],
    },
    faqs: [
      { q: 'Is this the same as weight loss?', a: 'No. Facial slimming treats small areas, such as the chin and jaw. It is not a way to lose weight, and it works best when your weight is steady.' },
      { q: 'How many visits will I need?', a: 'It depends on your goals and the area. Some people see a clear change after one visit, and others use two or three. Dr. Slack will give you an honest plan.' },
      { q: 'Does it hurt?', a: 'Most people feel stinging and pressure. We can use numbing cream or ice to keep you comfortable.' },
      { q: 'How much swelling is normal?', a: 'Swelling is common and can be noticeable for a week or two. Many people plan treatment before a quiet week, not before a big event.' },
      { q: 'How long do results last?', a: 'Treated fat cells do not return, so results can last for years if your weight stays stable. Jaw slimming with tox is temporary and is usually repeated every few months.' },
      { q: 'How do I get started?', a: 'Book a consultation online or call us at 912-268-2103. We will talk about your goals and make a plan that fits you.' },
    ],
    related: [
      { label: 'Filler & Tox', href: '/injectables-toxins/filler-tox/' },
      { label: 'Volume Rejuvenation Lips', href: '/injectables-toxins/volume-rejuvenation-lips/' },
      { label: 'Facial Fat Grafting', href: '/injectables-toxins/facial-fat-grafting/' },
      { label: 'Jaw Contouring', href: '/body-contouring-sculpting/jaw-contouring/' },
    ],
  },
  {
    slug: 'volume-rejuvenation-lips',
    group: { title: 'Injectables & Toxins', href: '/injectables-toxins/' },
    title: 'Volume Rejuvenation: Lips',
    seoTitle: `Lip Filler & Volume Rejuvenation in ${localCity}`,
    description:
      'Natural-looking lip filler and lip volume rejuvenation with Dr. Laura Slack at Imber Medical in St. Simons Island, GA. Soft, balanced lips planned around your face.',
    lede: 'Softer shape, gentle volume and smoother lines around the mouth. Lips that look like yours, only fresher, planned by Dr. Laura Slack.',
    images: {
      heroPosition: '50% 78%',
      hero: IMG + 'lips-1.jpg',
      overview: IMG + 'lips-2.jpg',
      fit: IMG + 'lips-3.jpg',
      alt: {
        hero: 'A woman with soft, natural-looking lips',
        overview: 'Close view of soft, hydrated lips',
        fit: 'A woman with a relaxed, natural smile',
      },
    },
    overview: {
      title: 'Lips that look like yours, only fresher',
      paragraphs: [
        'Lips lose volume and definition over time, and fine lines can form around the mouth. Some people were also born with thin or uneven lips and want more balance.',
        'Dr. Slack plans your lips as part of your whole face. She starts with small amounts and builds slowly, so the result looks natural and still feels soft.',
      ],
      cards: [
        {
          title: 'Shape and volume',
          text: 'A soft hyaluronic acid filler can add gentle volume, define the lip border and balance the upper and lower lip. You choose how subtle or full you want to go.',
        },
        {
          title: 'Smoother lines and hydration',
          text: 'Tiny amounts can also soften lines above the lip and bring back moisture and smoothness, so the whole mouth area looks rested.',
        },
      ],
    },
    fit: {
      title: 'Is lip treatment right for you?',
      text: 'Most healthy adults are good candidates. During your consultation we talk about your goals, look at your lips at rest and when you smile, and agree on a look that fits your face.',
      concerns: [
        'Thin lips or lips that have lost volume',
        'An uneven or flat lip shape',
        'A soft or faded lip border',
        'Fine lines above the lip',
        'A lip that turns in when you smile',
        'Dry or less smooth lips',
      ],
      goodFit: [
        'You want lips that look natural, not overfilled',
        'You are in good general health',
        'You can plan for a few days of mild swelling',
        'You have no active cold sore or skin infection',
        'You are not pregnant or breastfeeding',
      ],
    },
    benefits: [
      { title: 'Natural-looking', text: 'Small, careful steps keep your own shape, so friends see a fresh look, not a treatment.' },
      { title: 'Quick visit', text: 'Most lip treatments take about 20 to 30 minutes, with numbing for comfort.' },
      { title: 'Easy to adjust', text: 'We can start soft and add more later. The most common fillers can also be dissolved if needed.' },
      { title: 'Physician-led', text: 'Dr. Slack plans and performs your treatment from the first step to the last.' },
    ],
    steps: [
      { title: 'Consultation', text: 'We talk about the look you want, review your health history and study your lips and the lower face together.' },
      { title: 'Your plan', text: 'You get a clear plan with the product, the amount and a fair estimate before anything starts.' },
      { title: 'Treatment', text: 'Your lips are cleansed and numbed. Filler is placed with fine needles or cannulas in small steps, and a visit takes about 20 to 30 minutes.' },
      { title: 'Aftercare', text: 'Mild swelling, tenderness or small bruises are common for a few days. We share simple aftercare steps, like cold packs and what to avoid.' },
      { title: 'Results', text: 'You see the shape right away. Swelling settles in about one to two weeks, and the final soft result shows after that. We can check in and fine-tune.' },
    ],
    safety: {
      title: 'Your safety comes first',
      paragraphs: [
        'Lips have many small blood vessels, so careful technique and knowledge of facial anatomy matter. Dr. Slack uses medical-grade products and a slow, measured approach.',
        'Common, short-lived effects can include swelling, tenderness, bruises and small lumps. Serious problems are rare, and we will explain the risks and warning signs before you decide.',
      ],
      items: ['Physician-performed treatments', 'Medical-grade fillers', 'Full health and medication review', 'Clear aftercare and follow-up'],
    },
    faqs: [
      { q: 'Will my lips look overfilled?', a: 'That is not our goal. We use small amounts and build slowly, so your lips look balanced and natural.' },
      { q: 'Does it hurt?', a: 'Lips are sensitive, so we use numbing cream and sometimes a numbing injection. Most people feel only pressure and light pinches.' },
      { q: 'How long do results last?', a: 'It depends on the product and your body. Lip filler often lasts about six months to a year. We will give you an honest range for your plan.' },
      { q: 'How much swelling should I expect?', a: 'Some swelling is normal and is usually worst in the first two days. Most people feel back to normal in about a week.' },
      { q: 'Can the filler be removed?', a: 'Hyaluronic acid fillers can be dissolved with a special enzyme if you want a change. We will talk about this before treatment.' },
      { q: 'How do I get started?', a: 'Book a consultation online or call us at 912-268-2103. We will talk about your goals and make a plan that fits you.' },
    ],
    related: [
      { label: 'Filler & Tox', href: '/injectables-toxins/filler-tox/' },
      { label: 'Facial Slimming (Face, Neck, Jaw)', href: '/injectables-toxins/facial-slimming-face-neck-jaw/' },
      { label: 'Facial Fat Grafting', href: '/injectables-toxins/facial-fat-grafting/' },
      { label: 'Skin & Facial Rejuvenation', href: '/skin-facial-rejuvenation/' },
    ],
  },
  {
    slug: 'facial-fat-grafting',
    group: { title: 'Injectables & Toxins', href: '/injectables-toxins/' },
    title: 'Facial Fat Grafting',
    seoTitle: `Facial Fat Grafting in ${localCity}`,
    description:
      'Facial fat grafting with Dr. Laura Slack at Imber Medical in St. Simons Island, GA. Restore lost volume with your own natural fat for a softer, younger-looking face.',
    lede: 'Use your own natural fat to bring back volume where your face has softened. Long-lasting, natural, and planned by Dr. Laura Slack.',
    images: {
      hero: IMG + 'fat-grafting-1.jpg',
      overview: IMG + 'fat-grafting-2.jpg',
      fit: IMG + 'fat-grafting-3.jpg',
      alt: {
        hero: 'A woman with soft, full cheeks and glowing skin',
        overview: 'A woman with a youthful, balanced face',
        fit: 'A woman smiling gently with healthy skin',
      },
    },
    overview: {
      title: 'Volume from your own body',
      paragraphs: [
        'As we age, the face loses fat in places like the cheeks, temples and under the eyes. The face can look flatter, tired or hollow, even when the skin is healthy.',
        'Fat grafting moves a small amount of your own fat to those areas. Because it is your own tissue, it feels natural, and a good part of it can last for years.',
      ],
      cards: [
        {
          title: 'Gentle collection',
          text: 'A small amount of fat is taken from an area such as the abdomen or thighs with a very fine cannula. The area is numbed, so most people feel only pressure.',
        },
        {
          title: 'Careful placement',
          text: 'The fat is cleaned and placed in tiny amounts into the face. The new volume lifts hollow areas and can also improve skin quality over time.',
        },
      ],
    },
    fit: {
      title: 'Is fat grafting right for you?',
      text: 'It suits people who want a longer-lasting answer than filler and have enough fat to use. During your consultation we check your face and your donor areas, and we tell you honestly if another option fits you better.',
      concerns: [
        'Hollow cheeks or flat mid-face',
        'Sunken temples',
        'Dark hollows under the eyes',
        'Deep smile lines and folds',
        'A thin, tired-looking face',
        'Volume loss after weight loss',
      ],
      goodFit: [
        'You want a longer-lasting natural result',
        'You have a small area with extra fat to use',
        'You can plan for about one to two weeks of swelling',
        'You are in good general health',
        'You do not smoke or can pause before and after',
      ],
    },
    benefits: [
      { title: 'Your own tissue', text: 'The fat comes from you, so it feels soft and natural and does not use a synthetic product.' },
      { title: 'Long-lasting', text: 'Fat that takes root in its new place can last for years, often longer than filler.' },
      { title: 'Better skin quality', text: 'Fat contains helpful cells, and many people notice smoother, healthier-looking skin over time.' },
      { title: 'Physician-led', text: 'Dr. Slack plans and performs each step, from collection to careful placement.' },
    ],
    steps: [
      { title: 'Consultation', text: 'We look at your face and your donor areas, review your health history and talk about the look you want.' },
      { title: 'Your plan', text: 'You get a clear plan with the areas, the setting for the procedure and a fair estimate before anything starts.' },
      { title: 'Treatment', text: 'The donor area and the face are numbed. A small amount of fat is collected, cleaned and placed in tiny amounts. The visit often takes about one to two hours.' },
      { title: 'Aftercare', text: 'Swelling and bruising are common for one to two weeks. We share clear aftercare steps, such as sleeping with your head raised and avoiding pressure on the face.' },
      { title: 'Results', text: 'Some of the fat settles during the first weeks, so the early result looks fuller than the final one. The final shape appears in about two to three months.' },
    ],
    safety: {
      title: 'Your safety comes first',
      paragraphs: [
        'Fat grafting is a medical procedure, so careful planning and clean technique matter. Dr. Slack uses fine tools, small amounts and a measured approach in every area of the face.',
        'Common, short-lived effects include swelling, bruising and tenderness. Less common risks include uneven results or the need for a touch-up. We will explain all risks and what to watch for before you decide.',
      ],
      items: ['Physician-performed procedure', 'Careful, small-volume placement', 'Full health and medication review', 'Clear aftercare and follow-up'],
    },
    faqs: [
      { q: 'How is this different from filler?', a: 'Filler is a product placed under the skin and it is slowly absorbed. Fat grafting uses your own fat, and part of it can stay for years. It also needs a small collection step.' },
      { q: 'Will all the fat stay?', a: 'Not all of it. Some fat does not survive in its new place, so we plan for that. Some people need a second visit to fine-tune.' },
      { q: 'How long is the recovery?', a: 'Most people feel social again in about one to two weeks, when swelling and bruises fade. Full results take two to three months.' },
      { q: 'Where is the fat taken from?', a: 'Usually from the belly, flanks or thighs. We choose the area with the best fat and the least effort.' },
      { q: 'Is it painful?', a: 'The areas are numbed during the procedure. Afterward, most people describe soreness and tightness, and we share ways to stay comfortable.' },
      { q: 'How do I get started?', a: 'Book a consultation online or call us at 912-268-2103. We will talk about your goals and make a plan that fits you.' },
    ],
    related: [
      { label: 'Filler & Tox', href: '/injectables-toxins/filler-tox/' },
      { label: 'Facial Slimming (Face, Neck, Jaw)', href: '/injectables-toxins/facial-slimming-face-neck-jaw/' },
      { label: 'Volume Rejuvenation Lips', href: '/injectables-toxins/volume-rejuvenation-lips/' },
      { label: 'Skin & Facial Rejuvenation', href: '/skin-facial-rejuvenation/' },
    ],
  },
  {
    slug: 'ted-hair-restoration',
    group: { title: 'Hair Restoration & Removal', href: '/hair-restoration-removal/' },
    title: 'TED Hair Restoration',
    seoTitle: `TED Hair Restoration in ${localCity}`,
    description:
      'TED hair restoration with Dr. Laura Slack at Imber Medical in St. Simons Island, GA. A needle-free, in-office scalp treatment to support thicker, healthier-looking hair.',
    lede: 'A gentle, needle-free scalp treatment that supports thicker, healthier-looking hair. Planned and supervised by Dr. Laura Slack.',
    images: {
      hero: IMG + 'ted-1.jpg',
      overview: IMG + 'ted-2.jpg',
      fit: IMG + 'ted-3.jpg',
      alt: {
        hero: 'A woman with long, healthy, shiny hair',
        overview: 'A woman massaging her scalp with a soft brush',
        fit: 'A woman with long, healthy hair looking over her shoulder',
      },
    },
    overview: {
      title: 'Wake up the scalp, without surgery',
      paragraphs: [
        'Thinning hair can come from stress, hormones, age, nutrition or family history. Many people want to act early, but they do not want surgery or injections.',
        'TED (transepidermal delivery) is an in-office treatment that helps a scalp-supporting serum reach where it is needed. It uses no needles and no cuts. Dr. Slack checks your scalp first and then builds a plan that fits you.',
      ],
      cards: [
        {
          title: 'Needle-free delivery',
          text: 'The serum is applied to the scalp with the TED handpiece. It is a comfortable, non-invasive way to support the scalp and the hair follicles.',
        },
        {
          title: 'Part of a full plan',
          text: 'TED works best with the right home care, nutrition and, when needed, other treatments. Dr. Slack will tell you honestly what to expect.',
        },
      ],
    },
    fit: {
      title: 'Is TED right for you?',
      text: 'TED is a good fit for adults with early or moderate thinning who want in-office care with little or no downtime. During your consultation we look at your scalp and your health history.',
      concerns: [
        'Thinning at the part or crown',
        'A wider part than before',
        'Hair that feels finer or weaker',
        'Shedding after stress, illness or a big life change',
        'A dry or unhappy scalp',
        'Wanting to act early, before more hair is lost',
      ],
      goodFit: [
        'You prefer no needles and no surgery',
        'You want little or no downtime',
        'You can commit to a series of visits',
        'You are open to a home-care routine',
        'You are in good general health',
      ],
    },
    benefits: [
      { title: 'Needle-free', text: 'No injections, no cuts and no surgery. Most people feel only light pressure and a gentle glide.' },
      { title: 'No downtime', text: 'Most people return to normal activities right after their visit.' },
      { title: 'Supports your own hair', text: 'The goal is to support the follicles you have and help hair look fuller over time.' },
      { title: 'Physician-led', text: 'Dr. Slack plans your care and checks your progress along the way.' },
    ],
    steps: [
      { title: 'Consultation', text: 'We look at your scalp and hair, review your health history and talk about how long you have noticed changes.' },
      { title: 'Your plan', text: 'You get a clear plan with the number of visits, home care and a fair estimate before anything starts.' },
      { title: 'Treatment', text: 'Your scalp is prepared and the serum is applied with the TED handpiece. There are no needles, and visits are usually short.' },
      { title: 'Aftercare', text: 'You can usually wash and style as normal after a short time. We share simple tips to keep the scalp calm and healthy.' },
      { title: 'Results', text: 'Hair changes slowly, because hair grows slowly. Most people look for changes over a few months. We check progress and adjust your plan.' },
    ],
    safety: {
      title: 'Your safety comes first',
      paragraphs: [
        'TED is a non-invasive treatment, and it is delivered by trained providers under the care of a physician. We check your scalp for conditions that need a different approach first.',
        'Mild redness or tenderness can happen and usually fades fast. Results vary from person to person, and we will be honest about what is realistic for you.',
      ],
      items: ['Physician-supervised care', 'Scalp check before treatment', 'Full health and medication review', 'Honest, realistic expectations'],
    },
    faqs: [
      { q: 'Does TED hurt?', a: 'Most people find it comfortable. There are no needles, and you may feel light pressure or a cool, gentle sensation.' },
      { q: 'How many visits will I need?', a: 'It depends on your hair and goals. Most plans use a series of visits, followed by maintenance. Dr. Slack will give you a clear plan.' },
      { q: 'When will I see results?', a: 'Hair grows slowly, so changes take time. Many people look for early changes after a few months, with more over the following months.' },
      { q: 'Is there downtime?', a: 'Usually none. Most people go back to normal activities right away.' },
      { q: 'Can I combine TED with other care?', a: 'Yes. Many plans pair TED with home care such as Xtresse products, or with other hair treatments. We will suggest what makes sense for you.' },
      { q: 'How do I get started?', a: 'Book a consultation online or call us at 912-268-2103. We will look at your scalp and make a plan that fits you.' },
    ],
    related: [
      { label: 'All Xtresse Products', href: '/hair-restoration-removal/all-xtresse-products/' },
      { label: 'Laser Hair Removal', href: '/hair-restoration-removal/laser-hair-removal/' },
      { label: 'Hair Restoration & Removal', href: '/hair-restoration-removal/' },
      { label: 'Wellness & Medical Weight Loss', href: '/wellness-medical-weight-loss/' },
    ],
  },
  {
    slug: 'all-xtresse-products',
    group: { title: 'Hair Restoration & Removal', href: '/hair-restoration-removal/' },
    title: 'All Xtresse Products',
    seoTitle: `Xtresse Hair Growth Products in ${localCity}`,
    description:
      'Xtresse hair growth gummies, FR Concentrate serum and the Grow System at Imber Medical in St. Simons Island, GA, chosen for you by Dr. Laura Slack.',
    lede: 'Hair care that starts at the root. Choose the Xtresse routine that matches your stage of hair loss, with guidance from Dr. Laura Slack.',
    images: {
      hero: IMG + 'xtresse-1.jpg',
      overview: IMG + 'xtresse-2.jpg',
      fit: IMG + 'xtresse-3.jpg',
      alt: {
        hero: 'A woman applying a hair serum to her scalp with a dropper',
        overview: 'A woman with long, healthy hair in soft light',
        fit: 'A close view of a woman applying scalp serum with a dropper',
      },
    },
    overview: {
      title: 'A routine for every stage of hair loss',
      paragraphs: [
        'Xtresse is a line of hair growth support made to work from two sides: from the inside with nutrition, and from the outside with the scalp and the follicle.',
        'Not everyone needs everything. Dr. Slack helps you pick the right step for how much thinning you have now, so you do not buy more than you need.',
      ],
      cards: [
        {
          title: 'From the inside',
          text: 'Hair Growth Gummies are a sugar-free, biotin-free daily supplement made to nourish the follicles from within. They are a good first step for early thinning.',
        },
        {
          title: 'On the scalp',
          text: 'FR Concentrate is a light, fast-absorbing serum for daily scalp use. It is made to support the follicle environment and a calmer scalp.',
        },
      ],
    },
    fit: {
      title: 'Which Xtresse step is right for you?',
      text: 'The best choice depends on how much hair you have lost and how fast. Use this as a guide, and Dr. Slack will confirm it with you.',
      concerns: [
        'Early thinning: Hair Growth Gummies',
        'Visible loss: Gummies plus FR Concentrate serum',
        'More noticeable loss: the full Xtresse Grow System',
        'Advanced loss: an in-office Xvie treatment added to the routine',
        'A scalp that needs more care',
        'Hair that looks thinner at the part',
      ],
      goodFit: [
        'You want a clear, simple daily routine',
        'You prefer non-surgical care',
        'You can stay consistent for several months',
        'You want physician guidance, not guesses',
        'You are not pregnant or breastfeeding, or you have talked with your doctor',
      ],
    },
    benefits: [
      { title: 'Two-sided approach', text: 'Support from the inside with the gummies and on the scalp with the serum.' },
      { title: 'Easy daily routine', text: 'Gummies you take each day and a light serum you apply to the scalp. Nothing complicated.' },
      { title: 'Matched to your stage', text: 'We start with what you need now and add steps only if they make sense.' },
      { title: 'Physician-guided', text: 'Dr. Slack reviews your history so your routine fits your health and your goals.' },
    ],
    steps: [
      { title: 'Consultation', text: 'We look at your hair and scalp and talk about when you first noticed changes and what you have tried.' },
      { title: 'Your plan', text: 'We recommend the Xtresse step that matches your stage and explain how to use each product.' },
      { title: 'Start your routine', text: 'You begin your daily routine at home. Gummies are taken each day, and the serum goes on the scalp as directed.' },
      { title: 'Stay consistent', text: 'Hair grows slowly, so steady use matters. We share simple tips to help you keep going.' },
      { title: 'Check in', text: 'We review your progress after a few months and adjust your plan, including an in-office step if it is needed.' },
    ],
    safety: {
      title: 'Your safety comes first',
      paragraphs: [
        'Supplements and topical products are not right for everyone. Dr. Slack reviews your health history, medicines and any allergies before you start.',
        'Results vary from person to person, and hair needs time. We will be honest about what is realistic, and we will tell you if another approach would help you more.',
      ],
      items: ['Physician review before you start', 'Allergy and medication check', 'Clear directions for use', 'Progress check-ins'],
    },
    faqs: [
      { q: 'Which product should I start with?', a: 'For early thinning, many people start with the gummies. For more visible loss, the gummies plus FR Concentrate serum is common. Dr. Slack will guide you.' },
      { q: 'How long until I see a change?', a: 'Hair grows slowly. Most people need at least a few months of steady use before they judge the result.' },
      { q: 'Are the gummies sugar-free?', a: 'Yes. The Hair Growth Gummies are described as sugar-free and biotin-free. Ask us about the full ingredient list before you start.' },
      { q: 'Can I use Xtresse with other treatments?', a: 'Yes. Many people use it with TED or other hair care. We will suggest a plan that fits together.' },
      { q: 'What is the in-office step?', a: 'For more advanced hair loss, an in-office treatment can be added to the home routine. We will explain if it makes sense for you.' },
      { q: 'How do I get started?', a: 'Book a consultation online or call us at 912-268-2103. We will recommend a routine that fits your hair and your goals.' },
    ],
    related: [
      { label: 'TED Hair Restoration', href: '/hair-restoration-removal/ted-hair-restoration/' },
      { label: 'Laser Hair Removal', href: '/hair-restoration-removal/laser-hair-removal/' },
      { label: 'Hair Restoration & Removal', href: '/hair-restoration-removal/' },
      { label: 'All Treatments', href: '/treatments/' },
    ],
  },
  {
    slug: 'laser-hair-removal',
    group: { title: 'Hair Restoration & Removal', href: '/hair-restoration-removal/' },
    title: 'Laser Hair Removal',
    seoTitle: `Laser Hair Removal in ${localCity}`,
    description:
      'Laser hair removal with Dr. Laura Slack at Imber Medical in St. Simons Island, GA. Smooth skin with long-lasting hair reduction, planned for your skin and hair type.',
    lede: 'Smooth skin without daily shaving or waxing. Safe, long-lasting hair reduction planned for your skin and hair by Dr. Laura Slack.',
    images: {
      hero: IMG + 'laser-hair-1.jpg',
      heroPosition: '50% 55%',
      overview: IMG + 'laser-hair-2.jpg',
      fit: IMG + 'laser-hair-3.jpg',
      alt: {
        hero: 'A woman with smooth, glowing legs',
        overview: 'A laser hair removal handpiece used on the underarm',
        fit: 'A provider treating the underarm with a laser handpiece',
      },
    },
    overview: {
      title: 'Smooth skin that lasts',
      paragraphs: [
        'Shaving, waxing and plucking take time and can irritate the skin. Laser hair removal uses light energy that is absorbed by the pigment in the hair, which slows future growth.',
        'Hair grows in cycles, so a series of visits is needed to reach every hair at the right time. Dr. Slack plans your settings for your skin tone, hair color and area, so treatment stays safe and comfortable.',
      ],
      cards: [
        {
          title: 'Long-lasting reduction',
          text: 'Over a series of visits, hair becomes finer, lighter and much less dense. Many people enjoy smooth skin for a long time, with occasional touch-ups.',
        },
        {
          title: 'Settings made for you',
          text: 'Skin tone, hair color and thickness all matter. We adjust the treatment for each area and each visit.',
        },
      ],
    },
    fit: {
      title: 'Is laser hair removal right for you?',
      text: 'Many adults are good candidates, and results are often best with darker hair. During your consultation we check your skin and hair and tell you what to expect.',
      concerns: [
        'Underarms, bikini line and legs',
        'Face, lip and chin',
        'Back, shoulders and chest',
        'Arms and hands',
        'Razor bumps and ingrown hairs',
        'Daily shaving or frequent waxing',
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
      { title: 'Smoother, calmer skin', text: 'Fewer razor bumps and ingrown hairs, and softer skin over time.' },
      { title: 'Quick visits', text: 'Small areas can take minutes, and larger areas take a little longer.' },
      { title: 'Physician-led', text: 'Dr. Slack plans your settings and watches your skin response at every visit.' },
    ],
    steps: [
      { title: 'Consultation', text: 'We check your skin and hair, review your health history and medicines, and talk about your goals.' },
      { title: 'Prepare', text: 'You avoid sun and tanning, and you shave the area before your visit. We share a simple checklist.' },
      { title: 'Treatment', text: 'Protective eyewear is worn. Pulses of light are applied to the area, with cooling for comfort. Most people feel a quick snap or warmth.' },
      { title: 'Aftercare', text: 'The skin may look pink or feel warm for a short time. We share tips for sun protection and skin care.' },
      { title: 'Results', text: 'Treatments are spaced several weeks apart. Many people need about six or more visits, and hair thins out step by step. Occasional touch-ups can help.' },
    ],
    safety: {
      title: 'Your safety comes first',
      paragraphs: [
        'Lasers are medical devices, so skin type, settings and technique matter. Dr. Slack plans each treatment carefully and may do a test spot first.',
        'Common, short-lived effects include redness, swelling and tenderness. Less common risks include blisters or color changes in the skin. We will explain the risks and how to avoid them before you decide.',
      ],
      items: ['Physician-planned settings', 'Skin and hair assessment', 'Protective eyewear and cooling', 'Clear aftercare and follow-up'],
    },
    faqs: [
      { q: 'Does it hurt?', a: 'Most people describe a quick snap or a feeling of warmth. Cooling helps keep it comfortable, and sensitive areas may feel stronger.' },
      { q: 'How many sessions will I need?', a: 'Many people need around six or more visits, spaced several weeks apart. The number depends on the area, your hair and your hormones.' },
      { q: 'Is it permanent?', a: 'Laser gives long-lasting hair reduction, not a promise that every hair is gone forever. Some people need occasional touch-ups.' },
      { q: 'Can I get it with a tan?', a: 'Tanned skin raises the risk of side effects. Please avoid sun and tanning before and after treatment, and tell us if you have recent sun exposure.' },
      { q: 'Does it work on light hair?', a: 'Laser works best on darker hair, because it targets pigment. We will tell you honestly if your hair may respond less.' },
      { q: 'How do I get started?', a: 'Book a consultation online or call us at 912-268-2103. We will check your skin and hair and make a plan that fits you.' },
    ],
    related: [
      { label: 'TED Hair Restoration', href: '/hair-restoration-removal/ted-hair-restoration/' },
      { label: 'All Xtresse Products', href: '/hair-restoration-removal/all-xtresse-products/' },
      { label: 'Hair Restoration & Removal', href: '/hair-restoration-removal/' },
      { label: 'Skin & Facial Rejuvenation', href: '/skin-facial-rejuvenation/' },
    ],
  },
];

export const treatments: Treatment[] = [...base, ...tattooSexualBody, ...skin, ...wellness, ...conditionsA, ...conditionsB, ...conditionsC, ...conditionsD, ...techA, ...techB, ...techC, ...techD];
