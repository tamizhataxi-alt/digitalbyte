import { PageLayout } from '../components/layout/PageLayout';
import { SEO } from '../components/ui/SEO';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';

export function NotFound() {
  return (
    <PageLayout>
      <SEO
        title="Page not found"
        description="The page you are looking for could not be found."
        path="/404"
      />
      <section className="flex min-h-[60vh] items-center py-24">
        <Container className="text-center">
          <p className="text-6xl font-semibold text-accent">404</p>
          <h1 className="mt-4 text-3xl font-semibold text-primary">Page not found</h1>
          <p className="mt-4 text-muted">
            The page you requested doesn&apos;t exist or may have moved.
          </p>
          <Button to="/" variant="primary" className="mt-8">
            Back to home
          </Button>
        </Container>
      </section>
    </PageLayout>
  );
}
