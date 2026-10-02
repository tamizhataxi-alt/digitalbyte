import { Link } from 'react-router-dom';
import { Reveal } from '../ui/Reveal';
import { WideContainer } from '../ui/WideContainer';
import { ServiceAreasGrid } from './ServiceAreasGrid';
import { sectionMedia } from '../../data/siteMedia';
import { Parallax } from '../motion/Parallax';

export function StudioStrategy() {
  return (
    <section className="border-t border-border py-20 md:py-32">
      <WideContainer>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20 lg:items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <Reveal variant="heading">
              <p className="text-xs uppercase tracking-[0.2em] text-muted">Philosophy</p>
              <h2 className="mt-6 font-display text-display font-bold text-foreground">
                Clarity <span className="text-muted">before</span> code
              </h2>
            </Reveal>
            <Reveal delay={120} clipReveal className="mt-10 hidden overflow-hidden rounded-2xl lg:block">
              <Parallax speed={0.35}>
                <img
                  src={sectionMedia.strategy.src}
                  alt={sectionMedia.strategy.alt}
                  className="aspect-[4/5] w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </Parallax>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={100} variant="text">
              <p className="max-w-xl text-lg leading-[1.65] text-muted md:text-xl md:leading-[1.6]">
                People decide whether to trust you in the first few seconds on your site. We keep
                layouts simple, words plain, and the next step obvious — so visitors understand
                what you offer without a technical background.
              </p>
            </Reveal>
            <Reveal delay={180} variant="text" className="mt-10">
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground"
              >
                <span className="border-b border-foreground/30 pb-0.5 transition-colors group-hover:border-accent">
                  About us
                </span>
                <span
                  className="transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1"
                  aria-hidden
                >
                  →
                </span>
              </Link>
            </Reveal>

            <Reveal delay={240} variant="card" className="mt-16 md:mt-20">
              <div className="flex flex-col gap-6 border-b border-border pb-6 sm:flex-row sm:items-end sm:justify-between sm:gap-10">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-muted">
                    Core service areas
                  </p>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-foreground/80 md:text-[0.9375rem] md:leading-[1.7]">
                    Alongside taxi booking, we build mobile apps, online stores, and tools for
                    running your business day to day.
                  </p>
                </div>
                <Link
                  to="/services"
                  className="inline-flex shrink-0 items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground transition-colors hover:text-accent"
                >
                  All services
                  <span className="text-base leading-none" aria-hidden>→</span>
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
