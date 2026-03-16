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
  projectHref?: string;
}

const portfolioMediaByCategory: Readonly<Record<PortfolioCategorySlug, string>> = {
  'video-editing': '/assets/images/pages/portfolio/video-editing.gif',
  'graphics-design': '/assets/images/pages/portfolio/graphics%20design.gif',
  branding: '/assets/images/pages/portfolio/branding.gif',
  'social-media-management': '/assets/images/pages/portfolio/social-media.gif',
  'content-strategy-ideation': '/assets/images/pages/portfolio/content-strategy.gif',
  'meta-ads': '/assets/images/pages/portfolio/meta-ads.gif',
};

export const portfolioCategories: readonly PortfolioCategory[] = [
  {
    slug: 'video-editing',
    title: 'Video Editing',
    description: 'Story-first edits for reels, ads, explainers, and product showcases.',
    coverImageUrl: portfolioMediaByCategory['video-editing'],
  },
  {
    slug: 'graphics-design',
    title: 'Graphics Design',
    description: 'Creative static assets that match campaign goals and brand voice.',
    coverImageUrl: portfolioMediaByCategory['graphics-design'],
  },
  {
    slug: 'branding',
    title: 'Branding',
    description: 'Identity systems that keep your business memorable and consistent.',
    coverImageUrl: portfolioMediaByCategory.branding,
  },
  {
    slug: 'social-media-management',
    title: 'Social Media Management',
    description: 'Always-on social content execution focused on reach and engagement.',
    coverImageUrl: portfolioMediaByCategory['social-media-management'],
  },
  {
    slug: 'content-strategy-ideation',
    title: 'Content Strategy & Ideation',
    description: 'Data-backed plans and concepts that align content with business outcomes.',
    coverImageUrl: portfolioMediaByCategory['content-strategy-ideation'],
  },
  {
    slug: 'meta-ads',
    title: 'Meta Ads',
    description: 'Performance-driven ad creatives and campaign assets for Meta channels.',
    coverImageUrl: portfolioMediaByCategory['meta-ads'],
  },
];

export const portfolioItemsByCategory: Readonly<Record<PortfolioCategorySlug, readonly PortfolioItem[]>> =
  {
    'video-editing': [
      {
        id: 'video-editing-1',
        title: 'Launch Reel Teaser',
        description: 'High-tempo teaser edit crafted for social retention and product reveal timing.',
        thumbnailUrl: portfolioMediaByCategory['video-editing'],
        mediaType: 'image',
        mediaSrc: portfolioMediaByCategory['video-editing'],
      },
      {
        id: 'video-editing-2',
        title: 'Founder Story Highlights',
        description: 'Narrative-focused interview cutdowns turned into concise campaign moments.',
        thumbnailUrl: portfolioMediaByCategory['video-editing'],
        mediaType: 'image',
        mediaSrc: portfolioMediaByCategory['video-editing'],
      },
      {
        id: 'video-editing-3',
        title: 'Ad Variant Breakdown',
        description: 'Creative variants mapped by hook and CTA style for paid social testing.',
        thumbnailUrl: portfolioMediaByCategory['video-editing'],
        mediaType: 'image',
        mediaSrc: portfolioMediaByCategory['video-editing'],
        projectHref: '/portfolio/video-editing',
      },
    ],
    'graphics-design': [
      {
        id: 'graphics-design-1',
        title: 'Campaign Carousel System',
        description: 'Swipe-first visual templates built for awareness, education, and conversion.',
        thumbnailUrl: portfolioMediaByCategory['graphics-design'],
        mediaType: 'image',
        mediaSrc: portfolioMediaByCategory['graphics-design'],
      },
      {
        id: 'graphics-design-2',
        title: 'Event Announcement Kit',
        description: 'Branded visuals for social posts, stories, and event landing page assets.',
        thumbnailUrl: portfolioMediaByCategory['graphics-design'],
        mediaType: 'image',
        mediaSrc: portfolioMediaByCategory['graphics-design'],
      },
      {
        id: 'graphics-design-3',
        title: 'Paid Creative Adaptations',
        description: 'Static ad creative resized and localized for multi-platform placement.',
        thumbnailUrl: portfolioMediaByCategory['graphics-design'],
        mediaType: 'image',
        mediaSrc: portfolioMediaByCategory['graphics-design'],
      },
    ],
    branding: [
      {
        id: 'branding-1',
        title: 'Visual Identity Refresh',
        description: 'Logo, typography, and color refinements aligned to a premium SaaS voice.',
        thumbnailUrl: portfolioMediaByCategory.branding,
        mediaType: 'image',
        mediaSrc: portfolioMediaByCategory.branding,
      },
      {
        id: 'branding-2',
        title: 'Brand Application Mockups',
        description: 'Identity usage examples across site sections, decks, and social campaigns.',
        thumbnailUrl: portfolioMediaByCategory.branding,
        mediaType: 'image',
        mediaSrc: portfolioMediaByCategory.branding,
      },
      {
        id: 'branding-3',
        title: 'Messaging + Tone Exploration',
        description: 'Voice and message directions paired with visual identity principles.',
        thumbnailUrl: portfolioMediaByCategory.branding,
        mediaType: 'image',
        mediaSrc: portfolioMediaByCategory.branding,
      },
    ],
    'social-media-management': [
      {
        id: 'social-media-management-1',
        title: 'Monthly Social Sprint',
        description: 'A 30-day publishing cadence tuned for reach, consistency, and engagement.',
        thumbnailUrl: portfolioMediaByCategory['social-media-management'],
        mediaType: 'image',
        mediaSrc: portfolioMediaByCategory['social-media-management'],
      },
      {
        id: 'social-media-management-2',
        title: 'Community Content Workflow',
        description: 'UGC and campaign clips transformed into always-on weekly content sets.',
        thumbnailUrl: portfolioMediaByCategory['social-media-management'],
        mediaType: 'image',
        mediaSrc: portfolioMediaByCategory['social-media-management'],
      },
      {
        id: 'social-media-management-3',
        title: 'Platform-Specific Sequencing',
        description: 'Content sequencing adapted by channel behavior and audience expectations.',
        thumbnailUrl: portfolioMediaByCategory['social-media-management'],
        mediaType: 'image',
        mediaSrc: portfolioMediaByCategory['social-media-management'],
      },
    ],
    'content-strategy-ideation': [
      {
        id: 'content-strategy-ideation-1',
        title: 'Quarterly Content Map',
        description: 'Quarterly planning maps connecting campaign goals to weekly narratives.',
        thumbnailUrl: portfolioMediaByCategory['content-strategy-ideation'],
        mediaType: 'image',
        mediaSrc: portfolioMediaByCategory['content-strategy-ideation'],
      },
      {
        id: 'content-strategy-ideation-2',
        title: 'Creative Concepts Deck',
        description: 'Campaign concepts with hooks, narrative arcs, and execution notes.',
        thumbnailUrl: portfolioMediaByCategory['content-strategy-ideation'],
        mediaType: 'image',
        mediaSrc: portfolioMediaByCategory['content-strategy-ideation'],
      },
      {
        id: 'content-strategy-ideation-3',
        title: 'Narrative Testing Framework',
        description: 'Hypothesis-based content tracks used to validate messaging performance.',
        thumbnailUrl: portfolioMediaByCategory['content-strategy-ideation'],
        mediaType: 'image',
        mediaSrc: portfolioMediaByCategory['content-strategy-ideation'],
      },
    ],
    'meta-ads': [
      {
        id: 'meta-ads-1',
        title: 'Conversion Creative Pack',
        description: 'Prospecting and retargeting creatives structured for rapid testing cycles.',
        thumbnailUrl: portfolioMediaByCategory['meta-ads'],
        mediaType: 'image',
        mediaSrc: portfolioMediaByCategory['meta-ads'],
      },
      {
        id: 'meta-ads-2',
        title: 'Creative Testing Matrix',
        description: 'Ad concepts mapped by angle, CTA, and placement for measurable lift.',
        thumbnailUrl: portfolioMediaByCategory['meta-ads'],
        mediaType: 'image',
        mediaSrc: portfolioMediaByCategory['meta-ads'],
      },
      {
        id: 'meta-ads-3',
        title: 'Performance Narrative Iteration',
        description: 'Winning ad narratives refined through retention and conversion signals.',
        thumbnailUrl: portfolioMediaByCategory['meta-ads'],
        mediaType: 'image',
        mediaSrc: portfolioMediaByCategory['meta-ads'],
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
