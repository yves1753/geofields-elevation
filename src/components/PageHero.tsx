import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { OptimizedImage, type ImageAsset } from "@/components/OptimizedImage";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image: ImageAsset;
  children?: ReactNode;
}) {
  return (
    <section className="relative min-h-[70vh] flex items-end pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0">
        <OptimizedImage
          asset={image}
          alt=""
          priority
          sizes="100vw"
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
      </div>
      <div className="container-x relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="eyebrow-light">{eyebrow}</span>
          <h1 className="mt-4 text-white text-5xl md:text-7xl max-w-4xl leading-[0.95]">{title}</h1>
          {subtitle && <p className="mt-6 text-white/70 text-lg max-w-2xl">{subtitle}</p>}
          {children}
        </motion.div>
      </div>
    </section>
  );
}
