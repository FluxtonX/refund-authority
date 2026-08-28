'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function ServicesSectionOne() {
  return (
    <section className="py-20 sm:py-24 bg-[#00509E] text-white relative overflow-hidden">
      
      {/* Subtle Background Radial Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Eyebrow Tag: Client-Focused */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-base sm:text-lg font-bold text-[#FFCC00] uppercase tracking-wider"
        >
          Client-Focused
        </motion.div>

        {/* Heading H2: Transparent Assistance for Cryptocurrency Fraud Cases */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight tracking-tight max-w-3xl mx-auto"
        >
          Transparent Assistance for Cryptocurrency Fraud Cases
        </motion.h1>

        {/* Paragraph Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg text-white/95 leading-relaxed font-normal max-w-3xl mx-auto"
        >
          Our firm focuses on assisting clients who have experienced financial losses due to fraudulent activity, with particular experience in the cryptocurrency sector. Our team operates with transparency and a client-centered approach, keeping you informed at every stage. We are committed to providing clear guidance and steady support throughout the process.
        </motion.p>

        {/* Two Centered Square CTA Buttons: Get Started & Contact Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-4"
        >
          {/* Button 1: Get Started (Primary Amber Gold #FFCC00, Sharp Square shape) */}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-none bg-[#FFCC00] text-[#101828] text-sm font-bold hover:bg-[#E6B800] transition-colors shadow-md"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4 text-[#101828]" />
          </Link>

          {/* Button 2: Contact Us (Secondary White Outline, Sharp Square shape) */}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-none border border-white text-white text-sm font-bold hover:bg-white hover:text-[#00509E] transition-colors"
          >
            <span>Contact Us</span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
