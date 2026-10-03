import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { marketingHeroMedia } from '../data/siteMedia';
import { GSAP_EASE } from '../lib/motion';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

export function useHeroEntrance<T extends HTMLElement>(variant: 'dark' | 'marketing' = 'dark') {
  const rootRef = useRef<T>(null);
  const reduced = usePrefersReducedMotion();

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const heading = root.querySelector('[data-hero="heading"]');
    const supporting = root.querySelectorAll('[data-hero="supporting"]');
    const media = root.querySelector('[data-hero="media"]');
    const visual = root.querySelector('[data-hero="visual"]');
    const decor = root.querySelectorAll('[data-hero="decor"]');
    const cta = root.querySelectorAll('[data-hero="cta"]');

    const subject = root.querySelector('[data-hero="subject"]');

    if (reduced) {
      gsap.set([heading, ...supporting, media, visual, subject, ...decor, ...cta], {
        opacity: 1,
        clearProps: 'all',
      });
      return;
    }

    const ctx = gsap.context(() => {
      if (variant === 'marketing') {
        const immersive = marketingHeroMedia.visual.layout === 'immersive';

        if (heading) gsap.set(heading, { y: 80, opacity: 0 });
        if (supporting.length) gsap.set(supporting, { y: 50, opacity: 0 });
        gsap.set(decor, { y: 30, opacity: 0, scale: 0.92 });
        gsap.set(cta, { y: 28, opacity: 0 });

        if (!immersive) {
          gsap.set(visual, { opacity: 0 });
          if (subject) {
            gsap.set(subject, { scale: 1.04, opacity: 0, y: 36 });
          }
        }

        const tl = gsap.timeline({ defaults: { ease: GSAP_EASE } });
        if (heading) tl.to(heading, { y: 0, opacity: 1, duration: 1 }, 0);
        if (supporting.length) {
          tl.to(supporting, { y: 0, opacity: 1, duration: 0.85, stagger: 0.1 }, heading ? 0.18 : 0);
        }
        tl.to(cta, { y: 0, opacity: 1, duration: 0.75 }, 0.35);
        if (!immersive) {
          tl.to(visual, { opacity: 1, duration: 0.4 }, 0.28);
          if (subject) {
            tl.to(subject, { scale: 1, opacity: 1, y: 0, duration: 1.2 }, 0.32);
          }
        }
        if (decor.length) {
          tl.to(decor, { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.06 }, 0.45);
        }
        return;
      }

      gsap.set(media, { scale: 1.12, opacity: 0.85 });
      gsap.set(heading, { y: 120, opacity: 0 });
      gsap.set(supporting, { y: 70, opacity: 0 });
      gsap.set(decor, { y: 50, opacity: 0, rotation: -6 });
      gsap.set(cta, { y: 40, opacity: 0 });

      const tl = gsap.timeline({ defaults: { ease: GSAP_EASE } });
      tl.to(heading, { y: 0, opacity: 1, duration: 1.15 }, 0)
        .to(supporting, { y: 0, opacity: 1, duration: 0.9, stagger: 0.12 }, 0.2)
        .to(media, { scale: 1, opacity: 1, duration: 1.4 }, 0.35)
        .to(decor, { y: 0, opacity: 1, rotation: 0, duration: 0.85, stagger: 0.1 }, 0.55)
        .to(cta, { y: 0, opacity: 1, duration: 0.75, stagger: 0.1 }, 0.7);
    }, root);

    return () => ctx.revert();
  }, [reduced, variant]);

  return rootRef;
}
