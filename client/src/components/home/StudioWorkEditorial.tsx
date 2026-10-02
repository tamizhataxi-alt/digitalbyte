import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { caseStudies } from '../../data/caseStudies';
import { caseStudyMedia } from '../../data/siteMedia';
import { Reveal } from '../ui/Reveal';
import { WideContainer } from '../ui/WideContainer';

const entranceVariants = ['image', 'slide-left', 'slide-right', 'image'] as const;

export function StudioWorkEditorial() {
  return (
    <section className="overflow-hidden py-20 md:py-32">
      <WideContainer className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <Reveal variant="heading">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">Selected work</p>
          <h2 className="mt-4 max-w-2xl font-display text-section font-bold text-foreground">
            Projects shaped with editorial pace
          </h2>
        </Reveal>
        <Reveal delay={120} variant="text">
          <Link
            to="/work"
            className="group inline-flex items-center gap-2 text-sm font-medium text-foreground"
          >
            <span className="border-b border-foreground/30 pb-0.5 transition-colors group-hover:border-accent">
              View all work
            </span>
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden
            />
          </Link>
        </Reveal>
      </WideContainer>

      <WideContainer className="space-y-16 md:space-y-24">
        {caseStudies.map((study, index) => {
          const media = caseStudyMedia[study.slug];
          const variant = entranceVariants[index % entranceVariants.length];

          return (
            <Link
              key={study.slug}
              to={`/work/${study.slug}`}
              data-cursor-card
              className="group block"
            >
              <article
                className={`grid gap-8 md:gap-12 ${
                  index % 2 === 0 ? 'md:grid-cols-12' : 'md:grid-cols-12'
                }`}
              >
                <Reveal
                  variant={variant}
                  delay={index * 40}
                  className={`overflow-hidden rounded-2xl bg-white md:rounded-3xl ${
                    index % 2 === 0 ? 'md:col-span-7' : 'md:col-span-7 md:order-2'
                  }`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    {media && (
                      <img
                        src={media.src}
                        alt={media.alt}
                        className="h-full w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                        loading="lazy"
                        decoding="async"
                      />
                    )}
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      aria-hidden
                    />
                  </div>
                </Reveal>

                <Reveal
                  variant={index % 2 === 0 ? 'slide-right' : 'slide-left'}
                  delay={80 + index * 40}
                  className={`flex flex-col justify-center ${
                    index % 2 === 0 ? 'md:col-span-5' : 'md:col-span-5 md:order-1'
                  }`}
                >
                  <p className="text-xs uppercase tracking-[0.18em] text-muted">
                    ({String(index + 1).padStart(2, '0')}) {study.industry}
                  </p>
                  <h3 className="mt-4 font-display text-[clamp(1.75rem,4vw,3rem)] font-bold leading-[0.95] tracking-[-0.04em] text-foreground transition-transform duration-500 group-hover:translate-x-2">
                    {study.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted">{study.type}</p>
                  <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
                    {study.excerpt}
                  </p>
                  <span
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors group-hover:text-accent"
                  >
                    Case study
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Reveal>
              </article>
            </Link>
          );
        })}
      </WideContainer>
    </section>
  );
}
