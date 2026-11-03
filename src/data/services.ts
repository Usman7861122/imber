export type Service = {
  slug: string;
  title: string;
  blurb: string;
  /** file name of the photo on the live site (see scripts/fetch-service-images.sh) */
  file: string;
  href?: string;
};

/**
 * Photos are hot-linked from the live site for now.
 * Run `bash scripts/fetch-service-images.sh` once, then change this to '/images/services/'.
 */
export const SERVICE_IMG_BASE = 'https://imbermedical.com/wp-content/uploads/2026/09/';

export const featuredServices: Service[] = [
  { slug: 'body-contouring', title: 'Body Contouring', file: 'TWP-2019-01-25-114as.jpg',
    blurb: 'Personalized body contouring solutions for stubborn fat in coastal Georgia.' },
  { slug: 'skin-tightening', title: 'Skin Tightening', file: 'TWP-2019-01-25-058as.jpg',
    blurb: 'Non-surgical skin tightening for firmer, smoother, youthful-looking skin.' },
  { slug: 'laser-hair-removal', title: 'Laser Hair Removal', file: 'TWP-2019-01-25-190as.jpg',
    blurb: 'Shaving and waxing can become a chore and are less effective at fighting unwanted hair than laser hair removal.' },
  { slug: 'fillers-neurotoxins', title: 'Fillers & Neurotoxins', file: 'TWP-2019-01-25-094as-1.jpg',
    blurb: 'For those looking to smooth the signs of aging, worry, or stress and turn back time, fillers and neurotoxins.' },
  { slug: 'laser-liposuction', title: 'Laser Liposuction', file: 'TWP-2019-01-25-217as.jpg',
    blurb: 'BeautiFill laser liposuction and fat transfer for natural enhancement.' },
  { slug: 'hair-restoration', title: 'Hair Restoration', file: 'TWP-2019-01-25-054as.jpg',
    blurb: 'Hair restoration at Imber Medical boosts confidence using advanced treatments.' },
  { slug: 'male-health', title: 'Male Vitality', file: 'TWP-2019-01-25-125as.jpg',
    blurb: 'Personalized care supporting hormones, vitality, wellness, and overall male well-being.' },
  { slug: 'female-health', title: 'Female Health', file: 'ChatGPT-Image-Sep-4-2026-09_16_42-PM.png',
    blurb: 'Comprehensive care supporting hormones, comfort, vitality, and women’s overall well-being.' },
];

// Each home-page card links to its page in the new treatment structure.
const hrefs: Record<string, string> = {
  'body-contouring': '/body-contouring-sculpting/fat-reduction-body-contouring/',
  'skin-tightening': '/skin-facial-rejuvenation/skin-tightening/',
  'laser-hair-removal': '/hair-restoration-removal/laser-hair-removal/',
  'fillers-neurotoxins': '/injectables-toxins/filler-tox/',
  'laser-liposuction': '/body-contouring-sculpting/',
  'hair-restoration': '/hair-restoration-removal/ted-hair-restoration/',
  'male-health': '/sexual-wellness/male-health/',
  'female-health': '/sexual-wellness/female-health-vaginal-rejuv/',
};
featuredServices.forEach((s) => { s.href = hrefs[s.slug]; });
