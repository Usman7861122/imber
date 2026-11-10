// Before & after cases. Photos: /public/images/before-after/NN-before.jpg and NN-after.jpg
// TODO (Dr. Slack): review treatment names and confirm patient photo consent.
export type BACategory = 'body' | 'face' | 'hair' | 'skin';
export interface BACase { n: number; title: string; cat: BACategory; alt: string }

export const baCategories: { id: 'all' | BACategory; label: string }[] = [
  { id: 'all', label: 'All results' },
  { id: 'body', label: 'Body contouring' },
  { id: 'face', label: 'Face & injectables' },
  { id: 'hair', label: 'Hair restoration' },
  { id: 'skin', label: 'Skin & tattoo' },
];

const c = (n: number, title: string, cat: BACategory, alt: string): BACase => ({ n, title, cat, alt });

export const baCases: BACase[] = [
  c(1, 'BeautiFill laser liposuction', 'body', 'side view of the waist and hips'),
  c(2, 'EmSculpt', 'body', 'the abdomen'),
  c(3, 'BeautiFill laser liposuction', 'body', 'side view of the waist and hips'),
  c(31, 'BeautiFill laser liposuction', 'body', 'side view of the waist and hips'),
  c(32, 'BeautiFill laser liposuction', 'body', 'rear and side view of the hips'),
  c(33, 'BeautiFill laser liposuction', 'body', 'rear view of the hips and thighs'),
  c(34, 'BeautiFill laser liposuction', 'body', 'front view of the abdomen and hips'),
  c(7, 'BeautiFill laser liposuction', 'body', 'side view of the abdomen'),
  c(25, 'truSculpt body sculpting', 'body', 'the back and waist'),
  c(4, 'Non-surgical transformation', 'face', 'the face'),
  c(19, 'Non-surgical transformation', 'face', 'the face'),
  c(17, 'Fat grafting to the face', 'face', 'the face'),
  c(14, 'truSculpt facial sculpting', 'face', 'the jawline and neck'),
  c(30, 'truSculpt chin and neck', 'face', 'the chin and neck'),
  c(11, 'Lip flip with Newtox', 'face', 'the lips'),
  c(13, 'Lip filler', 'face', 'the lips'),
  c(12, 'Lip filler and DAO injection', 'face', 'the lips and mouth corners'),
  c(21, 'Lip filler and DAO injection', 'face', 'the lips and mouth corners'),
  c(35, 'Lip filler', 'face', 'the lines around the mouth'),
  c(20, 'Jeuveau neurotoxin', 'face', 'the forehead'),
  c(22, 'Daxxify neurotoxin', 'face', 'the forehead'),
  c(5, 'Hair restoration with TED', 'hair', 'the hairline and crown'),
  c(6, 'Hair restoration with TED', 'hair', 'the side of the head'),
  c(8, 'Hair restoration with TED', 'hair', 'the side of the head'),
  c(9, 'Hair restoration with TED', 'hair', 'the top of the head'),
  c(26, 'Hair restoration with TED', 'hair', 'the hairline'),
  c(27, 'Hair restoration with TED', 'hair', 'the part line'),
  c(28, 'Hair restoration with TED', 'hair', 'the top of the head'),
  c(29, 'Hair restoration with TED', 'hair', 'the top of the head'),
  c(38, 'Hair restoration with TED', 'hair', 'the scalp'),
  c(39, 'Hair restoration with TED', 'hair', 'the scalp'),
  c(15, 'AviClear acne treatment', 'skin', 'the cheek'),
  c(16, 'Pico Genesis pigmentation treatment', 'skin', 'the cheek and temple'),
  c(18, 'Rosacea treatment with Excel V', 'skin', 'the cheeks'),
  c(36, 'Rosacea treatment with Excel V', 'skin', 'the cheek'),
  c(10, 'Tattoo removal with Enlighten and Cutera', 'skin', 'the hand'),
  c(23, 'Tattoo removal with Enlighten and Cutera', 'skin', 'the hand'),
  c(24, 'Tattoo removal with Enlighten and Cutera', 'skin', 'the arm'),
  c(37, 'Tattoo removal with Enlighten and Cutera', 'skin', 'the wrist'),
];
