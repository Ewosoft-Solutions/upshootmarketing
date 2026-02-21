'use client';

import Image from 'next/image';
import { AnimatedSection } from '@/app/components/ui/animated-section';
import { ShimmerButton } from '@/app/components/ui/shimmer-button';
import { cn } from '@/lib/utils';

const teamMembers = [
  {
    src: '/assets/images/sections/cta/person-1.png',
    alt: 'Team Member 1',
    bg: 'bg-emerald-400',
    className: 'top-[5%] left-[8%] size-32 md:size-40',
  },
  {
    src: '/assets/images/sections/cta/person-2.png',
    alt: 'Team Member 2',
    bg: 'bg-sky-400',
    className: 'top-[3%] right-[6%] size-36 md:size-44',
  },
  {
    src: '/assets/images/sections/cta/person-3.png',
    alt: 'Team Member 3',
    bg: 'bg-amber-400',
    className: 'top-[42%] left-[0%] size-28 md:size-36',
  },
  {
    src: '/assets/images/sections/cta/person-4.png',
    alt: 'Team Member 4',
    bg: 'bg-amber-400',
    className: 'top-[40%] right-[0%] size-24 md:size-32',
  },
  {
    src: '/assets/images/sections/cta/person-5.png',
    alt: 'Team Member 5',
    bg: 'bg-sky-400',
    className: 'bottom-[2%] left-[18%] size-36 md:size-48',
  },
  {
    src: '/assets/images/sections/cta/person-6.png',
    alt: 'Team Member 6',
    bg: 'bg-pink-400',
    className: 'bottom-[5%] right-[18%] size-32 md:size-40',
  },
];

export function CTASection() {
  return (
    <section className='py-24 container-px'>
      <div className='relative max-w-6xl mx-auto'>
        {/* Team member circles — hidden on small screens */}
        <div className='hidden md:block'>
          {teamMembers.map((member) => (
            <div
              key={member.src}
              className={cn(
                'absolute rounded-full overflow-hidden',
                member.bg,
                member.className,
              )}
            >
              <Image
                src={member.src}
                alt={member.alt}
                fill
                className='object-cover object-top'
                sizes='(max-width: 1024px) 144px, 192px'
              />
            </div>
          ))}
        </div>

        {/* Centered content */}
        <div className='relative z-10 max-w-xl mx-auto text-center py-16 md:py-32'>
          <AnimatedSection animation='slideUp'>
            <h2 className='text-3xl md:text-5xl font-bold mb-6'>
              Become Part of our Team
            </h2>
            <p className='text-muted-foreground text-lg leading-relaxed mx-auto mb-10'>
              We help our clients with the work beyond (& sometimes behind) the
              splashy ad campaigns and viral moments. We leverage content to help
              our clients consistently bring their unique perspective to the
              world, and educate, engage, and inspire like-minded people around
              it
            </p>
            <ShimmerButton>Join the Team</ShimmerButton>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
