"use client";

import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, ArrowRight, X } from 'lucide-react';

// HELPER: Automatically creates paths for img1.webp, img2.webp, etc.
const generateGallery = (folderName: string, totalImages: number) => {
  return Array.from({ length: totalImages }, (_, i) => `/img/gallery/${folderName}/img${i + 1}.webp`);
};

const ALL_PROJECTS = [
  { 
    id: "city-hall-1", 
    title: "NYC City Hall", 
    category: "City Hall", 
    image: "/img/gallery/CityHall1/img1.webp",
    location: "Lower Manhattan",
    gallery: generateGallery("CityHall1", 16) 
  },
  { 
    id: "soho-streets",
    title: "SoHo Streets", 
    category: "Engagements", 
    image: "/img/insta/insta2.webp", 
    location: "Manhattan",
    gallery: ["/img/insta/insta2.webp", "/img/hero/img1.webp", "/img/hero/img3.webp"] 
  }
];

const FILTERS = ["All", "Weddings", "Engagements", "City Hall"];

export function PortfolioPreview() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [index, setIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState<null | typeof ALL_PROJECTS[0]>(null);

  // Filter Logic
  const filteredProjects = useMemo(() => {
    return activeFilter === "All" 
      ? ALL_PROJECTS 
      : ALL_PROJECTS.filter(p => p.category === activeFilter);
  }, [activeFilter]);

  // Navigation Logic
  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setIndex(0); 
  };

  const nextStep = () => {
    if (filteredProjects.length === 0) return;
    setIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const prevStep = () => {
    if (filteredProjects.length === 0) return;
    setIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  const getIndex = (offset: number) => {
    if (filteredProjects.length === 0) return 0;
    return (index + offset + filteredProjects.length) % filteredProjects.length;
  };

  // Close on Escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsExpanded(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <section id="gallery" className="bg-[#1a1a1a] py-12 md:py-32 px-4 md:px-6 overflow-hidden relative min-h-screen flex flex-col justify-center">
      
      <AnimatePresence mode="wait">
        {!isExpanded ? (
          <motion.div 
            key="carousel-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="max-w-[1400px] mx-auto relative z-10 w-full"
          >
            {/* HEADER & FILTERS */}
            <div className="text-center mb-16 space-y-8">
              <div className="space-y-2">
                <span className="text-[10px] tracking-[0.6em] text-white/40 uppercase font-light">Selected Works</span>
                <h2 className="text-6xl md:text-9xl text-white font-serif italic" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  Visual Diary
                </h2>
              </div>

              <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
                {FILTERS.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => handleFilterChange(filter)}
                    className={`text-[10px] tracking-[0.3em] uppercase transition-all duration-500 pb-2 border-b ${
                      activeFilter === filter 
                        ? "text-white border-white" 
                        : "text-white/30 border-transparent hover:text-white/60"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </nav>
            </div>

            {/* CAROUSEL BODY */}
            {filteredProjects.length > 0 ? (
              <div className="relative flex items-center justify-center h-[500px] md:h-[700px] w-full">
                {/* NAV ARROWS */}
                <div className="absolute inset-0 flex items-center justify-between z-[60] pointer-events-none px-4">
                  <button onClick={prevStep} className="pointer-events-auto w-12 h-12 rounded-full border border-white/10 text-white hover:bg-white hover:text-black transition-all flex items-center justify-center">
                    <ChevronLeft size={24} />
                  </button>
                  <button onClick={nextStep} className="pointer-events-auto w-12 h-12 rounded-full border border-white/10 text-white hover:bg-white hover:text-black transition-all flex items-center justify-center">
                    <ChevronRight size={24} />
                  </button>
                </div>

                {/* CARDS */}
                <div className="relative flex items-center justify-center w-full max-w-5xl h-full">
                  {[-1, 0, 1].map((offset) => {
                    const project = filteredProjects[getIndex(offset)];
                    if (!project) return null;

                    return (
                      <motion.div
                        key={`${project.id}-${activeFilter}-${offset}`}
                        layoutId={offset === 0 ? `card-${project.id}` : undefined}
                        animate={{ 
                          opacity: offset === 0 ? 1 : 0.1, 
                          scale: offset === 0 ? 1 : 0.8,
                          x: offset * (typeof window !== 'undefined' && window.innerWidth < 768 ? 160 : 450),
                          zIndex: offset === 0 ? 20 : 10,
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="absolute w-[280px] md:w-[450px] aspect-[3/4.2] rounded-[2rem] overflow-hidden bg-neutral-900 border border-white/10 cursor-pointer shadow-2xl"
                      >
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                        
                        {offset === 0 && (
                          <div className="absolute inset-0 flex flex-col justify-end p-10 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/20 to-transparent">
                            <p className="text-[10px] tracking-[0.3em] text-white/50 mb-2 uppercase">{project.category}</p>
                            <h3 className="text-3xl font-bold text-white mb-6">{project.title}</h3>
                            <button 
                              onClick={() => setIsExpanded(project)}
                              className="w-full bg-white py-4 rounded-full text-[10px] tracking-[0.2em] font-bold text-black flex items-center justify-center gap-2 hover:bg-neutral-100 transition-colors"
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
            ) : (
              <div className="h-[400px] flex items-center justify-center text-white/20 tracking-widest uppercase text-xs">
                Coming Soon to this category
              </div>
            )}
          </motion.div>
        ) : (
          /* EXPANDED GALLERY VIEW */
          <motion.div 
            key="gallery-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#1a1a1a] overflow-y-auto"
          >
            <button 
              onClick={() => setIsExpanded(null)}
              className="fixed top-10 right-10 z-[110] w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
            >
              <X size={24} />
            </button>

            <div className="max-w-6xl mx-auto py-24 px-6">
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

              {/* Masonry Style Grid */}
              <div className="columns-1 md:columns-2 gap-8 space-y-8">
                {isExpanded.gallery?.map((img, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: i * 0.1,
                      ease: [0.215, 0.61, 0.355, 1] 
                    }}
                    className="break-inside-avoid rounded-sm overflow-hidden bg-neutral-900 border border-white/5"
                  >
                    <img src={img} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" alt="Gallery shot" />
                  </motion.div>
                ))}
              </div>

              <div className="mt-32 text-center pb-20">
                 <button 
                   onClick={() => setIsExpanded(null)}
                   className="text-white/40 hover:text-white transition-colors tracking-[0.4em] text-[10px] uppercase underline underline-offset-8"
                 >
                    Back to Diary
                 </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}