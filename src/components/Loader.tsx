export function Loader() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-bg/95 backdrop-blur-2xl">
      <div className="flex flex-col items-center gap-5">
        <div className="relative h-20 w-20">
          <div className="absolute inset-0 rounded-full border border-cyan/20" />
          <div className="absolute inset-2 rounded-full border border-neon/30 animate-spin border-t-cyan" />
          <div className="absolute inset-5 rounded-full bg-gradient-to-br from-neon/50 to-cyan/30 blur-sm animate-pulseGlow" />
        </div>
        <p className="text-sm tracking-[0.3em] text-muted uppercase">
          Loading portfolio
        </p>
      </div>
    </div>
  );
}
