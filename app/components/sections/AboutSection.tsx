'use client';

import { AnimatedSection } from '@/app/components/ui/animated-section';
import { Play } from 'lucide-react';
import Image from 'next/image';
import { typography } from '@/lib/typography';
import { cn } from '@/lib/utils';

export function AboutSection() {
  return (
    <section id='about' className={cn('container-px bg-background')}>
      <div className={cn('border-t border-border pt-16 md:pt-24')}>
        <div className={cn('max-w-screen-2xl mx-auto')}>
          <div className={cn('grid lg:grid-cols-2 gap-12 items-center')}>
            {/* Left: Content */}
            <AnimatedSection animation='slideRight' duration='slow'>
              <h2 className={cn(typography.section.title, 'font-bold mb-6')}>
                About Upshoot Marketing
              </h2>
              <div
                className={cn(
                  'space-y-4 text-muted-foreground leading-relaxed text-balance',
                )}
              >
                <p>
                  UpShoot Marketing is a B2B marketing agency helping brands
                  grow faster, through content that connects, converts and
                  drives real results.
                </p>
                <p>
                  We partner with businesses to turn their ideas into powerful
                  stories that attract attention, build trust and inspire action
                  by combining strategic content planning, creative storytelling
                  and high- quality visuals. We help companies stand out, scale
                  their marketing and strengthen their customer relationships.
                </p>
                <p>
                  At UpShoot Marketing, we go beyond creating content, we create
                  momentum. Every video, design and campaign we produce is built
                  to deliver measurable growth; more visibility, stronger
                  engagement, and better conversions
                </p>
              </div>
            </AnimatedSection>

            {/* Right: Video */}
            <AnimatedSection animation='slideLeft' duration='slow'>
              <div
                className={cn(
                  'relative aspect-video rounded-xl overflow-hidden bg-muted group cursor-pointer',
                )}
              >
                {/* Video Placeholder */}
                <div
                  className={cn(
                    'absolute inset-0 bg-linear-to-br from-primary/20 to-accent/20 flex items-center justify-center',
                  )}
                >
                  <div className={cn('text-center')}>
                    <div
                      className={cn(
                        'w-20 h-20 mx-auto mb-4 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform',
                      )}
                    >
                      <Play
                        className={cn('w-8 h-8 text-white fill-white ml-1')}
                      />
                    </div>
                    <p className={cn('text-white font-medium')}>
                      Video Explaining Upshoot
                    </p>
                  </div>
                </div>
                {/* Replace above with actual video embed when available */}
                {/* <iframe
                  src="YOUR_VIDEO_URL"
                  className={cn('w-full h-full')}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                /> */}
              </div>
            </AnimatedSection>
          </div>
        </div>
        <div className={cn('relative -mx-(--container-px) mt-20 md:mt-40')}>
          <Image
            src='/assets/images/sections/about/divider.svg'
            alt='About Section Divider'
            width={0}
            height={0}
            className={cn('w-full h-auto')}
          />
        </div>
      </div>
    </section>
  );
}
