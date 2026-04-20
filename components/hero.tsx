"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  const { scrollY } = useScroll();
  
  // Parallax and Fade effects
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
        {/* Standard HTML Image Tag */}
        {/*
        <img
          src="https://images.unsplash.com/photo-1763140615918-a4af28eb6a71?auto=format&fit=crop&q=80&w=1920"
          alt="Cinematic wedding moment"
          className="w-full h-full object-cover opacity-60 grayscale-[0.2] brightness-[0.8]"
          loading="eager" // Forces immediate load since it's the first thing seen
        />*/}
        <img
          src="/img/hero/img1.webp"
          alt="Cinematic wedding moment"
          className="w-full h-full object-cover opacity-60 grayscale brightness-[0.8]"
          loading="eager" // Forces immediate load since it's the first thing seen
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      </motion.div>

      {/* CONTENT LAYER */}
      <motion.div
        style={{ opacity: heroOpacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-white px-6 text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-9xl mb-6 tracking-tight"
          style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400 }}
        >
          POCHARA STUDIO
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          className="text-xs md:text-sm tracking-[0.3em] mb-12 font-light max-w-2xl uppercase"
        >
          Stories in Motion — Wedding | Engagement | City Hall
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
        >
          <button className="group relative border border-white/50 px-12 py-5 hover:border-white hover:text-black transition-all duration-500 text-[10px] tracking-[0.25em] flex items-center gap-4 overflow-hidden">
            <span className="relative z-10">INQUIRE</span>
            <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-500 relative z-10" />
            
            {/* Hover Background Slide */}
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </button>
        </motion.div>
      </motion.div>

      {/* SCROLL INDICATOR */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
}