import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { HiOutlineArrowRight, HiOutlineCheck } from "react-icons/hi";
import { images } from "@/lib/image-assets";
import { OptimizedImage } from "@/components/OptimizedImage";
import { breadcrumbSchema, pageHead, serviceSchema } from "@/lib/seo";
import { SERVICES } from "@/lib/site";

export const Route = createFileRoute("/divisions")({
  head: () =>
    pageHead({
      title: "Drilling, Exploration & Mining Services | Geofields Tanzania",
      description:
        "Geofields Tanzania Limited divisions: diamond and RC drilling, geological exploration, production mining services, underground support and mining supplies across Tanzania.",
      path: "/divisions",
      jsonLd: [
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/divisions" },
        ]),
        ...SERVICES.filter((service) => service.path === "/divisions").map(serviceSchema),
      ],
    }),
  component: DivisionsPage,
});

const divisions = [
  {
    img: images.drilling,
    title: "Drilling Services",
    description:
      "Certified crews and a modern Tanzanian fleet deliver diamond core, reverse circulation, blast hole, grade control and water-well drilling for explorers and producers.",
    capabilities: ["Diamond Drilling", "Reverse Circulation (RC)"],
  },
  {
    img: images.heroMine,
    title: "Mining Services",
    description:
      "Geofields Tanzania Limited provides reliable mining support services designed to improve operational efficiency, resource development and safe project execution throughout the mining lifecycle.",
    capabilities: ["Production Drilling", "Grade Control Drilling"],
  },
  {
    img: images.exploration,
    title: "Geological & Exploration Services",
    description:
      "From first-pass mapping to resource definition, Geofields supports mineral exploration programmes with sampling, surveying and geological interpretation across Tanzania.",
    capabilities: [
      "Geological Mapping",
      "Mineral Exploration",
      "Sampling & Assays",
      "Surveying",
      "Resource Evaluation",
    ],
  },
];


function DivisionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Business Divisions"
        title="Three integrated capabilities. One trusted partner."
        subtitle="From surface exploration to underground development, our divisions work together to deliver full-service mining and industrial solutions across Africa."
        image={images.drilling}
        imageAlt="Geofields diamond drilling operations in Tanzania"
      />

      <section className="section-y bg-background">
        <div className="container-x space-y-24">
          {divisions.map((d, i) => (
            <Reveal key={d.title}>
              <div
                className={`grid lg:grid-cols-2 gap-14 items-center ${i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}
              >
                <div className="relative">
                  <OptimizedImage
                    asset={d.img}
                    alt={d.title}
                    className="w-full aspect-[4/3] object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>
                <div>
                  <div className="eyebrow">Division 0{i + 1}</div>
                  <h2 className="mt-4 text-3xl md:text-4xl leading-tight">{d.title}</h2>
                  {d.description && (
                    <p className="mt-5 text-muted-foreground leading-relaxed">{d.description}</p>
                  )}
                  <ul className="mt-8 space-y-3">
                    {d.capabilities.map((c) => (
                      <li key={c} className="flex items-start gap-3 text-foreground/85">
                        <HiOutlineCheck className="text-primary size-5 mt-0.5 shrink-0" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-10 flex gap-4">
                    <Link to="/request-quote" className="btn-primary">
                      Request Quote <HiOutlineArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
