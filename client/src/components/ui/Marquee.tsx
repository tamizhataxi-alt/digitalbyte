import type { ReactNode } from 'react';

type MarqueeProps = {
  children: ReactNode;
  className?: string;
  speed?: 'slow' | 'normal' | 'fast';
};

const speedClass = {
  slow: '[--marquee-duration:40s]',
  normal: '[--marquee-duration:28s]',
  fast: '[--marquee-duration:18s]',
};

export function Marquee({ children, className = '', speed = 'normal' }: MarqueeProps) {
  return (
    <div className={`marquee overflow-hidden ${speedClass[speed]} ${className}`}>
      <div className="marquee-track">
        <div className="marquee-group">{children}</div>
        <div className="marquee-group" aria-hidden>{children}</div>
      </div>
    </div>
  );
}
