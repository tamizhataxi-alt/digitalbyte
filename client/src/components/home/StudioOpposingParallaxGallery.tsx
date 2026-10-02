import { useMemo } from 'react';
import {
  galleryParallaxFeatures,
  galleryParallaxLeftColumn,
  galleryParallaxRightColumn,
  type GalleryParallaxImage,
} from '../../data/galleryParallax';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import { WideContainer } from '../ui/WideContainer';

function AutoScrollGalleryColumn({
  items,
  direction,
}: {
  items: GalleryParallaxImage[];
  direction: 'down' | 'up';
}) {
  const looped = useMemo(() => [...items, ...items], [items]);
  const trackClass =
    direction === 'down' ? 'gallery-auto-scroll-down' : 'gallery-auto-scroll-up';

  return (
    <div className="relative min-h-0 overflow-hidden">
      <div className={`flex flex-col gap-3 sm:gap-4 will-change-transform ${trackClass}`}>
        {looped.map((item, index) => (
          <figure
            key={`${item.src}-${index}`}
            className={`${item.aspect} w-full shrink-0 overflow-hidden rounded-2xl border border-white/80 bg-white shadow-[0_18px_48px_-28px_rgba(15,45,56,0.35)] sm:rounded-[1.35rem]`}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </figure>
        ))}
      </div>
    </div>
  );
}

function FeatureCard({
  number,
  title,
  description,
  icon: Icon,
}: (typeof galleryParallaxFeatures)[number]) {
  return (
    <article
      className="relative overflow-hidden rounded-2xl border border-border/80 bg-white/90 p-5 shadow-[0_12px_40px_-32px_rgba(17,24,39,0.28)] backdrop-blur-sm sm:p-6"
    >
      <span
        className="pointer-events-none absolute -right-1 top-2 font-display text-5xl font-bold leading-none text-[#5548c8]/[0.07] sm:text-6xl"
        aria-hidden
      >
        {number}
      </span>
      <div
        className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-[#2a9d8c]/25 bg-gradient-to-br from-[#e8f7f5] to-white text-[#1a7d8c]"
        aria-hidden
      >
        <Icon className="h-[1.15rem] w-[1.15rem] stroke-[2px]" />
      </div>
      <h3 className="font-display text-base font-bold tracking-[-0.02em] text-foreground sm:text-lg">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
    </article>
  );
}

export function StudioOpposingParallaxGallery() {
  const reduced = usePrefersReducedMotion();

  const leftFeatures = galleryParallaxFeatures.slice(0, 3);
  const rightFeatures = galleryParallaxFeatures.slice(3, 6);

  return (
    <section
      className="relative overflow-x-hidden border-t border-border bg-[#f5f6f4] py-16 md:py-24"
      aria-label="Digital marketing gallery"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_15%_0%,rgba(42,157,140,0.08),transparent_55%),radial-gradient(ellipse_70%_45%_at_85%_100%,rgba(85,72,200,0.07),transparent_50%)]"
        aria-hidden
      />

      <WideContainer className="relative">
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1a7d8c]">
            How we work
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-[1.05] tracking-[-0.03em] text-foreground">
            Strategy, creative and growth — in motion
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            Two columns in continuous motion — left drifts down, right drifts up — for a layered,
            premium studio feel.
          </p>
        </div>

        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-start lg:gap-10 xl:gap-14">
          <div className="flex flex-col gap-4 lg:hidden">
            {leftFeatures.map((feature) => (
              <FeatureCard key={feature.number} {...feature} />
            ))}
          </div>

          <div className="hidden flex-col gap-5 lg:flex lg:pt-8">
            {leftFeatures.map((feature) => (
              <FeatureCard key={feature.number} {...feature} />
            ))}
          </div>

          <div
            className="relative mx-auto w-full max-w-[min(100%,22rem)] sm:max-w-[26rem] md:max-w-[30rem] lg:max-w-[32rem]"
          >
            <div
              className={`relative h-[min(78vh,40rem)] overflow-hidden sm:h-[min(82vh,44rem)] md:h-[min(85vh,46rem)] [mask-image:linear-gradient(to_bottom,transparent_0%,#000_10%,#000_90%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,#000_10%,#000_90%,transparent_100%)] ${reduced ? '' : ''}`}
            >
              <div className="grid h-full min-h-0 grid-cols-2 gap-2.5 sm:gap-3.5 md:gap-4">
                <AutoScrollGalleryColumn
                  items={galleryParallaxLeftColumn}
                  direction="down"
                />
                <AutoScrollGalleryColumn
                  items={galleryParallaxRightColumn}
                  direction="up"
                />
              </div>
            </div>

            {reduced ? (
              <p className="mt-3 text-center text-xs text-muted">
                Motion reduced — gallery shown without auto-scroll.
              </p>
            ) : null}
          </div>

          <div className="hidden flex-col gap-5 lg:flex lg:pt-20">
            {rightFeatures.map((feature) => (
              <FeatureCard key={feature.number} {...feature} />
            ))}
          </div>

          <div className="flex flex-col gap-4 lg:hidden">
            {rightFeatures.map((feature) => (
              <FeatureCard key={feature.number} {...feature} />
            ))}
          </div>
        </div>
      </WideContainer>
    </section>
  );
}
