'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import {
  defaultResponsiveFormBottomSpacing,
  FormContainer,
  FormSubmitButton,
  SelectField,
  TextInputField,
  TextareaField,
  type FormOption,
} from '@/app/components/forms/FormFields';
import { typography } from '@/lib/typography';
import { cn } from '@/lib/utils';
import { getStartedFormSchema, type GetStartedFormValues } from '@/lib/validation/form-schemas';

const serviceOptions: ReadonlyArray<FormOption> = [
  { value: 'content-strategy', label: 'Content Strategy' },
  { value: 'social-media', label: 'Social Media Management' },
  { value: 'video-production', label: 'Video Production' },
  { value: 'paid-media', label: 'Paid Media' },
];

type ServiceValue = (typeof serviceOptions)[number]['value'];
type PackageSlug = 'foundation' | 'growth' | 'authority';

interface PackagePrefill {
  displayName: string;
  budget: string;
  serviceNeeded: ServiceValue;
  goals: string;
  accentClassName: string;
}

const packagePrefillMap: Readonly<Record<PackageSlug, PackagePrefill>> = {
  foundation: {
    displayName: 'Foundation',
    budget: '$400',
    serviceNeeded: 'content-strategy',
    goals:
      'I am interested in the Foundation package and want to build brand visibility and consistency.',
    accentClassName: 'border-brand-green/40 bg-brand-green/25',
  },
  growth: {
    displayName: 'Growth',
    budget: '$800',
    serviceNeeded: 'social-media',
    goals: 'I am interested in the Growth package and want to attract qualified leads consistently.',
    accentClassName: 'border-brand-blue/40 bg-brand-blue/25',
  },
  authority: {
    displayName: 'Authority',
    budget: '$1500',
    serviceNeeded: 'paid-media',
    goals:
      'I am interested in the Authority package and want to scale performance with advanced campaigns.',
    accentClassName: 'border-brand-yellow/40 bg-brand-yellow/25',
  },
};

const packageOptions: ReadonlyArray<FormOption> = [
  { value: 'foundation', label: 'Foundation' },
  { value: 'growth', label: 'Growth' },
  { value: 'authority', label: 'Authority' },
];

function isPackageSlug(value: string): value is PackageSlug {
  return value in packagePrefillMap;
}

function isServiceValue(value: string): value is ServiceValue {
  return serviceOptions.some((option) => option.value === value);
}

export function GetStartedForm() {
  const searchParams = useSearchParams();
  const [submitState, setSubmitState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [selectedPackage, setSelectedPackage] = useState<PackageSlug | null>(null);

  const {
    register,
    control,
    handleSubmit,
    reset,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<GetStartedFormValues>({
    resolver: zodResolver(getStartedFormSchema),
    mode: 'onChange',
    reValidateMode: 'onChange',
    criteriaMode: 'firstError',
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

  useEffect(() => {
    const packageValue = searchParams.get('package');
    const serviceValue = searchParams.get('service');
    const normalizedPackageValue = packageValue?.trim().toLowerCase() ?? '';

    if (!isPackageSlug(normalizedPackageValue)) {
      setSelectedPackage(null);
      return;
    }

    const packageConfig = packagePrefillMap[normalizedPackageValue];
    setSelectedPackage(normalizedPackageValue);

    const normalizedServiceValue = serviceValue?.trim() ?? '';
    const nextServiceNeeded = isServiceValue(normalizedServiceValue)
      ? normalizedServiceValue
      : packageConfig.serviceNeeded;
    const nextBudget = packageConfig.budget;

    if (getValues('serviceNeeded').trim().length === 0) {
      setValue('serviceNeeded', nextServiceNeeded, { shouldDirty: false, shouldValidate: true });
    }

    if (getValues('budget')?.trim().length === 0) {
      setValue('budget', nextBudget, { shouldDirty: false, shouldValidate: true });
    }

    if (getValues('goals').trim().length === 0) {
      setValue('goals', packageConfig.goals, { shouldDirty: false, shouldValidate: true });
    }
  }, [getValues, searchParams, setValue]);

  function handlePackageSelectionChange(nextPackageValue: string) {
    if (!isPackageSlug(nextPackageValue)) {
      return;
    }

    const previousPackage = selectedPackage ? packagePrefillMap[selectedPackage] : null;
    const nextPackage = packagePrefillMap[nextPackageValue];
    const currentGoals = getValues('goals').trim();
    const shouldReplaceGoals = currentGoals.length === 0 || currentGoals === previousPackage?.goals;

    setSelectedPackage(nextPackageValue);
    setValue('serviceNeeded', nextPackage.serviceNeeded, { shouldDirty: true, shouldValidate: true });
    setValue('budget', nextPackage.budget, { shouldDirty: true, shouldValidate: true });

    if (shouldReplaceGoals) {
      setValue('goals', nextPackage.goals, { shouldDirty: true, shouldValidate: true });
    }
  }

  async function onSubmit(values: GetStartedFormValues) {
    try {
      setSubmitState('submitting');
      const submissionPayload = {
        ...values,
        selectedPackage: selectedPackage ?? undefined,
        sourcePage: selectedPackage ? 'pricing' : undefined,
        cta: selectedPackage ? 'request-package' : undefined,
      };

      const response = await fetch('/api/forms/get-started', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submissionPayload),
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

  const selectedPackageConfig = selectedPackage ? packagePrefillMap[selectedPackage] : null;
  const submitButtonLabel = selectedPackageConfig
    ? `Request ${selectedPackageConfig.displayName} Package`
    : 'Submit';

  return (
    <FormContainer bottomSpacing={defaultResponsiveFormBottomSpacing} onSubmit={handleSubmit(onSubmit)}>
      {selectedPackageConfig ? (
        <div className={cn('mb-5 rounded-xl border p-4', selectedPackageConfig.accentClassName)}>
          <p className={cn(typography.form.field.submitFeedback, 'text-foreground')}>
            Selected package: <strong>{selectedPackageConfig.displayName}</strong> (starting at{' '}
            {selectedPackageConfig.budget}). Switch packages below to compare options.
          </p>
        </div>
      ) : null}
      <div className={cn('grid gap-5 sm:grid-cols-2')}>
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

      <div className={cn('grid gap-5 sm:grid-cols-2')}>
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
        {selectedPackageConfig ? (
          <>
            <SelectField
              id='selectedPackage'
              name='selectedPackage'
              label='Select your package'
              placeholder='Select a package'
              options={packageOptions}
              value={selectedPackage ?? ''}
              onValueChange={handlePackageSelectionChange}
              isRequired
            />
            <input type='hidden' {...register('serviceNeeded')} />
          </>
        ) : (
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
        )}
      </div>

      <div className={cn('grid gap-5 sm:grid-cols-2')}>
        <TextInputField
          id='companyName'
          label='Company Name'
          placeholder='Enter your company name'
          maxLength={100}
          {...register('companyName')}
        />
        {selectedPackageConfig ? (
          <>
            <TextInputField
              id='budgetDisplay'
              label='Budget (fixed by package)'
              value={`Starting from ${selectedPackageConfig.budget}`}
              required
              disabled
              readOnly
              className={cn('cursor-not-allowed')}
            />
            <input type='hidden' {...register('budget')} />
          </>
        ) : (
          <TextInputField
            id='budget'
            label='Budget'
            placeholder='e.g. $500 - $5,000'
            maxLength={40}
            {...register('budget')}
          />
        )}
      </div>

      <TextareaField
        id='reference'
        label='Reference / Inspiration of what you want'
        rows={4}
        placeholder='Share links, references, or context'
        maxLength={600}
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
        maxLength={1200}
        {...register('goals')}
      />

      <div className={cn('flex items-center gap-3')}>
        <FormSubmitButton disabled={submitState === 'submitting'}>
          {submitState === 'submitting' ? 'Submitting...' : submitButtonLabel}
        </FormSubmitButton>
        {submitState === 'success' ? (
          <p className={cn(typography.form.field.submitFeedback, 'text-green-600')}>Submitted successfully.</p>
        ) : null}
        {submitState === 'error' ? (
          <p className={cn(typography.form.field.submitFeedback, 'text-destructive')}>
            Could not submit. Please try again.
          </p>
        ) : null}
      </div>
    </FormContainer>
  );
}
