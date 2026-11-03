import { useEffect, useState } from 'react';
import type { Review } from '../../data/location';

type Props = {
  name: string;
  category: string;
  rating: number;
  total: number;
  reviewsUrl: string;
  reviews: Review[];
  feedUrl?: string;
};

/** Accepts the Google Places API (New) shape, or { rating, total, reviews: [{author,text,rating}] }. */
function mapFeed(json: any): { rating?: number; total?: number; reviews: Review[] } {
  const list: any[] = json?.reviews ?? [];
  const reviews = list
    .map((r): Review => ({
      author: r.authorAttribution?.displayName ?? r.author ?? r.author_name ?? 'Patient',
      text: (r.text?.text ?? r.originalText?.text ?? r.text ?? '').toString().trim(),
      rating: Number(r.rating ?? 5),
      when: r.relativePublishTimeDescription ?? r.when ?? r.relative_time_description,
    }))
    .filter((r) => r.text && r.rating >= 4);
  return { rating: json?.rating, total: json?.userRatingCount ?? json?.total ?? json?.user_ratings_total, reviews };
}

function Stars({ value, size = 18 }: { value: number; size?: number }) {
  const row = (color: string) => (
    <span className="flex" style={{ color }}>
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
          <path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3 6.1 20.6l1.3-6.6L2.5 9.4l6.6-.8z" />
        </svg>
      ))}
    </span>
  );
  return (
    <span className="relative inline-block" role="img" aria-label={`${value} out of 5 stars`}>
      {row('#d9d9d9')}
      <span className="absolute inset-0 overflow-hidden" style={{ width: `${(Math.min(value, 5) / 5) * 100}%` }}>
        {row('#c9af55')}
      </span>
    </span>
  );
}

export default function ReviewsCard(props: Props) {
  const [data, setData] = useState({ rating: props.rating, total: props.total, reviews: props.reviews });
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!props.feedUrl) return;
    const ctrl = new AbortController();
    fetch(props.feedUrl, { signal: ctrl.signal })
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((json) => {
        const m = mapFeed(json);
        if (m.reviews.length) setData((d) => ({ rating: m.rating ?? d.rating, total: m.total ?? d.total, reviews: m.reviews.slice(0, 6) }));
      })
      .catch(() => {});
    return () => ctrl.abort();
  }, [props.feedUrl]);

  const n = data.reviews.length;
  useEffect(() => {
    if (paused || n < 2 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = setInterval(() => setI((x) => (x + 1) % n), 7000);
    return () => clearInterval(t);
  }, [paused, n]);

  return (
    <div
      className="rounded-img bg-white p-6 shadow-[0_30px_60px_-28px_rgba(28,27,27,.45)] ring-1 ring-ink/5 sm:p-8"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-3">
        <div>
          <p className="font-display text-[26px] leading-[32px] text-ink">{props.name}</p>
          <p className="mt-1 text-[13px] text-ink/70">{props.category}</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-display text-[34px] leading-none text-ink">{data.rating}</span>
          <div>
            <Stars value={data.rating} />
            <a href={props.reviewsUrl} target="_blank" rel="noopener noreferrer" className="mt-1 block text-[12px] font-medium text-ink underline decoration-gold decoration-2 underline-offset-4 hover:text-black">
              {data.total} Google reviews
            </a>
          </div>
        </div>
      </div>

      <span className="my-6 block h-px w-full bg-ink/10" aria-hidden="true" />

      {/* Rotating review: all quotes share one grid cell so the card keeps a steady height */}
      <div className="grid" aria-live={paused ? 'polite' : 'off'}>
        {data.reviews.map((r, k) => (
          <figure
            key={k}
            className={`[grid-area:1/1] transition-opacity duration-700 ${k === i ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
            aria-hidden={k !== i}
          >
            <blockquote className="font-display text-[19px] leading-[29px] text-ink sm:text-[21px] sm:leading-[31px]">“{r.text}”</blockquote>
            <figcaption className="mt-4 flex items-center gap-3 text-[13px] text-ink/80">
              <span className="h-px w-6 bg-gold" aria-hidden="true" />
              <span className="font-semibold text-ink">{r.author}</span>
              {r.when && <span className="text-ink/60">· {r.when}</span>}
            </figcaption>
          </figure>
        ))}
      </div>

      {n > 1 && (
        <div className="mt-6 flex gap-2" role="group" aria-label="Choose a review">
          {data.reviews.map((_, k) => (
            <button
              key={k}
              type="button"
              aria-label={`Show review ${k + 1}`}
              aria-current={k === i}
              onClick={() => setI(k)}
              className="grid h-6 w-6 place-items-center"
            >
              <span className={`block h-[3px] rounded-full transition-all duration-500 ${k === i ? 'w-8 bg-gold' : 'w-4 bg-ink/20'}`} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
