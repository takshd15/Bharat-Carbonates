"use client";

import { motion } from "framer-motion";

const captions = [
  {
    label: "Production Line",
    desc: "High-throughput grinding and coating equipment.",
    image: "/images/factory-12.jpg",
  },
  {
    label: "Quality Laboratory",
    desc: "In-house testing for every batch we dispatch.",
    image: "/images/infra-2.jpg",
  },
  {
    label: "Packaging & Dispatch",
    desc: "Moisture-controlled packing, pan-India delivery.",
    image: "/images/factory-17.jpg",
  },
];

export default function ManufacturingExcellence() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 sm:px-10 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-brand-orange"
      >
        Manufacturing Excellence
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="mb-14 max-w-xl text-3xl font-medium text-brand-charcoal sm:text-4xl"
      >
        Engineering precision at every stage of production
      </motion.h2>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
        {captions.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 * i }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className="group"
          >
            <div className="overflow-hidden rounded-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.image}
                alt={item.label}
                className="h-56 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
            <h3 className="mt-5 text-[15px] font-semibold text-brand-charcoal">
              {item.label}
            </h3>
            <p className="mt-1.5 text-[13px] leading-relaxed text-brand-muted">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
