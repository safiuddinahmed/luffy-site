"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const normalLuffyRef = useRef<HTMLDivElement>(null);
  const gear5LuffyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current && overlayRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // For mask reveal
        overlayRef.current.style.setProperty('--mouse-x', `${x}px`);
        overlayRef.current.style.setProperty('--mouse-y', `${y}px`);
        
        // Cancel previous animation frame
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
        }
        
        // For parallax effect
        animationFrameId = requestAnimationFrame(() => {
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          
          // Calculate offset from center (normalized to -1 to 1)
          const offsetX = (x - centerX) / centerX;
          const offsetY = (y - centerY) / centerY;
          
          // Apply parallax movement (same direction as mouse, noticeable but smooth)
          const parallaxStrength = 25; // increased for visibility
          const moveX = offsetX * parallaxStrength;
          const moveY = offsetY * parallaxStrength;
          
          // Apply to both images
          if (normalLuffyRef.current) {
            normalLuffyRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
          }
          if (gear5LuffyRef.current) {
            gear5LuffyRef.current.style.transform = `translate(${moveX - 20}px, ${moveY - 20}px)`;
          }
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative w-full h-screen overflow-hidden bg-[#fafaf9]"
    >
      {/* Blurred Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/hero-background.webp"
          alt="Background"
          fill
          className="object-cover"
          style={{
            filter: 'blur(4px)',
            opacity: 0.4,
            transform: 'scale(1.05)'
          }}
          priority
          quality={90}
        />
        {/* Backdrop overlay for additional depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/15" />
      </div>

      {/* Main portrait container */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Base layer - Normal Luffy */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div 
            ref={normalLuffyRef}
            className="relative w-full h-full max-w-[1400px] transition-transform duration-500 ease-out"
          >
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
          <div 
            ref={gear5LuffyRef}
            className="relative w-full h-full max-w-[1400px] transition-transform duration-500 ease-out"
          >
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

    </div>
  );
}
