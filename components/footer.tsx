"use client";

import { motion } from 'framer-motion';

const INSTAGRAM_POSTS = [
  // Add the specific Instagram post URLs here
  { id: 1, url: '/img/insta/insta1.webp', link: 'https://www.instagram.com/p/DRrvc1Nkf-R/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==', likes: 24, comments: 8 },
  { id: 2, url: '/img/insta/insta2.webp', link: 'https://www.instagram.com/p/DSL4JOrkSUF/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==', likes: 10, comments: 0 },
  { id: 3, url: '/img/insta/insta3.webp', link: 'https://www.instagram.com/p/DPztO6EkfoF/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==', likes: 16, comments: 0 },
  { id: 4, url: '/img/insta/insta4.webp', link: 'https://www.instagram.com/p/DOUFVelEdHF/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==', likes: 34, comments: 0 },
  { id: 5, url: '/img/insta/insta5.webp', link: 'https://www.instagram.com/p/DS-8joBkWne/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==', likes: 37, comments: 2 },
  { id: 6, url: '/img/insta/insta6.webp', link: 'https://www.instagram.com/p/DOUF1BkEXMW/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==', likes: 33, comments: 4 },
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
            <motion.a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="relative group cursor-pointer overflow-hidden aspect-square bg-gray-200 block"
            >
              <img
                src={post.url}
                alt={`Portfolio selection ${post.id}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
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
            </motion.a>
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
          
          {/* Changed to anchor tag for the external or internal link */}
          <a 
            href="mailto:hello@pocharastudio.com" // Or your contact page route
            className="group relative inline-block overflow-hidden bg-[#2d3436] text-white px-12 py-5 text-sm tracking-[0.3em] transition-all hover:bg-[#1a1a1a]"
          >
            <span className="relative z-10">INQUIRE HERE</span>
          </a>
        </motion.div>

        {/* COPYRIGHT */}
        <div className="mt-32 pt-8 border-t border-[#2d3436]/10 text-center">
          <p className="text-[10px] md:text-xs text-[#2d3436]/50 tracking-[0.2em] uppercase">
            © {currentYear} POCHARA PHOTOGRAPHY — ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
}