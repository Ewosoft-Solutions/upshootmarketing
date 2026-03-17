'use client';

import Image from 'next/image';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import type { PortfolioItem } from '@/lib/constants/portfolio-content';
import { cn } from '@/lib/utils';

interface PortfolioPreviewModalProps {
  item: PortfolioItem | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PortfolioPreviewModal({
  item,
  open,
  onOpenChange,
}: Readonly<PortfolioPreviewModalProps>) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={cn('w-auto max-w-[95vw] gap-4 border-border bg-background p-4 sm:max-w-[92vw] sm:p-6')}
        showCloseButton
      >
        {item ? (
          <>
            <DialogHeader>
              <DialogTitle>{item.title}</DialogTitle>
            </DialogHeader>

            <div className={cn('mx-auto w-fit max-w-full overflow-hidden rounded-xl bg-black/90')}>
              {item.mediaType === 'image' ? (
                <Image
                  src={item.mediaSrc}
                  alt={item.title}
                  width={1600}
                  height={900}
                  className={cn('h-auto max-h-[78vh] w-auto max-w-full object-contain')}
                  sizes='(max-width: 768px) 92vw, (max-width: 1280px) 88vw, 1100px'
                />
              ) : null}

              {item.mediaType === 'video' ? (
                <video
                  src={item.mediaSrc}
                  controls
                  autoPlay
                  className={cn('h-auto max-h-[78vh] w-auto max-w-full object-contain')}
                >
                  <track kind='captions' />
                </video>
              ) : null}

              {item.mediaType === 'embed' ? (
                <iframe
                  src={item.mediaSrc}
                  title={item.title}
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                  className={cn('aspect-video h-auto w-[min(92vw,1100px)] max-w-full')}
                />
              ) : null}
            </div>
          </>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}
