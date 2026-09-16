import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { HiOutlineMenu, HiOutlineX, HiOutlinePhone } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { Logo } from "./Logo";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/divisions", label: "Service" },
  { to: "/gus", label: "Underground Support" },
  { to: "/fleet", label: "Drilling Services" },
  { to: "/projects", label: "Project JV" },
  { to: "/safety", label: "Safety" },
  { to: "/community", label: "Community" },
] as const;

const routeHeroImages: Record<string, string> = {
  "/": "home-hero-poster",
  "/about": "about-hero",
  "/divisions": "hero-mine",
  "/gus": "underground",
  "/fleet": "fleet",
  "/projects": "hero-mine",
  "/safety": "safety",
  "/community": "about-hero",
  "/request-quote": "contact-hero",
};
const prefetchedMedia = new Set<string>();

function prefetchRouteHero(path: string) {
  const assetName = routeHeroImages[path];
  if (!assetName) return;
  const requiredWidth = window.innerWidth * Math.min(window.devicePixelRatio || 1, 2);
  const width = requiredWidth <= 480 ? 480 : requiredWidth <= 768 ? 768 : 1280;
  const src = `/optimized/${assetName}-${width}.avif`;
  if (prefetchedMedia.has(src)) return;
  prefetchedMedia.add(src);
  const image = new Image();
  image.fetchPriority = "low";
  image.decoding = "async";
  image.src = src;
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const isUndergroundPage = pathname === "/gus" || pathname === "/gus/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between xl:grid xl:h-[5.5rem] xl:grid-cols-[190px_minmax(0,1fr)_auto] xl:gap-5">
        <Link to="/" className="flex shrink-0 items-center">
          <Logo
            src={isUndergroundPage ? "/images/underground-logo.png" : undefined}
            alt={
              isUndergroundPage
                ? "Geofields Underground Support"
                : "Geofields Tanzania Limited — Drilling, Exploration and Mining Services"
            }
            className="h-auto w-[145px] transition-all md:w-[170px] xl:w-[190px]"
          />
        </Link>

        <nav className="hidden min-w-0 items-center justify-center gap-3 xl:flex 2xl:gap-5">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`shrink-0 whitespace-nowrap text-[11px] font-semibold tracking-wide transition-[color,opacity,transform] duration-200 ease-out hover:-translate-y-px xl:text-xs ${
                scrolled
                  ? "text-foreground/80 hover:text-primary"
                  : "text-white/90 hover:text-primary"
              }`}
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: l.to === "/" }}
              onMouseEnter={() => prefetchRouteHero(l.to)}
              onFocus={() => prefetchRouteHero(l.to)}
              onPointerDown={() => prefetchRouteHero(l.to)}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex xl:border-l xl:border-border/70 xl:pl-5">
          <a
            href="tel:+255766775255"
            className={`flex shrink-0 items-center gap-2 whitespace-nowrap text-sm font-semibold transition-colors duration-200 ${
              scrolled ? "text-foreground" : "text-white"
            }`}
            aria-label="Call Geofields"
          >
            <HiOutlinePhone className="size-4" />
            +255 766 775 255
          </a>
          <Link
            to="/request-quote"
            className="btn-primary"
            onMouseEnter={() => prefetchRouteHero("/request-quote")}
            onFocus={() => prefetchRouteHero("/request-quote")}
            onPointerDown={() => prefetchRouteHero("/request-quote")}
          >
            Request a Quote
          </Link>
        </div>

        <button
          className={`xl:hidden p-2 ${scrolled ? "text-foreground" : "text-white"}`}
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <HiOutlineX className="size-7" /> : <HiOutlineMenu className="size-7" />}
        </button>
      </div>

      {open && (
        <div className="xl:hidden bg-background border-t border-border">
          <div className="container-x py-6 flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                onFocus={() => prefetchRouteHero(l.to)}
                onPointerDown={() => prefetchRouteHero(l.to)}
                className="text-base font-semibold text-foreground py-2 border-b border-border/50"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/request-quote"
              onClick={() => setOpen(false)}
              onFocus={() => prefetchRouteHero("/request-quote")}
              onPointerDown={() => prefetchRouteHero("/request-quote")}
              className="btn-primary justify-center mt-2"
            >
              Request a Quote
            </Link>
            <a
              href="https://wa.me/255766775255"
              className="btn-outline justify-center"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp /> WhatsApp Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
