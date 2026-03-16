import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { type ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ArrowLinkButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
  direction?: 'forward' | 'back';
}

export function ArrowLinkButton({
  href,
  children,
  className,
  direction = 'forward',
}: Readonly<ArrowLinkButtonProps>) {
  const isBackDirection = direction === 'back';
  let trailingIcon: ReactNode = <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />;

  if (isBackDirection) {
    trailingIcon = null;
  }

  return (
    <Button variant='ghost' className={cn('group', className)} asChild>
      <Link href={href}>
        {isBackDirection ? (
          <ArrowLeft className='mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1' />
        ) : null}
        {children}
        {trailingIcon}
      </Link>
    </Button>
  );
}
