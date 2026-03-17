import type { Metadata } from 'next';
import {
  SelectField,
  TextInputField,
  type FormOption,
} from '@/app/components/forms/FormFields';
import { createPageMetadata } from '@/lib/seo';

const serviceOptions: ReadonlyArray<FormOption> = [
  { value: 'content-strategy', label: 'Content Strategy' },
  { value: 'social-media', label: 'Social Media Management' },
  { value: 'video-production', label: 'Video Production' },
  { value: 'paid-media', label: 'Paid Media' },
];

export const metadata: Metadata = createPageMetadata({
  title: "Let's Work Together",
  description:
    'Tell us about your brand and goals so we can craft the right content and growth strategy.',
  path: '/get-started',
});

export default function GetStartedPage() {
  return (
    <main className='container-px pb-20 pt-32 md:pt-36'>
      <section className='mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.2fr]'>
        <div className='space-y-6'>
          <h1 className='text-4xl font-bold md:text-6xl'>Let&apos;s work together!</h1>
          <p className='max-w-lg text-xl leading-relaxed text-muted-foreground'>
            We help our clients with the work beyond (& sometimes behind) the splashy ad campaigns
            and viral moments. We leverage content to help our clients consistently bring their
            unique perspective to the world, and educate, engage, and inspire like-minded people
            around it.
          </p>
        </div>

        <form className='space-y-5'>
          <div className='grid gap-5 sm:grid-cols-2'>
            <TextInputField id='firstName' name='firstName' label='First Name' />
            <TextInputField id='lastName' name='lastName' label='Last Name' />
          </div>

          <div className='grid gap-5 sm:grid-cols-2'>
            <TextInputField id='emailAddress' name='emailAddress' type='email' label='Email Address' />
            <SelectField
              id='serviceNeeded'
              name='serviceNeeded'
              label='Select the services you need'
              placeholder='Select a service'
              options={serviceOptions}
            />
          </div>

          <div className='grid gap-5 sm:grid-cols-2'>
            <TextInputField id='companyName' name='companyName' label='Company Name' />
            <TextInputField id='reference' name='reference' label='Reference/Inspiration of what you want' />
          </div>

          <div className='grid gap-5 sm:grid-cols-2'>
            <TextInputField id='budget' name='budget' label='Budget' />
            <TextInputField id='goals' name='goals' label='What do you hope to achieve' />
          </div>
        </form>
      </section>
    </main>
  );
}
