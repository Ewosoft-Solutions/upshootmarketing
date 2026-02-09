'use client';

import { AnimatedSection } from '@/app/components/ui/animated-section';
import { Badge } from '@/components/ui/badge';

const clients = [
  { id: 'marketing-solutions', name: 'Marketing Solutions', category: 'Marketing' },
  { id: 'growth-partners', name: 'Growth Partners', category: 'Marketing' },
  { id: 'business-growth-co', name: 'Business Growth Co', category: 'Business Growth' },
  { id: 'scale-up-inc', name: 'Scale Up Inc', category: 'Business Growth' },
  { id: 'brand-studio', name: 'Brand Studio', category: 'Branding' },
  { id: 'creative-agency', name: 'Creative Agency', category: 'Branding' },
  { id: 'digital-marketing-hub', name: 'Digital Marketing Hub', category: 'Marketing' },
  { id: 'enterprise-solutions', name: 'Enterprise Solutions', category: 'Business Growth' },
];

function getAnimationDelay(index: number): 'none' | 'short' | 'medium' | 'long' {
  if (index === 0) return 'none';
  if (index <= 2) return 'short';
  if (index <= 4) return 'medium';
  return 'long';
}

export function ClientsSection() {
  return (
    <section className='py-16 px-6 bg-muted/30'>
      <div className='max-w-7xl mx-auto'>
        <AnimatedSection animation="fade" className='text-center mb-12'>
          <p className='text-sm text-muted-foreground mb-8'>Trusted by leading brands</p>
          
          <div className='flex flex-wrap justify-center gap-6 items-center'>
            {clients.slice(0, 6).map((client, index) => (
              <AnimatedSection
                key={client.id}
                animation="scale"
                delay={getAnimationDelay(index)}
              >
                <Badge
                  variant="outline"
                  className="px-6 py-3 text-sm bg-card/80 backdrop-blur-sm hover:bg-card transition-colors"
                >
                  {client.category}
                </Badge>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default ClientsSection;