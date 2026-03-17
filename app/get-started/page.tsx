import type { Metadata } from 'next';
import { GetStartedForm } from '@/app/components/forms/GetStartedForm';
import { AnimatedSection } from '@/app/components/ui/animated-section';
import { createPageMetadata } from '@/lib/seo';
import { typography } from '@/lib/typography';
import { cn } from '@/lib/utils';

export const metadata: Metadata = createPageMetadata({
  title: "Let's Work Together",
  description:
    'Tell us about your brand and goals so we can craft the right content and growth strategy.',
  path: '/get-started',
});

export default function GetStartedPage() {
  return (
    <main className={cn('container-px pb-20 pt-32 md:pt-36')}>
      <section className={cn('mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.2fr]')}>
        <AnimatedSection className={cn('space-y-6')} animation='slideRight' duration='slow'>
          <h1 className={cn(typography.section.title, 'font-bold')}>Let&apos;s work together!</h1>
          <p className={cn('2xl:max-w-lg text-muted-foreground text-balance', typography.section.description)}>
            We help our clients with the work beyond (& sometimes behind) the splashy ad campaigns
            and viral moments. We leverage content to help our clients consistently bring their
            unique perspective to the world, and educate, engage, and inspire like-minded people
            around it.
          </p>
        </AnimatedSection>

        <AnimatedSection animation='slideLeft' duration='slow' delay='short'>
          <GetStartedForm />
        </AnimatedSection>
      </section>
    </main>
  );
}
