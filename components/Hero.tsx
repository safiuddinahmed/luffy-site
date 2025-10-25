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
      {/* Clean Background - Light purple/pink gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-200 via-pink-100 to-purple-300">
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

        {/* Overlay layer - Gear 5 Luffy + Conqueror's Haki (revealed through mask following cursor) */}
        <div
          ref={overlayRef}
          className="absolute inset-0 flex items-center justify-center pointer-events-none mask-reveal"
          style={{
            '--mouse-x': '50%',
            '--mouse-y': '50%',
          } as React.CSSProperties}
        >
          {/* Conqueror's Haki Lightning - Only visible in masked area */}
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
            d="M 750 400 L 710 340 L 730 340 L 660 260 L 690 260 L 600 150 L 650 180 L 620 180 L 680 270 L 650 270 L 720 360 Z"
            fill="none"
            stroke="#dc2626"
            strokeWidth="22"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#lightning-glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1],
              opacity: [0, 1, 1, 0]
            }}
            transition={{ 
              duration: 0.4,
              repeat: Infinity,
              repeatDelay: 1.5,
              ease: "easeOut"
            }}
          />
          <motion.path
            d="M 750 400 L 710 340 L 730 340 L 660 260 L 690 260 L 600 150 L 650 180 L 620 180 L 680 270 L 650 270 L 720 360 Z"
            fill="none"
            stroke="#000"
            strokeWidth="9"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1],
              opacity: [0, 1, 1, 0]
            }}
            transition={{ 
              duration: 0.4,
              repeat: Infinity,
              repeatDelay: 1.5,
              ease: "easeOut"
            }}
          />

          {/* Lightning Bolt 2 - Top Right */}
          <motion.path
            d="M 750 400 L 830 320 L 810 320 L 900 220 L 870 220 L 1000 80 L 940 130 L 960 130 L 860 240 L 890 240 L 790 350 Z"
            fill="none"
            stroke="#dc2626"
            strokeWidth="22"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#lightning-glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1],
              opacity: [0, 1, 1, 0]
            }}
            transition={{ 
              duration: 0.4,
              repeat: Infinity,
              repeatDelay: 1.5,
              ease: "easeOut"
            }}
          />
          <motion.path
            d="M 750 400 L 830 320 L 810 320 L 900 220 L 870 220 L 1000 80 L 940 130 L 960 130 L 860 240 L 890 240 L 790 350 Z"
            fill="none"
            stroke="#000"
            strokeWidth="9"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1],
              opacity: [0, 1, 1, 0]
            }}
            transition={{ 
              duration: 0.4,
              repeat: Infinity,
              repeatDelay: 1.5,
              ease: "easeOut"
            }}
          />

          {/* Lightning Bolt 3 - Right Side */}
          <motion.path
            d="M 750 400 L 870 425 L 870 405 L 990 455 L 990 435 L 1180 510 L 1120 485 L 1120 505 L 970 445 L 970 465 L 840 415 Z"
            fill="none"
            stroke="#dc2626"
            strokeWidth="20"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#lightning-glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1],
              opacity: [0, 1, 1, 0]
            }}
            transition={{ 
              duration: 0.4,
              repeat: Infinity,
              repeatDelay: 1.5,
              ease: "easeOut"
            }}
          />
          <motion.path
            d="M 750 400 L 870 425 L 870 405 L 990 455 L 990 435 L 1180 510 L 1120 485 L 1120 505 L 970 445 L 970 465 L 840 415 Z"
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
              duration: 0.4,
              repeat: Infinity,
              repeatDelay: 1.5,
              ease: "easeOut"
            }}
          />

          {/* Lightning Bolt 4 - Bottom Right */}
          <motion.path
            d="M 750 400 L 830 500 L 810 500 L 900 620 L 870 620 L 1000 800 L 940 720 L 960 720 L 860 600 L 890 600 L 790 470 Z"
            fill="none"
            stroke="#dc2626"
            strokeWidth="22"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#lightning-glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1],
              opacity: [0, 1, 1, 0]
            }}
            transition={{ 
              duration: 0.4,
              repeat: Infinity,
              repeatDelay: 1.5,
              ease: "easeOut"
            }}
          />
          <motion.path
            d="M 750 400 L 830 500 L 810 500 L 900 620 L 870 620 L 1000 800 L 940 720 L 960 720 L 860 600 L 890 600 L 790 470 Z"
            fill="none"
            stroke="#000"
            strokeWidth="9"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1],
              opacity: [0, 1, 1, 0]
            }}
            transition={{ 
              duration: 0.4,
              repeat: Infinity,
              repeatDelay: 1.5,
              ease: "easeOut"
            }}
          />

          {/* Lightning Bolt 5 - Bottom Left */}
          <motion.path
            d="M 750 400 L 670 510 L 690 510 L 600 640 L 630 640 L 500 820 L 560 730 L 540 730 L 640 620 L 610 620 L 710 470 Z"
            fill="none"
            stroke="#dc2626"
            strokeWidth="21"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#lightning-glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1],
              opacity: [0, 1, 1, 0]
            }}
            transition={{ 
              duration: 0.4,
              repeat: Infinity,
              repeatDelay: 1.5,
              ease: "easeOut"
            }}
          />
          <motion.path
            d="M 750 400 L 670 510 L 690 510 L 600 640 L 630 640 L 500 820 L 560 730 L 540 730 L 640 620 L 610 620 L 710 470 Z"
            fill="none"
            stroke="#000"
            strokeWidth="9"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1],
              opacity: [0, 1, 1, 0]
            }}
            transition={{ 
              duration: 0.4,
              repeat: Infinity,
              repeatDelay: 1.5,
              ease: "easeOut"
            }}
          />

          {/* Lightning Bolt 6 - Left Side */}
          <motion.path
            d="M 750 400 L 630 425 L 630 405 L 510 455 L 510 435 L 320 510 L 380 485 L 380 505 L 530 445 L 530 465 L 660 415 Z"
            fill="none"
            stroke="#dc2626"
            strokeWidth="20"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#lightning-glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1],
              opacity: [0, 1, 1, 0]
            }}
            transition={{ 
              duration: 0.4,
              repeat: Infinity,
              repeatDelay: 1.5,
              ease: "easeOut"
            }}
          />
          <motion.path
            d="M 750 400 L 630 425 L 630 405 L 510 455 L 510 435 L 320 510 L 380 485 L 380 505 L 530 445 L 530 465 L 660 415 Z"
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
              duration: 0.4,
              repeat: Infinity,
              repeatDelay: 1.5,
              ease: "easeOut"
            }}
          />

          {/* Lightning Bolt 7 - Top Center */}
          <motion.path
            d="M 750 400 L 765 310 L 745 310 L 780 210 L 760 210 L 810 80 L 775 120 L 795 120 L 760 230 L 780 230 L 755 340 Z"
            fill="none"
            stroke="#dc2626"
            strokeWidth="21"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#lightning-glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1],
              opacity: [0, 1, 1, 0]
            }}
            transition={{ 
              duration: 0.4,
              repeat: Infinity,
              repeatDelay: 1.5,
              ease: "easeOut"
            }}
          />
          <motion.path
            d="M 750 400 L 765 310 L 745 310 L 780 210 L 760 210 L 810 80 L 775 120 L 795 120 L 760 230 L 780 230 L 755 340 Z"
            fill="none"
            stroke="#000"
            strokeWidth="9"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1],
              opacity: [0, 1, 1, 0]
            }}
            transition={{ 
              duration: 0.4,
              repeat: Infinity,
              repeatDelay: 1.5,
              ease: "easeOut"
            }}
          />

          {/* Lightning Bolt 8 - Bottom Center */}
          <motion.path
            d="M 750 400 L 735 500 L 755 500 L 720 610 L 740 610 L 690 750 L 725 700 L 705 700 L 740 590 L 720 590 L 745 470 Z"
            fill="none"
            stroke="#dc2626"
            strokeWidth="22"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#lightning-glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1],
              opacity: [0, 1, 1, 0]
            }}
            transition={{ 
              duration: 0.4,
              repeat: Infinity,
              repeatDelay: 1.5,
              ease: "easeOut"
            }}
          />
          <motion.path
            d="M 750 400 L 735 500 L 755 500 L 720 610 L 740 610 L 690 750 L 725 700 L 705 700 L 740 590 L 720 590 L 745 470 Z"
            fill="none"
            stroke="#000"
            strokeWidth="9"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1],
              opacity: [0, 1, 1, 0]
            }}
            transition={{ 
              duration: 0.4,
              repeat: Infinity,
              repeatDelay: 1.5,
              ease: "easeOut"
            }}
          />
          </svg>

          {/* Gear 5 Luffy Image */}
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
