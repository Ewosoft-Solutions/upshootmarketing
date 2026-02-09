'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
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
        'group relative overflow-hidden rounded-xl bg-card border border-border hover:border-primary/50 transition-colors',
        className
      )}
    >
      {/* Image */}
      <div className="aspect-16/10 overflow-hidden bg-muted relative">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-primary/20 to-accent/20">
            <span className="text-4xl font-bold text-muted-foreground/20">{title[0]}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{description}</p>

        {href && (
          <Button variant="ghost" className="group/btn -ml-4" asChild>
            <a href={href}>
              View Project
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </a>
          </Button>
        )}
      </div>
    </motion.div>
  );
}
