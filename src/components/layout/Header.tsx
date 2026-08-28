'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, PhoneCall } from 'lucide-react';
import MobileNav from './MobileNav';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Removed Contact Us link from list, ending at NEWS
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Our Team', href: '/team' },
    { name: 'FAQ', href: '/faq' },
    { name: 'NEWS', href: '/news' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav shadow-md py-3 border-b border-blue-900/10'
          : 'bg-white/95 py-4 border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/assets/brandlogo.webp"
            alt="Refund Authority"
            width={160}
            height={48}
            priority
            className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation Links (Home, Services, Our Team, FAQ, NEWS) */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold transition-colors duration-200 ${
                  isActive
                    ? 'text-[#00509E] border-b-2 border-[#00509E] pb-1'
                    : 'text-[#324A6D] hover:text-[#00509E]'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Button: Contact Us with Call Icon */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#00509E] text-white text-sm font-semibold hover:bg-[#003F7E] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            <PhoneCall className="w-4 h-4 text-[#FFCC00]" />
            <span>Contact Us</span>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileNavOpen(true)}
          className="md:hidden p-2 rounded-lg text-[#101828] hover:bg-gray-100 transition-colors"
          aria-label="Open Mobile Menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      <MobileNav
        isOpen={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
        navLinks={navLinks}
        currentPath={pathname}
      />
    </header>
  );
}
