import { detailedServices } from '../data/services';
import { PageLayout } from '../components/layout/PageLayout';
import { SEO } from '../components/ui/SEO';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { getServiceIcon } from '../lib/icons';
import { CTASection } from '../components/home/CTASection';
import { pageMedia } from '../data/siteMedia';
import { MediaImage } from '../components/ui/MediaImage';

export function Services() {
  return (
    <PageLayout>
      <SEO
        title="Services"
        description="Product thinking, design and engineering for web, mobile, cloud, AI and backend systems."
        path="/services"
      />
      <section className="pt-28 pb-16 md:pt-36 md:pb-24">
        <Container>
          <SectionHeading
            eyebrow="Services"
            title="Software built around your business."
            description="We combine product thinking, design and engineering to create digital systems that are useful today and ready for tomorrow."
          />
          <MediaImage
            media={pageMedia.services}
            className="mt-12 aspect-[16/9] rounded-2xl"
            overlay="dark"
            priority
          />
        </Container>
      </section>

      <section className="pb-20 md:pb-28">
        <Container className="space-y-24">
          {detailedServices.map((service, index) => {
            const Icon = getServiceIcon(service.icon);
            const isEven = index % 2 === 0;
            return (
              <article
                key={service.id}
                id={service.slug}
                className={`grid gap-10 border-t border-border pt-16 lg:grid-cols-12 lg:gap-12 ${
                  isEven ? '' : ''
                }`}
              >
                <div className={`lg:col-span-5 ${isEven ? '' : 'lg:order-2'}`}>
                  <span className="text-xs font-semibold text-muted">{service.number}</span>
                  <div className="mt-4 flex h-12 w-12 items-center justify-center rounded-sm bg-background border border-border">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h2 className="mt-6 text-3xl font-semibold text-primary md:text-4xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-muted">{service.shortIntro}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{service.description}</p>
                  {service.detailRoute && (
                    <Button
                      to={`/services/${service.slug}`}
                      variant="secondary"
                      className="mt-8"
                    >
                      View service details
                    </Button>
                  )}
                </div>
                <div className={`lg:col-span-7 ${isEven ? '' : 'lg:order-1'}`}>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="rounded-md border border-border bg-surface p-6">
                      <h3 className="text-sm font-semibold uppercase tracking-widest text-muted">
                        Capabilities
                      </h3>
                      <ul className="mt-4 space-y-2 text-sm text-primary">
                        {service.capabilities?.map((item) => (
                          <li key={item} className="flex gap-2">
                            <span className="text-accent" aria-hidden>—</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-md border border-border bg-background p-6">
                      <h3 className="text-sm font-semibold uppercase tracking-widest text-muted">
                        Typical outcomes
                      </h3>
                      <ul className="mt-4 space-y-2 text-sm text-primary">
                        {service.outcomes?.map((item) => (
                          <li key={item} className="flex gap-2">
                            <span className="text-accent" aria-hidden>—</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button to="/contact" variant="primary">Discuss this service</Button>
                  </div>
                </div>
              </article>
            );
          })}
        </Container>
      </section>

      <CTASection />
    </PageLayout>
  );
}
