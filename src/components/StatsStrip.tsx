"use client";

import { motion } from "framer-motion";
import { CalendarCheck2, ShieldCheck, Award } from "lucide-react";
import Counter from "./Counter";

const stats = [
  { type: "icon" as const, icon: CalendarCheck2, value: "2009", label: "Established" },
  { type: "counter" as const, value: 20, suffix: "+", label: "Years Experience" },
  { type: "icon" as const, icon: ShieldCheck, value: "ISO 9001:2015", label: "Certified" },
  { type: "icon" as const, icon: Award, value: "2-Star", label: "Export House" },
];

export default function StatsStrip() {
  return (
    <section className="border-b border-brand-border bg-background px-6 py-12 sm:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-2 sm:grid-cols-4 sm:divide-x sm:divide-brand-border">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 * i, ease: [0.16, 1, 0.3, 1] }}
            className={`flex flex-col gap-1.5 px-0 py-4 sm:px-8 sm:py-0 sm:border-t-0 ${
              i >= 2 ? "border-t border-brand-border" : ""
            }`}
          >
            <div className="flex items-center gap-2 text-2xl font-medium text-brand-charcoal sm:text-3xl">
              {stat.type === "counter" ? (
                <Counter target={stat.value} suffix={stat.suffix} />
              ) : (
                <>
                  <stat.icon className="h-5 w-5 shrink-0 text-brand-orange" strokeWidth={1.75} />
                  <span className="text-lg font-semibold sm:text-xl">{stat.value}</span>
                </>
              )}
            </div>
            <div className="text-[11px] uppercase tracking-[0.1em] text-brand-muted">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
