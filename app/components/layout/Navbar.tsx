'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

import { navLinks } from '@/lib/constants/nav-links';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useTheme } from '@/app/components/providers/ThemeProvider';
import { logos } from '@/lib/constants/assets';

export function Navbar() {
  const pathname = usePathname();
  const { theme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(globalThis.scrollY > 50);
    };

    globalThis.addEventListener('scroll', handleScroll);
    return () => {
      globalThis.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
    if (href === '/') {
      return pathname === '/';
    }

    return pathname === href || pathname.startsWith(`${href}/`);
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
          <Link href='/' className='inline-flex shrink-0'>
            <Image
              src={theme === 'dark' ? logos.dark : logos.light}
              alt='UpShoot Marketing'
              width={170}
              height={40}
              className='h-10 w-auto max-w-[170px] object-contain'
              priority
            />
          </Link>

          <div className='hidden items-center gap-8 lg:flex'>
            {navLinks.map((link) => {
              const className = cn(
                'cursor-pointer text-sm transition-colors',
                isActive(link.href)
                  ? 'text-nav-text-active font-semibold'
                  : 'text-nav-text-inactive font-normal hover:text-nav-text-active',
              );

              return (
                <Link key={link.label} href={link.href} className={className}>
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className='flex items-center gap-3'>
            <Button variant={'outline'} className='hidden rounded-2xl lg:inline-flex'>Contact Us</Button>
            <button
              type='button'
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls='mobile-nav-menu'
              onClick={() => setIsMobileMenuOpen((previousValue) => !previousValue)}
              className='relative inline-flex h-6 w-6 items-center justify-center text-nav-text-active transition-colors lg:hidden'
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
