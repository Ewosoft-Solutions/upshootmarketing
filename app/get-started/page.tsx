import type { Metadata } from 'next';
import { GetStartedForm } from '@/app/components/forms/GetStartedForm';
import { AnimatedSection } from '@/app/components/ui/animated-section';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: "Let's Work Together",
  description:
    'Tell us about your brand and goals so we can craft the right content and growth strategy.',
  path: '/get-started',
});

export default function GetStartedPage() {
  return (
    <main className='container-px pb-20 pt-32 md:pt-36'>
      <section className='mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.2fr]'>
        <AnimatedSection className='space-y-6' animation='slideRight' duration='slow'>
          <h1 className='text-4xl font-bold md:text-6xl'>Let&apos;s work together!</h1>
          <p className='max-w-lg text-xl leading-relaxed text-muted-foreground'>
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
