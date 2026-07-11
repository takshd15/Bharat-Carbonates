"use client";

import { motion } from "framer-motion";
import { CalendarCheck2, ShieldCheck, Award, Globe2 } from "lucide-react";

const points = [
  {
    label: "Established 2009",
    desc: "Over 20 years of trading experience.",
    tone: "bg-brand-charcoal",
    offset: "sm:translate-y-6",
    icon: CalendarCheck2,
  },
  {
    label: "ISO 9001:2015",
    desc: "Certified quality management system.",
    tone: "bg-brand-orange",
    offset: "sm:-translate-y-3",
    icon: ShieldCheck,
  },
  {
    label: "2-Star Export House",
    desc: "Government-recognised trade status.",
    tone: "bg-brand-orange",
    offset: "sm:-translate-y-3",
    icon: Award,
  },
  {
    label: "Pan-African Presence",
    desc: "Reliable partnerships across five markets.",
    tone: "bg-brand-charcoal",
    offset: "sm:translate-y-6",
    icon: Globe2,
  },
];

export default function Overview() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24 text-center sm:px-10 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-brand-orange"
      >
        About Parmeshwar Impex
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto max-w-2xl text-3xl font-bold leading-tight text-brand-charcoal sm:text-4xl"
      >
        We are a global{" "}
        <span className="text-brand-orange">export &amp; import house</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mx-auto mt-5 max-w-xl text-[14px] leading-relaxed text-brand-muted"
      >
        Parmeshwar Impex Pvt. Ltd. is a Surat-based trading company engaged
        in international trade across ENA, glass bottles, ROPP caps, PET
        preform, and plastic caps — with a strong presence in African
        markets built on reliable sourcing and long-term relationships.
      </motion.p>

      <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 sm:gap-x-4">
        {points.map((point, i) => {
          const Icon = point.icon;
          return (
            <motion.div
              key={point.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className={point.offset}
            >
              <span
                className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full text-white ${point.tone}`}
              >
                <Icon className="h-6 w-6" strokeWidth={1.6} />
              </span>
              <div className="mt-4 text-[13.5px] font-semibold text-brand-charcoal">
                {point.label}
              </div>
              <div className="mt-1 text-[12px] leading-relaxed text-brand-muted">
                {point.desc}
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto mt-16 flex h-[240px] max-w-3xl items-center justify-center overflow-hidden rounded-t-[999px] rounded-b-2xl bg-brand-charcoal sm:h-[320px]"
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle, var(--brand-orange) 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />
        <div className="relative flex flex-col items-center gap-3">
          <Globe2 className="h-14 w-14 text-brand-orange" strokeWidth={1.3} />
          <span className="text-[13px] font-semibold uppercase tracking-[0.12em] text-white/80">
            Connecting India to Africa
          </span>
        </div>
      </motion.div>
    </section>
  );
}
