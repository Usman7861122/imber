import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import type { InstagramPost } from '../../data/instagram';

type Props = { posts: InstagramPost[]; feedUrl?: string };

/** Turn a caption into a short, clean line for the hover card. */
function excerpt(caption: string, max = 120) {
  const clean = caption
    .replace(/#\w+/g, '')
    .replace(/912-268-2103|ImberMedical\.com/gi, '')
    .replace(/We look forward to seeing you at Imber Medical soon\./gi, '')
    .replace(/\s+/g, ' ')
    .trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max);
  const stop = Math.max(cut.lastIndexOf('. '), cut.lastIndexOf('! '), cut.lastIndexOf('? '));
  return stop > 50 ? cut.slice(0, stop + 1) : cut.replace(/\s+\S*$/, '') + '…';
}

/** Accepts a Behold-style JSON feed ({ posts: [...] }) and maps it to our post shape. */
function mapFeed(json: any): InstagramPost[] {
  const list: any[] = json?.posts ?? json?.data ?? [];
  return list
    .map((p): InstagramPost => {
      const isReel = p.isReel || p.mediaType === 'VIDEO';
      const type = isReel ? 'reel' : p.mediaType === 'CAROUSEL_ALBUM' ? 'carousel' : 'image';
      const image =
        p.sizes?.large?.mediaUrl ?? p.thumbnailUrl ?? p.thumbnail_url ?? (isReel ? '' : p.mediaUrl ?? p.media_url);
      return { id: String(p.id), permalink: p.permalink, type, image, caption: p.caption ?? p.prunedCaption ?? '', timestamp: p.timestamp };
    })
    .filter((p) => p.image && p.permalink)
    .slice(0, 12);
}

const Badge = ({ type }: { type: InstagramPost['type'] }) =>
  type === 'image' ? null : (
    <span className="absolute right-3 top-3 grid size-8 place-items-center rounded-full bg-white/90 text-ink" aria-hidden="true">
      {type === 'reel' ? (
        <svg viewBox="0 0 24 24" className="size-3.5" fill="currentColor"><path d="M7 4.5v15a1 1 0 0 0 1.5.86l12-7.5a1 1 0 0 0 0-1.72l-12-7.5A1 1 0 0 0 7 4.5z" /></svg>
      ) : (
        <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="8" y="3" width="13" height="13" rx="2" /><path d="M5 7.5V18a3 3 0 0 0 3 3h10.5" /></svg>
      )}
    </span>
  );

export default function InstagramFeed({ posts: initial, feedUrl }: Props) {
  const [posts, setPosts] = useState(initial);
  const scroller = useRef<HTMLUListElement>(null);
  const [progress, setProgress] = useState(0);
  const [edge, setEdge] = useState({ start: true, end: false });
  const reduce = useReducedMotion();

  // Live feed: replaces the stand-in posts when the feed URL answers.
  useEffect(() => {
    if (!feedUrl) return;
    const ctrl = new AbortController();
    fetch(feedUrl, { signal: ctrl.signal })
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((json) => {
        const next = mapFeed(json);
        if (next.length) setPosts(next);
      })
      .catch(() => {});
    return () => ctrl.abort();
  }, [feedUrl]);

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
  }, [posts]);

  const go = (dir: 1 | -1) => {
    const el = scroller.current;
    if (!el) return;
    const card = el.querySelector('li')?.getBoundingClientRect().width ?? 320;
    el.scrollBy({ left: dir * (card + 20) * 2, behavior: reduce ? 'auto' : 'smooth' });
  };

  const arrow =
    'grid size-12 place-items-center rounded-full border border-ink/30 text-ink transition-colors hover:border-black hover:bg-black hover:text-gold disabled:pointer-events-none disabled:opacity-30';

  return (
    <div role="region" aria-roledescription="carousel" aria-label="Latest Instagram posts">
      <ul
        ref={scroller}
        onScroll={update}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-ps-5 pb-2 ps-5 pe-5 [scrollbar-width:none] xl:scroll-ps-[max(2.5rem,calc((100vw_-_1320px)/2_+_2.5rem))] xl:ps-[max(2.5rem,calc((100vw_-_1320px)/2_+_2.5rem))] [&::-webkit-scrollbar]:hidden"
      >
        {posts.map((p, i) => (
          <motion.li
            key={p.id}
            className="w-[72vw] max-w-[320px] shrink-0 snap-start xl:w-[340px] xl:max-w-none"
            initial={reduce ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: Math.min(i, 4) * 0.07, ease: [0.2, 0.7, 0.2, 1] }}
          >
            <a
              href={p.permalink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View on Instagram: ${excerpt(p.caption, 80)}`}
              className="group relative block aspect-square overflow-hidden rounded-img bg-fog"
            >
              <img
                src={p.image}
                alt=""
                loading="lazy"
                draggable={false}
                className="size-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05] group-focus-visible:scale-[1.05]"
              />
              <Badge type={p.type} />
              {/* Caption veil: on hover/focus, and always on touch screens */}
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/90 via-ink/40 to-transparent p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100 [@media(hover:none)]:opacity-100 [@media(hover:none)]:from-ink/80 [@media(hover:none)]:via-transparent">
                <span className="mb-3 block h-px w-8 bg-gold" aria-hidden="true" />
                <p className="line-clamp-3 text-[14px] leading-[21px] text-white [@media(hover:none)]:line-clamp-2">{excerpt(p.caption)}</p>
                <span className="mt-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold [@media(hover:none)]:hidden">View on Instagram →</span>
              </div>
            </a>
          </motion.li>
        ))}
      </ul>

      <div className="mx-auto mt-8 flex max-w-[1320px] items-center gap-8 px-5 xl:px-10">
        <div className="relative h-px flex-1 bg-ink/15" aria-hidden="true">
          <div className="absolute inset-y-[-1px] left-0 h-[3px] bg-gold" style={{ width: `${Math.max(8, progress * 100)}%` }} />
        </div>
        <div className="flex gap-3">
          <button type="button" aria-label="Previous posts" disabled={edge.start} onClick={() => go(-1)} className={arrow}>
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M15 5l-7 7 7 7" /></svg>
          </button>
          <button type="button" aria-label="Next posts" disabled={edge.end} onClick={() => go(1)} className={arrow}>
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
}
