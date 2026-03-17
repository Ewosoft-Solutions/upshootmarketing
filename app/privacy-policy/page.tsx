import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';
import { typography } from '@/lib/typography';

export const metadata: Metadata = createPageMetadata({
  title: 'Privacy Policy',
  description:
    'Review how UpShoot Marketing collects, uses, and protects visitor and client information.',
  path: '/privacy-policy',
});

export default function PrivacyPolicyPage() {
  return (
    <main className='container-px pb-20 pt-32 md:pt-36'>
      <article className='mx-auto max-w-4xl space-y-4'>
        <h1 className={`${typography.page.heroTitle} font-bold`}>Privacy Policy</h1>
        <p className='text-muted-foreground'>
          This page explains how Upshoot Marketing collects, uses, and protects user information.
        </p>
        <p className='text-muted-foreground'>
          Detailed policy clauses can be expanded here as your legal copy is finalized.
        </p>
      </article>
    </main>
  );
}
