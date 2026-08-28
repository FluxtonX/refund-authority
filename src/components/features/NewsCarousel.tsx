'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { newsData } from '@/data/newsData';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function NewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Show 2 items per view on desktop, 1 on mobile
  const itemsPerPage = 2;
  const maxIndex = Math.max(0, newsData.length - itemsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const visibleNews = newsData.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section className="py-16 sm:py-20 bg-[#00509E] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Heading Title - Exact Figtree 600 font weight matching screenshot */}
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold text-white leading-[1.25] max-w-4xl tracking-tight">
            NEWS releases and notices from the Refund Authority of Canada (RAC).
          </h2>
        </div>

        {/* Carousel Row with Yellow Chevron Arrows (< and >) */}
        <div className="relative flex items-center justify-between gap-4">
          
          {/* Left Yellow Chevron Arrow */}
          <button
            onClick={handlePrev}
            className="p-2 text-[#FFCC00] hover:text-white transition-colors shrink-0 outline-none"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-9 h-9 stroke-[2.5]" />
          </button>

          {/* 2 News Title Items Side-by-Side - Clean font-semibold matching screenshot */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-start px-2">
            <AnimatePresence mode="wait">
              {visibleNews.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-1"
                >
                  <h3 className="text-base sm:text-lg font-semibold text-white hover:text-[#FFCC00] transition-colors leading-snug">
                    <Link href="/news">{item.title}</Link>
                  </h3>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Right Yellow Chevron Arrow */}
          <button
            onClick={handleNext}
            className="p-2 text-[#FFCC00] hover:text-white transition-colors shrink-0 outline-none"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-9 h-9 stroke-[2.5]" />
          </button>

        </div>

        {/* Pagination Dots Below */}
        <div className="flex justify-center items-center gap-2 pt-2">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? 'w-2.5 bg-[#FFCC00]'
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
