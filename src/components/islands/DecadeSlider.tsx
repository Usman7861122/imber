import { useRef, useState, type KeyboardEvent } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import type { Decade } from '../../data/decades';

const Dot = () => <span className="mt-[9px] block size-[5px] shrink-0 rounded-full bg-gold" aria-hidden="true" />;

export default function DecadeSlider({ decades, bookUrl }: { decades: Decade[]; bookUrl: string }) {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();
  const startX = useRef<number | null>(null);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const n = decades.length;
  const d = decades[i];

  const go = (next: number, focus = false) => {
    const k = (next + n) % n;
    setI(k);
    if (focus) tabs.current[k]?.focus();
  };
  const onKey = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); go(i + 1, true); }
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); go(i - 1, true); }
  };

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Treatments by decade"
      className="relative bg-white xl:h-[100svh] xl:max-h-[980px] xl:min-h-[840px] xl:overflow-hidden"
      onTouchStart={(e) => (startX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (startX.current === null) return;
        const dx = e.changedTouches[0].clientX - startX.current;
        if (Math.abs(dx) > 60) go(i + (dx < 0 ? 1 : -1));
        startX.current = null;
      }}
    >
      {/* PHOTOS: cross-fade with a slow settle */}
      <div className="relative h-[440px] overflow-hidden bg-fog sm:h-[540px] xl:absolute xl:inset-0 xl:h-auto">
        {decades.map((x, k) => (
          <img
            key={x.decade}
            src={x.image}
            alt=""
            loading={k === 0 ? 'eager' : 'lazy'}
            draggable={false}
            className={`absolute inset-0 size-full object-cover object-[35%_12%] transition-[opacity,transform] duration-[1400ms] ease-out xl:object-[50%_0%] ${
              k === i ? 'scale-100 opacity-100' : 'scale-[1.07] opacity-0'
            }`}
          />
        ))}
        <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/35 to-transparent xl:hidden" aria-hidden="true" />

        {/* DECADE TABS */}
        <div
          role="tablist"
          aria-label="Choose a decade"
          onKeyDown={onKey}
          className="absolute z-20 inset-x-4 bottom-4 flex justify-between gap-1 rounded-img bg-white/85 p-1.5 shadow-[0_20px_40px_-20px_rgba(0,0,0,.5)] backdrop-blur-md sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 sm:justify-center xl:bottom-auto xl:left-auto xl:right-10 xl:top-8 xl:translate-x-0"
        >
          {decades.map((x, k) => (
            <button
              key={x.decade}
              ref={(el) => { tabs.current[k] = el; }}
              role="tab"
              id={`decade-tab-${k}`}
              aria-selected={k === i}
              aria-controls="decade-panel"
              tabIndex={k === i ? 0 : -1}
              onClick={() => go(k)}
              className={`flex-1 rounded-[6px] px-3 py-2.5 font-display text-[19px] leading-none transition-colors duration-300 sm:flex-none sm:px-6 sm:text-[22px] ${
                k === i ? 'bg-black text-gold' : 'text-ink hover:bg-ink/5'
              }`}
            >
              {x.decade}
            </button>
          ))}
        </div>
      </div>

      {/* CONTENT: glass card on desktop, plain block on phones */}
      <div className="px-5 py-12 xl:absolute xl:bottom-4 xl:right-10 xl:top-28 xl:flex xl:w-[580px] xl:overflow-y-auto xl:p-8 2xl:w-[620px] 2xl:p-10">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={d.decade}
            role="tabpanel"
            className="xl:my-auto"
            id="decade-panel"
            aria-labelledby={`decade-tab-${i}`}
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -14 }}
            transition={{ duration: 0.45, ease: [0.2, 0.7, 0.2, 1] }}
          >
            <p className="flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.34em] text-ink/70">
              <span className="h-px w-10 bg-gold" aria-hidden="true" />Care for every decade
            </p>

            <h3 className="mt-5 flex flex-wrap items-baseline gap-x-5 gap-y-1">
              <span className="font-display text-[72px] leading-[1] text-ink xl:text-[96px] xl:[@media(max-height:860px)]:text-[76px]">{d.decade}</span>
              <span className="text-[12px] font-semibold uppercase tracking-[0.3em] text-ink xl:text-[13px]">{d.name}</span>
            </h3>

            <p className="mt-5 max-w-[480px] text-[16px] leading-[26px] text-body">
              <span className="font-semibold text-ink">Goal: </span>{d.goal}
            </p>

            <div className="mt-7 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-ink/15 pt-7 xl:gap-x-10">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/60">Top concerns</p>
                <ul className="mt-3 space-y-1.5 text-[14px] leading-[22px] text-ink">
                  {d.concerns.map((c) => (<li key={c} className="flex gap-3"><Dot />{c}</li>))}
                </ul>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/60">Featured services</p>
                <ul className="mt-3 space-y-1.5 text-[14px] leading-[22px] text-ink">
                  {d.services.map((s) => (<li key={s} className="flex gap-3"><Dot />{s}</li>))}
                </ul>
              </div>
            </div>

            <div className="mt-9 flex flex-wrap items-center justify-between gap-x-8 gap-y-5 border-t border-ink/15 pt-7">
              <p className="font-display text-[24px] leading-[30px] text-ink xl:text-[26px]">{d.tagline}</p>
              <a
                href={bookUrl}
                className="inline-flex items-center justify-center bg-black px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.26em] text-gold transition-colors hover:bg-gold hover:text-black"
              >
                Book online
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
