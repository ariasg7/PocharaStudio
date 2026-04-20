"use client";

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, ArrowRight, X } from 'lucide-react';

const ALL_PROJECTS = [
  { 
    id: "hudson", 
    title: "The Hudson Valley", 
    category: "Weddings", 
    image: "/img/insta/insta1.webp", 
    location: "Upstate NY",
    // Mock gallery images for this specific project
    gallery: ["/img/insta/insta1.webp", "/img/insta/insta2.webp", "/img/insta/insta3.webp", "/img/insta/insta4.webp"] 
  },
  { 
    id: "soho",
    title: "SoHo Streets", 
    category: "Engagements", 
    image: "/img/insta/insta2.webp", 
    location: "Manhattan",
    gallery: ["/img/insta/insta2.webp", "/img/hero/img1.webp", "/img/hero/img3.webp"] 
  },
  // ... rest of projects
];

const FILTERS = ["All", "Weddings", "Engagements", "City Hall"];

export function PortfolioPreview() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [index, setIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState<null | typeof ALL_PROJECTS[0]>(null);

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
  const getIndex = (offset: number) => (index + offset + filteredProjects.length) % filteredProjects.length;

  return (
    <section id="gallery" className="bg-[#1a1a1a] py-12 md:py-32 px-4 md:px-6 overflow-hidden relative min-h-screen flex flex-col justify-center">
      
      {/* 1. THE CAROUSEL VIEW (Only shown when nothing is expanded) */}
      <AnimatePresence>
        {!isExpanded && (
          <motion.div 
            exit={{ opacity: 0, scale: 0.9 }}
            className="max-w-[1400px] mx-auto relative z-10 w-full"
          >
            {/* HEADER */}
            <div className="text-center mb-12 space-y-4">
              <span className="text-[10px] tracking-[0.6em] text-white/40 uppercase font-light">Selected Works</span>
              <h2 className="text-6xl md:text-9xl text-white font-serif italic" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Visual Diary
              </h2>
            </div>

            {/* CAROUSEL */}
            <div className="relative flex items-center justify-center h-[500px] md:h-[700px] w-full">
              {/* NAV ARROWS */}
              <div className="absolute inset-0 flex items-center justify-between z-[60] pointer-events-none px-4">
                <button onClick={prevStep} className="pointer-events-auto w-12 h-12 rounded-full border border-white/10 text-white hover:bg-white hover:text-black transition-all">
                  <ChevronLeft size={24} />
                </button>
                <button onClick={nextStep} className="pointer-events-auto w-12 h-12 rounded-full border border-white/10 text-white hover:bg-white hover:text-black transition-all">
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* CENTER CARD */}
              <div className="relative flex items-center justify-center w-full max-w-5xl h-full">
                {[-1, 0, 1].map((offset) => {
                  const project = filteredProjects[getIndex(offset)];
                  if (!project) return null;

                  return (
                    <motion.div
                      key={project.id + offset}
                      layoutId={offset === 0 ? `card-${project.id}` : undefined}
                      animate={{ 
                        opacity: offset === 0 ? 1 : 0.1, 
                        scale: offset === 0 ? 1 : 0.8,
                        x: offset * (window.innerWidth < 768 ? 160 : 450),
                        zIndex: offset === 0 ? 20 : 10,
                      }}
                      className="absolute w-[280px] md:w-[450px] aspect-[3/4.2] rounded-[2rem] overflow-hidden bg-neutral-900 border border-white/10 cursor-pointer"
                    >
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                      
                      {offset === 0 && (
                        <div className="absolute inset-0 flex flex-col justify-end p-10 bg-gradient-to-t from-[#1a1a1a] to-transparent">
                          <h3 className="text-3xl font-bold text-white mb-6">{project.title}</h3>
                          <button 
                            onClick={() => setIsExpanded(project)}
                            className="w-full bg-white py-4 rounded-full text-[10px] tracking-[0.2em] font-bold text-black flex items-center justify-center gap-2"
                          >
                            VIEW FULL STORY <ArrowRight size={14} />
                          </button>
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. THE EXPANDED GALLERY VIEW */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#1a1a1a] overflow-y-auto"
          >
            {/* CLOSE BUTTON */}
            <button 
              onClick={() => setIsExpanded(null)}
              className="fixed top-10 right-10 z-[110] w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
            >
              <X size={24} />
            </button>

            {/* EXPANDED CONTENT */}
            <div className="max-w-5xl mx-auto py-24 px-6">
              <motion.div 
                layoutId={`card-${isExpanded.id}`}
                className="mb-20 text-center"
              >
                <span className="text-[10px] tracking-[0.6em] text-white/40 uppercase mb-4 block">Project Details</span>
                <h2 className="text-5xl md:text-7xl text-white font-serif italic mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  {isExpanded.title}
                </h2>
                <p className="text-white/40 text-xs tracking-widest uppercase">{isExpanded.location}</p>
              </motion.div>

              {/* IMAGE GRID - This is where the specific portfolio lives */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {isExpanded.gallery?.map((img, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="aspect-[3/4] bg-neutral-900 overflow-hidden rounded-lg"
                  >
                    <img src={img} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Gallery item" />
                  </motion.div>
                ))}
              </div>

              {/* FOOTER CTA */}
              <div className="mt-32 text-center pb-20">
                 <button 
                   onClick={() => setIsExpanded(null)}
                   className="text-white/40 hover:text-white transition-colors tracking-[0.4em] text-[10px]"
                 >
                    BACK TO DIARY
                 </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}