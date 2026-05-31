"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const REVIEWS = [
  {
    quote: "Working with Pochara was an effortless experience. They captured the quiet, intimate moments of our City Hall elopement with a cinematic eye.",
    author: "JESSICA & JUAN",
    location: "NYC WEDDING",
    image: "/img/gallery/CityHall1/img3.webp" 
  },
  {
    quote: "Thank you so much for being our photographer, we couldn't have asked for a better experience. We are completely in love with our engagement photos, and our family and friends cannot stop raving about them! ",
    author: "MORY & JOHN",
    location: "ENGAGEMENT",
    image: "/img/insta/insta5.webp"
  },
  {
    quote: "If I could give more than 5 stars, I would. Pochara exceeded all expectations with our wedding photos. She was patient, kind, professional, and made us feel completely comfortable the entire time.",
    author: "ANN & MICHAEL",
    location: "NYC WEDDING",
    image: "/img/insta/insta3.webp"
  }
];

export function Reviews() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % REVIEWS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="reviews" className="bg-[#faf9f6] py-24 md:py-48 px-6 overflow-hidden relative">
      {/* Editorial Watermark - Darkened for the cream background */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03]">
          <p className="text-[25vw] font-serif italic text-[#1a1a1a] whitespace-nowrap">
            Reviews
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 md:mb-32">
            <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl text-[#1a1a1a] italic font-light tracking-tight"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Reviews
          </motion.h2>
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] tracking-[0.6em] text-[#1a1a1a]/40 uppercase mb-4 block"
          >
            The Experience
          </motion.span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="grid md:grid-cols-2 gap-12 md:gap-24 items-center"
          >
            {/* 1. THE IMAGE FRAME */}
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto md:mx-0 overflow-hidden bg-neutral-200 shadow-2xl">
              <motion.img
                key={`img-${index}`}
                src={REVIEWS[index].image}
                initial={{ scale: 1.1, filter: 'grayscale(100%)' }}
                animate={{ scale: 1, filter: 'grayscale(20%)' }}
                transition={{ duration: 1.5 }}
                className="w-full h-full object-cover"
              />
            </div>

            {/* 2. THE TEXT CONTENT */}
            <div className="space-y-10">
              <p 
                className="text-3xl md:text-5xl text-[#1a1a1a] italic font-light leading-tight"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                "{REVIEWS[index].quote}"
              </p>

              <div>
                <h4 className="text-[#1a1a1a] text-[10px] tracking-[0.4em] uppercase mb-1">
                  {REVIEWS[index].author}
                </h4>
                <p className="text-[#1a1a1a]/40 text-[9px] tracking-[0.2em] uppercase">
                  {REVIEWS[index].location}
                </p>
              </div>

              {/* PROGRESS INDICATOR: ___ _ _ */}
              <div className="flex items-center gap-3 pt-8">
                {REVIEWS.map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      width: i === index ? 48 : 12,
                      backgroundColor: i === index ? "#1a1a1a" : "#1a1a1a33"
                    }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="h-[2px] cursor-pointer"
                    onClick={() => setIndex(i)}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}