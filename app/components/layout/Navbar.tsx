'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

import { navLinks } from '@/lib/constants/nav-links';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { handleAnchorClick } from '@/lib/utils/scroll';
import { useTheme } from '@/app/components/providers/ThemeProvider';
import { logos } from '@/lib/constants/assets';

export function Navbar() {
  const pathname = usePathname();
  const { theme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>(() => {
    if (globalThis.location !== undefined) {
      const hash = globalThis.location.hash || '';
      return hash || pathname;
    }
    return pathname;
  });

  const getActiveLink = useCallback(() => {
    const hash = globalThis.location?.hash || '';
    if (hash) return hash;
    return pathname;
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(globalThis.scrollY > 50);

      // Determine active section based on scroll position
      const sections = navLinks
        .filter((link) => link.href.startsWith('#'))
        .map((link) => link.href.slice(1));

      let currentSection = '';
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120) {
            currentSection = `#${sectionId}`;
          }
        }
      }

      // If at the top of the page (no section scrolled into view), mark Home as active
      if (!currentSection && globalThis.scrollY < 100) {
        setActiveSection(pathname);
      } else if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    const handleHashChange = () => {
      setActiveSection(getActiveLink());
    };

    globalThis.addEventListener('scroll', handleScroll);
    globalThis.addEventListener('hashchange', handleHashChange);
    return () => {
      globalThis.removeEventListener('scroll', handleScroll);
      globalThis.removeEventListener('hashchange', handleHashChange);
    };
  }, [pathname, getActiveLink]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    globalThis.addEventListener('keydown', onKeyDown);
    return () => {
      globalThis.removeEventListener('keydown', onKeyDown);
    };
  }, [isMobileMenuOpen]);

  const isActive = (href: string) => {
    if (href === '/') return activeSection === '/' || activeSection === '';
    return activeSection === href;
  };

  return (
    <nav
      className={cn(
        'fixed top-0 z-50 w-full border-b transition-all duration-300',
        isScrolled
          ? 'bg-nav-bg/75 backdrop-blur-md border-nav-border'
          : 'bg-nav-bg border-transparent',
      )}
    >
      <div className='container-px'>
        <div className='mx-auto flex h-20 max-w-7xl items-center justify-between'>
          <Link href='/' className='text-xl font-bold'>
            <Image
              src={theme === 'dark' ? logos.dark : logos.light}
              alt='UpShoot Marketing'
              width={0}
              height={0}
              className='h-10 w-auto'
            />
          </Link>

          <div className='hidden items-center gap-8 md:flex'>
            {navLinks.map((link) => {
              const className = cn(
                'cursor-pointer text-sm transition-colors',
                isActive(link.href)
                  ? 'text-nav-text-active font-semibold'
                  : 'text-nav-text-inactive font-normal hover:text-nav-text-active',
              );

              // Use <a> with smooth scroll handler for hash links and the home "/" link
              if (link.href.startsWith('#') || link.href === '/') {
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleAnchorClick(e, link.href)}
                    className={className}
                  >
                    {link.label}
                  </a>
                );
              }

              // Use Next.js Link for actual route navigation (e.g. /blog)
              return (
                <Link key={link.label} href={link.href} className={className}>
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className='flex items-center gap-3'>
            <Button variant={'outline'} className='hidden rounded-2xl md:inline-flex'>Contact Us</Button>
            <button
              type='button'
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls='mobile-nav-menu'
              onClick={() => setIsMobileMenuOpen((previousValue) => !previousValue)}
              className='relative inline-flex h-6 w-6 items-center justify-center text-nav-text-active transition-colors md:hidden'
            >
              <span className='sr-only'>Toggle menu</span>
              <motion.span
                className='absolute h-0.5 w-5 bg-current'
                animate={isMobileMenuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className='absolute h-0.5 w-5 bg-current'
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className='absolute h-0.5 w-5 bg-current'
                animate={isMobileMenuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }}
                transition={{ duration: 0.2 }}
              />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen ? (
            <motion.div
              id='mobile-nav-menu'
              className='pb-4 md:hidden'
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <ul className='flex flex-col gap-4 px-1'>
                {navLinks.map((link) => {
                  const className = cn(
                    'cursor-pointer text-sm transition-colors',
                    isActive(link.href)
                      ? 'text-nav-text-active font-semibold'
                      : 'text-nav-text-inactive font-normal hover:text-nav-text-active',
                  );

                  if (link.href.startsWith('#') || link.href === '/') {
                    return (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          onClick={(e) => {
                            handleAnchorClick(e, link.href);
                            setIsMobileMenuOpen(false);
                          }}
                          className={className}
                        >
                          {link.label}
                        </a>
                      </li>
                    );
                  }

                  return (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className={className}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <Button variant={'outline'} className='mt-4 w-full rounded-2xl'>Contact Us</Button>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </nav>
  );
}
