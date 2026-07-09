"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const products = [
  {
    name: "Coated Calcium Carbonate",
    spec: "PVC · Masterbatch · Paint · Rubber",
    image: "/images/coated-calcium-carbonate.png",
  },
  {
    name: "Uncoated Calcium Carbonate",
    spec: "Paper · Construction · Ceramics · Agriculture",
    image: "/images/uncoated-calcium-carbonate.png",
  },
];

function ProductCard({
  product,
  index,
}: {
  product: (typeof products)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const springX = useSpring(mouseX, { stiffness: 200, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 20 });
  const rotateX = useTransform(springY, [0, 1], [8, -8]);
  const rotateY = useTransform(springX, [0, 1], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const handleLeave = () => {
    setHovered(false);
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay: 0.1 * index, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className="group"
    >
      <div
        ref={ref}
        onMouseEnter={() => setHovered(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleLeave}
        style={{ perspective: 800 }}
        className="flex items-center justify-center rounded-2xl bg-brand-grey px-10 py-14"
      >
        <motion.img
          src={product.image}
          alt={product.name}
          style={{ rotateX, rotateY }}
          animate={{ scale: hovered ? 1.06 : 1 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="aspect-[3/4] w-full max-w-[220px] object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.15)]"
        />
      </div>
      <div className="mt-6">
        <h3 className="text-[16px] font-semibold text-brand-charcoal">
          {product.name}
        </h3>
        <p className="mt-1.5 text-[12.5px] text-brand-muted">{product.spec}</p>
        <a
          href="#"
          className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-brand-charcoal transition-colors group-hover:text-brand-orange"
        >
          Explore Product
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    </motion.div>
  );
}

export default function Products() {
  return (
    <section id="products" className="mx-auto max-w-7xl px-6 py-24 sm:px-10 sm:py-28">
      <div className="mb-16 flex items-end justify-between">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-brand-orange">
            Our Products
          </div>
          <h2 className="text-3xl font-medium text-brand-charcoal sm:text-4xl">
            Precision-engineered mineral solutions
          </h2>
        </motion.div>
        <motion.a
          href="#"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hidden shrink-0 text-[11px] font-medium uppercase tracking-[0.14em] text-brand-charcoal underline decoration-brand-border underline-offset-4 transition-colors hover:text-brand-orange hover:decoration-brand-orange sm:block"
        >
          See All Products
        </motion.a>
      </div>

      <div className="grid grid-cols-1 gap-x-16 gap-y-16 sm:grid-cols-2">
        {products.map((product, i) => (
          <ProductCard key={product.name} product={product} index={i} />
        ))}
      </div>
    </section>
  );
}
