import { Link } from 'react-router-dom';
import { BarChart3, Megaphone, Rocket, TrendingUp } from 'lucide-react';
import { digitalGrowthMedia } from '../../data/digitalGrowth';
import { Reveal } from '../ui/Reveal';
import { WideContainer } from '../ui/WideContainer';
import { HeroGetStartedButton } from './HeroGetStartedButton';

function StatCard({
  icon: Icon,
  value,
  label,
  description,
  accent,
}: {
  icon: typeof Rocket;
  value: string;
  label: string;
  description: string;
  accent: 'cyan' | 'violet';
}) {
  const iconGlow =
    accent === 'cyan'
      ? 'border-cyan-400/30 bg-cyan-500/10 text-cyan-300 shadow-[0_0_32px_-8px_rgba(34,211,238,0.55)]'
      : 'border-violet-400/30 bg-violet-500/10 text-violet-300 shadow-[0_0_32px_-8px_rgba(167,139,250,0.55)]';
  const valueGradient =
    accent === 'cyan'
      ? 'from-cyan-300 via-sky-400 to-violet-400'
      : 'from-violet-300 via-fuchsia-400 to-cyan-400';
  const barColor = accent === 'cyan' ? 'bg-lime-400' : 'bg-lime-400';

  return (
    <article
      className="relative overflow-hidden rounded-[1.35rem] border border-white/10 bg-gradient-to-br from-[#0c1222] via-[#111827] to-[#0a0f1c] p-6 shadow-[0_24px_60px_-32px_rgba(15,23,42,0.85)] sm:rounded-[1.5rem] sm:p-7"
    >
      <div
        className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border ${iconGlow}`}
        aria-hidden
      >
        <Icon className="h-5 w-5 stroke-[2px]" />
      </div>
      <p
        className={`bg-gradient-to-r ${valueGradient} bg-clip-text font-display text-4xl font-bold tracking-tight text-transparent sm:text-[2.5rem]`}
      >
        {value}
      </p>
      <p className="mt-1 text-lg font-semibold text-white">{label}</p>
      <div className={`mt-4 h-0.5 w-10 rounded-full ${barColor}`} aria-hidden />
      <p className="mt-4 text-sm leading-relaxed text-slate-400">{description}</p>
      {accent === 'violet' ? (
        <BarChart3
          className="pointer-events-none absolute bottom-5 right-5 h-16 w-16 text-cyan-500/15"
          aria-hidden
        />
      ) : null}
    </article>
  );
}

export function StudioStrategy() {
  return (
    <section className="relative overflow-hidden border-t border-border bg-background py-16 md:py-24 lg:py-28">
      <WideContainer className="relative">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <Reveal variant="heading" className="max-w-2xl">
            <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#5548c8]">
              <span
                className="h-px w-10 bg-gradient-to-r from-[#5548c8] to-transparent"
                aria-hidden
              />
              What we do
            </p>
            <h2 className="mt-5 font-display text-[clamp(2rem,5vw,3.25rem)] font-bold leading-[1.08] tracking-[-0.03em] text-foreground">
              Creating digital{' '}
              <span
                className="bg-gradient-to-r from-[#22d3ee] via-[#38bdf8] to-[#2dd4bf] bg-clip-text text-transparent"
              >
                growth
              </span>
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted md:text-[1.0625rem] md:leading-[1.65]">
              We build smart digital strategies that help brands reach the right audience and
              achieve real results.
            </p>
          </Reveal>

          <Reveal delay={120} variant="fade" className="shrink-0 lg:pb-1">
            <HeroGetStartedButton variant="purple" label="Contact Us" to="/contact" />
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 md:grid-cols-2 md:gap-5 lg:mt-14 lg:grid-cols-12 lg:gap-5">
          <div className="flex flex-col gap-4 md:gap-5 lg:col-span-4">
            <Reveal delay={80} variant="card">
              <StatCard
                icon={Rocket}
                value="16K+"
                label="Projects"
                description="Delivered across web, mobile, and growth campaigns for ambitious brands."
                accent="cyan"
              />
            </Reveal>
            <Reveal delay={160} variant="image" className="overflow-hidden rounded-[1.35rem] sm:rounded-[1.5rem]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.35rem] shadow-[0_20px_50px_-28px_rgba(15,45,56,0.45)] sm:rounded-[1.5rem]">
                <img
                  src={digitalGrowthMedia.creativeDesk.src}
                  alt={digitalGrowthMedia.creativeDesk.alt}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                  loading="lazy"
                  decoding="async"
                />
                <div
                  className="absolute right-3 top-3 rounded-full border border-white/60 bg-white/95 px-3 py-1.5 text-[10px] font-semibold text-[#0f1f3d] shadow-sm backdrop-blur-sm sm:text-[11px]"
                >
                  Creative Ideas{' '}
                  <span className="text-[#22c55e]" aria-hidden>●</span> Real Results
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal
            delay={120}
            variant="image"
            className="lg:col-span-4 lg:row-span-2"
          >
            <div className="relative h-full min-h-[22rem] overflow-hidden rounded-[1.35rem] shadow-[0_24px_56px_-30px_rgba(15,45,56,0.5)] sm:min-h-[26rem] sm:rounded-[1.5rem] lg:min-h-[32rem]">
              <img
                src={digitalGrowthMedia.teamCollab.src}
                alt={digitalGrowthMedia.teamCollab.alt}
                className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
                loading="lazy"
                decoding="async"
              />
              <div
                className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0f172a]/85 via-[#0f172a]/35 to-transparent px-5 pb-5 pt-16 sm:px-6 sm:pb-6"
              >
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="font-display text-3xl font-bold text-white sm:text-4xl">98%</p>
                    <p className="mt-1 text-sm font-medium text-teal-300">Performance Growth</p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-lime-400 sm:h-9 sm:w-9" aria-hidden />
                </div>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-4 md:gap-5 lg:col-span-4">
            <Reveal delay={140} variant="image" className="overflow-hidden rounded-[1.35rem] sm:rounded-[1.5rem]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.35rem] shadow-[0_20px_50px_-28px_rgba(15,45,56,0.45)] sm:rounded-[1.5rem]">
                <img
                  src={digitalGrowthMedia.marketingSession.src}
                  alt={digitalGrowthMedia.marketingSession.alt}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </Reveal>
            <Reveal delay={200} variant="card">
              <StatCard
                icon={Megaphone}
                value="24K+"
                label="Campaign Results"
                description="Performance campaigns engineered for reach, engagement, and conversion."
                accent="violet"
              />
            </Reveal>
          </div>
        </div>

        <Reveal delay={220} variant="text" className="mt-10 text-center lg:mt-12">
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-[#5548c8]"
          >
            <span className="border-b border-foreground/25 pb-0.5 transition-colors group-hover:border-[#5548c8]/50">
              Explore all services
            </span>
            <span className="transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden>
              →
            </span>
          </Link>
        </Reveal>
      </WideContainer>
    </section>
  );
}
