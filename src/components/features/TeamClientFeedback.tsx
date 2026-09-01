'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { servicesTestimonials } from '@/data/servicesPageData';

export default function TeamClientFeedback() {
  const [currentIdx, setCurrentIdx] = useState(0);

  // Show 2 items per view on desktop, 1 on mobile
  const itemsPerPage = 2;
  const maxIdx = Math.max(0, servicesTestimonials.length - itemsPerPage);

  // Functional 4-second auto sliding effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev >= maxIdx ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [maxIdx]);

  const visibleTestimonials = servicesTestimonials.slice(currentIdx, currentIdx + itemsPerPage);

  return (
    <section className="bg-white border-t border-b border-gray-100 overflow-hidden w-full">
      {/* Full Width Edge-to-Edge Grid with NO left/right card margins */}
      <div className="grid grid-cols-1 lg:grid-cols-12 w-full items-stretch min-h-[460px]">
        
        {/* LEFT PURPLE BLOCK: Flush to left edge, No card margin, exact soft lavender (#A4A6DC) */}
        <div className="lg:col-span-4 bg-[#A4A6DC] p-8 sm:p-12 lg:p-16 xl:p-20 flex flex-col justify-center text-white space-y-4 min-h-[380px]">
          <span className="text-sm sm:text-base font-semibold text-white/90 font-poppins tracking-normal">
            Client Feedback
          </span>
          {/* Headline: Exact non-bold regular weight font-normal matching WordPress screenshot */}
          <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-normal text-white leading-[1.12] font-poppins tracking-tight">
            Insights<br className="hidden lg:inline" /> from Our<br className="hidden lg:inline" /> Clients
          </h2>
        </div>

        {/* RIGHT WHITE BLOCK: Contains 2 Testimonials Side-by-Side & 4s Auto-Slider */}
        <div className="lg:col-span-8 bg-white p-8 sm:p-12 lg:p-16 flex flex-col justify-between space-y-8 min-h-[380px]">
          
          {/* 2 Testimonial Items Side-by-Side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 items-start flex-1">
            <AnimatePresence mode="wait">
              {visibleTestimonials.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35 }}
                  className="flex flex-col justify-between h-full space-y-6"
                >
                  {/* Top Portion: Avatar & Quote */}
                  <div className="space-y-5">
                    {/* Top Round Avatar */}
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden shrink-0 border border-slate-200/80 shadow-md">
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Quote Text: Exact font-figtree italic font-normal matching WordPress */}
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal italic font-figtree">
                      {item.quote}
                    </p>
                  </div>

                  {/* Bottom Portion: Author Name & Scam Subtitle */}
                  <div className="space-y-0.5 pt-2">
                    <h4 className="text-xl sm:text-2xl font-bold text-[#000000] font-poppins">
                      {item.name}
                    </h4>
                    <p className="text-sm font-normal text-slate-500 italic font-figtree">
                      {item.role}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Bottom Pagination Dots with Click & Auto-sliding */}
          <div className="flex justify-center sm:justify-end items-center gap-2 pt-6">
            {Array.from({ length: maxIdx + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIdx(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIdx === idx
                    ? 'w-7 bg-[#A4A6DC]'
                    : 'w-2.5 bg-slate-200 hover:bg-slate-300'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
