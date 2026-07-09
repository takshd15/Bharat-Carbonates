"use client";

import { motion } from "framer-motion";

const points = [
  {
    label: "Since 1999",
    desc: "25+ years of disciplined manufacturing.",
    tone: "bg-brand-charcoal",
    offset: "sm:translate-y-6",
  },
  {
    label: "Manufacturing Excellence",
    desc: "150,000 MTPA of engineered capacity.",
    tone: "bg-brand-orange",
    offset: "sm:-translate-y-3",
  },
  {
    label: "Quality Assurance",
    desc: "In-house lab testing, every batch.",
    tone: "bg-brand-orange",
    offset: "sm:-translate-y-3",
  },
  {
    label: "Long-Term Trust",
    desc: "Relationships built on consistency.",
    tone: "bg-brand-charcoal",
    offset: "sm:translate-y-6",
  },
];

const icons = [
  <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <circle cx="12" cy="12" r="8" />
    <path d="M12 8v4l3 2" />
  </svg>,
  <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <path d="M4 20V10l8-5 8 5v10" />
    <path d="M4 20h16" />
  </svg>,
  <svg key="3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3" />
  </svg>,
  <svg key="4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <path d="M4 12.5l5 5L20 7" />
  </svg>,
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
        About Bharat Carbonates
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto max-w-2xl text-3xl font-bold leading-tight text-brand-charcoal sm:text-4xl"
      >
        We are industrial{" "}
        <span className="text-brand-orange">mineral manufacturers</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mx-auto mt-5 max-w-xl text-[14px] leading-relaxed text-brand-muted"
      >
        Since 1999, Bharat Carbonates has grown from a 6,000 MTPA plant into
        one of India&apos;s leading calcium carbonate and talc manufacturers —
        scaling to 150,000 MTPA while holding the same standard of quality our
        first customers trusted us for.
      </motion.p>

      <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 sm:gap-x-4">
        {points.map((point, i) => (
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
              {icons[i]}
            </span>
            <div className="mt-4 text-[13.5px] font-semibold text-brand-charcoal">
              {point.label}
            </div>
            <div className="mt-1 text-[12px] leading-relaxed text-brand-muted">
              {point.desc}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ clipPath: "inset(0 0 100% 0)" }}
        whileInView={{ clipPath: "inset(0 0 0% 0)" }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto mt-16 max-w-3xl overflow-hidden rounded-t-[999px] rounded-b-2xl"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <motion.img
          src="/images/factory-13.jpg"
          alt="Bharat Carbonates manufacturing facility"
          initial={{ scale: 1.15 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="h-[320px] w-full object-cover sm:h-[400px]"
        />
        <div className="absolute inset-0 bg-brand-charcoal/20" />
        <button
          aria-label="Watch factory video"
          className="group absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-brand-charcoal shadow-lg transition-transform duration-300 hover:scale-110"
        >
          <span className="ml-1 h-0 w-0 border-y-[9px] border-l-[15px] border-y-transparent border-l-brand-charcoal transition-colors group-hover:border-l-brand-orange" />
        </button>
      </motion.div>
    </section>
  );
}
