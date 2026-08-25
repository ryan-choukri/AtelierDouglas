"use client";
/**
 * Fond texturé : nappes de lumière chaudes qui dérivent lentement
 * derrière tout le site, dans la gamme espresso / walnut / terracotta.
 */
export function Backdrop() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-ivory"
      aria-hidden
    >
      <div className="aurora aurora-a" />
      <div className="aurora aurora-b" />
      <div className="aurora aurora-c" />
      <div className="aurora aurora-d" />
      <div className="absolute inset-0 bg-[radial-gradient(130%_100%_at_50%_0%,transparent_45%,oklch(0.10_0.012_45/0.6)_100%)]" />
    </div>
  );
}
