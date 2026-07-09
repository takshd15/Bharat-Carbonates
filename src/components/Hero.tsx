"use client";

import { motion } from "framer-motion";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Diagonal accent wedge */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-brand-orange/90"
        style={{ clipPath: "polygon(38% 0, 100% 0, 100% 78%, 62% 100%)" }}
      />
      {/* Soft blob behind products */}
      <div className="pointer-events-none absolute right-[6%] top-[18%] -z-10 h-[280px] w-[280px] rounded-full bg-brand-charcoal/10 blur-2xl sm:h-[380px] sm:w-[380px]" />

      <Navbar />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-2 lg:gap-8 lg:py-28">
        <div className="relative">
          {/* Rotated seal — creative stamp accent instead of a generic eyebrow tag */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7, rotate: -18 }}
            animate={{ opacity: 1, scale: 1, rotate: -12 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -left-2 -top-8 flex h-[74px] w-[74px] flex-col items-center justify-center rounded-full border border-brand-orange/40 text-center sm:-top-10 sm:h-20 sm:w-20"
          >
            <span className="text-[9px] font-semibold uppercase leading-none tracking-[0.1em] text-brand-orange">
              Est.
            </span>
            <span className="font-serif text-lg font-semibold leading-none text-brand-charcoal">
              1999
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-lg pl-16 font-serif text-[32px] font-medium leading-[1.2] text-brand-charcoal sm:pl-20 sm:text-[42px] lg:text-[48px]"
          >
            Your trusted partner in{" "}
            <span className="italic text-brand-orange">mineral</span>{" "}
            manufacturing
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-md text-[14px] leading-relaxed text-brand-muted"
          >
            A Surat-based manufacturer delivering premium calcium carbonate
            and talc across India since 1999 — 150,000 MT of engineered,
            consistent capacity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand-charcoal px-7 py-3.5 text-[13px] font-semibold text-white transition-transform duration-200 hover:scale-105"
            >
              Request a Quote
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-brand-border bg-background px-7 py-3.5 text-[13px] font-semibold text-brand-charcoal transition-all duration-200 hover:scale-105 hover:border-brand-charcoal"
            >
              Product Catalogue <span aria-hidden>↗</span>
            </a>
          </motion.div>
        </div>

        <div className="relative flex h-[300px] items-center justify-center sm:h-[400px] lg:h-[460px] lg:justify-end">
          <motion.img
            src="/images/uncoated-calcium-carbonate.png"
            alt="Bharat Carbonates Uncoated Calcium Carbonate packaging"
            initial={{ opacity: 0, y: 30, rotate: -14 }}
            animate={{ opacity: 1, y: [0, -10, 0], rotate: -10 }}
            transition={{
              opacity: { duration: 0.8, delay: 0.5 },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.2 },
              rotate: { duration: 0.8, delay: 0.5 },
            }}
            className="absolute left-[10%] top-[6%] z-10 w-[42%] max-w-[170px] object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.25)] sm:max-w-[220px] lg:left-[6%] lg:max-w-[250px]"
          />
          <motion.img
            src="/images/coated-calcium-carbonate.png"
            alt="Bharat Carbonates Coated Calcium Carbonate packaging"
            initial={{ opacity: 0, y: 30, rotate: 10 }}
            animate={{ opacity: 1, y: [0, -14, 0], rotate: 7 }}
            transition={{
              opacity: { duration: 0.8, delay: 0.7 },
              y: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.4 },
              rotate: { duration: 0.8, delay: 0.7 },
            }}
            className="absolute bottom-[6%] right-[6%] z-20 w-[48%] max-w-[200px] object-contain drop-shadow-[0_35px_45px_rgba(0,0,0,0.3)] sm:max-w-[260px] lg:right-[2%] lg:max-w-[300px]"
          />
        </div>
      </div>
    </section>
  );
}
