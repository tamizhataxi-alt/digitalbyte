import { Link, useParams } from 'react-router-dom';
import { getCaseStudyBySlug, caseStudies } from '../data/caseStudies';
import { PageLayout } from '../components/layout/PageLayout';
import { SEO } from '../components/ui/SEO';
import { WideContainer } from '../components/ui/WideContainer';
import { Badge } from '../components/ui/Badge';
import { PillButton } from '../components/ui/PillButton';
import { Reveal } from '../components/ui/Reveal';
import { CaseStudyVisual } from '../components/work/CaseStudyVisual';
import { CaseStudyLiveProjects } from '../components/work/CaseStudyLiveProjects';
import { StudioFinalCTA } from '../components/home/StudioFinalCTA';
import { NotFound } from './NotFound';

export function CaseStudyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const study = slug ? getCaseStudyBySlug(slug) : undefined;

  if (!study) return <NotFound />;

  const currentIndex = caseStudies.findIndex((c) => c.slug === study.slug);
  const nextStudy = caseStudies[(currentIndex + 1) % caseStudies.length];

  return (
    <PageLayout headerTransparent studioHeader>
      <SEO
        title={`${study.title} — Case Study`}
        description={study.excerpt}
        path={`/work/${study.slug}`}
      />
      <article>
        <div className="pt-20 md:pt-24">
          <CaseStudyVisual
            slug={study.slug}
            className="min-h-[280px] md:min-h-[min(52vh,520px)] rounded-none"
          />
        </div>

        <WideContainer className="py-12 md:py-16">
          <Reveal>
            <Link
              to="/work"
              className="text-xs font-medium uppercase tracking-[0.14em] text-muted transition-colors hover:text-primary"
            >
              ← Back to work
            </Link>
            <div className="mt-8 flex flex-wrap gap-2">
              <Badge>{study.industry}</Badge>
              <Badge>{study.type}</Badge>
              {study.hypothetical && (
                <Badge variant="accent">Hypothetical concept</Badge>
              )}
            </div>
            <h1 className="mt-6 max-w-4xl font-display text-section font-medium text-primary text-balance">
              {study.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              {study.excerpt}
            </p>
          </Reveal>
        </WideContainer>

        {study.liveProjects && study.liveProjects.length > 0 && (
          <WideContainer>
            <CaseStudyLiveProjects projects={study.liveProjects} />
          </WideContainer>
        )}

        <WideContainer className="py-12 md:py-20">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="space-y-12 lg:col-span-7">
              <Reveal>
                <section>
                  <h2 className="font-display text-2xl font-medium text-primary">Challenge</h2>
                  <p className="mt-4 leading-relaxed text-muted">{study.problem}</p>
                </section>
              </Reveal>
              <Reveal delay={60}>
                <section>
                  <h2 className="font-display text-2xl font-medium text-primary">Approach</h2>
                  <p className="mt-4 leading-relaxed text-muted">{study.approach}</p>
                </section>
              </Reveal>
              <Reveal delay={120}>
                <section>
                  <h2 className="font-display text-2xl font-medium text-primary">Solution</h2>
                  <p className="mt-4 leading-relaxed text-muted">{study.solution}</p>
                </section>
              </Reveal>
            </div>

            <aside className="space-y-6 lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
              <Reveal delay={80}>
                <div className="rounded-2xl border border-border bg-surface p-6 md:p-8">
                  <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                    Technology
                  </h2>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {study.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-primary"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={140}>
                <div className="rounded-2xl border border-border bg-background p-6 md:p-8">
                  <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                    Outcome
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{study.result}</p>
                </div>
              </Reveal>
            </aside>
          </div>

          {study.learnings && study.learnings.length > 0 && (
            <Reveal className="mt-16 border-t border-border pt-16 md:mt-20">
              <h2 className="font-display text-2xl font-medium text-primary">Key learnings</h2>
              <ul className="mt-6 space-y-4 text-muted">
                {study.learnings.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed md:text-base">
                    <span className="font-semibold text-primary" aria-hidden>—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          )}

          <section className="mt-16 rounded-2xl border border-border bg-primary p-8 text-white md:mt-20 md:p-12">
            <p className="text-xs uppercase tracking-[0.16em] text-white/50">Next project</p>
            <h2 className="mt-4 font-display text-2xl font-medium md:text-3xl">
              {nextStudy.title}
            </h2>
            <p className="mt-3 max-w-xl text-sm text-white/70">{nextStudy.excerpt}</p>
            <PillButton to={`/work/${nextStudy.slug}`} className="mt-8" dark={false}>
              View case study
            </PillButton>
          </section>
        </WideContainer>
      </article>
      <StudioFinalCTA />
    </PageLayout>
  );
}
