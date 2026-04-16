"use client";

import { motion } from 'framer-motion';

const INSTAGRAM_POSTS = [
  { id: 1, url: '/img/insta/insta1.webp', link: 'https://www.instagram.com/p/DRrvc1Nkf-R/', likes: 24, comments: 8 },
  { id: 2, url: '/img/insta/insta2.webp', link: 'https://www.instagram.com/p/DSL4JOrkSUF/', likes: 10, comments: 0 },
  { id: 3, url: '/img/insta/insta3.webp', link: 'https://www.instagram.com/p/DPztO6EkfoF/', likes: 16, comments: 0 },
  { id: 4, url: '/img/insta/insta4.webp', link: 'https://www.instagram.com/p/DOUFVelEdHF/', likes: 34, comments: 0 },
  { id: 5, url: '/img/insta/insta5.webp', link: 'https://www.instagram.com/p/DS-8joBkWne/', likes: 37, comments: 2 },
  { id: 6, url: '/img/insta/insta6.webp', link: 'https://www.instagram.com/p/DOUF1BkEXMW/', likes: 33, comments: 4 },
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

export function Connect() {
  return (
    <section id="connect" className="bg-[#faf9f6] px-6 md:px-12 py-24 md:pt-32 pb-12">
      <div className="max-w-7xl mx-auto">
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

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
        >
          {INSTAGRAM_POSTS.map((post) => (
            <motion.a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="relative group cursor-pointer overflow-hidden aspect-square bg-neutral-200 block"
            >
              <img
                src={post.url}
                alt={`Instagram ${post.id}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-[2px]">
                <div className="text-white text-center font-light tracking-widest text-[10px]">
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
      </div>
    </section>
  );
}