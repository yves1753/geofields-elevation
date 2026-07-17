import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { HiOutlineMenu, HiOutlineX, HiOutlinePhone } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { Logo } from "./Logo";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/divisions", label: "Divisions" },
  { to: "/gus", label: "Underground" },
  { to: "/fleet", label: "Fleet" },
  { to: "/projects", label: "Projects" },
  { to: "/safety", label: "Safety & HSE" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
          <Link to="/contact" className="btn-primary">
            Request Quote
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
                className="text-base font-semibold text-foreground py-2 border-b border-border/50"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="https://wa.me/255766775255"
              className="btn-primary justify-center mt-2"
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
