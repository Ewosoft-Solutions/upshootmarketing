'use client';

import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/app/components/providers/ThemeProvider';
import { cn } from '@/lib/utils';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type='button'
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className={cn(
        'relative inline-flex h-8 w-8 items-center justify-center rounded-md',
        'text-nav-text-inactive hover:text-nav-text-active',
        'transition-colors duration-200 cursor-pointer',
      )}
    >
      <Sun
        className={cn(
          'h-[18px] w-[18px] transition-all duration-300',
          theme === 'dark'
            ? 'rotate-0 scale-100 opacity-100'
            : '-rotate-90 scale-0 opacity-0',
        )}
      />
      <Moon
        className={cn(
          'absolute h-[18px] w-[18px] transition-all duration-300',
          theme === 'dark'
            ? 'rotate-90 scale-0 opacity-0'
            : 'rotate-0 scale-100 opacity-100',
        )}
      />
    </button>
  );
}
