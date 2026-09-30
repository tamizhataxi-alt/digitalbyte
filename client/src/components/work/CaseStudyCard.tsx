import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import type { CaseStudy } from '../../types';
import { CaseStudyVisual } from './CaseStudyVisual';

type CaseStudyCardProps = {
  study: CaseStudy;
  index: number;
};

export function CaseStudyCard({ study, index }: CaseStudyCardProps) {
  return (
    <Link
      to={`/work/${study.slug}`}
      data-cursor-card
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_24px_60px_-20px_rgba(0,0,0,0.12)]"
    >
      <CaseStudyVisual
        slug={study.slug}
        className="aspect-[16/10] min-h-[200px] w-full shrink-0"
      />
      <div className="flex flex-1 flex-col p-6 md:p-8">
        <div className="flex items-start justify-between gap-4">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
            ({String(index).padStart(2, '0')}) {study.industry}
          </p>
          <span
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-background transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-white"
            aria-hidden
          >
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
        <h3 className="mt-4 font-display text-2xl font-medium leading-tight text-primary md:text-[1.65rem]">
          {study.title}
        </h3>
        <p className="mt-2 text-sm text-muted">{study.type}</p>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-muted line-clamp-3">
          {study.excerpt}
        </p>
        <ul className="mt-6 flex flex-wrap gap-2 border-t border-border pt-6">
          {study.technologies.slice(0, 4).map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-border bg-background px-2.5 py-1 text-[11px] font-medium text-primary"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
