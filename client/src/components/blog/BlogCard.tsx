import { Link } from 'react-router-dom';
import type { BlogPost } from '../../types';
import { blogMedia } from '../../data/siteMedia';
import { Badge } from '../ui/Badge';

type BlogCardProps = {
  post: BlogPost;
};

export function BlogCard({ post }: BlogCardProps) {
  const media = blogMedia[post.slug];

  return (
    <article className="group flex flex-col overflow-hidden rounded-md border border-border bg-surface transition-all hover:-translate-y-1 hover:shadow-lg">
      {media && (
        <div className="aspect-[16/10] overflow-hidden border-b border-border">
          <img
            src={media.src}
            alt={media.alt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-8">
        <div className="flex flex-wrap items-center gap-2">
          <Badge>{post.category}</Badge>
          {post.demo && <Badge variant="accent">Draft / demo</Badge>}
        </div>
        <h3 className="mt-6 text-xl font-semibold text-primary group-hover:underline decoration-accent underline-offset-4">
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>
        <div className="mt-6 flex items-center gap-3 text-xs text-muted">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('en-IN', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          <span aria-hidden>·</span>
          <span>{post.readingTime}</span>
        </div>
      </div>
    </article>
  );
}
