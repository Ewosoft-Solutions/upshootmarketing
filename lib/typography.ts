export const textSize = {
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl',
  '5xl': 'text-5xl',
  '6xl': 'text-6xl',
} as const;

export const typography = {
  page: {
    heroTitle: `${textSize['4xl']} md:${textSize['6xl']}`,
    sectionTitle: `${textSize['3xl']} md:${textSize['5xl']}`,
    subsectionTitle: `${textSize['2xl']} md:${textSize['3xl']}`,
    lead: `${textSize.lg} leading-relaxed`,
    socialIconLabel: `${textSize.base} leading-none`,
  },
  footer: {
    ctaTitle: `${textSize['2xl']} md:${textSize['4xl']}`,
    ctaDescription: `${textSize.base} md:${textSize.lg}`,
    logoLabel: textSize.xl,
    sectionHeading: textSize.base,
    sectionLink: textSize.base,
    newsletterDescription: textSize.base,
    copyright: textSize.base,
  },
  card: {
    title: textSize.xl,
    titleSmall: textSize.lg,
    titleLarge: textSize['2xl'],
    description: textSize.base,
    descriptionSmall: textSize.sm,
    badge: textSize.xs,
    placeholderInitial: textSize['4xl'],
    price: textSize['5xl'],
    statValue: `${textSize['3xl']} md:${textSize['4xl']}`,
  },
  hero: {
    title: `${textSize['3xl']} md:${textSize['5xl']} lg:${textSize['6xl']}`,
    description: `${textSize.lg} md:${textSize.xl}`,
  },
  portfolio: {
    overlayTitle: `${textSize.xl} group-hover:${textSize['2xl']}`,
    overlayDescription: textSize.sm,
    overlayCta: textSize.xs,
  },
  faq: {
    question: textSize.lg,
  },
  nav: {
    mobileButton: textSize.base,
  },
  ui: {
    button: {
      default: textSize.base,
      lg: textSize.lg,
    },
    dialog: {
      title: textSize.lg,
      description: textSize.base,
    },
    input: {
      default: textSize.base,
      file: `file:${textSize.base}`,
      responsive: `md:${textSize.base}`,
    },
  },
  form: {
    field: {
      label: textSize.base,
      control: `h-12 ${textSize.base}`,
      textarea: textSize.base,
      selectItem: textSize.base,
      uploadContainer: `h-40 ${textSize.base}`,
      uploadHint: textSize.base,
      uploadBrowse: textSize.base,
      optionalHint: textSize.sm,
      error: textSize.sm,
      submitFeedback: textSize.sm,
    },
  },
} as const;
