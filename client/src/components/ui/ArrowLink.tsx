import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

type ArrowLinkProps = {
  to: string;
  children: string;
  className?: string;
  inverted?: boolean;
};

export function ArrowLink({
  to,
  children,
  className = '',
  inverted = false,
}: ArrowLinkProps) {
  return (
    <Link
      to={to}
      className={`group inline-flex items-center gap-2 text-sm font-medium transition-colors ${
        inverted
          ? 'text-white hover:text-accent'
          : 'text-primary hover:text-secondary'
      } ${className}`}
    >
      <span>{children}</span>
      <ArrowRight
        className="h-4 w-4 transition-transform group-hover:translate-x-1"
        aria-hidden
      />
    </Link>
  );
}
