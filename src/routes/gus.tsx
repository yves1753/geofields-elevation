import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { HiOutlineArrowRight, HiOutlineCheck } from "react-icons/hi";
import { images } from "@/lib/image-assets";
import { breadcrumbSchema, pageHead, serviceSchema } from "@/lib/seo";

export const Route = createFileRoute("/gus")({
  head: () =>
    pageHead({
      title: "Underground Support (GUS) | Geofields Tanzania Limited",
      description:
        "Geofields Underground Support (GUS) provides ground support, rock bolting, mine development, underground logistics and emergency response for mines in Tanzania and Africa.",
      path: "/gus",
      jsonLd: [
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Underground Support", path: "/gus" },
        ]),
        serviceSchema({
          name: "Geofields Underground Support (GUS)",
          description:
            "Ground support, rock bolting, mine development, underground logistics and emergency response for African underground mines.",
          path: "/gus",
        }),
      ],
    }),
  component: GusPage,
});

const services = [
  "Underground Mine Support",
  "Rock Bolting",
  "Mine Development",
  "Underground Equipment Supply",
  "Skilled Workforce Deployment",
];


const reasons = [
  "Manufacturing of underground ground support wire mesh.",
  "Supply of rock bolts, cable bolts, and associated accessories.",
  "Supply of ground support installation tools and equipment.",
  "Procurement and distribution of underground mining consumables.",
];

function GusPage() {
  return (
    <>
      <PageHero
        eyebrow="GEOFIELDS UNDERGROUND SUPPORT"
        title="Underground expertise, engineered for African mines."
        subtitle="Geofields Underground Support (GUS) is a specialized division of Geofields Tanzania Limited (GTL), dedicated to the manufacturing and supply of high-quality underground mining ground support products, equipment, and consumables."
        image={images.gusHero}
        imageAlt="Geofields Underground Support team manufacturing underground reinforcement wire mesh"
      >
        <div className="mt-10 flex flex-wrap gap-4">
          <Link to="/request-quote" className="btn-primary">
            Request Underground Support <HiOutlineArrowRight />
          </Link>
          <a href="tel:+255766775255" className="btn-ghost">
            Call GUS Desk
          </a>
        </div>
      </PageHero>

      <section className="section-y bg-background">
        <div className="container-x grid lg:grid-cols-[1.1fr_1fr] gap-16">
          <Reveal>
            <span className="eyebrow">
              <span className="h-[1px] w-10 bg-primary" /> About GUS
            </span>
            <h2 className="mt-5 text-4xl md:text-5xl leading-tight">
              Purpose-built for the demands of underground mining.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              GUS operates a local manufacturing facility producing underground reinforcement wire
              mesh and supplies a comprehensive range of ground support solutions designed to
              enhance mine safety, operational efficiency, and productivity.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Through local manufacturing, reliable procurement, and technical expertise, GUS
              supports Tanzania's mining industry by reducing dependence on imports, improving
              product availability, and promoting local content development.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="grid grid-cols-2 gap-px bg-border">
              {reasons.map((r, i) => (
                <div key={r} className="bg-background p-8">
                  <div className="text-primary font-display text-3xl">0{i + 1}</div>
                  <h3 className="mt-4 text-lg leading-snug">{r}</h3>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-x">
          <Reveal>
            <div className="max-w-3xl">
              <span className="eyebrow">
                <span className="h-[1px] w-10 bg-primary" /> Capabilities
              </span>
              <h2 className="mt-5 text-4xl md:text-5xl leading-tight">
                The full underground services.
              </h2>
            </div>
          </Reveal>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s, i) => (
              <Reveal key={s} delay={i * 0.03}>
                <div className="flex items-center gap-4 bg-background p-6 border border-border">
                  <div className="size-10 grid place-items-center bg-primary text-primary-foreground font-semibold">
                    <HiOutlineCheck />
                  </div>
                  <span className="font-semibold">{s}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
