'use client';

import { AnimatedSection } from '@/app/components/ui/animated-section';
import { Carousel } from '@/app/components/ui/carousel';
import { ProjectCard } from '@/app/components/ui/project-card';
import { ArrowLinkButton } from '@/app/components/ui/arrow-link-button';
import { typography } from '@/lib/typography';
import { cn } from '@/lib/utils';

const projects = [
  {
    id: 'greathub-1',
    title: 'The GreatHub',
    description:
      'Great Hub is a Saas website template designed to give Saas companies a visual edge in the market',
    imageUrl: '/assets/images/sections/portfolio/project-1.jpg',
    href: '/portfolio/video-editing',
  },
  {
    id: 'greathub-2',
    title: 'The GreatHub',
    description:
      'Great Hub is a Saas website template designed to give Saas companies a visual edge in the market',
    imageUrl: '/assets/images/sections/portfolio/project-2.jpg',
    href: '/portfolio/graphics-design',
  },
  {
    id: 'greathub-3',
    title: 'The GreatHub',
    description:
      'Great Hub is a Saas website template designed to give Saas companies a visual edge in the market',
    imageUrl: '/assets/images/sections/portfolio/project-3.jpg',
    href: '/portfolio/branding',
  },
  {
    id: 'greathub-4',
    title: 'The GreatHub',
    description:
      'Great Hub is a Saas website template designed to give Saas companies a visual edge in the market',
    imageUrl: '/assets/images/sections/portfolio/project-1.jpg',
    href: '/portfolio/social-media-management',
  },
  {
    id: 'greathub-5',
    title: 'The GreatHub',
    description:
      'Great Hub is a Saas website template designed to give Saas companies a visual edge in the market',
    imageUrl: '/assets/images/sections/portfolio/project-2.jpg',
    href: '/portfolio/content-strategy-ideation',
  },
  {
    id: 'greathub-6',
    title: 'The GreatHub',
    description:
      'Great Hub is a Saas website template designed to give Saas companies a visual edge in the market',
    imageUrl: '/assets/images/sections/portfolio/project-3.jpg',
    href: '/portfolio/meta-ads',
  },
];

export function PortfolioSection() {
  return (
    <section id='portfolio' className={cn('py-16 md:py-24 container-px')}>
      <div className={cn('max-w-screen-2xl mx-auto')}>
        <AnimatedSection
          animation='slideUp'
          className={cn('text-center mb-16')}
        >
          <h2 className={cn(typography.section.title, 'font-bold mb-4')}>
            Work that works
          </h2>
          <p
            className={cn(
              'text-muted-foreground',
              typography.section.description,
            )}
          >
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

        <AnimatedSection
          animation='fade'
          delay='long'
          className={cn('text-center mt-12')}
        >
          <ArrowLinkButton href='/portfolio'>View All Projects</ArrowLinkButton>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default PortfolioSection;
