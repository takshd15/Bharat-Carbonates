"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const factorySlides = ["/images/factory-13.jpg", "/images/factory-9.jpg", "/images/factory-16.jpg"];

const images = [
  {
    label: "Warehouse",
    image: "/images/infra-3.jpg",
    span: "",
  },
  {
    label: "Laboratory",
    image: "/images/factory-11.jpg",
    span: "",
  },
  {
    label: "Loading Area",
    image: "/images/factory-4.jpg",
    span: "",
  },
  {
    label: "Machines",
    image: "/images/factory-6.jpg",
    span: "",
  },
];

function FactorySlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % factorySlides.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="group relative cursor-pointer overflow-hidden rounded-2xl sm:col-span-2 sm:row-span-2"
    >
      <AnimatePresence mode="sync">
        <motion.img
          key={factorySlides[index]}
          src={factorySlides[index]}
          alt="Factory"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/75 via-transparent to-transparent transition-colors duration-500 group-hover:from-brand-charcoal/85" />
      <div className="absolute bottom-4 left-4 text-[13px] font-semibold text-white">
        Factory
      </div>
      <div className="absolute right-4 top-4 flex gap-1.5">
        {factorySlides.map((slide, i) => (
          <span
            key={slide}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "w-5 bg-white" : "w-1.5 bg-white/40"
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function Infrastructure() {
  return (
    <section id="infrastructure" className="bg-brand-grey px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-brand-orange"
        >
          Infrastructure
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 max-w-xl text-3xl font-medium text-brand-charcoal sm:text-4xl"
        >
          Built for scale and consistency
        </motion.h2>

        <div className="grid grid-cols-2 auto-rows-[150px] gap-4 sm:auto-rows-[180px] sm:grid-cols-4">
          <FactorySlideshow />
          {images.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.08 * i }}
              className={`group relative cursor-pointer overflow-hidden rounded-2xl ${item.span}`}
            >
              <motion.img
                src={item.image}
                alt={item.label}
                initial={{ scale: 1.2 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/75 via-transparent to-transparent transition-colors duration-500 group-hover:from-brand-charcoal/85" />
              <div className="absolute bottom-4 left-4 text-[13px] font-semibold text-white">
                {item.label}
              </div>
              <span className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                +
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
