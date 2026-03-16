import type { Metadata } from 'next';
import { PortfolioPageClient } from '@/app/components/pages/PortfolioPageClient';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Portfolio Categories',
  description:
    'Explore UpShoot Marketing portfolio categories across video editing, graphics design, branding, social media management, content strategy, and Meta ads.',
  path: '/portfolio',
});

export default function PortfolioPage() {
  return <PortfolioPageClient />;
}
