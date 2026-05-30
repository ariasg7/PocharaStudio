"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const SERVICES = [
  {
    title: "Weddings",
    subtitle: "EDITORIAL & DOCUMENTARY",
    description: "Capturing the quiet details and the big moments with equal intention. Authentic imagery that tells your story with excellence.",
    image: "/img/services/Wedding.webp",
  },
  {
    title: "Engagement",
    subtitle: "INTIMATE SESSIONS",
    description: "A focused session designed to capture chemistry through movement and natural light. Portraits that feel like you.",
    image: "/img/services/Engagment.webp",
  },
  {
    title: "City Hall",
    subtitle: "NYC ELOPEMENTS",
    description: "For those choosing the effortless romance of an NYC elopement. Documented with a timeless, cinematic eye.",
    image: "/img/services/CityHall.webp",
  }
];

function ServiceSection({ service, index }: { service: typeof SERVICES[0], index: number }) {
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const isEven = index % 2 === 0;

  return (
    <div 
      ref={sectionRef} 
      className="relative min-h-[90vh] w-full flex items-center justify-center py-20 overflow-hidden"
    >
      {/* 1. THE WATERMARK "CAGE" - This prevents the horizontal scroll */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <div className={`absolute top-1/2 ${isEven ? 'right-0 translate-x-1/4' : 'left-0 -translate-x-1/4'} -translate-y-1/2 opacity-[0.03] hidden lg:block`}>
          <p className="text-[28vw] font-serif italic text-[#1a1a1a] leading-none m-0 p-0 whitespace-nowrap">
            {service.title.split(' ')[0]}
          </p>
        </div>
      </div>

      {/* 2. THE CONTENT LAYER */}
      <div className={`max-w-7xl w-full px-6 md:px-12 flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16 md:gap-24 relative z-10`}>
        
        {/* IMAGE FRAME */}
        <div className="relative w-full md:w-3/5 aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-neutral-200 shadow-xl">
          <motion.img
            style={{ y, scale: 1.1 }}
            src={service.image}
            alt={service.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* TEXT CONTENT */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-10%" }}
          className="w-full md:w-2/5 space-y-8"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-[#1a1a1a]/20 font-serif italic text-3xl">0{index + 1}</span>
              <div className="h-px w-12 bg-[#1a1a1a]/10" />
            </div>
            
            <h3 
              className="text-5xl md:text-7xl text-[#1a1a1a] italic leading-none"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
            >
              {service.title}
            </h3>
            
            <p className="text-[#1a1a1a]/40 text-[10px] tracking-[0.4em] uppercase">
              {service.subtitle}
            </p>
          </div>

          <p className="text-[#1a1a1a]/60 text-base md:text-lg leading-relaxed font-light max-w-sm">
            {service.description}
          </p>

          <div className="pt-4">
            <a 
              href="#connect"
              className="inline-block text-[#1a1a1a] text-[10px] tracking-[0.4em] border-b border-[#1a1a1a]/20 pb-2 hover:border-[#1a1a1a] transition-all"
            >
              EXPLORE DETAILS
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function ServicesPortfolio() {
  return (
    <section id="services" className="bg-[#F5F2ED] relative w-full overflow-x-hidden">
      
      {/* SECTION INTRO */}
      <div className="pt-48 pb-12 px-6 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-5xl md:text-8xl text-[#1a1a1a] italic font-light tracking-tight"
          style={{ fontFamily: 'Cormorant Garamond, serif' }}
        >
          Services
        </motion.h2>
        <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#1a1a1a]/20 to-transparent mx-auto mt-12" />
      </div>

      {/* RENDER SECTIONS */}
      <div className="relative w-full">
        {SERVICES.map((service, index) => (
          <ServiceSection key={service.title} service={service} index={index} />
        ))}
      </div>

      <div className="h-32 md:h-64" />
    </section>
  );
}