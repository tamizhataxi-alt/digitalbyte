import { processSteps } from '../../data/home';
import { sectionMedia } from '../../data/siteMedia';
import { MediaImage } from '../ui/MediaImage';
import { Reveal } from '../ui/Reveal';
import { WideContainer } from '../ui/WideContainer';

const highlights = [
  {
    label: 'Delivery rhythm',
    value: 'Iterative',
    detail: 'Short cycles with demos you can react to',
  },
  {
    label: 'Quality bar',
    value: 'Production',
    detail: 'Performance, accessibility and reliability considered early',
  },
  {
    label: 'Collaboration',
    value: 'Embedded',
    detail: 'Your team stays close to decisions and trade-offs',
  },
];

export function StudioProcess() {
  return (
    <section className="border-y border-border bg-surface py-20 md:py-32">
      <WideContainer>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.2em] text-muted">How we do it</p>
            <MediaImage
              media={sectionMedia.process}
              className="mt-8 aspect-[16/10] rounded-2xl"
              overlay="dark"
            />
          </Reveal>
          <div>
            <div className="grid gap-10 sm:grid-cols-3">
              {highlights.map((item, i) => (
                <Reveal key={item.label} delay={i * 80}>
                  <p className="text-xs uppercase tracking-[0.16em] text-muted">{item.label}</p>
                  <p className="mt-3 font-display text-3xl font-medium text-primary">{item.value}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.detail}</p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={200} className="mt-12 max-w-xl">
              <p className="text-lg leading-relaxed text-muted">
                We take on projects where structured discovery, thoughtful engineering and steady
                delivery can make a measurable difference — not volume for volume&apos;s sake.
              </p>
            </Reveal>
          </div>
        </div>

        <ol className="mt-16 grid gap-4 md:grid-cols-5">
          {processSteps.map((step, i) => (
            <Reveal key={step.number} delay={i * 50}>
              <li className="rounded-xl border border-border bg-background p-5">
                <p className="text-xs text-muted">{step.number}</p>
                <p className="mt-2 font-medium text-primary">{step.title}</p>
                <p className="mt-2 text-xs leading-relaxed text-muted">{step.description}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </WideContainer>
    </section>
  );
}
