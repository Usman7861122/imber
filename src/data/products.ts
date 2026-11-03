export const PRODUCT_IMG_BASE = 'https://imbermedical.com/wp-content/uploads/2026/03/';
export const PRODUCTS_URL = 'https://bit.ly/47f1OOE';

export const productsIntro = {
  title: 'Our Products',
  text: 'We offer carefully selected medical-grade skincare products designed to enhance results, improve skin health, and support your personalized aesthetic goals at home.',
};

export type Product = { name: string; kind: string; file: string };

// Names are read from the product labels on the live site's photos.
export const products: Product[] = [
  { name: 'BPC Rapid Pro', kind: 'Rapid release capsules', file: 'BPCrapidpro_c613f29f-65fa-48db-aecc-4a39151dd3aa_540x.webp' },
  { name: 'BPC Delayed Pro', kind: 'Delayed release capsules', file: 'openart-image_8gJ_Wyi0_1758672058717_raw_540x.webp' },
  { name: 'IgNight', kind: 'Capsules', file: 'Ignight-2_540x.webp' },
  { name: 'Duo', kind: 'Dropper', file: 'Duo-1_61791005-3fd9-4c47-9aa6-d6c53b93fce1_540x.webp' },
  { name: 'NMN', kind: 'Capsules', file: 'NMN-2_540x.webp' },
  { name: 'GI Prime', kind: 'Capsules', file: 'GIPrime-3_540x.webp' },
  { name: 'DHH-B', kind: 'Capsules', file: 'DHHB-2_540x.webp' },
  { name: 'Methylated B Complex', kind: 'Capsules', file: 'MethylatedBComplex-2_540x.webp' },
  { name: 'PTD-3', kind: 'Dropper', file: 'PTD-3_540x.jpg' },
  { name: 'ABC Complex', kind: 'Capsules', file: 'abstubs_540x.webp' },
];
