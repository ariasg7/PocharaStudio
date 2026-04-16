"use client";

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const PORTFOLIOS = [
  { title: "Hudson Valley", category: "Wedding", image: "/img/insta/insta1.webp", slug: "weddings" },
  { title: "SoHo Streets", category: "Engagement", image: "/img/insta/insta2.webp", slug: "engagement" },
  { title: "NYC City Hall", category: "Elopement", image: "/img/insta/insta3.webp", slug: "city-hall" }
];

export function PortfolioPreview() {
  return (
    <section className="bg-[#1a1a1a] py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-24 border-b border-white/10 pb-12">
          <h2 className="text-5xl md:text-8xl text-white italic font-serif">The Archive</h2>
          <Link href="/portfolio" className="group flex items-center gap-2 text-white/40 text-[10px] tracking-[0.4em] hover:text-white transition-all">
            ENTER FULL GALLERY <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {PORTFOLIOS.map((item, i) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className={`group ${i === 1 ? 'md:mt-24' : i === 2 ? 'md:mt-12' : ''}`}
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-neutral-800">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
              </div>
              <p className="text-[9px] tracking-[0.3em] text-white/30 uppercase">{item.category}</p>
              <h3 className="text-2xl text-white font-serif italic mt-2">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}