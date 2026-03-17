'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  cloneElement,
  isValidElement,
  type ReactElement,
  type ReactNode,
  type ComponentProps,
} from 'react';

const colorVariants = {
  primary: {
    button: 'bg-primary text-primary-foreground hover:bg-primary/90',
    shimmer: 'bg-linear-to-r from-transparent via-white/20 dark:via-black/15 to-transparent',
    glow: [
      '0 0 0 0 rgba(0, 0, 0, 0)',
      '0 0 20px 4px rgba(0, 0, 0, 0.15)',
      '0 0 0 0 rgba(0, 0, 0, 0)',
    ],
  },
  inverted: {
    button: 'bg-footer-text text-footer-bg hover:bg-footer-text/90',
    shimmer: 'bg-linear-to-r from-transparent via-black/15 dark:via-white/20 to-transparent',
    glow: [
      '0 0 0 0 rgba(255, 255, 255, 0)',
      '0 0 20px 4px rgba(255, 255, 255, 0.15)',
      '0 0 0 0 rgba(255, 255, 255, 0)',
    ],
  },
} as const;

const sizeVariants = {
  default: 'text-base px-6 py-2',
  lg: 'text-lg px-8 py-3.5',
} as const;

type ColorVariant = keyof typeof colorVariants;
type SizeVariant = keyof typeof sizeVariants;

interface ShimmerButtonProps extends Omit<ComponentProps<typeof Button>, 'size'> {
  colorVariant?: ColorVariant;
  size?: SizeVariant;
  pulse?: boolean;
  icon?: ReactNode | null;
  children: ReactNode;
}

export function ShimmerButton({
  colorVariant = 'primary',
  size = 'lg',
  pulse = true,
  icon,
  children,
  className,
  ...buttonProps
}: Readonly<ShimmerButtonProps>) {
  const colors = colorVariants[colorVariant];
  const usesAsChild = buttonProps.asChild === true;

  const defaultIcon = (
    <motion.span
      className='inline-flex'
      whileHover={{ x: 5 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
    </motion.span>
  );
  const trailingIcon = icon === undefined ? defaultIcon : icon;

  let button: ReactNode;

  if (usesAsChild) {
    if (!isValidElement(children)) {
      throw new Error('ShimmerButton with asChild expects a single React element child.');
    }

    const childElement = children as ReactElement<{
      className?: string;
      children?: ReactNode;
    }>;

    const childClassName = childElement.props.className;

    button = cloneElement(
      childElement,
      {
        className: cn(
          'group relative inline-flex overflow-hidden rounded-4xl items-center justify-center gap-2',
          sizeVariants[size],
          colors.button,
          className,
          childClassName,
        ),
      },
      <>
        <span className='pointer-events-none absolute inset-0 animate-shimmer'>
          <span className={cn('absolute inset-0 -skew-x-12', colors.shimmer)} />
        </span>
        {childElement.props.children}
        {trailingIcon}
      </>,
    );
  } else {
    button = (
      <Button
        size='lg'
        className={cn(
          'group relative overflow-hidden rounded-4xl flex items-center justify-center gap-2',
          sizeVariants[size],
          colors.button,
          className,
        )}
        {...buttonProps}
      >
        <span className='pointer-events-none absolute inset-0 animate-shimmer'>
          <span className={cn('absolute inset-0 -skew-x-12', colors.shimmer)} />
        </span>
        {children}
        {trailingIcon}
      </Button>
    );
  }

  if (!pulse) return button;

  return (
    <motion.div
      animate={{
        scale: [1, 1.04, 1],
        boxShadow: [...colors.glow],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className='rounded-4xl inline-block'
    >
      {button}
    </motion.div>
  );
}
