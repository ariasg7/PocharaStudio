"use client";

import Link from 'next/link';

const FOOTER_LINKS = [
  { name: 'ABOUT ME', href: '/#about-me' },
  { name: 'SERVICES', href: '/#services' },
  { name: 'GALLERY', href: '/gallery' },
  { name: 'REVIEWS', href: '/#reviews' },
  { name: 'CONNECT', href: '/#connect' }
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // 🛠️ Optimized mobile padding: dropped vertical padding on mobile (pt-16 pb-8) to keep it tight
    <footer className="bg-[#faf9f6] pt-16 pb-8 md:pt-24 md:pb-12 px-6 border-t border-black/[0.03]">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* BRANDING BLOCK */}
        {/* 🛠️ Normalized spacing: reduced mb-16 down to mb-12 on mobile for better screenspace budgeting */}
        <div className="text-center mb-12 md:mb-16">
          <Link 
            href="/#hero" 
            className="flex flex-col items-center group gap-4"
          >
            <div className="overflow-hidden flex items-center justify-center">
              <img 
                src="/img/logo/PocharaStudioBlack.webp" 
                alt="Pochara Studio Logo" 
                className="w-[110px] md:w-[160px] h-auto object-contain group-hover:scale-105 transition-transform duration-300" 
              />
            </div>

            <p className="text-[10px] tracking-[0.4em] text-[#1a1a1a]/40 uppercase group-hover:opacity-100 transition-opacity">
              Pochara STUDIO
            </p>
          </Link>
        </div>

        {/* FOOTER NAV / QUICK LINKS */}
        {/* 🛠️ UX Fix: Converts from a vertical stack on mobile to a clean row on desktop. Added py-2 for easy thumbs tapping */}
        <nav className="flex flex-col md:flex-row items-center justify-center text-center gap-y-5 md:gap-x-10 md:gap-y-0 mb-12 md:mb-16 w-full">
          {FOOTER_LINKS.map((link) => (
            <Link 
              key={link.name}
              href={link.href}
              className="text-[10px] tracking-[0.2em] text-[#1a1a1a]/60 hover:text-black uppercase transition-colors block py-2 md:py-0 w-full md:w-auto"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* BOTTOM BAR */}
        {/* 🛠️ Mobile Layout Fix: Forced text-center on mobile, stacked elements, and reversed order (gap-y-8) to keep utility links clear */}
        <div className="w-full pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-y-6 md:gap-y-0">
          
          {/* Secondary Legal Links */}
          <div className="flex items-center justify-center gap-8 order-1 md:order-2">
            <Link href="/privacy" className="text-[9px] text-[#1a1a1a]/30 hover:text-black tracking-[0.2em] transition-colors py-1">
              PRIVACY POLICY
            </Link>
            <Link href="/terms" className="text-[9px] text-[#1a1a1a]/30 hover:text-black tracking-[0.2em] transition-colors py-1">
              TERMS OF SERVICE
            </Link>
          </div>

          {/* Copyright Stamp */}
          <p className="text-[9px] md:text-[10px] text-[#1a1a1a]/30 tracking-[0.2em] uppercase text-center md:text-left order-2 md:order-1">
            © {currentYear} POCHARA PHOTOGRAPHY — ALL RIGHTS RESERVED
          </p>
          
        </div>

      </div>
    </footer>
  );
}