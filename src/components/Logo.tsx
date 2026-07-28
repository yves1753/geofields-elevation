import logo from "@/assets/geofields-logo.asset.json";

export function Logo({
  className = "w-[145px] md:w-[175px] xl:w-[205px] h-auto",
}: {
  className?: string;
}) {
  return (
    <img
      src={logo.url}
      alt="Geofields Tanzania Limited — Drilling, Exploration and Mining Services"
      className={className}
      width={480}
      height={200}
      decoding="async"
      fetchPriority="high"
    />
  );
}
