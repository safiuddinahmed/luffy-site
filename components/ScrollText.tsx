"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ScrollText() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress for the entire container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Transform scroll progress to horizontal movement
  // Text 1 moves from left to right
  const text1X = useTransform(scrollYProgress, [0, 1], ["-50%", "50%"]);
  
  // Text 2 moves from right to left
  const text2X = useTransform(scrollYProgress, [0, 1], ["50%", "-50%"]);

  return (
    <div ref={containerRef} className="relative">
      {/* Spacer to allow scroll */}
      <div className="h-[150vh] relative">
        {/* Sticky container for animated text */}
        <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
          {/* Text Layer 1 - MONKEY D. LUFFY - Moving Right */}
          <motion.div
            style={{ x: text1X }}
            className="absolute top-[38%] left-1/2 -translate-x-1/2 whitespace-nowrap"
          >
            <h2 
              className="text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] xl:text-[8rem] font-bold tracking-tight leading-none text-black" 
              style={{ 
                fontFamily: 'var(--font-one-piece)'
              }}
            >
              MONKEY D. LUFFY
            </h2>
          </motion.div>

          {/* Text Layer 2 - FUTURE KING OF THE PIRATES - Moving Left */}
          <motion.div
            style={{ x: text2X }}
            className="absolute top-[52%] left-1/2 -translate-x-1/2 whitespace-nowrap"
          >
            <h2 
              className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[4rem] xl:text-[5rem] font-medium tracking-wide leading-none text-gray-600" 
              style={{ 
                fontFamily: 'var(--font-one-piece)'
              }}
            >
              FUTURE KING OF THE PIRATES
            </h2>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
