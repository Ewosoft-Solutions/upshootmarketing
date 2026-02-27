import { Button } from '@/components/ui/button';

interface PricingPackage {
  name: string;
  description: string;
  priceLabel: string;
  features: readonly string[];
}

const pricingPackages: readonly PricingPackage[] = [
  {
    name: 'Starter',
    description: 'Best for new brands getting consistent visibility.',
    priceLabel: 'Custom Quote',
    features: ['Monthly content calendar', 'Basic design support', '1 campaign report'],
  },
  {
    name: 'Growth',
    description: 'For teams focused on scaling engagement and leads.',
    priceLabel: 'Custom Quote',
    features: ['Multi-format content production', 'Social media management', 'Bi-weekly optimization'],
  },
  {
    name: 'Performance',
    description: 'Advanced execution for aggressive growth goals.',
    priceLabel: 'Custom Quote',
    features: ['Meta ads creative + testing', 'Strategy + ideation workshops', 'Weekly performance reviews'],
  },
];

export default function PricingPage() {
  return (
    <main className='container-px pb-20 pt-32 md:pt-36'>
      <section className='mx-auto max-w-7xl space-y-10'>
        <div className='space-y-3'>
          <h1 className='text-4xl font-bold md:text-6xl'>Pricing & Package</h1>
          <p className='max-w-2xl text-muted-foreground'>
            Choose a package based on your growth stage. Final pricing is tailored to your scope.
          </p>
        </div>

        <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
          {pricingPackages.map((entry) => (
            <article
              key={entry.name}
              className='rounded-2xl border border-border bg-card p-6 shadow-sm'
            >
              <h2 className='text-2xl font-semibold'>{entry.name}</h2>
              <p className='mt-2 text-sm text-muted-foreground'>{entry.description}</p>
              <p className='mt-5 text-xl font-semibold'>{entry.priceLabel}</p>

              <ul className='mt-5 space-y-2 text-sm text-muted-foreground'>
                {entry.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>

              <Button className='mt-6 w-full' variant='outline'>
                Request Package
              </Button>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
