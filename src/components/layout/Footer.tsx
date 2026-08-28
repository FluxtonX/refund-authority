'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200/80">
      
      {/* Main White Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Logo & Mission Statement (5 Cols) */}
          <div className="md:col-span-6 lg:col-span-5 space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/assets/brandlogo.webp"
                alt="Refund Authority"
                width={160}
                height={48}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-[#475467] leading-relaxed font-normal max-w-md">
              Our mission is to offer knowledgeable support to those impacted by fraudulent activity. We work within established legal frameworks and cooperate with relevant authorities where appropriate, providing guidance to help clients understand their options and move forward with confidence.
            </p>
          </div>

          {/* Column 2: Quick Links (3 Cols) */}
          <div className="md:col-span-3 lg:col-span-3 space-y-3">
            <h6 className="text-base font-bold text-[#101828]">Quick Links</h6>
            <ul className="space-y-2.5 text-sm text-[#324A6D] font-medium">
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
          <div className="md:col-span-3 lg:col-span-4 space-y-3">
            <h6 className="text-base font-bold text-[#101828]">Get In Touch</h6>
            <ul className="space-y-3 text-sm text-[#324A6D]">
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#00509E] shrink-0" />
                <a href="mailto:support@refundsauthority.com" className="hover:text-[#00509E] transition-colors">
                  Email: support@refundsauthority.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#00509E] shrink-0" />
                <a href="tel:14378862010" className="hover:text-[#00509E] transition-colors">
                  Phone: +1 (437) 886-2010
                </a>
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
