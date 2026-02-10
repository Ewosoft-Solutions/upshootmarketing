'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { navLinks } from '@/lib/constants/nav-links';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { handleAnchorClick } from '@/lib/utils/scroll';
import { ThemeToggle } from '@/app/components/ui/ThemeToggle';
import { useTheme } from '@/app/components/providers/ThemeProvider';

const LOGO_LIGHT = '/assets/logos/upshoot/upshoot.logo.lightmode.text.svg';
const LOGO_DARK = '/assets/logos/upshoot/upshoot.logo.darkmode.text.svg';

export function Navbar() {
  const pathname = usePathname();
  const { theme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
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
      <div className='mx-auto flex h-20 max-w-7xl items-center justify-between px-6'>
        <Link href='/' className='text-xl font-bold'>
          <Image
            src={theme === 'dark' ? LOGO_DARK : LOGO_LIGHT}
            alt='UpShoot Marketing'
            width={0}
            height={0}
            className='w-auto h-10'
          />
        </Link>

        <div className='hidden md:flex items-center gap-8'>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleAnchorClick(e, link.href)}
              className={cn(
                'text-sm transition-colors cursor-pointer',
                isActive(link.href)
                  ? 'text-nav-text-active font-semibold'
                  : 'text-nav-text-inactive font-normal hover:text-nav-text-active',
              )}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className='flex items-center gap-3'>
          <ThemeToggle />
          <Button size='sm'>Get Started</Button>
        </div>
      </div>
    </nav>
  );
}
