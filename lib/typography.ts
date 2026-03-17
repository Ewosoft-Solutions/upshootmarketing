export const typography = {
  page: {
    title: 'text-4xl md:text-6xl',
    description: 'text-lg leading-relaxed',
    socialIconLabel: 'text-base leading-none',
  },
  section: {
    title: 'text-3xl md:text-5xl',
    subtitle: 'text-2xl md:text-3xl',
    description: 'text-lg leading-relaxed',
  },
  hero: {
    title: 'text-3xl md:text-5xl lg:text-6xl',
    description: 'text-lg md:text-xl',
  },
  portfolio: {
    title: 'text-xl group-hover:text-2xl',
    description: 'text-sm',
    cta: 'text-xs',
  },
  footer: {
    ctaTitle: 'text-2xl md:text-4xl',
    ctaDescription: 'text-base md:text-lg',
    logoLabel: 'text-xl',
    sectionHeading: 'text-base',
    sectionLink: 'text-base',
    newsletterDescription: 'text-base',
    copyright: 'text-base',
  },
  card: {
    title: 'text-xl',
    titleSmall: 'text-lg',
    titleLarge: 'text-2xl',
    description: 'text-base',
    descriptionSmall: 'text-sm',
    badge: 'text-xs',
    placeholderInitial: 'text-4xl',
    price: 'text-5xl',
    statValue: 'text-3xl md:text-4xl',
  },
  faq: {
    question: 'text-lg',
  },
  nav: {
    mobileButton: 'text-base',
  },
  ui: {
    button: {
      default: 'text-base',
      lg: 'text-lg',
    },
    dialog: {
      title: 'text-lg',
      description: 'text-base',
    },
    input: {
      default: 'text-base',
      file: 'file:text-base',
      responsive: 'md:text-base',
    },
  },
  form: {
    field: {
      label: 'text-base',
      control: 'h-12 text-base',
      textarea: 'text-base',
      selectItem: 'text-base',
      uploadContainer: 'h-40 text-base',
      uploadHint: 'text-base',
      uploadBrowse: 'text-base',
      optionalHint: 'text-sm',
      error: 'text-sm',
      submitFeedback: 'text-sm',
    },
  },
} as const;
