'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { typography } from '@/lib/typography';
import { cn } from '@/lib/utils';

interface ArticleCardProps {
  title: string;
  date: string;
  tags: string[];
  imageUrl?: string;
  href?: string;
  className?: string;
}

export function ArticleCard({ title, date, tags, imageUrl, href, className }: Readonly<ArticleCardProps>) {
  const Component = href ? 'a' : 'div';

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className={cn('group h-full', className)}
    >
      <Component
        {...(href && { href })}
        className="flex h-full flex-col gap-4"
      >
        {/* Image */}
        <div className="aspect-8/7 overflow-hidden rounded-lg bg-muted relative">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover transition-transform group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-primary/10 to-accent/10">
              <span className={`${typography.card.placeholderInitial} font-bold text-muted-foreground/20`}>{title[0]}</span>
            </div>
          )}
        </div>

        {/* Tags */}
        <div className="flex gap-2 overflow-x-auto whitespace-nowrap">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className={`shrink-0 ${typography.card.badge}`}>
              {tag}
            </Badge>
          ))}
        </div>

        {/* Title */}
        <h3 className={`${typography.card.title} font-semibold leading-tight group-hover:text-primary transition-colors`}>
          {title}
        </h3>

        {/* Date */}
        <p className={`mt-auto ${typography.card.description} text-muted-foreground`}>{date}</p>
      </Component>
    </motion.div>
  );
}
