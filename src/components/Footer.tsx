"use client";

import { motion } from "framer-motion";

const columns = [
  {
    title: "Products",
    links: [
      "Extra Neutral Alcohol",
      "Empty Glass Bottles",
      "Aluminium ROPP Caps",
      "PET Preform",
      "Plastic Caps",
    ],
  },
  {
    title: "Export Markets",
    links: ["Rwanda", "Mozambique", "Cameroon", "DR Congo", "Angola"],
  },
  {
    title: "Company",
    links: ["About Us", "Organisation", "Careers", "Contact"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal px-6 pb-8 pt-20 text-white sm:px-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto max-w-7xl"
      >
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-16 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.9fr_0.9fr_1.1fr]">
          <div>
            <span className="text-[14px] font-semibold uppercase tracking-[0.08em]">
              Parmeshwar Impex
            </span>
            <p className="mt-5 max-w-xs text-[13px] leading-relaxed text-white/50">
              A Surat-based export and import house trading across African
              markets since 2009, built on reliable sourcing and long-term
              relationships.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {["in", "X"].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-[12px] text-white/70 transition-colors hover:border-brand-orange hover:text-brand-orange"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <div className="mb-4 text-[13px] font-semibold text-white/90">
                {col.title}
              </div>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[13px] text-white/55 transition-colors hover:text-brand-orange"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <div className="mb-4 text-[13px] font-semibold text-white/90">
              Reach Us
            </div>
            <address className="text-[13px] not-italic leading-relaxed text-white/55">
              Surat, Gujarat, India
            </address>
            <a
              href="#contact"
              className="mt-6 inline-flex rounded-xl bg-brand-orange px-5 py-2.5 text-[12px] font-semibold uppercase tracking-wide text-white transition-transform duration-200 hover:scale-[1.03]"
            >
              Get in Touch
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 text-[12px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Parmeshwar Impex Pvt. Ltd. All rights reserved.</span>
          <span>Surat, Gujarat, India</span>
        </div>
      </motion.div>
    </footer>
  );
}
