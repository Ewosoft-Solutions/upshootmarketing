'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { portfolioCategories } from '@/lib/constants/portfolio-content';
import { typography } from '@/lib/typography';
import { cn } from '@/lib/utils';

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

const gridVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.32, ease: 'easeOut' },
  },
};

export function PortfolioPageClient() {
  const shouldReduceMotion = useReducedMotion();

  const animationMode = shouldReduceMotion ? undefined : 'visible';

  return (
    <main className={cn('container-px pb-20 pt-32 md:pt-36')}>
      <section className={cn('mx-auto max-w-screen-2xl space-y-10')}>
        <motion.div
          className={cn('flex flex-col gap-3')}
          variants={headingVariants}
          initial={shouldReduceMotion ? undefined : 'hidden'}
          animate={animationMode}
        >
          <h1 className={cn(typography.page.title, 'font-bold')}>
            Our Portfolio
          </h1>
          <p className={cn('max-w-2xl text-muted-foreground')}>
            Choose a Category.
          </p>
        </motion.div>

        <motion.div
          className={cn('grid gap-6 md:grid-cols-2 xl:grid-cols-3')}
          variants={gridVariants}
          initial={shouldReduceMotion ? undefined : 'hidden'}
          animate={animationMode}
        >
          {portfolioCategories.map((category) => (
            <motion.div
              key={category.slug}
              variants={cardVariants}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : { y: -6, transition: { duration: 0.2 } }
              }
            >
              <Link
                href={`/portfolio/${category.slug}`}
                className={cn(
                  'group block w-full overflow-hidden rounded-2xl border border-border bg-card text-left transition-shadow duration-200 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50',
                )}
              >
                <div
                  className={cn(
                    'relative aspect-16/10 overflow-hidden bg-muted',
                  )}
                >
                  {category.coverImageUrl ? (
                    <Image
                      src={category.coverImageUrl}
                      alt={category.title}
                      fill
                      className={cn(
                        'object-cover transition-transform duration-300 group-hover:scale-105',
                      )}
                      sizes='(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw'
                    />
                  ) : null}

                  <div
                    className={cn(
                      'absolute inset-0 bg-linear-to-t from-black/80 via-black/35 to-black/10',
                    )}
                  />
                  <div
                    className={cn(
                      'absolute inset-0 bg-black/45 opacity-0 transition-opacity duration-200 group-hover:opacity-100',
                    )}
                  />

                  <div className={cn('absolute inset-x-0 bottom-0 p-5')}>
                    <div
                      className={cn(
                        'transition-transform duration-200 group-hover:-translate-y-5',
                      )}
                    >
                      <div className={cn('flex items-center gap-1')}>
                        <h2
                          className={cn(
                            typography.portfolio.title,
                            'font-semibold text-white transition-all duration-200',
                          )}
                        >
                          {category.title}
                        </h2>
                        <ArrowUpRight
                          className={cn(
                            'h-5 w-5 shrink-0 text-white/90 opacity-0 transition-all duration-200 md:group-hover:-translate-y-0.5 md:group-hover:translate-x-0.5 md:group-hover:opacity-100',
                          )}
                        />
                      </div>
                      <p
                        className={cn(
                          'mt-1 line-clamp-2 max-h-0 overflow-hidden text-white/85 opacity-0 transition-all duration-200 group-hover:max-h-14 group-hover:opacity-100',
                          typography.portfolio.description,
                        )}
                      >
                        {category.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}
