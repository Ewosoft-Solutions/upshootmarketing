import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { PortfolioCategory } from '@/lib/constants/portfolio-content';
import { typography } from '@/lib/typography';
import { cn } from '@/lib/utils';

interface PortfolioCategoryCardProps {
  category: PortfolioCategory;
}

export function PortfolioCategoryCard({ category }: Readonly<PortfolioCategoryCardProps>) {
  return (
    <Link
      href={`/portfolio/${category.slug}`}
      className={cn('group block rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-lg')}
    >
      <div className={cn('relative aspect-16/10 overflow-hidden rounded-t-2xl bg-muted')}>
        {category.coverImageUrl ? (
          <Image
            src={category.coverImageUrl}
            alt={category.title}
            fill
            className={cn('object-cover transition-transform duration-300 group-hover:scale-105')}
            sizes='(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw'
          />
        ) : null}
      </div>

      <div className={cn('space-y-2 p-5')}>
        <div className={cn('flex items-center justify-between gap-3')}>
          <h2 className={cn(typography.card.title, 'font-semibold text-foreground')}>{category.title}</h2>
          <ArrowUpRight className={cn('h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5')} />
        </div>
        <p className={cn(typography.card.description, 'text-muted-foreground')}>{category.description}</p>
      </div>
    </Link>
  );
}
