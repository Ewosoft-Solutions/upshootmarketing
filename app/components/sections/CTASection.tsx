'use client';

import { AnimatedSection } from '@/app/components/ui/animated-section';
import { ShimmerButton } from '@/app/components/ui/shimmer-button';

export function CTASection() {
  return (
    <section className='py-24 container-px bg-muted/40'>
      <div className='max-w-4xl mx-auto text-center'>
        <AnimatedSection animation='slideUp'>
          <h2 className='text-3xl md:text-5xl font-bold mb-6'>
            Become Part of our Team
          </h2>
          <p className='text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto mb-10'>
            We help our clients with the work beyond (& sometimes behind) the
            splashy ad campaigns and viral moments. We leverage content to help
            our clients consistently bring their unique perspective to the
            world, and educate, engage, and inspire like- minded people around
            it
          </p>
          <ShimmerButton>Join the Team</ShimmerButton>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default CTASection;
