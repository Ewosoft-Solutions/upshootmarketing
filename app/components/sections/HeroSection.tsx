'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onGetStarted?: () => void;
}

const clientLogos = [
  {
    id: 'chiropracticplus',
    name: 'ChiropracticPlus',
    src: '/assets/logos/clients/chiropracticplus.logo.svg',
  },
  { id: 'eems', name: 'EEMS', src: '/assets/logos/clients/eems.logo.svg' },
  {
    id: 'expressfunded',
    name: 'ExpressFunded',
    src: '/assets/logos/clients/expressfunded.logo.svg',
  },
  {
    id: 'hivebly',
    name: 'Hivebly',
    src: '/assets/logos/clients/hivebly.logo.svg',
  },
  {
    id: 'onemart',
    name: 'OneMart',
    src: '/assets/logos/clients/onemart.logo.svg',
  },
  {
    id: 'sandersonyatching',
    name: 'Sanderson Yatching',
    src: '/assets/logos/clients/sandersonyatching.logo.svg',
  },
];

const SEPARATOR_SRC = '/assets/logos/clients/separator.logo.svg';

/**
 * Build a flat array of ticker items: [logo, sep, logo, sep, ..., logo, sep]
 * Every logo is followed by a separator so the pattern is perfectly uniform.
 */
const tickerItems = clientLogos.flatMap((client, index) => [
  { type: 'logo' as const, id: client.id, name: client.name, src: client.src },
  ...(index < clientLogos.length - 1
    ? [{ type: 'separator' as const, id: `${client.id}-sep`, name: '', src: SEPARATOR_SRC }]
    : []),
]);

export function HeroSection({ onGetStarted }: Readonly<HeroSectionProps>) {
  const scrollTickerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollTickerRef,
    offset: ['start end', 'end start'],
  });

  // Map vertical scroll progress to horizontal translation:
  // Start with items offscreen right, end with last item exiting left
  const scrollX = useTransform(scrollYProgress, [0, 1], ['20%', '-80%']);

  return (
    <section
      id='home'
      className='relative px-6 pt-24'
    >
      <div className='flex min-h-screen items-center justify-center'>
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
        </div>
      </div>

      {/* Scroll-driven client logos ticker */}
      <div ref={scrollTickerRef} className='relative h-[80vh] md:h-[120vh] lg:h-[150vh]'>
        <div className='sticky top-1/2 -translate-y-1/2 w-screen overflow-hidden'>
          {/* Fade edges */}
          <div className='pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-linear-to-r from-background to-transparent' />
          <div className='pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-linear-to-l from-background to-transparent' />

          <motion.div
            className='flex items-center'
            style={{ x: scrollX }}
          >
            {tickerItems.map((item) =>
              item.type === 'logo' ? (
                <Image
                  key={`scroll-${item.id}`}
                  src={item.src}
                  alt={item.name}
                  width={0}
                  height={72}
                  className='h-12 w-auto shrink-0 mr-6 md:mr-12 md:h-[72px]'
                  style={{ width: 'auto' }}
                />
              ) : (
                <Image
                  key={`scroll-${item.id}`}
                  src={item.src}
                  alt=''
                  width={36}
                  height={36}
                  className='h-6 w-6 shrink-0 mr-6 md:mr-12 md:h-9 md:w-9'
                />
              )
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
