import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { images } from "@/lib/image-assets";
import {
  HiOutlineShieldCheck,
  HiOutlineAcademicCap,
  HiOutlineExclamation,
  HiOutlineGlobeAlt,
  HiOutlineDocumentText,
  HiOutlineFire,
} from "react-icons/hi";
import { breadcrumbSchema, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/safety")({
  head: () =>
    pageHead({
      title: "Safety & HSE | ISO 45001 and ISO 14001 — Geofields Tanzania",
      description:
        "Zero-harm safety at Geofields Tanzania Limited: ISO 9001, ISO 45001 and ISO 14001 aligned HSE systems, competency training and 1.2 million+ LTI-free man-hours.",
      path: "/safety",
      jsonLd: [
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Safety & HSE", path: "/safety" },
        ]),
      ],
    }),
  component: SafetyPage,
});

const pillars = [
  {
    icon: HiOutlineShieldCheck,
    title: "Safety Philosophy",
    desc: "We are committed to a zero-harm culture where the safety and well-being of our people, communities, and the environment remain our highest priority. Every task is planned and performed with safety as a fundamental standard, not an option.",
  },
  {
    icon: HiOutlineDocumentText,
    title: "HSE Policy",
    desc: "Documented policies to ISO 45001 (Health and safety management system), ISO 9001 (Quality management system), and ISO 14001 (Environmental management system) audited annually.",
  },
  {
    icon: HiOutlineAcademicCap,
    title: "Training",
    desc: "We invest in our people through structured induction, competency-based training, and regular refresher programmes. Our approach ensures that employees have the knowledge, skills, and awareness required to perform their duties safely, effectively, and responsibly.",
  },
  {
    icon: HiOutlineExclamation,
    title: "Risk Management",
    desc: "Site-specific risk assessments, JHAs and continuous hazard reporting.",
  },
  {
    icon: HiOutlineFire,
    title: "Emergency Response",
    desc: "24/7 emergency response readiness through trained teams, clear communication, and regular emergency drills to protect people, assets, and the environment.",
  },
  {
    icon: HiOutlineGlobeAlt,
    title: "Environmental Care",
    desc: "Water conservation, Energy efficiency, proper waste management and progressive rehabilitation is implemented on every project to minimize environmental impacts and protect the surrounding environment.",
  },
];

function SafetyPage() {
  return (
    <>
      <PageHero
        eyebrow="Safety, Health & Environment"
        title="Zero harm. Every crew. Every shift."
        subtitle="Our HSE management system is engineered around international best practice and independently audited."
        image={images.safetyPage}
        imageAlt="Geofields Tanzania Limited health, safety and environment team on site"
      />

      <section className="section-y bg-background" aria-labelledby="hse-pillars">
        <div className="container-x">
          <h2 id="hse-pillars" className="mb-10 text-3xl md:text-4xl">
            How we keep every crew and community safe
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
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
        </div>
      </section>

      <section className="section-y bg-[oklch(0.14_0.005_60)] text-white">
        <div className="container-x grid md:grid-cols-4 gap-8 text-center md:text-left">
          {[
            { v: "1.2M+", l: "LTI-Free Man-hours" },
            { v: "ISO 9001", l: "Quality Management System" },
            { v: "ISO 45001", l: "Health and Safety Management System" },
            { v: "ISO 14001", l: "Environmental Management System" },
          ].map((s) => (
            <div key={s.l} className="border-l-2 border-primary pl-6">
              <div className="font-display text-4xl md:text-5xl text-primary-glow">{s.v}</div>
              <div className="mt-2 text-xs tracking-[0.2em] uppercase text-white/60">{s.l}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
