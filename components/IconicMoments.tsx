"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import MomentCard from "./MomentCard";
import { iconicMoments } from "@/data/moments";

export default function IconicMoments() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress for parallax effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax transforms for background layers
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div ref={containerRef} className="relative bg-black min-h-screen py-20 md:py-32 overflow-hidden">
      {/* Enhanced Animated Background - Ocean/Wave Theme */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Layer 1: Deep Ocean Waves */}
        <motion.svg 
          style={{ y: y1 }}
          className="absolute inset-0 w-full h-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern id="ocean-waves-1" x="0" y="0" width="800" height="600" patternUnits="userSpaceOnUse">
              {/* Flowing wave patterns */}
              <motion.path
                d="M 0 300 Q 200 250, 400 300 T 800 300"
                fill="none"
                stroke="#1e40af"
                strokeWidth="3"
                opacity="0.6"
                animate={{
                  d: [
                    "M 0 300 Q 200 250, 400 300 T 800 300",
                    "M 0 300 Q 200 350, 400 300 T 800 300",
                    "M 0 300 Q 200 250, 400 300 T 800 300"
                  ]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.path
                d="M 0 350 Q 200 300, 400 350 T 800 350"
                fill="none"
                stroke="#1e3a8a"
                strokeWidth="2"
                opacity="0.4"
                animate={{
                  d: [
                    "M 0 350 Q 200 300, 400 350 T 800 350",
                    "M 0 350 Q 200 400, 400 350 T 800 350",
                    "M 0 350 Q 200 300, 400 350 T 800 350"
                  ]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              {/* Circular ripples */}
              <circle cx="200" cy="200" r="80" fill="none" stroke="#1e40af" strokeWidth="2" opacity="0.3"/>
              <circle cx="200" cy="200" r="100" fill="none" stroke="#1e40af" strokeWidth="1.5" opacity="0.2"/>
              <circle cx="600" cy="400" r="60" fill="none" stroke="#1e3a8a" strokeWidth="2" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ocean-waves-1)" />
        </motion.svg>

        {/* Layer 2: Cloud Formations */}
        <motion.svg 
          style={{ y: y2 }}
          className="absolute inset-0 w-full h-full opacity-15"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern id="clouds" x="0" y="0" width="1000" height="800" patternUnits="userSpaceOnUse">
              {/* Organic cloud shapes */}
              <motion.ellipse
                cx="200"
                cy="200"
                rx="120"
                ry="60"
                fill="none"
                stroke="#475569"
                strokeWidth="2"
                opacity="0.5"
                animate={{
                  rx: [120, 140, 120],
                  ry: [60, 70, 60]
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.ellipse
                cx="600"
                cy="400"
                rx="100"
                ry="50"
                fill="none"
                stroke="#475569"
                strokeWidth="2"
                opacity="0.4"
                animate={{
                  rx: [100, 120, 100],
                  ry: [50, 60, 50]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
              {/* Flowing lines */}
              <path
                d="M 100 500 Q 300 480, 500 500 Q 700 520, 900 500"
                fill="none"
                stroke="#64748b"
                strokeWidth="1.5"
                opacity="0.3"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#clouds)" />
        </motion.svg>

        {/* Layer 3: Compass Rose & Map Elements */}
        <motion.svg 
          style={{ y: y3 }}
          className="absolute inset-0 w-full h-full opacity-10"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern id="map-elements" x="0" y="0" width="900" height="700" patternUnits="userSpaceOnUse">
              {/* Compass rose */}
              <g transform="translate(450, 350)">
                <motion.circle
                  r="60"
                  fill="none"
                  stroke="#94a3b8"
                  strokeWidth="2"
                  opacity="0.4"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 60,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <line x1="0" y1="-60" x2="0" y2="60" stroke="#94a3b8" strokeWidth="1.5" opacity="0.3"/>
                <line x1="-60" y1="0" x2="60" y2="0" stroke="#94a3b8" strokeWidth="1.5" opacity="0.3"/>
              </g>
              {/* Dotted paths */}
              <path
                d="M 100 100 L 200 150 L 300 120 L 400 180"
                fill="none"
                stroke="#64748b"
                strokeWidth="2"
                strokeDasharray="5,10"
                opacity="0.3"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#map-elements)" />
        </motion.svg>

        {/* Gradient Overlays for Depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 md:mb-24"
        >
          <motion.h2 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 bg-clip-text text-transparent">
              ICONIC MOMENTS
            </span>
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A journey through Luffy&apos;s most unforgettable adventures
          </motion.p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 auto-rows-auto">
          {iconicMoments.map((moment, index) => (
            <MomentCard key={moment.id} moment={moment} index={index} />
          ))}
        </div>

        {/* Bottom Spacer */}
        <div className="h-32" />
      </div>
    </div>
  );
}
