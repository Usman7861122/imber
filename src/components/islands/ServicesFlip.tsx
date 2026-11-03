import { useState } from 'react';

type Item = { slug: string; title: string; blurb: string; image: string; href?: string };

const face = { backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' } as const;

/**
 * Flip cards (square, softly rounded).
 * Front: photo + title. Back: the same photo under a dark tint, with the description.
 * Mouse: flips on hover. Touch: tap to flip. Keyboard: flips when focused.
 */
export default function ServicesFlip({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <ul className="mx-auto mt-14 grid max-w-[1320px] grid-cols-1 gap-5 px-5 sm:grid-cols-2 sm:gap-6 xl:mt-16 xl:grid-cols-3 xl:gap-8 xl:px-10">
      {items.map((s, i) => {
        const flipped = open === i;
        return (
          <li
            key={s.slug}
            className="aspect-square"
            style={{ perspective: '1400px' }}
            onPointerEnter={(e) => e.pointerType === 'mouse' && setOpen(i)}
            onPointerLeave={(e) => e.pointerType === 'mouse' && setOpen((c) => (c === i ? null : c))}
            onFocus={() => setOpen(i)}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen((c) => (c === i ? null : c));
            }}
          >
            <div
              className="relative size-full transition-transform duration-[900ms] ease-[cubic-bezier(.2,.7,.2,1)] motion-reduce:duration-[1ms]"
              style={{
                transformStyle: 'preserve-3d',
                transform: flipped ? 'translateY(-8px) rotateY(180deg)' : 'none',
              }}
            >
              {/* FRONT: photo + title */}
              <button
                type="button"
                aria-expanded={flipped}
                aria-label={`${s.title}: show details`}
                onClick={(e) => {
                  if ((e.nativeEvent as PointerEvent).pointerType === 'mouse') return;
                  setOpen(flipped ? null : i);
                }}
                className="absolute inset-0 block overflow-hidden rounded-img bg-fog text-left shadow-[0_14px_30px_-18px_rgba(28,27,27,.55)]"
                style={face}
              >
                <img src={s.image} alt="" loading="lazy" draggable={false} className="size-full object-cover" />
                <span className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" aria-hidden="true" />
                <span className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 sm:p-7">
                  <span className="mb-4 block h-px w-8 bg-gold" aria-hidden="true" />
                  <span className="font-display text-[26px] leading-[32px] text-white xl:text-[28px] xl:leading-[34px]">{s.title}</span>
                  <span className="mt-4 inline-flex items-center gap-2 border border-gold/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold" aria-hidden="true">
                    Read more
                    <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 5v14M5 12h14" /></svg>
                  </span>
                </span>
              </button>

              {/* BACK: same photo, tinted, with the description */}
              <div
                // @ts-ignore inert is valid HTML
                inert={flipped ? undefined : true}
                className="absolute inset-0 overflow-hidden rounded-img bg-ink shadow-[0_30px_50px_-20px_rgba(28,27,27,.7)]"
                style={{ ...face, transform: 'rotateY(180deg)' }}
              >
                <img
                  src={s.image}
                  alt=""
                  loading="lazy"
                  draggable={false}
                  className={`absolute inset-0 size-full object-cover transition-transform duration-[1400ms] ease-out ${flipped ? 'scale-100' : 'scale-110'}`}
                />
                <span className="absolute inset-0 bg-ink/[.78]" aria-hidden="true" />
                <span className="absolute inset-2 rounded-[6px] border border-gold/60" aria-hidden="true" />
                <div className="relative flex size-full flex-col justify-center px-7 py-6 sm:px-8 xl:px-9">
                  <span className="mb-4 block h-px w-8 bg-gold" aria-hidden="true" />
                  <h3 className="font-display text-[24px] leading-[30px] text-white">{s.title}</h3>
                  <p className="mt-3 text-[15px] leading-[24px] text-white/90">{s.blurb}</p>
                  <a
                    href={s.href ?? `/services/${s.slug}`}
                    className="mt-6 inline-flex items-center gap-2 self-start whitespace-nowrap bg-gold px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-black transition-colors hover:bg-white"
                  >
                    Learn more
                    <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                  </a>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
