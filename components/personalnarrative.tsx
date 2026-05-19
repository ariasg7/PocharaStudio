"use client";

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function PersonalNarrative() {
  return (
    <section 
      id="about-me" 
      className="relative min-h-screen bg-[#1a1a1a] px-6 md:px-12 py-24 md:py-48 overflow-hidden"
    >
      <div className="absolute top-10 left-10 pointer-events-none opacity-[0.03] select-none">
        <h2 className="text-[20vw] leading-none font-serif italic text-white">Pochara</h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-32 items-center">
          
          {/* IMAGE COMPOSITION */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 md:mr-20 lg:mr-32 aspect-[3/4] overflow-hidden bg-neutral-900 shadow-2xl">
              <img
                src="/img/narrative/narrative1.JPG"
                alt="Artist Portrait"
                className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-1000"
                loading="lazy"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.6 }}
              viewport={{ once: true }}
              className="absolute -bottom-10 right-0 md:-right-8 w-1/2 aspect-square z-20 overflow-hidden border-[1px] border-white/20 shadow-2xl bg-neutral-800"
            >
              <img
                src="/img/narrative/narrative2.JPG"
                alt="Behind the scenes"
                /* object-top shifts the image content down within the square frame */
                className="w-full h-full object-cover object-top opacity-80"
                loading="lazy"
              />
            </motion.div>
          </motion.div>

          {/* TEXTUAL CONTENT */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <span className="text-[10px] tracking-[0.4em] text-white/40 uppercase mb-4 block">
                The Visionary
              </span>
              <h2
                className="text-5xl md:text-8xl text-white tracking-tight leading-none"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
              >
                Meet the <br /><span className="italic">Artist</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-white space-y-12"
            >
              <p
                className="text-xl md:text-2xl lg:text-3xl leading-[1.6] font-light text-white/90"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                Based in <span className="italic">New York and New Jersey</span>, I capture 
                <span className="italic"> elegant, authentic</span> moments with intention. 
                I believe your story deserves to be documented with excellence.
              </p>

              {/* ACTION BUTTON */}
              <div>
                <Link 
                  href="/about" 
                  className="group relative inline-flex items-center gap-4 border border-white/30 px-10 py-5 overflow-hidden transition-all hover:border-white"
                >
                  <span className="relative z-10 text-[10px] tracking-[0.3em] uppercase group-hover:text-black transition-colors duration-500">
                    Learn More
                  </span>
                  <ArrowRight size={14} className="relative z-10 group-hover:translate-x-2 group-hover:text-black transition-all duration-500" />
                  
                  {/* Hover Background Slide */}
                  <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </Link>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="h-px w-12 bg-white/30 self-center" />
                <span className="text-[9px] tracking-[0.3em] font-light uppercase text-white/60">
                  Pochara Photogolffy,
                </span>
                <span className="text-[9px] tracking-[0.3em] font-light uppercase text-white/60">
                  Based in New York
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}