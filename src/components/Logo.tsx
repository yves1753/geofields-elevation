import logo from "@/assets/geofields-logo.png";

export function Logo({ className = "h-11 w-auto" }: { className?: string }) {
  return (
    <img
      src={logo}
      alt="Geofields Tanzania Limited — Drilling, Exploration and Mining Services"
      className={className}
      width={480}
      height={200}
    />
  );
}