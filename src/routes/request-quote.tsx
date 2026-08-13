import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "./contact";

export const Route = createFileRoute("/request-quote")({
  head: () => ({
    meta: [
      { title: "Request a Quote | Geofields Tanzania Limited" },
      {
        name: "description",
        content:
          "Request a quote for exploration, drilling, mining and underground support services from Geofields Tanzania Limited.",
      },
    ],
    links: [{ rel: "canonical", href: "/request-quote" }],
  }),
  component: ContactPage,
});
