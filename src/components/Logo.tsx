import { useRouterState } from "@tanstack/react-router";
import logo from "@/assets/geofields-logo.asset.json";
import gusLogo from "@/assets/gus-logo.png.asset.json";

export function Logo({
  className = "w-[145px] md:w-[175px] xl:w-[205px] h-auto",
}: {
  className?: string;
}) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isGus = pathname.replace(/\/+$/, "") === "/gus";

  return (
    <img
      src={isGus ? gusLogo.url : logo.url}
      alt={
        isGus
          ? "Geofields Underground Support (GUS)"
          : "Geofields Tanzania Limited — Drilling, Exploration and Mining Services"
      }
      className={className}
      width={480}
      height={200}
      decoding="async"
      fetchPriority="high"
    />
  );
}
