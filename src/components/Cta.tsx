"use client";

import { motion } from "framer-motion";

export default function Cta() {
  return (
    <section id="contact" className="bg-brand-charcoal px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-brand-orange"
        >
          Get in Touch
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl text-3xl font-medium leading-snug text-white sm:text-4xl"
        >
          Looking for a Reliable Export Partner?
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#"
            className="rounded-xl bg-brand-orange px-8 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-white transition-transform duration-200 hover:scale-105 hover:brightness-105"
          >
            Request a Quote
          </a>
          <a
            href="#"
            className="rounded-xl border border-white/25 px-8 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-white transition-all duration-200 hover:scale-105 hover:border-white hover:bg-white/10"
          >
            Talk to Sales
          </a>
        </motion.div>
      </div>
    </section>
  );
}
