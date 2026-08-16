import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { HiOutlineMenu, HiOutlineX, HiOutlinePhone } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { Logo } from "./Logo";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/divisions", label: "Division" },
  { to: "/gus", label: "Underground" },
  { to: "/fleet", label: "Fleet" },
  { to: "/projects", label: "Project" },
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
      <div className="container-x flex items-center justify-between h-24 lg:h-28">
        <Link to="/" className="flex items-center">
          <Logo
            src={isUndergroundPage ? "/images/underground-logo.png" : undefined}
            alt={
              isUndergroundPage
                ? "Geofields Underground Support"
                : "Geofields Tanzania Limited — Drilling, Exploration and Mining Services"
            }
            className="w-[145px] md:w-[170px] xl:w-[190px] h-auto transition-all"
          />
        </Link>

        <nav className="hidden xl:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-semibold tracking-wide transition-colors ${
                scrolled
                  ? "text-foreground/80 hover:text-primary"
                  : "text-white/90 hover:text-white"
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

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+255766775255"
            className={`flex items-center gap-2 text-sm font-semibold ${
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
