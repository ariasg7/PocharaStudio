"use client";

import { motion } from 'framer-motion';

const PHILOSOPHY = [
  {
    number: "01",
    title: "The Curation",
    description: "Every frame is a deliberate choice. We focus on the interplay of light and shadow to create images that feel like a physical memory.",
    image: "/img/gallery/CityHall1/img2.webp"
  },
  {
    number: "02",
    title: "The Connection",
    description: "Documentation is most powerful when it's honest. My approach is unobtrusive, allowing your genuine energy to take center stage.",
    image: "/img/gallery/CityHall2/img5.webp"
  },
  {
    number: "03",
    title: "The Legacy",
    description: "We are building a visual archive that will be passed down through generations—timeless, elegant, and true.",
    image: "/img/gallery/CityHall3/img9.webp"
  }
];

const GEAR_COLLECTION = [
  {
    name: "Contax 645",
    type: "Medium Format Film",
    description: "The gold standard for wedding portraiture. It captures skin tones and light with a soft, painterly quality that digital cannot replicate."
  },
  {
    name: "Leica M11",
    type: "Digital Rangefinder",
    description: "Discreet and silent. Used for candid, documentary moments where being 'invisible' allows for the most honest stories."
  }
];

export function AboutMe() {
  return (
    <div className="overflow-hidden">
      
      {/* 1. ABOUT THE PHOTOGRAPHER (DARK - #1A1A1A) */}
      <section className="bg-[#1a1a1a] text-white py-24 md:py-48 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-5"
            >
              <div className="aspect-[3/4] bg-neutral-800 overflow-hidden shadow-2xl relative">
                <img 
                  src="/img/about/portrait.webp" 
                  alt="Pochara" 
                  className="w-full h-full object-cover grayscale opacity-80"
                />
                <div className="absolute inset-0 border border-white/10 pointer-events-none" />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-7 space-y-8"
            >
              <h2 className="text-[10px] tracking-[0.5em] uppercase text-white/40">The Artist</h2>
              <h3 className="text-4xl md:text-6xl lg:text-7xl font-light italic leading-none" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Documenting the <br /> <span className="text-white/60">Poetry of Life</span>
              </h3>
              <div className="max-w-xl space-y-6 text-sm md:text-base font-light leading-relaxed text-white/60">
                <p>
                  Based in New York, my work is a study of presence. I specialize in fine-art photography that bridges the gap between editorial sophistication and raw, human emotion.
                </p>
                <p>
                  I believe that the most profound stories aren't found in the grand gestures, but in the quiet, unscripted glances that happen in between. My mission is to preserve the elegance of those fleeting moments.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. THE PHILOSOPHY / APPROACH (CREAM - #FAF9F6) */}
      <section className="bg-[#faf9f6] text-[#1a1a1a] py-24 md:py-48 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 md:mb-40">
            <span className="text-[10px] tracking-[0.5em] uppercase text-black/30 block mb-6">Our Philosophy</span>
            <h2 className="text-5xl md:text-8xl font-light leading-none italic" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              The <span className="text-black/30">Art</span> of Being <br /> Present
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-20">
            {PHILOSOPHY.map((item, index) => (
              <motion.div 
                key={item.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`space-y-8 ${index === 1 ? 'md:mt-20' : ''} ${index === 2 ? 'md:mt-40' : ''}`}
              >
                <div className="aspect-[4/5] bg-neutral-200 overflow-hidden shadow-xl">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover grayscale" />
                </div>
                <div className="space-y-4">
                  <div className="flex items-baseline gap-4">
                    <span className="text-[10px] font-medium text-black/20 italic" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{item.number}</span>
                    <h4 className="text-2xl font-serif italic" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{item.title}</h4>
                  </div>
                  <p className="text-xs leading-relaxed text-black/50 font-light max-w-[260px]">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE TOOLKIT (DARK - #1A1A1A) */}
      <section className="bg-[#1a1a1a] text-white py-24 md:py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <div className="max-w-md">
              <h2 className="text-[10px] tracking-[0.5em] uppercase text-white/40 mb-4">The Toolkit</h2>
              <h3 className="text-4xl md:text-5xl font-serif italic" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Crafting with Precision
              </h3>
            </div>
            <p className="text-[10px] tracking-[0.2em] text-white/30 uppercase max-w-[220px] leading-relaxed">
              Merging the timeless soul of film with the clarity of modern digital.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 lg:gap-32">
            {GEAR_COLLECTION.map((item, index) => (
              <motion.div 
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="h-px w-full bg-white/10 relative overflow-hidden">
                   <motion.div 
                    initial={{ x: "-100%" }}
                    whileInView={{ x: "0%" }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="absolute inset-0 bg-white/30"
                   />
                </div>
                <div className="space-y-2">
                  <h4 className="text-[10px] tracking-[0.3em] uppercase font-semibold text-white/30">{item.type}</h4>
                  <h5 className="text-3xl font-serif" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{item.name}</h5>
                </div>
                <p className="text-sm font-light leading-relaxed text-white/50 max-w-md">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}