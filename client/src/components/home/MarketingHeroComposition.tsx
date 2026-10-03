import { marketingHeroMedia } from '../../data/siteMedia';
import { HeroGetStartedButton } from './HeroGetStartedButton';
import { MarketingHeroWordmark } from './MarketingHeroWordmark';

export function MarketingHeroComposition() {
  const { visual } = marketingHeroMedia;
  const immersive = visual.layout === 'immersive';

  return (
    <div
      className={
        immersive
          ? 'relative z-10 flex min-h-[inherit] w-full max-w-none flex-col items-start'
          : 'relative mx-auto grid w-full max-w-[min(100vw,1780px)] grid-cols-1 overflow-visible py-0 max-md:gap-y-2 md:block md:min-h-[min(52vw,34rem)] md:py-1 lg:min-h-[min(48vw,38rem)]'
      }
      aria-label="Digital marketing hero"
    >
      <MarketingHeroWordmark immersive={immersive} />

      {immersive && (
        <div
          data-hero="cta"
          className="absolute inset-x-0 bottom-[2.75rem] z-20 flex justify-center px-5 sm:bottom-[3.25rem] md:hidden"
        >
          <HeroGetStartedButton variant="teal" label="Connect with us" to="/contact" />
        </div>
      )}

      {!immersive && (
        <div
          data-hero="visual"
          className="relative flex w-full justify-center overflow-visible max-md:col-start-1 max-md:row-start-2 max-md:pt-0 md:mx-0 md:justify-end md:pr-0 lg:pr-2 xl:pr-4"
        >
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[min(74vw,640px)] w-[min(100vw,1000px)] -translate-x-1/2 -translate-y-[42%] rounded-full bg-gradient-to-tr from-teal-400/25 via-fuchsia-500/10 to-transparent blur-3xl"
            aria-hidden
          />

          <img
            data-hero="subject"
            src={visual.src}
            alt={visual.alt}
            width={visual.width ?? 1400}
            height={visual.height ?? 1400}
            fetchPriority="high"
            decoding="async"
            className="relative z-10 w-full object-contain object-center drop-shadow-[0_32px_64px_-20px_rgba(0,0,0,0.45)] max-md:max-w-none max-md:w-[min(188vw,52rem)] max-md:min-w-[168vw] sm:max-md:w-[min(180vw,54rem)] md:max-w-[min(98vw,1160px)] md:min-w-0 md:w-full md:scale-100 md:translate-x-[2%] lg:max-w-[min(88vw,1500px)] lg:translate-x-[3%] xl:max-w-[min(86vw,1680px)] 2xl:max-w-[min(84vw,1820px)]"
          />
        </div>
      )}

      {!immersive && (
        <div
          data-hero="cta"
          className="mb-1 flex w-full max-md:col-start-1 max-md:row-start-4 max-md:mt-2 max-md:mb-4 max-md:justify-center md:hidden"
        >
          <HeroGetStartedButton variant="teal" label="Connect with us" to="/contact" />
        </div>
      )}
    </div>
  );
}
