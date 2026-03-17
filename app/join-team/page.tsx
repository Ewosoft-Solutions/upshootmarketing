import type { Metadata } from 'next';
import { JoinTeamForm } from '@/app/components/forms/JoinTeamForm';
import { AnimatedSection } from '@/app/components/ui/animated-section';
import { createPageMetadata } from '@/lib/seo';
import { typography } from '@/lib/typography';

export const metadata: Metadata = createPageMetadata({
  title: 'Join the Team',
  description:
    'Become part of UpShoot Marketing and help brands grow through creative and performance-driven campaigns.',
  path: '/join-team',
});

export default function JoinTeamPage() {
  return (
    <main className='container-px pb-20 pt-32 md:pt-36'>
      <section className='mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.2fr]'>
        <AnimatedSection className='space-y-6' animation='slideRight' duration='slow'>
          <h1 className={`${typography.page.heroTitle} font-bold`}>Be Part of our Team</h1>
          <p className={`2xl:max-w-lg text-muted-foreground text-balance ${typography.page.lead}`}>
            We help our clients with the work beyond (& sometimes behind) the splashy ad campaigns
            and viral moments. We leverage content to help our clients consistently bring their
            unique perspective to the world, and educate, engage, and inspire like-minded people
            around it.
          </p>
        </AnimatedSection>

        <AnimatedSection animation='slideLeft' duration='slow' delay='short'>
          <JoinTeamForm />
        </AnimatedSection>
      </section>
    </main>
  );
}
