export type WorkFilter = 'all' | 'web' | 'mobile' | 'cloud' | 'ai';

const filters: { id: WorkFilter; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'web', label: 'Web' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'cloud', label: 'Cloud' },
  { id: 'ai', label: 'AI' },
];

type CaseStudyFilterProps = {
  value: WorkFilter;
  onChange: (value: WorkFilter) => void;
};

export function CaseStudyFilter({ value, onChange }: CaseStudyFilterProps) {
  return (
    <div
      className="flex flex-wrap gap-2"
      role="tablist"
      aria-label="Filter projects"
    >
      {filters.map((filter) => {
        const selected = value === filter.id;
        return (
          <button
            key={filter.id}
            type="button"
            role="tab"
            aria-selected={selected}
            onClick={() => onChange(filter.id)}
            className={`rounded-full px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] transition-all min-h-[44px] ${
              selected
                ? 'bg-primary text-white shadow-sm'
                : 'border border-border bg-background text-muted hover:border-primary/40 hover:text-primary'
            }`}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}
