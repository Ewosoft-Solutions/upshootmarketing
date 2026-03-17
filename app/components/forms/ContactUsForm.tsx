'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  defaultResponsiveFormBottomSpacing,
  FormContainer,
  TextInputField,
  TextareaField,
} from '@/app/components/forms/FormFields';
import { Button } from '@/components/ui/button';
import { typography } from '@/lib/typography';
import { contactFormSchema, type ContactFormValues } from '@/lib/validation/form-schemas';

export function ContactUsForm() {
  const [submitState, setSubmitState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onChange',
    reValidateMode: 'onChange',
    criteriaMode: 'firstError',
    defaultValues: {
      fullName: '',
      emailAddress: '',
      message: '',
    },
  });

  async function onSubmit(values: ContactFormValues) {
    try {
      setSubmitState('submitting');
      const response = await fetch('/api/forms/contact', {
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
    <FormContainer
      className='space-y-6 rounded-2xl'
      bottomSpacing={defaultResponsiveFormBottomSpacing}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='grid gap-5 sm:grid-cols-2'>
        <TextInputField
          id='fullName'
          label='Full Name'
          placeholder='Enter your full name'
          required
          error={errors.fullName?.message}
          aria-invalid={Boolean(errors.fullName)}
          maxLength={80}
          {...register('fullName')}
        />
        <TextInputField
          id='emailAddress'
          type='email'
          label='Email Address'
          placeholder='you@company.com'
          required
          error={errors.emailAddress?.message}
          aria-invalid={Boolean(errors.emailAddress)}
          maxLength={254}
          {...register('emailAddress')}
        />
      </div>

      <TextareaField
        id='message'
        label='Message'
        rows={5}
        placeholder='Tell us about your needs and goals'
        required
        error={errors.message?.message}
        aria-invalid={Boolean(errors.message)}
        maxLength={1200}
        {...register('message')}
      />

      <div className='flex items-center gap-3'>
        <Button type='submit' disabled={submitState === 'submitting'} className='rounded-xl px-6'>
          {submitState === 'submitting' ? 'Submitting...' : 'Submit'}
        </Button>
        {submitState === 'success' ? (
          <p className={`${typography.form.field.submitFeedback} text-green-600`}>Submitted successfully.</p>
        ) : null}
        {submitState === 'error' ? (
          <p className={`${typography.form.field.submitFeedback} text-destructive`}>
            Could not submit. Please try again.
          </p>
        ) : null}
      </div>
    </FormContainer>
  );
}
