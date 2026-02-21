'use client';

import { AnimatedSection } from '@/app/components/ui/animated-section';
import { Carousel } from '@/app/components/ui/carousel';
import { ProjectCard } from '@/app/components/ui/project-card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 'greathub-1',
    title: 'The GreatHub',
    description: 'Great Hub is a Saas website template designed to give Saas companies a visual edge in the market',
    imageUrl: '/assets/images/sections/portfolio/project-1.jpg',
    href: '#',
  },
  {
    id: 'greathub-2',
    title: 'The GreatHub',
    description: 'Great Hub is a Saas website template designed to give Saas companies a visual edge in the market',
    imageUrl: '/assets/images/sections/portfolio/project-2.jpg',
    href: '#',
  },
  {
    id: 'greathub-3',
    title: 'The GreatHub',
    description: 'Great Hub is a Saas website template designed to give Saas companies a visual edge in the market',
    imageUrl: '/assets/images/sections/portfolio/project-3.jpg',
    href: '#',
  },
  {
    id: 'greathub-4',
    title: 'The GreatHub',
    description: 'Great Hub is a Saas website template designed to give Saas companies a visual edge in the market',
    imageUrl: '/assets/images/sections/portfolio/project-1.jpg',
    href: '#',
  },
  {
    id: 'greathub-5',
    title: 'The GreatHub',
    description: 'Great Hub is a Saas website template designed to give Saas companies a visual edge in the market',
    imageUrl: '/assets/images/sections/portfolio/project-2.jpg',
    href: '#',
  },
  {
    id: 'greathub-6',
    title: 'The GreatHub',
    description: 'Great Hub is a Saas website template designed to give Saas companies a visual edge in the market',
    imageUrl: '/assets/images/sections/portfolio/project-3.jpg',
    href: '#',
  },
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className='py-24 container-px'>
      <div className='max-w-7xl mx-auto'>
        <AnimatedSection animation="slideUp" className='text-center mb-16'>
          <h2 className='text-3xl md:text-5xl font-bold mb-4'>
            Work that works
          </h2>
          <p className='text-muted-foreground text-lg'>
            Some of our favorite work, for some of our favorite clients
          </p>
        </AnimatedSection>

        <Carousel
          options={{ loop: true, align: 'start' }}
          autoplay
          autoplayDelay={4000}
          showControls={false}
          containerClassName='-ml-4'
          slideClassName='flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4'
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </Carousel>

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