import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { processSteps } from '../../data/home';
import { sectionMedia } from '../../data/siteMedia';
import { Reveal } from '../ui/Reveal';
import { WideContainer } from '../ui/WideContainer';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  {
    label: 'Delivery rhythm',
    value: 'Iterative',
    detail: 'Short cycles with demos you can react to',
  },
  {
    label: 'Quality bar',
    value: 'Production',
    detail: 'Performance, accessibility and reliability considered early',
  },
  {
    label: 'Collaboration',
    value: 'Embedded',
    detail: 'Your team stays close to decisions and trade-offs',
  },
];

export function StudioProcess() {
  const pinRef = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useLayoutEffect(() => {
    const root = pinRef.current;
    if (!root || reduced) return;

    const mm = gsap.matchMedia();
    mm.add('(min-width: 1024px)', () => {
      const steps = gsap.utils.toArray<HTMLElement>('[data-process-step]', root);
      const visual = root.querySelector('[data-process-visual]');
      if (!steps.length || !visual) return;

      gsap.set(steps, { opacity: 0, y: 48 });
      gsap.set(steps[0], { opacity: 1, y: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: 'top top',
          end: () => `+=${steps.length * 420}`,
          pin: true,
          scrub: 0.5,
          anticipatePin: 1,
        },
      });

      steps.forEach((step, i) => {
        if (i === 0) return;
        const at = i * 0.35;
        tl.to(steps[i - 1], { opacity: 0.15, y: -24, duration: 0.35 }, at);
        tl.to(step, { opacity: 1, y: 0, duration: 0.45 }, at + 0.05);
      });

      gsap.to(visual, {
        y: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: root,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.6,
        },
      });
    });

    return () => mm.revert();
  }, [reduced]);

  return (
    <section className="border-y border-border py-20 md:py-32">
      <WideContainer>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal variant="image" clipReveal className="overflow-hidden rounded-2xl">
            <img
              src={sectionMedia.process.src}
              alt={sectionMedia.process.alt}
              className="aspect-[16/10] w-full object-cover"
              loading="lazy"
            />
          </Reveal>
          <div>
            <div className="grid gap-10 sm:grid-cols-3">
              {highlights.map((item, i) => (
                <Reveal key={item.label} variant="text" delay={i * 80}>
                  <p className="text-xs uppercase tracking-[0.16em] text-muted">{item.label}</p>
                  <p className="mt-3 font-display text-3xl font-bold tracking-[-0.03em] text-foreground">
                    {item.value}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.detail}</p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={200} variant="text" className="mt-12 max-w-xl">
              <p className="text-lg leading-relaxed text-muted">
                We take on projects where structured discovery, thoughtful engineering and steady
                delivery can make a measurable difference — not volume for volume&apos;s sake.
              </p>
            </Reveal>
          </div>
        </div>

        <div
          ref={pinRef}
          className="mt-20 hidden min-h-[70vh] grid-cols-12 gap-10 lg:grid"
        >
          <div
            data-process-visual
            className="relative col-span-5 flex items-center justify-center"
          >
            <span
              className="absolute -left-6 top-8 h-20 w-20 rotate-[-8deg] border border-accent/50 bg-accent/10"
              aria-hidden
            />
            <p className="font-display text-[clamp(4rem,10vw,8rem)] font-bold leading-none tracking-[-0.05em] text-foreground/10">
              Process
            </p>
          </div>
          <ol className="col-span-7 flex flex-col justify-center space-y-6">
            {processSteps.map((step) => (
              <li
                key={step.number}
                data-process-step
                className="border-l-2 border-border pl-6 transition-colors duration-300"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                  {step.number}
                </p>
                <p className="mt-2 font-display text-2xl font-bold text-foreground">{step.title}</p>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>

        <ol className="mt-16 grid gap-4 md:grid-cols-5 lg:hidden">
          {processSteps.map((step, i) => (
            <Reveal key={step.number} variant="card" delay={i * 50}>
              <li className="rounded-xl border border-border bg-white p-5">
                <p className="text-xs text-muted">{step.number}</p>
                <p className="mt-2 font-medium text-foreground">{step.title}</p>
                <p className="mt-2 text-xs leading-relaxed text-muted">{step.description}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </WideContainer>
    </section>
  );
}
