"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const markets = [
  { name: "Rwanda", region: "East Africa" },
  { name: "Mozambique", region: "Southern Africa" },
  { name: "Cameroon", region: "Central Africa" },
  { name: "DR Congo", region: "Central Africa" },
  { name: "Angola", region: "Southern Africa" },
];

export default function Industries() {
  return (
    <section id="markets" className="mx-auto max-w-7xl px-6 py-24 sm:px-10 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-brand-orange"
      >
        Global Reach
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="mb-14 max-w-xl text-3xl font-medium text-brand-charcoal sm:text-4xl"
      >
        Export Markets We Serve
      </motion.h2>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {markets.map((market, i) => (
          <motion.div
            key={market.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.06 * i }}
            whileHover={{ y: -6, transition: { duration: 0.25, type: "spring", stiffness: 300 } }}
            className="flex flex-col items-center gap-3 rounded-2xl border border-brand-border bg-background py-10 text-center transition-shadow duration-300 hover:shadow-[0_16px_40px_-20px_rgba(0,0,0,0.25)]"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange">
              <MapPin className="h-5 w-5" strokeWidth={1.75} />
            </span>
            <div className="text-[14.5px] font-semibold text-brand-charcoal">
              {market.name}
            </div>
            <div className="text-[11px] uppercase tracking-wide text-brand-muted">
              {market.region}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
