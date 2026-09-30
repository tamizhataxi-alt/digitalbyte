import { caseStudyMedia } from '../../data/siteMedia';

type CaseStudyVisualProps = {
  slug: string;
  className?: string;
};

export function CaseStudyVisual({ slug, className = '' }: CaseStudyVisualProps) {
  const media = caseStudyMedia[slug];

  if (!media) {
    return (
      <div
        className={`relative overflow-hidden bg-primary ${className}`}
        aria-hidden
      />
    );
  }

  return (
    <div className={`relative overflow-hidden bg-secondary ${className}`}>
      <img
        src={media.src}
        alt={media.alt}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/30 via-primary/5 to-transparent" aria-hidden />
    </div>
  );
}
