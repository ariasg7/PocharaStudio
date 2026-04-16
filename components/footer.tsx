"use client";

import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#faf9f6] pt-24 pb-12 px-6 border-t border-black/[0.03]">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* BRANDING BLOCK */}
        <div className="text-center mb-16 space-y-4">
          <Link 
            href="/#hero" 
            className="inline-block group"
          >
            <h2 
              className="text-3xl md:text-4xl tracking-tighter text-[#1a1a1a] group-hover:opacity-60 transition-opacity"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              PS
            </h2>
            <p className="text-[10px] tracking-[0.4em] text-[#1a1a1a]/40 uppercase mt-2 group-hover:opacity-100 transition-opacity">
              Pochara STUDIO
            </p>
          </Link>
        </div>

        {/* FOOTER NAV / QUICK LINKS */}
        <nav className="flex flex-wrap justify-center gap-x-10 gap-y-4 mb-16">
          {['About', 'Portfolio', 'Services', 'Contact'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[10px] tracking-[0.2em] text-[#1a1a1a]/60 hover:text-black uppercase transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* BOTTOM BAR */}
        <div className="w-full pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] md:text-[10px] text-[#1a1a1a]/30 tracking-[0.2em] uppercase">
            © {currentYear} POCHARA PHOTOGRAPHY — ALL RIGHTS RESERVED
          </p>
          
          <div className="flex items-center gap-8">
            <a href="#" className="text-[9px] text-[#1a1a1a]/30 hover:text-black tracking-[0.2em] transition-colors">
              PRIVACY POLICY
            </a>
            <a href="#" className="text-[9px] text-[#1a1a1a]/30 hover:text-black tracking-[0.2em] transition-colors">
              TERMS OF SERVICE
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}