import { Link } from 'react-router-dom';
import { footerNav, footerServices } from '../../data/navigation';
import { CONTACT_EMAIL } from '../../lib/constants';
import { WideContainer } from '../ui/WideContainer';
import { BrandLogo } from '../ui/BrandLogo';

export type FooterProps = {
  showNewsletter?: boolean;
};

export function Footer({ showNewsletter = false }: FooterProps) {
  return (
    <footer className="border-t border-border bg-background">
      <WideContainer as="div" className="py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <BrandLogo size="footer" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              Software development for ambitious digital products.
            </p>
            {showNewsletter && (
              <p className="mt-6 text-xs text-muted">
                Newsletter signup is not connected in this MVP.
              </p>
            )}
          </div>

          <div className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted">
              Navigation
            </p>
            <ul className="mt-4 space-y-3">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm text-primary/80 transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted">
              Services
            </p>
            <ul className="mt-4 space-y-3">
              {footerServices.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm text-primary/80 transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted">
              Contact
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-4 inline-block text-sm text-primary/80 transition-colors hover:text-primary"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-8 text-xs text-muted">
          © 2026 Digital Byte. All rights reserved.
        </div>
      </WideContainer>
    </footer>
  );
}
