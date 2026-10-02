import { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { clientTestimonials } from '../../data/testimonials';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import { WideContainer } from '../ui/WideContainer';

const ARCH_SLOTS = 9;
const CENTER_SLOT = 4;
const AUTOPLAY_MS = 6500;

function archPosition(slotIndex: number) {
  const t = slotIndex / (ARCH_SLOTS - 1);
  const angle = Math.PI + t * Math.PI;
  const radiusX = 44;
  const radiusY = 36;
  const cx = 50;
  const cy = 94;
  return {
    left: `${cx + radiusX * Math.cos(angle)}%`,
    top: `${cy + radiusY * Math.sin(angle)}%`,
  };
}

function slotStyle(slotIndex: number, isCenter: boolean) {
  const dist = Math.abs(slotIndex - CENTER_SLOT);
  const scale = isCenter ? 1 : 1 - dist * 0.07;
  const opacity = isCenter ? 1 : Math.max(0.35, 1 - dist * 0.14);
  const blur = dist >= 3 ? 3 : dist === 2 ? 1.5 : 0;
  const size = isCenter ? 'h-[4.25rem] w-[4.25rem] md:h-[5.25rem] md:w-[5.25rem]' : 'h-14 w-14 md:h-[4.25rem] md:w-[4.25rem]';
  return { scale, opacity, blur, size };
}

export function StudioClientTestimonials() {
  const count = clientTestimonials.length;
  const prefersReducedMotion = usePrefersReducedMotion();
  const [activeIndex, setActiveIndex] = useState(4);

  const active = clientTestimonials[activeIndex];

  const goToSlot = useCallback(
    (slotIndex: number) => {
      const next = (activeIndex - CENTER_SLOT + slotIndex + count) % count;
      setActiveIndex(next);
    },
    [activeIndex, count],
  );

  const goNext = useCallback(() => {
    setActiveIndex((i) => (i + 1) % count);
  }, [count]);

  useEffect(() => {
    if (prefersReducedMotion) return undefined;
    const id = window.setInterval(goNext, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [goNext, prefersReducedMotion]);

  const slots = useMemo(() => {
    return Array.from({ length: ARCH_SLOTS }, (_, slotIndex) => {
      const testimonialIndex = (activeIndex - CENTER_SLOT + slotIndex + count) % count;
      return { slotIndex, testimonial: clientTestimonials[testimonialIndex], testimonialIndex };
    });
  }, [activeIndex, count]);

  return (
    <section
      className="client-reviews-section relative overflow-hidden bg-[#050505] py-16 text-white md:py-24 lg:py-28"
      aria-labelledby="client-reviews-heading"
    >
      <div className="client-reviews-grid pointer-events-none absolute inset-0 opacity-[0.35]" aria-hidden />
      <div
        className="pointer-events-none absolute left-1/2 top-[38%] h-px w-[min(92vw,56rem)] -translate-x-1/2 bg-white/[0.06] md:top-[42%]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-[38%] h-[min(52vw,22rem)] w-px -translate-x-1/2 bg-white/[0.06] md:top-[42%] md:h-[min(42vw,20rem)]"
        aria-hidden
      />

      <WideContainer className="relative z-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_minmax(0,22rem)] lg:items-start lg:gap-16">
          <h2
            id="client-reviews-heading"
            className="max-w-xl font-display text-[clamp(2rem,4.2vw,3.35rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-white"
          >
            The best reviews
            <br />
            from clients
          </h2>
          <div className="flex flex-col gap-6 lg:items-end lg:text-right">
            <p className="max-w-sm text-sm leading-relaxed text-white/55 lg:ml-auto">
              Don&apos;t just take our word for it — see what our clients think.
            </p>
            <Link
              to="/contact"
              className="group inline-flex w-fit items-center gap-0 rounded-full border border-white/10 bg-[#0a0a0a] py-1 pl-1 pr-5 text-sm font-medium text-white transition-colors hover:border-white/20"
            >
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-primary transition-transform duration-300 group-hover:scale-105"
                aria-hidden
              >
                <ArrowRight className="h-4 w-4 stroke-[2.5px]" />
              </span>
              <span className="pl-3 pr-1">More Review</span>
            </Link>
          </div>
        </div>

        <div className="relative mx-auto mt-10 max-w-4xl md:mt-14">
          <div
            className="relative mx-auto h-[min(52vw,15.5rem)] w-full max-w-3xl md:h-[17.5rem] lg:h-[19rem]"
            role="tablist"
            aria-label="Client testimonials"
          >
            {slots.map(({ slotIndex, testimonial, testimonialIndex }) => {
              const isCenter = slotIndex === CENTER_SLOT;
              const { left, top } = archPosition(slotIndex);
              const { scale, opacity, blur, size } = slotStyle(slotIndex, isCenter);
              const isActive = testimonialIndex === activeIndex;

              return (
                <button
                  key={`${slotIndex}-${testimonial.id}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Review from ${testimonial.name}`}
                  onClick={() => goToSlot(slotIndex)}
                  className="absolute z-10 -translate-x-1/2 -translate-y-1/2 rounded-full transition-[transform,opacity,filter] duration-500 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                  style={{
                    left,
                    top,
                    transform: `translate(-50%, -50%) scale(${scale})`,
                    opacity,
                    filter: blur ? `blur(${blur}px)` : undefined,
                  }}
                >
                  <span
                    className={`relative block overflow-hidden rounded-full ${size} ${
                      isCenter
                        ? 'ring-[3px] ring-accent ring-offset-2 ring-offset-[#050505] shadow-[0_0_28px_-4px_rgba(200,255,0,0.55)]'
                        : 'ring-1 ring-white/15'
                    }`}
                  >
                    <img
                      src={testimonial.avatarSrc}
                      alt=""
                      className="h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </span>
                  {isCenter && (
                    <span
                      className="pointer-events-none absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-accent shadow-[0_0_10px_rgba(200,255,0,0.8)]"
                      aria-hidden
                    />
                  )}
                </button>
              );
            })}
          </div>

          <div
            className="mx-auto max-w-2xl px-4 text-center"
            role="tabpanel"
            aria-live="polite"
            aria-atomic="true"
          >
            <p className="font-display text-5xl leading-none text-accent md:text-6xl" aria-hidden>
              &ldquo;
            </p>
            <blockquote className="mt-2 text-base font-medium leading-relaxed text-white/95 md:text-lg">
              {active.quote}
            </blockquote>
            <div className="mt-5 flex justify-center gap-1 text-accent" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" aria-hidden />
              ))}
            </div>
            <p className="mt-5 text-sm text-white/45">
              — {active.name}
              <span className="text-white/35"> · {active.role}</span>
            </p>
          </div>
        </div>

        <div className="mt-12 flex justify-center md:mt-14" aria-hidden>
          <span className="relative flex h-3 w-3 items-center justify-center">
            <span className="absolute h-px w-3 bg-accent/70" />
            <span className="absolute h-3 w-px bg-accent/70" />
          </span>
        </div>
      </WideContainer>
    </section>
  );
}
