"use client";

import { motion } from 'framer-motion';

const ALL_IMAGES = [
  { url: "/img/insta/insta1.webp", size: "tall" },
  { url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800", size: "wide" },
  { url: "/img/insta/insta3.webp", size: "medium" },
  { url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800", size: "tall" },
  { url: "/img/insta/insta5.webp", size: "medium" },
  // ... more images
];

export function FullPortfolioGrid() {
  return (
    <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4 p-4 md:p-8 bg-[#1a1a1a]">
      {ALL_IMAGES.map((img, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="break-inside-avoid"
        >
          <img
            src={img.url}
            alt="Wedding gallery moment"
            className="w-full h-auto object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700 shadow-lg"
            loading="lazy"
          />
        </motion.div>
      ))}
    </div>
  );
}