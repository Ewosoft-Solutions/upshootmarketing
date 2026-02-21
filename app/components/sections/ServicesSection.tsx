'use client';

import { AnimatedSection } from '@/app/components/ui/animated-section';
import { ShimmerButton } from '@/app/components/ui/shimmer-button';

export function ServicesSection() {
  return (
    <section id='services' className='py-24 container-px bg-muted/40'>
      <div className='max-w-7xl mx-auto grid lg:grid-cols-2 gap-14'>
        <AnimatedSection animation='slideRight' duration='slow'>
          <h2 className='text-3xl lg:text-5xl font-bold mb-8 text-balance lg:leading-14'>
            We Build Brands brick by brick through good content.
          </h2>
          <ShimmerButton size='default'>Our Services</ShimmerButton>
        </AnimatedSection>

        <AnimatedSection animation='slideLeft' duration='slow' delay='short'>
          <p className='text-muted-foreground text-lg leading-relaxed'>
            We help our clients with the work beyond (and sometimes behind) the
            splashy ad campaigns and viral moments. We leverage content to help
            our clients consistently bring their unique perspective to the
            world, and educate, engage, and inspire like-minded people around
            it. Our clients compete on brand, and use content to get the upper
            hand to create trust and inspire belief.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default ServicesSection;
