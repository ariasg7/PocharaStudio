"use client";

import { motion, useScroll, useTransform } from 'framer-motion';

export function AboutHero() {
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
        <img
          src="/img/hero/img5.webp" 
          alt="Pochara Studio - Behind the Lens"
          className="w-full h-full object-cover opacity-50 grayscale brightness-[0.7]"
          loading="eager" 
        />
        {/* Subtle transition to the light theme if the next section is white/cream */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/20" />
      </motion.div>

      {/* CONTENT LAYER */}
      <motion.div
        style={{ opacity: heroOpacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-white px-6 text-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-[10px] tracking-[0.5em] uppercase mb-4 opacity-70"
        >
          The Storyteller
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="text-5xl md:text-7xl lg:text-9xl mb-8 tracking-tight italic"
          style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
        >
          BEHIND THE LENS
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          className="text-xs md:text-sm tracking-[0.2em] mb-12 font-light max-w-xl uppercase leading-relaxed"
        >
          Based in New York — documenting the quiet honesty of life's greatest legacies.
        </motion.p>
      </motion.div>

      {/* 📜 ⚡ Fixed: ANIMATED SCROLL DOWN INDICATOR (Matches Main Hero Perfectly) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[8px] tracking-[0.4em] text-white/30 uppercase font-light">
          Scroll
        </span>
        <div className="w-[2px] h-16 bg-white/10 relative overflow-hidden rounded-full">
          <motion.div 
            animate={{ 
              y: ["-100%", "100%"] 
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: [0.43, 0.13, 0.23, 0.96] 
            }}
            className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-transparent via-white to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}