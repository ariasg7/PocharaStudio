"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const SERVICES = [
  {
    title: "Weddings",
    subtitle: "EDITORIAL & DOCUMENTARY",
    description: "Capturing the quiet details and the big moments with equal intention. Authentic imagery that tells your story with excellence.",
    image: "https://images.unsplash.com/photo-1596381421074-87bf109a032b?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Engagement",
    subtitle: "INTIMATE SESSIONS",
    description: "A focused session designed to capture chemistry through movement and natural light. Portraits that feel like you.",
    image: "/img/insta/insta5.webp",
  },
  {
    title: "City Hall",
    subtitle: "NYC ELOPEMENTS",
    description: "For those choosing the effortless romance of an NYC elopement. Documented with a timeless, cinematic eye.",
    image: "https://images.unsplash.com/photo-1652107258371-da96c470b245?auto=format&fit=crop&q=80&w=800",
  }
];

function ServiceSection({ service, index }: { service: typeof SERVICES[0], index: number }) {
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // This creates the "Vertical Slide" inside the frame
  // The image will travel 20% of its height as you scroll past
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  
  const isEven = index % 2 === 0;

  return (
    <div 
      ref={sectionRef} 
      className="relative min-h-[90vh] flex items-center justify-center py-20"
    >
      <div className={`max-w-7xl w-full px-6 md:px-12 flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16 md:gap-24`}>
        
        {/* THE WINDOW (The "Frame") */}
        <div className="relative w-full md:w-3/5 aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-neutral-900 shadow-2xl">
          <motion.img
            style={{ y, scale: 1.1 }} // Scale 1.1 ensures no white edges during the slide
            src={service.image}
            alt={service.title}
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />
        </div>

        {/* THE CONTENT (The "Gallery Label") */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-10%" }}
          className="w-full md:w-2/5 space-y-8"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-white/20 font-serif italic text-3xl">0{index + 1}</span>
              <div className="h-px w-12 bg-white/10" />
            </div>
            
            <h3 
              className="text-5xl md:text-7xl text-white italic leading-none"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
            >
              {service.title}
            </h3>
            
            <p className="text-white/40 text-[10px] tracking-[0.4em] uppercase">
              {service.subtitle}
            </p>
          </div>

          <p className="text-white/60 text-base md:text-lg leading-relaxed font-light max-w-sm">
            {service.description}
          </p>

          <div className="pt-4">
            <a 
              href="#connect"
              className="inline-block text-white text-[10px] tracking-[0.4em] border-b border-white/20 pb-2 hover:border-white transition-all"
            >
              EXPLORE DETAILS
            </a>
          </div>
        </motion.div>
      </div>

      {/* SUBTLE BACKGROUND WATERMARK */}
      <div className={`absolute top-1/2 ${isEven ? 'right-0' : 'left-0'} -translate-y-1/2 opacity-[0.02] pointer-events-none select-none hidden lg:block`}>
        <span className="text-[30vw] font-serif italic text-white whitespace-nowrap">
          {service.title.split(' ')[0]}
        </span>
      </div>
    </div>
  );
}

export function ServicesPortfolio() {
  return (
    <section id="services" className="bg-[#1a1a1a] relative">
      
      {/* SECTION INTRO */}
      <div className="pt-48 pb-12 px-6 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-5xl md:text-8xl text-white italic font-light tracking-tight"
          style={{ fontFamily: 'Cormorant Garamond, serif' }}
        >
          Services
        </motion.h2>
        <div className="h-px w-32 bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto mt-12" />
      </div>

      {/* THE STAGGERED REVEAL LIST */}
      <div className="relative">
        {SERVICES.map((service, index) => (
          <ServiceSection key={service.title} service={service} index={index} />
        ))}
      </div>

      {/* BREATHING ROOM BEFORE FOOTER */}
      <div className="h-32 md:h-64" />
    </section>
  );
}