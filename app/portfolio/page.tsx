import { PortfolioCategoryCard } from '@/app/components/portfolio/PortfolioCategoryCard';
import { portfolioCategories } from '@/lib/constants/portfolio-content';

export default function PortfolioPage() {
  return (
    <main className='container-px pb-20 pt-32 md:pt-36'>
      <section className='mx-auto max-w-7xl space-y-10'>
        <div className='flex flex-col gap-3'>
          <h1 className='text-4xl font-bold md:text-6xl'>Our Portfolio</h1>
          <p className='max-w-2xl text-muted-foreground'>
            Browse our work by service line and preview deliverables in full-screen.
          </p>
        </div>

        <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
          {portfolioCategories.map((category) => (
            <PortfolioCategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </section>
    </main>
  );
}
