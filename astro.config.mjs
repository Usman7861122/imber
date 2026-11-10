// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com', // TODO: set real domain
  redirects: {
    '/finding-a-comprehensive-functional-medicine-practitioner-in-st-simons-island-ga/': '/articles/finding-a-comprehensive-functional-medicine-practitioner-in-st-simons-island-ga/',
    '/radiofrequency-microneedling-for-skin-tightening-in-st-simons-island-ga/': '/articles/radiofrequency-microneedling-for-skin-tightening-in-st-simons-island-ga/',
    '/severe-acne-flare-up-treatment-options-in-st-simons-island-ga/': '/articles/severe-acne-flare-up-treatment-options-in-st-simons-island-ga/',
    '/the-secret-to-smooth-natural-results-injectable-wrinkle-relaxers-on-st-simons-island/': '/articles/the-secret-to-smooth-natural-results-injectable-wrinkle-relaxers-on-st-simons-island/',
    '/is-laser-hair-removal-worth-it-benefits-results-and-what-to-expect-in-glynn-county-ga/': '/articles/is-laser-hair-removal-worth-it-benefits-results-and-what-to-expect-in-glynn-county-ga/',
    '/are-peptides-safe-understanding-the-benefits-and-risks-of-peptide-therapy/': '/articles/are-peptides-safe-understanding-the-benefits-and-risks-of-peptide-therapy/',
    '/laser-hair-removal-in-st-simons-island-ga-a-long-term-solution-for-smooth-confident-skin/': '/articles/laser-hair-removal-in-st-simons-island-ga-a-long-term-solution-for-smooth-confident-skin/',
    '/sculpting-the-natural-silhouette-why-alma-beautifill-is-the-premiere-choice-for-liposuction-and-volume-restoration-in-glynn-county/': '/articles/sculpting-the-natural-silhouette-why-alma-beautifill-is-the-premiere-choice-for-liposuction-and-volume-restoration-in-glynn-county/',
    '/the-science-of-scalp-regeneration-why-alma-ted-is-the-gold-standard-for-hair-restoration-in-glynn-county/': '/articles/the-science-of-scalp-regeneration-why-alma-ted-is-the-gold-standard-for-hair-restoration-in-glynn-county/',
  },

  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
