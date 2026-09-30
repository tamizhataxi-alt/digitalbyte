import { CONTACT_EMAIL } from '../../lib/constants';
import { PillButton } from '../ui/PillButton';
import { Reveal } from '../ui/Reveal';
import { WideContainer } from '../ui/WideContainer';

export function StudioFinalCTA() {
  return (
    <section className="bg-primary py-20 text-white md:py-28">
      <WideContainer className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <p className="font-display text-sm font-semibold">
            Digital Byte<sup className="text-[0.6em]">®</sup>
          </p>
          <h2 className="mt-6 font-display text-section font-medium">Start a project.</h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-white/65">
            Whether you have a full brief or just an idea, we&apos;ll help shape a practical
            technical direction. No pitch theatre — just a clear next step.
          </p>
        </Reveal>
        <Reveal delay={100} className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-10">
          <p className="text-xs uppercase tracking-[0.16em] text-white/50">Contact</p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-3 block text-xl font-medium text-white hover:underline"
          >
            {CONTACT_EMAIL}
          </a>
          <p className="mt-4 text-sm text-white/55">
            Use the contact form for project details, budget range and service needs.
          </p>
          <PillButton to="/contact" className="mt-8" dark={false}>
            Send an enquiry
          </PillButton>
        </Reveal>
      </WideContainer>
    </section>
  );
}
