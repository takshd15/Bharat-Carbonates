"use client";

import { motion } from "framer-motion";
import { Search, BadgeCheck, Ship } from "lucide-react";

const capabilities = [
  {
    label: "Global Sourcing",
    desc: "Reliable vendor networks across India for consistent supply.",
    icon: Search,
  },
  {
    label: "Quality Assurance",
    desc: "ISO 9001:2015 certified processes on every consignment.",
    icon: BadgeCheck,
  },
  {
    label: "Export Logistics",
    desc: "End-to-end documentation and shipping to five African markets.",
    icon: Ship,
  },
];

export default function ManufacturingExcellence() {
  return (
    <section className="bg-brand-grey px-6 py-24 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-brand-orange"
        >
          Trade Capabilities
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 max-w-xl text-3xl font-medium text-brand-charcoal sm:text-4xl"
        >
          Built for reliable international trade
        </motion.h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {capabilities.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.1 * i }}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="rounded-2xl border border-brand-border bg-background p-8"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-charcoal text-white">
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </span>
                <h3 className="mt-6 text-[16px] font-semibold text-brand-charcoal">
                  {item.label}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-brand-muted">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
