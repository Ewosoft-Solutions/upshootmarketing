'use client';

import type { ComponentProps, ReactNode } from 'react';
import { FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { typography } from '@/lib/typography';
import { cn } from '@/lib/utils';

export type FormOption = Readonly<{
  value: string;
  label: string;
}>;

const fieldTypography = {
  label: typography.form.field.label,
  control: typography.form.field.control,
  textarea: typography.form.field.textarea,
  selectItem: typography.form.field.selectItem,
  uploadContainer: typography.form.field.uploadContainer,
  uploadHint: typography.form.field.uploadHint,
  uploadBrowse: typography.form.field.uploadBrowse,
} as const;

const formSubmitButtonClassName = 'rounded-full px-6 py-4 md:px-8 md:py-5';

const fieldSpacingVariants = {
  tight: 'mb-1',
  comfortable: 'mb-2',
} as const;

type FieldSpacing = keyof typeof fieldSpacingVariants;

const formBottomSpacingByBreakpoint = {
  base: {
    none: 'mb-0',
    sm: 'mb-12',
    md: 'mb-20',
    lg: 'mb-28',
    xl: 'mb-40',
  },
  sm: {
    none: 'sm:mb-0',
    sm: 'sm:mb-12',
    md: 'sm:mb-20',
    lg: 'sm:mb-28',
    xl: 'sm:mb-40',
  },
  md: {
    none: 'md:mb-0',
    sm: 'md:mb-12',
    md: 'md:mb-20',
    lg: 'md:mb-28',
    xl: 'md:mb-40',
  },
  lg: {
    none: 'lg:mb-0',
    sm: 'lg:mb-12',
    md: 'lg:mb-20',
    lg: 'lg:mb-28',
    xl: 'lg:mb-40',
  },
  xl: {
    none: 'xl:mb-0',
    sm: 'xl:mb-12',
    md: 'xl:mb-20',
    lg: 'xl:mb-28',
    xl: 'xl:mb-40',
  },
  '2xl': {
    none: '2xl:mb-0',
    sm: '2xl:mb-12',
    md: '2xl:mb-20',
    lg: '2xl:mb-28',
    xl: '2xl:mb-40',
  },
} as const;

type FormBottomSpacing = keyof typeof formBottomSpacingByBreakpoint.base;

type ResponsiveBottomSpacing = Readonly<{
  base?: FormBottomSpacing;
  sm?: FormBottomSpacing;
  md?: FormBottomSpacing;
  lg?: FormBottomSpacing;
  xl?: FormBottomSpacing;
  '2xl'?: FormBottomSpacing;
}>;

type FormContainerProps = ComponentProps<'form'> & Readonly<{
  bottomSpacing?: FormBottomSpacing | ResponsiveBottomSpacing;
}>;

const formBottomSpacingBreakpoints: ReadonlyArray<keyof ResponsiveBottomSpacing> = [
  'base',
  'sm',
  'md',
  'lg',
  'xl',
  '2xl',
];

export const defaultResponsiveFormBottomSpacing = {
  base: 'sm',
  md: 'md',
  lg: 'lg',
  '2xl': 'xl',
} as const satisfies ResponsiveBottomSpacing;

function resolveBottomSpacingClasses(bottomSpacing: FormBottomSpacing | ResponsiveBottomSpacing): Array<string> {
  if (typeof bottomSpacing === 'string') {
    return [formBottomSpacingByBreakpoint.base[bottomSpacing]];
  }

  const classes = formBottomSpacingBreakpoints.flatMap((breakpoint) => {
      const spacing = bottomSpacing[breakpoint];

      if (!spacing) {
        return [];
      }

      return [formBottomSpacingByBreakpoint[breakpoint][spacing]];
    });

  return classes.length > 0 ? classes : [formBottomSpacingByBreakpoint.base.lg];
}

export function FormContainer({
  bottomSpacing = 'lg',
  className,
  ...formProps
}: FormContainerProps) {
  const bottomSpacingClasses = resolveBottomSpacingClasses(bottomSpacing);

  return (
    <form
      className={cn('space-y-5', bottomSpacingClasses, className)}
      {...formProps}
    />
  );
}

type FormFieldProps = Readonly<{
  id: string;
  label: string;
  className?: string;
  labelClassName?: string;
  spacing?: FieldSpacing;
  error?: string;
  isRequired?: boolean;
  showOptionalHint?: boolean;
  children: ReactNode;
}>;

export function FormField({
  id,
  label,
  className,
  labelClassName,
  spacing = 'tight',
  error,
  isRequired = false,
  showOptionalHint = true,
  children,
}: FormFieldProps) {
  const spacingVariant = fieldSpacingVariants[spacing];

  return (
    <div className={cn('flex flex-col', className)}>
      <label htmlFor={id} className={cn('font-medium', fieldTypography.label, spacingVariant, labelClassName)}>
        <span>{label}</span>
        {isRequired ? <span className={cn('ml-1 text-destructive')}>*</span> : null}
        {!isRequired && showOptionalHint ? (
          <span className={cn('ml-2 font-normal text-muted-foreground', typography.form.field.optionalHint)}>
            (optional)
          </span>
        ) : null}
      </label>
      {children}
      {error ? <p className={cn('mt-1 text-destructive', typography.form.field.error)}>{error}</p> : null}
    </div>
  );
}

type TextInputFieldProps = Omit<ComponentProps<typeof Input>, 'id' | 'size'> & Readonly<{
  id: string;
  label: string;
  wrapperClassName?: string;
  spacing?: FieldSpacing;
  error?: string;
}>;

export function TextInputField({
  id,
  label,
  wrapperClassName,
  spacing = 'tight',
  error,
  required: requiredInput = false,
  className,
  ...inputProps
}: TextInputFieldProps) {
  return (
    <FormField
      id={id}
      label={label}
      className={wrapperClassName}
      spacing={spacing}
      error={error}
      isRequired={requiredInput}
    >
      <Input
        id={id}
        required={requiredInput}
        className={cn('rounded-xl bg-muted/30', fieldTypography.control, className)}
        {...inputProps}
      />
    </FormField>
  );
}

type TextareaFieldProps = ComponentProps<'textarea'> & Readonly<{
  id: string;
  label: string;
  wrapperClassName?: string;
  spacing?: FieldSpacing;
  error?: string;
}>;

export function TextareaField({
  id,
  label,
  wrapperClassName,
  spacing = 'tight',
  error,
  required: requiredInput = false,
  className,
  ...textareaProps
}: TextareaFieldProps) {
  return (
    <FormField
      id={id}
      label={label}
      className={wrapperClassName}
      spacing={spacing}
      error={error}
      isRequired={requiredInput}
    >
      <textarea
        id={id}
        required={requiredInput}
        className={cn(
          'w-full resize-none rounded-xl border border-input bg-muted/30 px-3 py-3 shadow-xs outline-none transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50',
          fieldTypography.textarea,
          className,
        )}
        {...textareaProps}
      />
    </FormField>
  );
}

type SelectFieldProps = Readonly<{
  id: string;
  name: string;
  label: string;
  options: ReadonlyArray<FormOption>;
  placeholder: string;
  wrapperClassName?: string;
  triggerClassName?: string;
  spacing?: FieldSpacing;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  error?: string;
  isRequired?: boolean;
  showOptionalHint?: boolean;
}>;

export function SelectField({
  id,
  name,
  label,
  options,
  placeholder,
  wrapperClassName,
  triggerClassName,
  spacing = 'tight',
  value,
  defaultValue,
  onValueChange,
  error,
  isRequired = false,
  showOptionalHint = true,
}: SelectFieldProps) {
  return (
    <FormField
      id={id}
      label={label}
      className={wrapperClassName}
      spacing={spacing}
      error={error}
      isRequired={isRequired}
      showOptionalHint={showOptionalHint}
    >
      <Select name={name} value={value} defaultValue={defaultValue} onValueChange={onValueChange}>
        <SelectTrigger
          id={id}
          className={cn(
            'w-full rounded-xl bg-muted/30 data-[size=default]:h-12',
            fieldTypography.control,
            triggerClassName,
          )}
          aria-invalid={Boolean(error)}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value} className={fieldTypography.selectItem}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </FormField>
  );
}

type FileUploadFieldProps = Readonly<{
  id: string;
  name: string;
  label: string;
  hintText?: string;
  browseText?: string;
  wrapperClassName?: string;
  spacing?: FieldSpacing;
  error?: string;
  inputProps?: Omit<ComponentProps<'input'>, 'id' | 'name' | 'type' | 'className'>;
  isRequired?: boolean;
  showOptionalHint?: boolean;
}>;

export function FileUploadField({
  id,
  name,
  label,
  hintText = 'Drop your document here, or select',
  browseText = 'Click to Browse',
  wrapperClassName,
  spacing = 'tight',
  error,
  inputProps,
  isRequired = false,
  showOptionalHint = true,
}: FileUploadFieldProps) {
  return (
    <FormField
      id={id}
      label={label}
      className={wrapperClassName}
      spacing={spacing}
      error={error}
      isRequired={isRequired}
      showOptionalHint={showOptionalHint}
    >
      <label
        htmlFor={id}
        className={cn(
          'flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-input bg-muted/20 text-center text-muted-foreground',
          fieldTypography.uploadContainer,
        )}
      >
        <FileText className={cn('mb-2 size-5 text-muted-foreground')} aria-hidden='true' />
        <span className={fieldTypography.uploadHint}>{hintText}</span>
        <span className={cn('font-semibold text-foreground', fieldTypography.uploadBrowse)}>{browseText}</span>
      </label>
      <input id={id} name={name} type='file' className={cn('sr-only')} {...inputProps} />
    </FormField>
  );
}

type FormSubmitButtonProps = Readonly<Omit<ComponentProps<typeof Button>, 'type'>>;

export function FormSubmitButton({ className, ...buttonProps }: FormSubmitButtonProps) {
  return <Button type='submit' className={cn(formSubmitButtonClassName, className)} {...buttonProps} />;
}
