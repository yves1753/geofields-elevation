import { memo, useCallback, useEffect, useRef, useState } from "react";
import { HiOutlinePlay } from "react-icons/hi";
import { OptimizedImage } from "@/components/OptimizedImage";
import { images } from "@/lib/image-assets";

const VIDEO_MP4 = "/videos/home-hero.mp4";
const VIDEO_WEBM = "/videos/home-hero.webm";
const VIDEO_POSTER = "/optimized/home-hero-poster-1920.webp";

const devLog = (message: string, detail?: unknown) => {
  if (import.meta.env.DEV) console.debug(`[HeroVideo] ${message}`, detail ?? "");
};

/**
 * Full-bleed hero video with a poster-first paint.
 *
 * The video is omitted only for people who explicitly request reduced motion.
 * A failed autoplay attempt leaves the poster visible and exposes an accessible
 * manual play control.
 */
function HeroVideoComponent() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [renderVideo, setRenderVideo] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);

  const startPlayback = useCallback(async () => {
    const video = videoRef.current;
    if (!video) return;

    // Setting both properties imperatively before play() improves iOS/Safari
    // reliability in addition to the declarative muted attribute.
    video.muted = true;
    video.defaultMuted = true;

    try {
      await video.play();
      setAutoplayBlocked(false);
    } catch (error) {
      setAutoplayBlocked(true);
      devLog("Playback was blocked; showing the manual control.", error);
    }
  }, []);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      devLog("Reduced motion is enabled; retaining the poster.");
      return;
    }

    // Paint the responsive poster and headline first, then attach video sources once
    // the browser has initial rendering capacity available.
    const loadVideo = () => setRenderVideo(true);
    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(loadVideo, { timeout: 1200 });
      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = globalThis.setTimeout(loadVideo, 250);
    return () => globalThis.clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (renderVideo) void startPlayback();
  }, [renderVideo, startPlayback]);

  useEffect(() => {
    const video = videoRef.current;
    if (!renderVideo || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) void startPlayback();
        else video.pause();
      },
      { rootMargin: "200px 0px", threshold: 0.05 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [renderVideo, startPlayback]);

  return (
    <div className="absolute inset-0">
      <OptimizedImage
        asset={images.homeHero}
        alt=""
        aria-hidden="true"
        priority
        sizes="100vw"
        className="absolute inset-0 size-full scale-105 object-cover"
      />

      {renderVideo && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={VIDEO_POSTER}
          aria-hidden="true"
          tabIndex={-1}
          onLoadedMetadata={(event) => {
            event.currentTarget.muted = true;
            event.currentTarget.defaultMuted = true;
            devLog("Metadata loaded.", {
              width: event.currentTarget.videoWidth,
              height: event.currentTarget.videoHeight,
              duration: event.currentTarget.duration,
            });
          }}
          onCanPlay={() => void startPlayback()}
          onPlaying={() => {
            setVideoPlaying(true);
            setAutoplayBlocked(false);
          }}
          onError={(event) => {
            setVideoPlaying(false);
            setAutoplayBlocked(true);
            devLog("Media failed to load.", event.currentTarget.error);
          }}
          className={`absolute inset-0 size-full scale-105 object-cover transition-opacity duration-500 ${
            videoPlaying ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src={VIDEO_MP4} type="video/mp4" />
          <source src={VIDEO_WEBM} type="video/webm" />
        </video>
      )}

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/90" />

      {autoplayBlocked && (
        <button
          type="button"
          onClick={() => void startPlayback()}
          aria-label="Play background video"
          className="absolute bottom-5 right-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/55 px-4 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur-sm transition hover:border-primary hover:text-primary-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary md:bottom-8 md:right-8"
        >
          <HiOutlinePlay aria-hidden="true" />
          Play background video
        </button>
      )}
    </div>
  );
}

export const HeroVideo = memo(HeroVideoComponent);
