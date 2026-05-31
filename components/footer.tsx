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
    <footer className="bg-[#faf9f6] pt-16 pb-8 md:pt-24 md:pb-12 px-6 border-t border-black/[0.03]">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* BRANDING BLOCK */}
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

            {/* ⚡ Contrast Fix: Shifted from /40 opacity to text-neutral-500 for clear readability */}
            <p className="text-[10px] tracking-[0.4em] text-neutral-500 uppercase group-hover:text-black transition-colors">
              Pochara STUDIO
            </p>
          </Link>
        </div>

        {/* FOOTER NAV / QUICK LINKS */}
        <nav className="flex flex-col md:flex-row items-center justify-center text-center gap-y-5 md:gap-x-10 md:gap-y-0 mb-12 md:mb-16 w-full">
          {FOOTER_LINKS.map((link) => (
            <Link 
              key={link.name}
              href={link.href}
              /* ⚡ Contrast Fix: Upgraded from /60 opacity to a highly readable text-neutral-600 baseline */
              className="text-[10px] tracking-[0.2em] text-neutral-600 hover:text-black uppercase transition-colors block py-2 md:py-0 w-full md:w-auto font-medium"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* BOTTOM BAR */}
        <div className="w-full pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-y-6 md:gap-y-0">
          
          {/* Secondary Legal Links */}
          <div className="flex items-center justify-center gap-8 order-1 md:order-2">
            {/* ⚡ Contrast Fix: Shifted from ultra-faint /30 to text-neutral-500 */}
            <Link href="/privacy" className="text-[9px] text-neutral-500 hover:text-black tracking-[0.2em] transition-colors py-1 font-medium">
              PRIVACY POLICY
            </Link>
            <Link href="/terms" className="text-[9px] text-neutral-500 hover:text-black tracking-[0.2em] transition-colors py-1 font-medium">
              TERMS OF SERVICE
            </Link>
          </div>

          {/* Copyright Stamp */}
          {/* ⚡ Contrast Fix: Swapped from /30 to text-neutral-500 to cleanly pass the WCAG audit */}
          <p className="text-[9px] md:text-[10px] text-neutral-500 tracking-[0.2em] uppercase text-center md:text-left order-2 md:order-1 font-medium">
            © {currentYear} POCHARA PHOTOGRAPHY — ALL RIGHTS RESERVED
          </p>
          
        </div>

      </div>
    </footer>
  );
}