import type { MetadataRoute } from 'next';
import { portfolioCategories } from '@/lib/constants/portfolio-content';
import { siteUrl } from '@/lib/seo';

const staticRoutes = [
  '/',
  '/about-us',
  '/services',
  '/pricing',
  '/portfolio',
  '/blog',
  '/contact-us',
  '/faqs',
  '/get-featured',
  '/join-team',
  '/privacy-policy',
  '/terms-of-service',
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : 0.7,
  }));

  const portfolioEntries: MetadataRoute.Sitemap = portfolioCategories.map((category) => ({
    url: `${siteUrl}/portfolio/${category.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticEntries, ...portfolioEntries];
}
