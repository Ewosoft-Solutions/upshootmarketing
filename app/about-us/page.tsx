import type { Metadata } from 'next';
import Image from 'next/image';
import { Play } from 'lucide-react';
import { AnimatedSection } from '@/app/components/ui/animated-section';
import { ArrowLinkButton } from '../components/ui/arrow-link-button';
import { createPageMetadata } from '@/lib/seo';
import { typography } from '@/lib/typography';
import { cn } from '@/lib/utils';

const aboutParagraphs = [
  'UpShoot Marketing is a B2B marketing agency helping brands grow faster through content that connects, converts, and drives real results.',
  'We partner with businesses to turn their ideas into powerful stories that attract attention, build trust, and inspire action by combining strategic content planning, creative storytelling, and high-quality visuals. We help companies stand out, scale their marketing, and strengthen their customer relationships.',
  'At UpShoot Marketing, we go beyond creating content, we create momentum. Every video, design, and campaign we produce is built to deliver measurable growth: more visibility, stronger engagement, and better conversions.',
];

const stats = [
  { value: '500', label: 'Satisfied Brands' },
  { value: '100', label: 'Satisfied Clients' },
];

const aboutPhotoTiles = [
  {
    key: 'p1',
    src: '/assets/images/pages/about/stats-pic-1.jpg',
    alt: 'Marketing campaign visual',
  },
  {
    key: 'p2',
    src: '/assets/images/pages/about/stats-pic-2.jpg',
    alt: 'Business growth visual',
  },
  {
    key: 'p3',
    src: '/assets/images/pages/about/stats-pic-3.jpg',
    alt: 'Branding visual',
  },
];

const clientReasons = [
  {
    title: 'Audit',
    description:
      'Our research highlights strengths, uncovers gaps, and identifies opportunities to improve your online visibility.',
  },
  {
    title: 'Audit',
    description:
      'Our research highlights strengths, uncovers gaps, and identifies opportunities to improve your online visibility.',
  },
  {
    title: 'Audit',
    description:
      'Our research highlights strengths, uncovers gaps, and identifies opportunities to improve your online visibility.',
  },
  {
    title: 'Audit',
    description:
      'Our research highlights strengths, uncovers gaps, and identifies opportunities to improve your online visibility.',
  },
  {
    title: 'Audit',
    description:
      'Our research highlights strengths, uncovers gaps, and identifies opportunities to improve your online visibility.',
  },
  {
    title: 'Audit',
    description:
      'Our research highlights strengths, uncovers gaps, and identifies opportunities to improve your online visibility.',
  },
];

export const metadata: Metadata = createPageMetadata({
  title: 'About UpShoot Marketing',
  description:
    'Learn how UpShoot Marketing helps B2B brands grow through strategic content, creative storytelling, and measurable performance outcomes.',
  path: '/about-us',
});

export default function AboutUsPage() {
  return (
    <main className={cn('container-px pb-20 pt-32 md:pt-36')}>
      <section className={cn('mx-auto max-w-7xl space-y-16')}>
        <div className={cn('grid items-center gap-10 lg:grid-cols-2')}>
          <AnimatedSection animation='slideRight' duration='slow'>
            <h1 className={cn(typography.page.title, 'font-bold')}>About Us</h1>
            <div className={cn('mt-6 space-y-4 text-muted-foreground leading-relaxed')}>
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection animation='slideLeft' duration='slow'>
            <div className={cn('group relative aspect-video overflow-hidden rounded-xl bg-muted')}>
              <div className={cn('absolute inset-0 bg-linear-to-br from-primary/25 to-accent/25')} />
              <div className={cn('absolute inset-0 flex items-center justify-center px-6 text-center')}>
                <div>
                  <span className={cn('mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110')}>
                    <Play className={cn('ml-1 h-8 w-8 fill-white text-white')} />
                  </span>
                  <p className={cn('font-medium text-white')}>
                    Video Explaining Upshoot
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection animation='slideUp' duration='slow'>
          <div className={cn('relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-muted/50')}>
            <div className={cn('container-px py-12 md:py-16')}>
              <div className={cn('mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-3')}>
                <article className={cn('order-1 relative min-h-52 overflow-hidden rounded-2xl border border-border md:order-0 md:col-start-1 md:row-start-1 md:row-span-2')}>
                  <Image
                    src={aboutPhotoTiles[0].src}
                    alt={aboutPhotoTiles[0].alt}
                    fill
                    className={cn('object-cover transition-transform duration-500 hover:scale-105')}
                    sizes='(min-width: 1024px) 20vw, 100vw'
                  />
                </article>

                <article className={cn('order-3 relative min-h-52 overflow-hidden rounded-2xl border border-border md:order-0 md:col-start-2 md:row-start-1 md:row-span-3')}>
                  <Image
                    src={aboutPhotoTiles[1].src}
                    alt={aboutPhotoTiles[1].alt}
                    fill
                    className={cn('object-cover transition-transform duration-500 hover:scale-105')}
                    sizes='(min-width: 1024px) 20vw, 100vw'
                  />
                </article>

                <article className={cn('order-4 rounded-2xl border border-border bg-brand-blue/25 p-8 text-left transition-transform duration-300 hover:-translate-y-1 md:order-0 md:col-start-3 md:row-start-1')}>
                  <p className={cn(typography.card.statValue, 'font-semibold')}>
                    {stats[1].value}+
                  </p>
                  <p className={cn('mt-1 text-muted-foreground')}>{stats[1].label}</p>
                </article>

                <article className={cn('order-5 relative min-h-52 overflow-hidden rounded-2xl border border-border md:order-0 md:col-start-3 md:row-start-2 md:row-span-2')}>
                  <Image
                    src={aboutPhotoTiles[2].src}
                    alt={aboutPhotoTiles[2].alt}
                    fill
                    className={cn('object-cover transition-transform duration-500 hover:scale-105')}
                    sizes='(min-width: 1024px) 20vw, 100vw'
                  />
                </article>

                <article className={cn('order-2 rounded-2xl border border-border bg-brand-green/25 p-8 text-left transition-transform duration-300 hover:-translate-y-1 md:order-0 md:col-start-1 md:row-start-3')}>
                  <p className={cn(typography.card.statValue, 'font-semibold')}>
                    {stats[0].value}+
                  </p>
                  <p className={cn('mt-1 text-muted-foreground')}>{stats[0].label}</p>
                </article>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation='slideUp' duration='normal' delay='short'>
          <div className={cn('space-y-8')}>
            <div className={cn('flex flex-col items-start justify-between gap-4 rounded-2xl md:flex-row md:items-center')}>
              <h2 className={cn(typography.section.subtitle, 'font-semibold')}>
                Why our Clients choose us
              </h2>

              <ArrowLinkButton href='/pricing'>
                See our Packages
              </ArrowLinkButton>
            </div>
            <div className={cn('grid gap-4 md:grid-cols-2 xl:grid-cols-3')}>
              {clientReasons.map((reason, index) => (
                <article
                  key={`${reason.title}-${index.toString()}`}
                  className={cn('rounded-2xl border border-card bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md')}
                >
                  <h2 className={cn(typography.card.title, 'font-semibold')}>{reason.title}</h2>
                  <p className={cn('mt-3 text-muted-foreground')}>
                    {reason.description}
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
