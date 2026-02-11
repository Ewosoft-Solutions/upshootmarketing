'use client';

import { AnimatedSection } from '@/app/components/ui/animated-section';
import { ProjectCard } from '@/app/components/ui/project-card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 'greathub-1',
    title: 'The GreatHub',
    description: 'Great Hub is a Saas website template designed to give Saas companies a visual edge in the market',
    imageUrl: '',
    href: '#',
  },
  {
    id: 'greathub-2',
    title: 'The GreatHub',
    description: 'Great Hub is a Saas website template designed to give Saas companies a visual edge in the market',
    imageUrl: '',
    href: '#',
  },
  {
    id: 'greathub-3',
    title: 'The GreatHub',
    description: 'Great Hub is a Saas website template designed to give Saas companies a visual edge in the market',
    imageUrl: '',
    href: '#',
  },
];

function getProjectDelay(index: number): 'none' | 'short' | 'medium' {
  if (index === 0) return 'none';
  if (index === 1) return 'short';
  return 'medium';
}

export function PortfolioSection() {
  return (
    <section id="portfolio" className='py-24 container-px bg-muted/30'>
      <div className='max-w-7xl mx-auto'>
        <AnimatedSection animation="slideUp" className='text-center mb-16'>
          <h2 className='text-3xl md:text-5xl font-bold mb-4'>
            Work that works
          </h2>
          <p className='text-muted-foreground text-lg'>
            Some of our favorite work, for some of our favorite clients
          </p>
        </AnimatedSection>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <AnimatedSection
              key={project.id}
              animation="slideUp"
              delay={getProjectDelay(index)}
            >
              <ProjectCard {...project} />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade" delay="long" className='text-center mt-12'>
          <Button variant="ghost" className='group'>
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default PortfolioSection;