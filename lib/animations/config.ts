import { Variants } from 'framer-motion';

export type AnimationType = 'fade' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'scale' | 'none';

export interface AnimationConfig {
  initial: Record<string, number | string>;
  animate: Record<string, number | string>;
  exit?: Record<string, number | string>;
  transition?: Record<string, number | string | number[]>;
}

/**
 * Configurable animation presets
 * Adjust these values to change animation behavior globally
 */
export const ANIMATION_PRESETS = {
  duration: {
    fast: 0.3,
    normal: 0.5,
    slow: 0.8,
  },
  delay: {
    none: 0,
    short: 0.1,
    medium: 0.2,
    long: 0.3,
  },
  distance: {
    small: 20,
    medium: 40,
    large: 60,
  },
  scale: {
    small: 0.9,
    medium: 0.8,
    large: 0.6,
  },
  stagger: {
    fast: 0.05,
    normal: 0.1,
    slow: 0.15,
  },
} as const;

/**
 * Get animation variants based on type
 */
export function getAnimationVariants(
  type: AnimationType,
  options: {
    duration?: keyof typeof ANIMATION_PRESETS.duration;
    delay?: keyof typeof ANIMATION_PRESETS.delay;
    distance?: keyof typeof ANIMATION_PRESETS.distance;
    scale?: keyof typeof ANIMATION_PRESETS.scale;
  } = {}
): AnimationConfig {
  const {
    duration = 'normal',
    delay = 'none',
    distance = 'medium',
    scale = 'medium',
  } = options;

  const durationValue = ANIMATION_PRESETS.duration[duration];
  const delayValue = ANIMATION_PRESETS.delay[delay];
  const distanceValue = ANIMATION_PRESETS.distance[distance];
  const scaleValue = ANIMATION_PRESETS.scale[scale];

  const transition = {
    duration: durationValue,
    delay: delayValue,
    ease: [0.4, 0, 0.2, 1], // cubic-bezier easing
  };

  switch (type) {
    case 'fade':
      return {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition,
      };

    case 'slideUp':
      return {
        initial: { opacity: 0, y: distanceValue },
        animate: { opacity: 1, y: 0 },
        transition,
      };

    case 'slideDown':
      return {
        initial: { opacity: 0, y: -distanceValue },
        animate: { opacity: 1, y: 0 },
        transition,
      };

    case 'slideLeft':
      return {
        initial: { opacity: 0, x: distanceValue },
        animate: { opacity: 1, x: 0 },
        transition,
      };

    case 'slideRight':
      return {
        initial: { opacity: 0, x: -distanceValue },
        animate: { opacity: 1, x: 0 },
        transition,
      };

    case 'scale':
      return {
        initial: { opacity: 0, scale: scaleValue },
        animate: { opacity: 1, scale: 1 },
        transition,
      };

    case 'none':
    default:
      return {
        initial: {},
        animate: {},
      };
  }
}

/**
 * Container variants for stagger children animations
 */
export function getStaggerContainer(
  stagger: keyof typeof ANIMATION_PRESETS.stagger = 'normal'
): Variants {
  return {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: ANIMATION_PRESETS.stagger[stagger],
      },
    },
  };
}

/**
 * Stagger item variants
 */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};
