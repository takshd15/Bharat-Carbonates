"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, MotionConfig, useScroll, useTransform } from "framer-motion";
import Navbar from "./Navbar";

const EASE = [0.16, 1, 0.3, 1] as const;

const markets = ["Rwanda", "Cameroon", "DR Congo", "Mozambique", "Angola"];

function AnimatedWords({ text, delay }: { text: string; delay: number }) {
  return (
    <>
      {text.split(" ").map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="-mb-[0.12em] mr-[0.26em] inline-block overflow-hidden pb-[0.12em] align-bottom last:mr-0"
        >
          <motion.span
            initial={{ y: "115%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: delay + i * 0.06, ease: EASE }}
            className="inline-block"
          >
            {word === "&" ? <span className="text-[#cfa254]">&amp;</span> : word}
          </motion.span>
        </span>
      ))}
    </>
  );
}

function RouteArc() {
  return (
    <svg
      viewBox="0 0 900 440"
      fill="none"
      aria-hidden
      className="pointer-events-none absolute bottom-[15%] right-0 hidden w-[56%] max-w-[880px] overflow-visible lg:block"
    >
      {/* Surat → Africa trade lane */}
      <motion.path
        d="M60,392 Q430,70 852,148"
        stroke="#cfa254"
        strokeWidth="1.1"
        strokeDasharray="5 8"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.55 }}
        transition={{ duration: 2.4, delay: 1.4, ease: EASE }}
      />

      {/* Origin — Surat */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <circle cx="60" cy="392" r="4" fill="#cfa254" />
        <motion.circle
          cx="60"
          cy="392"
          r="4"
          stroke="#cfa254"
          strokeWidth="1"
          initial={{ scale: 1, opacity: 0.7 }}
          animate={{ scale: 2.6, opacity: 0 }}
          transition={{ duration: 2.4, repeat: Infinity, delay: 1.7, ease: "easeOut" }}
          style={{ transformOrigin: "60px 392px" }}
        />
        <text
          x="76"
          y="388"
          className="fill-white/70"
          fontSize="10.5"
          letterSpacing="0.16em"
          fontWeight="600"
        >
          SURAT · INDIA
        </text>
        <text
          x="76"
          y="403"
          className="fill-white/40"
          fontSize="9.5"
          letterSpacing="0.1em"
        >
          21.17° N — 72.83° E
        </text>
      </motion.g>

      {/* Destination — African markets */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 3.3 }}
      >
        <circle cx="852" cy="148" r="4" fill="#cfa254" />
        <text
          x="852"
          y="130"
          textAnchor="end"
          className="fill-white/70"
          fontSize="10.5"
          letterSpacing="0.16em"
          fontWeight="600"
        >
          AFRICAN MARKETS
        </text>
      </motion.g>
    </svg>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  return (
    <MotionConfig reducedMotion="user">
      <section
        ref={sectionRef}
        className="relative flex min-h-[100svh] flex-col bg-[#081527]"
      >
        {/* Photograph — clipped locally so the section can keep position:sticky working for the navbar */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div style={{ y: imageY, scale: imageScale }} className="absolute inset-0">
            <motion.div
              initial={{ scale: 1.07, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.8, ease: EASE }}
              className="absolute inset-0"
            >
              <Image
                src="/images/hero-ocean.jpg"
                alt="Aerial view of a container ship crossing the open ocean"
                fill
                priority
                sizes="100vw"
                className="object-cover object-[center_42%]"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Grade: cool the blues down to the brand navy */}
        <div className="absolute inset-0 bg-[#0a1c38]/45 mix-blend-multiply" />
        {/* Legibility: dark left column, quiet top and bottom edges */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050f21]/90 via-[#050f21]/45 to-[#050f21]/10" />
        <div className="absolute inset-0 bg-[#050f21]/35 sm:hidden" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#050f21]/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#050f21]/80 to-transparent" />

        <Navbar />

        <motion.div
          style={{ opacity: copyOpacity }}
          className="pointer-events-none absolute inset-0"
        >
          <RouteArc />
        </motion.div>

        {/* Copy */}
        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 items-center px-6 pb-28 pt-16 sm:px-10 sm:pb-32">
          <motion.div style={{ y: copyY, opacity: copyOpacity }} className="max-w-3xl">
            <h1 className="font-display text-[28px] font-bold uppercase leading-[1.08] tracking-[-0.01em] text-white sm:text-[46px] lg:text-[60px]">
              <span className="block">
                <AnimatedWords text="Global trade in ENA" delay={0.5} />
              </span>
              <span className="block">
                <AnimatedWords text="& bottling supply" delay={0.72} />
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.05, ease: EASE }}
              className="mt-7 max-w-md text-[15px] leading-[1.8] text-white/70"
            >
              Parmeshwar Impex is an export and import house in Surat, India.
              We ship extra neutral alcohol, empty glass bottles, aluminium
              ROPP caps, PET preforms and plastic caps to distillers and
              bottlers across Africa. Trading since 2009.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.2, ease: EASE }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center bg-white px-8 py-4 text-[11px] font-bold uppercase tracking-[0.16em] text-[#0c1e3d] transition-colors duration-300 hover:bg-[#cfa254] hover:text-[#081527]"
              >
                Request a Quote
              </a>
              <a
                href="#products"
                className="group inline-flex items-center gap-3 border border-white/30 px-8 py-4 text-[11px] font-bold uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:border-white/80"
              >
                Our Products
                <span
                  aria-hidden
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Manifest strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.6, ease: EASE }}
          className="relative z-10 border-t border-white/15"
        >
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-10">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-white/60">
              <span className="whitespace-nowrap">Est. 2009</span>
              <span className="h-3 w-px bg-white/25" />
              <span className="whitespace-nowrap">ISO 9001:2015 Certified</span>
              <span className="h-3 w-px bg-white/25" />
              <span className="whitespace-nowrap">2-Star Export House</span>
            </div>
            <div className="hidden items-center gap-2 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-white/45 md:flex">
              {markets.map((m, i) => (
                <span key={m} className="flex items-center gap-2">
                  {i > 0 && <span className="text-[#cfa254]/60">·</span>}
                  {m}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </MotionConfig>
  );
}
