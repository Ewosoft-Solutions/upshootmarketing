'use client';

import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AnimatedSection } from '@/app/components/ui/animated-section';
import { ShimmerButton } from '@/app/components/ui/shimmer-button';
import Link from 'next/link';
import Image from 'next/image';
import { logos } from '@/lib/constants/assets';
import { typography } from '@/lib/typography';
import { cn } from '@/lib/utils';

type IconProps = Readonly<{ className?: string }>;

function InstagramIcon({ className }: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={className}
    >
      <rect width='20' height='20' x='2' y='2' rx='5' ry='5' />
      <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />
      <line x1='17.5' x2='17.51' y1='6.5' y2='6.5' />
    </svg>
  );
}

function TikTokIcon({ className }: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={className}
    >
      <path d='M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5' />
    </svg>
  );
}

function LinkedinIcon({ className }: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={className}
    >
      <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' />
      <rect width='4' height='12' x='2' y='9' />
      <circle cx='4' cy='4' r='2' />
    </svg>
  );
}

const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com', icon: InstagramIcon },
  { label: 'TikTok', href: 'https://tiktok.com', icon: TikTokIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: LinkedinIcon },
  { label: 'Email', href: 'mailto:hello@upshoot.com', icon: Mail },
];

const companyLinks = [
  { label: 'Who We Are', href: '/about-us' },
  { label: 'Get In Touch', href: '/contact-us' },
  { label: 'Join The Team', href: '/join-team' },
];

const resourceLinks = [
  { label: 'FAQs', href: '/faqs' },
  { label: 'Terms of Service', href: '/terms-of-service' },
  { label: 'Privacy policy', href: '/privacy-policy' },
];

export function Footer() {
  // Footer always uses the dark logo since the bg is always dark
  const footerLogo = logos.dark;

  return (
    <footer
      id='contact'
      className={cn(
        'bg-footer-bg text-footer-text flex flex-col gap-12 md:gap-16 py-10 md:py-16',
      )}
    >
      {/* Top row: CTA (left) + Links grid (right) */}
      <div className={cn('container-px')}>
        <div
          className={cn(
            'max-w-screen-2xl mx-auto grid md:grid-cols-[3fr_2fr] gap-8 lg:gap-16',
          )}
        >
          {/* CTA Section */}
          <AnimatedSection animation='slideUp'>
            <h2
              className={cn(
                typography.footer.ctaTitle,
                'font-medium mb-2 md:mb-4',
              )}
            >
              Ready to get started?
            </h2>
            <p
              className={cn(
                'text-footer-muted',
                typography.footer.ctaDescription,
                'mb-5 md:mb-8',
              )}
            >
              Are you ready to take your Brand to the next level?
              <br />
              Contact us and lets talk about your brand
            </p>
            <ShimmerButton colorVariant='inverted' asChild>
              <Link href='/get-started'>Get Started</Link>
            </ShimmerButton>
          </AnimatedSection>

          {/* Links + Newsletter grid */}
          <div className={cn('grid grid-cols-2 gap-5 md:gap-8 pt-4 md:pt-0')}>
            {/* Company Links */}
            <div>
              <h3
                className={cn(
                  'font-semibold mb-2 md:mb-4 tracking-wide',
                  typography.footer.sectionHeading,
                )}
              >
                COMPANY
              </h3>
              <ul className={cn('space-y-1.5 md:space-y-2')}>
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className={cn(
                        'text-footer-muted hover:text-footer-text transition-colors cursor-pointer',
                        typography.footer.sectionLink,
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources - Column 1 */}
            <div>
              <h3
                className={cn(
                  'font-semibold mb-2 md:mb-4 tracking-wide',
                  typography.footer.sectionHeading,
                )}
              >
                RESOURCES
              </h3>
              <ul className={cn('space-y-1.5 md:space-y-2')}>
                {resourceLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className={cn(
                        'text-footer-muted hover:text-footer-text transition-colors cursor-pointer',
                        typography.footer.sectionLink,
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Middle row: Logo (left) + Be The First To Know (right) */}
      <div className={cn('container-px')}>
        <div
          className={cn(
            'max-w-screen-2xl mx-auto grid md:grid-cols-5 gap-5 md:gap-8 items-start',
          )}
        >
          <Link
            href='/'
            className={cn(
              typography.footer.logoLabel,
              'font-bold md:col-span-3',
            )}
          >
            <Image
              src={footerLogo}
              alt='UpShoot Marketing'
              width={0}
              height={0}
              className={cn('w-auto h-10 md:h-16 lg:h-24')}
            />
          </Link>

          <div className={cn('md:col-span-2')}>
            <h3
              className={cn(
                'font-semibold mb-2 md:mb-4 tracking-wide',
                typography.footer.sectionHeading,
              )}
            >
              BE THE FIRST TO KNOW
            </h3>
            <p
              className={cn(
                'text-footer-muted',
                typography.footer.newsletterDescription,
                'mb-3 md:mb-4',
              )}
            >
              Be the first to read our Articles and News Letter
            </p>
            <div className={cn('flex gap-2')}>
              <Input
                type='email'
                placeholder='Email address'
                className={cn(
                  'rounded-full py-4 md:py-5 px-4 md:px-5 flex-1 border-footer-border bg-footer-input-bg text-footer-input-text placeholder:text-footer-input-placeholder',
                )}
              />
              <Button
                variant='secondary'
                className={cn('rounded-full py-4 md:py-5 px-6 md:px-8')}
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom row: Copyright (left) + Social links (right) */}
      <div
        className={cn(
          'border-t border-footer-border pt-6 md:pt-8 container-px',
        )}
      >
        <div
          className={cn(
            'max-w-screen-2xl mx-auto flex flex-col-reverse sm:flex-row items-center justify-between gap-4',
          )}
        >
          <p className={cn('text-footer-muted', typography.footer.copyright)}>
            © 2025. All rights reserved
          </p>

          <div className={cn('flex items-center gap-4')}>
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={link.label}
                className={cn(
                  'text-footer-social hover:text-footer-text transition-colors',
                )}
              >
                <link.icon className={cn('h-5 w-5')} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
