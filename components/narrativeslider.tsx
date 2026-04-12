"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const STORIES = [
  {
    category: 'WEDDING',
    image: 'https://images.unsplash.com/photo-1519741196428-6a2175fa2557?auto=format&fit=crop&q=80&w=1600',
    accent: '#d4a574',
    accentTransparent: 'rgba(212, 165, 116, 0)'
  },
  {
    category: 'CITY HALL',
    image: 'https://images.unsplash.com/photo-1706857753003-394d2ce33079?auto=format&fit=crop&q=80&w=1600',
    accent: '#c9a959',
    accentTransparent: 'rgba(201, 169, 89, 0)'
  },
  {
    category: 'ENGAGEMENT',
    image: 'https://images.unsplash.com/photo-1768632066855-4e00e16a22c7?auto=format&fit=crop&q=80&w=1600',
    accent: '#9b8579',
    accentTransparent: 'rgba(155, 133, 121, 0)'
  }
];

export function NarrativeSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section 
      id="stories" 
      className="relative min-h-screen bg-[#1a1a1a] px-6 md:px-12 py-24 md:py-32 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div className="max-w-7xl mx-auto">
        {/* RESTORED ORIGINAL HEADER STYLE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl text-white mb-20 text-center tracking-tight"
          style={{ fontFamily: 'Cormorant Garamond, serif' }}
        >
          SELECT STORIES
        </motion.h2>

        {/* NAVIGATION BUTTONS */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-12 mb-16">
          {STORIES.map((story, index) => (
            <button
              key={story.category}
              onClick={() => setActiveSlide(index)}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className="group relative py-4 px-2 text-xs md:text-sm tracking-[0.3em] transition-colors duration-500 uppercase"
              style={{
                color: activeSlide === index ? 'white' : 'rgba(255,255,255,0.4)',
              }}
            >
              {story.category}
              <motion.div
                initial={false}
                animate={{ 
                  width: activeSlide === index ? '100%' : '0%',
                  backgroundColor: activeSlide === index ? story.accent : story.accentTransparent
                }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-0 left-0 h-[1px]"
              />
            </button>
          ))}
        </div>

        {/* IMAGE VIEWPORT - Aspect ratio balanced for portraits */}
        <div className="relative aspect-[3/2] max-w-5xl mx-auto overflow-hidden bg-neutral-900 group shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <img
                src={STORIES[activeSlide].image}
                alt={STORIES[activeSlide].category}
                className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/10" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* PAGINATION DOTS */}
        <div className="flex justify-center gap-4 mt-12">
          {STORIES.map((story, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className="h-1 transition-all duration-700"
              style={{
                width: activeSlide === index ? '40px' : '12px',
                backgroundColor: activeSlide === index ? story.accent : 'rgba(255,255,255,0.2)'
              }}
            />
          ))}
        </div>
      </div>

      {/* CUSTOM CURSOR OVERLAY */}
      <AnimatePresence>
        {isHovering && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="fixed pointer-events-none z-[100] hidden md:block mix-blend-difference"
            style={{
              left: cursorPos.x,
              top: cursorPos.y,
              x: '-50%',
              y: '-50%',
            }}
            transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.5 }}
          >
            <div
              className="px-6 py-3 text-[10px] tracking-[0.3em] font-medium text-white"
              style={{ backgroundColor: STORIES[activeSlide].accent }}
            >
              EXPLORE
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}