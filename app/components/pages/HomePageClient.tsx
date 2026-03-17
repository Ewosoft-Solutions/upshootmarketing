'use client';

import { HeroSection } from '@/app/components/sections/HeroSection';
import { AboutSection } from '@/app/components/sections/AboutSection';
import { ServicesSection } from '@/app/components/sections/ServicesSection';
import { PortfolioSection } from '@/app/components/sections/PortfolioSection';
import { ClientsSection } from '@/app/components/sections/ClientsSection';
import { CTASection } from '@/app/components/sections/CTASection';
import { FAQSection } from '@/app/components/sections/FAQSection';
import { TestimonialsSection } from '@/app/components/sections/TestimonialsSection';

export function HomePageClient() {
  return (
    <main>
      <HeroSection />
      <ClientsSection />
      <AboutSection />
      <PortfolioSection />
      <ServicesSection />
      <CTASection />
      <FAQSection />
      <TestimonialsSection />
    </main>
  );
}
