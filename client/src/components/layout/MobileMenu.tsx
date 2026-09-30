import { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X } from 'lucide-react';
import { mainNav } from '../../data/navigation';
import { Button } from '../ui/Button';
import { useFocusTrap } from '../../hooks/useFocusTrap';

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const location = useLocation();
  const panelRef = useRef<HTMLDivElement>(null);
  useFocusTrap(panelRef, open);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden" role="presentation">
      <button
        type="button"
        className="absolute inset-0 bg-primary/40 backdrop-blur-sm"
        aria-label="Close menu overlay"
        onClick={onClose}
      />
      <div
        ref={panelRef}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Main navigation"
        className="absolute right-0 top-0 flex h-full w-[min(100%,20rem)] flex-col bg-surface shadow-xl"
      >
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <span className="text-sm font-semibold tracking-widest">DIGITAL BYTE</span>
          <button
            type="button"
            onClick={onClose}
            className="flex h-11 w-11 items-center justify-center rounded-sm border border-border"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" aria-hidden />
          </button>
        </div>
        <nav className="flex flex-1 flex-col gap-1 p-5" aria-label="Mobile">
          {mainNav.map((item) => {
            const active = location.pathname === item.href;
            return (
              <Link
                key={item.href}
                to={item.href}
                onClick={onClose}
                aria-current={active ? 'page' : undefined}
                className={`rounded-sm px-3 py-3 text-lg font-medium transition-colors ${
                  active ? 'bg-background text-primary' : 'text-text hover:bg-background'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="border-t border-border p-5">
          <Button to="/contact" variant="accent" className="w-full" onClick={onClose}>
            Let&apos;s Talk
          </Button>
        </div>
      </div>
    </div>
  );
}
