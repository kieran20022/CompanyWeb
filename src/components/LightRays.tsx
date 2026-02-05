export default function LightRays({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {/* Center glow */}
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-32 w-32 rounded-full bg-blue-400/30 blur-3xl dark:bg-blue-500/20 animate-[lightPulse_4s_ease-in-out_infinite]" />

      {/* Ray 1 — wide, slow */}
      <div
        className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[2px] origin-top animate-[raySpin_18s_linear_infinite] opacity-20 dark:opacity-15"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(96,165,250,0.6) 30%, rgba(96,165,250,0.15) 70%, transparent)",
          filter: "blur(6px)",
          width: "80px",
        }}
      />

      {/* Ray 2 — narrow, offset */}
      <div
        className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[2px] origin-top animate-[raySpin_14s_linear_infinite_reverse] opacity-15 dark:opacity-10"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(129,140,248,0.5) 40%, rgba(129,140,248,0.1) 75%, transparent)",
          filter: "blur(4px)",
          width: "40px",
          rotate: "60deg",
        }}
      />

      {/* Ray 3 — mid */}
      <div
        className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[550px] w-[2px] origin-top animate-[raySpin_22s_linear_infinite] opacity-[0.12] dark:opacity-[0.08]"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(96,165,250,0.5) 25%, rgba(165,180,252,0.15) 65%, transparent)",
          filter: "blur(8px)",
          width: "100px",
          rotate: "140deg",
        }}
      />

      {/* Ray 4 — thin accent */}
      <div
        className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[2px] origin-top animate-[raySpin_16s_linear_infinite_reverse] opacity-[0.18] dark:opacity-[0.12]"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(147,197,253,0.6) 35%, rgba(147,197,253,0.1) 70%, transparent)",
          filter: "blur(3px)",
          width: "24px",
          rotate: "220deg",
        }}
      />

      {/* Ray 5 — wide soft */}
      <div
        className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[520px] w-[2px] origin-top animate-[raySpin_25s_linear_infinite] opacity-[0.1] dark:opacity-[0.07]"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(99,102,241,0.4) 30%, rgba(99,102,241,0.08) 70%, transparent)",
          filter: "blur(10px)",
          width: "120px",
          rotate: "300deg",
        }}
      />
    </div>
  );
}
