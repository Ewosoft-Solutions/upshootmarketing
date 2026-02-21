'use client';

import { motion } from 'framer-motion';

import { AnimatedSection } from '@/app/components/ui/animated-section';
import { getStaggerContainer } from '@/lib/animations/config';
import { ShimmerButton } from '@/app/components/ui/shimmer-button';

export function ServicesSection() {
  return (
    <section id='services' className='py-24 container-px bg-muted/40'>
      <div className='max-w-7xl mx-auto grid md:grid-cols-2 gap-14'>
        <AnimatedSection animation='slideUp'>
          <h2 className='text-3xl md:text-5xl font-bold mb-8 text-balance md:leading-14'>
            We Build Brands brick by brick through good content.
          </h2>
          <ShimmerButton size='default'>Our Services</ShimmerButton>
        </AnimatedSection>

        <motion.div
          variants={getStaggerContainer('normal')}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.3 }}
          className='text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto mb-10'
        >
          <p>
            We help our clients with the work beyond (and sometimes behind) the
            splashy ad campaigns and viral moments. We leverage content to help
            our clients consistently bring their unique perspective to the
            world, and educate, engage, and inspire like-minded people around
            it. Our clients compete on brand, and use content to get the upper
            hand to create trust and inspire belief.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default ServicesSection;
