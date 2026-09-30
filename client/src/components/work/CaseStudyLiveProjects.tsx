import { ArrowUpRight, Globe } from 'lucide-react';
import type { CaseStudyLiveProject } from '../../types';

type CaseStudyLiveProjectsProps = {
  projects: CaseStudyLiveProject[];
};

export function CaseStudyLiveProjects({ projects }: CaseStudyLiveProjectsProps) {
  if (projects.length === 0) return null;

  return (
    <section className="border-y border-border bg-surface py-12 md:py-16">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
        Our projects
      </p>
      <h2 className="mt-3 font-display text-2xl font-medium text-primary md:text-3xl">
        Live platforms
      </h2>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
        Production taxi booking experiences built and shipped for operators in the field.
      </p>

      <ul className="mt-10 grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <li key={project.url}>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col justify-between rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.12)] md:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-primary"
                  aria-hidden
                >
                  <Globe className="h-5 w-5" />
                </span>
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-white"
                  aria-hidden
                >
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
              <div className="mt-6">
                <p className="font-display text-xl font-medium text-primary group-hover:underline decoration-primary/30 underline-offset-4">
                  {project.name}
                </p>
                {project.description && (
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>
                )}
                <p className="mt-4 text-xs font-medium uppercase tracking-[0.14em] text-muted">
                  Visit site
                </p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
