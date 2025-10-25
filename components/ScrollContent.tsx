"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ScrollContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress for the entire container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Transform scroll progress to horizontal movement
  // Text 1 moves from left to right (starts centered, moves right)
  const text1X = useTransform(scrollYProgress, [0, 1], ["-50%", "50%"]);
  
  // Text 2 moves from right to left (starts centered, moves left)
  const text2X = useTransform(scrollYProgress, [0, 1], ["50%", "-50%"]);

  return (
    <div ref={containerRef} className="relative bg-white">
      {/* Animated Topographic Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated SVG topographic pattern */}
        <motion.svg 
          className="absolute inset-0 w-full h-full opacity-30"
          xmlns="http://www.w3.org/2000/svg"
          animate={{
            x: [0, 20, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <defs>
            <pattern id="topo" x="0" y="0" width="400" height="400" patternUnits="userSpaceOnUse">
              {/* Organic contour shapes */}
              <path d="M 50 200 Q 100 150, 150 200 T 250 200 T 350 200" fill="none" stroke="#1f2937" strokeWidth="2" opacity="0.6"/>
              <path d="M 40 210 Q 90 160, 140 210 T 240 210 T 340 210" fill="none" stroke="#1f2937" strokeWidth="1.5" opacity="0.5"/>
              <path d="M 30 220 Q 80 170, 130 220 T 230 220 T 330 220" fill="none" stroke="#1f2937" strokeWidth="1" opacity="0.4"/>
              
              <path d="M 200 50 Q 250 100, 200 150 T 200 250 T 200 350" fill="none" stroke="#1f2937" strokeWidth="2" opacity="0.6"/>
              <path d="M 210 40 Q 260 90, 210 140 T 210 240 T 210 340" fill="none" stroke="#1f2937" strokeWidth="1.5" opacity="0.5"/>
              <path d="M 220 30 Q 270 80, 220 130 T 220 230 T 220 330" fill="none" stroke="#1f2937" strokeWidth="1" opacity="0.4"/>
              
              {/* Circular contours */}
              <circle cx="100" cy="100" r="30" fill="none" stroke="#1f2937" strokeWidth="2" opacity="0.5"/>
              <circle cx="100" cy="100" r="40" fill="none" stroke="#1f2937" strokeWidth="1.5" opacity="0.4"/>
              <circle cx="100" cy="100" r="50" fill="none" stroke="#1f2937" strokeWidth="1" opacity="0.3"/>
              
              <circle cx="300" cy="300" r="35" fill="none" stroke="#1f2937" strokeWidth="2" opacity="0.5"/>
              <circle cx="300" cy="300" r="45" fill="none" stroke="#1f2937" strokeWidth="1.5" opacity="0.4"/>
              <circle cx="300" cy="300" r="55" fill="none" stroke="#1f2937" strokeWidth="1" opacity="0.3"/>
              
              {/* Irregular organic shapes */}
              <path d="M 150 300 Q 180 280, 200 300 Q 220 320, 250 300 Q 270 280, 280 310 Q 260 340, 230 330 Q 200 320, 180 340 Q 160 320, 150 300" fill="none" stroke="#1f2937" strokeWidth="2" opacity="0.5"/>
              <path d="M 145 295 Q 175 275, 195 295 Q 215 315, 245 295 Q 265 275, 275 305 Q 255 335, 225 325 Q 195 315, 175 335 Q 155 315, 145 295" fill="none" stroke="#1f2937" strokeWidth="1" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#topo)" />
        </motion.svg>

        {/* Second layer with different animation */}
        <motion.svg 
          className="absolute inset-0 w-full h-full opacity-10"
          xmlns="http://www.w3.org/2000/svg"
          animate={{
            x: [0, -15, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <defs>
            <pattern id="topo2" x="0" y="0" width="350" height="350" patternUnits="userSpaceOnUse">
              <ellipse cx="175" cy="175" rx="60" ry="40" fill="none" stroke="#374151" strokeWidth="2" opacity="0.6"/>
              <ellipse cx="175" cy="175" rx="70" ry="50" fill="none" stroke="#374151" strokeWidth="1.5" opacity="0.4"/>
              <ellipse cx="175" cy="175" rx="80" ry="60" fill="none" stroke="#374151" strokeWidth="1" opacity="0.3"/>
              
              <path d="M 50 100 Q 100 80, 150 100 Q 200 120, 250 100 Q 300 80, 320 110" fill="none" stroke="#374151" strokeWidth="1.5" opacity="0.5"/>
              <path d="M 50 250 Q 100 230, 150 250 Q 200 270, 250 250 Q 300 230, 320 260" fill="none" stroke="#374151" strokeWidth="1.5" opacity="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#topo2)" />
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
            <h2 className="text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] xl:text-[7rem] font-black tracking-tighter leading-none">
              <span className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 bg-clip-text text-transparent">
                MONKEY D. LUFFY
              </span>
            </h2>
          </motion.div>

          {/* Text Layer 2 - FUTURE KING OF THE PIRATES - Moving Left */}
          <motion.div
            style={{ x: text2X }}
            className="absolute top-[52%] left-1/2 -translate-x-1/2 whitespace-nowrap"
          >
            <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[4rem] xl:text-[5rem] font-black tracking-tighter leading-none">
              <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 bg-clip-text text-transparent">
                FUTURE KING OF THE PIRATES
              </span>
            </h2>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
