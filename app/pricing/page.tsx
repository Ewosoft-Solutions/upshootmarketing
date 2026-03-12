import { Check } from 'lucide-react';
import { ShimmerButton } from '@/app/components/ui/shimmer-button';

interface PricingPackage {
  name: string;
  description: string;
  priceLabel: string;
  accentClassName: string;
  features: readonly string[];
}

const pricingPackages: readonly PricingPackage[] = [
  {
    name: 'Foundation',
    description:
      'For brands building visibility and consistency. Ideal for businesses ready to show up professionally and communicate clearly online.',
    priceLabel: '$400',
    accentClassName: 'bg-brand-green/25',
    features: [
      'Content strategy and ideation',
      '16 contents per month (2 Videos, 2 graphics weekly)',
      'Social account creation',
      'Full social account audit and optimization',
      '1 paid ads monthly',
    ],
  },
  {
    name: 'Growth',
    description:
      'For brands ready to attract leads and scale. Built for businesses that want content working actively for growth, not just presence.',
    priceLabel: '$800',
    accentClassName: 'bg-brand-blue/25',
    features: [
      'Content strategy and ideation',
      '28 contents per month (3 Videos, 4 graphics weekly)',
      'Social media content scheduling and management',
      'Engagement and audience growth strategy',
      'Monthly performance insights',
      'Social account creation',
      'Full social account audit and optimization',
      '2 paid ads monthly',
    ],
  },
  {
    name: 'Authority',
    description:
      'For brands positioning as industry leaders. Designed for established brands looking to dominate their space and build long-term trust.',
    priceLabel: '$1500',
    accentClassName: 'bg-brand-yellow/25',
    features: [
      'Full-scale content marketing strategy plus ideation',
      '36 contents per month (4 Videos, 5 graphics weekly)',
      'Social media content scheduling and management',
      'Advanced performance tracking & Analytics',
      'Fully structured marketing campaigns',
      '3 competitors research and Swot Analysis monthly',
      'Social Account creation and optimization',
      'Engagement and audience growth strategy',
      'Funnels strategy, Goals and KPIs',
      '3 paid ads monthly',
    ],
  },
];

export default function PricingPage() {
  return (
    <main className='container-px pb-20 pt-32 md:pt-36'>
      <section className='mx-auto max-w-7xl space-y-10'>
        <div className='space-y-3'>
          <h1 className='text-4xl font-bold md:text-6xl'>Pricing & Packages</h1>
          <p className='text-muted-foreground'>
            We offer flexible content marketing packages designed to help brands
            grow with clarity, consistency, and impact.
          </p>
        </div>

        <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
          {pricingPackages.map((entry) => (
            <article
              key={entry.name}
              className='flex h-full flex-col overflow-hidden rounded-2xl border border-border shadow-sm'
            >
              <div className='p-6'>
                <div className={`${entry.accentClassName} p-6 rounded-2xl`}>
                  <span className='inline-flex rounded-xl bg-white px-4 py-1 font-medium text-foreground'>
                    {entry.name}
                  </span>
                  <p className='mt-10 text-muted-foreground'>Starting from</p>
                  <p className='text-5xl font-semibold tracking-tight text-foreground'>
                    {entry.priceLabel}
                  </p>
                </div>
              </div>

              <div className='flex flex-1 flex-col p-6'>
                <p className='text-base text-foreground/90'>
                  {entry.description}
                </p>

                <ul className='mb-8 mt-6 space-y-3 text-base text-foreground/90'>
                  {entry.features.map((feature) => (
                    <li
                      key={feature}
                      className='grid grid-cols-[1rem_1fr] items-start gap-2'
                    >
                      <span className='mt-1 flex size-4 items-center justify-center rounded-full bg-foreground/60'>
                        <Check className='size-3 text-white stroke-[2.5]' />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <ShimmerButton
                  icon={null}
                  pulse={false}
                  className='mt-auto w-full bg-black! text-white! hover:bg-black/90!'
                >
                  Request Package
                </ShimmerButton>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
