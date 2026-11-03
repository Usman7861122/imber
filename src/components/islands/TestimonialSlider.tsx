import { useEffect, useState } from 'react';

type Item = { author: string; text: string };

const SECONDS = 9;

const Star = () => (
  <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden="true">
    <path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3 6.1 20.6l1.3-6.6L2.5 9.4l6.6-.8z" />
  </svg>
);

export default function TestimonialSlider({ items }: { items: Item[] }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const [auto, setAuto] = useState(true);
  const n = items.length;

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) setAuto(false);
  }, []);

  const go = (k: number) => setI((k + n) % n);

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Patient testimonials"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* Quote: every quote shares one grid cell, so the height never jumps */}
      <div className="relative mx-auto max-w-[980px] text-center">
        <span className="pointer-events-none absolute -top-6 left-1/2 -translate-x-1/2 select-none font-display text-[150px] leading-none text-gold/30 sm:-top-10 sm:text-[210px]" aria-hidden="true">“</span>
        <div className="relative grid pt-16 sm:pt-24" aria-live={paused ? 'polite' : 'off'}>
          {items.map((t, k) => (
            <figure
              key={t.author}
              aria-hidden={k !== i}
              className={`[grid-area:1/1] flex flex-col items-center transition-[opacity,transform] duration-[900ms] ease-out ${
                k === i ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
              }`}
            >
              <div className="flex gap-1 text-gold" role="img" aria-label="5 out of 5 stars">
                {[0, 1, 2, 3, 4].map((s) => (<Star key={s} />))}
              </div>
              <blockquote className="mt-8 font-display text-[26px] leading-[1.4] text-ink sm:text-[34px] xl:text-[40px] xl:leading-[1.38]">
                {t.text}
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4 text-[12px] font-semibold uppercase tracking-[0.28em] text-ink">
                <span className="h-px w-8 bg-gold" aria-hidden="true" />{t.author}<span className="h-px w-8 bg-gold" aria-hidden="true" />
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* Chooser: name + first words; the active one fills a gold line while the quote plays */}
      <div className="mx-auto mt-14 grid max-w-[1100px] grid-cols-2 items-start gap-x-5 gap-y-8 xl:mt-20 xl:grid-cols-4 xl:gap-x-8" role="group" aria-label="Choose a testimonial">
        {items.map((t, k) => (
          <button
            key={t.author}
            type="button"
            aria-current={k === i}
            onClick={() => go(k)}
            className="group text-left"
          >
            <span className="relative block h-[2px] w-full overflow-hidden bg-ink/15">
              {k === i && (
                <span
                  key={i}
                  className="absolute inset-0 origin-left bg-gold"
                  style={
                    auto
                      ? { animation: `grow-x ${SECONDS}s linear forwards`, animationPlayState: paused ? 'paused' : 'running' }
                      : undefined
                  }
                  onAnimationEnd={() => go(i + 1)}
                />
              )}
            </span>
            <span className={`mt-4 block text-[12px] font-semibold uppercase tracking-[0.22em] transition-colors duration-300 ${k === i ? 'text-ink' : 'text-ink/60 group-hover:text-ink'}`}>
              {t.author}
            </span>
            <span className={`mt-2 line-clamp-2 text-[14px] leading-[22px] transition-colors duration-300 ${k === i ? 'text-body' : 'text-ink/55 group-hover:text-body'}`}>
              {t.text}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
