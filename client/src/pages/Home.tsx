import { PageLayout } from '../components/layout/PageLayout';
import { SEO } from '../components/ui/SEO';
import { StudioHero } from '../components/home/StudioHero';
import { StudioFeaturedWork } from '../components/home/StudioFeaturedWork';
import { StudioStrategy } from '../components/home/StudioStrategy';
import { StudioBuildMarquee } from '../components/home/StudioBuildMarquee';
import { StudioWorkEditorial } from '../components/home/StudioWorkEditorial';
import { StudioWhy } from '../components/home/StudioWhy';
import { StudioServices } from '../components/home/StudioServices';
import { StudioProcess } from '../components/home/StudioProcess';
import { StudioFAQ } from '../components/home/StudioFAQ';
import { StudioQuote } from '../components/home/StudioQuote';
import { StudioEngagement } from '../components/home/StudioEngagement';
import { StudioBlog } from '../components/home/StudioBlog';
import { StudioFinalCTA } from '../components/home/StudioFinalCTA';

export function Home() {
  return (
    <PageLayout headerTransparent studioHeader heroLight>
      <SEO
        title="Digital Byte | Software Development Company"
        description="Digital Byte builds modern web applications, mobile apps, cloud platforms and AI-powered digital products."
        path="/"
      />
      <StudioHero />
      <StudioFeaturedWork />
      <StudioStrategy />
      <StudioBuildMarquee />
      <StudioWorkEditorial />
      <StudioWhy />
      <StudioServices />
      <StudioProcess />
      <StudioFAQ />
      <StudioQuote />
      <StudioEngagement />
      <StudioBlog />
      <StudioFinalCTA />
    </PageLayout>
  );
}
