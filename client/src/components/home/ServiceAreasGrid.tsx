import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { homeServices } from '../../data/services';
import { getServiceIcon } from '../../lib/icons';

export function ServiceAreasGrid() {
  return (
    <ul className="mt-8 grid gap-3 sm:grid-cols-2">
      {homeServices.map((service, index) => {
        const Icon = getServiceIcon(service.icon);
        const href = service.detailRoute
          ? `/services/${service.slug}`
          : `/services#${service.slug}`;
        const spanFull = index === homeServices.length - 1;

        return (
          <li key={service.id} className={spanFull ? 'sm:col-span-2' : ''}>
            <Link
              to={href}
              data-cursor-card
              className="group flex h-full gap-4 rounded-2xl border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-[0_16px_40px_-16px_rgba(0,0,0,0.12)] md:p-6"
            >
              <span
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-background text-primary transition-colors group-hover:border-primary/30 group-hover:bg-primary group-hover:text-white"
                aria-hidden
              >
                <Icon className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
                    {service.number}
                  </p>
                  <ArrowUpRight
                    className="h-4 w-4 shrink-0 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                    aria-hidden
                  />
                </div>
                <h3 className="mt-1 font-display text-base font-medium text-primary md:text-lg">
                  {service.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted line-clamp-2 md:text-sm">
                  {service.description}
                </p>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
