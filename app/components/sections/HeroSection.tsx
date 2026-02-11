'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { FlipCardGrid } from '@/app/components/sections/FlipCardGrid';

interface HeroSectionProps {
  onGetStarted?: () => void;
}

export function HeroSection({ onGetStarted }: Readonly<HeroSectionProps>) {
  return (
    <section
      id='home'
      className='relative flex flex-col min-h-screen items-center justify-center container-px pt-48 md:pt-32'
    >
      <div className='max-w-5xl mx-auto text-center'>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className='text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight text-balance'>
            Modern B2B Marketing That Builds Trust and Drives Revenue
          </h1>
          <p className='mt-6 text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto w-[90%] md:w-full'>
            We help companies build trust & convert high-value customers
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
      </div>

      <FlipCardGrid />
    </section>
  );
}
