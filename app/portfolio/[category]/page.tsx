import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { PortfolioCategoryItems } from '@/app/components/portfolio/PortfolioCategoryItems';
import {
  getPortfolioCategoryBySlug,
  getPortfolioItemsByCategory,
  isPortfolioCategorySlug,
} from '@/lib/constants/portfolio-content';

interface PortfolioCategoryPageProps {
  params: { category: string };
}

export default function PortfolioCategoryPage({
  params,
}: Readonly<PortfolioCategoryPageProps>) {
  const categorySlug = params.category;

  if (!isPortfolioCategorySlug(categorySlug)) {
    notFound();
  }

  const category = getPortfolioCategoryBySlug(categorySlug);
  const items = getPortfolioItemsByCategory(category.slug);

  return (
    <main className='container-px pb-20 pt-32 md:pt-36'>
      <section className='mx-auto max-w-7xl space-y-10'>
        <div className='space-y-4'>
          <Link
            href='/portfolio'
            className='inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground'
          >
            <ArrowLeft className='h-4 w-4' />
            Back to categories
          </Link>

          <div className='space-y-3'>
            <h1 className='text-4xl font-bold md:text-6xl'>{category.title}</h1>
            <p className='max-w-2xl text-muted-foreground'>{category.description}</p>
          </div>
        </div>

        <PortfolioCategoryItems items={items} />
      </section>
    </main>
  );
}
