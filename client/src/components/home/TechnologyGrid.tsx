import { technologyCategories } from '../../data/technologies';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';

export function TechnologyGrid() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Stack"
              title="Technology that fits the product."
              description="Tools we commonly work with when they match product requirements. Final choices are always made per project."
            />
          </div>
          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {technologyCategories.map((cat) => (
                <div
                  key={cat.name}
                  className="rounded-md border border-border bg-surface p-6"
                >
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-muted">
                    {cat.name}
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-border px-3 py-1 text-xs font-medium text-primary"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
