'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight } from 'lucide-react';

export default function VictimSupport() {
  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading, Descriptions, Simple SECURE/ADVANCED Text Blocks & 2 Buttons */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Title H2 */}
            <h2 className="font-heading-l text-[#003366] leading-tight">
              Specialized Support for Victims of Investment Scams
            </h2>

            {/* Paragraphs */}
            <div className="space-y-4 font-body text-slate-700">
              <p>
                We recognize the emotional and financial challenges that can follow cryptocurrency fraud. Based in Canada, we offer guidance to individuals seeking to explore refund options and understand the steps involved in addressing their situation.
              </p>
              <p>
                Our mission is to provide clear, compassionate support and practical assistance, helping clients feel informed and guided throughout the recovery process.
              </p>
            </div>

            {/* Simple SECURE & ADVANCED Text Blocks (Matching reference site) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              
              {/* SECURE Block */}
              <div className="space-y-2">
                <h3 className="font-heading-l text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#003366] tracking-tight">
                  SECURE
                </h3>
                <p className="font-body text-slate-600">
                  We prioritize transparency in every interaction, ensuring clients understand the process and their options. Our team is devoted to restoring hope and confidence.
                </p>
              </div>

              {/* ADVANCED Block */}
              <div className="space-y-2">
                <h3 className="font-heading-l text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#003366] tracking-tight">
                  ADVANCED
                </h3>
                <p className="font-body text-slate-600">
                  We utilize blockchain analysis tools to support our case assessments, reinforcing our commitment to providing thorough and informed guidance for our clients.
                </p>
              </div>

            </div>

            {/* Two Square Buttons: Get Help & Learn More */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              
              {/* Button 1: Get Help (Primary Amber Gold #FFCC00, Square shape) */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-md bg-[#FFCC00] text-[#101828] text-sm font-bold hover:bg-[#E6B800] transition-all duration-200 shadow-sm"
              >
                <span>Get Help</span>
                <ArrowRight className="w-4 h-4 text-[#101828]" />
              </Link>

              {/* Button 2: Learn More (Secondary Outline, Square shape with chevron) */}
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-md border border-[#003366] text-[#003366] text-sm font-bold hover:bg-[#003366] hover:text-white transition-all duration-200"
              >
                <span>Learn More</span>
                <ChevronRight className="w-4 h-4" />
              </Link>

            </div>

          </motion.div>

          {/* Right Column: Image victims.webp */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-white">
              <Image
                src="/assets/victims.webp"
                alt="Specialized Support for Victims"
                width={628}
                height={460}
                className="w-full h-auto object-cover hover:scale-102 transition-transform duration-500"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
