"use client";

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const ALL_PROJECTS = [
  { title: "The Hudson Valley", category: "Weddings", image: "/img/insta/insta1.webp", location: "Upstate NY", href: "/portfolio/hudson-valley" },
  { title: "SoHo Streets", category: "Engagements", image: "/img/insta/insta2.webp", location: "Manhattan", href: "/portfolio/soho-streets" },
  { title: "NYC City Hall", category: "City Hall", image: "/img/insta/insta3.webp", location: "Lower Manhattan", href: "/portfolio/city-hall" },
  { title: "The Hamptons", category: "Weddings", image: "/img/insta/insta4.webp", location: "Montauk", href: "/portfolio/the-hamptons" },
  { title: "Central Park", category: "Engagements", image: "/img/insta/insta5.webp", location: "New York", href: "/portfolio/central-park" },
];

const FILTERS = ["All", "Weddings", "Engagements", "City Hall"];

export function PortfolioPreview() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [index, setIndex] = useState(0);

  const filteredProjects = useMemo(() => {
    return activeFilter === "All" 
      ? ALL_PROJECTS 
      : ALL_PROJECTS.filter(p => p.category === activeFilter);
  }, [activeFilter]);

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setIndex(0);
  };

  const nextStep = () => setIndex((prev) => (prev + 1) % filteredProjects.length);
  const prevStep = () => setIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);

  const getIndex = (offset: number) => {
    return (index + offset + filteredProjects.length) % filteredProjects.length;
  };

  return (
    <section id="gallery" className="bg-[#1a1a1a] py-12 md:py-32 px-4 md:px-6 overflow-hidden relative min-h-[85vh] flex flex-col justify-center">
      
      {/* SIGNATURE BACKGROUND TEXT */}
      <div className="absolute top-0 md:top-10 left-2 md:left-10 pointer-events-none opacity-[0.03] select-none z-0">
        <h2 className="text-[28vw] md:text-[20vw] leading-none font-serif italic text-white" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
          Gallery
        </h2>
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10 w-full">
        
        {/* HEADER & FILTERS */}
        <div className="text-center mb-8 md:mb-20 space-y-6 md:space-y-10 relative z-10">
          <div className="space-y-2 md:space-y-4">
            <span className="text-[10px] md:text-[14px] tracking-[0.4em] md:tracking-[0.6em] text-white/40 uppercase font-light">
              Selected Works
            </span>
            
            <h2 
              className="text-5xl md:text-8xl lg:text-9xl text-white font-serif italic leading-tight md:leading-[0.9]" 
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              My Visual Diary
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-2 md:gap-4 pt-2 md:pt-6">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterChange(filter)}
                className={`px-4 md:px-8 py-2 md:py-3 rounded-full text-[9px] md:text-[11px] font-bold tracking-[0.1em] md:tracking-[0.2em] uppercase transition-all duration-500 border ${
                  activeFilter === filter 
                    ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.1)]" 
                    : "bg-transparent text-white/30 border-white/10 hover:border-white/40 hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* CAROUSEL VIEWPORT */}
        <div className="relative flex items-center justify-center h-[450px] md:h-[700px] w-full mt-4 md:mt-0">
          
          {/* NAVIGATION BUTTONS - Now Visible on Mobile */}
          <div className="absolute inset-0 flex items-center justify-between z-[60] pointer-events-none">
            <motion.button 
              whileTap={{ scale: 0.9 }}
              onClick={prevStep}
              className="pointer-events-auto w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white transition-all hover:bg-white hover:text-black shadow-2xl ml-[-5px] md:ml-12"
            >
              <ChevronLeft size={20} className="md:w-7 md:h-7" strokeWidth={1.5} />
            </motion.button>

            <motion.button 
              whileTap={{ scale: 0.9 }}
              onClick={nextStep}
              className="pointer-events-auto w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white transition-all hover:bg-white hover:text-black shadow-2xl mr-[-5px] md:mr-12"
            >
              <ChevronRight size={20} className="md:w-7 md:h-7" strokeWidth={1.5} />
            </motion.button>
          </div>

          {/* THE CARDS */}
          <div className="relative flex items-center justify-center w-full max-w-5xl h-full">
            <AnimatePresence mode="popLayout" initial={false}>
              {[-1, 0, 1].map((offset) => {
                const projectIndex = getIndex(offset);
                const project = filteredProjects[projectIndex];
                
                return (
                  <motion.div
                    key={`${project.title}-${offset}`}
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ 
                      opacity: offset === 0 ? 1 : 0.08, 
                      scale: offset === 0 ? 1 : 0.75,
                      x: offset * (typeof window !== 'undefined' && window.innerWidth < 768 ? 140 : 450),
                      zIndex: offset === 0 ? 20 : 10,
                    }}
                    exit={{ opacity: 0, scale: 0.7 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute w-[240px] md:w-[420px] aspect-[3/4.2] rounded-[1.5rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.5)] bg-neutral-900 border border-white/5"
                  >
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* CENTER CARD OVERLAY */}
                    {offset === 0 && (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/20 to-transparent"
                      >
                        <div className="space-y-4 md:space-y-5">
                          <div className="text-center md:text-left">
                            <h3 className="text-xl md:text-3xl font-bold text-white leading-tight drop-shadow-md">
                              {project.title}
                            </h3>
                            <p className="text-[8px] md:text-[10px] tracking-[0.3em] text-white/50 uppercase mt-1">
                              {project.location}
                            </p>
                          </div>

                          <Link href={project.href}>
                            <button className="w-full bg-white py-3 md:py-4 rounded-full text-[9px] md:text-[10px] tracking-[0.2em] font-bold text-black uppercase flex items-center justify-center gap-2 shadow-xl hover:bg-neutral-200 transition-colors">
                              View <ArrowRight size={14} />
                            </button>
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* PAGINATION INDICATOR */}
        <div className="text-center mt-8 md:mt-12">
            <div className="flex items-center justify-center gap-4">
              <span className="w-8 h-[1px] bg-white/10"></span>
              <p className="text-[9px] md:text-[10px] tracking-[0.4em] text-white/30 uppercase">
                  {index + 1} <span className="mx-1">/</span> {filteredProjects.length}
              </p>
              <span className="w-8 h-[1px] bg-white/10"></span>
            </div>
        </div>

      </div>
    </section>
  );
}