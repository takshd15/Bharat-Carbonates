"use client";

import { motion } from "framer-motion";

const steps = [
  { label: "Sourcing", icon: "◆" },
  { label: "Quality Check", icon: "◔" },
  { label: "Documentation", icon: "▣" },
  { label: "Shipping", icon: "◍" },
  { label: "Customs Clearance", icon: "◈" },
  { label: "Delivery", icon: "◇" },
];

const torn =
  "polygon(0% 0%,10% 5%,20% 0%,30% 5%,40% 0%,50% 5%,60% 0%,70% 5%,80% 0%,90% 5%,100% 0%,100% 100%,90% 95%,80% 100%,70% 95%,60% 100%,50% 95%,40% 100%,30% 95%,20% 100%,10% 95%,0% 100%)";

const radius = 200;

export default function Process() {
  return (
    <section
      className="relative overflow-hidden bg-brand-charcoal py-28 sm:py-36"
      style={{ clipPath: torn }}
    >
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--brand-orange) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-center text-[11px] font-semibold uppercase tracking-[0.15em] text-brand-orange"
        >
          Export Process
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mb-16 max-w-xl text-center text-3xl font-bold text-white sm:text-4xl"
        >
          From sourcing to reliable delivery
        </motion.h2>

        {/* Desktop: circular hub-and-spoke diagram */}
        <div className="relative mx-auto hidden h-[520px] w-[520px] md:block">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
            className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand-orange text-white shadow-xl"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-9 w-9">
              <path d="M4 4v5h5M20 20v-5h-5" />
              <path d="M5.5 15A8 8 0 0 0 20 12M18.5 9A8 8 0 0 0 4 12" />
            </svg>
          </motion.div>

          {steps.map((step, i) => {
            const angle = (Math.PI * 2 * i) / steps.length - Math.PI / 2;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            return (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                whileHover={{ scale: 1.08 }}
                className="absolute flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-1.5 rounded-full bg-white text-center shadow-lg"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                }}
              >
                <span className="text-lg text-brand-orange">{step.icon}</span>
                <span className="px-2 text-[12px] font-semibold leading-tight text-brand-charcoal">
                  {step.label}
                </span>
                <span className="text-[10px] font-semibold text-brand-muted">
                  0{i + 1}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile: simple grid fallback */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:hidden">
          {steps.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.06 * i }}
              className="flex flex-col items-center gap-2 rounded-2xl bg-white/95 px-4 py-6 text-center shadow-lg"
            >
              <span className="text-lg text-brand-orange">{step.icon}</span>
              <span className="text-[12px] font-semibold text-brand-charcoal">
                {step.label}
              </span>
              <span className="text-[10px] font-semibold text-brand-muted">
                0{i + 1}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
