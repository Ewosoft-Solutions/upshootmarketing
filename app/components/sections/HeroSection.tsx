'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ShimmerButton } from '@/app/components/ui/shimmer-button';
import { FlipCardGrid } from '@/app/components/sections/FlipCardGrid';
import { typography } from '@/lib/typography';

export function HeroSection() {
  return (
    <section
      id='home'
      className='relative flex flex-col items-center justify-center container-px pt-32 md:pt-32'
    >
      <div className='max-w-5xl mx-auto text-center'>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={`${typography.hero.title} font-semibold leading-tight text-balance`}>
            Modern B2B Marketing That Builds Trust and Drives Revenue
          </h1>
          <p className={`mt-6 text-muted-foreground ${typography.hero.description} max-w-3xl mx-auto w-[90%] md:w-full`}>
            We help companies build trust & convert high-value customers
          </p>

          <div className='mt-10 flex justify-center'>
            <ShimmerButton asChild>
              <Link href='/get-started'>Get Started</Link>
            </ShimmerButton>
          </div>
        </motion.div>
      </div>

      <FlipCardGrid />
    </section>
  );
}
