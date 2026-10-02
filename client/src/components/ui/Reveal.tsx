import type { ReactNode } from 'react';
import { ScrollReveal } from '../motion/ScrollReveal';
import type { RevealVariant } from '../../lib/motion';

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: RevealVariant;
  clipReveal?: boolean;
};

/** Scroll-triggered reveal — GSAP choreography (not CSS fade-only). */
export function Reveal({
  children,
  className = '',
  delay = 0,
  variant = 'text',
  clipReveal = false,
}: RevealProps) {
  return (
    <ScrollReveal
      className={className}
      delay={delay}
      variant={variant}
      clipReveal={clipReveal}
    >
      {children}
    </ScrollReveal>
  );
}
