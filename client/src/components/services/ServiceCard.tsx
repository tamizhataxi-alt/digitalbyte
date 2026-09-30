import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import type { Service } from '../../types';
import { getServiceIcon } from '../../lib/icons';

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = getServiceIcon(service.icon);
  const href =
    service.detailRoute ? `/services/${service.slug}` : `/services#${service.slug}`;

  return (
    <Link
      to={href}
      className="group relative flex flex-col justify-between rounded-md border border-border bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg md:min-h-[280px]"
    >
      <div>
        <div className="flex items-start justify-between gap-4">
          <span className="text-xs font-semibold text-muted">{service.number}</span>
          <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-background text-primary">
            <Icon className="h-5 w-5" aria-hidden />
          </span>
        </div>
        <h3 className="mt-8 text-xl font-semibold text-primary">{service.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{service.description}</p>
      </div>
      <span
        className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary"
        aria-hidden
      >
        <span className="border-b border-transparent transition-colors group-hover:border-accent">
          Learn more
        </span>
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
