import type { Metadata } from 'next';
import Link from 'next/link';
import {
  defaultResponsiveFormBottomSpacing,
  FormContainer,
  TextInputField,
  TextareaField,
} from '@/app/components/forms/FormFields';
import { createPageMetadata } from '@/lib/seo';

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
    <main className='container-px pb-20 pt-32 md:pt-36'>
      <section className='mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.2fr]'>
        <div className='space-y-6'>
          <h1 className='text-4xl font-bold md:text-6xl'>Get in Touch</h1>
          <p className='max-w-md text-xl leading-relaxed text-muted-foreground'>
            Send us a message or an email to upshootmarketing@gmail.com
          </p>
          <div className='flex items-center gap-3 pt-2'>
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={link.label}
                className='inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-accent'
              >
                <span className='text-base font-semibold leading-none'>{link.text}</span>
              </Link>
            ))}
          </div>
        </div>

        <FormContainer
          className='space-y-6 rounded-2xl'
          bottomSpacing={defaultResponsiveFormBottomSpacing}
        >
          <div className='grid gap-5 sm:grid-cols-2'>
            <TextInputField id='fullName' name='fullName' label='Full Name' />
            <TextInputField id='emailAddress' name='emailAddress' type='email' label='Email Address' />
          </div>
          <TextareaField id='message' name='message' label='Message' rows={5} />
        </FormContainer>
      </section>
    </main>
  );
}
