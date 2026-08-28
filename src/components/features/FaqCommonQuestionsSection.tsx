'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import faqData from '@/data/faqData.json';

// Split the 9 FAQ items into 2 columns matching user screenshot:
// Left Column: Items 1 to 5
// Right Column: Items 6 to 9
const leftColumnFaqs = faqData.slice(0, 5);
const rightColumnFaqs = faqData.slice(5, 9);

export default function FaqCommonQuestionsSection() {
  // Track open state for left column & right column independently
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    'faq-1': true, // Default open item 1 on left
    'faq-6': true, // Default open item 1 on right (What should I provide to start?)
  });

  const toggleItem = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#003366] leading-tight">
            Common Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
            Understanding our services can empower your recovery journey. Below, we address key inquiries.
          </p>
        </div>

        {/* 2-Column Accordion Layout matching user screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COLUMN (Items 1 to 5) */}
          <div className="space-y-4">
            {leftColumnFaqs.map((item) => {
              const isOpen = !!openIds[item.id];
              return (
                <div key={item.id} className="space-y-2">
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full bg-[#F0F4F8] hover:bg-[#E2E8F0] px-6 py-4 rounded-none flex items-center gap-3 text-left transition-colors cursor-pointer"
                  >
                    <span className="text-lg font-bold text-[#003366] shrink-0">
                      {isOpen ? '—' : '+'}
                    </span>
                    <span className="text-base font-bold text-[#003366]">
                      {item.question}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="px-6 py-3 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* RIGHT COLUMN (Items 6 to 9) */}
          <div className="space-y-4">
            {rightColumnFaqs.map((item) => {
              const isOpen = !!openIds[item.id];
              return (
                <div key={item.id} className="space-y-2">
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full bg-[#F0F4F8] hover:bg-[#E2E8F0] px-6 py-4 rounded-none flex items-center gap-3 text-left transition-colors cursor-pointer"
                  >
                    <span className="text-lg font-bold text-[#003366] shrink-0">
                      {isOpen ? '—' : '+'}
                    </span>
                    <span className="text-base font-bold text-[#003366]">
                      {item.question}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="px-6 py-3 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
