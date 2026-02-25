'use server';
/**
 * Legacy types for the feedback flow.
 * The actual email sending is now handled in `src/app/api/send-feedback/route.ts`.
 */

import { z } from 'genkit';

export const SendFeedbackInputSchema = z.object({
  name: z.string().describe('The name of the person sending feedback.'),
  contact: z.string().optional().describe('The contact number of the person.'),
  email: z.string().email().describe('The email of the person.'),
  feedback: z.string().describe('The feedback message.'),
});

export type SendFeedbackInput = z.infer<typeof SendFeedbackInputSchema>;

