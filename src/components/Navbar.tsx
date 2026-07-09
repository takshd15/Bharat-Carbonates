"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const links = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Applications", href: "#industries" },
  { label: "Infrastructure", href: "#infrastructure" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className={`sticky top-0 z-50 bg-background transition-shadow duration-500 ${
        scrolled ? "shadow-[0_1px_0_0_rgba(0,0,0,0.06)]" : "border-b border-brand-border"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-6 py-4 sm:px-10">
        <div className="flex items-center gap-10">
          <a href="#" className="shrink-0" onClick={() => setMenuOpen(false)}>
            <Image
              src="/images/logo.png"
              alt="Bharat Carbonates"
              width={160}
              height={40}
              className="h-6 w-auto [filter:brightness(0)] sm:h-7"
              priority
            />
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-muted transition-colors hover:text-brand-charcoal"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="hidden items-center gap-6 lg:flex">
          <a
            href="tel:+919687634060"
            className="text-[12px] font-medium text-brand-muted transition-colors hover:text-brand-charcoal"
          >
            +91 96876 34060
          </a>
          <a
            href="#contact"
            className="rounded-xl bg-brand-orange px-5 py-2.5 text-[12px] font-semibold text-white transition-transform duration-200 hover:scale-105 hover:brightness-105"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile hamburger toggle */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="relative flex h-9 w-9 shrink-0 flex-col items-center justify-center gap-[5px] lg:hidden"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
            className="h-[1.5px] w-5 bg-brand-charcoal"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="h-[1.5px] w-5 bg-brand-charcoal"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
            className="h-[1.5px] w-5 bg-brand-charcoal"
          />
        </button>
      </div>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-brand-border bg-background lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 py-4 sm:px-10">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-brand-border py-3.5 text-[13px] font-semibold uppercase tracking-[0.1em] text-brand-charcoal last:border-none"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+919687634060"
                className="mt-4 text-[13px] font-medium text-brand-muted"
              >
                +91 96876 34060
              </a>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-4 inline-flex items-center justify-center rounded-xl bg-brand-orange px-5 py-3 text-[13px] font-semibold text-white transition-transform duration-200 hover:scale-[1.02]"
              >
                Get a Quote
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
