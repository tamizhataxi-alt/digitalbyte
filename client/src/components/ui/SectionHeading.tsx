import type { ReactNode } from 'react';

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  align?: 'left' | 'center';
  dark?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  dark = false,
  className = '',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl';

  return (
    <div className={`${alignClass} ${className}`}>
      {eyebrow && (
        <p
          className={`mb-4 text-xs font-semibold uppercase tracking-[0.2em] ${
            dark ? 'text-accent' : 'text-muted'
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-section font-semibold tracking-tight ${
          dark ? 'text-white' : 'text-primary'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-6 text-base md:text-lg leading-relaxed ${
            dark ? 'text-white/70' : 'text-muted'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
