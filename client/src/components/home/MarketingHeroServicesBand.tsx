const services = [
  {
    number: '01',
    title: 'BRAND GROWTH',
    description: 'Strategic brand positioning for long-term success.',
  },
  {
    number: '02',
    title: 'SOCIAL MEDIA',
    description: 'Engage your audience across all platforms.',
  },
  {
    number: '03',
    title: 'PERFORMANCE ADS',
    description: 'Data-driven campaigns that deliver real results.',
  },
  {
    number: '04',
    title: 'ANALYTICS',
    description: 'Track, analyze and optimize for growth.',
  },
];

export function MarketingHeroServicesBand() {
  return (
    <section
      className="relative w-full border-b border-slate-200/80 bg-white"
      aria-label="Marketing services overview"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-teal-400/50 via-violet-400/40 to-teal-400/50"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div
          className="absolute -left-[8%] top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-teal-200/25 blur-3xl"
        />
        <div
          className="absolute left-[18%] top-[20%] h-32 w-32 rounded-full bg-cyan-100/40 blur-2xl"
        />
        <div
          className="absolute right-[12%] bottom-0 h-40 w-40 rounded-full bg-teal-100/50 blur-3xl"
        />
      </div>

      <ul className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((item, index) => (
          <li
            key={item.number}
            className={[
              'flex gap-4 border-slate-200/90 px-6 py-9 sm:px-7 sm:py-10 lg:px-8 lg:py-11',
              index < services.length - 1 ? 'border-b sm:border-b-0' : '',
              index % 2 === 0 && index < services.length - 1 ? 'sm:border-r' : '',
              index < 2 ? 'sm:border-b lg:border-b-0' : '',
              index < 3 ? 'lg:border-r' : '',
            ].join(' ')}
          >
            <span
              className="shrink-0 font-sans text-[2.75rem] font-light leading-none tracking-tight text-[#b8d4e3] sm:text-[3rem]"
              aria-hidden
            >
              {item.number}
            </span>
            <div className="min-w-0 pt-0.5 text-left">
              <h3 className="text-[0.8125rem] font-bold uppercase leading-snug tracking-[0.06em] text-[#1a3d5c] sm:text-sm">
                {item.title}
              </h3>
              <p className="mt-2 text-[0.8125rem] leading-relaxed text-slate-500 sm:text-sm">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
