import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { type ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ArrowLinkButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export function ArrowLinkButton({
  href,
  children,
  className,
}: Readonly<ArrowLinkButtonProps>) {
  return (
    <Button variant='ghost' className={cn('group', className)} asChild>
      <Link href={href}>
        {children}
        <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
      </Link>
    </Button>
  );
}
