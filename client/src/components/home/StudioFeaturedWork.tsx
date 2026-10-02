import { ExternalLink } from 'lucide-react';
import { caseStudies } from '../../data/caseStudies';
import { featuredWorkMedia } from '../../data/siteMedia';
import { Parallax } from '../motion/Parallax';
import { ScrollReveal } from '../motion/ScrollReveal';
import { WideContainer } from '../ui/WideContainer';
import { PillButton } from '../ui/PillButton';

const taxiStudy = caseStudies.find((s) => s.slug === 'taxi-booking');
const { taxiShowcase } = featuredWorkMedia;

function TaxiShowcaseVisual({ priority = false }: { priority?: boolean }) {
  return (
    <ScrollReveal variant="image" clipReveal duration={1.2} className="w-full">
      <Parallax speed={0.32} className="w-full">
        <div
          className="featured-taxi-visual group relative mx-auto w-full max-w-[38rem] lg:max-w-none"
        >
          <div
            className="pointer-events-none absolute left-[8%] right-[8%] bottom-[6%] z-0 h-[14%] rounded-[100%] bg-[#0f1f3d]/[0.08] blur-2xl transition-all duration-700 group-hover:bg-[#5548c8]/10"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -inset-x-6 top-[15%] bottom-[10%] bg-gradient-to-r from-[#2dd4bf]/10 via-transparent to-[#5548c8]/10 opacity-60 blur-3xl transition-opacity duration-700 group-hover:opacity-90"
            aria-hidden
          />
          <img
            src={taxiShowcase.src}
            alt={taxiShowcase.alt}
            width={taxiShowcase.width ?? 1200}
            height={taxiShowcase.height ?? 900}
            fetchPriority={priority ? 'high' : undefined}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            className="relative z-10 mx-auto w-full max-w-[min(100%,34rem)] object-contain object-center drop-shadow-[0_28px_48px_-12px_rgba(15,45,56,0.28)] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1 group-hover:scale-[1.04] lg:max-w-[min(100%,40rem)]"
          />
          <p
            className="relative z-10 mt-2 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-muted/80 lg:mt-4 lg:text-left"
          >
            Built for Tamil Nadu fleets · Innova-class bookings
          </p>
        </div>
      </Parallax>
    </ScrollReveal>
  );
}

export function StudioFeaturedWork() {
  const liveSites = taxiStudy?.liveProjects ?? [];

  return (
    <section
      className="relative overflow-hidden border-t border-border bg-background py-20 md:py-28 lg:py-32"
      aria-labelledby="featured-taxi-heading"
    >
      <div
        className="pointer-events-none absolute -left-[10%] top-[20%] h-[min(50vw,22rem)] w-[min(50vw,22rem)] rounded-full bg-[#ccfbf1]/40 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-[8%] bottom-[10%] h-[min(45vw,20rem)] w-[min(45vw,20rem)] rounded-full bg-[#e9e5ff]/50 blur-3xl"
        aria-hidden
      />

      <WideContainer className="relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-14 xl:gap-16">
          <div className="lg:col-span-5 xl:col-span-5">
            <ScrollReveal variant="heading">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1a7d8c]">
                Live today
              </p>
              <h2
                id="featured-taxi-heading"
                className="mt-5 font-display text-[clamp(1.75rem,4.2vw,2.75rem)] font-bold leading-[1.08] tracking-[-0.03em] text-foreground"
              >
                Taxi booking websites your customers can use right away
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={100} variant="text" className="mt-6 space-y-4">
              <p className="text-base leading-relaxed text-muted md:text-lg md:leading-[1.65]">
                Our main focus is helping taxi and fleet operators move online — riders book a trip,
                drivers get the job, and you stay in control from one place.
              </p>
              <p className="text-sm leading-relaxed text-muted md:text-base">
                No confusing jargon: clear pages, simple flows, and sites that work on phones across
                Tamil Nadu.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={120} className="mt-8 w-full lg:hidden">
              <TaxiShowcaseVisual />
            </ScrollReveal>

            {liveSites.length > 0 && (
              <ScrollReveal delay={160} className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {liveSites.map((site) => (
                  <a
                    key={site.url}
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-2 rounded-full border border-[#0f1f3d] bg-[#0f1f3d] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_32px_-18px_rgba(15,31,61,0.65)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-[#1a2d4a] hover:shadow-[0_16px_40px_-16px_rgba(85,72,200,0.35)] active:translate-y-0 active:scale-[0.99]"
                  >
                    Visit {site.name}
                    <ExternalLink
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden
                    />
                  </a>
                ))}
              </ScrollReveal>
            )}

            <ScrollReveal delay={200} className="mt-6">
              <PillButton to="/work/taxi-booking" dark={false}>
                How we built it
              </PillButton>
            </ScrollReveal>
          </div>

          <div className="hidden lg:col-span-7 lg:block xl:col-span-7">
            <TaxiShowcaseVisual priority />
          </div>
        </div>
      </WideContainer>
    </section>
  );
}
