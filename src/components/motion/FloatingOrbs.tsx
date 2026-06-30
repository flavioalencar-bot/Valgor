export function FloatingOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="orb orb-fox absolute -left-20 top-20 h-72 w-72 rounded-full bg-fox-500/15 blur-3xl" />
      <div className="orb orb-cyan absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
    </div>
  );
}
