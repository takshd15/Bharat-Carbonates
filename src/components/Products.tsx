"use client";

import { motion } from "framer-motion";

const products = [
  {
    name: "Extra Neutral Alcohol",
    spec: "ENA · Bulk export grade",
    image: "/images/products/ena.jpg",
  },
  {
    name: "Empty Glass Bottles",
    spec: "Beverage & spirits packaging",
    image: "/images/products/glass-bottles.jpg",
  },
  {
    name: "Aluminium ROPP Caps",
    spec: "Tamper-evident closures",
    image: "/images/products/ropp-cap.jpg",
  },
  {
    name: "PET Preform",
    spec: "Precision-molded, export ready",
    image: "/images/products/pet-preform.jpg",
  },
  {
    name: "Plastic Caps",
    spec: "Custom sizes & specifications",
    image: "/images/products/plastic-cap.jpg",
  },
];

export default function Products() {
  return (
    <section id="products" className="mx-auto max-w-7xl px-6 py-24 sm:px-10 sm:py-28">
      <div className="mb-16 flex flex-wrap items-end justify-between gap-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-brand-orange">
            Our Products
          </div>
          <h2 className="text-3xl font-medium text-brand-charcoal sm:text-4xl">
            Trusted goods, globally sourced
          </h2>
        </motion.div>
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="shrink-0 text-[11px] font-medium uppercase tracking-[0.14em] text-brand-charcoal underline decoration-brand-border underline-offset-4 transition-colors hover:text-brand-orange hover:decoration-brand-orange"
        >
          Request Full Catalogue
        </motion.a>
      </div>

      <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product, i) => (
          <motion.div
            key={product.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.08 * i, ease: [0.16, 1, 0.3, 1] }}
            className="group"
          >
            <div className="overflow-hidden rounded-2xl bg-brand-grey">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={product.image}
                alt={product.name}
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>
            <h3 className="mt-5 text-[15px] font-semibold text-brand-charcoal">
              {product.name}
            </h3>
            <p className="mt-1 text-[13px] text-brand-muted">{product.spec}</p>
            <span className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-brand-charcoal transition-colors group-hover:text-brand-orange">
              Enquire
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
