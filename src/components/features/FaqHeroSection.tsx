'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function FaqHeroSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#6497C7] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 w-full">
        <div className="max-w-xl space-y-6 text-left">
          
          {/* Eyebrow Tag: FAQs in Pure White */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="text-sm font-semibold text-white tracking-normal"
          >
            FAQs
          </motion.div>

          {/* Main Title H1: Frequently Asked Questions (White, Bold, 2 Lines) */}
          <motion.h1
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.15] tracking-tight"
          >
            Frequently Asked<br />Questions
          </motion.h1>

          {/* Description Paragraph (White, Normal Weight) */}
          <motion.p
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base text-white leading-relaxed font-normal pt-1 max-w-lg"
          >
            Find answers to frequently asked questions about our services and how we may be able to support you.
          </motion.p>

          {/* Two Left-Aligned Square CTA Buttons: Learn More & Get Help */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-start gap-4 pt-4"
          >
            {/* Button 1: Learn More (Solid Amber Gold #FFCC00, Sharp Square Shape) */}
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-7 py-3 rounded-none bg-[#FFCC00] text-white text-sm font-semibold hover:bg-[#E6B800] transition-colors shadow-sm"
            >
              Learn More
            </Link>

            {/* Button 2: Get Help (Transparent with White Outline, Sharp Square Shape) */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3 rounded-none border border-white/80 text-white text-sm font-semibold hover:bg-white hover:text-[#6497C7] transition-colors"
            >
              Get Help
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
