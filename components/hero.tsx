"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  const { scrollY } = useScroll();
  
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroY = useTransform(scrollY, [0, 400], [0, 80]);
  const bgScale = useTransform(scrollY, [0, 1000], [1, 1.1]);

  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-black">
      {/* BACKGROUND LAYER */}
      <motion.div
        style={{ y: heroY, scale: bgScale }}
        className="absolute inset-0 will-change-transform"
        aria-hidden="true"
      >
        <img
          src="/img/hero/img1.webp"
          alt="Cinematic wedding moment at Bethesda Terrace"
          className="w-full h-full object-cover opacity-60 grayscale brightness-[0.8]"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      </motion.div>

      {/* CONTENT LAYER */}
      <motion.div
        style={{ opacity: heroOpacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-white px-6 text-center"
      >
        {/* MAIN LOGO WREATH - UPDATED SIZING */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 md:mb-10"
        >
          <img 
            src="/img/logo/PocharaStudioWhite.webp" 
            alt="Pochara Studio"
            className="w-100 h-100 md:w-164 md:h-164 object-contain opacity-95" 
          />
        </motion.div>

        {/* VISUALLY HIDDEN H1 */}
        <motion.h1 className="sr-only">
          POCHARA STUDIO
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          className="text-[10px] md:text-sm tracking-[0.3em] mb-14 font-light max-w-2xl uppercase leading-relaxed"
        >
          Stories in Motion <span className="mx-2 hidden md:inline">|</span> <br className="md:hidden" />
          Wedding — Engagements — City Hall
        </motion.p>

        {/* CALL TO ACTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
        >
          <button className="group relative border border-white/40 px-12 py-5 hover:border-white hover:text-black transition-all duration-500 text-[10px] tracking-[0.25em] flex items-center gap-4 overflow-hidden uppercase">
            <span className="relative z-10">Inquire</span>
            <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-500 relative z-10" />
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </button>
        </motion.div>
      </motion.div>

      {/* SCROLL INDICATOR */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
}