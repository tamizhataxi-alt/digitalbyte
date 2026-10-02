import type { ReactNode } from 'react';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { RevealVariant } from '../../lib/motion';
import { getRevealFrom, getRevealTo, GSAP_EASE } from '../../lib/motion';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

gsap.registerPlugin(ScrollTrigger);

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  start?: string;
  /** Clip-path reveal for images (about-style) */
  clipReveal?: boolean;
};

export function ScrollReveal({
  children,
  className = '',
  variant = 'text',
  delay = 0,
  duration,
  start = 'top 88%',
  clipReveal = false,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const dur =
      duration ??
      (variant === 'heading' ? 1.1 : variant === 'image' ? 1.25 : variant === 'card' ? 0.95 : 0.85);

    const ctx = gsap.context(() => {
      if (reduced) {
        gsap.set(el, { opacity: 1, clearProps: 'transform' });
        return;
      }

      const from = getRevealFrom(variant, false);
      const to = getRevealTo(variant, false);
      gsap.set(el, from);

      if (clipReveal) {
        gsap.set(el, { clipPath: 'inset(100% 0 0 0)', ...from });
        gsap.to(el, {
          clipPath: 'inset(0% 0 0 0)',
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          duration: dur,
          delay: delay / 1000,
          ease: GSAP_EASE,
          scrollTrigger: {
            trigger: el,
            start,
            once: true,
          },
        });
        return;
      }

      gsap.fromTo(
        el,
        from,
        {
          ...to,
          duration: dur,
          delay: delay / 1000,
          ease: GSAP_EASE,
          scrollTrigger: {
            trigger: el,
            start,
            once: true,
          },
        },
      );
    }, el);

    return () => ctx.revert();
  }, [variant, delay, duration, start, clipReveal, reduced]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
