import { sectionMedia } from '../../data/siteMedia';
import { MediaImage } from '../ui/MediaImage';
import { Reveal } from '../ui/Reveal';
import { WideContainer } from '../ui/WideContainer';

export function StudioQuote() {
  return (
    <section className="border-y border-border bg-white py-20 md:py-28">
      <WideContainer>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.2em] text-muted">How we think</p>
            <blockquote className="mt-8 max-w-4xl">
              <p className="font-display text-2xl font-medium leading-snug text-primary md:text-4xl">
                “The hardest part of building software isn&apos;t the framework — it&apos;s knowing
                what to build first, what to defer, and what to leave out.”
              </p>
            </blockquote>
            <p className="mt-8 max-w-xl text-sm leading-relaxed text-muted">
              Our team treats simplicity as a discipline, not a shortcut — especially when
              products, integrations and timelines all compete for attention.
            </p>
            <p className="mt-6 text-sm text-muted">Digital Byte — product engineering studio</p>
          </Reveal>
          <Reveal delay={100} className="lg:col-span-5">
            <MediaImage
              media={sectionMedia.quote}
              className="aspect-[4/5] rounded-2xl"
              overlay="dark"
            />
          </Reveal>
        </div>
      </WideContainer>
    </section>
  );
}
