export type PortfolioCategorySlug =
  | 'video-editing'
  | 'graphics-design'
  | 'branding'
  | 'social-media-management'
  | 'content-strategy-ideation'
  | 'meta-ads';

export type PortfolioMediaType = 'image' | 'video' | 'embed';

export interface PortfolioCategory {
  slug: PortfolioCategorySlug;
  title: string;
  description: string;
  coverImageUrl?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  thumbnailUrl?: string;
  mediaType: PortfolioMediaType;
  mediaSrc: string;
}

const sharedImagePlaceholder = '/assets/images/sections/testimonials/avatar-placeholder.svg';

export const portfolioCategories: readonly PortfolioCategory[] = [
  {
    slug: 'video-editing',
    title: 'Video Editing',
    description: 'Story-first edits for reels, ads, explainers, and product showcases.',
    coverImageUrl: sharedImagePlaceholder,
  },
  {
    slug: 'graphics-design',
    title: 'Graphics Design',
    description: 'Creative static assets that match campaign goals and brand voice.',
    coverImageUrl: sharedImagePlaceholder,
  },
  {
    slug: 'branding',
    title: 'Branding',
    description: 'Identity systems that keep your business memorable and consistent.',
    coverImageUrl: sharedImagePlaceholder,
  },
  {
    slug: 'social-media-management',
    title: 'Social Media Management',
    description: 'Always-on social content execution focused on reach and engagement.',
    coverImageUrl: sharedImagePlaceholder,
  },
  {
    slug: 'content-strategy-ideation',
    title: 'Content Strategy & Ideation',
    description: 'Data-backed plans and concepts that align content with business outcomes.',
    coverImageUrl: sharedImagePlaceholder,
  },
  {
    slug: 'meta-ads',
    title: 'Meta Ads',
    description: 'Performance-driven ad creatives and campaign assets for Meta channels.',
    coverImageUrl: sharedImagePlaceholder,
  },
];

export const portfolioItemsByCategory: Readonly<Record<PortfolioCategorySlug, readonly PortfolioItem[]>> =
  {
    'video-editing': [
      {
        id: 'video-editing-1',
        title: 'SaaS Product Launch Reel',
        description: 'A short launch reel optimized for high retention on social feeds.',
        thumbnailUrl: sharedImagePlaceholder,
        mediaType: 'embed',
        mediaSrc: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      },
      {
        id: 'video-editing-2',
        title: 'Founder Story Cut',
        description: 'Long-form interview edited into concise storytelling clips.',
        thumbnailUrl: sharedImagePlaceholder,
        mediaType: 'video',
        mediaSrc: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
      },
    ],
    'graphics-design': [
      {
        id: 'graphics-design-1',
        title: 'Campaign Carousel Design',
        description: 'Swipe-friendly visual series for awareness and conversion stages.',
        thumbnailUrl: sharedImagePlaceholder,
        mediaType: 'image',
        mediaSrc: sharedImagePlaceholder,
      },
      {
        id: 'graphics-design-2',
        title: 'Event Announcement Kit',
        description: 'A cohesive visual bundle for event banners and social posts.',
        thumbnailUrl: sharedImagePlaceholder,
        mediaType: 'image',
        mediaSrc: sharedImagePlaceholder,
      },
    ],
    branding: [
      {
        id: 'branding-1',
        title: 'Visual Identity Refresh',
        description: 'Logo direction, typography, and brand color system exploration.',
        thumbnailUrl: sharedImagePlaceholder,
        mediaType: 'image',
        mediaSrc: sharedImagePlaceholder,
      },
      {
        id: 'branding-2',
        title: 'Brand Application Mockups',
        description: 'Practical brand usage samples across digital and print contexts.',
        thumbnailUrl: sharedImagePlaceholder,
        mediaType: 'image',
        mediaSrc: sharedImagePlaceholder,
      },
    ],
    'social-media-management': [
      {
        id: 'social-media-management-1',
        title: 'Monthly Social Sprint',
        description: 'A 30-day content deployment with platform-specific adaptations.',
        thumbnailUrl: sharedImagePlaceholder,
        mediaType: 'image',
        mediaSrc: sharedImagePlaceholder,
      },
      {
        id: 'social-media-management-2',
        title: 'UGC Repurposing Workflow',
        description: 'Operational system for turning user clips into content assets.',
        thumbnailUrl: sharedImagePlaceholder,
        mediaType: 'embed',
        mediaSrc: 'https://www.youtube.com/embed/ysz5S6PUM-U',
      },
    ],
    'content-strategy-ideation': [
      {
        id: 'content-strategy-ideation-1',
        title: 'Quarterly Content Map',
        description: 'A planning board connecting campaign goals to weekly themes.',
        thumbnailUrl: sharedImagePlaceholder,
        mediaType: 'image',
        mediaSrc: sharedImagePlaceholder,
      },
      {
        id: 'content-strategy-ideation-2',
        title: 'Creative Concepts Deck',
        description: 'Concept options with hooks, narratives, and execution notes.',
        thumbnailUrl: sharedImagePlaceholder,
        mediaType: 'image',
        mediaSrc: sharedImagePlaceholder,
      },
    ],
    'meta-ads': [
      {
        id: 'meta-ads-1',
        title: 'Conversion Ad Creative Pack',
        description: 'Creative variants designed for prospecting and remarketing funnels.',
        thumbnailUrl: sharedImagePlaceholder,
        mediaType: 'image',
        mediaSrc: sharedImagePlaceholder,
      },
      {
        id: 'meta-ads-2',
        title: 'Creative Testing Matrix',
        description: 'A/B ad concept set supporting iterative creative optimization.',
        thumbnailUrl: sharedImagePlaceholder,
        mediaType: 'video',
        mediaSrc: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
      },
    ],
  };

export function isPortfolioCategorySlug(value: string): value is PortfolioCategorySlug {
  return portfolioCategories.some((category) => category.slug === value);
}

export function getPortfolioCategoryBySlug(slug: PortfolioCategorySlug): PortfolioCategory {
  const category = portfolioCategories.find((entry) => entry.slug === slug);
  if (category === undefined) {
    throw new Error(`Unknown portfolio category slug: ${slug}`);
  }

  return category;
}

export function getPortfolioItemsByCategory(slug: PortfolioCategorySlug): readonly PortfolioItem[] {
  return portfolioItemsByCategory[slug];
}
