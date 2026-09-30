import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { HeroVisual } from './HeroVisual';

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-60" />
      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">
              Software Development Studio
            </p>
            <h1 className="mt-6 text-hero font-semibold text-primary">
              Digital products built for the way your business moves.
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted md:text-lg">
              Digital Byte designs and develops web platforms, mobile applications and
              cloud-powered systems that turn complex ideas into practical digital products.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button to="/contact" variant="primary">Start a Project</Button>
              <Button to="/work" variant="secondary">Explore Our Work</Button>
            </div>
          </div>
          <div className="lg:col-span-5 lg:pl-4">
            <HeroVisual />
          </div>
        </div>
      </Container>
    </section>
  );
}
