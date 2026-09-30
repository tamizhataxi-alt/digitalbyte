import type { BlogPost } from '../../types';
import { BlogCard } from './BlogCard';

type BlogGridProps = {
  posts: BlogPost[];
};

export function BlogGrid({ posts }: BlogGridProps) {
  return (
    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
