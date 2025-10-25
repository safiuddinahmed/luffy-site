"use client";

import { useEffect, useRef } from "react";
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
      className="relative w-full h-screen overflow-hidden bg-[#fafaf9]"
    >
      {/* Flowing Background Patterns - Inspired by Lando Norris's site */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Flowing Curved Path 1 */}
        <motion.svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1920 1080"
          preserveAspectRatio="xMidYMid slice"
        >
          <motion.path
            d="M -100 200 Q 300 100, 600 300 T 1200 400"
            fill="none"
            stroke="#b8b8b8"
            strokeWidth="4"
            opacity="0.7"
            animate={{
              d: [
                "M -100 200 Q 300 100, 600 300 T 1200 400",
                "M -100 280 Q 350 80, 650 350 T 1250 480",
                "M -100 200 Q 300 100, 600 300 T 1200 400"
              ]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.svg>

        {/* Flowing Curved Path 2 */}
        <motion.svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1920 1080"
          preserveAspectRatio="xMidYMid slice"
        >
          <motion.path
            d="M 2000 150 Q 1600 250, 1300 200 T 800 350"
            fill="none"
            stroke="#a8a8a8"
            strokeWidth="4"
            opacity="0.65"
            animate={{
              d: [
                "M 2000 150 Q 1600 250, 1300 200 T 800 350",
                "M 2000 230 Q 1650 300, 1350 250 T 850 420",
                "M 2000 150 Q 1600 250, 1300 200 T 800 350"
              ]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.svg>

        {/* Flowing Curved Path 3 */}
        <motion.svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1920 1080"
          preserveAspectRatio="xMidYMid slice"
        >
          <motion.path
            d="M -100 500 Q 400 450, 800 520 T 1600 480 T 2100 550"
            fill="none"
            stroke="#c0c0c0"
            strokeWidth="5"
            opacity="0.75"
            animate={{
              d: [
                "M -100 500 Q 400 450, 800 520 T 1600 480 T 2100 550",
                "M -100 580 Q 450 400, 850 580 T 1650 540 T 2100 630",
                "M -100 500 Q 400 450, 800 520 T 1600 480 T 2100 550"
              ]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.svg>

        {/* Flowing Curved Path 4 */}
        <motion.svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1920 1080"
          preserveAspectRatio="xMidYMid slice"
        >
          <motion.path
            d="M -100 900 Q 350 800, 700 850 T 1300 920"
            fill="none"
            stroke="#a8a8a8"
            strokeWidth="4"
            opacity="0.68"
            animate={{
              d: [
                "M -100 900 Q 350 800, 700 850 T 1300 920",
                "M -100 980 Q 400 750, 750 900 T 1350 1000",
                "M -100 900 Q 350 800, 700 850 T 1300 920"
              ]
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.svg>

        {/* Flowing Curved Path 5 */}
        <motion.svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1920 1080"
          preserveAspectRatio="xMidYMid slice"
        >
          <motion.path
            d="M 2100 850 Q 1700 780, 1400 820 T 900 900"
            fill="none"
            stroke="#b8b8b8"
            strokeWidth="4"
            opacity="0.7"
            animate={{
              d: [
                "M 2100 850 Q 1700 780, 1400 820 T 900 900",
                "M 2100 930 Q 1750 730, 1450 870 T 950 980",
                "M 2100 850 Q 1700 780, 1400 820 T 900 900"
              ]
            }}
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.svg>

        {/* Flowing Curved Path 6 */}
        <motion.svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1920 1080"
          preserveAspectRatio="xMidYMid slice"
        >
          <motion.path
            d="M 100 100 Q 500 300, 900 500 T 1700 900"
            fill="none"
            stroke="#acacac"
            strokeWidth="4"
            opacity="0.65"
            animate={{
              d: [
                "M 100 100 Q 500 300, 900 500 T 1700 900",
                "M 150 150 Q 550 350, 950 550 T 1750 950",
                "M 100 100 Q 500 300, 900 500 T 1700 900"
              ]
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.svg>

        {/* Strong gradient overlays */}
        <motion.div
          className="absolute top-0 left-0 w-[900px] h-[900px] rounded-full bg-red-200/25 blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.25, 0.4, 0.25],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[800px] h-[800px] rounded-full bg-orange-200/30 blur-3xl"
          animate={{ 
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.45, 0.3],
            x: [0, -40, 0],
            y: [0, -25, 0]
          }}
          transition={{ 
            duration: 5,
            delay: 0.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Main portrait container */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Base layer - Normal Luffy */}
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

        {/* Overlay layer - Gear 5 Luffy with mask reveal */}
        <div
          ref={overlayRef}
          className="absolute inset-0 flex items-center justify-center pointer-events-none mask-reveal"
          style={{
            '--mouse-x': '50%',
            '--mouse-y': '50%',
          } as React.CSSProperties}
        >
          {/* Conqueror's Haki Lightning */}
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1500 800" preserveAspectRatio="xMidYMid slice">
            <defs>
              <filter id="lightning-glow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {[
              "M 750 400 L 710 340 L 730 340 L 660 260 L 690 260 L 600 150",
              "M 750 400 L 830 320 L 810 320 L 900 220 L 870 220 L 1000 80",
              "M 750 400 L 870 425 L 870 405 L 990 455 L 990 435 L 1180 510",
              "M 750 400 L 830 500 L 810 500 L 900 620 L 870 620 L 1000 800",
              "M 750 400 L 670 510 L 690 510 L 600 640 L 630 640 L 500 820",
              "M 750 400 L 630 425 L 630 405 L 510 455 L 510 435 L 320 510",
              "M 750 400 L 765 310 L 745 310 L 780 210 L 760 210 L 810 80",
              "M 750 400 L 735 500 L 755 500 L 720 610 L 740 610 L 690 750"
            ].map((path, i) => (
              <g key={i}>
                <motion.path
                  d={path}
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
                    delay: i * 0.05,
                    ease: "easeOut"
                  }}
                />
                <motion.path
                  d={path}
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
                    delay: i * 0.05,
                    ease: "easeOut"
                  }}
                />
              </g>
            ))}
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

      {/* Title */}
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
