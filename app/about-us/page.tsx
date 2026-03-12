import Link from 'next/link';
import Image from 'next/image';
import { Play } from 'lucide-react';
import { ShimmerButton } from '@/app/components/ui/shimmer-button';

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

export default function AboutUsPage() {
  return (
    <main className='container-px pb-20 pt-32 md:pt-36'>
      <section className='mx-auto max-w-7xl space-y-16'>
        <div className='grid items-center gap-10 lg:grid-cols-2'>
          <div>
            <h1 className='text-4xl font-bold md:text-6xl'>About Us</h1>
            <div className='mt-6 space-y-4 text-muted-foreground leading-relaxed'>
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className='relative aspect-video overflow-hidden rounded-xl bg-muted'>
            <div className='absolute inset-0 bg-linear-to-br from-primary/25 to-accent/25' />
            <div className='absolute inset-0 flex items-center justify-center px-6 text-center'>
              <div>
                <span className='mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm'>
                  <Play className='ml-1 h-8 w-8 fill-white text-white' />
                </span>
                <p className='font-medium text-white'>
                  Video Explaining Upshoot
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-muted/40'>
          <div className='container-px py-12 md:py-16'>
            <div className='mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-3'>
              <article className='order-1 relative min-h-52 overflow-hidden rounded-2xl border border-border md:order-0 md:col-start-1 md:row-start-1 md:row-span-2'>
                <Image
                  src={aboutPhotoTiles[0].src}
                  alt={aboutPhotoTiles[0].alt}
                  fill
                  className='object-cover'
                  sizes='(min-width: 1024px) 20vw, 100vw'
                />
              </article>

              <article className='order-3 relative min-h-52 overflow-hidden rounded-2xl border border-border md:order-0 md:col-start-2 md:row-start-1 md:row-span-3'>
                <Image
                  src={aboutPhotoTiles[1].src}
                  alt={aboutPhotoTiles[1].alt}
                  fill
                  className='object-cover'
                  sizes='(min-width: 1024px) 20vw, 100vw'
                />
              </article>

              <article className='order-4 rounded-2xl border border-border bg-brand-blue/25 p-8 text-left md:order-0 md:col-start-3 md:row-start-1'>
                <p className='text-3xl font-semibold md:text-4xl'>
                  {stats[1].value}+
                </p>
                <p className='mt-1 text-muted-foreground'>{stats[1].label}</p>
              </article>

              <article className='order-5 relative min-h-52 overflow-hidden rounded-2xl border border-border md:order-0 md:col-start-3 md:row-start-2 md:row-span-2'>
                <Image
                  src={aboutPhotoTiles[2].src}
                  alt={aboutPhotoTiles[2].alt}
                  fill
                  className='object-cover'
                  sizes='(min-width: 1024px) 20vw, 100vw'
                />
              </article>

              <article className='order-2 rounded-2xl border border-border bg-brand-green/25 p-8 text-left md:order-0 md:col-start-1 md:row-start-3'>
                <p className='text-3xl font-semibold md:text-4xl'>
                  {stats[0].value}+
                </p>
                <p className='mt-1 text-muted-foreground'>{stats[0].label}</p>
              </article>
            </div>
          </div>
        </div>

        <div className='space-y-8'>
          <div className='flex flex-col items-start justify-between gap-4 rounded-2xl md:flex-row md:items-center'>
            <h2 className='text-2xl font-semibold md:text-3xl'>
              Why our Clients choose us
            </h2>
            <ShimmerButton asChild size='default' colorVariant='primary'>
              <Link href='/pricing'>See our Package</Link>
            </ShimmerButton>
          </div>
          <div className='grid gap-4 md:grid-cols-2 xl:grid-cols-3'>
            {clientReasons.map((reason, index) => (
              <article
                key={`${reason.title}-${index.toString()}`}
                className='rounded-2xl border border-card bg-card p-6'
              >
                <h2 className='text-xl font-semibold'>{reason.title}</h2>
                <p className='mt-3 text-muted-foreground'>
                  {reason.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
