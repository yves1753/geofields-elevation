import { useState } from "react";
import fleetFallback from "@/assets/fleet.jpg";

export function FleetImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  const [failed, setFailed] = useState(false);
  return (
    <img
      src={failed ? fleetFallback : src}
      alt={failed ? `Industrial drilling equipment placeholder for ${alt}` : alt}
      className={className}
      loading="lazy"
      width={1200}
      height={800}
      onError={() => setFailed(true)}
    />
  );
}
