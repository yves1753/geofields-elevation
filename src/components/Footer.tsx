import { Link } from "@tanstack/react-router";
import { FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-[oklch(0.14_0.005_60)] text-white/80 pt-24 pb-10">
      <div className="container-x grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <div className="bg-white p-3 inline-block rounded-sm">
            <Logo className="w-[190px] md:w-[215px] h-auto" />
          </div>
          <p className="mt-6 text-sm leading-relaxed max-w-sm text-white/60">
            Geofields Tanzania Limited is an integrated drilling, exploration and mining services
            company delivering engineering excellence across Tanzania and Africa.
          </p>
          <div className="flex gap-3 mt-6">
            <a
              href="https://wa.me/255766775255"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="size-10 grid place-items-center border border-white/15 hover:bg-primary hover:border-primary transition"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.linkedin.com/company/geofields-tanzania-limited/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Geofields Tanzania Limited on LinkedIn"
              className="size-10 grid place-items-center border border-white/15 hover:bg-primary hover:border-primary transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div>
          <h5 className="text-white text-sm tracking-[0.2em] uppercase mb-5">Company</h5>
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
              <Link to="/request-quote" className="hover:text-primary">
                Request a Quote
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="text-white text-sm tracking-[0.2em] uppercase mb-5">Divisions</h5>
          <ul className="space-y-3 text-sm">
            <li>Drilling Services</li>
            <li>Geological & Exploration</li>
            <li>Mining Services</li>
            <li>Underground Support (GUS)</li>
            <li>Mining Services</li>
            <li>Underground Support (GUS)</li>
          </ul>
        </div>

        <div>
          <h5 className="text-white text-sm tracking-[0.2em] uppercase mb-5">Get In Touch</h5>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3">
              <HiOutlineLocationMarker className="size-5 text-primary shrink-0 mt-0.5" /> P.O Box
              76387, Mwai Kibaki Road, Mbezi Beach, Dar es Salaam, Tanzania
            </li>
            <li className="flex gap-3">
              <HiOutlinePhone className="size-5 text-primary shrink-0" />{" "}
              <a href="tel:+255766775255">+255 766 775 255</a>
            </li>
            <li className="flex gap-3">
              <HiOutlinePhone className="size-5 text-primary shrink-0" />{" "}
              <a href="tel:+255755284141">+255 755 284 141</a>
            </li>
            <li className="flex gap-3">
              <HiOutlineMail className="size-5 text-primary shrink-0" />{" "}
              <a href="mailto:info@geofields.co.tz">info@geofields.co.tz</a>
            </li>
            <li className="flex gap-3">
              <HiOutlineMail className="size-5 text-primary shrink-0" />{" "}
              <a href="mailto:sales@geofields.co.tz">sales@geofields.co.tz</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-x mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
        <p>© {new Date().getFullYear()} Geofields Tanzania Limited. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-primary">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-primary">
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
}
