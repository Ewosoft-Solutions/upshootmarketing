import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';
import { typography } from '@/lib/typography';

export const metadata: Metadata = createPageMetadata({
  title: 'Terms of Service',
  description:
    'Read the terms governing the use of UpShoot Marketing services and website.',
  path: '/terms-of-service',
});

export default function TermsOfServicePage() {
  return (
    <main className='container-px pb-20 pt-32 md:pt-36'>
      <article className='mx-auto max-w-4xl space-y-4'>
        <h1 className={`${typography.page.heroTitle} font-bold`}>Terms of Service</h1>
        <p className='text-muted-foreground'>
          These terms govern the use of Upshoot Marketing services and this website.
        </p>
        <p className='text-muted-foreground'>
          Detailed legal terms can be added here as needed.
        </p>
      </article>
    </main>
  );
}
