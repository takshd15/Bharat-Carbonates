"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const columns = [
  {
    title: "Products",
    links: ["Coated Calcium Carbonate", "Uncoated Calcium Carbonate", "Talc Powder"],
  },
  {
    title: "Applications",
    links: ["Paint & Coatings", "Plastics", "Cable", "Rubber", "Ceramics", "Agriculture"],
  },
  {
    title: "Company",
    links: ["About Us", "Infrastructure", "Career", "Media", "Press Release"],
  },
  {
    title: "Downloads",
    links: ["Product Catalogue", "Quality Certificates", "Company Profile"],
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
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-16 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.9fr_0.9fr_0.9fr_1.1fr]">
          <div>
            <Image
              src="/images/logo.png"
              alt="Bharat Carbonates"
              width={180}
              height={44}
              className="h-8 w-auto"
            />
            <p className="mt-5 max-w-xs text-[13px] leading-relaxed text-white/50">
              Nurturing a legacy of trust since 1999. Committed to improving
              quality of life through precision mineral manufacturing.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {["X", "in", "f"].map((icon) => (
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
              612 - Rajhans Montessa, Beside Le Meridian Hotel (TGB),
              <br />
              Dumas Road, Surat 395007, Gujarat, India
            </address>
            <div className="mt-4 flex flex-col gap-1.5 text-[13px] text-white/55">
              <a href="tel:+919687634060" className="transition-colors hover:text-brand-orange">
                +91 96876 34060
              </a>
              <a href="mailto:info@bharatcarbonates.com" className="transition-colors hover:text-brand-orange">
                info@bharatcarbonates.com
              </a>
            </div>
            <a
              href="#contact"
              className="mt-6 inline-flex rounded-sm bg-brand-orange px-5 py-2.5 text-[12px] font-semibold uppercase tracking-wide text-white transition-transform duration-200 hover:scale-[1.03]"
            >
              Quick Enquiry
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 text-[12px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Bharat Carbonates Pvt. Ltd. All rights reserved.</span>
          <span>Surat, Gujarat, India</span>
        </div>
      </motion.div>
    </footer>
