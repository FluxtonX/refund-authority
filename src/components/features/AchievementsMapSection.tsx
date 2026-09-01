'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star, MapPin, ArrowRight, Layers, Globe } from 'lucide-react';

export default function AchievementsMapSection() {
  // Map mode state: 'm' for Roadmap / Street, 'k' for Satellite Imagery
  const [mapMode, setMapMode] = useState<'m' | 'k'>('m');

  const locationQuery = '800%20Rue%20du%20Square-Victoria%2C%20Montr%C3%A9al%2C%20QC%20H4Z%201C3%2C%20Canada';
  const iframeSrc = `https://maps.google.com/maps?q=${locationQuery}&t=${mapMode}&z=14&output=embed&iwloc=near`;

  return (
    <section className="py-20 bg-white border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Key Achievements in Recovery Services Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl space-y-4"
        >
          <h2 className="font-heading-l text-[#003366] tracking-tight">
            Key Achievements in Recovery Services
          </h2>
          <p className="font-body text-slate-700">
            Our organization has supported numerous clients in addressing financial losses resulting from fraudulent activities. Through a commitment to professional standards and a client-centered approach, we have built a reputation as a dependable resource for individuals seeking guidance and resolution.
          </p>
        </motion.div>

        {/* Connect with Us & 3 Icon Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-10 pt-6 border-t border-gray-100"
        >
          <h2 className="font-heading-l text-[#003366] tracking-tight">
            Connect with Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Contact Information */}
            <div className="bg-[#F0F4F8] p-7 rounded-2xl border border-slate-200/80 space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Star className="w-6 h-6 fill-[#FFCC00] text-[#FFCC00]" />
                  <h3 className="font-heading-s font-semibold text-[#003366]">Contact Information</h3>
                </div>
                <p className="font-body-s text-slate-600">
                  Should you require assistance or have inquiries, please reach out through our contact details listed below.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200/60">
                <Link href="/contact" className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#003366] hover:underline">
                  <span>Get Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 2: Need Further Information */}
            <div className="bg-[#F0F4F8] p-7 rounded-2xl border border-slate-200/80 space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Star className="w-6 h-6 fill-[#FFCC00] text-[#FFCC00]" />
                  <h3 className="font-heading-s font-semibold text-[#003366]">Need further information?</h3>
                </div>
                <p className="font-body-s text-slate-600">
                  We provide clear information about our services and what to expect when working with us, and we encourage clients to ask questions before proceeding.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200/60">
                <Link href="/faq" className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#003366] hover:underline">
                  <span>View FAQ</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 3: Meet Our Team */}
            <div className="bg-[#F0F4F8] p-7 rounded-2xl border border-slate-200/80 space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Star className="w-6 h-6 fill-[#FFCC00] text-[#FFCC00]" />
                  <h3 className="font-primary text-[#003366]">Meet Our Team</h3>
                </div>
                <p className="text-sm font-bold text-[#101828] leading-relaxed">
                  Learn more about our team members, who bring both professional expertise and a client-focused approach to their work.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200/60">
                <Link href="/team" className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#003366] hover:underline">
                  <span>Meet Team</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Functional Interactive Google Map Container with Mode Switcher */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-white"
        >
          {/* Header Bar */}
          <div className="p-4 bg-slate-50 border-b border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-semibold text-[#003366]">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#FFCC00]" />
              <span>Headquarters: 800 Rue du Square-Victoria, Montréal, QC H4Z 1C3, Canada</span>
            </div>

            {/* Mode Switcher Button (Street vs Satellite Imagery) */}
            <button
              onClick={() => setMapMode(mapMode === 'm' ? 'k' : 'm')}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white border border-slate-300 text-[#003366] text-xs font-semibold hover:bg-[#003366] hover:text-white transition-all shadow-sm cursor-pointer"
              title="Click to toggle Map View Mode"
            >
              {mapMode === 'm' ? (
                <>
                  <Globe className="w-4 h-4 text-[#00509E]" />
                  <span>Show Satellite Imagery</span>
                </>
              ) : (
                <>
                  <Layers className="w-4 h-4 text-[#FFCC00]" />
                  <span>Show Street / Map View</span>
                </>
              )}
            </button>
          </div>

          {/* Dynamic iFrame */}
          <div className="relative w-full h-[400px] sm:h-[450px]">
            {/* Quick floating overlay button directly on the map */}
            <div className="absolute top-4 left-4 z-10">
              <button
                onClick={() => setMapMode(mapMode === 'm' ? 'k' : 'm')}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/95 backdrop-blur-sm border border-gray-300 text-[#101828] text-xs font-bold shadow-md hover:bg-white transition-all cursor-pointer"
              >
                {mapMode === 'm' ? (
                  <>
                    <Globe className="w-4 h-4 text-[#00509E]" />
                    <span>Satellite</span>
                  </>
                ) : (
                  <>
                    <Layers className="w-4 h-4 text-[#00509E]" />
                    <span>Map View</span>
                  </>
                )}
              </button>
            </div>

            <iframe
              key={mapMode}
              loading="lazy"
              src={iframeSrc}
              title="800 Rue du Square-Victoria, Montréal, QC H4Z 1C3, Canada"
              aria-label="800 Rue du Square-Victoria, Montréal, QC H4Z 1C3, Canada"
              className="w-full h-full border-0"
              allowFullScreen
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
