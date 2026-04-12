"use client";

import { motion } from 'framer-motion';

export function PersonalNarrative() {
  return (
    <section 
      id="about me" 
      className="relative min-h-screen bg-[#9ba88a] px-6 md:px-12 py-24 md:py-40 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mb-20 md:mb-32"
        >
          <h2
            className="text-4xl md:text-7xl text-white md:ml-12 tracking-tight"
            style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400 }}
          >
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
          {/* IMAGE COMPOSITION */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Portrait */}
            <div className="relative z-10 md:mr-16 lg:mr-24 overflow-hidden bg-neutral-800 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1770199780470-1e6e3d30f8f8?auto=format&fit=crop&q=80&w=800"
                alt="Portrait of Alina Delfino"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>

            {/* Accent "Behind the Scenes" Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute -bottom-12 -right-4 md:-right-16 w-48 h-64 md:w-72 md:h-96 hidden sm:block z-20 overflow-hidden shadow-2xl border-[12px] border-white/10 backdrop-blur-sm"
            >
              <img
                src="https://images.unsplash.com/photo-1730175602983-d006716223cc?auto=format&fit=crop&q=80&w=600"
                alt="Behind the scenes studio moment"
                className="w-full h-full object-cover opacity-90"
                loading="lazy"
              />
            </motion.div>
          </motion.div>

          {/* TEXTUAL CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-white space-y-10 lg:pl-12"
          >
            <p
              className="text-2xl md:text-3xl lg:text-5xl leading-[1.3] font-light"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Photography isn&apos;t just a record; it&apos;s the <span className="italic">preservation of a feeling</span>. We prioritize the candid, the raw, and the quiet moments over posed perfection.
            </p>

            <div className="flex flex-wrap gap-3 pt-6">
              <span className="px-5 py-2 border border-white/30 text-[10px] md:text-xs tracking-[0.3em] font-light uppercase backdrop-blur-sm">
                Authentic Moments
              </span>
              <span className="px-5 py-2 border border-white/30 text-[10px] md:text-xs tracking-[0.3em] font-light uppercase backdrop-blur-sm">
                NYC Storytellers
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}