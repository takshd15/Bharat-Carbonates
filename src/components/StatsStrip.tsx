"use client";

import { motion } from "framer-motion";
import { Settings2, Truck } from "lucide-react";
import Counter from "./Counter";

const stats = [
  { type: "counter" as const, value: 150000, suffix: " MT", label: "Capacity" },
  { type: "counter" as const, value: 25, suffix: "+", label: "Years" },
  { type: "icon" as const, icon: Settings2, value: "Custom", label: "Manufacturing" },
  { type: "icon" as const, icon: Truck, value: "Pan-India", label: "Supply" },
];

export default function StatsStrip() {
  return (
    <section className="border-b border-brand-border bg-background px-6 py-12 sm:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-y divide-brand-border sm:grid-cols-4 sm:divide-y-0 sm:divide-x">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 * i, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-1.5 px-0 py-4 sm:px-8 sm:py-0"
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
