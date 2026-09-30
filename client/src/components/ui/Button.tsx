import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'accent';

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  to?: string;
  href?: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  ariaLabel?: string;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-white hover:bg-secondary border border-primary',
  secondary:
    'bg-transparent text-primary border border-border hover:border-primary',
  accent:
    'bg-accent text-primary border border-accent hover:brightness-95',
};

export function Button({
  children,
  variant = 'primary',
  to,
  href,
  type = 'button',
  onClick,
  disabled,
  className = '',
  ariaLabel,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 text-sm font-medium transition-colors duration-200 min-h-[44px] disabled:opacity-50 disabled:pointer-events-none';

  const classes = `${base} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link
        to={to}
        className={classes}
        aria-label={ariaLabel}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
