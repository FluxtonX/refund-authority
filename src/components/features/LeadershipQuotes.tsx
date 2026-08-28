'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function LeadershipQuotes() {
  const leaders = [
    {
      id: 'michael-hier',
      name: 'Michael Hier',
      role: 'General Counsel - Refund Authority',
      image: '/assets/Image-Feb-16-2026-08_41_16-PM.webp',
      quote: '“Over the past year, we have enhanced our efforts to help prevent cryptocurrency fraud and support those affected in seeking resolution. As the digital asset landscape continues to evolve, our focus remains on consumer protection, accountability, and assisting individuals in navigating the aftermath of fraudulent activity.”'
    },
    {
      id: 'sophie-leblanc',
      name: 'Sophie Leblanc',
      role: 'Blockchain Investigator - Refund Authority',
      image: '/assets/ezgif.com-resize-4.webp',
      quote: '“The rise of cryptocurrency scams has made our work more important than ever. This past year, we have concentrated on prevention, victim support, and improving the refund process so people affected by fraud are not left to navigate these challenges alone.”'
    }
  ];

  return (
    <section className="py-20 bg-[#00509E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title H2 - Exact white title matching reference site */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Guided by Experience
          </h2>
        </div>

        {/* 2 Leadership Feature Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex flex-col sm:flex-row gap-6 items-stretch bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-white/15 shadow-lg"
            >
              {/* Leader Portrait Image */}
              <div className="relative w-full sm:w-48 h-64 sm:h-auto rounded-2xl overflow-hidden shrink-0 border border-white/20 shadow-md">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Quote & Credentials Content */}
              <div className="flex flex-col justify-between space-y-4 flex-grow">
                <p className="text-sm sm:text-base text-white/95 leading-relaxed font-normal italic">
                  {leader.quote}
                </p>

                <div className="pt-4 border-t border-white/15">
                  <h3 className="text-xl font-bold text-white">
                    {leader.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-[#FFCC00] mt-0.5">
                    {leader.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
