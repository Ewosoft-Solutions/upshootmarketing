import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PortfolioCategoryItems } from '@/app/components/portfolio/PortfolioCategoryItems';
import { ArrowLinkButton } from '@/app/components/ui/arrow-link-button';
import { AnimatedSection } from '@/app/components/ui/animated-section';
import {
  getPortfolioCategoryBySlug,
  getPortfolioItemsByCategory,
  isPortfolioCategorySlug,
  portfolioCategories,
} from '@/lib/constants/portfolio-content';
import { createPageMetadata } from '@/lib/seo';
import { typography } from '@/lib/typography';
import { cn } from '@/lib/utils';

interface PortfolioCategoryPageProps {
  params: Promise<{ category: string }>;
}

export function generateStaticParams() {
  return portfolioCategories.map((category) => ({
    category: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: Readonly<PortfolioCategoryPageProps>): Promise<Metadata> {
  const resolvedParams = await params;
  const categorySlug = resolvedParams.category;

  if (!isPortfolioCategorySlug(categorySlug)) {
    return createPageMetadata({
      title: 'Portfolio Category',
      description: 'Explore our portfolio work.',
      path: '/portfolio',
    });
  }

  const category = getPortfolioCategoryBySlug(categorySlug);

  return createPageMetadata({
    title: `${category.title} Portfolio`,
    description: category.description,
    path: `/portfolio/${category.slug}`,
  });
}

export default async function PortfolioCategoryPage({
  params,
}: Readonly<PortfolioCategoryPageProps>) {
  const resolvedParams = await params;
  const categorySlug = resolvedParams.category;

  if (!isPortfolioCategorySlug(categorySlug)) {
    notFound();
  }

  const category = getPortfolioCategoryBySlug(categorySlug);
  const items = getPortfolioItemsByCategory(category.slug);

  return (
    <main className={cn('container-px pb-20 pt-32 md:pt-36')}>
      <section className={cn('mx-auto max-w-7xl space-y-10')}>
        <AnimatedSection animation='slideUp' duration='normal'>
          <div className={cn('space-y-4')}>
            <div className={cn('flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between')}>
              <ArrowLinkButton href='/portfolio' direction='back'>
                Back to Categories
              </ArrowLinkButton>
              {/* <ShimmerButton size='default' pulse={false}>
                <Link href='/pricing'>See our Packages</Link>
              </ShimmerButton> */}
            </div>

            <div className={cn('space-y-3')}>
              <h1 className={cn(typography.page.title, 'font-bold')}>
                {category.title}
              </h1>
              <p className={cn('max-w-2xl text-muted-foreground')}>
                {category.description}
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation='slideUp' delay='short' duration='normal'>
          <PortfolioCategoryItems items={items} />
        </AnimatedSection>
      </section>
    </main>
  );
}
