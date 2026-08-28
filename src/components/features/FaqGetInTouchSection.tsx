'use client';

import React from 'react';

// Custom Pixel-Perfect SVG Icons matching the screenshot
function EmailIcon() {
  return (
    <svg className="w-8 h-8 text-[#FFCC00]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M1.5 4.5A1.5 1.5 0 0 1 3 3h18a1.5 1.5 0 0 1 1.5 1.5v15a1.5 1.5 0 0 1-1.5 1.5H3a1.5 1.5 0 0 1-1.5-1.5v-15Zm3 1.5v.75l7.5 5.25 7.5-5.25V6H4.5Zm15 3.3-6.91 4.837a1 1 0 0 1-1.18 0L4.5 9.3V18h15V9.3Z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-8 h-8 text-[#FFCC00]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
    </svg>
  );
}

function LocationPinIcon() {
  return (
    <svg className="w-8 h-8 text-[#FFCC00]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" />
    </svg>
  );
}

export default function FaqGetInTouchSection() {
  return (
    <section className="py-20 sm:py-28 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 text-center">
        
        {/* Header */}
        <div className="space-y-3 max-w-2xl mx-auto">
          <span className="text-sm sm:text-base font-semibold text-[#101828] tracking-normal">
            Reach Out to Us
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#003366] tracking-tight">
            Get in Touch
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal pt-1">
            We are here to assist you with your inquiries. Our team is dedicated to providing clear guidance and support.
          </p>
        </div>

        {/* 3 Clean Columns matching user screenshot 100% pixel-perfect (Custom SVG icons) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 items-start">
          
          {/* Column 1: Email Us */}
          <div className="space-y-4 text-center max-w-xs mx-auto">
            <div className="flex justify-center">
              <EmailIcon />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#003366]">
              Email Us
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
              For questions or support, reach us at any time. We respond promptly to all emails.
            </p>
            <div className="pt-2">
              <a
                href="mailto:support@refundsauthority.com"
                className="text-xs sm:text-sm font-semibold text-slate-800 underline hover:text-[#00509E] transition-colors"
              >
                support@refundsauthority.com
              </a>
            </div>
          </div>

          {/* Column 2: Call Us */}
          <div className="space-y-4 text-center max-w-xs mx-auto">
            <div className="flex justify-center">
              <PhoneIcon />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#003366]">
              Call Us
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
              For immediate assistance, feel free to call us. We are available to help with your needs.
            </p>
            <div className="pt-2">
              <a
                href="tel:+15145360702"
                className="text-xs sm:text-sm font-semibold text-slate-800 hover:text-[#00509E] transition-colors"
              >
                +1 (514) 536-0702
              </a>
            </div>
          </div>

          {/* Column 3: Office Location */}
          <div className="space-y-4 text-center max-w-xs mx-auto">
            <div className="flex justify-center">
              <LocationPinIcon />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#003366]">
              Office Location
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
              Our office is open for consultations and discussions. Visit us to learn more about our services.
            </p>
            <div className="pt-2">
              <span className="text-xs sm:text-sm font-semibold text-slate-800">
                800 Rue du Square-Victoria, Montréal, Canada
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
