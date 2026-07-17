import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiOutlineClock,
  HiOutlineArrowRight,
} from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import contactHero from "@/assets/contact-hero.png.asset.json";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Request a Quote — Geofields Tanzania Limited" },
      {
        name: "description",
        content:
          "Contact Geofields Tanzania Limited in Dar es Salaam. Request a quotation, chat on WhatsApp, or reach our operations team by phone or email.",
      },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

type FormValues = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();
  const [sent, setSent] = useState(false);

  const onSubmit = (data: FormValues) => {
    const body = encodeURIComponent(
      `Name: ${data.name}\nCompany: ${data.company}\nEmail: ${data.email}\nPhone: ${data.phone}\nService: ${data.service}\n\n${data.message}`,
    );
    window.location.href = `mailto:sales@geofields.co.tz?subject=Quotation%20Request%20from%20${encodeURIComponent(data.name)}&body=${body}`;
    setSent(true);
    reset();
  };

  return (
    <Layout>
      <PageHero
        eyebrow="Get In Touch"
        title="Let's engineer your next project together."
        subtitle="Our team responds to every enquiry within 24 hours with a clear, scoped proposal."
        image={contactHero.url}
      />

      <section className="section-y bg-background">
        <div className="container-x grid lg:grid-cols-[1.1fr_1fr] gap-16">
          <Reveal>
            <span className="eyebrow">
              <span className="h-[1px] w-10 bg-primary" /> Request a Quotation
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl leading-tight">Tell us about your project.</h2>
            <p className="mt-4 text-muted-foreground">
              We'll match you with the right technical lead and reply within one business day.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-10 grid sm:grid-cols-2 gap-5">
              <Field label="Full Name" error={errors.name?.message}>
                <input {...register("name", { required: "Required" })} className="input" />
              </Field>
              <Field label="Company" error={errors.company?.message}>
                <input {...register("company", { required: "Required" })} className="input" />
              </Field>
              <Field label="Email" error={errors.email?.message}>
                <input
                  type="email"
                  {...register("email", { required: "Required" })}
                  className="input"
                />
              </Field>
              <Field label="Phone" error={errors.phone?.message}>
                <input {...register("phone", { required: "Required" })} className="input" />
              </Field>
              <Field label="Service Required" className="sm:col-span-2">
                <select {...register("service")} className="input">
                  <option>Drilling Services</option>
                  <option>Geological & Exploration</option>
                  <option>Mining Supplies</option>
                  <option>Mining Services</option>
                  <option>Underground Support (GUS)</option>
                  <option>Other</option>
                </select>
              </Field>
              <Field label="Project Details" className="sm:col-span-2">
                <textarea
                  rows={5}
                  {...register("message", { required: "Required" })}
                  className="input"
                />
              </Field>
              <div className="sm:col-span-2 flex items-center justify-between gap-4 flex-wrap">
                <button type="submit" className="btn-primary">
                  Submit Enquiry <HiOutlineArrowRight />
                </button>
                {sent && (
                  <span className="text-sm text-green-700">
                    Thank you — opening your mail client…
                  </span>
                )}
              </div>
            </form>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="bg-[oklch(0.14_0.005_60)] text-white p-10 h-full">
              <span className="eyebrow-light">
                <span className="h-[1px] w-10 bg-primary-glow" /> Head Office
              </span>
              <h3 className="mt-4 text-white text-3xl">Dar es Salaam, Tanzania</h3>

              <div className="mt-10 space-y-6">
                <InfoRow icon={HiOutlineLocationMarker} title="Address">
                  Mwai Kibaki Road, Mbezi Beach
                  <br />
                  P.O Box 76387, Dar es Salaam, Tanzania
                </InfoRow>
                <InfoRow icon={HiOutlinePhone} title="Telephone">
                  <a href="tel:+255766775255" className="block hover:text-primary-glow">
                    +255 766 775 255
                  </a>
                  <a href="tel:+255755284141" className="block hover:text-primary-glow">
                    +255 755 284 141
                  </a>
                </InfoRow>
                <InfoRow icon={HiOutlineMail} title="Email">
                  <a href="mailto:info@geofields.co.tz" className="block hover:text-primary-glow">
                    info@geofields.co.tz
                  </a>
                  <a href="mailto:sales@geofields.co.tz" className="block hover:text-primary-glow">
                    sales@geofields.co.tz
                  </a>
                </InfoRow>
                <InfoRow icon={HiOutlineClock} title="Business Hours">
                  Mon – Fri · 08:00 – 17:00 EAT
                  <br />
                  Sat · 09:00 – 13:00
                </InfoRow>
              </div>

              <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/255766775255"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                >
                  <FaWhatsapp /> WhatsApp
                </a>
                <a href="tel:+255766775255" className="btn-ghost">
                  Call Now
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="container-x mt-20">
          <div className="aspect-[21/8] w-full overflow-hidden">
            <iframe
              title="Geofields Tanzania Office Location"
              src="https://www.google.com/maps?q=Mbezi+Beach+Mwai+Kibaki+Road+Dar+es+Salaam&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}

function Field({
  label,
  error,
  className = "",
  children,
}: {
  label: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="text-xs uppercase tracking-[0.2em] font-semibold text-foreground/70">
        {label}
      </span>
      <div className="mt-2">{children}</div>
      {error && <span className="text-xs text-destructive mt-1 block">{error}</span>}
    </label>
  );
}

function InfoRow({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="size-11 grid place-items-center bg-primary/20 text-primary-glow shrink-0">
        <Icon className="size-5" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-[0.2em] text-white/50 font-semibold">
          {title}
        </div>
        <div className="mt-2 text-white/90 leading-relaxed text-sm">{children}</div>
      </div>
    </div>
  );
}
