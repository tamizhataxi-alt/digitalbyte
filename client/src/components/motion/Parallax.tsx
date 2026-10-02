import type { ReactNode } from 'react';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

gsap.registerPlugin(ScrollTrigger);

type ParallaxProps = {
  children: ReactNode;
  className?: string;
  /** Scroll speed factor — 0.15 background, 0.35–0.5 images */
  speed?: number;
};

export function Parallax({ children, className = '', speed = 0.2 }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;

    const isCoarse = window.matchMedia('(max-width: 767px)').matches;
    const factor = isCoarse ? speed * 0.35 : speed;

    const ctx = gsap.context(() => {
      gsap.to(el, {
        y: () => factor * 120,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.6,
        },
      });
    }, el);

    return () => ctx.revert();
  }, [speed, reduced]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
