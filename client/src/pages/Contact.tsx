import { PageLayout } from '../components/layout/PageLayout';
import { SEO } from '../components/ui/SEO';
import { Container } from '../components/ui/Container';
import { ContactForm } from '../components/contact/ContactForm';
import { CONTACT_EMAIL } from '../lib/constants';
import { pageMedia } from '../data/siteMedia';
import { MediaImage } from '../components/ui/MediaImage';

export function Contact() {
  return (
    <PageLayout>
      <SEO
        title="Contact"
        description="Get in touch with Digital Byte about your web, mobile, cloud or AI product idea."
        path="/contact"
      />
      <section className="pt-28 pb-20 md:pt-36 md:pb-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h1 className="text-section font-semibold text-primary">
                Let&apos;s build something useful.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                Tell us what you&apos;re planning, what problem you&apos;re trying to solve,
                or where your current product needs help.
              </p>
              <div className="mt-10 rounded-md border border-border bg-surface p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted">
                  Email
                </p>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="mt-2 inline-block text-lg font-medium text-primary hover:underline"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
              <MediaImage
                media={pageMedia.contact}
                className="mt-10 aspect-[16/10] rounded-2xl"
                overlay="dark"
              />
            </div>
            <ContactForm />
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
