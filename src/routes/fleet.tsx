import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import fleetImg from "@/assets/fleet.jpg";

export const Route = createFileRoute("/fleet")({
  head: () => ({
    meta: [
      { title: "Equipment Fleet — Geofields Tanzania Limited" },
      {
        name: "description",
        content:
          "18+ modern drill rigs from Sandvik, Atlas Copco, Epiroc, Schramm and Boart Longyear — maintained to ISO standards and operated by certified crews.",
      },
    ],
    links: [{ rel: "canonical", href: "/fleet" }],
  }),
  component: FleetPage,
});

const fleet = [
  {
    name: "Atlas Copco CS14",
    type: "Diamond Core Rig",
    manufacturer: "Atlas Copco",
    capacity: "1200 m NQ",
    status: "Active",
    application: "Surface exploration",
  },
  {
    name: "Sandvik DE710",
    type: "Underground Core Rig",
    manufacturer: "Sandvik",
    capacity: "900 m NQ",
    status: "Active",
    application: "Underground exploration",
  },
  {
    name: "Schramm T685WS",
    type: "RC / DTH Rig",
    manufacturer: "Schramm",
    capacity: "500 m",
    status: "Active",
    application: "Reverse circulation",
  },
  {
    name: "Epiroc SmartROC D65",
    type: "Blast Hole Rig",
    manufacturer: "Epiroc",
    capacity: "165 mm",
    status: "Active",
    application: "Production drilling",
  },
  {
    name: "Boart Longyear LF160",
    type: "Surface Core",
    manufacturer: "Boart Longyear",
    capacity: "1500 m HQ",
    status: "Active",
    application: "Deep exploration",
  },
  {
    name: "Sandvik DD422i",
    type: "Development Jumbo",
    manufacturer: "Sandvik",
    capacity: "2-boom",
    status: "Standby",
    application: "Mine development",
  },
];

function FleetPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Equipment Fleet"
        title="18+ modern rigs. Maintained to ISO standards."
        subtitle="Every rig in our fleet is monitored, serviced and operated to global best-practice — because uptime and safety are non-negotiable."
        image={fleetImg}
      />
      <section className="section-y bg-background">
        <div className="container-x grid md:grid-cols-2 gap-6">
          {fleet.map((f, i) => (
            <Reveal key={f.name} delay={i * 0.05}>
              <div className="border border-border p-8 hover-lift">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="eyebrow">{f.manufacturer}</div>
                    <h3 className="mt-3 text-2xl">{f.name}</h3>
                    <div className="mt-1 text-muted-foreground">{f.type}</div>
                  </div>
                  <span
                    className={`text-xs uppercase tracking-widest font-semibold flex items-center gap-2 ${f.status === "Active" ? "text-green-600" : "text-primary"}`}
                  >
                    <span
                      className={`size-1.5 rounded-full ${f.status === "Active" ? "bg-green-600" : "bg-primary"}`}
                    />
                    {f.status}
                  </span>
                </div>
                <div className="mt-8 pt-6 border-t border-border grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-muted-foreground text-xs uppercase tracking-widest">
                      Capacity
                    </div>
                    <div className="font-semibold mt-1">{f.capacity}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground text-xs uppercase tracking-widest">
                      Application
                    </div>
                    <div className="font-semibold mt-1">{f.application}</div>
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
