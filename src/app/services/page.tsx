'use client';

import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServicesSectionOne from '@/components/features/ServicesSectionOne';
import ServicesSectionTwo from '@/components/features/ServicesSectionTwo';
import ServicesSectionThree from '@/components/features/ServicesSectionThree';
import ServicesSectionFour from '@/components/features/ServicesSectionFour';
import ServicesSectionFive from '@/components/features/ServicesSectionFive';

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* SECTION 1: Services Hero — Client-Focused / Transparent Assistance (Blue #00509E, Centered Text, No Image) */}
        <ServicesSectionOne />

        {/* SECTION 2: Assistance for Investment Fraud Cases (Image on Left, 3 Headings on Right) */}
        <ServicesSectionTwo />

        {/* SECTION 3: Our Expertise — Guidance for Investment Losses (4 Cards in 1 Row) */}
        <ServicesSectionThree />

        {/* SECTION 4: Get Personalized Assistance Today (Blue #00509E bg, Inline Email Subscriber Bar) */}
        <ServicesSectionFour />

        {/* SECTION 5: Client Feedback (Blue #00509E bg, Simple Testimonial Slider with Large Avatars & Yellow Chevrons) */}
        <ServicesSectionFive />

        {/* SECTION 6: Commitment to Client-Centered Support (White bg, Heading Left, Paragraph Right) */}
        <section className="py-16 sm:py-20 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Heading H2 */}
              <div className="lg:col-span-5">
                <h2 className="font-heading-l text-[#003366] leading-tight tracking-tight">
                  Commitment to Client-Centered Support
                </h2>
              </div>

              {/* Right Column: Paragraph Text */}
              <div className="lg:col-span-7">
                <p className="font-body text-slate-700 leading-relaxed font-normal">
                  Our organization has supported numerous individuals in addressing financial losses resulting from fraudulent activity. Through a commitment to professional standards and a client-centered approach, we have developed a reputation as a trusted resource for those seeking guidance and resolution.
                </p>
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
