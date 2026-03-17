import type { Metadata } from 'next';
import {
  defaultResponsiveFormBottomSpacing,
  FileUploadField,
  FormContainer,
  SelectField,
  TextInputField,
  TextareaField,
  type FormOption,
} from '@/app/components/forms/FormFields';
import { createPageMetadata } from '@/lib/seo';

const creativeFieldOptions: ReadonlyArray<FormOption> = [
  { value: 'animator', label: 'Animator' },
  { value: 'video-editor', label: 'Video Editor' },
  { value: 'graphic-designer', label: 'Graphic Designer' },
  { value: 'social-media-manager', label: 'Social Media Manager' },
];

const teamworkOptions: ReadonlyArray<FormOption> = [
  { value: 'yes', label: 'Yes' },
  { value: 'no', label: 'No' },
  { value: 'sometimes', label: 'Sometimes' },
];

export const metadata: Metadata = createPageMetadata({
  title: 'Join the Team',
  description:
    'Become part of UpShoot Marketing and help brands grow through creative and performance-driven campaigns.',
  path: '/join-team',
});

export default function JoinTeamPage() {
  return (
    <main className='container-px pb-20 pt-32 md:pt-36'>
      <section className='mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.2fr]'>
        <div className='space-y-6'>
          <h1 className='text-4xl font-bold md:text-6xl'>Be Part of our Team</h1>
          <p className='2xl:max-w-lg text-xl leading-relaxed text-muted-foreground text-balance'>
            We help our clients with the work beyond (& sometimes behind) the splashy ad campaigns
            and viral moments. We leverage content to help our clients consistently bring their
            unique perspective to the world, and educate, engage, and inspire like-minded people
            around it.
          </p>
        </div>

        <FormContainer bottomSpacing={defaultResponsiveFormBottomSpacing}>
          <div className='grid gap-5 sm:grid-cols-2'>
            <TextInputField id='firstName' name='firstName' label='First Name' />
            <TextInputField id='lastName' name='lastName' label='Last Name' />
          </div>

          <div className='grid gap-5 sm:grid-cols-2'>
            <TextInputField id='emailAddress' name='emailAddress' type='email' label='Email Address' />
            <SelectField
              id='creativeField'
              name='creativeField'
              label='Creative Field'
              placeholder='Select your field'
              options={creativeFieldOptions}
            />
          </div>

          <FileUploadField id='resumeUpload' name='resumeUpload' label='Upload your CV/Resume' />

          <div className='grid gap-5 sm:grid-cols-2'>
            <TextInputField id='portfolioLink' name='portfolioLink' label='Portfolio / Work Sample Link' />
            <TextInputField id='socialHandle' name='socialHandle' label='Provide any of your social handles' />
          </div>

          <TextareaField id='inspiration' name='inspiration' label='How do you get inspiration?' rows={4} />
          <TextareaField id='deadlines' name='deadlines' label='How do you manage tight deadlines?' rows={4} />
          <TextareaField id='perfectFit' name='perfectFit' label='What makes you a perfect fit?' rows={4} />

          <div className='grid gap-5 sm:grid-cols-2'>
            <TextInputField id='expectedIncome' name='expectedIncome' label='Expected Monthly Income' />
            <SelectField
              id='teamwork'
              name='teamwork'
              label='Are you able to work with a team'
              placeholder='Select an option'
              options={teamworkOptions}
            />
          </div>

          <TextareaField id='additionalNote' name='additionalNote' label='Any addition note?' rows={4} />
        </FormContainer>
      </section>
    </main>
  );
}
