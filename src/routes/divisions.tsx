import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { HiOutlineArrowRight, HiOutlineCheck } from "react-icons/hi";
import { images } from "@/lib/image-assets";
import { OptimizedImage } from "@/components/OptimizedImage";

export const Route = createFileRoute("/divisions")({
  head: () => ({
    meta: [
      { title: "Business Divisions — Geofields Tanzania Limited" },
      {
        name: "description",
        content:
          "Explore Geofields' five integrated service divisions: Drilling, Geological & Exploration, Mining Supplies, Mining Services and Underground Support (GUS).",
      },
    ],
    links: [{ rel: "canonical", href: "/divisions" }],
  }),
  component: DivisionsPage,
});

const divisions = [
  {
    img: images.drilling,
    title: "Drilling Services",
    capabilities: [
      "Diamond Drilling",
      "Reverse Circulation (RC)",
      "Blast Hole Drilling",
      "Water Drilling",
      "Core Drilling",
    ],
  },
  {
    img: images.exploration,
    title: "Geological & Exploration Services",
    capabilities: [
      "Geological Mapping",
      "Mineral Exploration",
      "Sampling & Assays",
      "Surveying",
      "Resource Evaluation",
    ],
  },
  {
    img: images.supplies,
    title: "Mining Supplies",
    capabilities: [
      "Mining Equipment",
      "PPE & Safety Gear",
      "Consumables",
      "Industrial Supplies",
      "Spare Parts",
    ],
  },
  {
    img: images.heroMine,
    title: "Mining Services",
    description:
      "Geofields Tanzania Limited provides reliable mining support services designed to improve operational efficiency, resource development and safe project execution throughout the mining lifecycle.",
    capabilities: [
      "Production Drilling",
      "Grade Control Drilling",
      "Blast Hole Drilling",
      "Reverse Circulation Drilling",
      "Diamond Core Drilling",
      "Exploration Drilling",
      "Drill and Blast Support",
      "Mine Dewatering Support",
      "Site Mobilization",
      "Equipment Rental",
      "Drilling Consumables Supply",
      "Technical Field Support",
    ],
  },
  {
    img: images.underground,
    title: "Geofields Underground Support (GUS)",
    featured: true,
    to: "/gus",
    capabilities: [
      "Ground Support & Rock Bolting",
      "Mine Development",
      "Underground Logistics",
      "Emergency Response",
    ],
  },
];

function DivisionsPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Business Divisions"
        title="Five integrated capabilities. One trusted partner."
        subtitle="From surface exploration to underground development, our divisions work together to deliver full-service mining and industrial solutions across Africa."
        image={images.drilling}
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
                  {d.featured && (
                    <span className="absolute top-4 right-4 bg-primary text-primary-foreground text-[10px] tracking-[0.25em] font-bold px-3 py-1.5">
                      NEW
                    </span>
                  )}
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
                    {d.to && (
                      <Link to={d.to} className="btn-primary">
                        Learn More <HiOutlineArrowRight />
                      </Link>
                    )}
                    <Link to="/contact" className="btn-outline">
                      Request Quote
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </Layout>
  );
}
