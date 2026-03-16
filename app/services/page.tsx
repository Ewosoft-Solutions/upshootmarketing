import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ShimmerButton } from '@/app/components/ui/shimmer-button';
import { AnimatedSection } from '@/app/components/ui/animated-section';
import { ArrowLinkButton } from '@/app/components/ui/arrow-link-button';
import { createPageMetadata } from '@/lib/seo';

interface ServiceCard {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

interface ApproachStep {
  title: string;
  description: string;
}

const serviceCards: readonly ServiceCard[] = [
  {
    title: 'Content Strategy Services',
    description:
      'Reach your goals with a content strategy that connects with the right people and turns your customers into lifelong fans.',
    imageSrc: '/assets/images/pages/about/stats-pic-1.jpg',
    imageAlt: 'Team planning content strategy',
  },
  {
    title: 'Brand Identity Services',
    description:
      'Position your brand to win with a unique identity that tells your story and makes you stand out from your competition.',
    imageSrc: '/assets/images/pages/about/stats-pic-2.jpg',
    imageAlt: 'Brand identity and design presentation',
  },
  {
    title: 'Content Creation Services',
    description:
      "Engage your audience at every touchpoint with original content that's on brand, on budget, and on time.",
    imageSrc: '/assets/images/pages/about/stats-pic-3.jpg',
    imageAlt: 'Content production and filming setup',
  },
  {
    title: 'Marketing AI Solutions',
    description:
      'Improve ROI with custom AI solutions that help you scale your content and work more efficiently.',
    imageSrc: '/assets/images/pages/about/stats-pic-2.jpg',
    imageAlt: 'AI-powered campaign analytics dashboard',
  },
];

const approachSteps: readonly ApproachStep[] = [
  {
    title: 'Audit',
    description:
      'Our research highlights strengths, uncovers gaps, and identifies opportunities to improve your online visibility.',
  },
  {
    title: 'Content Strategy',
    description:
      'We create a roadmap to clean up messaging inconsistencies, fill content gaps, and capture attention.',
  },
  {
    title: 'Creative Execution',
    description:
      'Our creative teams deliver engaging content that grabs attention and drives leads.',
  },
];

export const metadata: Metadata = createPageMetadata({
  title: 'B2B Marketing Services',
  description:
    'Discover UpShoot Marketing services including content strategy, brand identity, content creation, and AI-powered marketing solutions.',
  path: '/services',
});

export default function ServicesPage() {
  return (
    <main className='container-px pb-20 pt-32 md:pt-36'>
      <section className='mx-auto max-w-7xl space-y-14 md:space-y-16'>
        <div className='grid gap-10 lg:grid-cols-2 lg:gap-12'>
          <AnimatedSection animation='slideRight' duration='slow'>
            <div className='space-y-6'>
              <div className='space-y-4'>
                <h1 className='text-4xl font-bold md:text-6xl'>Our Services</h1>
                <p className='max-w-xl text-muted-foreground'>
                  We blend these areas of expertise to create brand storytelling
                  systems that earn attention, build trust, and drive leads
                  through SEO and AEO.
                </p>
              </div>
              <ShimmerButton size='default' pulse={false}>
                <Link href='/pricing'>See our Packages</Link>
              </ShimmerButton>
            </div>
          </AnimatedSection>

          <AnimatedSection animation='slideLeft' duration='slow' delay='short'>
            <p className='text-muted-foreground leading-relaxed'>
              The traditional B2B SaaS playbook is done. SEO has been disrupted,
              cold email is ignored, and acquisition costs keep rising. The
              funnel has fractured, and AI search has eclipsed it all. You need
              a clear path through the chaos, and we&apos;re here to give it to
              you.
            </p>
          </AnimatedSection>
        </div>

        <AnimatedSection animation='slideUp' duration='slow'>
          <div className='relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-muted/50'>
            <div className='container-px py-12 md:py-16'>
              <div className='mx-auto max-w-7xl space-y-6'>
                <div className='flex flex-col items-start justify-between gap-4 md:flex-row md:items-center'>
                  <h2 className='text-3xl font-semibold'>What we do</h2>
                  <ArrowLinkButton href='/portfolio'>
                    See our Portfolio
                  </ArrowLinkButton>
                </div>

                <div className='grid gap-4 md:grid-cols-2 xl:grid-cols-4'>
                  {serviceCards.map((service) => (
                    <article
                      key={service.title}
                      className='group overflow-hidden rounded-3xl border border-border/50 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg'
                    >
                      <div className='relative h-48 overflow-hidden'>
                        <Image
                          src={service.imageSrc}
                          alt={service.imageAlt}
                          fill
                          className='object-cover transition-transform duration-500 group-hover:scale-105'
                          sizes='(min-width: 1280px) 23vw, (min-width: 768px) 48vw, 100vw'
                        />
                      </div>
                      <div className='space-y-4 p-5'>
                        <h3 className='text-xl font-semibold'>
                          {service.title}
                        </h3>
                        <p className='text-sm leading-relaxed text-muted-foreground'>
                          {service.description}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation='slideUp' duration='slow' delay='short'>
          <div className='space-y-6'>
            <h2 className='text-3xl font-semibold'>Our Approach</h2>
            <div className='grid gap-4 md:grid-cols-3'>
              {approachSteps.map((step) => (
                <article
                  key={step.title}
                  className='rounded-2xl border border-muted bg-muted/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md'
                >
                  <h3 className='text-2xl font-semibold'>{step.title}</h3>
                  <p className='mt-3 text-muted-foreground'>
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>
    </main>
  );
}
