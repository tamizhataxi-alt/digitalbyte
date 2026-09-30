import { Link } from 'react-router-dom';
import { whyPoints } from '../../data/home';
import { PillButton } from '../ui/PillButton';
import { Reveal } from '../ui/Reveal';
import { WideContainer } from '../ui/WideContainer';

export function StudioWhy() {
  return (
    <section className="border-t border-border bg-primary py-20 text-white md:py-32">
      <WideContainer>
        <Reveal>
          <p className="text-xs uppercase tracking-[0.2em] text-white/50">Why us?</p>
          <h2 className="mt-4 font-display text-section font-medium">
            Built on
            <span className="text-white/45"> discipline</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <Reveal delay={80} className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-10">
            <p className="text-sm text-white/60">How we measure success</p>
            <p className="mt-4 text-2xl font-display font-medium leading-snug">
              Useful releases, clear communication, and systems your team can operate after
              launch.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-block text-sm text-white/70 underline-offset-4 hover:text-white hover:underline"
            >
              Our approach
            </Link>
          </Reveal>
          <Reveal delay={140} className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-10">
            <p className="text-sm text-white/60">Engagement model</p>
            <p className="mt-4 text-2xl font-display font-medium leading-snug">
              Direct collaboration with engineers and product thinkers — no hand-offs into a
              black box.
            </p>
            <PillButton to="/contact" className="mt-8" dark={false}>
              Start a project
            </PillButton>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-8 border-t border-white/10 pt-16 md:grid-cols-2">
          {whyPoints.map((point, i) => (
            <Reveal key={point.number} delay={i * 60}>
              <p className="text-xs text-white/40">{point.number}</p>
              <h3 className="mt-2 text-lg font-medium">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{point.description}</p>
            </Reveal>
          ))}
        </div>
      </WideContainer>
    </section>
  );
}
