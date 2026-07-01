import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { HiOutlineArrowRight, HiOutlineCheck } from "react-icons/hi";
import underground from "@/assets/underground.jpg";

export const Route = createFileRoute("/gus")({
  head: () => ({
    meta: [
      { title: "Underground Support (GUS) — Geofields Tanzania Limited" },
      { name: "description", content: "Geofields Underground Support delivers ground support, rock bolting, mine development, underground logistics and emergency response for African mines." },
    ],
    links: [{ rel: "canonical", href: "/gus" }],
  }),
  component: GusPage,
});

const services = [
  "Underground Mine Support", "Ground Support Systems", "Rock Bolting", "Underground Logistics",
  "Mine Development", "Mine Maintenance", "Emergency Response", "Technical Support",
  "Underground Equipment Supply", "Safety Procedures", "Skilled Workforce Deployment",
];

const reasons = [
  { title: "Specialist Crews", desc: "Certified, drilled and site-hardened underground teams." },
  { title: "Modern Equipment", desc: "Underground rigs, bolters and loaders from tier-1 OEMs." },
  { title: "Zero-Harm Culture", desc: "Rigorous safety systems audited to ISO 45001." },
  { title: "24/7 Availability", desc: "On-call emergency response and technical support." },
];

function GusPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="NEW · Geofields Underground Support"
        title="Underground expertise, engineered for African mines."
        subtitle="GUS delivers integrated ground support, mine development and underground logistics — with the discipline and equipment that keep production moving safely."
        image={underground}
      >
        <div className="mt-10 flex flex-wrap gap-4">
          <Link to="/contact" className="btn-primary">Request Underground Support <HiOutlineArrowRight /></Link>
          <a href="tel:+255766775255" className="btn-ghost">Call GUS Desk</a>
        </div>
      </PageHero>

      <section className="section-y bg-background">
        <div className="container-x grid lg:grid-cols-[1.1fr_1fr] gap-16">
          <Reveal>
            <span className="eyebrow"><span className="h-[1px] w-10 bg-primary" /> About GUS</span>
            <h2 className="mt-5 text-4xl md:text-5xl leading-tight">Purpose-built for the demands of underground mining.</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Geofields Underground Support (GUS) is our newest division, established to give our clients
              a single, accountable partner for the full underground services stack — from ground control
              engineering to logistics, maintenance and emergency response.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Every GUS engagement is led by an underground superintendent with decades of experience on
              African mines, supported by trained crews, modern equipment and a HSE system engineered
              around zero-harm.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="grid grid-cols-2 gap-px bg-border">
              {reasons.map((r) => (
                <div key={r.title} className="bg-background p-8">
                  <div className="text-primary font-display text-3xl">0{reasons.indexOf(r) + 1}</div>
                  <h3 className="mt-4 text-lg">{r.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
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
              <span className="eyebrow"><span className="h-[1px] w-10 bg-primary" /> Capabilities</span>
              <h2 className="mt-5 text-4xl md:text-5xl leading-tight">The full underground services stack.</h2>
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
    </Layout>
  );
}
