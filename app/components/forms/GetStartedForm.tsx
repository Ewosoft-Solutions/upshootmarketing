'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import {
  defaultResponsiveFormBottomSpacing,
  FormContainer,
  SelectField,
  TextInputField,
  TextareaField,
  type FormOption,
} from '@/app/components/forms/FormFields';
import { Button } from '@/components/ui/button';
import { getStartedFormSchema, type GetStartedFormValues } from '@/lib/validation/form-schemas';

const serviceOptions: ReadonlyArray<FormOption> = [
  { value: 'content-strategy', label: 'Content Strategy' },
  { value: 'social-media', label: 'Social Media Management' },
  { value: 'video-production', label: 'Video Production' },
  { value: 'paid-media', label: 'Paid Media' },
];

export function GetStartedForm() {
  const [submitState, setSubmitState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<GetStartedFormValues>({
    resolver: zodResolver(getStartedFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      emailAddress: '',
      serviceNeeded: '',
      companyName: '',
      budget: '',
      reference: '',
      goals: '',
    },
  });

  async function onSubmit(values: GetStartedFormValues) {
    try {
      setSubmitState('submitting');
      const response = await fetch('/api/forms/get-started', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
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
          {...register('firstName')}
        />
        <TextInputField
          id='lastName'
          label='Last Name'
          placeholder='Enter your last name'
          required
          error={errors.lastName?.message}
          aria-invalid={Boolean(errors.lastName)}
          {...register('lastName')}
        />
      </div>

      <div className='grid gap-5 sm:grid-cols-2'>
        <TextInputField
          id='emailAddress'
          type='email'
          label='Email Address'
          placeholder='you@company.com'
          required
          error={errors.emailAddress?.message}
          aria-invalid={Boolean(errors.emailAddress)}
          {...register('emailAddress')}
        />
        <Controller
          control={control}
          name='serviceNeeded'
          render={({ field }) => (
            <SelectField
              id='serviceNeeded'
              name={field.name}
              label='Select the services you need'
              placeholder='Select a service'
              options={serviceOptions}
              value={field.value}
              onValueChange={field.onChange}
              error={errors.serviceNeeded?.message}
              isRequired
            />
          )}
        />
      </div>

      <div className='grid gap-5 sm:grid-cols-2'>
        <TextInputField
          id='companyName'
          label='Company Name'
          placeholder='Enter your company name'
          {...register('companyName')}
        />
        <TextInputField
          id='budget'
          label='Budget'
          placeholder='e.g. $500 - $5,000'
          {...register('budget')}
        />
      </div>

      <TextareaField
        id='reference'
        label='Reference / Inspiration of what you want'
        rows={4}
        placeholder='Share links, references, or context'
        {...register('reference')}
      />

      <TextareaField
        id='goals'
        label='What do you hope to achieve'
        rows={4}
        placeholder='Describe the outcomes you want from this project'
        required
        error={errors.goals?.message}
        aria-invalid={Boolean(errors.goals)}
        {...register('goals')}
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
