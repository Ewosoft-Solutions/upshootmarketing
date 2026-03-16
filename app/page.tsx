import type { Metadata } from 'next';
import { HomePageClient } from '@/app/components/pages/HomePageClient';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Modern B2B Marketing That Builds Trust and Drives Revenue',
  description:
    'We help companies build trust and convert high-value customers through strategic content, creative storytelling, and high-quality visuals.',
  path: '/',
});

export default function HomePage() {
  return <HomePageClient />;
}
