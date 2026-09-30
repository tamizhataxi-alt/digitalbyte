import { Link } from 'react-router-dom';
import { Marquee } from '../ui/Marquee';
import { Reveal } from '../ui/Reveal';
import { WideContainer } from '../ui/WideContainer';

export function StudioBuildMarquee() {
  return (
    <section className="overflow-hidden border-y border-border bg-surface py-16 md:py-24">
      <WideContainer>
        <Reveal>
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Capabilities</p>
        </Reveal>
      </WideContainer>

      <div className="mt-10">
        <Marquee speed="slow">
          {Array.from({ length: 6 }).map((_, i) => (
            <h2
              key={i}
              className="font-display text-[clamp(2.5rem,8vw,6rem)] font-medium lowercase text-primary"
            >
              We build software
            </h2>
          ))}
        </Marquee>
      </div>

      <WideContainer className="mt-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <Reveal>
          <p className="max-w-md text-sm leading-relaxed text-muted md:text-base">
            Where moving forward feels obvious, natural, and impossible to overthink — from
            discovery through launch and iteration.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <Link
            to="/work"
            className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary"
          >
            <span aria-hidden>↓</span>
            See the work
          </Link>
        </Reveal>
      </WideContainer>
    </section>
  );
}
