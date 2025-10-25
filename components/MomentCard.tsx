"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { IconicMoment } from "@/data/moments";

interface MomentCardProps {
  moment: IconicMoment;
  index: number;
}

export default function MomentCard({ moment, index }: MomentCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  // Alternate slide direction based on index
  const slideFrom = index % 2 === 0 ? -100 : 100;

  // Size classes based on moment size
  const sizeClasses = {
    large: "md:col-span-1 md:row-span-2",
    medium: "md:col-span-1 md:row-span-1",
    standard: "md:col-span-1 md:row-span-1"
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ 
        opacity: 0, 
        x: slideFrom,
        scale: 0.9
      }}
      animate={isInView ? { 
        opacity: 1, 
        x: 0,
        scale: 1
      } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={`group relative overflow-hidden rounded-2xl ${sizeClasses[moment.size]}`}
    >
      {/* Image Container */}
      <div className="relative w-full h-full min-h-[400px] md:min-h-[500px]">
        {/* Gradient Border Effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-600 via-orange-500 to-yellow-400 p-[2px] z-10">
          <div className="w-full h-full bg-black rounded-2xl" />
        </div>

        {/* Image */}
        <div className="absolute inset-[2px] rounded-2xl overflow-hidden">
          <motion.div
            className="relative w-full h-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Image
              src={moment.image}
              alt={moment.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="lazy"
            />
            
            {/* Brightness overlay on hover */}
            <motion.div
              className="absolute inset-0 bg-white"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Glassmorphism Overlay - appears on hover */}
          <motion.div
            className="absolute inset-0 flex flex-col justify-end p-6 md:p-8"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop blur background */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent backdrop-blur-md" />
            
            {/* Content */}
            <div className="relative z-10 space-y-2">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <p className="text-sm font-semibold text-orange-400 uppercase tracking-wider">
                  {moment.arc}
                </p>
              </motion.div>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.15 }}
              >
                <h3 className="text-2xl md:text-3xl font-black text-white leading-tight">
                  {moment.title}
                </h3>
              </motion.div>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <p className="text-base text-gray-300 leading-relaxed">
                  {moment.description}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Glow effect on hover */}
        <motion.div
          className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-red-600 via-orange-500 to-yellow-400 opacity-0 blur-xl -z-10"
          whileHover={{ opacity: 0.6 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
}
