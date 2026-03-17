'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AnimatedSection } from '@/app/components/ui/animated-section';
import { ShimmerButton } from '@/app/components/ui/shimmer-button';
import { typography } from '@/lib/typography';
import { cn } from '@/lib/utils';

const teamMembers = [
  {
    src: '/assets/images/sections/cta/person-1.png',
    alt: 'Team Member 1',
    bg: 'bg-emerald-400',
    className: 'top-[5%] left-[8%] size-32 lg:size-40',
  },
  {
    src: '/assets/images/sections/cta/person-2.png',
    alt: 'Team Member 2',
    bg: 'bg-sky-400',
    className: 'top-[3%] right-[6%] size-36 lg:size-44',
  },
  {
    src: '/assets/images/sections/cta/person-3.png',
    alt: 'Team Member 3',
    bg: 'bg-amber-400',
    className: 'top-[42%] left-[0%] size-28 lg:size-36',
  },
  {
    src: '/assets/images/sections/cta/person-4.png',
    alt: 'Team Member 4',
    bg: 'bg-amber-400',
    className: 'top-[40%] right-[0%] size-24 lg:size-32',
  },
  {
    src: '/assets/images/sections/cta/person-5.png',
    alt: 'Team Member 5',
    bg: 'bg-sky-400',
    className: 'bottom-[2%] left-[18%] size-36 lg:size-48',
  },
  {
    src: '/assets/images/sections/cta/person-6.png',
    alt: 'Team Member 6',
    bg: 'bg-pink-400',
    className: 'bottom-[5%] right-[18%] size-32 lg:size-40',
  },
];

function TeamMemberCircle({ src, alt, bg, className, delay = 0 }: Readonly<{
  src: string;
  alt: string;
  bg: string;
  className?: string;
  delay?: number;
}>) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.34, 1.56, 0.64, 1],
      }}
      className={cn('relative rounded-full overflow-hidden', bg, className)}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className='object-cover object-top'
        sizes='(max-width: 768px) 80px, 192px'
      />
    </motion.div>
  );
}

const topRow = teamMembers.slice(0, 3);
const bottomRow = teamMembers.slice(3);

export function CTASection() {
  return (
    <section className='py-16 md:py-24 container-px'>
      <div className='relative max-w-6xl mx-auto'>
        {/* Desktop: absolute positioned oblique circle */}
        <div className='hidden lg:block'>
          {teamMembers.map((member, i) => (
            <TeamMemberCircle
              key={member.src}
              {...member}
              delay={i * 0.12}
              className={cn('absolute', member.className)}
            />
          ))}
        </div>

        {/* Mobile: top row of 3 */}
        <div className='flex lg:hidden justify-center items-end gap-4 mb-8'>
          {topRow.map((member, i) => (
            <TeamMemberCircle
              key={member.src}
              {...member}
              delay={i * 0.12}
              className={cn('size-20', i === 1 && '-mb-3')}
            />
          ))}
        </div>

        {/* Centered content */}
        <div className='relative z-10 max-w-xl mx-auto text-center lg:py-32'>
          <AnimatedSection animation='slideUp'>
            <h2 className={`${typography.page.sectionTitle} font-bold mb-6`}>
              Become Part of our Team
            </h2>
            <p className={`text-muted-foreground ${typography.page.lead} mx-auto mb-10`}>
              We help our clients with the work beyond (& sometimes behind) the
              splashy ad campaigns and viral moments. We leverage content to
              help our clients consistently bring their unique perspective to
              the world, and educate, engage, and inspire like-minded people
              around it
            </p>
            <ShimmerButton asChild>
              <Link href='/join-team'>Join the Team</Link>
            </ShimmerButton>
          </AnimatedSection>
        </div>

        {/* Mobile: bottom row of 3 */}
        <div className='flex lg:hidden justify-center items-start gap-4 mt-10'>
          {bottomRow.map((member, i) => (
            <TeamMemberCircle
              key={member.src}
              {...member}
              delay={(i + 3) * 0.12}
              className={cn('size-20', i === 1 && '-mt-3')}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CTASection;
