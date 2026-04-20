"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link'; 
import { useRef } from 'react';

const FEATURED_PRINTS = [
  { url: "/img/insta/insta1.webp", x: "-18%", y: "-15%", rotate: -4, size: "w-48 md:w-72" },
  { url: "/img/insta/insta2.webp", x: "22%", y: "10%", rotate: 6, size: "w-56 md:w-80" },
  { url: "/img/insta/insta3.webp", x: "-28%", y: "35%", rotate: -8, size: "w-40 md:w-64" },
  { url: "/img/insta/insta5.webp", x: "12%", y: "45%", rotate: 2, size: "w-64 md:w-96" },
];

export function Gallery() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yShift = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen bg-[#1a1a1a] py-32 px-6 overflow-hidden"
      id="gallery"
    >
      {/* BACKGROUND TEXT - Inverted to low-opacity white */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <h3 className="text-[30vw] font-serif text-white opacity-[0.02] whitespace-nowrap leading-none select-none italic">
          MOMENTS
        </h3>
      </div>

      <div className="max-w-7xl mx-auto relative z-20 pointer-events-none">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] tracking-[0.6em] text-white/60 uppercase mb-4"
          >
            Curated Works
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl text-white italic font-light mb-12"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            The Gallery
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="pointer-events-auto"
          >
            <Link 
              href="/gallery" 
              className="group relative flex items-center gap-6 border border-white/30 px-12 py-6 overflow-hidden transition-all hover:border-white"
            >
              <span className="text-white text-[10px] tracking-[0.4em] relative z-10 transition-colors duration-500 group-hover:text-[#1a1a1a] uppercase">
                Open Full Experience
              </span>
              <ArrowUpRight size={18} className="text-white relative z-10 group-hover:rotate-45 group-hover:text-[#1a1a1a] transition-all duration-500" />
              
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* THE "FLOATING PRINTS" BACKGROUND */}
      <motion.div 
        style={{ y: yShift }}
        className="absolute inset-0 z-10"
      >
        {FEATURED_PRINTS.map((print, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: i * 0.1 }}
            className={`absolute ${print.size} aspect-[3/4] bg-[#1a1a1a] p-2 shadow-2xl shadow-black/50`}
            style={{ 
              left: `calc(50% + ${print.x})`, 
              top: `calc(30% + ${print.y})`,
              rotate: `${print.rotate}deg`
            }}
          >
            <div className="w-full h-full overflow-hidden bg-neutral-800">
              <img 
                src={print.url} 
                alt="Archive sneak peek" 
                className="w-full h-full object-cover brightness-[0.8] contrast-[1.1]" 
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}