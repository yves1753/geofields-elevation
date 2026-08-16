import { useState } from "react";
type FleetImageProps = { src: string; alt: string; className?: string; priority?: boolean };

const decodedFleetImages = new Set<string>();

export function FleetImage({ src, alt, className = "", priority = false }: FleetImageProps) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(() => decodedFleetImages.has(src));

  if (failed)
    return (
      <div
        className={`flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-zinc-800 to-zinc-950 text-white/70 ${className}`}
        role="img"
        aria-label={`No image available for ${alt}`}
      >
        <svg viewBox="0 0 160 100" className="w-24 h-auto text-primary" aria-hidden="true">
          <path
            d="M22 83h116M39 80V50h51v30M90 80V30l23-20v70M48 50l18-26 24 26M103 22h24M113 10v12"
            fill="none"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="53" cy="82" r="8" fill="currentColor" />
          <circle cx="78" cy="82" r="8" fill="currentColor" />
        </svg>
        <span className="text-xs font-semibold uppercase tracking-[0.18em]">
          No Image Available
        </span>
      </div>
    );

  return (
    <img
      src={src}
      alt={alt}
      className={`${className} transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "low"}
      decoding="async"
      width={1200}
      height={800}
      onError={() => setFailed(true)}
      onLoad={() => {
        decodedFleetImages.add(src);
        setLoaded(true);
      }}
    />
  );
}
