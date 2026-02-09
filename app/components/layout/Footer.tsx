'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AnimatedSection } from '@/app/components/ui/animated-section';
import { handleAnchorClick } from '@/lib/utils/scroll';

const companyLinks = [
  { label: 'Who We Are', href: '#about' },
  { label: 'Get In Touch', href: '#contact' },
  { label: 'Get Featured', href: '#' },
  { label: 'Join The Team', href: '#' },
];

const resourceLinks = [
  { label: 'FAQs', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Privacy policy', href: '#' },
];

export function Footer() {
  return (
    <footer id="contact" className='bg-background border-t border-border'>
      {/* CTA Section */}
      <div className='py-20 px-6'>
        <div className='max-w-4xl mx-auto text-center'>
          <AnimatedSection animation="slideUp">
            <h2 className='text-3xl md:text-5xl font-bold mb-4'>
              Ready to get started?
            </h2>
            <p className='text-muted-foreground text-lg mb-8'>
              Are you ready to take your Brand to the next level?<br />
              Contact us and lets talk about your brand
            </p>
            <Button size="lg">Contact us</Button>
          </AnimatedSection>
        </div>
      </div>

      {/* Footer Content */}
      <div className='border-t border-border py-12 px-6'>
        <div className='max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Company Links */}
          <div>
            <h3 className='font-semibold mb-4'>COMPANY</h3>
            <ul className='space-y-2'>
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleAnchorClick(e, link.href)}
                    className='text-muted-foreground hover:text-foreground transition-colors cursor-pointer'
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources - Column 1 */}
          <div>
            <h3 className='font-semibold mb-4'>RESOURCES</h3>
            <ul className='space-y-2'>
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleAnchorClick(e, link.href)}
                    className='text-muted-foreground hover:text-foreground transition-colors cursor-pointer'
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources - Column 2 (duplicate in design) */}
          <div>
            <h3 className='font-semibold mb-4'>RESOURCES</h3>
            <ul className='space-y-2'>
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleAnchorClick(e, link.href)}
                    className='text-muted-foreground hover:text-foreground transition-colors cursor-pointer'
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className='font-semibold mb-4'>Be The First To Know</h3>
            <p className='text-muted-foreground text-sm mb-4'>
              Be the first to read our Articles and News Letter
            </p>
            <div className='flex gap-2'>
              <Input
                type="email"
                placeholder="Email address"
                className='flex-1'
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className='border-t border-border py-6 px-6'>
        <p className='text-center text-muted-foreground text-sm'>
          © 2025. All rights reserved
        </p>
      </div>
    </footer>
  );
}
