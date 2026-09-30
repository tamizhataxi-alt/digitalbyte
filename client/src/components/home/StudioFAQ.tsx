import { Link } from 'react-router-dom';
import { homeFaq } from '../../data/faq';
import { Accordion, type AccordionItem } from '../ui/Accordion';
import { Reveal } from '../ui/Reveal';
import { WideContainer } from '../ui/WideContainer';

export function StudioFAQ() {
  const items: AccordionItem[] = homeFaq.map((item) => ({
    id: item.id,
    meta: item.number,
    title: item.question,
    content: <p>{item.answer}</p>,
  }));

  return (
    <section className="py-20 md:py-32">
      <WideContainer>
        <Reveal>
          <p className="text-xs uppercase tracking-[0.2em] text-muted">FAQ</p>
          <h2 className="mt-4 font-display text-section font-medium text-primary">
            Before we
            <span className="text-muted"> get started</span>
          </h2>
        </Reveal>
        <Reveal delay={100} className="mt-14">
          <Accordion items={items} defaultOpen={items[0]?.id} />
        </Reveal>
        <Reveal delay={160} className="mt-10">
          <Link
            to="/contact"
            className="text-sm font-medium text-primary underline-offset-4 hover:underline"
          >
            Ask a question →
          </Link>
        </Reveal>
      </WideContainer>
    </section>
  );
}
