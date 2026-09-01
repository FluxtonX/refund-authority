'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import NewsHeroSection from '@/components/features/NewsHeroSection';
import ServicesSectionFive from '@/components/features/ServicesSectionFive';
import newsData from '@/data/newsData.json';

export default function NewsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        
        {/* SECTION 1: News Hero Section (Dark Navy #1C244B Text, Light Blue #E6EFF8 Background) */}
        <NewsHeroSection />

        {/* SECTION 2: Latest Updates & Insights (Vibrant Blue, Extra Fat Bold Article Titles matching user screenshot) */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            {/* Section Header */}
            <div className="space-y-2 text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-semibold text-[#003366] tracking-tight leading-tight">
                Latest Updates and Insights
              </h2>
              <p className="text-base sm:text-lg text-[#324A6D] font-normal pt-1">
                Stay informed with the latest in cryptocurrency recovery and news.
              </p>
            </div>

            {/* 19 News Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-12 items-start pt-4">
              {newsData.map((item) => (
                <div key={item.id} className="space-y-2 text-left">
                  
                  {/* Article Title: Vibrant Blue #00509E, font-semibold */}
                  <h3 className="text-xl sm:text-[22px] font-semibold text-[#00509E] leading-[1.3] hover:underline transition-all">
                    <Link href={item.link}>
                      {item.title}
                    </Link>
                  </h3>

                  {/* Date: Soft Muted Gray/Blue */}
                  <p className="text-sm sm:text-base font-normal text-[#8898AA] pt-0.5">
                    {item.date}
                  </p>

                  {/* Read More Link: Bright Amber Gold #FFCC00, font-medium */}
                  <div className="pt-1">
                    <Link
                      href={item.link}
                      className="text-sm sm:text-base font-medium text-[#FFCC00] hover:underline inline-block"
                    >
                      Read More »
                    </Link>
                  </div>

                </div>
              ))}
            </div>

          </div>
        </section>

        {/* SECTION 3: Client Feedback (Blue #00509E bg Testimonial Section with large avatars) */}
        <ServicesSectionFive />

      </main>

      <Footer />
    </div>
  );
}
