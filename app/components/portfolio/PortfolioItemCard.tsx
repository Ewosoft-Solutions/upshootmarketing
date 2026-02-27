import Image from 'next/image';
import { PlayCircle } from 'lucide-react';
import type { PortfolioItem } from '@/lib/constants/portfolio-content';

interface PortfolioItemCardProps {
  item: PortfolioItem;
  onOpen: (item: PortfolioItem) => void;
}

export function PortfolioItemCard({ item, onOpen }: Readonly<PortfolioItemCardProps>) {
  return (
    <button
      type='button'
      onClick={() => onOpen(item)}
      className='group w-full overflow-hidden rounded-2xl border border-border bg-card text-left transition-all hover:-translate-y-1 hover:shadow-lg'
    >
      <div className='relative aspect-16/10 overflow-hidden bg-muted'>
        {item.thumbnailUrl ? (
          <Image
            src={item.thumbnailUrl}
            alt={item.title}
            fill
            className='object-cover transition-transform duration-300 group-hover:scale-105'
            sizes='(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw'
          />
        ) : (
          <div className='h-full w-full bg-linear-to-br from-primary/20 via-accent/10 to-primary/30' />
        )}

        {(item.mediaType === 'video' || item.mediaType === 'embed') ? (
          <div className='absolute inset-0 grid place-items-center bg-black/20'>
            <PlayCircle className='h-14 w-14 text-white/90' />
          </div>
        ) : null}
      </div>

      <div className='space-y-2 p-5'>
        <h3 className='text-lg font-semibold text-foreground'>{item.title}</h3>
        <p className='line-clamp-2 text-sm text-muted-foreground'>{item.description}</p>
      </div>
    </button>
  );
}
