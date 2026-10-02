import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

type HeroGetStartedButtonProps = {
  variant?: 'purple' | 'teal';
  label?: string;
  to?: string;
};

export function HeroGetStartedButton({
  variant = 'teal',
  label = 'Get Started',
  to = '/contact',
}: HeroGetStartedButtonProps) {
  if (variant === 'purple') {
    return (
      <Link
        to={to}
        className="hero-cta group relative inline-flex items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5548c8]"
      >
        <span
          className="relative z-20 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#5548c8] text-white shadow-[0_10px_28px_-6px_rgba(85,72,200,0.55)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-[#4d42b8] group-active:scale-[0.97]"
          aria-hidden
        >
          <ArrowRight className="h-[1.35rem] w-[1.35rem] stroke-[2.25px] transition-transform duration-300 group-hover:translate-x-0.5" />
        </span>
        <span
          className="-ml-[1.35rem] relative z-10 flex h-12 min-w-[10.5rem] items-center justify-center rounded-full border border-[#e3dff0] bg-[#f2f0ff]/95 py-0 pl-10 pr-9 text-[0.9375rem] font-semibold text-[#3e3a68] shadow-[0_8px_28px_-14px_rgba(62,58,104,0.28)] transition-all duration-300 group-hover:bg-[#f7f5ff] group-active:translate-y-px"
        >
          {label}
        </span>
      </Link>
    );
  }

  return (
    <Link
      to={to}
      className="hero-cta group inline-flex h-11 items-center gap-2.5 rounded-full border border-white/20 bg-white py-1 pl-1 pr-5 text-[0.875rem] font-semibold tracking-[-0.01em] text-[#121212] shadow-[0_12px_36px_-12px_rgba(0,0,0,0.28)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-white/35 hover:shadow-[0_14px_40px_-12px_rgba(0,0,0,0.32)] active:translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/80 sm:h-[2.875rem] sm:gap-3 sm:pr-6 sm:text-[0.9375rem]"
    >
      <span
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0a0a0a] text-white transition-colors duration-300 group-hover:bg-[#1a1a1a] group-active:scale-[0.97] sm:h-9 sm:w-9"
        aria-hidden
      >
        <ArrowRight className="h-3.5 w-3.5 stroke-[2.25px] transition-transform duration-300 group-hover:translate-x-0.5 sm:h-[0.95rem] sm:w-[0.95rem]" />
      </span>
      <span className="whitespace-nowrap pr-0.5">{label}</span>
    </Link>
  );
}
