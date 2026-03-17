import { z } from 'zod';

const emailFieldSchema = z
  .string()
  .trim()
  .min(1, 'Email is required.')
  .refine((value) => /\S+@\S+\.\S+/.test(value), 'Please enter a valid email address.');

export const contactFormSchema = z.object({
  fullName: z.string().trim().min(2, 'Please enter your full name.'),
  emailAddress: emailFieldSchema,
  message: z.string().trim().min(10, 'Please provide a bit more detail.'),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const getStartedFormSchema = z.object({
  firstName: z.string().trim().min(2, 'Please enter your first name.'),
  lastName: z.string().trim().min(2, 'Please enter your last name.'),
  emailAddress: emailFieldSchema,
  serviceNeeded: z.string().trim().min(1, 'Please select a service.'),
  companyName: z.string().trim().optional(),
  budget: z.string().trim().optional(),
  reference: z.string().trim().optional(),
  goals: z.string().trim().min(10, 'Tell us a little more about your goals.'),
});

export type GetStartedFormValues = z.infer<typeof getStartedFormSchema>;

export const joinTeamFormSchema = z.object({
  firstName: z.string().trim().min(2, 'Please enter your first name.'),
  lastName: z.string().trim().min(2, 'Please enter your last name.'),
  emailAddress: emailFieldSchema,
  creativeField: z.string().trim().min(1, 'Please select your creative field.'),
  portfolioLink: z.string().trim().min(3, 'Please share a portfolio or work sample link.'),
  socialHandle: z.string().trim().optional(),
  inspiration: z.string().trim().min(10, 'Please tell us how you get inspiration.'),
  deadlines: z.string().trim().min(10, 'Please explain how you handle tight deadlines.'),
  perfectFit: z.string().trim().min(10, 'Please describe what makes you a strong fit.'),
  expectedIncome: z.string().trim().min(1, 'Please provide your expected monthly income.'),
  teamwork: z.string().trim().min(1, 'Please select an option.'),
  additionalNote: z.string().trim().optional(),
  resumeUpload: z
    .custom<FileList>((value) => value instanceof FileList, 'Please upload your CV/Resume.')
    .refine((value) => value.length > 0, 'Please upload your CV/Resume.'),
});

export type JoinTeamFormValues = z.infer<typeof joinTeamFormSchema>;
