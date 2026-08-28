'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { PhoneCall, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
      
      {/* Background Image Container - Clean minimal dark tint overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/hero_image.webp"
          alt="Refund Authority Hero Background"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Subtle, minimal dark overlay so image is clear and crisp */}
        <div className="absolute inset-0 bg-[#00509E]/40 bg-gradient-to-r from-[#003F7E]/80 via-[#00509E]/50 to-transparent" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl space-y-6">
          
          {/* Main Headline H1 - Exact text from reference site */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.18]"
          >
            A conversation could change everything.{' '}
            <span className="block mt-1">Reach out today.</span>
          </motion.h1>

          {/* Subtext Paragraph - Exact text from reference site */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base sm:text-lg text-white/90 leading-relaxed font-normal max-w-2xl drop-shadow-sm"
          >
            We are dedicated to helping victims of investment and cryptocurrencies scams.
            <br className="hidden sm:inline" />
            Our team operates with transparency and professionalism, providing clear guidance throughout the process. We aim to support you in navigating your options and restoring confidence where possible.
          </motion.p>

          {/* Two Hero CTA Buttons - Square/Rectangular Shape: Get Help & Contact Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            {/* Button 1: Get Help (Primary Amber Gold, Square Shape) */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md bg-[#FFCC00] text-[#101828] text-base font-bold hover:bg-[#E6B800] transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <span>Get Help</span>
              <ArrowRight className="w-4 h-4 text-[#101828]" />
            </Link>

            {/* Button 2: Contact Us (Secondary White Outline, Square Shape) */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md bg-transparent border-2 border-white text-white text-base font-bold hover:bg-white/15 transition-all duration-200 shadow-sm"
            >
              <PhoneCall className="w-4 h-4 text-[#FFCC00]" />
              <span>Contact Us</span>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
