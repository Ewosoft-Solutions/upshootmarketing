import type { Metadata } from 'next';

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const siteUrl = configuredSiteUrl ?? 'https://upshootmarketing.com';
export const siteName = 'UpShoot Marketing';
export const defaultOgImagePath = '/assets/images/pages/about/stats-pic-1.jpg';

interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
}

export function createPageMetadata({
  title,
  description,
  path,
}: Readonly<PageMetadataInput>): Metadata {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: normalizedPath,
    },
    openGraph: {
      type: 'website',
      siteName,
      title,
      description,
      url: normalizedPath,
      images: [
        {
          url: defaultOgImagePath,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [defaultOgImagePath],
    },
  };
}
