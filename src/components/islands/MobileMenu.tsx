import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';

type Child = { label: string; href: string };
type Item = { label: string; href?: string; children?: Child[] };

export default function MobileMenu({ items }: { items: Item[] }) {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const reduce = useReducedMotion();

  return (
    <div>
      <button
        aria-label="Menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex size-[38px] items-center justify-center rounded-[3px] bg-ink text-white"
      >
        <svg viewBox="0 0 448 512" className="size-[25px]" fill="currentColor" aria-hidden="true">
          {open ? (
            <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
          ) : (
            <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" />
          )}
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Mobile"
            initial={reduce ? false : { opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="absolute left-0 right-0 top-full z-50 max-h-[70svh] overflow-y-auto bg-black shadow-lg"
          >
            <ul>
              {items.map((i) => (
                <li key={i.label} className="border-b border-white/10">
                  <div className="flex items-center justify-between">
                    {i.href ? (
                      <a href={i.href} className="flex-1 px-5 py-3.5 text-[17px] text-white" onClick={() => setOpen(false)}>
                        {i.label}
                      </a>
                    ) : (
                      <button className="flex-1 px-5 py-3.5 text-left text-[17px] text-white" onClick={() => setExpanded(expanded === i.label ? null : i.label)}>
                        {i.label}
                      </button>
                    )}
                    {i.children && (
                      <button
                        aria-label={`Show ${i.label} pages`}
                        aria-expanded={expanded === i.label}
                        onClick={() => setExpanded(expanded === i.label ? null : i.label)}
                        className="px-5 py-3.5 text-gold"
                      >
                        {expanded === i.label ? '−' : '+'}
                      </button>
                    )}
                  </div>
                  {i.children && expanded === i.label && (
                    <ul className="bg-white/5 pb-2">
                      {i.children.map((c) => (
                        <li key={c.href}>
                          <a href={c.href} className="block px-8 py-2.5 text-[15px] text-white/90" onClick={() => setOpen(false)}>
                            {c.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}
