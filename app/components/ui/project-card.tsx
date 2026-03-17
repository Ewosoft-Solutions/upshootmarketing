'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { typography } from '@/lib/typography';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  href?: string;
  className?: string;
}

export function ProjectCard({ title, description, imageUrl, href, className }: Readonly<ProjectCardProps>) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className={cn(
        'group relative overflow-hidden transition-colors',
        className,
      )}
    >
      {/* Image */}
      <div className={cn('aspect-16/10 overflow-hidden bg-muted relative')}>
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className={cn('object-cover rounded-xl ')}
            sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
          />
        ) : (
          <div className={cn('w-full h-full flex items-center justify-center bg-linear-to-br from-primary/20 to-accent/20')}>
            <span className={cn(typography.card.placeholderInitial, 'font-bold text-muted-foreground/20')}>
              {title[0]}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className={cn('mt-4')}>
        <div className={cn('text-muted-foreground mb-2 group-hover:text-primary transition-colors flex items-center justify-between')}>
          <h3>{title}</h3>
          {href && (
            <Button variant='ghost' className={cn('group/btn hover:bg-foreground')} asChild>
              <a href={href}>
                View Project
                <ArrowUpRight className={cn('ml-0.5 h-4 w-4 transition-transform group-hover/btn:translate-x-1')} />
              </a>
            </Button>
          )}
        </div>
        <p className={cn(typography.card.titleSmall, 'font-semibold mb-4 line-clamp-2')}>
          {description}
        </p>
      </div>
    </motion.div>
  );
}
