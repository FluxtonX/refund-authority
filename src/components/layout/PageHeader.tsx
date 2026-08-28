'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  currentPage: string;
}

export default function PageHeader({ title, subtitle, currentPage }: PageHeaderProps) {
  return (
    <div className="relative bg-[#00509E] text-white pt-32 pb-20 overflow-hidden">
      {/* Background Gradient & Subtle Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#003F7E] to-[#00509E] opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-medium text-[#C8D5DC] mb-4 uppercase tracking-wider">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#FFCC00]" />
            <span className="text-[#FFCC00]">{currentPage}</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            {title}
          </h1>

          {subtitle && (
            <p className="text-base sm:text-lg text-[#C8D5DC] leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
}
