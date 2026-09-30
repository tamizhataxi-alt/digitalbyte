import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

type PillButtonProps = {
  to: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
};

export function PillButton({ to, children, className = '', dark = true }: PillButtonProps) {
  return (
    <Link
      to={to}
      className={`pill-btn group ${dark ? 'pill-btn-dark' : 'pill-btn-light'} ${className}`}
    >
      <span className="pill-btn-inner">
        <span className="pill-btn-text">{children}</span>
        <span className="pill-btn-text" aria-hidden>{children}</span>
      </span>
    </Link>
  );
}
