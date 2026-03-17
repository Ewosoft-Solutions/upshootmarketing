import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';
import { typography } from '@/lib/typography';
import { cn } from '@/lib/utils';

export const metadata: Metadata = createPageMetadata({
  title: 'B2B Marketing Blog',
  description:
    'Read UpShoot Marketing insights on B2B content strategy, brand storytelling, social growth, and performance marketing.',
  path: '/blog',
});

const BlogPage = () => {
  return (
    <main className={cn('container-px pb-20 pt-32 md:pt-36')}>
      <section className={cn('mx-auto max-w-7xl')}>
        <h1 className={cn(typography.page.title, 'font-bold')}>Blog</h1>
      </section>
    </main>
  );
};

export default BlogPage;