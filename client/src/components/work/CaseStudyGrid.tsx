import type { CaseStudy } from '../../types';
import { CaseStudyCard } from './CaseStudyCard';

type CaseStudyGridProps = {
  studies: CaseStudy[];
};

export function CaseStudyGrid({ studies }: CaseStudyGridProps) {
  return (
    <ul className="grid gap-6 sm:grid-cols-2">
      {studies.map((study, i) => (
        <li key={study.slug} className="min-h-0">
          <CaseStudyCard study={study} index={i + 1} />
        </li>
      ))}
    </ul>
  );
}
