'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function ServicesSectionFour() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setEmail('');
    }, 5000);
  };

  return (
    <section className="py-20 sm:py-24 bg-[#00509E] text-white relative overflow-hidden">
      
      {/* Background Overlay Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-center">
        
        {/* Title & Subtitle in Pure White */}
        <div className="space-y-3 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">
            Get Personalized Assistance Today
          </h2>
          <p className="text-sm sm:text-base text-white/95 leading-relaxed font-normal">
            We recognize the difficulties that can follow financial loss due to fraudulent activity. We offer tailored guidance and support based on each individual’s circumstances.
          </p>
        </div>

        {/* Exact Inline Email Subscription / Inquiry Form with Blue Section Match */}
        <div className="max-w-2xl mx-auto">
          {formSubmitted ? (
            <div className="py-8 text-center space-y-2 bg-white/10 backdrop-blur-md p-6 border border-white/20">
              <CheckCircle2 className="w-10 h-10 text-[#FFCC00] mx-auto" />
              <h3 className="text-xl font-bold text-white">Inquiry Submitted</h3>
              <p className="text-xs text-white/90">
                Thank you! Our case team will review your email and contact you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch gap-0 border border-white/30 focus-within:border-[#FFCC00] transition-all shadow-lg">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Please enter your email"
                className="flex-grow px-5 py-4 text-sm text-[#101828] bg-white outline-none placeholder:text-slate-400 font-normal"
              />
              <button
                type="submit"
                className="px-9 py-4 bg-[#FFCC00] text-[#101828] text-sm font-bold hover:bg-[#E6B800] transition-colors shrink-0 cursor-pointer"
              >
                Submit Inquiry
              </button>
            </form>
          )}

          {/* Terms Disclaimer */}
          <p className="text-xs text-white/80 mt-3 font-normal">
            By submitting this form, you acknowledge and agree to our Terms and Conditions.
          </p>
        </div>

      </div>
    </section>
  );
}
