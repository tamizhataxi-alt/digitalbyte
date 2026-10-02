import { HeroGetStartedButton } from './HeroGetStartedButton';

export function MarketingHeroWordmark() {
  return (
    <div
      data-hero="heading"
      className="marketing-hero-wordmark relative z-20 max-md:contents shrink-0 text-left md:absolute md:left-0 md:top-[6.25rem] md:z-30 md:mb-0 md:mt-0 md:w-[min(36vw,22rem)] md:max-w-[22rem] md:translate-y-0 lg:top-28 lg:w-[min(32vw,24rem)] lg:max-w-[26rem] xl:max-w-[28rem]"
    >
      <h1 className="m-0 max-md:col-start-1 max-md:row-start-1 max-md:-ml-2 max-md:justify-self-start max-md:pt-0.5 p-0">
        <span
          className="block font-display text-[clamp(2.5rem,6.2vw,4.75rem)] font-extrabold leading-[0.92] tracking-[-0.035em] text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.12)] sm:text-[clamp(2.75rem,5vw,5.25rem)] lg:text-[clamp(3.25rem,4.2vw,5.75rem)]"
        >
          Digital
        </span>
        <span
          className="-mt-0.5 block font-display text-[clamp(2.1rem,5vw,4rem)] font-medium italic leading-[0.95] tracking-[-0.02em] text-white/[0.48] sm:-mt-1 sm:text-[clamp(2.35rem,4.2vw,4.35rem)] lg:text-[clamp(2.65rem,3.5vw,4.85rem)]"
        >
          Byte
        </span>
      </h1>

      <div
        data-hero="supporting"
        className="mt-6 max-md:col-start-1 max-md:row-start-3 max-md:mt-1 max-md:justify-self-end max-md:pr-1 max-md:text-right sm:mt-7 md:mt-8 md:justify-self-auto md:text-left md:pr-0"
      >
        <div
          className="mb-4 h-px w-16 bg-gradient-to-r from-white/50 via-white/15 to-transparent max-md:ml-auto max-md:bg-gradient-to-l sm:w-[4.5rem] md:ml-0 md:bg-gradient-to-r"
          aria-hidden
        />
        <p
          className="max-w-[13rem] font-display text-[clamp(1rem,1.85vw,1.1875rem)] leading-[1.35] tracking-[-0.02em] max-md:ml-auto sm:max-w-[14.5rem] md:ml-0"
        >
          <span className="block font-semibold text-white/[0.92]">We build websites</span>
          <span className="-mt-0.5 block font-medium italic text-white/[0.44]">
            for your business.
          </span>
        </p>
      </div>

      <div data-hero="cta" className="mt-9 hidden sm:mt-10 md:mt-11 md:block">
        <HeroGetStartedButton variant="teal" label="Connect with us" to="/contact" />
      </div>
    </div>
  );
}
