"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current && overlayRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Update CSS variable for mask position
        overlayRef.current.style.setProperty('--mouse-x', `${x}px`);
        overlayRef.current.style.setProperty('--mouse-y', `${y}px`);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative w-full h-screen overflow-hidden bg-purple-100"
    >
      {/* Conqueror's Haki Background - Light purple/pink with bold lightning */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-200 via-pink-100 to-purple-300">
        {/* Conqueror's Haki Lightning - Radiating from Luffy's center */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1500 800" preserveAspectRatio="xMidYMid slice" style={{ overflow: 'visible' }}>
          <defs>
            {/* Red/Pink glow filter for lightning */}
            <filter id="lightning-glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Lightning Bolt 1 - Top Left (radiating from center 750,400) */}
          <motion.path
            d="M 750 400 L 720 350 L 740 350 L 680 280 L 710 280 L 640 200 L 680 220 L 650 220 L 700 300 L 670 300 L 730 370 Z"
            fill="none"
            stroke="#dc2626"
            strokeWidth="20"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#lightning-glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1],
              opacity: [0, 0.9, 0.9, 0]
            }}
            transition={{ 
              duration: 0.5,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeOut"
            }}
          />
          <motion.path
            d="M 750 400 L 720 350 L 740 350 L 680 280 L 710 280 L 640 200 L 680 220 L 650 220 L 700 300 L 670 300 L 730 370 Z"
            fill="none"
            stroke="#000"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1],
              opacity: [0, 1, 1, 0]
            }}
            transition={{ 
              duration: 0.5,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeOut"
            }}
          />

          {/* Lightning Bolt 2 - Top Right */}
          <motion.path
            d="M 750 400 L 820 330 L 800 330 L 880 240 L 850 240 L 950 120 L 900 160 L 920 160 L 840 260 L 870 260 L 780 360 Z"
            fill="none"
            stroke="#b91c1c"
            strokeWidth="20"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#lightning-glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1],
              opacity: [0, 0.9, 0.9, 0]
            }}
            transition={{ 
              duration: 0.6,
              delay: 0.3,
              repeat: Infinity,
              repeatDelay: 2.2,
              ease: "easeOut"
            }}
          />
          <motion.path
            d="M 750 400 L 820 330 L 800 330 L 880 240 L 850 240 L 950 120 L 900 160 L 920 160 L 840 260 L 870 260 L 780 360 Z"
            fill="none"
            stroke="#000"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1],
              opacity: [0, 1, 1, 0]
            }}
            transition={{ 
              duration: 0.6,
              delay: 0.3,
              repeat: Infinity,
              repeatDelay: 2.2,
              ease: "easeOut"
            }}
          />

          {/* Lightning Bolt 3 - Right Side */}
          <motion.path
            d="M 750 400 L 850 420 L 850 400 L 950 440 L 950 420 L 1100 480 L 1050 460 L 1050 480 L 930 430 L 930 450 L 820 410 Z"
            fill="none"
            stroke="#dc2626"
            strokeWidth="18"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#lightning-glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1],
              opacity: [0, 0.9, 0.9, 0]
            }}
            transition={{ 
              duration: 0.55,
              delay: 0.6,
              repeat: Infinity,
              repeatDelay: 2.4,
              ease: "easeOut"
            }}
          />
          <motion.path
            d="M 750 400 L 850 420 L 850 400 L 950 440 L 950 420 L 1100 480 L 1050 460 L 1050 480 L 930 430 L 930 450 L 820 410 Z"
            fill="none"
            stroke="#000"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1],
              opacity: [0, 1, 1, 0]
            }}
            transition={{ 
              duration: 0.55,
              delay: 0.6,
              repeat: Infinity,
              repeatDelay: 2.4,
              ease: "easeOut"
            }}
          />

          {/* Lightning Bolt 4 - Bottom Right */}
          <motion.path
            d="M 750 400 L 820 480 L 800 480 L 880 580 L 850 580 L 950 720 L 900 660 L 920 660 L 840 560 L 870 560 L 780 450 Z"
            fill="none"
            stroke="#b91c1c"
            strokeWidth="20"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#lightning-glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1],
              opacity: [0, 0.9, 0.9, 0]
            }}
            transition={{ 
              duration: 0.65,
              delay: 0.9,
              repeat: Infinity,
              repeatDelay: 2.1,
              ease: "easeOut"
            }}
          />
          <motion.path
            d="M 750 400 L 820 480 L 800 480 L 880 580 L 850 580 L 950 720 L 900 660 L 920 660 L 840 560 L 870 560 L 780 450 Z"
            fill="none"
            stroke="#000"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1],
              opacity: [0, 1, 1, 0]
            }}
            transition={{ 
              duration: 0.65,
              delay: 0.9,
              repeat: Infinity,
              repeatDelay: 2.1,
              ease: "easeOut"
            }}
          />

          {/* Lightning Bolt 5 - Bottom Left */}
          <motion.path
            d="M 750 400 L 680 490 L 700 490 L 620 600 L 650 600 L 550 750 L 600 680 L 580 680 L 660 580 L 630 580 L 720 460 Z"
            fill="none"
            stroke="#dc2626"
            strokeWidth="19"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#lightning-glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1],
              opacity: [0, 0.9, 0.9, 0]
            }}
            transition={{ 
              duration: 0.7,
              delay: 0.2,
              repeat: Infinity,
              repeatDelay: 2.3,
              ease: "easeOut"
            }}
          />
          <motion.path
            d="M 750 400 L 680 490 L 700 490 L 620 600 L 650 600 L 550 750 L 600 680 L 580 680 L 660 580 L 630 580 L 720 460 Z"
            fill="none"
            stroke="#000"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1],
              opacity: [0, 1, 1, 0]
            }}
            transition={{ 
              duration: 0.7,
              delay: 0.2,
              repeat: Infinity,
              repeatDelay: 2.3,
              ease: "easeOut"
            }}
          />

          {/* Lightning Bolt 6 - Left Side */}
          <motion.path
            d="M 750 400 L 650 420 L 650 400 L 550 440 L 550 420 L 400 480 L 450 460 L 450 480 L 570 430 L 570 450 L 680 410 Z"
            fill="none"
            stroke="#b91c1c"
            strokeWidth="18"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#lightning-glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1],
              opacity: [0, 0.9, 0.9, 0]
            }}
            transition={{ 
              duration: 0.6,
              delay: 0.5,
              repeat: Infinity,
              repeatDelay: 2.5,
              ease: "easeOut"
            }}
          />
          <motion.path
            d="M 750 400 L 650 420 L 650 400 L 550 440 L 550 420 L 400 480 L 450 460 L 450 480 L 570 430 L 570 450 L 680 410 Z"
            fill="none"
            stroke="#000"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1],
              opacity: [0, 1, 1, 0]
            }}
            transition={{ 
              duration: 0.6,
              delay: 0.5,
              repeat: Infinity,
              repeatDelay: 2.5,
              ease: "easeOut"
            }}
          />

          {/* Lightning Bolt 7 - Top Center */}
          <motion.path
            d="M 750 400 L 760 330 L 740 330 L 770 250 L 750 250 L 790 150 L 760 180 L 780 180 L 750 270 L 770 270 L 750 350 Z"
            fill="none"
            stroke="#dc2626"
            strokeWidth="19"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#lightning-glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1],
              opacity: [0, 0.9, 0.9, 0]
            }}
            transition={{ 
              duration: 0.55,
              delay: 0.7,
              repeat: Infinity,
              repeatDelay: 2.6,
              ease: "easeOut"
            }}
          />
          <motion.path
            d="M 750 400 L 760 330 L 740 330 L 770 250 L 750 250 L 790 150 L 760 180 L 780 180 L 750 270 L 770 270 L 750 350 Z"
            fill="none"
            stroke="#000"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1],
              opacity: [0, 1, 1, 0]
            }}
            transition={{ 
              duration: 0.55,
              delay: 0.7,
              repeat: Infinity,
              repeatDelay: 2.6,
              ease: "easeOut"
            }}
          />

          {/* Lightning Bolt 8 - Bottom Center */}
          <motion.path
            d="M 750 400 L 740 480 L 760 480 L 730 570 L 750 570 L 710 680 L 740 640 L 720 640 L 750 550 L 730 550 L 750 460 Z"
            fill="none"
            stroke="#b91c1c"
            strokeWidth="20"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#lightning-glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1],
              opacity: [0, 0.9, 0.9, 0]
            }}
            transition={{ 
              duration: 0.65,
              delay: 0.4,
              repeat: Infinity,
              repeatDelay: 2.3,
              ease: "easeOut"
            }}
          />
          <motion.path
            d="M 750 400 L 740 480 L 760 480 L 730 570 L 750 570 L 710 680 L 740 640 L 720 640 L 750 550 L 730 550 L 750 460 Z"
            fill="none"
            stroke="#000"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1],
              opacity: [0, 1, 1, 0]
            }}
            transition={{ 
              duration: 0.65,
              delay: 0.4,
              repeat: Infinity,
              repeatDelay: 2.3,
              ease: "easeOut"
            }}
          />
        </svg>

        {/* Purple/Pink Energy Glow */}
        <motion.div
          className="absolute top-1/3 left-1/3 w-[600px] h-[600px] rounded-full bg-purple-400/30 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/4 right-1/3 w-[500px] h-[500px] rounded-full bg-pink-400/25 blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.25, 0.45, 0.25]
          }}
          transition={{ 
            duration: 4.5,
            delay: 0.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Main portrait container - fills the screen like Lando's site */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Base layer - Normal Luffy (always visible) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full h-full max-w-[1400px]">
            <Image
              src="/luffy-normal-transparent.png"
              alt="Luffy"
              fill
              className="object-contain object-center"
              priority
              quality={100}
            />
          </div>
        </div>

        {/* Overlay layer - Gear 5 Luffy (revealed through mask following cursor) */}
        <div
          ref={overlayRef}
          className="absolute inset-0 flex items-center justify-center pointer-events-none mask-reveal"
          style={{
            '--mouse-x': '50%',
            '--mouse-y': '50%',
          } as React.CSSProperties}
        >
          <div className="relative w-full h-full max-w-[1400px]">
            <Image
              src="/luffy-gear5-transparent.png"
              alt="Gear 5 Luffy"
              fill
              className="object-contain object-center"
              priority
              quality={100}
            />
          </div>
        </div>
      </div>

      {/* Title - Bottom of screen with better design */}
      <motion.div
        className="absolute bottom-16 left-0 right-0 text-center z-20 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <motion.h1 
          className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-black mb-4 tracking-tight"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <span className="inline-block bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 bg-clip-text text-transparent drop-shadow-lg" style={{
            WebkitTextStroke: '2px rgba(239, 68, 68, 0.1)',
            paintOrder: 'stroke fill'
          }}>
            MONKEY D.
          </span>
          <br />
          <span className="inline-block bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 bg-clip-text text-transparent drop-shadow-2xl" style={{
            WebkitTextStroke: '2px rgba(239, 68, 68, 0.15)',
            paintOrder: 'stroke fill',
            letterSpacing: '0.05em'
          }}>
            LUFFY
          </span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 font-semibold tracking-wide">
            未来の海賊王
          </p>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-light mt-1">
            Future Pirate King
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
