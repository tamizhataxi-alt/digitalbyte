import type { ReactNode } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

type PageLayoutProps = {
  children: ReactNode;
  headerTransparent?: boolean;
  studioHeader?: boolean;
  heroOverlay?: boolean;
};

export function PageLayout({
  children,
  headerTransparent = false,
  studioHeader = false,
  heroOverlay = false,
}: PageLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header
        transparent={headerTransparent}
        studio={studioHeader}
        heroOverlay={heroOverlay}
      />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
