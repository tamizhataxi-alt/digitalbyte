import { useLocalTime } from '../../hooks/useLocalTime';
import { heroMedia } from '../../data/siteMedia';
import { PillButton } from '../ui/PillButton';
import { Reveal } from '../ui/Reveal';
import { WideContainer } from '../ui/WideContainer';

const disciplines = ['engineering', 'design', 'cloud', 'AI / ML'];

export function StudioHero() {
  const localTime = useLocalTime();

  return (
    <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden">
      <img
        src={heroMedia.poster.src}
        alt=""
        width={1920}
        height={1080}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-[center_35%] md:object-center"
        aria-hidden
      />

      <div
        className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/65 to-primary/35"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-primary/40"
        aria-hidden
      />

      <WideContainer className="relative z-10 flex flex-1 flex-col justify-center pb-6 pt-28 md:pb-10 md:pt-36">
        <Reveal>
          <h1 className="font-display text-display font-medium text-white">
            Digital Byte
            <sup className="ml-1 text-[0.35em] font-normal text-white/80">®</sup>
            <span className="mt-2 block text-[clamp(1.5rem,4vw,3rem)] font-normal text-white/65">
              software development company
            </span>
          </h1>
        </Reveal>

        <Reveal delay={160} className="mt-8 max-w-2xl md:mt-10">
          <p className="text-base leading-relaxed text-white/80 md:text-lg">
            We align product thinking, interface design and engineering into one delivery
            loop — so your web, mobile and cloud products ship with clarity, not chaos.
          </p>
        </Reveal>

        <Reveal delay={220} className="mt-8 flex flex-wrap items-center gap-3 text-sm text-white/60">
          {disciplines.map((item, i) => (
            <span key={item} className="flex items-center gap-3">
              <span className="lowercase">{item}</span>
              {i < disciplines.length - 1 && <span className="text-white/35" aria-hidden>/</span>}
            </span>
          ))}
        </Reveal>
      </WideContainer>

      <WideContainer className="relative z-10 pb-8 md:pb-10">
        <Reveal delay={280}>
          <div className="grid gap-4 border-t border-white/15 pt-6 text-xs uppercase tracking-[0.16em] text-white/55 md:grid-cols-4">
            <div>
              <p className="text-[10px] text-white/45">Enquiries</p>
              <p className="mt-1 font-medium text-white">Open</p>
            </div>
            <div>
              <p className="text-[10px] text-white/45">Local time</p>
              <p className="mt-1 font-medium tabular-nums text-white">{localTime || '—'}</p>
            </div>
            <div>
              <p className="text-[10px] text-white/45">Portfolio</p>
              <p className="mt-1 font-medium text-white">Taxi · Commerce · ERP</p>
            </div>
            <div className="flex items-end justify-start md:justify-end">
              <PillButton to="/contact" dark={false} className="!border-white/30 !bg-white !text-primary">
                Start a project
              </PillButton>
            </div>
          </div>
        </Reveal>
      </WideContainer>
    </section>
  );
}
