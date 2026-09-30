import { capabilities } from '../../data/home';

export function CapabilityStrip() {
  return (
    <section
      className="border-y border-border bg-white py-6"
      aria-label="Capabilities"
    >
      <div className="overflow-hidden">
        <ul
          className="flex animate-none flex-wrap items-center justify-center gap-x-8 gap-y-3 px-5 md:gap-x-12"
        >
          {capabilities.map((item) => (
            <li
              key={item}
              className="text-xs font-semibold tracking-[0.2em] text-muted md:text-sm"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
