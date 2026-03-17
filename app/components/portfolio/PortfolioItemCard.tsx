import Image from 'next/image';
import { PlayCircle } from 'lucide-react';
import type { PortfolioItem } from '@/lib/constants/portfolio-content';
import { typography } from '@/lib/typography';
import { cn } from '@/lib/utils';

interface PortfolioItemCardProps {
  item: PortfolioItem;
  onOpen: (item: PortfolioItem) => void;
  isTouchDevice: boolean;
  showTouchOverlay: boolean;
}

export function PortfolioItemCard({
  item,
  onOpen,
  isTouchDevice,
  showTouchOverlay,
}: Readonly<PortfolioItemCardProps>) {
  let ctaLabel = 'View project';

  if (isTouchDevice) {
    ctaLabel = showTouchOverlay ? 'Tap to open project' : 'Tap to preview details';
  }

  return (
    <button
      type='button'
      onClick={() => onOpen(item)}
      className={cn('group w-full overflow-hidden rounded-2xl border border-border bg-card text-left transition-all duration-200 hover:-translate-y-1 hover:shadow-lg')}
    >
      <div className={cn('relative aspect-16/10 overflow-hidden bg-muted')}>
        {item.thumbnailUrl ? (
          <Image
            src={item.thumbnailUrl}
            alt={item.title}
            fill
            className={cn('object-cover transition-transform duration-300 group-hover:scale-105')}
            sizes='(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw'
          />
        ) : (
          <div className={cn('h-full w-full bg-linear-to-br from-primary/20 via-accent/10 to-primary/30')} />
        )}

        {(item.mediaType === 'video' || item.mediaType === 'embed') ? (
          <div className={cn('absolute inset-0 grid place-items-center bg-black/20')}>
            <PlayCircle className={cn('h-14 w-14 text-white/90')} />
          </div>
        ) : null}

        <div
          className={cn(
            'absolute inset-0 flex flex-col justify-end bg-black/65 p-4 text-white transition-all duration-200',
            showTouchOverlay
              ? 'opacity-100'
              : 'opacity-0 md:translate-y-2 md:group-hover:translate-y-0 md:group-hover:opacity-100',
          )}
        >
          <h3 className={cn(typography.card.titleSmall, 'font-semibold text-white')}>{item.title}</h3>
          <p className={cn('line-clamp-2 text-white/90', typography.portfolio.description)}>{item.description}</p>
          <p className={cn('mt-3 font-medium tracking-wide text-white/85 uppercase', typography.portfolio.cta)}>
            {ctaLabel}
          </p>
        </div>
      </div>
    </button>
  );
}
