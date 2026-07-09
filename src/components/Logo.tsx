import logo from "@/assets/geofields-logo.asset.json";

export function Logo({ className = "h-11 w-auto" }: { className?: string }) {
  return (
    <img
      src={logo.url}
      alt="Geofields Tanzania Limited — Drilling, Exploration and Mining Services"
      className={className}
      width={480}
      height={200}
    />
  );
}