import type { Metadata } from 'next';
import Link from 'next/link';
import { ContactUsForm } from '@/app/components/forms/ContactUsForm';
import { AnimatedSection } from '@/app/components/ui/animated-section';
import { createPageMetadata } from '@/lib/seo';
import { typography } from '@/lib/typography';
import { cn } from '@/lib/utils';

export const metadata: Metadata = createPageMetadata({
  title: 'Contact UpShoot Marketing',
  description:
    'Get in touch with UpShoot Marketing to discuss your goals and get a tailored growth and content strategy.',
  path: '/contact-us',
});

export default function ContactUsPage() {
  const socialLinks: ReadonlyArray<{
    href: string;
    label: string;
    text: string;
  }> = [
    { href: 'https://x.com', label: 'X', text: 'X' },
    { href: 'https://www.tiktok.com', label: 'TikTok', text: 'T' },
    { href: 'https://www.instagram.com', label: 'Instagram', text: 'IG' },
    { href: 'https://www.linkedin.com', label: 'LinkedIn', text: 'in' },
  ];

  return (
    <main className={cn('container-px pb-20 pt-32 md:pt-36')}>
      <section className={cn('mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.2fr]')}>
        <AnimatedSection className={cn('space-y-6')} animation='slideRight' duration='slow'>
          <h1 className={cn(typography.section.title, 'font-bold')}>Get in Touch</h1>
          <p className={cn('2xl:max-w-md text-muted-foreground text-balance', typography.section.description)}>
            Send us a message or an email to upshootmarketing@gmail.com
          </p>
          <div className={cn('flex items-center gap-3 pt-2')}>
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={link.label}
                className={cn('inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-accent')}
              >
                <span className={cn(typography.page.socialIconLabel, 'font-semibold')}>{link.text}</span>
              </Link>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection animation='slideLeft' duration='slow' delay='short'>
          <ContactUsForm />
        </AnimatedSection>
      </section>
    </main>
  );
}
