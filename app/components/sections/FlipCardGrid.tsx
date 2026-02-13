'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

interface HeroCard {
  front: string;
  back: string;
  alt: string;
}

// Reorder this array to change the display order of cards
const heroCards: HeroCard[] = [
  {
    front: '/assets/images/hero-section/marketing.front.png',
    back: '/assets/images/hero-section/marketing.back.png',
    alt: 'Marketing',
  },
  {
    front: '/assets/images/hero-section/business-growth.front.png',
    back: '/assets/images/hero-section/business-growth.back.png',
    alt: 'Business Growth',
  },
  {
    front: '/assets/images/hero-section/branding.front.png',
    back: '/assets/images/hero-section/branding.back.png',
    alt: 'Branding',
  },
];

interface FlipCardProps extends HeroCard {
  isFlipped: boolean;
  onFlip: () => void;
}

function FlipCard({ front, back, alt, isFlipped, onFlip }: Readonly<FlipCardProps>) {
  return (
    <button 
      type='button'
      className='flip-card aspect-4/3 cursor-pointer w-full'
      onClick={onFlip}
      aria-label={`Flip card for ${alt}`}
    >
      <div className={`flip-card-inner relative w-full h-full ${isFlipped ? 'flip-card-flipped' : ''}`}>
        <div className='flip-card-face flip-card-front absolute inset-0 rounded-[24px] overflow-hidden'>
          <Image
            src={front}
            alt={alt}
            fill
            sizes='(min-width: 768px) 33vw, 100vw'
            className='object-cover'
          />
        </div>
        <div className='flip-card-face flip-card-back absolute inset-0 rounded-[24px] overflow-hidden'>
          <Image
            src={back}
            alt={`${alt} - back`}
            fill
            sizes='(min-width: 768px) 33vw, 100vw'
            className='object-cover'
          />
        </div>
      </div>
    </button>
  );
}

export function FlipCardGrid() {
  const [flippedCard, setFlippedCard] = useState<string | null>(null);

  const handleCardFlip = (cardAlt: string) => {
    setFlippedCard((current) => (current === cardAlt ? null : cardAlt));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className='mt-20 mb-32 w-full grid grid-cols-1 md:grid-cols-3 gap-6'
    >
      {heroCards.map((card) => (
        <FlipCard 
          key={card.alt} 
          {...card} 
          isFlipped={flippedCard === card.alt}
          onFlip={() => handleCardFlip(card.alt)}
        />
      ))}
    </motion.div>
  );
}
