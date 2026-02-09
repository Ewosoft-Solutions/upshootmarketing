# UpShoot Marketing Website

Modern B2B marketing landing page built with Next.js, TypeScript, and Framer Motion. Features smooth scroll animations, responsive design, and a comprehensive component library.

## 🚀 Features

- **Modern Design**: Clean, professional B2B marketing design with dark theme
- **Smooth Animations**: Scroll-triggered animations with configurable presets
- **Fully Responsive**: Mobile-first design that works on all devices
- **Type-Safe**: Built with TypeScript for better development experience
- **Reusable Components**: Modular component architecture for easy maintenance
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Fast Performance**: Optimized with Next.js 16 and Turbopack

## 🛠 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Carousel**: Embla Carousel
- **UI Components**: Shadcn/ui
- **Icons**: Lucide React

## 📦 Getting Started

### Prerequisites

- Node.js 20+ 
- npm, yarn, pnpm, or bun

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
upshoot-marketing/
├── app/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx          # Sticky navbar with scroll effects
│   │   │   └── Footer.tsx          # Footer with newsletter signup
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx     # Hero with CTA and client logos
│   │   │   ├── AboutSection.tsx    # About with video embed
│   │   │   ├── ServicesSection.tsx # Services grid with icons
│   │   │   ├── PortfolioSection.tsx # Portfolio grid with cards
│   │   │   ├── ArticlesSection.tsx  # Blog articles grid
│   │   │   └── CTASection.tsx      # Call-to-action section
│   │   ├── modals/
│   │   │   └── GetStartedModal.tsx # Contact/signup modal
│   │   └── ui/
│   │       ├── animated-section.tsx # Scroll animation wrapper
│   │       ├── carousel.tsx         # Embla carousel wrapper
│   │       ├── project-card.tsx     # Portfolio project card
│   │       └── article-card.tsx     # Blog article card
│   ├── globals.css                  # Global styles & CSS variables
│   ├── layout.tsx                   # Root layout
│   └── page.tsx                     # Home page
├── components/ui/                   # Shadcn components
├── lib/
│   ├── animations/
│   │   └── config.ts                # Animation configuration
│   ├── hooks/
│   │   └── useScrollAnimation.ts    # Scroll animation hook
│   ├── constants/
│   │   └── nav-links.ts             # Navigation links
│   └── utils.ts                     # Utility functions
└── public/                          # Static assets
```

## 🎨 Customization

### Colors

Edit CSS variables in `app/globals.css`:

```css
:root {
  --brand-primary: oklch(0.55 0.2 260);      /* Primary accent color */
  --brand-primary-foreground: oklch(1 0 0);  /* Primary text color */
  --brand-accent: oklch(0.65 0.25 300);      /* Secondary accent */
  --brand-dark: oklch(0.15 0.02 265);        /* Dark background */
  --brand-darker: oklch(0.1 0.02 265);       /* Darker background */
}
```

### Animations

See [Animation Configuration Guide](./docs/ANIMATION_CONFIG.md) for detailed animation customization guide.

Quick example:

```typescript
// lib/animations/config.ts
export const ANIMATION_PRESETS = {
  duration: {
    fast: 0.3,    // Adjust speed
    normal: 0.5,
    slow: 0.8,
  },
  // ... more options
};
```

### Content

Update section content in respective component files:
- Hero text: `app/components/sections/HeroSection.tsx`
- About content: `app/components/sections/AboutSection.tsx`
- Services: `app/components/sections/ServicesSection.tsx`
- Portfolio projects: `app/components/sections/PortfolioSection.tsx`
- Articles: `app/components/sections/ArticlesSection.tsx`

### Navigation

Edit navigation links in `lib/constants/nav-links.ts`:

```typescript
export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '#about' },
  // Add more links...
];
```

## 🎬 Animation System

The site uses a flexible animation system built on Framer Motion:

- **AnimatedSection**: Scroll-triggered animations
- **Configurable Presets**: Easy-to-adjust timing and distances
- **Multiple Types**: fade, slideUp, slideDown, slideLeft, slideRight, scale
- **Stagger Support**: Sequential animations for lists

See [Animation Configuration Guide](./docs/ANIMATION_CONFIG.md) for full documentation.

## 🔄 Adding New Sections

1. Create a new component in `app/components/sections/`
2. Use `AnimatedSection` for scroll animations
3. Import and add to `app/page.tsx`
4. Add corresponding nav link in `lib/constants/nav-links.ts`

Example:

```tsx
// app/components/sections/NewSection.tsx
'use client';

import { AnimatedSection } from '@/app/components/ui/animated-section';

export function NewSection() {
  return (
    <section id="new-section" className='py-24 px-6'>
      <AnimatedSection animation="slideUp">
        <h2>New Section</h2>
        <p>Content here</p>
      </AnimatedSection>
    </section>
  );
}
```

## 🌐 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

Build the production bundle:

```bash
npm run build
```

The output will be in the `.next` folder. Follow your platform's Next.js deployment guide.

## 📝 Environment Variables

Create `.env.local` for environment variables:

```env
# Add your environment variables here
# NEXT_PUBLIC_API_URL=https://api.example.com
```

## 🧪 Development

```bash
# Run dev server with hot reload
npm run dev

# Run linter
npm run lint

# Build for production
npm run build

# Start production server
npm start
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential.

## 📖 Additional Documentation

- [Animation Configuration Guide](./docs/ANIMATION_CONFIG.md) - Detailed animation customization
- [Customization Guide](./docs/CUSTOMIZATION_GUIDE.md) - Quick reference for common customizations
- [Build Summary](./docs/BUILD_SUMMARY.md) - What was built and next steps

## 🆘 Support

For support, email support@upshootmarketing.com or create an issue in the repository.

---

Built with ❤️ by UpShoot Marketing
