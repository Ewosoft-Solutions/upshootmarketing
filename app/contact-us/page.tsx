import { CTASection } from '@/app/components/sections/CTASection';

export default function ContactUsPage() {
  return (
    <main className='container-px pb-20 pt-32 md:pt-36'>
      <section className='mx-auto max-w-4xl space-y-4'>
        <h1 className='text-4xl font-bold md:text-6xl'>Get In Touch</h1>
        <p className='text-muted-foreground'>
          Tell us about your brand and goals. We will propose the best content and growth path.
        </p>
      </section>
      <div className='mt-12'>
        <CTASection />
      </div>
    </main>
  );
}
