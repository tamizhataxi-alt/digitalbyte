import type { Service } from '../../types';
import { ServiceCard } from './ServiceCard';

type ServiceGridProps = {
  services: Service[];
};

export function ServiceGrid({ services }: ServiceGridProps) {
  return (
    <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <div
          key={service.id}
          className={index === 4 ? 'md:col-span-2 lg:col-span-1' : ''}
        >
          <ServiceCard service={service} />
        </div>
      ))}
    </div>
  );
}
