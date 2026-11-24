import type { CSSProperties } from "react";
import logo from "@/assets/geofields-logo.asset.json";

export function Logo({
  className = "w-[200px] md:w-[220px] xl:w-[230px] h-auto",
  src = logo.url,
  alt = "Geofields Tanzania Limited — Drilling, Exploration and Mining Services",
  style,
}: {
  className?: string;
  src?: string;
  alt?: string;
  style?: CSSProperties;
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      width={474}
      height={126}
      decoding="async"
      fetchPriority="high"
    />
  );
}
