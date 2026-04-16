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
    <section className="bg-white py-32 px-6 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        {/* HEADER & FILTERS */}
        <div className="text-center mb-16 space-y-6">
          <div className="space-y-2">
            <span className="text-[10px] tracking-[0.4em] text-black/40 uppercase font-medium">Gallery</span>
            <h2 className="text-4xl md:text-5xl text-black font-serif font-bold">My Visual Diary</h2>
            <p className="text-black/50 text-xs tracking-wide">See the world through my lens: adventures in photos and videos.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterChange(filter)}
                className={`px-5 py-2 rounded-full text-[10px] font-semibold tracking-wider transition-all duration-300 border ${
                  activeFilter === filter 
                    ? "bg-[#1a1c2e] text-white border-[#1a1c2e]" 
                    : "bg-white text-black/60 border-black/10 hover:border-black/30"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* CAROUSEL VIEWPORT */}
        <div className="relative flex items-center justify-center h-[500px] md:h-[650px] w-full">
          
          {/* NAVIGATION BUTTONS */}
          <div className="absolute inset-0 flex items-center justify-between px-2 md:px-24 z-[60] pointer-events-none">
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevStep}
              className="pointer-events-auto w-16 h-16 rounded-full bg-white/90 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.15)] border border-black/5 flex items-center justify-center text-black transition-all duration-300 group"
            >
              <ChevronLeft size={32} strokeWidth={1.5} />
            </motion.button>

            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextStep}
              className="pointer-events-auto w-16 h-16 rounded-full bg-white/90 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.15)] border border-black/5 flex items-center justify-center text-black transition-all duration-300 group"
            >
              <ChevronRight size={32} strokeWidth={1.5} />
            </motion.button>
          </div>

          {/* THE CARDS */}
          <div className="relative flex items-center justify-center w-full max-w-4xl h-full">
            <AnimatePresence mode="popLayout" initial={false}>
              {[-1, 0, 1].map((offset) => {
                const projectIndex = getIndex(offset);
                const project = filteredProjects[projectIndex];
                
                return (
                  <motion.div
                    key={`${project.title}-${offset}`}
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ 
                      opacity: offset === 0 ? 1 : 0.3, 
                      scale: offset === 0 ? 1 : 0.8,
                      x: offset * (typeof window !== 'undefined' && window.innerWidth < 768 ? 220 : 420),
                      zIndex: offset === 0 ? 20 : 10,
                    }}
                    exit={{ opacity: 0, scale: 0.7 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute w-[280px] md:w-[400px] aspect-[3/4.2] rounded-[2.5rem] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.18)] bg-neutral-100"
                  >
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* CENTER CARD OVERLAY */}
                    {offset === 0 && (
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute inset-0 flex flex-col justify-end p-10 bg-gradient-to-t from-black/80 via-transparent to-transparent"
                      >
                        <div className="space-y-4">
                          <div>
                            <Link href={project.href} className="group/title inline-block">
                              <h3 className="text-3xl font-bold text-white drop-shadow-lg group-hover/title:text-white/80 transition-colors">
                                {project.title}
                              </h3>
                            </Link>
                            <p className="text-[11px] tracking-[0.3em] text-white/70 uppercase font-medium mt-1">
                              {project.location}
                            </p>
                          </div>

                          <Link href={project.href}>
                            <motion.button
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className="w-full bg-white py-4 rounded-xl text-[10px] tracking-[0.2em] font-bold text-black uppercase flex items-center justify-center gap-3 shadow-xl hover:bg-neutral-100 transition-colors"
                            >
                              View This Gallery
                              <ArrowRight size={14} />
                            </motion.button>
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

        {/* BOTTOM NAV HINT */}
        <div className="text-center mt-12">
            <p className="text-[10px] tracking-[0.4em] text-black/20 uppercase">
                {index + 1} / {filteredProjects.length} Stories
            </p>
        </div>

      </div>
    </section>
  );
}