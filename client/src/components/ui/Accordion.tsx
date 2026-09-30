import { useState, type ReactNode } from 'react';
import { Plus, Minus } from 'lucide-react';

export type AccordionItem = {
  id: string;
  title: string;
  subtitle?: string;
  meta?: string;
  content: ReactNode;
};

type AccordionProps = {
  items: AccordionItem[];
  defaultOpen?: string;
};

export function Accordion({ items, defaultOpen }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpen ?? items[0]?.id ?? null);

  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((item) => {
        const open = openId === item.id;
        return (
          <div key={item.id} className="bg-surface">
            <button
              type="button"
              className="flex w-full items-start justify-between gap-6 py-8 text-left transition-colors hover:bg-background/60 md:py-10"
              aria-expanded={open}
              onClick={() => setOpenId(open ? null : item.id)}
            >
              <div className="min-w-0">
                {item.meta && (
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                    {item.meta}
                  </p>
                )}
                <h3 className="mt-2 text-xl font-medium text-primary md:text-2xl">
                  {item.title}
                </h3>
                {item.subtitle && (
                  <p className="mt-1 text-sm text-muted">{item.subtitle}</p>
                )}
              </div>
              <span
                className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-background"
                aria-hidden
              >
                {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
              </span>
            </button>
            {open && (
              <div className={`accordion-panel is-open`}>
                <div className="pb-8 text-sm leading-relaxed text-muted md:pb-10 md:text-base">
                  {item.content}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
