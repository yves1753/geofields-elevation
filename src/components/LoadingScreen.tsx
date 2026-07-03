import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "./Logo";

// Module-level flag so client-side route changes never re-trigger the loader
// within the same page session.
let hasPlayed = false;

export function LoadingScreen() {
  const [mounted, setMounted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Skip entirely on subsequent mounts or if the user has already seen it.
    if (hasPlayed) {
      setDone(true);
      return;
    }
    if (typeof window !== "undefined" && sessionStorage.getItem("gf_loaded") === "1") {
      hasPlayed = true;
      setDone(true);
      return;
    }
    // Respect reduced motion — dismiss immediately.
    if (
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    ) {
      hasPlayed = true;
      sessionStorage.setItem("gf_loaded", "1");
      setDone(true);
      return;
    }

    setMounted(true);
    let raf: number;
    const start = performance.now();
    const duration = 1200;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setProgress(Math.round(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else {
        hasPlayed = true;
        try {
          sessionStorage.setItem("gf_loaded", "1");
        } catch {
          /* ignore */
        }
        setTimeout(() => setDone(true), 300);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] bg-[oklch(0.1_0.005_60)] flex flex-col items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-5 rounded-sm"
          >
            <Logo className="h-12 w-auto" />
          </motion.div>

          <div className="w-64 mt-10 h-[2px] bg-white/10 overflow-hidden">
            <motion.div
              className="h-full bg-primary"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear", duration: 0.05 }}
            />
          </div>
          <div className="mt-4 text-xs tracking-[0.4em] text-white/60 font-mono">
            {progress.toString().padStart(3, "0")}%
          </div>
          <div className="mt-8 text-[10px] tracking-[0.5em] text-white/30 uppercase">
            Engineering the Future of Mining
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
