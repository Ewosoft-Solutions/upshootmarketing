import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
}

export function SectionWrapper({
  id,
  children,
  className,
}: Readonly<SectionWrapperProps>) {
  return (
    <section
      id={id}
      className={cn('py-24 container-px scroll-mt-20', className)}
    >
      <div className={cn('mx-auto max-w-screen-2xl')}>{children}</div>
    </section>
  );
}
