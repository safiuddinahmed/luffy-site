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
    <div ref={containerRef} className="relative bg-gray-50">
      {/* Lando-Style Animated Background Patterns */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Layer 1: Flowing Lines */}
        <motion.svg 
          className="absolute inset-0 w-full h-full opacity-[0.25]"
          xmlns="http://www.w3.org/2000/svg"
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <defs>
            <pattern id="lines-scroll" x="0" y="0" width="600" height="600" patternUnits="userSpaceOnUse">
              <path d="M 0 300 Q 150 250, 300 300 T 600 300" fill="none" stroke="#000" strokeWidth="1.5" opacity="0.4"/>
              <path d="M 0 320 Q 150 270, 300 320 T 600 320" fill="none" stroke="#000" strokeWidth="1" opacity="0.3"/>
              <path d="M 300 0 Q 250 150, 300 300 T 300 600" fill="none" stroke="#000" strokeWidth="1.5" opacity="0.4"/>
              <circle cx="150" cy="150" r="40" fill="none" stroke="#000" strokeWidth="1" opacity="0.3"/>
              <circle cx="450" cy="450" r="50" fill="none" stroke="#000" strokeWidth="1" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#lines-scroll)" />
        </motion.svg>

        {/* Layer 2: Organic Shapes */}
        <motion.svg 
          className="absolute inset-0 w-full h-full opacity-[0.20]"
          xmlns="http://www.w3.org/2000/svg"
          animate={{
            x: [0, -25, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <defs>
            <pattern id="organic-scroll" x="0" y="0" width="800" height="800" patternUnits="userSpaceOnUse">
              <motion.path
                d="M 200 400 Q 300 350, 400 400 Q 500 450, 600 400"
                fill="none"
                stroke="#000"
                strokeWidth="2"
                opacity="0.5"
                animate={{
                  d: [
                    "M 200 400 Q 300 350, 400 400 Q 500 450, 600 400",
                    "M 200 400 Q 300 450, 400 400 Q 500 350, 600 400",
                    "M 200 400 Q 300 350, 400 400 Q 500 450, 600 400"
                  ]
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <ellipse cx="400" cy="200" rx="80" ry="50" fill="none" stroke="#000" strokeWidth="1.5" opacity="0.4"/>
              <ellipse cx="400" cy="600" rx="60" ry="40" fill="none" stroke="#000" strokeWidth="1.5" opacity="0.4"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#organic-scroll)" />
        </motion.svg>

        {/* Layer 3: Subtle Grid */}
        <motion.svg 
          className="absolute inset-0 w-full h-full opacity-[0.15]"
          xmlns="http://www.w3.org/2000/svg"
          animate={{
            rotate: [0, 2, 0],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <defs>
            <pattern id="grid-scroll" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#000" strokeWidth="0.5" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-scroll)" />
        </motion.svg>
      </div>

      {/* Spacer to allow scroll */}
      <div className="h-[150vh] relative">
        {/* Sticky container for animated text */}
        <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
          {/* Text Layer 1 - MONKEY D. LUFFY - Moving Right */}
          <motion.div
            style={{ x: text1X }}
            className="absolute top-[38%] left-1/2 -translate-x-1/2 whitespace-nowrap"
          >
            <h2 className="text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] xl:text-[8rem] font-semibold tracking-tight leading-none text-black" style={{ fontFamily: 'var(--font-one-piece)' }}>
              MONKEY D. LUFFY
            </h2>
          </motion.div>

          {/* Text Layer 2 - FUTURE KING OF THE PIRATES - Moving Left */}
          <motion.div
            style={{ x: text2X }}
            className="absolute top-[52%] left-1/2 -translate-x-1/2 whitespace-nowrap"
          >
            <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[4rem] xl:text-[5rem] font-normal tracking-wide leading-none text-gray-700" style={{ fontFamily: 'var(--font-one-piece)' }}>
              FUTURE KING OF THE PIRATES
            </h2>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
