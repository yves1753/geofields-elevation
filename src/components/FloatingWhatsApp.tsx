import { FaWhatsapp } from "react-icons/fa";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/255766775255?text=Hello%20Geofields%2C%20I%27d%20like%20to%20request%20a%20quotation."
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 size-14 grid place-items-center rounded-full text-white shadow-elegant"
      style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
    >
      <FaWhatsapp className="size-7" />
      <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366]/40" />
    </a>
  );
}
