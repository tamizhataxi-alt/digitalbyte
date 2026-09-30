import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { CaseStudy } from '../../types';
import { caseStudies } from '../../data/caseStudies';
import { caseStudyMedia } from '../../data/siteMedia';
import { Reveal } from '../ui/Reveal';

const showcaseSlugs = ['ecommerce-website', 'erp-system', 'inventory-management'] as const;

const studies = showcaseSlugs
  .map((slug) => caseStudies.find((s) => s.slug === slug))
  .filter((s): s is CaseStudy => Boolean(s));

type BentoCardProps = {
  study: CaseStudy;
  className?: string;
  priority?: boolean;
};

function BentoProjectCard({ study, className = '', priority = false }: BentoCardProps) {
  const media = caseStudyMedia[study.slug];

  return (
    <Link
      to={`/work/${study.slug}`}
      data-cursor-card
      className={`group relative block min-h-[18rem] overflow-hidden rounded-[1.75rem] bg-neutral-100 sm:min-h-[20rem] ${className}`}
    >
      <img
        src={media?.src ?? '/media/page-services.jpg'}
        alt={media?.alt ?? study.title}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent"
        aria-hidden
      />

      <div className="absolute inset-x-3 bottom-3 sm:inset-x-4 sm:bottom-4">
        <div
          className="flex items-center justify-between gap-3 rounded-2xl border border-white/30 bg-white/85 px-3.5 py-3 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:px-4 sm:py-3.5"
        >
          <div className="min-w-0">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary/55">
              {study.industry}
            </p>
            <p className="mt-0.5 font-display text-sm font-semibold leading-snug text-primary sm:text-[1.05rem]">
              {study.title}
            </p>
          </div>
          <span
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-white transition-transform duration-300 group-hover:scale-105 sm:h-10 sm:w-10"
            aria-hidden
          >
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export function StudioMoreFromStudio() {
  const [ecommerce, erp, inventory] = studies;

  if (!ecommerce || !erp || !inventory) return null;

  return (
    <Reveal delay={200} className="mt-14 border-t border-border pt-10 md:mt-16 md:pt-14">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:grid-rows-2 lg:gap-4">
        <header className="order-1 lg:order-none lg:col-span-4 lg:col-start-9 lg:row-start-1 lg:self-start">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            More from our studio
          </p>
          <h2 className="mt-4 font-display text-2xl font-medium leading-tight text-primary md:text-[1.75rem] lg:text-[2rem]">
            Platforms built for growing businesses
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted md:text-base">
            Online stores, ERP dashboards and warehouse tools — clear for your team and your
            customers.
          </p>
        </header>

        <BentoProjectCard
          study={ecommerce}
          priority
          className="order-2 lg:order-none lg:col-span-5 lg:row-span-2 lg:row-start-1 lg:min-h-[34rem]"
        />

        <BentoProjectCard
          study={erp}
          className="order-3 lg:order-none lg:col-span-3 lg:col-start-6 lg:row-start-1 lg:min-h-[16.25rem]"
        />

        <BentoProjectCard
          study={inventory}
          className="order-4 lg:order-none lg:col-span-3 lg:col-start-6 lg:row-start-2 lg:min-h-[16.25rem]"
        />
      </div>
    </Reveal>
  );
}
