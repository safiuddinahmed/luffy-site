"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { iconicMoments } from "@/data/moments";

export default function HorizontalGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress for horizontal movement
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Transform vertical scroll to horizontal movement
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);

  return (
    <div ref={containerRef} className="relative h-[350vh]">
      {/* Sticky container for the gallery */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Section Header */}
        <div className="absolute top-16 left-0 right-0 z-10 max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-black leading-tight" style={{ fontFamily: 'var(--font-one-piece)' }}>
              A JOURNEY THROUGH<br />
              <span className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[4rem] xl:text-[5rem] font-normal tracking-wide leading-none text-gray-700" style={{ fontFamily: 'var(--font-one-piece)' }}>
              LUFFY&apos;S LEGACY
            </span>
            </h2>
          </motion.div>
        </div>

        {/* Zigzag Gallery - All cards in one container, positioned individually */}
        <div className="absolute inset-0">
          <motion.div
            style={{ x }}
            className="relative h-full px-8"
          >
            {iconicMoments.map((moment, index) => {
              // Zigzag pattern: odd indices (0,2,4...) on top, even indices (1,3,5...) on bottom
              const isTopRow = index % 2 === 0;
              const horizontalPosition = 100 + (index * 420); // 100px left margin + 380px width + 40px gap
              
              return (
                <motion.div
                  key={moment.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="group absolute flex-shrink-0"
                  style={{
                    left: `${horizontalPosition}px`,
                    top: isTopRow ? '28%' : '62%',
                    transform: 'translateY(-50%)'
                  }}
                >
                  {/* Card Container */}
                  <div className="relative w-[380px] h-[420px] bg-white overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500">
                    {/* Image */}
                    <div className="relative w-full h-full">
                      <Image
                        src={moment.image}
                        alt={moment.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="380px"
                        loading="lazy"
                      />
                      
                      {/* Subtle overlay on hover */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                    </div>

                    {/* Info Overlay - Bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white via-white/98 to-transparent">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <p className="text-[10px] uppercase tracking-[0.25em] text-gray-500 mb-2 font-medium">
                          {moment.arc}
                        </p>
                        <h3 className="text-lg font-semibold text-black leading-tight mb-1.5">
                          {moment.title}
                        </h3>
                        <p className="text-sm text-gray-600 font-normal leading-relaxed">
                          {moment.description}
                        </p>
                      </motion.div>
                    </div>

                    {/* Minimal border */}
                    <div className="absolute inset-0 border border-gray-200/60 pointer-events-none" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Scroll Progress Indicator */}
        <div className="absolute bottom-4 left-0 right-0 z-10 max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 text-gray-500"
          >
            <div className="h-px w-16 bg-gray-300" />
            <p className="text-xs uppercase tracking-[0.25em] font-medium">
              Scroll to explore
            </p>
            <div className="flex-1 h-px bg-gray-200 relative overflow-hidden">
              <motion.div 
                className="absolute inset-y-0 left-0 bg-gray-400"
                style={{ 
                  width: useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
