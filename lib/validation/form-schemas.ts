import { z } from 'zod';

const namePattern = /^\p{L}[\p{L}' -]*\p{L}$/u;
const companyNamePattern = /^[\p{L}\p{N}&.,'()/ -]+$/u;
const moneyPattern = /^\p{Sc}?[\p{L}\p{N},./() -]+$/u;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const socialUsernamePattern = /^@[A-Za-z0-9._]{2,30}$/;
const resumeAcceptedExtensions = ['pdf', 'doc', 'docx'] as const;
const resumeAcceptedMimeTypes = new Set([
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]);
const maxResumeSizeInBytes = 5 * 1024 * 1024;

function isHttpUrl(value: string): boolean {
  try {
    const parsedUrl = new URL(value);
    return parsedUrl.protocol === 'http:' || parsedUrl.protocol === 'https:';
  } catch {
    return false;
  }
}

const emailFieldSchema = z
  .string()
  .trim()
  .min(1, 'Email is required.')
  .max(254, 'Email must be 254 characters or fewer.')
  .refine((value) => emailPattern.test(value), 'Please enter a valid email address.');

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, 'Full name must be at least 2 characters.')
    .max(80, 'Full name must be 80 characters or fewer.')
    .refine((value) => namePattern.test(value), 'Full name can only include letters, spaces, apostrophes, and hyphens.'),
  emailAddress: emailFieldSchema,
  message: z.string().trim().min(10, 'Message must be at least 10 characters.').max(1200, 'Message must be 1200 characters or fewer.'),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const getStartedFormSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(2, 'First name must be at least 2 characters.')
    .max(50, 'First name must be 50 characters or fewer.')
    .refine((value) => namePattern.test(value), 'First name can only include letters, spaces, apostrophes, and hyphens.'),
  lastName: z
    .string()
    .trim()
    .min(2, 'Last name must be at least 2 characters.')
    .max(50, 'Last name must be 50 characters or fewer.')
    .refine((value) => namePattern.test(value), 'Last name can only include letters, spaces, apostrophes, and hyphens.'),
  emailAddress: emailFieldSchema,
  serviceNeeded: z.string().trim().min(1, 'Please select a service.'),
  companyName: z
    .string()
    .trim()
    .max(100, 'Company name must be 100 characters or fewer.')
    .refine(
      (value) => value.length === 0 || companyNamePattern.test(value),
      'Company name contains invalid characters.',
    )
    .optional(),
  budget: z
    .string()
    .trim()
    .max(40, 'Budget must be 40 characters or fewer.')
    .refine((value) => value.length === 0 || moneyPattern.test(value), 'Budget contains invalid characters.')
    .optional(),
  reference: z.string().trim().max(600, 'Reference must be 600 characters or fewer.').optional(),
  goals: z
    .string()
    .trim()
    .min(10, 'Goals must be at least 10 characters.')
    .max(1200, 'Goals must be 1200 characters or fewer.'),
  selectedPackage: z.enum(['foundation', 'growth', 'authority']).optional(),
  sourcePage: z.string().trim().max(80, 'Source page must be 80 characters or fewer.').optional(),
  cta: z.string().trim().max(80, 'CTA must be 80 characters or fewer.').optional(),
});

export type GetStartedFormValues = z.infer<typeof getStartedFormSchema>;

export const joinTeamFormSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(2, 'First name must be at least 2 characters.')
    .max(50, 'First name must be 50 characters or fewer.')
    .refine((value) => namePattern.test(value), 'First name can only include letters, spaces, apostrophes, and hyphens.'),
  lastName: z
    .string()
    .trim()
    .min(2, 'Last name must be at least 2 characters.')
    .max(50, 'Last name must be 50 characters or fewer.')
    .refine((value) => namePattern.test(value), 'Last name can only include letters, spaces, apostrophes, and hyphens.'),
  emailAddress: emailFieldSchema,
  creativeField: z.string().trim().min(1, 'Please select your creative field.'),
  portfolioLink: z
    .string()
    .trim()
    .min(8, 'Please share a valid portfolio or work sample link.')
    .max(300, 'Portfolio link must be 300 characters or fewer.')
    .refine((value) => isHttpUrl(value), 'Please enter a valid URL including http:// or https://.'),
  socialHandle: z
    .string()
    .trim()
    .max(300, 'Social handle must be 300 characters or fewer.')
    .refine(
      (value) => value.length === 0 || socialUsernamePattern.test(value) || isHttpUrl(value),
      'Provide a valid social profile URL or @handle.',
    )
    .optional(),
  inspiration: z
    .string()
    .trim()
    .min(10, 'Inspiration must be at least 10 characters.')
    .max(1200, 'Inspiration must be 1200 characters or fewer.'),
  deadlines: z
    .string()
    .trim()
    .min(10, 'Deadlines response must be at least 10 characters.')
    .max(1200, 'Deadlines response must be 1200 characters or fewer.'),
  perfectFit: z
    .string()
    .trim()
    .min(10, 'Perfect fit response must be at least 10 characters.')
    .max(1200, 'Perfect fit response must be 1200 characters or fewer.'),
  expectedIncome: z
    .string()
    .trim()
    .min(1, 'Please provide your expected monthly income.')
    .max(40, 'Expected monthly income must be 40 characters or fewer.')
    .refine(
      (value) => moneyPattern.test(value),
      'Expected monthly income contains invalid characters.',
    ),
  teamwork: z.string().trim().min(1, 'Please select an option.'),
  additionalNote: z.string().trim().max(1200, 'Additional note must be 1200 characters or fewer.').optional(),
  resumeUpload: z
    .custom<FileList>((value) => value instanceof FileList, 'Please upload your CV/Resume.')
    .refine((value) => value.length > 0, 'Please upload your CV/Resume.')
    .refine((value) => value.length <= 1, 'Please upload only one resume file.')
    .refine(
      (value) => {
        const file = value.item(0);

        if (!file) {
          return false;
        }

        const extension = file.name.split('.').pop()?.toLowerCase();
        const extensionIsValid =
          extension === resumeAcceptedExtensions[0] ||
          extension === resumeAcceptedExtensions[1] ||
          extension === resumeAcceptedExtensions[2];

        if (!extensionIsValid) {
          return false;
        }

        return file.type.length === 0 || resumeAcceptedMimeTypes.has(file.type);
      },
      'Resume must be a PDF, DOC, or DOCX file.',
    )
    .refine((value) => {
      const file = value.item(0);

      return file ? file.size <= maxResumeSizeInBytes : false;
    }, 'Resume file must be 5MB or smaller.'),
});

export type JoinTeamFormValues = z.infer<typeof joinTeamFormSchema>;
