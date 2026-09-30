import { Link } from 'react-router-dom';
import { sectionMedia } from '../../data/siteMedia';
import { MediaImage } from '../ui/MediaImage';
import { Reveal } from '../ui/Reveal';
import { WideContainer } from '../ui/WideContainer';
import { ServiceAreasGrid } from './ServiceAreasGrid';

export function StudioStrategy() {
  return (
    <section className="border-t border-border py-20 md:py-32">
      <WideContainer>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 lg:items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.2em] text-muted">Philosophy</p>
              <h2 className="mt-6 font-display text-display font-medium text-primary">
                Clarity <span className="text-muted">before</span> code
              </h2>
            </Reveal>
            <Reveal delay={120} className="mt-10 hidden lg:block">
              <MediaImage
                media={sectionMedia.strategy}
                className="aspect-[4/5] rounded-2xl"
                overlay="dark"
              />
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={80} className="lg:hidden">
              <MediaImage
                media={sectionMedia.strategy}
                className="mb-10 aspect-video rounded-2xl"
                overlay="dark"
              />
            </Reveal>
            <Reveal delay={100}>
              <p className="text-lg leading-relaxed text-muted md:text-xl">
                Teams decide whether to trust your product long before they read the fine print.
                That judgment is shaped by performance, structure, spacing and how obvious the
                next step feels — not by feature lists alone.
              </p>
            </Reveal>
            <Reveal delay={180} className="mt-10">
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 text-sm font-medium text-primary"
              >
                <span className="border-b border-primary pb-0.5 transition-colors group-hover:border-muted">
                  About us
                </span>
                <span className="transition-transform group-hover:translate-x-1" aria-hidden>
                  →
                </span>
              </Link>
            </Reveal>

            <Reveal delay={240} className="mt-14 border-t border-border pt-10 md:mt-16">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-md text-sm leading-relaxed text-muted">
                  Core service areas composed around how your business actually ships software.
                </p>
                <Link
                  to="/services"
                  className="shrink-0 text-xs font-semibold uppercase tracking-[0.14em] text-muted transition-colors hover:text-primary"
                >
                  All services →
                </Link>
              </div>
              <ServiceAreasGrid />
            </Reveal>
          </div>
        </div>
      </WideContainer>
    </section>
  );
}
