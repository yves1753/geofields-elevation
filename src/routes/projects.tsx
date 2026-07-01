import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import heroImg from "@/assets/hero-mine.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Geofields Tanzania Limited" },
      { name: "description", content: "Selected drilling, exploration and underground projects delivered by Geofields across Tanzania and Africa." },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

const projects = [
  { name: "Geita Gold Expansion", commodity: "Gold", location: "Geita, Tanzania", depth: "1,200 m", duration: "18 months", scope: "Diamond core, RC, underground support" },
  { name: "North Mara Exploration", commodity: "Gold", location: "Mara, Tanzania", depth: "800 m", duration: "12 months", scope: "Exploration drilling & sampling" },
  { name: "Kabanga Nickel Program", commodity: "Nickel", location: "Kagera, Tanzania", depth: "1,500 m", duration: "24 months", scope: "Deep diamond drilling" },
  { name: "Bulyanhulu Underground", commodity: "Gold", location: "Shinyanga, Tanzania", depth: "1,100 m", duration: "Ongoing", scope: "Underground support & bolting" },
  { name: "Mkuju Uranium Program", commodity: "Uranium", location: "Ruvuma, Tanzania", depth: "600 m", duration: "9 months", scope: "RC & core drilling" },
  { name: "Nyanzaga Gold Project", commodity: "Gold", location: "Mwanza, Tanzania", depth: "900 m", duration: "14 months", scope: "Resource definition drilling" },
];

function ProjectsPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Selected Projects"
        title="Trusted on Africa's most demanding mine sites."
        subtitle="A snapshot of the operators, commodities and terrains where Geofields delivers every day."
        image={heroImg}
      />
      <section className="section-y bg-background">
        <div className="container-x grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.05}>
              <article className="border border-border p-8 h-full hover-lift">
                <div className="eyebrow">{p.commodity}</div>
                <h3 className="mt-4 text-xl leading-tight">{p.name}</h3>
                <div className="mt-2 text-sm text-muted-foreground">{p.location}</div>
                <p className="mt-4 text-sm text-foreground/80 leading-relaxed">{p.scope}</p>
                <div className="mt-6 pt-6 border-t border-border flex justify-between text-sm">
                  <span><span className="text-muted-foreground">Depth: </span><strong>{p.depth}</strong></span>
                  <span><span className="text-muted-foreground">Duration: </span><strong>{p.duration}</strong></span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </Layout>
  );
}
