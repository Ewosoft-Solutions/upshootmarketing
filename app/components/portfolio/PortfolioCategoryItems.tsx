'use client';

import { useState } from 'react';
import { PortfolioItemCard } from '@/app/components/portfolio/PortfolioItemCard';
import { PortfolioPreviewModal } from '@/app/components/portfolio/PortfolioPreviewModal';
import type { PortfolioItem } from '@/lib/constants/portfolio-content';

interface PortfolioCategoryItemsProps {
  items: readonly PortfolioItem[];
}

export function PortfolioCategoryItems({ items }: Readonly<PortfolioCategoryItemsProps>) {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  return (
    <>
      <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
        {items.map((item) => (
          <PortfolioItemCard key={item.id} item={item} onOpen={setSelectedItem} />
        ))}
      </div>

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
