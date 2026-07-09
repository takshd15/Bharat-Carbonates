"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
          <a href="#" className="shrink-0">
            <Image
              src="/images/logo.png"
              alt="Bharat Carbonates"
              width={160}
              height={40}
              className="h-7 w-auto [filter:brightness(0)]"
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

        <div className="hidden items-center gap-6 sm:flex">
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
      </div>
    </motion.header>
  );
}
