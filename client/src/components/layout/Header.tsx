import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { mainNav } from '../../data/navigation';
import { PillButton } from '../ui/PillButton';
import { WideContainer } from '../ui/WideContainer';
import { MobileMenu } from './MobileMenu';
import { useStickyHeader } from '../../hooks/useStickyHeader';

export type HeaderProps = {
  transparent?: boolean;
  studio?: boolean;
  heroOverlay?: boolean;
};

export function Header({
  transparent = false,
  studio = false,
  heroOverlay = false,
}: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useStickyHeader(48);
  const location = useLocation();

  const solid = scrolled || !transparent;
  const onHero = heroOverlay && transparent && !scrolled;

  if (studio) {
    return (
      <>
        <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6 md:pt-5">
          <WideContainer
            as="div"
            className={`flex h-14 items-center justify-between rounded-full border px-5 transition-all duration-500 md:h-[3.25rem] md:px-8 ${
              solid
                ? 'border-border bg-surface/90 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.12)] backdrop-blur-xl'
                : onHero
                  ? 'border-white/15 bg-black/25 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.4)] backdrop-blur-xl'
                  : 'border-transparent bg-surface/50 backdrop-blur-md'
            }`}
          >
            <Link
              to="/"
              className={`font-display text-sm font-semibold tracking-tight md:text-base ${
                onHero ? 'text-white' : 'text-primary'
              }`}
            >
              Digital Byte<sup className="text-[0.55em]">®</sup>
            </Link>

            <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
              {mainNav.map((item, index) => {
                const active =
                  location.pathname === item.href ||
                  (item.href !== '/' && location.pathname.startsWith(item.href));
                return (
                  <span key={item.href} className="flex items-center">
                    <Link
                      to={item.href}
                      aria-current={active ? 'page' : undefined}
                      className={`px-3 py-2 text-sm lowercase transition-opacity hover:opacity-100 ${
                        onHero
                          ? active
                            ? 'text-white opacity-100'
                            : 'text-white/70 opacity-90 hover:text-white'
                          : active
                            ? 'text-primary opacity-100'
                            : 'text-muted opacity-80'
                      }`}
                    >
                      {item.label}
                    </Link>
                    {index < mainNav.length - 1 && (
                      <span
                        className={onHero ? 'text-white/35' : 'text-muted/50'}
                        aria-hidden
                      >
                        /
                      </span>
                    )}
                  </span>
                );
              })}
            </nav>

            <div className="flex items-center gap-2">
              <PillButton
                to="/contact"
                className={`hidden md:inline-flex ${onHero ? 'pill-btn-dark !bg-white !text-primary border-white' : ''}`}
                dark={!onHero}
              >
                Start a project
              </PillButton>
              <button
                type="button"
                className={`flex h-10 w-10 items-center justify-center rounded-full border lg:hidden ${
                  onHero
                    ? 'border-white/25 bg-white/10 text-white'
                    : 'border-border bg-background'
                }`}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                aria-label="Open menu"
                onClick={() => setMenuOpen(true)}
              >
                <Menu className="h-5 w-5" aria-hidden />
              </button>
            </div>
          </WideContainer>
        </header>
        <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      </>
    );
  }

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
          solid
            ? 'border-b border-border bg-surface/95 backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
        <WideContainer as="div" className="flex h-16 items-center justify-between md:h-20">
          <Link
            to="/"
            className="text-sm font-bold tracking-[0.2em] text-primary md:text-base"
          >
            DIGITAL BYTE
          </Link>
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {mainNav.map((item) => {
              const active =
                location.pathname === item.href ||
                (item.href !== '/' && location.pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={`text-sm font-medium transition-colors ${
                    active ? 'text-primary' : 'text-muted hover:text-primary'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-3">
            <PillButton to="/contact" className="hidden lg:inline-flex">
              Let&apos;s talk
            </PillButton>
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-sm border border-border lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
            >
              <Menu className="h-5 w-5" aria-hidden />
            </button>
          </div>
        </WideContainer>
      </header>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
