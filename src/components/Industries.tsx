"use client";

import { motion } from "framer-motion";

const industries = [
  {
    name: "PVC",
    desc: "Improves opacity and reduces cost in profiles & pipes.",
    image: "/images/industries/pvc.jpg",
  },
  {
    name: "Paints",
    desc: "Enhances brightness, coverage and gloss control.",
    image: "/images/industries/paints.jpg",
  },
  {
    name: "Rubber",
    desc: "Boosts reinforcement and processing efficiency.",
    image: "/images/industries/rubber.jpg",
  },
  {
    name: "Paper",
    desc: "Adds brightness and smoothness to the sheet.",
    image: "/images/industries/paper.jpg",
  },
  {
    name: "Masterbatch",
    desc: "Consistent dispersion for color concentrates.",
    image: "/images/industries/masterbatch.jpg",
  },
  {
    name: "Construction",
    desc: "Strengthens putty, paints and cement blends.",
    image: "/images/industries/construction.jpg",
  },
  {
    name: "Ceramics",
    desc: "Improves whiteness and firing performance.",
    image: "/images/industries/ceramics.jpg",
  },
  {
    name: "Agriculture",
    desc: "Soil conditioning and micronutrient carrier.",
    image: "/images/industries/agriculture.jpg",
  },
];

export default function Industries() {
  return (
    <section id="industries" className="mx-auto max-w-7xl px-6 py-24 sm:px-10 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-brand-orange"
      >
        Applications
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="mb-14 max-w-xl text-3xl font-medium text-brand-charcoal sm:text-4xl"
      >
        Industries We Serve
      </motion.h2>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {industries.map((ind, i) => (
          <motion.div
            key={ind.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 * i }}
            whileHover={{ y: -6, transition: { duration: 0.25, type: "spring", stiffness: 300 } }}
            className="group flex flex-col items-start gap-4 rounded-2xl border border-brand-border bg-background p-6 text-left transition-shadow duration-300 hover:shadow-[0_16px_40px_-20px_rgba(0,0,0,0.25)]"
          >
            <div className="h-14 w-14 shrink-0 overflow-hidden rounded-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={ind.image}
                alt={ind.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div>
              <div className="text-[14.5px] font-semibold text-brand-charcoal">
                {ind.name}
              </div>
              <p className="mt-1.5 text-[12.5px] leading-relaxed text-brand-muted">
                {ind.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
