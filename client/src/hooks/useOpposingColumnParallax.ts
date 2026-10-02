import { useEffect, useLayoutEffect, useState, type RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

gsap.registerPlugin(ScrollTrigger);

type OpposingColumnParallaxOptions = {
  intensity?: number;
};

export function useParallaxIntensity() {
  const [intensity, setIntensity] = useState(1);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const update = () => setIntensity(mq.matches ? 0.55 : 1);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  return intensity;
}

export function useOpposingColumnParallax(
  sectionRef: RefObject<HTMLElement | null>,
  leftRef: RefObject<HTMLElement | null>,
  rightRef: RefObject<HTMLElement | null>,
  { intensity = 1 }: OpposingColumnParallaxOptions = {},
) {
  const reduced = usePrefersReducedMotion();

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const left = leftRef.current;
    const right = rightRef.current;
    if (!section || !left || !right || reduced) return;

    const ctx = gsap.context(() => {
      const leftTravel = left.scrollHeight * 0.38 * intensity;
      const rightTravel = right.scrollHeight * 0.38 * intensity;

      gsap.set(left, { y: leftTravel * 0.12 });
      gsap.set(right, { y: -rightTravel * 0.12 });

      gsap.to(left, {
        y: -leftTravel,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.85,
          invalidateOnRefresh: true,
        },
      });

      gsap.to(right, {
        y: rightTravel,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.85,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    const refreshId = window.setTimeout(() => ScrollTrigger.refresh(), 200);

    return () => {
      window.clearTimeout(refreshId);
      ctx.revert();
    };
  }, [intensity, reduced]);
}
