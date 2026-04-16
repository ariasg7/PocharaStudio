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
      className="relative min-h-screen bg-[#F5F2ED] py-32 px-6 overflow-hidden"
      id = "gallery"
    >
      {/* BACKGROUND TEXT - Increased opacity and slightly darker tone */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <h3 className="text-[30vw] font-serif text-[#1a1a1a] opacity-[0.07] whitespace-nowrap leading-none select-none italic">
          MOMENTS
        </h3>
      </div>

      <div className="max-w-7xl mx-auto relative z-20 pointer-events-none">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] tracking-[0.6em] text-[#1a1a1a]/60 uppercase mb-4"
          >
            Curated Works
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl text-[#1a1a1a] italic font-light mb-12"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            The Gallery
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="pointer-events-auto"
          >
            <Link href="/portfolio" className="group relative flex items-center gap-6 border border-[#1a1a1a]/30 px-12 py-6 overflow-hidden transition-all hover:border-[#1a1a1a]">
              <span className="text-[#1a1a1a] text-[10px] tracking-[0.4em] relative z-10 transition-colors duration-500 group-hover:text-white">
                OPEN FULL EXPERIENCE
              </span>
              <ArrowUpRight size={18} className="text-[#1a1a1a] relative z-10 group-hover:rotate-45 group-hover:text-white transition-all duration-500" />
              
              <div className="absolute inset-0 bg-[#1a1a1a] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
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
            // Shadow is slightly sharper to give the "light" prints more definition
            className={`absolute ${print.size} aspect-[3/4] bg-white p-2 shadow-2xl shadow-[#1a1a1a]/10`}
            style={{ 
              left: `calc(50% + ${print.x})`, 
              top: `calc(30% + ${print.y})`,
              rotate: `${print.rotate}deg`
            }}
          >
            <div className="w-full h-full overflow-hidden bg-neutral-200">
              <img 
                src={print.url} 
                alt="Archive sneak peek" 
                // Removed grayscale to bring back the rich colors/contrast of her photos
                className="w-full h-full object-cover brightness-[0.95] contrast-[1.05]" 
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}