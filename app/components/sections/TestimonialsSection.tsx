'use client';

import { AnimatedSection } from '@/app/components/ui/animated-section';
import Image from 'next/image';
import { typography } from '@/lib/typography';
import { cn } from '@/lib/utils';

const AVATAR_FALLBACK = '/assets/images/sections/testimonials/avatar-placeholder.svg';

interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatarSrc?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 'chris-michael',
    quote:
      'Upshoot marketing is a collection of the best and smartest talents. They have the superpower to make your idea 10x',
    name: 'Chris Michael',
    role: 'Founder, Thebrand',
  },
  {
    id: 'sarah-johnson',
    quote:
      'Working with Upshoot transformed our brand presence. Their strategic approach to content delivered results beyond our expectations.',
    name: 'Sarah Johnson',
    role: 'CEO, Nextera',
  },
  {
    id: 'david-chen',
    quote:
      'The team at Upshoot truly understands B2B marketing. They helped us triple our qualified leads in just three months.',
    name: 'David Chen',
    role: 'VP Marketing, Cloudrise',
  },
  {
    id: 'emily-brooks',
    quote:
      'Upshoot marketing is a collection of the best and smartest talents. They have the superpower to make your idea 10x',
    name: 'Emily Brooks',
    role: 'Director, Elevate Co',
  },
];

function TestimonialCard({ testimonial }: Readonly<{ testimonial: Testimonial }>) {
  return (
    <div className={cn('shrink-0 w-[min(340px,85vw)] rounded-xl bg-background p-6 mx-3')}>
      <p className={cn(typography.card.description, 'leading-relaxed text-foreground mb-6')}>
        {testimonial.quote}
      </p>
      <div className={cn('flex items-center gap-3')}>
        <Image
          src={testimonial.avatarSrc ?? AVATAR_FALLBACK}
          alt={testimonial.name}
          width={40}
          height={40}
          className={cn('rounded-full object-cover w-10 h-10')}
        />
        <div>
          <p className={cn(typography.card.description, 'font-semibold')}>{testimonial.name}</p>
          <p className={cn(typography.card.descriptionSmall, 'text-muted-foreground')}>{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({
  items,
  durationSeconds,
}: Readonly<{
  items: Testimonial[];
  durationSeconds: number;
}>) {
  return (
    <div className={cn('overflow-hidden')}>
      <div
        className={cn('flex w-max')}
        style={{ animation: `marquee ${durationSeconds}s linear infinite` }}
      >
        {items.map((t) => (
          <TestimonialCard key={`a-${t.id}`} testimonial={t} />
        ))}
        {items.map((t) => (
          <TestimonialCard key={`b-${t.id}`} testimonial={t} />
        ))}
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section id='testimonials' className={cn('py-16 md:py-24 bg-muted/50 overflow-hidden')}>
      <div className={cn('container-px')}>
        <div className={cn('max-w-7xl mx-auto mb-12')}>
          <AnimatedSection animation='slideUp'>
            <h2 className={cn(typography.section.title, 'font-bold')}>
              What our Clients say
            </h2>
          </AnimatedSection>
        </div>
      </div>

      <div className={cn('space-y-6')}>
        <MarqueeRow items={testimonials} durationSeconds={30} />
        <MarqueeRow items={[...testimonials].reverse()} durationSeconds={40} />
      </div>
    </section>
  );
}
