import { Link } from "@tanstack/react-router";
import { FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import { Logo } from "./Logo";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-[oklch(0.14_0.005_60)] text-white/80 pt-24 pb-10">
      <div className="container-x grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <div className="bg-white p-3 inline-block rounded-sm">
            <Logo className="w-[190px] md:w-[215px] h-auto" />
          </div>
          <p className="mt-6 text-sm leading-relaxed max-w-sm text-white/60">
            {SITE.name} is an integrated drilling, exploration and mining services company
            delivering engineering excellence across Tanzania and Africa.
          </p>
          <div className="flex gap-3 mt-6">
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Geofields Tanzania Limited"
              className="size-10 grid place-items-center border border-white/15 hover:bg-primary hover:border-primary transition"
            >
              <FaWhatsapp />
            </a>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Geofields Tanzania Limited on LinkedIn"
              className="size-10 grid place-items-center border border-white/15 hover:bg-primary hover:border-primary transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        <nav aria-label="Company">
          <p className="text-white text-sm tracking-[0.2em] uppercase mb-5 font-display font-extrabold">
            Company
          </p>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/about" className="hover:text-primary">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/divisions" className="hover:text-primary">
                Business Divisions
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-primary">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/safety" className="hover:text-primary">
                Safety & HSE
              </Link>
            </li>
            <li>
              <Link to="/community" className="hover:text-primary">
                Community
              </Link>
            </li>
            <li>
              <Link to="/request-quote" className="hover:text-primary">
                Request a Quote
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Divisions">
          <p className="text-white text-sm tracking-[0.2em] uppercase mb-5 font-display font-extrabold">
            Divisions
          </p>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/divisions" className="hover:text-primary">
                Drilling Services
              </Link>
            </li>
            <li>
              <Link to="/divisions" className="hover:text-primary">
                Geological & Exploration
              </Link>
            </li>
            <li>
              <Link to="/divisions" className="hover:text-primary">
                Mining Services
              </Link>
            </li>
            <li>
              <Link to="/gus" className="hover:text-primary">
                Underground Support (GUS)
              </Link>
            </li>
            <li>
              <Link to="/fleet" className="hover:text-primary">
                Drilling Fleet
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <p className="text-white text-sm tracking-[0.2em] uppercase mb-5 font-display font-extrabold">
            Get In Touch
          </p>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3">
              <HiOutlineLocationMarker className="size-5 text-primary shrink-0 mt-0.5" />
              <address className="not-italic">
                {SITE.address.poBox}, {SITE.address.street}, {SITE.address.locality},{" "}
                {SITE.address.country}
              </address>
            </li>
            <li className="flex gap-3">
              <HiOutlinePhone className="size-5 text-primary shrink-0" />{" "}
              <a href={`tel:${SITE.phone.primaryTel}`}>{SITE.phone.primary}</a>
            </li>
            <li className="flex gap-3">
              <HiOutlinePhone className="size-5 text-primary shrink-0" />{" "}
              <a href={`tel:${SITE.phone.secondaryTel}`}>{SITE.phone.secondary}</a>
            </li>
            <li className="flex gap-3">
              <HiOutlineMail className="size-5 text-primary shrink-0" />{" "}
              <a href={`mailto:${SITE.email.info}`}>{SITE.email.info}</a>
            </li>
            <li className="flex gap-3">
              <HiOutlineMail className="size-5 text-primary shrink-0" />{" "}
              <a href={`mailto:${SITE.email.sales}`}>{SITE.email.sales}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-x mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
        <p>
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>
        <p>Dar es Salaam, Tanzania</p>
      </div>
    </footer>
  );
}
