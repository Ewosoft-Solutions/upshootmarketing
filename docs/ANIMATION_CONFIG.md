# Animation Configuration Guide

This document explains how to configure and customize animations throughout the landing page.

## Overview

The animation system is built on top of Framer Motion and provides a flexible, easy-to-configure approach to animations. All animations can be customized from a central configuration file.

## Configuration File

**Location:** `lib/animations/config.ts`

### Animation Presets

All animation timing and behavior can be configured by modifying the `ANIMATION_PRESETS` object:

```typescript
export const ANIMATION_PRESETS = {
  duration: {
    fast: 0.3,      // Quick animations (e.g., hover effects)
    normal: 0.5,    // Standard animations
    slow: 0.8,      // Slow, dramatic animations
  },
  delay: {
    none: 0,        // No delay
    short: 0.1,     // Brief delay
    medium: 0.2,    // Medium delay
    long: 0.3,      // Long delay
  },
  distance: {
    small: 20,      // Subtle slide distance (px)
    medium: 40,     // Standard slide distance (px)
    large: 60,      // Large slide distance (px)
  },
  scale: {
    small: 0.9,     // Subtle scale (90% of original)
    medium: 0.8,    // Medium scale (80% of original)
    large: 0.6,     // Dramatic scale (60% of original)
  },
  stagger: {
    fast: 0.05,     // Quick stagger between items
    normal: 0.1,    // Standard stagger
    slow: 0.15,     // Slow stagger for dramatic effect
  },
};
```

## Animation Types

The system supports the following animation types:

1. **fade** - Simple fade in/out
2. **slideUp** - Slides up while fading in
3. **slideDown** - Slides down while fading in
4. **slideLeft** - Slides from right to left while fading in
5. **slideRight** - Slides from left to right while fading in
6. **scale** - Scales up while fading in
7. **none** - No animation

## Using AnimatedSection Component

The `AnimatedSection` component wraps content and applies scroll-triggered animations:

```tsx
import { AnimatedSection } from '@/app/components/ui/animated-section';

<AnimatedSection
  animation="slideUp"       // Animation type
  duration="normal"         // Animation speed
  delay="short"            // Delay before animation starts
  distance="medium"        // Slide distance (for slide animations)
  scale="medium"           // Scale value (for scale animations)
  threshold={0.1}          // % of element visible before triggering
  triggerOnce={true}       // Animate only once
>
  <YourContent />
</AnimatedSection>
```

### Props

- `animation`: Animation type (default: 'slideUp')
- `duration`: Speed preset (default: 'normal')
- `delay`: Delay preset (default: 'none')
- `distance`: Slide distance preset (default: 'medium')
- `scale`: Scale preset (default: 'medium')
- `threshold`: Intersection observer threshold 0-1 (default: 0.1)
- `triggerOnce`: Only animate once (default: true)

## Stagger Animations

For lists or grids, use stagger animations to animate children sequentially:

```tsx
import { motion } from 'framer-motion';
import { getStaggerContainer, staggerItem } from '@/lib/animations/config';

<motion.div
  variants={getStaggerContainer('normal')}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
>
  {items.map((item) => (
    <motion.div key={item.id} variants={staggerItem}>
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

## Examples by Section

### Hero Section
- Uses immediate animations (no scroll trigger)
- Client logos stagger in sequentially
- Configuration: `duration: 'normal'`, various delays

### About Section
- Slide animations from left and right
- Configuration: `animation: 'slideRight'` and `'slideLeft'`, `duration: 'slow'`

### Services Section
- Stagger animation for service cards
- Configuration: `getStaggerContainer('normal')`

### Portfolio Section
- Cards slide up with staggered delays
- Configuration: `animation: 'slideUp'`, varying delays

### Articles Section
- Similar to portfolio with staggered card animations
- Configuration: `animation: 'slideUp'`, sequential delays

## Customization Tips

### Making Animations Faster/Slower

Edit the duration presets in `ANIMATION_PRESETS`:

```typescript
duration: {
  fast: 0.2,    // Make fast animations faster
  normal: 0.4,  // Make normal animations faster
  slow: 0.6,    // Make slow animations faster
}
```

### Changing Slide Distance

Adjust the distance presets:

```typescript
distance: {
  small: 10,    // More subtle slides
  medium: 30,   // Moderate slides
  large: 80,    // More dramatic slides
}
```

### Disabling Animations

To disable animations for a section, use `animation="none"`:

```tsx
<AnimatedSection animation="none">
  <Content />
</AnimatedSection>
```

Or remove the AnimatedSection wrapper entirely.

### Different Animation on Mobile

You can add responsive animation logic:

```tsx
const isMobile = useMediaQuery('(max-width: 768px)');

<AnimatedSection animation={isMobile ? 'fade' : 'slideUp'}>
  <Content />
</AnimatedSection>
```

## Performance Considerations

- `triggerOnce={true}` improves performance by not re-animating on scroll
- Higher `threshold` values delay animation until more of the element is visible
- Stagger delays should be kept small (< 0.2s) for large lists

## Troubleshooting

**Animations not triggering:**
- Check that the element has enough scroll space above it
- Adjust `threshold` prop (lower values trigger earlier)
- Verify `rootMargin` in useScrollAnimation hook

**Animations too fast/slow:**
- Adjust values in `ANIMATION_PRESETS.duration`
- Or pass custom duration to individual components

**Janky animations:**
- Ensure you're animating transform properties (x, y, scale) not top/left
- Use `will-change: transform` CSS for complex animations
- Reduce number of simultaneously animating elements

## Browser Support

Animations use:
- Framer Motion (widely supported)
- Intersection Observer API (IE11+ with polyfill)
- CSS transforms (all modern browsers)

Graceful degradation: Elements appear without animation if JS is disabled.
