'use client';

import Image from 'next/image';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import type { PortfolioItem } from '@/lib/constants/portfolio-content';

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
        className='h-[92vh] max-w-[95vw] gap-4 border-border bg-background p-4 sm:p-6'
        showCloseButton
      >
        {item ? (
          <>
            <DialogHeader>
              <DialogTitle>{item.title}</DialogTitle>
            </DialogHeader>

            <div className='relative h-full min-h-0 w-full overflow-hidden rounded-xl bg-black/90'>
              {item.mediaType === 'image' ? (
                <Image
                  src={item.mediaSrc}
                  alt={item.title}
                  fill
                  className='object-contain'
                  sizes='95vw'
                />
              ) : null}

              {item.mediaType === 'video' ? (
                <video
                  src={item.mediaSrc}
                  controls
                  autoPlay
                  className='h-full w-full object-contain'
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
                  className='h-full w-full'
                />
              ) : null}
            </div>
          </>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}
