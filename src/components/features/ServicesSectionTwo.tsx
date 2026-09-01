'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ServicesSectionTwo() {
  return (
    <section className="py-16 sm:py-20 bg-[#F9FAFB] border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image (global_services.webp, Square shape) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-none overflow-hidden shadow-lg border border-slate-200 bg-white">
              <Image
                src="/assets/global_services.webp"
                alt="Assistance for Investment Fraud Cases"
                width={800}
                height={586}
                className="w-full h-auto object-cover hover:scale-102 transition-transform duration-500"
              />
            </div>
          </motion.div>

          {/* Right Column: 3 Headings with Paragraphs */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Heading 1 & Paragraph 1 */}
            <div className="space-y-2">
              <h3 className="font-primary text-[#003366]">
                Assistance for Investment Fraud Cases
              </h3>
              <p className="font-body text-slate-700">
                Our service is structured to assist individuals in addressing losses resulting from investment fraud. We apply our experience and work within established legal frameworks, including cooperation with relevant Canadian authorities where applicable, to provide reliable guidance throughout each case.
              </p>
            </div>

            {/* Heading 2 & Paragraph 2 */}
            <div className="space-y-2 pt-2 border-t border-slate-200/70">
              <h3 className="font-primary text-[#003366]">
                A Non-Profit Approach
              </h3>
              <p className="font-body text-slate-600">
                As a non-profit organization, we do not operate on a success-fee basis. Our services are provided without charge to those we support, reflecting our commitment to assisting individuals affected by financial fraud.
              </p>
            </div>

            {/* Heading 3 & Paragraph 3 */}
            <div className="space-y-2 pt-2 border-t border-slate-200/70">
              <h3 className="font-primary text-[#003366]">
                Expertise You Can Trust
              </h3>
              <p className="font-body text-slate-600">
                Our team’s experience with blockchain analysis supports our ability to review transaction data thoroughly. This capability allows us to examine cases in detail and provide informed guidance to those we assist.
              </p>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
