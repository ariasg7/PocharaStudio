"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const NAV_LINKS = [
  { name: 'ABOUT ME', href: '#about-me' },
  { name: 'SERVICES', href: '#services'},
  { name: 'GALLERY', href: '#gallery' },
  { name: 'CONNECT', href: '#connect' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkText, setIsDarkText] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 1. Solid background trigger (scrolled 50px)
      setIsScrolled(window.scrollY > 50);

      // 2. Text color detection for visibility
      const lightSections = ['approach', 'services', 'about-me'];
      let overlayingLightSection = false;

      lightSections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 60 && rect.bottom >= 60) {
            overlayingLightSection = true;
          }
        }
      });

      setIsDarkText(overlayingLightSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 md:py-5 transition-all duration-500 
        ${isScrolled 
          ? 'bg-[#1a1a1a]/90 backdrop-blur-md shadow-lg border-b border-white/5' 
          : 'bg-transparent'
        }
        ${isDarkText && !isScrolled ? 'text-[#1a1a1a]' : 'text-white'}`}
      >
        <div className="flex items-center justify-between">
          
          <Link 
            href="/#hero" 
            className="flex items-center gap-3 cursor-pointer group" 
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            <div className="text-2xl md:text-3xl tracking-tight group-hover:opacity-70 transition-opacity font-medium">
              PS
            </div>
            <div className="hidden md:block text-xs tracking-[0.3em] font-light uppercase group-hover:opacity-70 transition-opacity">
              Pochara STUDIO
            </div>
          </Link>

          {/* NAV (Desktop) */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-[10px] tracking-[0.3em] font-medium hover:opacity-50 transition-opacity"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* MOBILE TOGGLE */}
          <button 
            onClick={() => setIsMenuOpen(true)} 
            className="md:hidden p-2 transition-colors"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-[#1a1a1a] text-white z-[60] flex flex-col items-center justify-center"
          >
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors">
              <X size={32} />
            </button>
            <nav className="flex flex-col items-center gap-10">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-4xl tracking-widest font-light italic"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}