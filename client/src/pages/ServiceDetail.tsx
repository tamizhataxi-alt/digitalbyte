import { Link, useParams } from 'react-router-dom';
import { getServiceBySlug } from '../data/services';
import { PageLayout } from '../components/layout/PageLayout';
import { SEO } from '../components/ui/SEO';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { CTASection } from '../components/home/CTASection';
import { NotFound } from './NotFound';
import { serviceMedia } from '../data/siteMedia';
import { MediaImage } from '../components/ui/MediaImage';

export function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service || !service.detailRoute) {
    return <NotFound />;
  }

  const heroMedia = serviceMedia[service.slug];

  return (
    <PageLayout>
      <SEO
        title={service.title}
        description={service.shortIntro ?? service.description}
        path={`/services/${service.slug}`}
      />
      <section className="pt-28 pb-16 md:pt-36">
        <Container>
          <Link to="/services" className="text-sm text-muted hover:text-primary">
            ← All services
          </Link>
          <div className="mt-8 grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="text-xs font-semibold text-muted">{service.number}</span>
              <h1 className="mt-4 text-section font-semibold text-primary">{service.title}</h1>
              <p className="mt-6 text-lg text-muted">{service.shortIntro}</p>
              <p className="mt-4 text-muted leading-relaxed">{service.description}</p>
            </div>
            <div className="lg:col-span-5">
              {heroMedia ? (
                <MediaImage
                  media={heroMedia}
                  className="aspect-[4/5] min-h-[280px] rounded-2xl lg:aspect-auto lg:min-h-[360px] lg:h-full"
                  overlay="dark"
                  priority
                />
              ) : (
                <div
                  className="flex h-full min-h-[280px] items-end rounded-2xl border border-border bg-surface p-8"
                  aria-hidden
                />
              )}
              <p className="mt-4 text-sm text-muted">
                Scoped engagements from discovery through launch and iteration.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-20">
        <Container className="grid gap-8 md:grid-cols-2">
          <div className="rounded-md border border-border bg-surface p-8">
            <h2 className="text-lg font-semibold">Capabilities</h2>
            <ul className="mt-6 space-y-3 text-sm text-muted">
              {service.capabilities?.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-md border border-border bg-background p-8">
            <h2 className="text-lg font-semibold">Typical outcomes</h2>
            <ul className="mt-6 space-y-3 text-sm text-muted">
              {service.outcomes?.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
          </div>
        </Container>
        <Container className="mt-12">
          <Button to="/contact" variant="accent">Start a conversation</Button>
        </Container>
      </section>

      <CTASection />
    </PageLayout>
  );
}
