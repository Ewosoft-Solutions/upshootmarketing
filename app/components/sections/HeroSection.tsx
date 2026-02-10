'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onGetStarted?: () => void;
}

const clientLogos = [
  { id: 'marketing-1', name: 'Marketing', category: 'Marketing' },
  { id: 'marketing-2', name: 'Marketing', category: 'Marketing' },
  { id: 'business-growth-1', name: 'Business Growth', category: 'Business Growth' },
  { id: 'business-growth-2', name: 'Business Growth', category: 'Business Growth' },
  { id: 'branding-1', name: 'Branding', category: 'Branding' },
  { id: 'branding-2', name: 'Branding', category: 'Branding' },
];

export function HeroSection({ onGetStarted }: Readonly<HeroSectionProps>) {
  return (
    <section id="home" className='relative flex min-h-screen items-center justify-center px-6 pt-24'>
      <div className='max-w-5xl mx-auto text-center'>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className='text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight text-balance'>
            Modern B2B Marketing That Builds Trust and Drives Revenue
          </h1>
          <p className='mt-6 text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto'>
            We help companies build trust, & convert high-value customers
          </p>

          <div className='mt-10 flex justify-center'>
            {/* CTA: Pulse glow + shimmer + arrow nudge */}
            <motion.div
              animate={{
                scale: [1, 1.04, 1],
                boxShadow: [
                  '0 0 0 0 rgba(0, 0, 0, 0)',
                  '0 0 20px 4px rgba(0, 0, 0, 0.15)',
                  '0 0 0 0 rgba(0, 0, 0, 0)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className='rounded-4xl'
            >
              <Button
                size='lg'
                onClick={onGetStarted}
                className='group relative overflow-hidden text-base px-8 py-6 rounded-4xl flex items-center justify-center gap-2'
              >
                {/* Shimmer overlay */}
                <span className='pointer-events-none absolute inset-0 animate-shimmer'>
                  <span className='absolute inset-0 -skew-x-12 bg-linear-to-r from-transparent via-white/20 dark:via-black/15 to-transparent' />
                </span>
                Get Started
                <motion.span
                  className='inline-flex'
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
                </motion.span>
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Client Logos Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className='mt-20'
        >
          <p className='text-sm text-muted-foreground mb-6'>Our Clients</p>
          
          <div className='relative overflow-hidden'>
            <motion.div
              className='flex gap-4 justify-center flex-wrap'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {clientLogos.map((client, index) => (
                <motion.div
                  key={client.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                >
                  <Badge
                    variant="outline"
                    className="px-6 py-2 text-sm bg-card/50 backdrop-blur-sm"
                  >
                    {client.category}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
