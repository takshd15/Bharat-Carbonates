"use client";

import { motion } from "framer-motion";

const departments = [
  "Export Sales & Business Development",
  "Procurement & Vendor Management",
  "Export Documentation & Logistics",
  "Finance & Accounts",
  "Administration & HR",
];

function Node({
  eyebrow,
  title,
  subtitle,
  delay,
  tone = "light",
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  delay: number;
  tone?: "light" | "dark";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay }}
      className={`w-full max-w-md rounded-2xl border px-6 py-5 text-center ${
        tone === "dark"
          ? "border-brand-charcoal bg-brand-charcoal text-white"
          : "border-brand-border bg-background text-brand-charcoal"
      }`}
    >
      <div
        className={`text-[10px] font-semibold uppercase tracking-[0.14em] ${
          tone === "dark" ? "text-brand-orange" : "text-brand-orange"
        }`}
      >
        {eyebrow}
      </div>
      <div className="mt-1.5 text-[15px] font-semibold leading-snug">{title}</div>
      {subtitle && (
        <div
          className={`mt-1 text-[12px] ${
            tone === "dark" ? "text-white/60" : "text-brand-muted"
          }`}
        >
          {subtitle}
        </div>
      )}
    </motion.div>
  );
}

function Connector({ delay }: { delay: number }) {
  return (
    <motion.div
      initial={{ scaleY: 0, opacity: 0 }}
      whileInView={{ scaleY: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="h-8 w-px origin-top bg-brand-border"
    />
  );
}

export default function Infrastructure() {
  return (
    <section id="organisation" className="bg-brand-grey px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-center text-[11px] font-semibold uppercase tracking-[0.15em] text-brand-orange"
        >
          Organisation
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 text-center text-3xl font-medium text-brand-charcoal sm:text-4xl"
        >
          Organisational Hierarchy
        </motion.h2>

        <div className="flex flex-col items-center">
          <Node
            eyebrow="Promoters / Directors"
            title={
              <>
                Mr. Parmesh Goyal
                <br />
                Mr. Rajesh Goyal
              </>
            }
            delay={0}
            tone="dark"
          />
          <Connector delay={0.1} />
          <Node
            eyebrow="Leadership"
            title="Business Head / Managing Director"
            delay={0.15}
          />
          <Connector delay={0.25} />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted"
          >
            Departments
          </motion.div>

          <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
            {departments.map((dept, i) => (
              <motion.div
                key={dept}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: 0.35 + i * 0.06 }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="rounded-xl border border-brand-border bg-background px-5 py-4 text-center text-[13px] font-medium text-brand-charcoal sm:text-left"
              >
                {dept}
              </motion.div>
            ))}
          </div>

          <Connector delay={0.7} />
          <Node
            eyebrow="Workforce"
            title="24 Employees"
            subtitle="Across all departments"
            delay={0.75}
            tone="dark"
          />
        </div>
      </div>
    </section>
  );
}
