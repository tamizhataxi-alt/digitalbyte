import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { homeServices } from '../../data/services';

export function ServiceAreasGrid() {
  return (
    <ul className="mt-0 border-t border-primary/10">
      {homeServices.map((service, index) => {
        const href = service.detailRoute
          ? `/services/${service.slug}`
          : `/services#${service.slug}`;

        return (
          <li
            key={service.id}
            className={`border-b border-primary/10 ${index === 0 ? '' : ''}`}
          >
            <Link
              to={href}
              data-cursor-card
              className="group grid grid-cols-[2.75rem_1fr_1.25rem] items-start gap-x-4 py-6 transition-colors hover:bg-primary/[0.02] md:grid-cols-[3.5rem_1fr_1.5rem] md:gap-x-8 md:py-8"
            >
              <span
                className="pt-0.5 font-display text-sm font-medium tabular-nums tracking-tight text-primary/40 transition-colors group-hover:text-primary md:text-base"
                aria-hidden
              >
                {service.number}
              </span>

              <div className="min-w-0">
                <h3 className="font-display text-lg font-medium leading-tight tracking-[-0.02em] text-primary md:text-[1.35rem]">
                  {service.title}
                </h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-muted md:mt-2.5 md:text-[0.9375rem] md:leading-[1.65]">
                  {service.description}
                </p>
              </div>

              <ArrowUpRight
                className="mt-1 h-4 w-4 shrink-0 text-primary/35 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary md:mt-1.5 md:h-[1.125rem] md:w-[1.125rem]"
                aria-hidden
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
