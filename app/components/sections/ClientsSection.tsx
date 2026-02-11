'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

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
 * Build a flat array of ticker items: [logo, sep, logo, sep, ..., logo]
 * Separators only appear between logos, not after the last one.
 */
const tickerItems = clientLogos.flatMap((client, index) => [
  { type: 'logo' as const, id: client.id, name: client.name, src: client.src },
  ...(index < clientLogos.length - 1
    ? [
        {
          type: 'separator' as const,
          id: `${client.id}-sep`,
          name: '',
          src: SEPARATOR_SRC,
        },
      ]
    : []),
]);

export function ClientsSection() {
  const scrollTickerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollTickerRef,
    offset: ['start end', 'end start'],
  });

  // Map vertical scroll progress to horizontal translation:
  // Start with items offscreen right, end with last item exiting left
  const scrollX = useTransform(scrollYProgress, [0, 1], ['20%', '-80%']);

  return (
    <section id='clients' className='relative'>
      <div
        ref={scrollTickerRef}
        className='relative h-[80vh] md:h-[120vh] lg:h-[150vh]'
      >
        <div className='sticky top-1/2 -translate-y-1/2 w-screen overflow-hidden'>
          {/* Fade edges */}
          <div className='pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-linear-to-r from-background to-transparent' />
          <div className='pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-linear-to-l from-background to-transparent' />

          <motion.div className='flex items-center' style={{ x: scrollX }}>
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
              ),
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ClientsSection;
