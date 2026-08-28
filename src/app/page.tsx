import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/features/HeroSection';
import ServicesGrid from '@/components/features/ServicesGrid';
import LeadershipQuotes from '@/components/features/LeadershipQuotes';
import VictimSupport from '@/components/features/VictimSupport';
import NewsCarousel from '@/components/features/NewsCarousel';
import AchievementsMapSection from '@/components/features/AchievementsMapSection';

export const metadata = {
  title: 'Refund Authority – Comprehensive Solutions for Cryptocurrency Fraud',
  description: 'Helping victims of investment and cryptocurrency scams with transparency, legal compliance, and blockchain forensics.'
};

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ServicesGrid />
        <LeadershipQuotes />
        <VictimSupport />
        <NewsCarousel />
        <AchievementsMapSection />
      </main>
      <Footer />
    </div>
  );
}
