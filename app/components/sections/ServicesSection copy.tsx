'use client';

import { AnimatedSection } from '@/app/components/ui/animated-section';
import { motion } from 'framer-motion';
import { getStaggerContainer, staggerItem } from '@/lib/animations/config';
import { Lightbulb, Video, TrendingUp, Palette } from 'lucide-react';

const services = [
  {
    id: 'content-strategy',
    icon: Lightbulb,
    title: 'Content Strategy',
    description: 'Strategic content planning that connects with your audience and drives meaningful engagement.',
  },
  {
    id: 'video-production',
    icon: Video,
    title: 'Video Production',
    description: 'High-quality video content that tells your story and captivates your target audience.',
  },
  {
    id: 'growth-marketing',
    icon: TrendingUp,
    title: 'Growth Marketing',
    description: 'Data-driven campaigns designed to scale your business and maximize ROI.',
  },
  {
    id: 'brand-design',
    icon: Palette,
    title: 'Brand Design',
    description: 'Creative design solutions that make your brand stand out in a crowded marketplace.',
  },
];

export function ServicesSection() {
  return (
    <section id="services" className='py-24 container-px bg-background'>
      <div className='max-w-7xl mx-auto'>
        <AnimatedSection animation="slideUp" className='text-center mb-16'>
          <h2 className='text-3xl md:text-5xl font-bold mb-4'>
            Our Services
          </h2>
          <p className='text-muted-foreground text-lg max-w-2xl mx-auto'>
            We offer comprehensive marketing solutions to help your business grow and succeed
          </p>
        </AnimatedSection>

        <motion.div
          variants={getStaggerContainer('normal')}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={staggerItem}
              className='p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group'
            >
              <div className='w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors'>
                <service.icon className='w-6 h-6 text-primary' />
              </div>
              <h3 className='text-xl font-semibold mb-2'>{service.title}</h3>
              <p className='text-muted-foreground text-base'>{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ServicesSection;