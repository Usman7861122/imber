export type InstagramPost = {
  id: string;
  permalink: string;
  type: 'image' | 'reel' | 'carousel';
  image: string;
  caption: string;
  timestamp?: string;
};

export const instagram = {
  handle: 'imbermedicalssi',
  url: 'https://www.instagram.com/imbermedicalssi/',
  bio: 'Advanced Aesthetics + Functional Medicine · Skin • Hair • Hormones • Longevity',
  location: 'St. Simons Island, GA',
  avatar: 'https://imbermedical.com/wp-content/uploads/sb-instagram-feed-images/imbermedicalssi.webp',
};

/**
 * Stand-in posts, copied from the live site, shown until a live feed is connected
 * (set PUBLIC_INSTAGRAM_FEED_URL in .env). Images are hot-linked from the old site,
 * so replace them once the live feed is on.
 */
const img = (f: string) => `https://imbermedical.com/wp-content/uploads/sb-instagram-feed-images/${f}`;

export const samplePosts: InstagramPost[] = [
  { id: '17956486305299052', type: 'reel', permalink: 'https://www.instagram.com/reel/DfQVIyDgvPn/', image: img('887228072_18102572108180897_978035683284128269_nfull.webp'),
    caption: 'A refined approach to body contouring. Dr. Laura Slack discusses EmSculpt, offered at Imber Medical. We would be pleased to answer your questions in person or by phone. #Emsculpt #BodyContouring' },
  { id: '18114514274162453', type: 'carousel', permalink: 'https://www.instagram.com/p/DfHpAIxgXcJ/', image: img('871683792_18102141179180897_8397948968540257268_nfull.webp'),
    caption: "Dr. Laura Slack's path to aesthetics began in family medicine. She listens closely, explains options with clarity, and shapes each plan to the person before her." },
  { id: '18035710925903382', type: 'reel', permalink: 'https://www.instagram.com/reel/DfFu4_ShYmS/', image: img('877551245_1131969202655595_1854798696040978386_nfull.webp'),
    caption: 'The best aesthetic plan starts with understanding your face. At Imber Medical, we take time to assess your features, listen to your goals, and create a personalized approach.' },
  { id: '18084829055326474', type: 'carousel', permalink: 'https://www.instagram.com/p/De11Pe6D7Wg/', image: img('858356157_18101114558180897_9161856535965005923_nfull.webp'),
    caption: 'Advanced aesthetics, framed by the coastal calm of St. Simons Island. We plan treatments such as Hair Restoration and Laser Hair Removal around the individual.' },
  { id: '18633104353030771', type: 'reel', permalink: 'https://www.instagram.com/reel/DezHng3OfKg/', image: img('863592948_1423898013267973_6059418312404837210_nfull.webp'),
    caption: 'Beautiful contours. Thoughtfully refined. Discover BeautiFill laser liposuction at Imber Medical, a personalized approach to enhancing your natural contours.' },
  { id: '18072015251779500', type: 'carousel', permalink: 'https://www.instagram.com/p/DeuwEv2gegu/', image: img('851411320_18100795958180897_8831040310230761416_nfull.webp'),
    caption: "In a client's own words. \"Each procedure I've had at Imber has exceeded my expectations.\" Thank you, Gayle, for the kind review." },
  { id: '18136217413726155', type: 'image', permalink: 'https://www.instagram.com/p/DepmUWiAZfU/', image: img('855692249_18100547969180897_8820289660503938033_nfull.webp'),
    caption: 'From a client of five years. "After 5 years of being a client, I can\'t rave enough about Imber Medical."' },
  { id: '18170635366465245', type: 'reel', permalink: 'https://www.instagram.com/reel/DekPFtKiXHx/', image: img('849332111_18100291787180897_1124923840937085330_nfull.webp'),
    caption: 'Leading-edge treatments. Considered care. Dr. Laura Slack shares 21 lasers and modalities to address concerns from dark spots to moles you would like evaluated.' },
  { id: '17940303327368764', type: 'image', permalink: 'https://www.instagram.com/p/Deh3e0kvYJt/', image: img('848043322_18100183388180897_7918938637079907149_nfull.webp'),
    caption: 'Happy National Esthetician Day to our very own Emily! From her expert touch to the care she puts into every appointment, she helps our patients feel confident and glowing.' },
  { id: '18016886252976666', type: 'carousel', permalink: 'https://www.instagram.com/p/Dee-op4Ae_m/', image: img('846375249_18100048844180897_5192819017121565929_nfull.webp'),
    caption: 'A recommendation we are honored to receive. "Dr. Slack and her team are very professional, knowledgeable, friendly, and helpful."' },
  { id: '18088946324268224', type: 'reel', permalink: 'https://www.instagram.com/reel/DecFVVJGmBO/', image: img('845543086_18099917678180897_410457782181377631_nfull.webp'),
    caption: 'An introduction to truSculpt iD. Dr. Laura Slack shares her insights on this advanced body contouring option, available at Imber Medical.' },
  { id: '18147470599560912', type: 'carousel', permalink: 'https://www.instagram.com/p/DeaEdO7AcpB/', image: img('847630209_18099832241180897_6896252689197798017_nfull.webp'),
    caption: 'Meticulous care. Advanced aesthetics. Located on serene St. Simons Island. Body Contouring and Skin Tightening, each customized to the individual.' },
];
