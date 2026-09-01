'use client';

import React from 'react';
import Image from 'next/image';

export default function NewsHeroSection() {
  return (
    <section className="py-16 sm:py-20 bg-[#6497C7] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Heading Text in Dark Black (#101828) formatted in 4 rows */}
          <div className="lg:col-span-7 space-y-4 text-left">
            <h1 className="font-heading-l text-[#101828] text-3xl sm:text-4xl lg:text-[42px] font-semibold leading-[1.25] tracking-tight">
              Stay up to date with<br />
              news releases and<br />
              notices from the<br />
              Refund Authority.
            </h1>
          </div>

          {/* Right Column: Simple Image without card wrappers or shadows */}
          <div className="lg:col-span-5">
            <Image
              src="/assets/istockphoto-517903178-612x612-1.webp"
              alt="Stay up to date with news releases"
              width={612}
              height={408}
              priority
              className="w-full h-auto object-cover rounded-none"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
