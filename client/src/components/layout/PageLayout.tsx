import type { ReactNode } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

type PageLayoutProps = {
  children: ReactNode;
  headerTransparent?: boolean;
  studioHeader?: boolean;
  heroOverlay?: boolean;
  heroLight?: boolean;
};

export function PageLayout({
  children,
  headerTransparent = true,
  studioHeader = true,
  heroOverlay = false,
  heroLight = true,
}: PageLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header
        transparent={headerTransparent}
        studio={studioHeader}
        heroOverlay={heroOverlay}
        heroLight={heroLight}
      />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
