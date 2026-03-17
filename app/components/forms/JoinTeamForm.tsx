'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import {
  defaultResponsiveFormBottomSpacing,
  FileUploadField,
  FormContainer,
  SelectField,
  TextInputField,
  TextareaField,
  type FormOption,
} from '@/app/components/forms/FormFields';
import { Button } from '@/components/ui/button';
import { joinTeamFormSchema, type JoinTeamFormValues } from '@/lib/validation/form-schemas';

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

export function JoinTeamForm() {
  const [submitState, setSubmitState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const {
    register,
    control,
    setValue,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<JoinTeamFormValues>({
    resolver: zodResolver(joinTeamFormSchema),
    mode: 'onChange',
    reValidateMode: 'onChange',
    criteriaMode: 'firstError',
    defaultValues: {
      firstName: '',
      lastName: '',
      emailAddress: '',
      creativeField: '',
      portfolioLink: '',
      socialHandle: '',
      inspiration: '',
      deadlines: '',
      perfectFit: '',
      expectedIncome: '',
      teamwork: '',
      additionalNote: '',
    } as Omit<JoinTeamFormValues, 'resumeUpload'>,
  });

  async function onSubmit(values: JoinTeamFormValues) {
    try {
      setSubmitState('submitting');

      const payload = {
        ...values,
        resumeUpload: values.resumeUpload.item(0)?.name ?? null,
      };

      const response = await fetch('/api/forms/join-team', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Failed to submit');
      }

      setSubmitState('success');
      reset();
    } catch {
      setSubmitState('error');
    }
  }

  return (
    <FormContainer bottomSpacing={defaultResponsiveFormBottomSpacing} onSubmit={handleSubmit(onSubmit)}>
      <div className='grid gap-5 sm:grid-cols-2'>
        <TextInputField
          id='firstName'
          label='First Name'
          placeholder='Enter your first name'
          required
          error={errors.firstName?.message}
          aria-invalid={Boolean(errors.firstName)}
          maxLength={50}
          {...register('firstName')}
        />
        <TextInputField
          id='lastName'
          label='Last Name'
          placeholder='Enter your last name'
          required
          error={errors.lastName?.message}
          aria-invalid={Boolean(errors.lastName)}
          maxLength={50}
          {...register('lastName')}
        />
      </div>

      <div className='grid gap-5 sm:grid-cols-2'>
        <TextInputField
          id='emailAddress'
          type='email'
          label='Email Address'
          placeholder='you@domain.com'
          required
          error={errors.emailAddress?.message}
          aria-invalid={Boolean(errors.emailAddress)}
          maxLength={254}
          {...register('emailAddress')}
        />
        <Controller
          control={control}
          name='creativeField'
          render={({ field }) => (
            <SelectField
              id='creativeField'
              name={field.name}
              label='Creative Field'
              placeholder='Select your field'
              options={creativeFieldOptions}
              value={field.value}
              onValueChange={field.onChange}
              error={errors.creativeField?.message}
              isRequired
            />
          )}
        />
      </div>

      <FileUploadField
        id='resumeUpload'
        name='resumeUpload'
        label='Upload your CV/Resume'
        error={errors.resumeUpload?.message}
        isRequired
        inputProps={{
          accept: '.pdf,.doc,.docx',
          required: true,
          onChange: (event) => {
            const target = event.target as HTMLInputElement;
            setValue('resumeUpload', target.files ?? new DataTransfer().files, {
              shouldValidate: true,
              shouldDirty: true,
              shouldTouch: true,
            });
          },
        }}
      />

      <div className='grid gap-5 sm:grid-cols-2'>
        <TextInputField
          id='portfolioLink'
          type='url'
          label='Portfolio / Work Sample Link'
          placeholder='https://...'
          required
          error={errors.portfolioLink?.message}
          aria-invalid={Boolean(errors.portfolioLink)}
          maxLength={300}
          {...register('portfolioLink')}
        />
        <TextInputField
          id='socialHandle'
          label='Provide any of your social handles'
          placeholder='https://...'
          maxLength={300}
          {...register('socialHandle')}
        />
      </div>

      <TextareaField
        id='inspiration'
        label='How do you get inspiration?'
        rows={4}
        placeholder='Share your process and influences'
        required
        error={errors.inspiration?.message}
        aria-invalid={Boolean(errors.inspiration)}
        maxLength={1200}
        {...register('inspiration')}
      />
      <TextareaField
        id='deadlines'
        label='How do you manage tight deadlines?'
        rows={4}
        placeholder='Describe your workflow under pressure'
        required
        error={errors.deadlines?.message}
        aria-invalid={Boolean(errors.deadlines)}
        maxLength={1200}
        {...register('deadlines')}
      />
      <TextareaField
        id='perfectFit'
        label='What makes you a perfect fit?'
        rows={4}
        placeholder='Tell us what makes you stand out'
        required
        error={errors.perfectFit?.message}
        aria-invalid={Boolean(errors.perfectFit)}
        maxLength={1200}
        {...register('perfectFit')}
      />

      <div className='grid gap-5 sm:grid-cols-2'>
        <TextInputField
          id='expectedIncome'
          label='Expected Monthly Income'
          placeholder='Enter your expected monthly income'
          required
          error={errors.expectedIncome?.message}
          aria-invalid={Boolean(errors.expectedIncome)}
          maxLength={40}
          {...register('expectedIncome')}
        />
        <Controller
          control={control}
          name='teamwork'
          render={({ field }) => (
            <SelectField
              id='teamwork'
              name={field.name}
              label='Are you able to work with a team'
              placeholder='Select an option'
              options={teamworkOptions}
              value={field.value}
              onValueChange={field.onChange}
              error={errors.teamwork?.message}
              isRequired
            />
          )}
        />
      </div>

      <TextareaField
        id='additionalNote'
        label='Any addition note?'
        rows={4}
        placeholder='Anything else you want us to know'
        maxLength={1200}
        {...register('additionalNote')}
      />

      <div className='flex items-center gap-3'>
        <Button type='submit' disabled={submitState === 'submitting'} className='rounded-xl px-6'>
          {submitState === 'submitting' ? 'Submitting...' : 'Submit'}
        </Button>
        {submitState === 'success' ? <p className='text-sm text-green-600'>Submitted successfully.</p> : null}
        {submitState === 'error' ? <p className='text-sm text-destructive'>Could not submit. Please try again.</p> : null}
      </div>
    </FormContainer>
  );
}
