import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';

type Item = { name: string; kind: string; image: string };
type Props = { items: Item[]; href: string };

export default function ProductCarousel({ items, href }: Props) {
  const scroller = useRef<HTMLUListElement>(null);
  const drag = useRef({ down: false, x: 0, left: 0, moved: false });
  const [progress, setProgress] = useState(0);
  const [edge, setEdge] = useState({ start: true, end: false });
  const reduce = useReducedMotion();

  const update = () => {
    const el = scroller.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);
    setEdge({ start: el.scrollLeft < 4, end: el.scrollLeft > max - 4 });
  };
  useEffect(() => {
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const go = (dir: 1 | -1) => {
    const el = scroller.current;
    if (!el) return;
    const card = el.querySelector('li')?.getBoundingClientRect().width ?? 320;
    el.scrollBy({ left: dir * (card + 24), behavior: reduce ? 'auto' : 'smooth' });
  };

  // Mouse drag (touch already scrolls natively)
  const onDown = (e: React.PointerEvent) => {
    if (e.pointerType !== 'mouse') return;
    const el = scroller.current!;
    drag.current = { down: true, x: e.clientX, left: el.scrollLeft, moved: false };
  };
  const onMove = (e: React.PointerEvent) => {
    const d = drag.current;
    if (!d.down) return;
    const dx = e.clientX - d.x;
    if (Math.abs(dx) > 5) {
      d.moved = true;
      const el = scroller.current!;
      el.style.scrollSnapType = 'none';
      el.scrollLeft = d.left - dx;
    }
  };
  const onUp = () => {
    const el = scroller.current!;
    drag.current.down = false;
    el.style.scrollSnapType = '';
    setTimeout(() => (drag.current.moved = false), 0);
  };

  const arrow =
    'grid size-12 place-items-center rounded-full border border-white/30 text-white transition-colors hover:border-gold hover:bg-gold hover:text-black disabled:pointer-events-none disabled:opacity-30';

  return (
    <div role="region" aria-roledescription="carousel" aria-label="Our products">
      <ul
        ref={scroller}
        onScroll={update}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerLeave={onUp}
        className="flex cursor-grab snap-x snap-mandatory gap-6 overflow-x-auto pb-4 ps-[var(--pad)] pe-5 [scrollbar-width:none] active:cursor-grabbing [&::-webkit-scrollbar]:hidden"
        style={{ scrollPaddingInlineStart: 'var(--pad, 1.25rem)' }}
      >
        {items.map((p, i) => (
          <motion.li
            key={p.name}
            className="w-[68vw] max-w-[300px] shrink-0 snap-start xl:w-[320px] xl:max-w-none"
            initial={reduce ? false : { opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: Math.min(i, 4) * 0.08, ease: [0.2, 0.7, 0.2, 1] }}
          >
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              draggable={false}
              onClick={(e) => drag.current.moved && e.preventDefault()}
              aria-label={`${p.name}, ${p.kind}. Shop online`}
              className="group block"
            >
              <span className="relative block aspect-square overflow-hidden rounded-img bg-white/10 ring-1 ring-white/10 transition-[transform,box-shadow] duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_30px_60px_-20px_rgba(201,175,85,.45)] group-focus-visible:-translate-y-2">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  draggable={false}
                  className="size-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                />
                <span className="absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-between bg-gradient-to-t from-black/75 to-transparent px-4 pb-4 pt-10 text-[11px] font-semibold uppercase tracking-[0.24em] text-gold transition-transform duration-500 group-hover:translate-y-0 group-focus-visible:translate-y-0 max-xl:translate-y-0">
                  Shop now
                  <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </span>
              </span>
              <span className="mt-5 block border-t border-gold/40 pt-4 transition-colors group-hover:border-gold">
                <span className="block font-display text-[22px] leading-tight text-white transition-colors group-hover:text-gold">{p.name}</span>
                <span className="mt-1.5 block text-[11px] uppercase tracking-[0.22em] text-white/55">{p.kind}</span>
              </span>
            </a>
          </motion.li>
        ))}
      </ul>

      <div className="mx-auto mt-10 flex max-w-[1320px] items-center gap-6 px-5 xl:px-10">
        <div className="h-px flex-1 bg-white/20" aria-hidden="true">
          <div className="h-px origin-left bg-gold" style={{ transform: `scaleX(${0.12 + progress * 0.88})` }} />
        </div>
        <div className="flex gap-3">
          <button type="button" className={arrow} onClick={() => go(-1)} disabled={edge.start} aria-label="Previous products">
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M19 12H5M11 6l-6 6 6 6" /></svg>
          </button>
          <button type="button" className={arrow} onClick={() => go(1)} disabled={edge.end} aria-label="Next products">
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
}
