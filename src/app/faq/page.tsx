'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FaqHeroSection from '@/components/features/FaqHeroSection';
import FaqCommonQuestionsSection from '@/components/features/FaqCommonQuestionsSection';
import FaqGetInTouchSection from '@/components/features/FaqGetInTouchSection';
import { ArrowRight, Play } from 'lucide-react';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const faqAccordionList: FaqItem[] = [
  {
    id: 'f-1',
    question: 'What is the process?',
    answer: 'Our process begins with a detailed review of your situation. We work closely with each individual to understand the specific details of their case and to outline the steps we will take moving forward. As a non-profit organization, we provide our services free of charge, allowing you to seek support without financial concern.'
  },
  {
    id: 'f-2',
    question: 'Are there any fees involved?',
    answer: 'As a non-profit organization, we do not charge for our services. Our work is carried out on a pro bono basis, reflecting our commitment to supporting individuals affected by financial fraud without financial barriers.'
  },
  {
    id: 'f-3',
    question: 'How long does the process take?',
    answer: 'The timeline for each case depends on various factors, including its complexity and the cooperation of involved parties. Following our initial review, we aim to provide a general timeframe to help set clear expectations from the outset.'
  },
  {
    id: 'f-4',
    question: 'What information do I need to provide?',
    answer: 'To help us provide effective support, it is important to share all relevant documentation related to your case. This may include transaction IDs, records of communication with involved parties, and any other supporting materials. Having comprehensive information allows us to better understand the situation.'
  },
  {
    id: 'f-5',
    question: 'How do I get started?',
    answer: 'You can get started by submitting a confidential inquiry through our website or reaching out to our support team directly. We will promptly review your details and schedule an initial consultation.'
  },
  {
    id: 'f-6',
    question: 'Is my information kept confidential?',
    answer: 'We take confidentiality and privacy seriously. Your personal information is handled with care and is not shared without your explicit consent. Protecting your data remains a top priority throughout our engagement.'
  }
];

export default function FaqPage() {
  // Accordion open item state (default first item open)
  const [openId, setOpenId] = useState<string | null>('f-1');

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        
        {/* SECTION 1: Exact Soft Blue #6497C7 FAQ Hero Section */}
        <FaqHeroSection />

        {/* SECTION 2: FAQ Section (Full-width top header + 2-Column layout aligned with 3rd item) */}
        <section className="py-16 sm:py-24 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Full-Width Top Section Header */}
            <div className="w-full text-left space-y-2 mb-10 lg:mb-12">
              <h2 className="font-heading-l text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#003366] leading-tight tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="font-body text-base sm:text-lg text-slate-700 font-normal">
                Here are some common questions.
              </p>
            </div>

            {/* 2-Column Grid: Left (Need Further Info aligned to 3rd item) & Right (Accordion List) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Left Column: Need Further Information Card Box (Top margin lg:mt-[165px] aligns with 3rd item 'How long does the process take?') */}
              <div className="lg:col-span-5 lg:mt-[165px]">
                <div className="bg-[#F0F4F8] p-6 sm:p-8 rounded-none border border-slate-200/80 space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#003366]">
                    Need further information?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                    We aim to address any questions you may have about our services and how we work. Transparency is important to us, and we welcome you to reach out with any concerns or specific inquiries. Below, we have compiled a list of commonly asked questions for your reference.
                  </p>

                  {/* Yellow CTA Button: Submit Inquiry */}
                  <div className="pt-2">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-none bg-[#FFCC00] text-[#101828] text-xs sm:text-sm font-bold hover:bg-[#E6B800] transition-colors shadow-md"
                    >
                      <span>Submit Inquiry</span>
                      <ArrowRight className="w-4 h-4 text-[#101828]" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right Column (Minimal Divider Accordion List) */}
              <div className="lg:col-span-7">
                <div className="border-b border-slate-200">
                  {faqAccordionList.map((item) => {
                    const isOpen = openId === item.id;
                    return (
                      <div key={item.id} className="border-t border-slate-200">
                        <button
                          onClick={() => toggleAccordion(item.id)}
                          className="w-full py-5 flex items-center justify-between text-left gap-4 hover:opacity-80 transition-opacity cursor-pointer group"
                        >
                          <span className="text-base sm:text-lg font-bold text-[#003366] group-hover:text-[#00509E] transition-colors">
                            {item.question}
                          </span>
                          
                          {/* Small solid right triangle indicator icon */}
                          <div className={`transition-transform duration-300 transform ${isOpen ? 'rotate-90 text-[#003366]' : 'rotate-0 text-[#003366]'}`}>
                            <Play className="w-3 h-3 fill-[#003366] text-[#003366]" />
                          </div>
                        </button>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25, ease: 'easeInOut' }}
                            >
                              <div className="pb-6 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
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
          </div>
        </section>

        {/* SECTION 3: Common Questions (2-Column 9 Accordions matching user screenshot 100% pixel-perfect) */}
        <FaqCommonQuestionsSection />

        {/* SECTION 4: Contact Options — Reach Out to Us / Get in Touch (Matching user screenshot 100% pixel-perfect) */}
        <FaqGetInTouchSection />

        {/* SECTION 5: Final CTA — Need assistance beyond our FAQ? (Left-aligned) */}
        <section className="py-20 bg-[#00509E] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight">
              Need assistance beyond our FAQ?
            </h2>
            <p className="text-base sm:text-lg text-white/95 leading-relaxed font-normal max-w-3xl">
              We aim to address any questions you may have about our services and how we work. Transparency is important to us, and we welcome you to reach out with any concerns or specific inquiries.
            </p>

            <div className="flex flex-wrap items-center justify-start gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-none bg-[#FFCC00] text-[#101828] text-sm font-bold hover:bg-[#E6B800] transition-colors shadow-md"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4 text-[#101828]" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-none border border-white text-white text-sm font-bold hover:bg-white hover:text-[#00509E] transition-colors"
              >
                <span>Learn More</span>
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
