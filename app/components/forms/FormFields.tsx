import type { ComponentProps, ReactNode } from 'react';
import { FileText } from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';

export type FormOption = Readonly<{
  value: string;
  label: string;
}>;

const fieldSizeVariants = {
  default: {
    label: 'text-base',
    control: 'h-12 text-base',
    textarea: 'text-base',
    selectItem: 'text-base',
    uploadContainer: 'h-40 text-base',
    uploadHint: 'text-base',
    uploadBrowse: 'text-base',
  },
  compact: {
    label: 'text-sm',
    control: 'h-10 text-sm',
    textarea: 'text-sm',
    selectItem: 'text-sm',
    uploadContainer: 'h-32 text-sm',
    uploadHint: 'text-sm',
    uploadBrowse: 'text-sm',
  },
} as const;

type FieldSize = keyof typeof fieldSizeVariants;

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
  size?: FieldSize;
  spacing?: FieldSpacing;
  children: ReactNode;
}>;

export function FormField({
  id,
  label,
  className,
  labelClassName,
  size = 'default',
  spacing = 'tight',
  children,
}: FormFieldProps) {
  const sizeVariant = fieldSizeVariants[size];
  const spacingVariant = fieldSpacingVariants[spacing];

  return (
    <div className={cn('flex flex-col', className)}>
      <label htmlFor={id} className={cn('font-medium', sizeVariant.label, spacingVariant, labelClassName)}>
        {label}
      </label>
      {children}
    </div>
  );
}

type TextInputFieldProps = Omit<ComponentProps<typeof Input>, 'id' | 'size'> & Readonly<{
  id: string;
  label: string;
  wrapperClassName?: string;
  size?: FieldSize;
  spacing?: FieldSpacing;
}>;

export function TextInputField({
  id,
  label,
  wrapperClassName,
  size = 'default',
  spacing = 'tight',
  className,
  ...inputProps
}: TextInputFieldProps) {
  const sizeVariant = fieldSizeVariants[size];

  return (
    <FormField id={id} label={label} className={wrapperClassName} size={size} spacing={spacing}>
      <Input id={id} className={cn('rounded-xl bg-muted/30', sizeVariant.control, className)} {...inputProps} />
    </FormField>
  );
}

type TextareaFieldProps = ComponentProps<'textarea'> & Readonly<{
  id: string;
  label: string;
  wrapperClassName?: string;
  size?: FieldSize;
  spacing?: FieldSpacing;
}>;

export function TextareaField({
  id,
  label,
  wrapperClassName,
  size = 'default',
  spacing = 'tight',
  className,
  ...textareaProps
}: TextareaFieldProps) {
  const sizeVariant = fieldSizeVariants[size];

  return (
    <FormField id={id} label={label} className={wrapperClassName} size={size} spacing={spacing}>
      <textarea
        id={id}
        className={cn(
          'w-full resize-none rounded-xl border border-input bg-muted/30 px-3 py-3 shadow-xs outline-none transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50',
          sizeVariant.textarea,
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
  size?: FieldSize;
  spacing?: FieldSpacing;
}>;

export function SelectField({
  id,
  name,
  label,
  options,
  placeholder,
  wrapperClassName,
  triggerClassName,
  size = 'default',
  spacing = 'tight',
}: SelectFieldProps) {
  const sizeVariant = fieldSizeVariants[size];

  return (
    <FormField id={id} label={label} className={wrapperClassName} size={size} spacing={spacing}>
      <Select name={name}>
        <SelectTrigger
          id={id}
          className={cn(
            'w-full rounded-xl bg-muted/30 data-[size=default]:h-12',
            sizeVariant.control,
            triggerClassName,
          )}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value} className={sizeVariant.selectItem}>
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
  size?: FieldSize;
  spacing?: FieldSpacing;
}>;

export function FileUploadField({
  id,
  name,
  label,
  hintText = 'Drop your document here, or select',
  browseText = 'Click to Browse',
  wrapperClassName,
  size = 'default',
  spacing = 'tight',
}: FileUploadFieldProps) {
  const sizeVariant = fieldSizeVariants[size];

  return (
    <FormField id={id} label={label} className={wrapperClassName} size={size} spacing={spacing}>
      <label
        htmlFor={id}
        className={cn(
          'flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-input bg-muted/20 text-center text-muted-foreground',
          sizeVariant.uploadContainer,
        )}
      >
        <FileText className='mb-2 size-5 text-muted-foreground' aria-hidden='true' />
        <span className={sizeVariant.uploadHint}>{hintText}</span>
        <span className={cn('font-semibold text-foreground', sizeVariant.uploadBrowse)}>{browseText}</span>
      </label>
      <input id={id} name={name} type='file' className='sr-only' />
    </FormField>
  );
}
