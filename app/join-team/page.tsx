import type { Metadata } from 'next';
import { CTASection } from '@/app/components/sections/CTASection';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Join the Team',
  description:
    'Become part of UpShoot Marketing and help brands grow through creative and performance-driven campaigns.',
  path: '/join-team',
});

export default function JoinTeamPage() {
  return (
    <main className='pt-20'>
      <CTASection />
    </main>
  );
}
