'use client';

import { AnimatedSection } from '@/app/components/ui/animated-section';
import { ArticleCard } from '@/app/components/ui/article-card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const articles = [
  {
    id: 'rebrand-examples',
    title: '15 Awesome Rebrand Examples That Tell a Great Brand Story',
    date: 'December 12, 2024',
    tags: ['Brand Strategy', 'Marketing'],
    imageUrl: '',
    href: '/blog',
  },
  {
    id: 'ai-marketing-prompts',
    title: 'Everything You Need to Know About AI Marketing + 75 AI Prompts',
    date: 'December 12, 2024',
    tags: ['Branding', 'AI Marketing'],
    imageUrl: '',
    href: '/blog',
  },
  {
    id: 'million-dollar-brand',
    title: 'How to Look Like a Million-Dollar Brand on a Startup Budget',
    date: 'December 12, 2024',
    tags: ['Content Marketing', 'Content Design'],
    imageUrl: '',
    href: '/blog',
  },
  {
    id: 'content-studio-vs-production',
    title: 'Strategy Content Studio vs. Production Shop',
    date: 'December 12, 2024',
    tags: ['Ads Marketing', 'B2B Marketing'],
    imageUrl: '',
    href: '/blog',
  },
];

function getArticleDelay(index: number): 'none' | 'short' | 'medium' | 'long' {
  if (index === 0) return 'none';
  if (index === 1) return 'short';
  if (index === 2) return 'medium';
  return 'long';
}

export function ArticlesSection() {
  return (
    <section id="blog" className='py-24 px-6 bg-background'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center mb-16 gap-4'>
          <AnimatedSection animation="slideRight">
            <h2 className='text-3xl md:text-5xl font-bold'>
              Featured Articles
            </h2>
          </AnimatedSection>
          
          <AnimatedSection animation="slideLeft">
            <Button variant="ghost" className='group' asChild>
              <a href="/blog">
                View more Articles
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </AnimatedSection>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {articles.map((article, index) => (
            <AnimatedSection
              key={article.id}
              animation="slideUp"
              delay={getArticleDelay(index)}
            >
              <ArticleCard {...article} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ArticlesSection;