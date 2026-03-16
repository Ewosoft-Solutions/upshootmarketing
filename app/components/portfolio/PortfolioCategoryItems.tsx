'use client';

import { useEffect, useState } from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { PortfolioItemCard } from '@/app/components/portfolio/PortfolioItemCard';
import { PortfolioPreviewModal } from '@/app/components/portfolio/PortfolioPreviewModal';
import type { PortfolioItem } from '@/lib/constants/portfolio-content';

interface PortfolioCategoryItemsProps {
  items: readonly PortfolioItem[];
}

const gridVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.08 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.28, ease: 'easeOut' },
  },
};

export function PortfolioCategoryItems({ items }: Readonly<PortfolioCategoryItemsProps>) {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [revealedItemId, setRevealedItemId] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const mediaQuery = globalThis.matchMedia('(hover: none), (pointer: coarse)');

    const updateTouchMode = () => {
      const isTouch = mediaQuery.matches;
      setIsTouchDevice(isTouch);

      if (!isTouch) {
        setRevealedItemId(null);
      }
    };

    updateTouchMode();
    mediaQuery.addEventListener('change', updateTouchMode);

    return () => {
      mediaQuery.removeEventListener('change', updateTouchMode);
    };
  }, []);

  const handleItemClick = (item: PortfolioItem) => {
    if (isTouchDevice && revealedItemId !== item.id) {
      setRevealedItemId(item.id);
      return;
    }

    setSelectedItem(item);
  };

  return (
    <>
      <motion.div
        className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'
        variants={gridVariants}
        initial={shouldReduceMotion ? undefined : 'hidden'}
        animate={shouldReduceMotion ? undefined : 'visible'}
      >
        {items.map((item) => (
          <motion.div
            key={item.id}
            variants={cardVariants}
            whileHover={shouldReduceMotion ? undefined : { y: -4, transition: { duration: 0.18 } }}
          >
            <PortfolioItemCard
              item={item}
              onOpen={handleItemClick}
              isTouchDevice={isTouchDevice}
              showTouchOverlay={revealedItemId === item.id}
            />
          </motion.div>
        ))}
      </motion.div>

      <PortfolioPreviewModal
        item={selectedItem}
        open={selectedItem !== null}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedItem(null);
          }
        }}
      />
    </>
  );
}
