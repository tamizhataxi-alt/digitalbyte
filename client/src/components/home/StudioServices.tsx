import { Link } from 'react-router-dom';
import { detailedServices } from '../../data/services';
import { Accordion, type AccordionItem } from '../ui/Accordion';
import { Reveal } from '../ui/Reveal';
import { WideContainer } from '../ui/WideContainer';

const serviceItems = detailedServices.filter((s) =>
  ['web-development', 'mobile-development', 'cloud-devops', 'ai-ml', 'product-engineering'].includes(
    s.slug,
  ),
);

export function StudioServices() {
  const items: AccordionItem[] = serviceItems.map((service) => ({
    id: service.slug,
    meta: service.number,
    title: service.title,
    subtitle: 'Scoped per engagement — not a fixed package.',
    content: (
      <>
        <p>{service.description}</p>
        {service.outcomes && service.outcomes[0] && (
          <p className="mt-4">{service.outcomes[0]}</p>
        )}
        {service.detailRoute && (
          <Link
            to={`/services/${service.slug}`}
            className="mt-6 inline-block text-sm font-medium text-primary underline-offset-4 hover:underline"
          >
            Service details →
          </Link>
        )}
      </>
    ),
  }));

  return (
    <section className="py-20 md:py-32">
      <WideContainer>
        <Reveal>
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Services</p>
          <h2 className="mt-4 max-w-3xl font-display text-section font-medium text-primary text-balance">
            Every build starts with the problem your users need solved.
          </h2>
          <p className="mt-6 max-w-2xl text-muted">
            Web, mobile, cloud, AI and product engineering — composed around your roadmap,
            not a one-size template.
          </p>
        </Reveal>
        <Reveal delay={120} className="mt-14">
          <Accordion items={items} />
        </Reveal>
      </WideContainer>
    </section>
  );
}
