import { PageLayout } from '../components/layout/PageLayout';
import { SEO } from '../components/ui/SEO';
import { StudioHero } from '../components/home/StudioHero';
import { StudioOpposingParallaxGallery } from '../components/home/StudioOpposingParallaxGallery';
import { StudioFeaturedWork } from '../components/home/StudioFeaturedWork';
import { StudioStrategy } from '../components/home/StudioStrategy';
import { StudioBuildMarquee } from '../components/home/StudioBuildMarquee';
import { StudioWorkEditorial } from '../components/home/StudioWorkEditorial';
import { StudioFAQ } from '../components/home/StudioFAQ';
import { StudioClientTestimonials } from '../components/home/StudioClientTestimonials';
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
      <StudioOpposingParallaxGallery />
      <StudioFeaturedWork />
      <StudioStrategy />
      <StudioBuildMarquee />
      <StudioWorkEditorial />
      <StudioFAQ />
      <StudioClientTestimonials />
      <StudioBlog />
      <StudioFinalCTA />
    </PageLayout>
  );
}
