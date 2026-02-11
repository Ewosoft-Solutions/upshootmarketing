'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AnimatedSection } from '@/app/components/ui/animated-section';
import { handleAnchorClick } from '@/lib/utils/scroll';
import Link from 'next/link';
import Image from 'next/image';
import { logos } from '@/lib/constants/assets';

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
  // Footer always uses the dark logo since the bg is always dark
  const footerLogo = logos.dark;

  return (
    <footer
      id='contact'
      className='bg-footer-bg text-footer-text flex flex-col gap-8 md:gap-12 py-10 md:py-16'
    >
      {/* Top row: CTA (left) + Links grid (right) */}
      <div className='container-px'>
        <div className='max-w-7xl mx-auto grid md:grid-cols-[3fr_2fr] gap-8 lg:gap-16'>
          {/* CTA Section */}
          <AnimatedSection animation='slideUp'>
            <h2 className='text-2xl md:text-4xl font-medium mb-2 md:mb-4'>
              Ready to get started?
            </h2>
            <p className='text-footer-muted text-base md:text-lg mb-5 md:mb-8'>
              Are you ready to take your Brand to the next level?
              <br />
              Contact us and lets talk about your brand
            </p>
            <motion.div
              animate={{
                scale: [1, 1.04, 1],
                boxShadow: [
                  '0 0 0 0 rgba(255, 255, 255, 0)',
                  '0 0 20px 4px rgba(255, 255, 255, 0.15)',
                  '0 0 0 0 rgba(255, 255, 255, 0)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className='rounded-4xl inline-block'
            >
              <Button
                size='lg'
                className='group relative overflow-hidden text-base px-8 py-6 rounded-4xl flex items-center justify-center gap-2 bg-footer-text text-footer-bg hover:bg-footer-text/90'
              >
                {/* Shimmer overlay — inverted: dark sweep on light button in light mode, light sweep in dark mode */}
                <span className='pointer-events-none absolute inset-0 animate-shimmer'>
                  <span className='absolute inset-0 -skew-x-12 bg-linear-to-r from-transparent via-black/15 dark:via-white/20 to-transparent' />
                </span>
                Contact us
                <motion.span
                  className='inline-flex'
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
                </motion.span>
              </Button>
            </motion.div>
          </AnimatedSection>

          {/* Links + Newsletter grid */}
          <div className='grid grid-cols-2 gap-5 md:gap-8'>
            {/* Company Links */}
            <div>
              <h3 className='font-semibold mb-2 md:mb-4 text-sm tracking-wide'>
                COMPANY
              </h3>
              <ul className='space-y-1.5 md:space-y-2'>
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleAnchorClick(e, link.href)}
                      className='text-footer-muted hover:text-footer-text transition-colors cursor-pointer text-sm'
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources - Column 1 */}
            <div>
              <h3 className='font-semibold mb-2 md:mb-4 text-sm tracking-wide'>
                RESOURCES
              </h3>
              <ul className='space-y-1.5 md:space-y-2'>
                {resourceLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleAnchorClick(e, link.href)}
                      className='text-footer-muted hover:text-footer-text transition-colors cursor-pointer text-sm'
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Middle row: Logo (left) + Be The First To Know (right) */}
      <div className='container-px'>
        <div className='max-w-7xl mx-auto grid md:grid-cols-5 gap-5 md:gap-8 items-start'>
          <Link href='/' className='text-xl font-bold md:col-span-3'>
            <Image
              src={footerLogo}
              alt='UpShoot Marketing'
              width={0}
              height={0}
              className='w-auto h-10 md:h-16 lg:h-24'
            />
          </Link>

          <div className='md:col-span-2'>
            <h3 className='font-semibold mb-2 md:mb-4 text-sm tracking-wide'>
              BE THE FIRST TO KNOW
            </h3>
            <p className='text-footer-muted text-sm mb-3 md:mb-4'>
              Be the first to read our Articles and News Letter
            </p>
            <div className='flex gap-2'>
              <Input
                type='email'
                placeholder='Email address'
                className='rounded-2xl px-4 md:px-6 flex-1 border-footer-border bg-footer-input-bg text-footer-input-text placeholder:text-footer-input-placeholder'
              />
              <Button variant='secondary' className='rounded-2xl'>
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom row: Copyright (left) + Social links (right) */}
      <div className='border-t border-footer-border pt-6 md:pt-8 container-px'>
        <div className='max-w-7xl mx-auto flex flex-col-reverse sm:flex-row items-center justify-between gap-4'>
          <p className='text-footer-muted text-sm'>
            © 2025. All rights reserved
          </p>

          <div className='flex items-center gap-4'>
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={link.label}
                className='text-footer-social hover:text-footer-text transition-colors'
              >
                <link.icon className='h-5 w-5' />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
