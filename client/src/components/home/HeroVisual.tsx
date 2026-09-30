export function HeroVisual() {
  return (
    <div
      className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-border bg-primary md:aspect-square"
      aria-hidden
    >
      <div className="absolute inset-0 grid-bg-dark opacity-30 animate-grid-drift" />
      <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-white/5" />

      <div className="absolute left-[12%] top-[18%] w-[42%] rounded-sm border border-white/15 bg-white/5 p-4 backdrop-blur-sm transition-transform duration-700 hover:translate-y-[-2px]">
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-accent/80" />
          <span className="h-2 w-2 rounded-full bg-white/30" />
          <span className="h-2 w-2 rounded-full bg-white/30" />
        </div>
        <div className="mt-3 space-y-2">
          <div className="h-1.5 w-full rounded bg-white/20" />
          <div className="h-1.5 w-4/5 rounded bg-white/15" />
          <div className="h-1.5 w-3/5 rounded bg-accent/40" />
        </div>
      </div>

      <div className="absolute right-[10%] top-[28%] w-[38%] rounded-sm border border-accent/25 bg-accent/10 p-3">
        <p className="font-mono text-[10px] text-accent/90">status: shipped</p>
        <p className="mt-1 font-mono text-[10px] text-white/50">build v0.12.4</p>
      </div>

      <div className="absolute bottom-[22%] left-[20%] right-[15%] rounded-sm border border-white/10 bg-secondary/80 p-4">
        <div className="grid grid-cols-4 gap-2">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="h-8 rounded-sm bg-white/5"
              style={{ opacity: 0.4 + (i % 3) * 0.2 }}
            />
          ))}
        </div>
      </div>

      {[
        { top: '15%', left: '55%' },
        { top: '62%', left: '8%' },
        { top: '72%', left: '78%' },
      ].map((pos, i) => (
        <span
          key={i}
          className="absolute h-1.5 w-1.5 rounded-full bg-accent animate-pulse-dot"
          style={{ top: pos.top, left: pos.left, animationDelay: `${i * 0.4}s` }}
        />
      ))}
    </div>
  );
}
