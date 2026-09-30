type BadgeProps = {
  children: string;
  variant?: 'default' | 'accent' | 'dark';
};

export function Badge({ children, variant = 'default' }: BadgeProps) {
  const styles = {
    default: 'bg-background text-muted border-border',
    accent: 'bg-accent/20 text-primary border-accent/40',
    dark: 'bg-white/10 text-white border-white/20',
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide ${styles[variant]}`}
    >
      {children}
    </span>
  );
}
