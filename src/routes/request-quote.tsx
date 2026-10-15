import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "./contact";
import { breadcrumbSchema, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/request-quote")({
  head: () =>
    pageHead({
      title: "Request a Quote | Drilling & Mining Services — Geofields Tanzania",
      description:
        "Request a quotation from Geofields Tanzania Limited in Dar es Salaam for diamond drilling, RC drilling, exploration, underground support or mining supplies. Response within one business day.",
      path: "/request-quote",
      image: "/images/contact-hero.png",
      imageAlt: "Contact Geofields Tanzania Limited in Dar es Salaam",
      jsonLd: [
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Request a Quote", path: "/request-quote" },
        ]),
      ],
    }),
  component: ContactPage,
});
