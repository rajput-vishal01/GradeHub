export default function PurpleGlassBg() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-neutral-950/60" />
      <div className="absolute inset-0 [background:radial-gradient(900px_900px_at_20%_-10%,rgba(168,85,247,0.18),transparent_60%),radial-gradient(700px_700px_at_85%_0%,rgba(139,92,246,0.14),transparent_55%),radial-gradient(800px_800px_at_50%_100%,rgba(147,51,234,0.12),transparent_60%)]" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "40px 40px, 40px 40px",
          maskImage:
            "radial-gradient(ellipse at center, black 35%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 35%, transparent 70%)",
        }}
      />
      <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px]" />
    </div>
  );
}
