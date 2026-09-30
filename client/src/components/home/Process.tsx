import { processSteps } from '../../data/home';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';

export function Process() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Process"
          title="A simpler path from idea to launch."
        />

        <ol className="mt-16 lg:hidden space-y-8 border-l border-border pl-8">
          {processSteps.map((step) => (
            <li key={step.number} className="relative">
              <span
                className="absolute -left-[2.35rem] flex h-8 w-8 items-center justify-center rounded-full border border-border bg-surface text-xs font-semibold"
              >
                {step.number}
              </span>
              <h3 className="text-lg font-semibold text-primary">{step.title}</h3>
              <p className="mt-2 text-sm text-muted">{step.description}</p>
            </li>
          ))}
        </ol>

        <ol className="mt-16 hidden lg:grid lg:grid-cols-5 lg:gap-4">
          {processSteps.map((step, index) => (
            <li key={step.number} className="relative">
              {index < processSteps.length - 1 && (
                <span
                  className="absolute left-[calc(50%+1.5rem)] top-5 h-px w-[calc(100%-3rem)] bg-border"
                  aria-hidden
                />
              )}
              <div className="rounded-md border border-border bg-surface p-6">
                <span className="text-xs font-semibold text-accent">{step.number}</span>
                <h3 className="mt-4 text-lg font-semibold text-primary">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
