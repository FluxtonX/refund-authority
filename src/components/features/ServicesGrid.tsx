'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { servicesData } from '@/data/servicesData';
import { Star, ArrowRight } from 'lucide-react';

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-white border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#003366]">
            Our Key Services
          </h2>

        </div>

        {/* 6 Cards Grid - Exact #F0F4F8 Card Background & Yellow #FFCC00 Star Icon */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-[#F0F4F8] p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* Yellow #FFCC00 Star Icon - Matching reference site */}
                <div className="w-fit mb-2">
                  <Star className="w-9 h-9 fill-[#FFCC00] text-[#FFCC00] drop-shadow-sm" />
                </div>

                {/* Title in #003366 Dark Navy */}
                <h3 className="text-xl font-bold text-[#003366]">
                  {service.title}
                </h3>

                {/* Description Text */}
                <p className="text-sm text-slate-700 leading-relaxed font-normal">
                  {service.shortDesc}
                </p>
              </div>

              {/* Square / Rectangular Learn More Button with #003366 border */}
              <div className="pt-4 border-t border-slate-200/60">
                <Link
                  href={`/services#${service.id}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-[#003366] text-[#003366] font-semibold text-sm hover:bg-[#003366] hover:text-white transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
