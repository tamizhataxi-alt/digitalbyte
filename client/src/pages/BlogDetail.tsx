import { Link, useParams } from 'react-router-dom';
import { getBlogPostBySlug } from '../data/blog';
import { PageLayout } from '../components/layout/PageLayout';
import { SEO } from '../components/ui/SEO';
import { Container } from '../components/ui/Container';
import { Badge } from '../components/ui/Badge';
import { blogMedia } from '../data/siteMedia';
import { MediaImage } from '../components/ui/MediaImage';
import { NotFound } from './NotFound';

export function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) return <NotFound />;

  return (
    <PageLayout>
      <SEO
        title={post.title}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        type="article"
      />
      <article className="pt-28 pb-20 md:pt-36">
        <Container className="max-w-3xl">
          {blogMedia[post.slug] && (
            <MediaImage
              media={blogMedia[post.slug]}
              className="mb-10 aspect-[16/9] rounded-2xl"
              overlay="dark"
              priority
            />
          )}
          <Link to="/blog" className="text-sm text-muted hover:text-primary">
            ← Back to blog
          </Link>
          <div className="mt-8 flex flex-wrap gap-2">
            <Badge>{post.category}</Badge>
            {post.demo && <Badge variant="accent">Draft / demo article</Badge>}
          </div>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-primary md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-sm text-muted">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-IN', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            {' · '}
            {post.readingTime}
          </p>
          <div className="mt-12 space-y-6 text-base leading-relaxed text-muted">
            {post.content.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </Container>
      </article>
    </PageLayout>
  );
}
