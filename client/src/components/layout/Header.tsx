import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Menu, Search } from 'lucide-react';
import { mainNav } from '../../data/navigation';
import { PillButton } from '../ui/PillButton';
import { BrandLogo } from '../ui/BrandLogo';
import { WideContainer } from '../ui/WideContainer';
import { MobileMenu } from './MobileMenu';
import { useStickyHeader } from '../../hooks/useStickyHeader';

export type HeaderProps = {
  transparent?: boolean;
  studio?: boolean;
  heroOverlay?: boolean;
  heroLight?: boolean;
};

const marketingNav = [
  { label: 'Home', href: '/' },
  ...mainNav,
];

export function Header({
  transparent = false,
  studio = false,
  heroOverlay = false,
  heroLight = false,
}: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const scrolled = useStickyHeader(48);
  const location = useLocation();

  const solid = scrolled || !transparent;
  const onHero = heroOverlay && transparent && !scrolled;
  const marketingHeader = heroLight && studio;
  const marketingScrolled = marketingHeader && scrolled;

  const isActive = (href: string) =>
    href === '/'
      ? location.pathname === '/'
      : location.pathname === href || location.pathname.startsWith(`${href}/`);

  if (studio) {
    const navItems = marketingHeader ? marketingNav : mainNav;

    return (
      <>
        <header className="fixed inset-x-0 top-0 z-50 px-3 pt-2.5 md:px-6 md:pt-3.5">
          <WideContainer
            as="div"
            className={`transition-all duration-500 ${
              marketingHeader
                ? `rounded-[1.5rem] border px-3 py-0.5 backdrop-blur-xl transition-[background-color,box-shadow,border-color] duration-500 md:rounded-full md:px-5 md:py-1 ${
                    marketingScrolled
                      ? 'border-white/90 bg-white/[0.97] shadow-[0_14px_44px_-12px_rgba(15,23,42,0.22)] ring-1 ring-black/[0.06] backdrop-blur-2xl'
                      : 'border-white/55 bg-white/[0.72] shadow-[0_10px_36px_-14px_rgba(15,23,42,0.16)] backdrop-blur-xl'
                  }`
                : `flex h-12 items-center justify-between rounded-full border px-3.5 md:h-[4.25rem] md:px-9 ${
                    solid
                      ? 'border-border bg-surface/90 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.12)] backdrop-blur-xl'
                      : onHero
                        ? 'border-white/15 bg-black/25 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.4)] backdrop-blur-xl'
                        : 'border-transparent bg-surface/50 backdrop-blur-md'
                  }`
            }`}
          >
            {marketingHeader ? (
              <div className="grid w-full grid-cols-[auto_1fr_auto] items-center gap-2 md:grid-cols-[1fr_auto_1fr] md:gap-4">
                <div className="justify-self-start">
                  <BrandLogo />
                </div>

                <nav
                  className="hidden items-center justify-center gap-0.5 md:flex"
                  aria-label="Primary"
                >
                  {navItems.map((item) => {
                    const active = isActive(item.href);
                    return (
                      <Link
                        key={item.href}
                        to={item.href}
                        aria-current={active ? 'page' : undefined}
                        className={`rounded-full px-3 py-1.5 text-[0.8125rem] font-medium transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] md:px-3.5 md:py-1.5 md:text-sm ${
                          active
                            ? 'bg-[#ebe6ff] text-[#3d3580] shadow-[inset_0_0_0_1px_rgba(109,92,255,0.1)]'
                            : 'text-[#4f4a6a] hover:bg-white/60 hover:text-[#2f2a55]'
                        }`}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </nav>

                <div className="flex items-center justify-end gap-2 md:gap-3">
                  <div className="relative hidden sm:block">
                    <button
                      type="button"
                      onClick={() => setSearchOpen((v) => !v)}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-[#b8e8f0] bg-white/50 text-[#4a3fc0] transition-all duration-300 hover:border-[#8fd4e3] hover:bg-white hover:text-[#3d3580] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6d5cff]"
                      aria-label="Search"
                      aria-expanded={searchOpen}
                    >
                      <Search className="h-4 w-4" aria-hidden />
                    </button>
                    {searchOpen && (
                      <form
                        action="/blog"
                        method="get"
                        className="absolute right-0 top-full z-50 mt-2 w-56 overflow-hidden rounded-2xl border border-[#e8e4ff] bg-white p-2 shadow-xl"
                        onSubmit={() => setSearchOpen(false)}
                      >
                        <input
                          type="search"
                          name="q"
                          placeholder="Search…"
                          className="w-full rounded-xl border border-[#ece9ff] px-3 py-2 text-sm text-[#2a2650] outline-none focus:border-[#6d5cff]"
                          autoFocus
                        />
                      </form>
                    )}
                  </div>

                  <Link
                    to="/contact"
                    className="group hidden items-center gap-1.5 rounded-full bg-gradient-to-r from-[#5c4fd6] to-[#4a3fc0] py-1.5 pl-5 pr-2 text-[0.8125rem] font-semibold text-white shadow-[0_10px_28px_-12px_rgba(74,63,192,0.45)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:shadow-[0_14px_32px_-10px_rgba(74,63,192,0.55)] active:translate-y-0 sm:inline-flex md:text-sm"
                  >
                    Contact Us
                    <span
                      className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:bg-white/25"
                      aria-hidden
                    >
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </Link>

                  <button
                    type="button"
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d4cbff] bg-white/80 text-[#4a3fc0] md:hidden"
                    aria-expanded={menuOpen}
                    aria-controls="mobile-menu"
                    aria-label="Open menu"
                    onClick={() => setMenuOpen(true)}
                  >
                    <Menu className="h-4 w-4" aria-hidden />
                  </button>
                </div>
              </div>
            ) : (
              <>
                <BrandLogo />

                <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
                  {navItems.map((item, index) => {
                    const active = isActive(item.href);
                    return (
                      <span key={item.href} className="flex items-center">
                        <Link
                          to={item.href}
                          aria-current={active ? 'page' : undefined}
                          className={`px-3 py-2 text-[0.9375rem] transition-colors md:text-base ${
                            onHero
                              ? active
                                ? 'text-white'
                                : 'text-white/80 hover:text-white lowercase'
                              : active
                                ? 'font-medium text-primary lowercase'
                                : 'text-primary/80 hover:text-primary lowercase'
                          }`}
                        >
                          {item.label}
                        </Link>
                        {index < navItems.length - 1 && (
                          <span className={onHero ? 'text-white/35' : 'text-primary/30'} aria-hidden>
                            /
                          </span>
                        )}
                      </span>
                    );
                  })}
                </nav>

                <div className="flex items-center gap-1.5 md:gap-2">
                  <PillButton
                    to="/contact"
                    className={`inline-flex !min-h-8 !px-3 !py-1 !text-[0.6rem] !tracking-[0.12em] md:!min-h-[44px] md:!px-6 md:!py-3 md:!text-xs md:!tracking-[0.18em] ${
                      onHero ? 'pill-btn-dark !bg-white !text-primary border-white' : ''
                    }`}
                    dark={!onHero}
                  >
                    Start a project
                  </PillButton>
                  <button
                    type="button"
                    className={`flex h-8 w-8 items-center justify-center rounded-full border lg:hidden ${
                      onHero
                        ? 'border-white/25 bg-white/10 text-white'
                        : 'border-border bg-background'
                    }`}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-menu"
                    aria-label="Open menu"
                    onClick={() => setMenuOpen(true)}
                  >
                    <Menu className="h-4 w-4" aria-hidden />
                  </button>
                </div>
              </>
            )}
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
              const active = isActive(item.href);
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
