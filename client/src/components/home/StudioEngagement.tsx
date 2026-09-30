import { Link } from 'react-router-dom';
import { engagementTiers } from '../../data/homeEngagement';
import { sectionMedia } from '../../data/siteMedia';
import { MediaImage } from '../ui/MediaImage';
import { PillButton } from '../ui/PillButton';
import { Reveal } from '../ui/Reveal';
import { WideContainer } from '../ui/WideContainer';

export function StudioEngagement() {
  return (
    <section className="py-20 md:py-32">
      <WideContainer>
        <Reveal>
          <MediaImage
            media={sectionMedia.engagement}
            className="mb-14 aspect-[21/9] rounded-2xl md:aspect-[3/1]"
            overlay="dark"
          />
        </Reveal>
        <Reveal>
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Engagement</p>
          <h2 className="mt-4 font-display text-section font-medium text-primary">
            Ways to work together
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-muted">
            Indicative models — final scope and investment are defined per project after
            discovery. Not fixed pricing packages.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {engagementTiers.map((tier, i) => (
            <Reveal key={tier.id} delay={i * 80}>
              <article
                className="flex h-full flex-col rounded-2xl border border-border bg-surface p-8 transition-transform duration-300 hover:-translate-y-1"
              >
                <h3 className="font-display text-2xl font-medium text-primary">{tier.name}</h3>
                <p className="mt-3 text-sm text-muted">{tier.summary}</p>
                <ul className="mt-8 flex-1 space-y-3 border-t border-border pt-8 text-sm text-muted">
                  {tier.highlights.map((line) => (
                    <li key={line} className="flex gap-2">
                      <span className="text-primary" aria-hidden>—</span>
                      {line}
                    </li>
                  ))}
                </ul>
                <PillButton to="/contact" className="mt-8 w-full justify-center">
                  Get started
                </PillButton>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-10 text-center">
          <Link to="/contact" className="text-sm text-muted hover:text-primary">
            Share your budget range on the contact form →
          </Link>
        </Reveal>
      </WideContainer>
    </section>
  );
}
