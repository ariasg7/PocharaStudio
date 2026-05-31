"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function GalleryHero() {
  const { scrollY } = useScroll();
  
  // Parallax and Fade effects
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroY = useTransform(scrollY, [0, 400], [0, 80]);
  const bgScale = useTransform(scrollY, [0, 1000], [1, 1.1]);

  // 📜 Smooth scroll handler to target the Portfolio Preview section (#gallery)
  const handleViewCollectionClick = () => {
    const gallerySection = document.getElementById('gallery');
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-black">
      {/* BACKGROUND LAYER */}
      <motion.div
        style={{ y: heroY, scale: bgScale }}
        className="absolute inset-0 will-change-transform"
        aria-hidden="true"
      >
        {/* Standard HTML Image Tag */}
        <img
          src="/img/hero/img3.webp"
          alt="Cinematic wedding moment"
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
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-9xl mb-6 tracking-tight"
          style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400 }}
        >
          EXPLORE THE GALLERY
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          className="text-xs md:text-sm tracking-[0.3em] mb-12 font-light max-w-2xl uppercase"
        >
          Watch the stories unfold with photography
        </motion.p>

        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
        >
          {/* Added onClick handler here */}
          <button 
            onClick={handleViewCollectionClick}
            className="group relative border border-white/50 px-12 py-5 hover:border-white hover:text-black transition-all duration-500 text-[10px] tracking-[0.25em] flex items-center gap-4 overflow-hidden"
          >
            <span className="relative z-10">VIEW THE COLLECTION</span>
            <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-500 relative z-10" />
            
            {/* Hover Background Slide */}
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </button>
        </motion.div>
      </motion.div>

      {/* 📜 ⚡ Fixed: ANIMATED SCROLL DOWN INDICATOR (Matches Main and About Heros) */}
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