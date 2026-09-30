import { useMemo, useState } from 'react';
import { caseStudies } from '../data/caseStudies';
import { PageLayout } from '../components/layout/PageLayout';
import { SEO } from '../components/ui/SEO';
import { Reveal } from '../components/ui/Reveal';
import { WideContainer } from '../components/ui/WideContainer';
import {
  CaseStudyFilter,
  type WorkFilter,
} from '../components/work/CaseStudyFilter';
import { CaseStudyGrid } from '../components/work/CaseStudyGrid';
import { StudioFinalCTA } from '../components/home/StudioFinalCTA';

export function Work() {
  const [filter, setFilter] = useState<WorkFilter>('all');

  const filtered = useMemo(() => {
    if (filter === 'all') return caseStudies;
    return caseStudies.filter((s) => s.category === filter);
  }, [filter]);

  return (
    <PageLayout headerTransparent studioHeader>
      <SEO
        title="Work"
        description="Taxi booking, e-commerce, ERP, inventory and related platforms we've engineered for clients."
        path="/work"
      />

      <section className="border-b border-border pb-16 pt-28 md:pb-24 md:pt-36">
        <WideContainer>
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
              Portfolio
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-section font-medium text-primary text-balance">
              Products we&apos;ve engineered
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              Taxi booking, e-commerce, ERP and inventory systems — a sample of the platforms
              we design and build for growing businesses.
            </p>
          </Reveal>

          <Reveal delay={100} className="mt-12 flex flex-col gap-6 border-t border-border pt-8 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-muted">
              <span className="font-medium text-primary">{filtered.length}</span>
              {filtered.length === 1 ? ' project' : ' projects'}
              {filter !== 'all' && (
                <span>
                  {' '}
                  · <span className="capitalize">{filter}</span>
                </span>
              )}
            </p>
            <CaseStudyFilter value={filter} onChange={setFilter} />
          </Reveal>
        </WideContainer>
      </section>

      <section className="py-12 md:py-20">
        <WideContainer>
          {filtered.length === 0 ? (
            <Reveal>
              <div className="rounded-2xl border border-border bg-surface px-8 py-16 text-center">
                <p className="font-display text-xl font-medium text-primary">
                  No projects in this category yet
                </p>
                <p className="mt-3 text-sm text-muted">
                  Try another filter or view all work.
                </p>
                <button
                  type="button"
                  onClick={() => setFilter('all')}
                  className="mt-8 text-sm font-medium text-primary underline-offset-4 hover:underline"
                >
                  Show all projects
                </button>
              </div>
            </Reveal>
          ) : (
            <Reveal delay={80}>
              <CaseStudyGrid studies={filtered} />
            </Reveal>
          )}
        </WideContainer>
      </section>

      <StudioFinalCTA />
    </PageLayout>
  );
}
