export type MegaLink = { label: string; href: string };
export type MegaGroup = { title: string; href: string; col?: number; links?: MegaLink[] };
export type MenuItem = {
  id: string;
  label: string;
  href?: string;
  mega?: { eyebrow: string; title: string; text: string; cta?: MegaLink; variant: 'groups' | 'list'; cols: 2 | 3; rows?: number; groups: MegaGroup[] };
};

const slug = (t: string) => t.toLowerCase().replace(/&/g, ' ').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const subs = (base: string, titles: string[]): MegaLink[] => titles.map((label) => ({ label, href: `${base}/${slug(label)}/` }));
// Items without a page on the live menu get a path built from their name (create these pages later).
const items = (base: string, titles: string[]): MegaGroup[] => titles.map((title) => ({ title, href: `${base}/${slug(title)}/` }));

// Menu copied from https://imbermedical.com/home-1/
const menu: MenuItem[] = [
  { id: 'about', label: 'About', href: '/about' },
  {
    id: 'treatments',
    label: 'Treatments',
    mega: {
      eyebrow: 'What we offer',
      title: 'Treatments',
      text: 'Advanced aesthetics and wellness, planned around you.',
      cta: { label: 'View all treatments', href: '/treatments/' },
      variant: 'groups',
      cols: 3,
      groups: [
        { title: 'Injectables & Toxins', href: '/injectables-toxins/', col: 0, links: [
          { label: 'Filler & Tox', href: '/injectables-toxins/filler-tox/' },
          ...subs('/injectables-toxins', ['Facial Slimming (Face, Neck, Jaw)', 'Volume Rejuvenation Lips', 'Facial Fat Grafting']),
        ] },
        { title: 'Hair Restoration & Removal', href: '/hair-restoration-removal/', col: 0, links: [
          { label: 'TED Hair Restoration', href: '/hair-restoration-removal/ted-hair-restoration/' },
          ...subs('/hair-restoration-removal', ['All Xtresse Products']),
          { label: 'Laser Hair Removal', href: '/hair-restoration-removal/laser-hair-removal/' },
        ] },
        { title: 'Tattoo Removal', href: '/tattoo-removal/', col: 0, links: subs('/tattoo-removal', ['Body/Brow Tattoo Removal']) },
        { title: 'Skin & Facial Rejuvenation', href: '/skin-facial-rejuvenation/', col: 1, links: subs('/skin-facial-rejuvenation', [
          'Laser Facial', 'RF Microneedling', 'Skin Tightening', 'Medical Facials & HydraFacial', 'Chemical Peels (VI Peel)', 'Microneedling PRP/PRF', 'Regenerative Cells', 'Plated Calm',
        ]) },
        { title: 'Sexual Wellness', href: '/sexual-wellness/', col: 1, links: subs('/sexual-wellness', ['Male Health', 'Female Health (Vaginal Rejuv)']) },
        { title: 'Wellness & Medical Weight Loss', href: '/wellness-medical-weight-loss/', col: 2, links: [
          { label: 'Bioidentical Hormone Replacement Therapy (BHRT)', href: '/wellness-medical-weight-loss/bioidentical-hormone-replacement-therapy-bhrt/' },
          { label: 'Peptide Therapy', href: '/wellness-medical-weight-loss/peptide-therapy/' },
          ...subs('/wellness-medical-weight-loss', ['Methylene Blue']),
          { label: 'IV Therapy', href: '/wellness-medical-weight-loss/iv-therapy/' },
          { label: 'Medical-Assisted Weight Loss (GLP-1)(GLP-3)', href: '/wellness-medical-weight-loss/medical-assisted-weight-loss-glp-1-glp-3/' },
        ] },
        { title: 'Body Contouring & Sculpting', href: '/body-contouring-sculpting/', col: 2, links: subs('/body-contouring-sculpting', ['Fat Reduction Body Contouring', 'Jaw Contouring']) },
      ],
    },
  },
  {
    id: 'conditions',
    label: 'Conditions',
    mega: {
      eyebrow: 'Find care by concern',
      title: 'Conditions',
      text: 'Start with what you want to improve and see how we can help.',
      cta: { label: 'View all conditions', href: '/conditions/' },
      variant: 'list',
      cols: 3,
      groups: items('/conditions', [
        'Brain Fog/memory Loss', 'Hair Thinning', 'Rosacea', 'Cherry Angioma', 'Face and leg Veins', 'Skin Rejuvenation (tightening)', 'Dark circles under the eyes skin tightening',
        'Under-eye hollows/puffiness', 'Hyperpigmentation Brown/Sunspots', 'Melasma', 'Fine Lines & Wrinkles', 'Cellulite', 'Energy Enhancement', 'Hair Removal',
        'Toenail Fungus', 'Muscle Building', 'Long Covid – Post Covid', 'Acne', 'Skin Tag, Wart, Benign Mole Removal', 'Scar Treatment',
      ]),
    },
  },
  {
    id: 'technologies',
    label: 'Technologies',
    mega: {
      eyebrow: 'Our devices',
      title: 'Technologies',
      text: 'Leading-edge devices for safe, precise, natural-looking results.',
      cta: { label: 'View all technologies', href: '/technologies/' },
      variant: 'list',
      cols: 3,
      groups: items('/technologies', [
        'ExcelV – Cutera', 'Pico Cutera', 'CO2', 'AviClear', 'Red Light Therapy', 'Scarlet RF',
        'Attiva RF', 'Agnes RF', 'Plasma Pen', 'Opus Plasma', 'HydraFacial', 'Verju',
        'Accent Prime', 'Trusculpt', 'Emsculpt', 'Beautifill', 'Neuronic Helmet', 'Soprano Ice', 'Femilift',
      ]),
    },
  },
  {
    id: 'resources',
    label: 'Resources',
    mega: {
      eyebrow: 'Good to know',
      title: 'Resources',
      text: 'Results, financing, products and more.',
      variant: 'list',
      cols: 2,
      groups: [
        { title: 'Before & After Gallery', href: '/before-after-gallery' },
        { title: 'Financing', href: '/financing' },
        { title: 'Our Products', href: '/our-products' },
        { title: 'Imber Medical App', href: 'https://imber.repeatmd.app/app/signin' },
        { title: 'Testimonials', href: '/testimonials' },
        { title: 'Our Videos', href: '/our-technology-videos' },
      ],
    },
  },
  { id: 'contact', label: 'Contact', href: '/contact-us' },
];

export const site = {
  name: 'Imber Medical',
  tagline: 'Look Radiant. Feel Empowered.',
  description: 'Cutting-edge treatments with natural, lasting results.',
  phone: '912-268-2103',
  bookUrl: '#book-now', // TODO: connect the Boulevard booking widget (same as live site)
  topbar: {
    text: 'Preview your treatment results before your visit → Try it free',
    href: 'https://ageless.ai/a/imber/transformation?utm_source=website&utm_medium=website&utm_campaign=ageless-ai',
  },
  rating: {
    score: '4.9',
    count: 169,
    href: 'https://www.google.com/maps/place/Imber+Medical/@31.161344,-81.3902224,745m/data=!3m1!1e3!4m8!3m7!1s0x88e4d1ec5c0adb0d:0x79c0281fbcb5b284!8m2!3d31.161344!4d-81.3876475!9m1!1b1!16s%2Fg%2F11h55qrt32',
  },
  social: [
    { label: 'Facebook', href: 'https://www.facebook.com/ImberMedical/', icon: 'facebook' },
    { label: 'Instagram', href: 'https://www.instagram.com/imbermedicalssi/', icon: 'instagram' },
    { label: 'Call 912-268-2103', href: 'tel:912-268-2103', icon: 'phone' },
  ],
  menu,
};

export const contact = {
  email: 'info@imbermedical.com',
  address: ['1620 Frederica Road', 'St. Simons Island, GA 31522'],
  mapHref: 'https://www.google.com/maps/dir/?api=1&destination=1620+Frederica+Road+St.+Simons+Island+GA+31522',
  hours: [
    { days: 'Mon–Fri', time: '9am – 5pm' },
    { days: 'Sat–Sun', time: 'Closed' },
  ],
  intro:
    'Have questions or ready to begin your aesthetic journey? Our friendly team is here to guide you every step of the way. Reach out today to schedule your consultation and discover personalized care designed around your goals.',
  photo: 'https://imbermedical.com/wp-content/uploads/2026/03/Imber-Medical-Img-SIL-V27.jpg-1-1-scaled-e1773850771844.jpeg',
  journeyPhoto: 'https://imbermedical.com/wp-content/uploads/2026/03/highres_3V2A2661-scaled.jpg',
};

export const footerLinks = {
  explore: [
    { label: 'About', href: '/about' },
    { label: 'Treatments', href: '/treatments/' },
    { label: 'Peptides', href: '/wellness-medical-weight-loss/peptide-therapy/' },
    { label: 'Weight Loss', href: '/wellness-medical-weight-loss/medical-assisted-weight-loss-glp-1-glp-3/' },
    { label: 'Hormone Therapy (BHRT)', href: '/wellness-medical-weight-loss/bioidentical-hormone-replacement-therapy-bhrt/' },
    { label: 'Contact', href: '/contact-us' },
  ],
  resources: [
    { label: 'Before & After Gallery', href: '/before-after-gallery' },
    { label: 'Financing', href: '/financing' },
    { label: 'Our Products', href: '/our-products' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'Our Videos', href: '/our-technology-videos' },
    { label: 'Imber Medical App', href: 'https://imber.repeatmd.app/app/signin' },
  ],
  legal: [
    { label: 'Articles', href: '/articles' },
    { label: 'Terms & Conditions', href: '/terms-conditions' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Cookie Policy', href: '/cookie-policy' },
    { label: 'Notice of Privacy Practices', href: '/notice-of-privacy-practices' },
    { label: 'Accessibility', href: '/accessibility' },
  ],
};
