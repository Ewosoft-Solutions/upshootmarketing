# Quick Customization Guide

This guide provides quick reference for common customizations you might want to make to the landing page.

## 🎨 Colors & Theme

### Brand Colors

Edit `app/globals.css`:

```css
:root {
  /* Primary brand color (buttons, accents) */
  --brand-primary: oklch(0.55 0.2 260);
  
  /* Secondary accent color */
  --brand-accent: oklch(0.65 0.25 300);
  
  /* Dark background color */
  --brand-dark: oklch(0.15 0.02 265);
  
  /* Even darker background */
  --brand-darker: oklch(0.1 0.02 265);
}
```

**Color Format:** Using OKLCH for better color perception
- First value: Lightness (0-1)
- Second value: Chroma/saturation (0-0.4)
- Third value: Hue (0-360 degrees)

**Quick Color Changes:**
- Make brighter: Increase first value
- More saturated: Increase second value
- Change hue: Adjust third value (0=red, 120=green, 240=blue, 300=purple)

### Toggle Dark/Light Mode

Edit `app/layout.tsx`:

```tsx
// For dark mode (current):
<html lang="en" className="dark">

// For light mode:
<html lang="en">
```

## 📝 Content Updates

### Hero Section

File: `app/components/sections/HeroSection.tsx`

```tsx
// Update main headline
<h1>Your New Headline Here</h1>

// Update subtitle
<p>Your new subtitle text</p>

// Update client logos/badges
const clientLogos = [
  { name: 'Client 1', category: 'Category 1' },
  // Add more clients...
];
```

### About Section

File: `app/components/sections/AboutSection.tsx`

```tsx
// Update heading
<h2>Your About Heading</h2>

// Update paragraphs
<p>Your about text...</p>

// Add video URL (replace placeholder)
<iframe src="YOUR_VIDEO_URL" ... />
```

### Services

File: `app/components/sections/ServicesSection.tsx`

```tsx
const services = [
  {
    icon: YourIcon,              // Import from lucide-react
    title: 'Service Name',
    description: 'Service description...',
  },
  // Add more services...
];
```

**Available Icons:** Browse [Lucide Icons](https://lucide.dev/icons/)

### Portfolio Projects

File: `app/components/sections/PortfolioSection.tsx`

```tsx
const projects = [
  {
    title: 'Project Name',
    description: 'Project description...',
    imageUrl: '/images/project1.jpg',  // Add to public/ folder
    href: '/portfolio/project-1',       // Project detail page
  },
  // Add more projects...
];
```

### Blog Articles

File: `app/components/sections/ArticlesSection.tsx`

```tsx
const articles = [
  {
    title: 'Article Title',
    date: 'January 15, 2025',
    tags: ['Tag1', 'Tag2'],
    imageUrl: '/images/article1.jpg',
    href: '/blog/article-slug',
  },
  // Add more articles...
];
```

## 🔗 Navigation

### Update Nav Links

File: `lib/constants/nav-links.ts`

```tsx
export const navLinks = [
  { label: 'Home', href: '/' },           // Full page
  { label: 'About', href: '#about' },     // In-page section
  { label: 'Blog', href: '/blog' },       // External page
  // Add more links...
];
```

**Link Types:**
- `/page`: Full page navigation
- `#section`: Smooth scroll to section (must match section id)
- External: Full URL for external links

### Add New Section to Navigation

1. Add section with `id` attribute:
```tsx
<section id="new-section">...</section>
```

2. Add to nav links:
```tsx
{ label: 'New Section', href: '#new-section' }
```

## 🖼️ Images

### Add Images

1. Place images in `public/` folder:
```
public/
  images/
    logo.png
    project1.jpg
    hero-bg.jpg
```

2. Reference in components:
```tsx
<img src="/images/logo.png" alt="Logo" />
```

### Optimize Images

For Next.js optimized images:

```tsx
import Image from 'next/image';

<Image
  src="/images/hero.jpg"
  alt="Description"
  width={1200}
  height={600}
  priority  // For above-fold images
/>
```

## ✨ Animations

### Change Animation Speed

File: `lib/animations/config.ts`

```typescript
duration: {
  fast: 0.2,    // Faster animations
  normal: 0.4,  // Faster normal speed
  slow: 0.6,    // Faster slow speed
}
```

### Change Animation Type

In any section component:

```tsx
<AnimatedSection animation="slideUp">    // Default
<AnimatedSection animation="fade">       // Just fade in
<AnimatedSection animation="slideLeft">  // Slide from right
<AnimatedSection animation="scale">      // Scale up
<AnimatedSection animation="none">       // No animation
```

### Disable Animations

Remove `AnimatedSection` wrapper:

```tsx
// Before:
<AnimatedSection animation="slideUp">
  <Content />
</AnimatedSection>

// After:
<Content />
```

## 🎯 Call-to-Action Buttons

### Update CTA Text

Search for `Button` components and update text:

```tsx
<Button>New CTA Text</Button>
```

### Update CTA Actions

For modal triggers:

```tsx
<Button onClick={() => setOpen(true)}>Get Started</Button>
```

For links:

```tsx
<Button asChild>
  <a href="/contact">Contact Us</a>
</Button>
```

For external links:

```tsx
<Button asChild>
  <a href="https://example.com" target="_blank" rel="noopener noreferrer">
    Visit Site
  </a>
</Button>
```

## 📱 Responsive Design

### Adjust Breakpoints

Components use Tailwind breakpoints:
- `sm:` - 640px and up
- `md:` - 768px and up
- `lg:` - 1024px and up
- `xl:` - 1280px and up

Example:

```tsx
<div className="text-xl md:text-3xl lg:text-5xl">
  {/* Small: xl, Medium: 3xl, Large: 5xl */}
</div>
```

### Hide Elements on Mobile

```tsx
<div className="hidden md:block">
  {/* Hidden on mobile, visible on md+ */}
</div>

<div className="block md:hidden">
  {/* Visible on mobile, hidden on md+ */}
</div>
```

## 📧 Newsletter/Contact Forms

### Update Form Action

File: `app/components/layout/Footer.tsx`

```tsx
<form onSubmit={handleSubmit}>
  <Input type="email" ... />
  <Button type="submit">Subscribe</Button>
</form>
```

Add form handler:

```tsx
const handleSubmit = async (e) => {
  e.preventDefault();
  // Add your form submission logic
  // Example: Send to API, email service, etc.
};
```

## 🔧 Advanced Customizations

### Add Google Fonts

File: `app/layout.tsx`

```tsx
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

// In <body>:
<body className={inter.className}>
```

### Add Google Analytics

File: `app/layout.tsx`

```tsx
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID" />
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_ID');
          `
        }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

### Custom Cursor Effect

Add to `app/globals.css`:

```css
@layer base {
  html {
    cursor: url('/cursors/default.png'), auto;
  }
  
  a, button {
    cursor: url('/cursors/pointer.png'), pointer;
  }
}
```

## 🚀 Performance

### Enable Image Optimization

Already configured! Just use Next.js Image component.

### Lazy Load Sections

```tsx
import dynamic from 'next/dynamic';

const HeavySection = dynamic(
  () => import('@/app/components/sections/HeavySection'),
  { loading: () => <p>Loading...</p> }
);
```

### Reduce Animation Distance

File: `lib/animations/config.ts`

```typescript
distance: {
  small: 10,   // More subtle
  medium: 20,  // Less movement
  large: 30,   // Gentler
}
```

## 📊 SEO

### Update Meta Tags

File: `app/layout.tsx`

```tsx
export const metadata = {
  title: 'Your Site Title',
  description: 'Your site description',
  keywords: ['keyword1', 'keyword2'],
  openGraph: {
    title: 'Your Site Title',
    description: 'Your description',
    images: ['/og-image.jpg'],
  },
};
```

### Add Structured Data

```tsx
<script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "UpShoot Marketing",
    "url": "https://yoursite.com"
  })}
</script>
```

## 🐛 Troubleshooting

### Animations Not Working
- Check `triggerOnce` prop (set to `false` for repeating animations)
- Verify section has `id` attribute for scroll detection
- Ensure element has enough scroll space above it

### Styles Not Applying
- Clear Next.js cache: `rm -rf .next`
- Restart dev server: `npm run dev`
- Check Tailwind class names are correct

### Build Errors
- Check for TypeScript errors: `npm run build`
- Verify all imports are correct
- Check for missing dependencies

## 📞 Need Help?

- Check full docs in [README.md](../README.md)
- See animation guide in [ANIMATION_CONFIG.md](./ANIMATION_CONFIG.md)
- Review component files for inline comments

---

Remember to test changes on multiple devices and browsers!
