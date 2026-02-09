'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { type EmblaOptionsType } from 'embla-carousel';
import { ReactNode, useCallback, useEffect, useState, Children } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface CarouselProps {
  children: ReactNode[];
  options?: EmblaOptionsType;
  autoplay?: boolean;
  autoplayDelay?: number;
  showControls?: boolean;
  showDots?: boolean;
  className?: string;
}

export function Carousel({
  children,
  options = { loop: true, align: 'start' },
  autoplay = false,
  autoplayDelay = 3000,
  showControls = true,
  showDots = true,
  className,
}: Readonly<CarouselProps>) {
  const plugins = autoplay ? [Autoplay({ delay: autoplayDelay, stopOnInteraction: false })] : [];
  const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className={cn('relative', className)}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {Children.map(children, (child) => (
            <div className="flex-[0_0_100%] min-w-0">
              {child}
            </div>
          ))}
        </div>
      </div>

      {showControls && (
        <>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm"
            onClick={scrollPrev}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm"
            onClick={scrollNext}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </>
      )}

      {showDots && (
        <div className="flex justify-center gap-2 mt-4">
          {scrollSnaps.map((snap, index) => (
            <button
              key={`snap-${snap}`}
              className={cn(
                'h-2 rounded-full transition-all',
                index === selectedIndex ? 'w-8 bg-primary' : 'w-2 bg-muted-foreground/30'
              )}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
