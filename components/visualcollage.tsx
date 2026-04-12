"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function VisualCollage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const driftUp = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const driftDown = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const slowDrift = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen bg-[#ebe4d9] px-6 md:px-12 py-24 md:py-48 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-4xl md:text-7xl text-[#2d3436] mb-24 text-center tracking-tight"
          style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400 }}
        >
          YOUR EXPERIENCE
        </motion.h2>

        <div className="relative max-w-4xl mx-auto mt-20">
          
          {/* MAIN CENTRAL IMAGE - Added aspect-ratio and relative height */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="relative z-10 shadow-2xl bg-neutral-200 aspect-[4/3] w-full overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1596381421074-87bf109a032b?auto=format&fit=crop&q=80&w=1200"
              alt="Couple sharing a candid moment"
              className="w-full h-full object-cover block brightness-[0.95]"
            />
          </motion.div>

          {/* FLOATING DETAIL: CIRCLE TOP LEFT */}
          <motion.div
            style={{ y: driftUp }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="absolute -top-16 -left-4 md:-left-20 w-32 h-32 md:w-56 md:h-56 rounded-full overflow-hidden shadow-2xl z-20 border-8 border-[#ebe4d9] bg-neutral-200"
          >
            <img
              src="https://images.unsplash.com/photo-1730175602795-138827f9623f?auto=format&fit=crop&q=80&w=600"
              alt="Detail"
              className="w-full h-full object-cover block"
            />
          </motion.div>

          {/* FLOATING DETAIL: RECTANGLE TOP RIGHT */}
          <motion.div
            style={{ y: slowDrift }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="absolute -top-8 -right-4 md:-right-24 w-40 h-32 md:w-64 md:h-48 overflow-hidden shadow-2xl z-20 bg-neutral-200"
          >
            <img
              src="https://images.unsplash.com/photo-1652107258371-da96c470b245?auto=format&fit=crop&q=80&w=800"
              alt="Smile"
              className="w-full h-full object-cover block"
            />
          </motion.div>

          {/* FLOATING DETAIL: CIRCLE BOTTOM LEFT */}
          <motion.div
            style={{ y: driftDown }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            viewport={{ once: true }}
            className="absolute -bottom-16 left-12 w-48 h-48 rounded-full overflow-hidden shadow-2xl z-20 hidden lg:block border-8 border-[#ebe4d9] bg-neutral-200"
          >
            <img
              src="https://images.unsplash.com/photo-1646679080828-a04816f77c98?auto=format&fit=crop&q=80&w=600"
              alt="Celebration"
              className="w-full h-full object-cover block"
            />
          </motion.div>

          {/* ANNOTATIONS */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            viewport={{ once: true }}
            className="absolute -bottom-12 right-0 md:right-4 text-xl md:text-3xl text-[#2d3436] italic font-light"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            We let you be present
          </motion.p>
        </div>
      </div>
    </section>
  );
}