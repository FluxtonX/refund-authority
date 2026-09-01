'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, ShieldAlert, CheckCircle2 } from 'lucide-react';

export default function StatsSection() {
  const stats = [
    { label: 'Cases Evaluated', value: '1,200+', icon: <Users className="w-6 h-6 text-[#FFCC00]" /> },
    { label: 'Domains Takedown Support', value: '7,500+', icon: <ShieldAlert className="w-6 h-6 text-[#FFCC00]" /> },
    { label: 'Recovery Guidance Support', value: '98%', icon: <Award className="w-6 h-6 text-[#FFCC00]" /> },
    { label: 'Professional Standard Compliance', value: '100%', icon: <CheckCircle2 className="w-6 h-6 text-[#FFCC00]" /> }
  ];

  return (
    <section className="py-16 bg-[#00509E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-heading-l text-white mb-3">
            Key Achievements in Recovery Services
          </h2>
          <p className="font-body text-[#C8D5DC]">
            Through professional standards and a client-centered approach, we have built a dependable resource for individuals seeking guidance.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/15 text-center flex flex-col items-center justify-center space-y-2"
            >
              <div className="p-3 bg-white/10 rounded-xl mb-1">
                {stat.icon}
              </div>
              <div className="font-heading-l text-white tracking-tight">
                {stat.value}
              </div>
              <div className="font-body-s font-semibold text-[#C8D5DC] uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
