import { Button } from '../ui/Button';
import { Container } from '../ui/Container';

type CTASectionProps = {
  title?: string;
  description?: string;
  buttonLabel?: string;
  buttonTo?: string;
};

export function CTASection({
  title = 'Have a product idea?',
  description = "Tell us what you're trying to build. We'll help turn the idea into a practical technical direction.",
  buttonLabel = 'Start a Conversation',
  buttonTo = '/contact',
}: CTASectionProps) {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-lg bg-primary px-8 py-16 md:px-16 md:py-20">
          <div className="absolute inset-0 grid-bg-dark opacity-20" aria-hidden />
          <div className="relative max-w-2xl">
            <h2 className="text-section font-semibold text-white">{title}</h2>
            <p className="mt-6 text-base leading-relaxed text-white/70 md:text-lg">
              {description}
            </p>
            <Button to={buttonTo} variant="accent" className="mt-10">
              {buttonLabel}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
