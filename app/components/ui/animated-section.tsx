'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { AnimationType, getAnimationVariants, ANIMATION_PRESETS } from '@/lib/animations/config';
import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: AnimationType;
  duration?: keyof typeof ANIMATION_PRESETS.duration;
  delay?: keyof typeof ANIMATION_PRESETS.delay;
  distance?: keyof typeof ANIMATION_PRESETS.distance;
  scale?: keyof typeof ANIMATION_PRESETS.scale;
  threshold?: number;
  triggerOnce?: boolean;
}

export function AnimatedSection({
  children,
  className,
  animation = 'slideUp',
  duration = 'normal',
  delay = 'none',
  distance = 'medium',
  scale = 'medium',
  threshold = 0.1,
  triggerOnce = true,
}: Readonly<AnimatedSectionProps>) {
  const { ref, isInView } = useScrollAnimation({ threshold, triggerOnce });
  const variants = getAnimationVariants(animation, { duration, delay, distance, scale });

  return (
    <motion.div
      ref={ref}
      initial={variants.initial}
      animate={isInView ? variants.animate : variants.initial}
      transition={variants.transition}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
