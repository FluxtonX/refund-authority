'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200/80">
      
      {/* Main White Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-start">
          
          {/* Column 1: Logo & Mission Statement (5 Cols) */}
          <div className="md:col-span-6 lg:col-span-5 space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/assets/brandlogo.webp"
                alt="Refund Authority"
                width={220}
                height={60}
                className="h-12 sm:h-14 w-auto object-contain"
              />
            </Link>
            <p className="text-base text-[#475467] leading-relaxed max-w-md">
              Our mission is to offer knowledgeable support to those impacted by fraudulent activity. We work within established legal frameworks and cooperate with relevant authorities where appropriate, providing guidance to help clients understand their options and move forward with confidence.
            </p>
          </div>

          {/* Column 2: Quick Links (3 Cols) */}
          <div className="md:col-span-3 lg:col-span-3 space-y-2">
            <h6 className="font-primary text-[#101828]">Quick Links</h6>
            <ul className="space-y-1.5 font-primary text-[#101828]">
              <li>
                <Link href="/" className="hover:text-[#00509E] transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#00509E] transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-[#00509E] transition-colors">Our Team</Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-[#00509E] transition-colors">FAQ</Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-[#00509E] transition-colors">NEWS</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Get In Touch (4 Cols) */}
          <div className="md:col-span-3 lg:col-span-4 space-y-4">
            <h6 className="font-primary text-[#101828]">Get In Touch</h6>
            <ul className="space-y-3.5 text-base text-[#324A6D]">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#00509E] shrink-0" />
                <a href="mailto:support@refundsauthority.com" className="font-medium hover:text-[#00509E] transition-colors">
                  Email: support@refundsauthority.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#00509E] shrink-0" />
                <a href="tel:14378862010" className="font-medium hover:text-[#00509E] transition-colors">
                  Phone: +1 (437) 886-2010
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#00509E] shrink-0 mt-1" />
                <span className="font-medium leading-normal">
                  Address: 800 Rue du Square-Victoria, Montréal, QC H3C 0B4, Canada
                </span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Bar - Blue Background #467FF7 / #00509E matching reference site */}
      <div className="bg-[#467FF7] text-[#C8D5DC] py-4 text-center text-sm font-light border-t border-blue-600/30">
        <div className="max-w-7xl mx-auto px-4">
          <p>© All Rights Reserved.</p>
        </div>
      </div>

    </footer>
  );
}
