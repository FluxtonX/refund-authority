'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { servicesTestimonials } from '@/data/servicesPageData';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ServicesSectionFive() {
  const [currentIdx, setCurrentIdx] = useState(0);

  // Show 2 items per view on desktop, 1 on mobile
  const itemsPerPage = 2;
  const maxIdx = Math.max(0, servicesTestimonials.length - itemsPerPage);

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev > 0 ? prev - 1 : maxIdx));
  };

  const handleNext = () => {
    setCurrentIdx((prev) => (prev < maxIdx ? prev + 1 : 0));
  };

  const visibleTestimonials = servicesTestimonials.slice(currentIdx, currentIdx + itemsPerPage);

  return (
    <section className="py-20 sm:py-24 bg-[#00509E] text-white relative overflow-hidden border-t border-blue-900/40">
      
      {/* Background Overlay Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Centered Section Header with Margin Below */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <h2 className="font-heading-l text-white">
            Client Feedback
          </h2>
          <h3 className="font-body text-white/90">
            Hear directly from our clients about their positive experiences!
          </h3>
        </div>

        {/* Testimonials Carousel Row with Left & Right Side Arrows */}
        <div className="relative flex items-center justify-between gap-3 sm:gap-6">
          
          {/* Left Side Navigation Arrow */}
          <button
            onClick={handlePrev}
            className="p-3 rounded-full bg-white/10 hover:bg-[#FFCC00] text-[#FFCC00] hover:text-[#101828] border border-white/20 transition-colors shadow-md cursor-pointer shrink-0 z-20"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-6 h-6 stroke-[3]" />
          </button>

          {/* Testimonial Cards Container */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start min-h-[220px]">
            <AnimatePresence mode="wait">
              {visibleTestimonials.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6 flex flex-col justify-between"
                >
                  {/* Large Profile Image & Author Info Header */}
                  <div className="flex items-center gap-5">
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden shrink-0 border-2 border-[#FFCC00] shadow-lg">
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="space-y-1">
                      <h4 className="font-primary text-white">
                        {item.name}
                      </h4>
                      <p className="font-body-s font-semibold text-[#FFCC00]">
                        {item.role}
                      </p>
                    </div>
                  </div>

                  {/* Testimonial Quote Text */}
                  <p className="font-body text-white/95 italic pl-3 border-l-2 border-[#FFCC00]/60">
                    {item.quote}
                  </p>

                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Right Side Navigation Arrow */}
          <button
            onClick={handleNext}
            className="p-3 rounded-full bg-white/10 hover:bg-[#FFCC00] text-[#FFCC00] hover:text-[#101828] border border-white/20 transition-colors shadow-md cursor-pointer shrink-0 z-20"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-6 h-6 stroke-[3]" />
          </button>

        </div>

        {/* Yellow Pagination Bullets */}
        <div className="flex justify-center items-center gap-2 pt-2">
          {Array.from({ length: maxIdx + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIdx(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentIdx === idx
                  ? 'w-8 bg-[#FFCC00]'
                  : 'w-2.5 bg-white/30 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
