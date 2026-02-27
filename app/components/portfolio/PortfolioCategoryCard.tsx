import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { PortfolioCategory } from '@/lib/constants/portfolio-content';

interface PortfolioCategoryCardProps {
  category: PortfolioCategory;
}

export function PortfolioCategoryCard({ category }: Readonly<PortfolioCategoryCardProps>) {
  return (
    <Link
      href={`/portfolio/${category.slug}`}
      className='group block rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-lg'
    >
      <div className='relative aspect-16/10 overflow-hidden rounded-t-2xl bg-muted'>
        {category.coverImageUrl ? (
          <Image
            src={category.coverImageUrl}
            alt={category.title}
            fill
            className='object-cover transition-transform duration-300 group-hover:scale-105'
            sizes='(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw'
          />
        ) : null}
      </div>

      <div className='space-y-2 p-5'>
        <div className='flex items-center justify-between gap-3'>
          <h2 className='text-xl font-semibold text-foreground'>{category.title}</h2>
          <ArrowUpRight className='h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
        </div>
        <p className='text-sm text-muted-foreground'>{category.description}</p>
      </div>
    </Link>
  );
}
