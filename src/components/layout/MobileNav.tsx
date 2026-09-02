'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, PhoneCall, ChevronRight } from 'lucide-react';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: Array<{ name: string; href: string }>;
  currentPath: string;
}

export default function MobileNav({
  isOpen,
  onClose,
  navLinks,
  currentPath
}: MobileNavProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden"
          />

          {/* Slide-in Mobile Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-4/5 max-w-sm bg-white shadow-2xl p-6 flex flex-col justify-between md:hidden"
          >
            <div>
              {/* Drawer Top Bar */}
              <div className="flex items-center justify-between pb-6 border-b border-gray-100">
                <Image
                  src="/assets/brandlogo.webp"
                  alt="Refund Authority"
                  width={140}
                  height={40}
                  className="h-8 w-auto object-contain"
                />
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                  aria-label="Close Menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="mt-8 space-y-2">
                {navLinks.map((link) => {
                  const isActive = currentPath === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={onClose}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl font-medium transition-all ${
                        isActive
                          ? 'bg-[#00509E]/10 text-[#00509E] font-semibold'
                          : 'text-[#324A6D] hover:bg-gray-50 hover:text-[#00509E]'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronRight className="w-4 h-4 opacity-50" />
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Mobile Footer CTA */}
            <div className="pt-6 border-t border-gray-100 space-y-4">
              <Link
                href="/contact"
                onClick={onClose}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#00509E] text-white font-semibold shadow-md hover:bg-[#003F7E] transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-[#FFCC00]" />
                <span>Contact Us</span>
              </Link>
              <div className="text-center text-xs text-gray-500">
                Support: <a href="mailto:support@refundauthority.co" className="text-[#00509E] underline">support@refundauthority.co</a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
