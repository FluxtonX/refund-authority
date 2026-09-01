'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { expertiseCards } from '@/data/servicesPageData';
import { ArrowRight } from 'lucide-react';

export default function ServicesSectionThree() {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="w-full space-y-3">
          <span className="font-heading-s font-semibold text-[#00509E] tracking-wider uppercase">
            Our Expertise
          </span>
          <h2 className="font-heading-l text-[#003366]">
            Guidance for Investment Losses
          </h2>
          <p className="font-body text-slate-700">
            We focus on assisting individuals who have experienced financial losses due to cryptocurrency fraud or questionable investment schemes. Our experienced team is committed to offering clear guidance and practical support throughout each case.
          </p>
        </div>

        {/* 4 Cards in 1 Single Row (Square Shape, No Rounded Corners, Matching Reference Site) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {expertiseCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-[#F3F5F8] p-6 sm:p-7 rounded-none border border-slate-200/80 flex flex-col justify-between items-center text-center space-y-6 hover:shadow-md transition-all duration-300"
            >
              <div className="space-y-3 flex-1 flex flex-col justify-start">
                {/* Card Title (Dark Navy #003366, Centered) */}
                <h3 className="font-primary text-[#003366] leading-snug">
                  {card.title}
                </h3>

                {/* Card Description (Centered) */}
                <p className="font-body-s text-slate-600">
                  {card.description}
                </p>
              </div>

              {/* Card Button (Centered square shape) */}
              <div className="pt-3 w-full">
                <Link
                  href={card.link}
                  className="inline-flex items-center justify-center gap-2 w-full max-w-[200px] px-7 py-3.5 rounded-none border-2 border-[#003366] text-[#003366] text-sm sm:text-base font-normal hover:bg-[#003366] hover:text-white transition-all shadow-sm"
                >
                  <span>{card.buttonText}</span>
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
