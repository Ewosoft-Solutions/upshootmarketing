import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { createPageMetadata } from '@/lib/seo';
import { typography } from '@/lib/typography';
import { cn } from '@/lib/utils';

export const metadata: Metadata = createPageMetadata({
  title: 'Get Featured',
  description:
    'Submit your brand story to be considered for a feature by UpShoot Marketing.',
  path: '/get-featured',
});

export default function GetFeaturedPage() {
  return (
    <main className={cn('container-px pb-20 pt-32 md:pt-36')}>
      <section className={cn('mx-auto max-w-4xl space-y-5')}>
        <h1 className={cn(typography.page.title, 'font-bold')}>Get Featured</h1>
        <p className={cn('text-muted-foreground')}>
          Want your work or brand story featured by Upshoot? Share your details and we will review.
        </p>
        <Button variant='outline'>Submit Request</Button>
      </section>
    </main>
  );
}
