'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
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
      className={cn('group', className)}
    >
      <Component
        {...(href && { href })}
        className="block space-y-4"
      >
        {/* Image */}
        <div className="aspect-16/10 overflow-hidden rounded-lg bg-muted relative">
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
              <span className="text-4xl font-bold text-muted-foreground/20">{title[0]}</span>
            </div>
          )}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold leading-tight group-hover:text-primary transition-colors">
          {title}
        </h3>

        {/* Date */}
        <p className="text-sm text-muted-foreground">{date}</p>
      </Component>
    </motion.div>
  );
}
