import { useHeroEntrance } from '../../hooks/useHeroEntrance';
import { WideContainer } from '../ui/WideContainer';
import { MarketingHeroComposition } from './MarketingHeroComposition';
import { MarketingHeroServicesBand } from './MarketingHeroServicesBand';

export function StudioHero() {
  const rootRef = useHeroEntrance<HTMLElement>('marketing');

  return (
    <section
      ref={rootRef}
      className="marketing-hero-teal relative overflow-x-hidden bg-[#2a7d8c] pb-0 pt-[6rem] text-white md:pt-[6.5rem]"
      aria-label="Digital marketing hero"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#3d96a3] via-[#4fabb8] to-[#6ec4cf]"
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_0%,rgba(255,255,255,0.28),transparent_55%)]"
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_72%_28%,rgba(219,39,119,0.12),transparent_55%)]"
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(255,255,255,0.15),transparent_50%)]"
        />
        <div
          className="marketing-hero-bg-loop absolute left-1/2 top-[12%] h-[min(75vw,520px)] w-[min(75vw,520px)] -translate-x-1/2 rounded-full bg-white/20 blur-3xl"
        />
        <svg
          className="marketing-hero-bg-loop-slow absolute left-0 top-[22%] h-[min(55vh,420px)] w-full opacity-55"
          viewBox="0 0 1440 420"
          fill="none"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            d="M-40 280 C 200 120, 480 360, 720 200 S 1200 80, 1500 240 L 1500 420 L -40 420 Z"
            fill="url(#teal-wave)"
            fillOpacity="0.35"
          />
          <path
            d="M0 320 C 280 180, 520 380, 800 240 S 1280 140, 1440 300"
            stroke="rgba(94, 234, 212, 0.35)"
            strokeWidth="2"
          />
          <defs>
            <linearGradient id="teal-wave" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#0d9488" stopOpacity="0.05" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <WideContainer className="relative z-10">
        <MarketingHeroComposition />
      </WideContainer>

      <MarketingHeroServicesBand />
    </section>
  );
}
