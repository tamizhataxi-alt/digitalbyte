import { marketingHeroMedia } from '../../data/siteMedia';

/** Full-bleed hero photo behind copy (not targeted by hero GSAP transforms). */
export function MarketingHeroImmersiveBackdrop() {
  const { visual } = marketingHeroMedia;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <img
        src={visual.src}
        alt=""
        width={visual.width ?? 1920}
        height={visual.height ?? 1080}
        fetchPriority="high"
        decoding="async"
        className="h-full w-full object-cover object-[50%_46%] scale-[1.14] sm:scale-[1.1] sm:object-[50%_48%] md:scale-[1.08] md:object-[50%_50%] lg:scale-[1.05]"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#060a12]/70 via-[#060a12]/30 to-transparent md:from-[#060a12]/60 md:via-[#060a12]/15 md:to-transparent"
      />
    </div>
  );
}
