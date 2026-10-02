import { ExternalLink } from 'lucide-react';
import { caseStudies } from '../../data/caseStudies';
import { featuredWorkMedia } from '../../data/siteMedia';
import { Reveal } from '../ui/Reveal';
import { WideContainer } from '../ui/WideContainer';
import { PillButton } from '../ui/PillButton';
import { StudioMoreFromStudio } from './StudioMoreFromStudio';

const taxiStudy = caseStudies.find((s) => s.slug === 'taxi-booking');

function TaxiShowcaseImageMobile() {
  return (
    <div className="flex w-full justify-center">
      <img
        src={featuredWorkMedia.taxiShowcase.src}
        alt={featuredWorkMedia.taxiShowcase.alt}
        className="h-auto w-full max-w-[26rem] object-contain object-center"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

function TaxiShowcaseImageDesktop() {
  return (
    <div className="flex w-full items-center justify-center lg:min-h-[min(36vw,22rem)] xl:min-h-[24rem]">
      <img
        src={featuredWorkMedia.taxiShowcase.src}
        alt={featuredWorkMedia.taxiShowcase.alt}
        className="h-auto w-full max-h-[min(52vw,34rem)] object-contain object-center xl:max-h-[36rem]"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

export function StudioFeaturedWork() {
  const liveSites = taxiStudy?.liveProjects ?? [];

  return (
    <section className="border-t border-border bg-background py-20 md:py-28">
      <WideContainer>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-14">
          <div className="lg:col-span-4 xl:col-span-5">
            <Reveal variant="heading">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Live today
              </p>
              <h2 className="mt-5 font-display text-section font-bold text-foreground">
                Taxi booking websites your customers can use right away
              </h2>
            </Reveal>
            <Reveal delay={100} variant="text" className="mt-6 space-y-4 text-base leading-relaxed text-muted md:text-lg">
              <p>
                Our main focus is helping taxi and fleet operators move online — riders book a trip,
                drivers get the job, and you stay in control from one place.
              </p>
              <p className="text-sm md:text-base">
                No confusing jargon: clear pages, simple flows, and sites that work on phones.
              </p>
            </Reveal>

            <Reveal delay={120} className="mt-8 w-full lg:hidden">
              <TaxiShowcaseImageMobile />
            </Reveal>

            {liveSites.length > 0 && (
              <Reveal delay={160} className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {liveSites.map((site) => (
                  <a
                    key={site.url}
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-primary bg-primary px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-primary/90"
                  >
                    Visit {site.name}
                    <ExternalLink className="h-4 w-4" aria-hidden />
                  </a>
                ))}
              </Reveal>
            )}

            <Reveal delay={200} className="mt-6">
              <PillButton to="/work/taxi-booking" dark={false}>
                How we built it
              </PillButton>
            </Reveal>
          </div>

          <Reveal delay={80} variant="image" className="hidden lg:col-span-8 lg:block xl:col-span-7">
            <TaxiShowcaseImageDesktop />
          </Reveal>
        </div>

        <StudioMoreFromStudio />
      </WideContainer>
    </section>
  );
}
