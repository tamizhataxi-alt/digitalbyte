import { Link } from 'react-router-dom';
import { blogPosts } from '../../data/blog';
import { Reveal } from '../ui/Reveal';
import { WideContainer } from '../ui/WideContainer';

export function StudioBlog() {
  return (
    <section className="border-t border-border py-20 md:py-32">
      <WideContainer>
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted">Journal</p>
            <h2 className="mt-4 font-display text-section font-medium text-primary">
              News and
              <span className="text-muted"> updates</span>
            </h2>
          </div>
          <Link to="/blog" className="text-sm text-muted hover:text-primary">See all →</Link>
        </Reveal>

        <ul className="mt-12 divide-y divide-border border-y border-border">
          {blogPosts.map((post, i) => (
            <li key={post.slug}>
              <Reveal delay={i * 60}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="group flex flex-col gap-2 py-8 transition-colors hover:bg-surface md:flex-row md:items-center md:justify-between md:px-4"
                >
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted">
                      {post.category}
                      {post.demo && ' · Draft / demo'}
                    </p>
                    <h3 className="mt-2 text-lg font-medium text-primary group-hover:underline decoration-primary/30 underline-offset-4">
                      {post.title}
                    </h3>
                  </div>
                  <time
                    dateTime={post.date}
                    className="text-sm text-muted md:shrink-0"
                  >
                    {new Date(post.date).toLocaleDateString('en-IN', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </time>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </WideContainer>
    </section>
  );
}
