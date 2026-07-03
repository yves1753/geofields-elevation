import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import safety from "@/assets/safety.jpg";
import {
  HiOutlineShieldCheck,
  HiOutlineAcademicCap,
  HiOutlineExclamation,
  HiOutlineGlobeAlt,
  HiOutlineDocumentText,
  HiOutlineFire,
} from "react-icons/hi";

export const Route = createFileRoute("/safety")({
  head: () => ({
    meta: [
      { title: "Safety & HSE — Geofields Tanzania Limited" },
      {
        name: "description",
        content:
          "Zero-harm safety systems, ISO 45001 and ISO 14001 aligned HSE practice, and environmental stewardship across every Geofields operation.",
      },
    ],
    links: [{ rel: "canonical", href: "/safety" }],
  }),
  component: SafetyPage,
});

const pillars = [
  {
    icon: HiOutlineShieldCheck,
    title: "Safety Philosophy",
    desc: "Zero harm is not a target — it is a non-negotiable standard on every site.",
  },
  {
    icon: HiOutlineDocumentText,
    title: "HSE Policy",
    desc: "Documented policies aligned to ISO 45001 and ISO 14001, audited annually.",
  },
  {
    icon: HiOutlineAcademicCap,
    title: "Training",
    desc: "Structured induction, competency and refresher training for every employee.",
  },
  {
    icon: HiOutlineExclamation,
    title: "Risk Management",
    desc: "Site-specific risk assessments, JHAs and continuous hazard reporting.",
  },
  {
    icon: HiOutlineFire,
    title: "Emergency Response",
    desc: "24/7 on-call response teams and drilled evacuation protocols.",
  },
  {
    icon: HiOutlineGlobeAlt,
    title: "Environmental Care",
    desc: "Water, waste and rehabilitation programmes on every project.",
  },
];

function SafetyPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Safety, Health & Environment"
        title="Zero harm. Every crew. Every shift."
        subtitle="Our HSE management system is engineered around international best practice and independently audited."
        image={safety}
      />

      <section className="section-y bg-background">
        <div className="container-x grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <div className="bg-background p-10 h-full hover-lift">
                <div className="size-14 grid place-items-center bg-primary/10 text-primary">
                  <p.icon className="size-7" />
                </div>
                <h3 className="mt-6 text-xl">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-y bg-[oklch(0.14_0.005_60)] text-white">
        <div className="container-x grid md:grid-cols-4 gap-8 text-center md:text-left">
          {[
            { v: "1.2M+", l: "LTI-Free Man-hours" },
            { v: "100%", l: "PPE Compliance" },
            { v: "ISO 45001", l: "Certified Systems" },
            { v: "ISO 14001", l: "Environmental Standard" },
          ].map((s) => (
            <div key={s.l} className="border-l-2 border-primary pl-6">
              <div className="font-display text-4xl md:text-5xl text-primary-glow">{s.v}</div>
              <div className="mt-2 text-xs tracking-[0.2em] uppercase text-white/60">{s.l}</div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
