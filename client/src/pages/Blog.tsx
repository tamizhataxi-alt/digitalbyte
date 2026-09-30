import { blogPosts } from '../data/blog';
import { PageLayout } from '../components/layout/PageLayout';
import { SEO } from '../components/ui/SEO';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { BlogGrid } from '../components/blog/BlogGrid';

export function Blog() {
  return (
    <PageLayout>
      <SEO
        title="Blog"
        description="Notes on architecture, product engineering and practical AI for digital products."
        path="/blog"
      />
      <section className="pt-28 pb-20 md:pt-36 md:pb-28">
        <Container>
          <SectionHeading
            eyebrow="Blog"
            title="Notes on building better digital products."
            description="Sample articles for the Digital Byte website. Content is illustrative and marked as draft/demo where applicable."
          />
          <BlogGrid posts={blogPosts} />
        </Container>
      </section>
    </PageLayout>
  );
}
