import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';
import { typography } from '@/lib/typography';

export const metadata: Metadata = createPageMetadata({
  title: 'B2B Marketing Blog',
  description:
    'Read UpShoot Marketing insights on B2B content strategy, brand storytelling, social growth, and performance marketing.',
  path: '/blog',
});

const BlogPage = () => {
  return (
    <main className='container-px pb-20 pt-32 md:pt-36'>
      <section className='mx-auto max-w-7xl'>
        <h1 className={`${typography.page.heroTitle} font-bold`}>Blog</h1>
      </section>
    </main>
  );
};

export default BlogPage;