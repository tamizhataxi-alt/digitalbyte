import { PageLayout } from '../components/layout/PageLayout';
import { SEO } from '../components/ui/SEO';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { CTASection } from '../components/home/CTASection';
import { pageMedia } from '../data/siteMedia';
import { MediaImage } from '../components/ui/MediaImage';

const values = [
  {
    title: 'Clarity',
    description: 'We communicate in plain language and align on scope before writing production code.',
  },
  {
    title: 'Ownership',
    description: 'We treat your product outcomes as shared responsibility, not ticket throughput.',
  },
  {
    title: 'Practicality',
    description: 'We favor solutions that teams can operate, extend and support after launch.',
  },
  {
    title: 'Continuous improvement',
    description: 'We iterate based on usage, feedback and changing business priorities.',
  },
];

export function About() {
  return (
    <PageLayout>
      <SEO
        title="About"
        description="Digital Byte is a software development company focused on practical digital products through product thinking, design and modern engineering."
        path="/about"
      />
      <section className="pt-28 pb-16 md:pt-36 md:pb-24">
        <Container>
          <MediaImage
            media={pageMedia.about}
            className="mb-12 aspect-[21/9] rounded-2xl md:aspect-[3/1]"
            overlay="dark"
            priority
          />
          <h1 className="max-w-4xl text-section font-semibold text-primary">
            Technology is useful when it solves a real problem.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">
            Digital Byte is a software development company focused on creating practical
            digital products for businesses. Our approach combines product thinking,
            thoughtful design and modern engineering.
          </p>
        </Container>
      </section>

      <section className="border-t border-border py-20">
        <Container className="grid gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Approach" title="Our approach" />
            <p className="mt-6 text-muted leading-relaxed">
              We start by understanding the workflow, constraints and definition of success.
              Design and engineering decisions follow from that foundation—not from a fixed
              template or a single preferred stack.
            </p>
          </div>
          <div>
            <SectionHeading eyebrow="Values" title="What we value" />
            <ul className="mt-8 space-y-6">
              {values.map((v) => (
                <li key={v.title} className="border-l-2 border-accent pl-6">
                  <h3 className="font-semibold text-primary">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted">{v.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-surface py-20">
        <Container>
          <SectionHeading eyebrow="Delivery" title="How we work" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              'Short discovery to validate assumptions and define scope.',
              'Iterative builds with demos that show real progress.',
              'Launch support plus a plan for what to improve next.',
            ].map((text, i) => (
              <p
                key={i}
                className="rounded-md border border-border bg-background p-6 text-sm text-muted"
              >
                <span className="text-accent font-semibold">0{i + 1}</span>
                <span className="mt-3 block">{text}</span>
              </p>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Stack"
            title="Technology philosophy"
            description="We choose tools that fit reliability, team skills and product lifecycle—not hype. Stacks evolve with the product; architecture should make that evolution possible."
          />
        </Container>
      </section>

      <CTASection
        title="Ready to talk through your product?"
        buttonLabel="Contact us"
      />
    </PageLayout>
  );
}
