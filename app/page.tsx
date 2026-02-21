'use client';

import { useState } from 'react';
import { Navbar } from '@/app/components/layout/Navbar';
import { Footer } from '@/app/components/layout/Footer';
import { HeroSection } from '@/app/components/sections/HeroSection';
import { AboutSection } from '@/app/components/sections/AboutSection';
import { ServicesSection } from '@/app/components/sections/ServicesSection';
import { PortfolioSection } from '@/app/components/sections/PortfolioSection';
import { ArticlesSection } from '@/app/components/sections/ArticlesSection';
import { ClientsSection } from '@/app/components/sections/ClientsSection';
import { CTASection } from '@/app/components/sections/CTASection';
import { GetStartedModal } from '@/app/components/modals/GetStartedModal';

export default function HomePage() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Navbar />

      <main>
        <HeroSection onGetStarted={() => setOpen(true)} />
        <ClientsSection />
        <AboutSection />
        <PortfolioSection />
        <ServicesSection />
        <CTASection />
        <ArticlesSection />
      </main>

      <Footer />

      <GetStartedModal open={open} onOpenChange={setOpen} />
    </>
  );
}
