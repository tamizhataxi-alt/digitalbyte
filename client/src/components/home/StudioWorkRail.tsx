import { Link } from 'react-router-dom';
import { caseStudies } from '../../data/caseStudies';
import { Reveal } from '../ui/Reveal';
import { WideContainer } from '../ui/WideContainer';
import { CaseStudyVisual } from '../work/CaseStudyVisual';

export function StudioWorkRail() {
  return (
    <section className="py-20 md:py-32">
      <WideContainer className="mb-10 flex items-end justify-between gap-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Selected work</p>
          <h2 className="mt-4 font-display text-section font-medium text-primary">
            Products we&apos;ve engineered
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <Link to="/work" className="text-sm text-muted transition-colors hover:text-primary">
            View all →
          </Link>
        </Reveal>
      </WideContainer>

      <div className="work-rail flex gap-5 overflow-x-auto px-5 pb-4 md:gap-6 md:px-10">
        {caseStudies.map((study, index) => (
          <Link
            key={study.slug}
            to={`/work/${study.slug}`}
            className="group w-[min(88vw,420px)] shrink-0 overflow-hidden rounded-2xl border border-border bg-surface transition-transform duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_-20px_rgba(0,0,0,0.15)]"
          >
            <CaseStudyVisual
              slug={study.slug}
              className="min-h-[220px] transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="p-6 md:p-8">
              <p className="text-xs uppercase tracking-[0.16em] text-muted">
                ({String(index + 1).padStart(2, '0')}) {study.industry}
              </p>
              <h3 className="mt-3 font-display text-2xl font-medium text-primary">
                {study.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{study.type}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted line-clamp-2">
                {study.excerpt}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
