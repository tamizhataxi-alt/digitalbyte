import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { engagementTiers } from '../../data/homeEngagement';
import { sectionMedia } from '../../data/siteMedia';
import { PillButton } from '../ui/PillButton';
import { Reveal } from '../ui/Reveal';
import { WideContainer } from '../ui/WideContainer';

export function StudioEngagement() {
  return (
    <section className="py-20 md:py-32">
      <WideContainer>
        <Reveal
          variant="image"
          clipReveal
          className="mb-14 hidden overflow-hidden rounded-2xl md:block md:rounded-3xl"
        >
          <img
            src={sectionMedia.engagement.src}
            alt={sectionMedia.engagement.alt}
            className="aspect-[21/9] w-full object-cover md:aspect-[3/1]"
            loading="lazy"
            decoding="async"
          />
        </Reveal>
        <Reveal variant="heading">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Engagement</p>
          <h2 className="mt-4 font-display text-section font-bold text-foreground">
            Ways to work together
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-muted">
            Indicative models — final scope and investment are defined per project after
            discovery. Not fixed pricing packages.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {engagementTiers.map((tier, i) => (
            <Reveal key={tier.id} variant="card" delay={i * 90}>
              <article
                className="group flex h-full flex-col rounded-2xl border border-border bg-white p-8 transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:border-foreground/20 hover:shadow-[0_28px_60px_-32px_rgba(0,0,0,0.2)] md:p-10"
              >
                <h3 className="font-display text-2xl font-bold tracking-[-0.03em] text-foreground">
                  {tier.name}
                </h3>
                <p className="mt-3 text-sm text-muted">{tier.summary}</p>
                <ul className="mt-8 flex-1 space-y-3 border-t border-border pt-8 text-sm text-muted">
                  {tier.highlights.map((line) => (
                    <li key={line} className="flex gap-2">
                      <span className="text-accent" aria-hidden>—</span>
                      {line}
                    </li>
                  ))}
                </ul>
                <PillButton
                  to="/contact"
                  className="mt-8 w-full justify-center transition-colors group-hover:!bg-accent group-hover:!text-primary"
                >
                  <span className="inline-flex items-center justify-center gap-2">
                    Get started
                    <ArrowRight
                      className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden
                    />
                  </span>
                </PillButton>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} variant="text" className="mt-10 text-center">
          <Link
            to="/contact"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            Share your budget range on the contact form →
          </Link>
        </Reveal>
      </WideContainer>
    </section>
  );
}
