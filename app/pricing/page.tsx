import type { Metadata } from 'next';
import { Check } from 'lucide-react';
import { ShimmerButton } from '@/app/components/ui/shimmer-button';
import { AnimatedSection } from '@/app/components/ui/animated-section';
import { cn } from '@/lib/utils';
import { createPageMetadata } from '@/lib/seo';
import { typography } from '@/lib/typography';

interface PricingPackage {
  name: string;
  description: string;
  priceLabel: string;
  accentClassName: string;
  features: readonly string[];
  popular?: boolean;
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
      '16 contents per month\n(2 videos + 2 graphics weekly)',
      'Social account creation',
      'Full social account audit and optimization',
      '1 paid ad campaign monthly',
    ],
  },
  {
    name: 'Growth',
    popular: true,
    description:
      'For brands ready to attract leads and scale. Built for businesses that want content working actively for growth, not just presence.',
    priceLabel: '$800',
    accentClassName: 'bg-brand-blue/25',
    features: [
      'Everything in Foundation',
      '28 contents per month\n(3 videos + 4 graphics weekly)',
      'Social media scheduling and management',
      'Engagement and audience growth strategy',
      'Monthly performance insights',
      '2 paid ad campaigns monthly',
    ],
  },
  {
    name: 'Authority',
    description:
      'For brands positioning as industry leaders. Designed for established brands looking to dominate their space and build long-term trust.',
    priceLabel: '$1500',
    accentClassName: 'bg-brand-yellow/25',
    features: [
      'Everything in Growth',
      '36 contents per month\n(4 videos + 5 graphics weekly)',
      'Advanced performance tracking and analytics',
      'Fully structured marketing campaigns',
      '3 competitor research + SWOT analysis monthly',
      'Funnels strategy, goals and KPIs',
      '3 paid ad campaigns monthly',
    ],
  },
];

export const metadata: Metadata = createPageMetadata({
  title: 'Pricing and Packages',
  description:
    'Explore flexible B2B content marketing packages from UpShoot Marketing built to improve visibility, engagement, and lead generation.',
  path: '/pricing',
});

export default function PricingPage() {
  return (
    <main className='container-px pb-20 pt-32 md:pt-36'>
      <section className='mx-auto max-w-7xl space-y-10'>
        <AnimatedSection animation='slideUp' duration='slow'>
          <div className='space-y-3'>
            <h1 className={`${typography.page.heroTitle} font-bold`}>
              Pricing & Packages
            </h1>
            <p className='text-muted-foreground'>
              We offer flexible content marketing packages designed to help
              brands grow with clarity, consistency, and impact.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection animation='slideUp' duration='slow' delay='short'>
          <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
            {pricingPackages.map((entry) => (
              <article
                key={entry.name}
                className={cn(
                  'group relative flex h-full flex-col overflow-hidden rounded-2xl border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg',
                  entry.popular ? 'border-black ring-1 ring-black/10' : 'border-border',
                )}
              >
                {entry.popular && (
                  <span className={`absolute right-4 top-4 rounded-full bg-black px-3 py-1 ${typography.card.badge} font-semibold text-white`}>
                    Most Popular
                  </span>
                )}
                <div className='p-6'>
                  <div
                    className={cn(
                      entry.accentClassName,
                      'rounded-2xl p-6 transition-transform duration-300 group-hover:scale-[1.01]',
                    )}
                  >
                    <span className='inline-flex rounded-xl bg-white px-4 py-1 font-medium text-foreground'>
                      {entry.name}
                    </span>
                    <p className='mt-10 text-muted-foreground'>Starting from</p>
                    <p className={`${typography.card.price} font-semibold tracking-tight text-foreground`}>
                      {entry.priceLabel}
                    </p>
                  </div>
                </div>

                <div className='flex flex-1 flex-col p-6'>
                  <p className={`${typography.card.description} text-foreground/90`}>
                    {entry.description}
                  </p>

                  <ul className={`mb-8 mt-6 space-y-3 ${typography.card.description} text-foreground/90`}>
                    {entry.features.map((feature) => {
                      const isInheritance = feature.startsWith('Everything in');

                      return (
                        <li
                          key={feature}
                          className={`grid grid-cols-[1rem_1fr] items-start gap-2 ${
                            isInheritance ? 'font-semibold text-foreground' : ''
                          }`}
                        >
                          <span className='mt-1 flex size-4 items-center justify-center rounded-full bg-foreground/60'>
                            <Check className='size-3 text-white stroke-[2.5]' />
                          </span>
                          <span className='whitespace-pre-line'>{feature}</span>
                        </li>
                      );
                    })}
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
        </AnimatedSection>
      </section>
    </main>
  );
}
