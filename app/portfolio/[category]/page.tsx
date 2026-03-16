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

interface PortfolioCategoryPageProps {
  params: Promise<{ category: string }>;
}

export function generateStaticParams() {
  return portfolioCategories.map((category) => ({
    category: category.slug,
  }));
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
    <main className='container-px pb-20 pt-32 md:pt-36'>
      <section className='mx-auto max-w-7xl space-y-10'>
        <AnimatedSection animation='slideUp' duration='normal'>
          <div className='space-y-4'>
            <div className='flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
              <ArrowLinkButton href='/portfolio' direction='back'>
                Back to Categories
              </ArrowLinkButton>
              {/* <ShimmerButton size='default' pulse={false}>
                <Link href='/pricing'>See our Packages</Link>
              </ShimmerButton> */}
            </div>

            <div className='space-y-3'>
              <h1 className='text-4xl font-bold md:text-6xl'>
                {category.title}
              </h1>
              <p className='max-w-2xl text-muted-foreground'>
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
