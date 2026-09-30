import { Link } from 'react-router-dom';
import { Reveal } from '../ui/Reveal';
import { WideContainer } from '../ui/WideContainer';
import { ServiceAreasGrid } from './ServiceAreasGrid';

export function StudioStrategy() {
  return (
    <section className="border-t border-border py-20 md:py-32">
      <WideContainer>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20 lg:items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.2em] text-muted">Philosophy</p>
              <h2 className="mt-6 font-display text-display font-medium text-primary">
                Clarity <span className="text-muted">before</span> code
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={100}>
              <p className="max-w-xl text-lg leading-[1.65] text-muted md:text-xl md:leading-[1.6]">
                People decide whether to trust you in the first few seconds on your site. We keep
                layouts simple, words plain, and the next step obvious — so visitors understand
                what you offer without a technical background.
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

            <Reveal delay={240} className="mt-16 md:mt-20">
              <div className="flex flex-col gap-6 border-b border-primary/10 pb-6 sm:flex-row sm:items-end sm:justify-between sm:gap-10">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-muted">
                    Core service areas
                  </p>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-primary/75 md:text-[0.9375rem] md:leading-[1.7]">
                    Alongside taxi booking, we build mobile apps, online stores, and tools for
                    running your business day to day.
                  </p>
                </div>
                <Link
                  to="/services"
                  className="inline-flex shrink-0 items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary transition-opacity hover:opacity-60"
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
