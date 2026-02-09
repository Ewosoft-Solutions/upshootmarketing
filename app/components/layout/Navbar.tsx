'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { navLinks } from '@/lib/constants/nav-links';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { handleAnchorClick } from '@/lib/utils/scroll';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 z-50 w-full border-b transition-all duration-300',
        isScrolled
          ? 'bg-black/95 backdrop-blur-md border-white/10'
          : 'bg-background/80 backdrop-blur-sm border-border'
      )}
    >
      <div className='mx-auto flex h-16 max-w-7xl items-center justify-between px-6'>
        <Link href="/" className='text-xl font-bold'>
          UpShoot
        </Link>

        <div className='hidden md:flex items-center gap-8'>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleAnchorClick(e, link.href)}
              className='text-sm font-medium hover:text-primary transition-colors cursor-pointer'
            >
              {link.label}
            </a>
          ))}
        </div>

        <Button size='sm'>Get Started</Button>
      </div>
    </nav>
  );
}
