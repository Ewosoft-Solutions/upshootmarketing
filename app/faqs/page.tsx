import type { Metadata } from 'next';
import { FAQSection } from '@/app/components/sections/FAQSection';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Frequently Asked Questions',
  description:
    'Read answers to common questions about UpShoot Marketing services, process, and how to get started.',
  path: '/faqs',
});

export default function FaqsPage() {
  return (
    <main className='pt-20'>
      <FAQSection />
    </main>
  );
}
