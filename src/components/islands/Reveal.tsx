import { motion, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';

type Props = { children: ReactNode; delay?: number; y?: number; className?: string };

/** Fade + slide up when scrolled into view. Skips motion if the user prefers less. */
export default function Reveal({ children, delay = 0, y = 20, className }: Props) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
