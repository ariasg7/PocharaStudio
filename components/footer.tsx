"use client";

import { motion } from 'framer-motion';
//import { ImageWithFallback } from './figma/ImageWithFallback';

const INSTAGRAM_POSTS = [
  { id: 1, url: 'https://images.unsplash.com/photo-1763140615918-a4af28eb6a71?auto=format&fit=crop&q=80&w=600', likes: 234, comments: 12 },
  { id: 2, url: 'https://images.unsplash.com/photo-1772634734681-d56e32b9e074?auto=format&fit=crop&q=80&w=600', likes: 189, comments: 8 },
  { id: 3, url: 'https://images.unsplash.com/photo-1770199780470-1e6e3d30f8f8?auto=format&fit=crop&q=80&w=600', likes: 412, comments: 24 },
  { id: 4, url: 'https://images.unsplash.com/photo-1646679080828-a04816f77c98?auto=format&fit=crop&q=80&w=600', likes: 156, comments: 5 },
  { id: 5, url: 'https://images.unsplash.com/photo-1652107258371-da96c470b245?auto=format&fit=crop&q=80&w=600', likes: 302, comments: 19 },
  { id: 6, url: 'https://images.unsplash.com/photo-1730175602795-138827f9623f?auto=format&fit=crop&q=80&w=600', likes: 277, comments: 14 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="inquire" className="relative bg-[#f5f1ec] px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        
        {/* SECTION HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl lg:text-6xl text-[#2d3436] mb-6 relative inline-block italic"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            FOLLOW THE JOURNEY
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-px bg-[#2d3436]" />
          </h2>
        </motion.div>

        {/* INSTAGRAM GRID */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-24"
        >
          {INSTAGRAM_POSTS.map((post) => (
            <motion.div
              key={post.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="relative group cursor-pointer overflow-hidden aspect-square bg-gray-200"
            >
              {/*<ImageWithFallback
                src={post.url}
                alt={`Portfolio selection ${post.id}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              /> */}
              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-[2px]">
                <div className="text-white text-center font-light tracking-widest text-xs">
                  <p>VIEW ON INSTAGRAM</p>
                  <div className="flex gap-4 mt-2 justify-center opacity-80">
                    <span>❤️ {post.likes}</span>
                    <span>💬 {post.comments}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CALL TO ACTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <p
            className="text-3xl md:text-5xl text-[#2d3436] mb-10"
            style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
          >
            Ready to Tell Your Story?
          </p>
          <button className="group relative overflow-hidden bg-[#2d3436] text-white px-12 py-5 text-sm tracking-[0.3em] transition-all hover:bg-[#1a1a1a]">
            <span className="relative z-10">INQUIRE HERE</span>
          </button>
        </motion.div>

        {/* COPYRIGHT */}
        <div className="mt-32 pt-8 border-t border-[#2d3436]/10 text-center">
          <p className="text-[10px] md:text-xs text-[#2d3436]/50 tracking-[0.2em] uppercase">
            © {currentYear} ALINA DELFINO PHOTOGRAPHY — ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
}