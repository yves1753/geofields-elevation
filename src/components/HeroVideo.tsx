import { useEffect, useRef, useState } from "react";
import heroVideoMp4 from "@/assets/home-hero.mp4.asset.json";
import heroVideoWebm from "@/assets/home-hero.webm.asset.json";
import heroPoster from "@/assets/home-hero-poster.jpg.asset.json";
import { OptimizedImage } from "@/components/OptimizedImage";
import { images } from "@/lib/image-assets";

/**
 * Full-bleed hero video with poster-first paint.
 * - Poster paints immediately (preloaded in route head, fetchpriority=high).
 * - Video only loads on capable devices: wide viewport, no reduced-motion,
 *   no Save-Data, no slow connection. Otherwise the poster stays.
 * - `preload="metadata"` — never block the initial page load.
 */
export function HeroVideo() {
  const [playVideo, setPlayVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const wide = window.matchMedia("(min-width: 768px)").matches;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const conn = (navigator as any).connection;
    const slow =
      conn &&
      (conn.saveData ||
        (typeof conn.effectiveType === "string" && /(^|-)2g$/.test(conn.effectiveType)) ||
        conn.effectiveType === "3g");
    if (!reduced && wide && !slow) setPlayVideo(true);
  }, []);

  return (
    <div className="absolute inset-0">
      <OptimizedImage
        asset={images.homeHero}
        alt=""
        aria-hidden="true"
        priority
        sizes="100vw"
        className="absolute inset-0 size-full object-cover scale-105"
      />
      {playVideo && (
        <video
          ref={videoRef}
          poster={heroPoster.url}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 size-full object-cover scale-105"
        >
          <source src={heroVideoWebm.url} type="video/webm" />
          <source src={heroVideoMp4.url} type="video/mp4" />
        </video>
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/90" />
    </div>
  );
}
