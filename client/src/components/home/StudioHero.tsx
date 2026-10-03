import { marketingHeroMedia } from '../../data/siteMedia';
import { useHeroEntrance } from '../../hooks/useHeroEntrance';
import { WideContainer } from '../ui/WideContainer';
import { MarketingHeroComposition } from './MarketingHeroComposition';
import { MarketingHeroImmersiveBackdrop } from './MarketingHeroImmersiveBackdrop';
import { MarketingHeroServicesBand } from './MarketingHeroServicesBand';

export function StudioHero() {
  const rootRef = useHeroEntrance<HTMLElement>('marketing');
  const immersive = marketingHeroMedia.visual.layout === 'immersive';

  return (
    <section
      ref={rootRef}
      className={`marketing-hero-teal overflow-hidden pb-0 text-white ${
        immersive ? 'bg-[#060a12] pt-0' : 'relative overflow-x-hidden bg-[#2a7d8c] pt-[6rem] md:pt-[6.5rem]'
      }`}
      aria-label="Digital marketing hero"
    >
      {immersive ? (
        <div
          className="relative min-h-[min(92svh,880px)] pb-24 sm:min-h-[min(88svh,900px)] sm:pb-28 md:min-h-[min(82vh,860px)] md:pb-32 lg:min-h-[min(78vh,920px)] lg:pb-40 xl:pb-44"
        >
          <MarketingHeroImmersiveBackdrop />
          <WideContainer
            className="relative z-10 flex min-h-[inherit] w-full flex-col px-5 pb-4 pt-[5.25rem] sm:px-6 sm:pt-[5.5rem] md:px-10 md:pb-6 md:pt-[6.25rem] lg:pt-28"
          >
            <MarketingHeroComposition />
          </WideContainer>
        </div>
      ) : (
        <>
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
        </>
      )}

      <MarketingHeroServicesBand />
    </section>
  );
}
