"use client";

import { motion } from 'framer-motion';

export function FinalCTA() {
  return (
    <section className="bg-[#faf9f6] px-6 md:px-12 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto"
      >
        <p
          className="text-3xl md:text-5xl text-[#2d3436] mb-10"
          style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
        >
          Ready to Tell Your Story?
        </p>
        
        <a 
          href="mailto:shootwithpochara@gmail.com"
          className="group relative inline-block overflow-hidden bg-[#2d3436] text-white px-12 py-5 text-[10px] tracking-[0.3em] transition-all hover:bg-[#1a1a1a] rounded-sm"
        >
          <span className="relative z-10">INQUIRE HERE</span>
        </a>
      </motion.div>
    </section>
  );
}