'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import TeamClientFeedback from '@/components/features/TeamClientFeedback';
import teamData from '@/data/teamData.json';
import { ArrowRight, Mail, ShieldCheck, Eye, HeartHandshake } from 'lucide-react';

export default function TeamPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        
        {/* SECTION 1: Hero Section — Our Areas of Focus (Blue #00509E, Centered Text, No Image) */}
        <section className="py-20 sm:py-24 bg-[#00509E] text-white relative overflow-hidden">
          
          {/* Subtle Background Radial Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            
            {/* Eyebrow Tag: Guidance for Fraud-Affected Individuals */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-base sm:text-lg font-bold text-[#FFCC00] uppercase tracking-wider"
            >
              Guidance for Fraud-Affected Individuals
            </motion.div>

            {/* Main Title H1: Our Areas of Focus */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight tracking-tight max-w-3xl mx-auto"
            >
              Our Areas of Focus
            </motion.h1>

            {/* Description Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-white/95 leading-relaxed font-normal max-w-3xl mx-auto"
            >
              We focus on assisting individuals who have experienced financial losses due to romance or cryptocurrency-related fraud. Our team operates within Canadian legal frameworks and prioritizes the needs and concerns of those we support. We apply blockchain analysis and legal experience to evaluate each situation thoroughly.
            </motion.p>

            {/* Two Centered Square CTA Buttons: Contact Us & Learn More */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-4 pt-4"
            >
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
            </motion.div>

          </div>
        </section>

        {/* SECTION 2: Meet Our Team (Single Column Layout — 1 Single Member per Row) */}
        <section className="py-16 sm:py-24 bg-white border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            {/* Section Title & Subtitle */}
            <div className="text-center space-y-3 max-w-3xl mx-auto">
              <h2 className="font-heading-xl text-4xl sm:text-5xl lg:text-6xl font-bold text-[#003366] tracking-tight">
                Meet Our Team
              </h2>
              <p className="text-base sm:text-lg font-bold text-[#101828] leading-relaxed">
                Learn more about our team members, who combine professional experience with a supportive, client-focused approach to their work.
              </p>
            </div>

            {/* 13 Team Members — 1 Single Member per Full-Width Row */}
            <div className="space-y-8">
              {teamData.map((member, idx) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.05 }}
                  className="bg-[#F9FAFB] p-6 sm:p-8 rounded-none border border-slate-200/80 flex flex-col md:flex-row gap-8 items-start hover:shadow-md transition-all duration-300"
                >
                  {/* Left Side: Profile Image */}
                  <div className="relative w-full md:w-56 h-64 sm:h-72 rounded-none overflow-hidden shrink-0 border border-slate-200/90 shadow-sm bg-white">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top hover:scale-103 transition-transform duration-500"
                    />
                  </div>

                  {/* Right Side: Details (Name, Role, Bio, Email) */}
                  <div className="space-y-4 flex-1">
                    <div>
                      <h3 className="text-2xl font-bold text-[#003366]">
                        {member.name}
                      </h3>
                      <p className="text-sm font-semibold text-[#FFCC00] mt-1">
                        {member.role}
                      </p>
                    </div>

                    <p className="text-base font-semibold text-slate-800 leading-relaxed">
                      {member.bio}
                    </p>

                    <div className="pt-3 border-t border-slate-200/60 flex items-center gap-2 text-sm text-[#00509E] font-medium">
                      <span className="text-xs uppercase font-bold tracking-wider text-slate-500">Contacts</span>
                      <span className="text-slate-300">|</span>
                      <Mail className="w-4 h-4 text-[#00509E] shrink-0" />
                      <a href={`mailto:${member.email}`} className="hover:underline text-slate-700 hover:text-[#00509E]">
                        {member.email}
                      </a>
                    </div>
                  </div>

                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* SECTION 3: Values ("Integrity", "Transparency", "Client Focus") */}
        <section className="py-16 sm:py-20 bg-[#F9FAFB] border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-semibold text-[#003366]">
                Our Core Principles
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Integrity */}
              <div className="bg-white p-8 rounded-none border border-slate-200/80 space-y-4 text-center">
                <div className="w-12 h-12 rounded-none bg-[#F0F4F8] flex items-center justify-center mx-auto text-[#003366]">
                  <ShieldCheck className="w-6 h-6 text-[#003366]" />
                </div>
                <h3 className="text-xl font-bold text-[#003366]">Integrity</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  We uphold the highest standards of honesty and fairness, ensuring our clients can trust our actions and words.
                </p>
              </div>

              {/* Transparency */}
              <div className="bg-white p-8 rounded-none border border-slate-200/80 space-y-4 text-center">
                <div className="w-12 h-12 rounded-none bg-[#F0F4F8] flex items-center justify-center mx-auto text-[#003366]">
                  <Eye className="w-6 h-6 text-[#003366]" />
                </div>
                <h3 className="text-xl font-bold text-[#003366]">Transparency</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  Our processes are clear and open, providing clients with every detail they need to feel secure in their decisions.
                </p>
              </div>

              {/* Client Focus */}
              <div className="bg-white p-8 rounded-none border border-slate-200/80 space-y-4 text-center">
                <div className="w-12 h-12 rounded-none bg-[#F0F4F8] flex items-center justify-center mx-auto text-[#003366]">
                  <HeartHandshake className="w-6 h-6 text-[#003366]" />
                </div>
                <h3 className="text-xl font-bold text-[#003366]">Client Focus</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  Your needs guide our approach, ensuring personalized and dedicated support throughout your journey with us.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* SECTION 4: Client Feedback (Exact layout matching WordPress screenshot) */}
        <TeamClientFeedback />

        {/* SECTION 5: Take the Next Step Toward Recovery CTA (Separate section with margin gap) */}
        <section className="mt-12 sm:mt-16 lg:mt-20 py-20 bg-[#00509E] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <h2 className="font-heading-l text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Take the Next Step Toward Recovery
            </h2>
            <p className="text-base sm:text-lg text-white/95 leading-relaxed font-normal max-w-2xl mx-auto">
              We understand the challenges you’ve faced. Our dedicated team is here to guide you through the recovery process, ensuring clarity and support every step of the way.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
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
