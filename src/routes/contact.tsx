import { createFileRoute, redirect } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiOutlineClock,
  HiOutlineArrowRight,
} from "react-icons/hi";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { images } from "@/lib/image-assets";
import { pageHead } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  beforeLoad: () => {
    throw redirect({ to: "/request-quote", replace: true, statusCode: 301 });
  },
  head: () =>
    pageHead({
      title: "Contact Geofields Tanzania Limited | Request a Quote",
      description:
        "Contact Geofields Tanzania Limited in Dar es Salaam for drilling, exploration and underground support quotations.",
      path: "/request-quote",
      noindex: true,
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

export function ContactPage() {
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
    window.location.href = `mailto:${SITE.email.sales}?subject=Quotation%20Request%20from%20${encodeURIComponent(data.name)}&body=${body}`;
    setSent(true);
    reset();
  };

  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Let's engineer your next project together."
        subtitle="Our team responds to every enquiry within 24 hours with a clear, scoped proposal."
        image={images.contactHero}
        imageAlt="Geofields Tanzania Limited head office in Dar es Salaam"
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
                <input
                  {...register("name", { required: "Required" })}
                  autoComplete="name"
                  className="input"
                />
              </Field>
              <Field label="Company" error={errors.company?.message}>
                <input
                  {...register("company", { required: "Required" })}
                  autoComplete="organization"
                  className="input"
                />
              </Field>
              <Field label="Email" error={errors.email?.message}>
                <input
                  type="email"
                  {...register("email", { required: "Required" })}
                  autoComplete="email"
                  className="input"
                />
              </Field>
              <Field label="Phone" error={errors.phone?.message}>
                <input
                  {...register("phone", { required: "Required" })}
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  className="input"
                />
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
              <h3 className="mt-4 text-white text-3xl">{SITE.foundingLocation}</h3>

              <div className="mt-10 space-y-6">
                <InfoRow icon={HiOutlineLocationMarker} title="Address">
                  {SITE.address.street}
                  <br />
                  {SITE.address.poBox}, {SITE.address.locality}, {SITE.address.country}
                </InfoRow>
                <InfoRow icon={HiOutlinePhone} title="Telephone">
                  <a href={`tel:${SITE.phone.primaryTel}`} className="block hover:text-primary-glow">
                    {SITE.phone.primary}
                  </a>
                  <a href={`tel:${SITE.phone.secondaryTel}`} className="block hover:text-primary-glow">
                    {SITE.phone.secondary}
                  </a>
                </InfoRow>
                <InfoRow icon={HiOutlineMail} title="Email">
                  <a href={`mailto:${SITE.email.info}`} className="block hover:text-primary-glow">
                    {SITE.email.info}
                  </a>
                  <a href={`mailto:${SITE.email.sales}`} className="block hover:text-primary-glow">
                    {SITE.email.sales}
                  </a>
                </InfoRow>
                <InfoRow icon={HiOutlineClock} title="Business Hours">
                  {SITE.hours.display}
                </InfoRow>
              </div>

              <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap gap-3">
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <FaWhatsapp /> WhatsApp
                </a>
                <a
                  href={SITE.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  <FaInstagram /> Instagram
                </a>
                <a href={`tel:${SITE.phone.primaryTel}`} className="btn-ghost">
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
    </>
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
