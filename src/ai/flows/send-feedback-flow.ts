'use server';
/**
 * @fileOverview A flow to send feedback via email.
 *
 * - sendFeedback - A function that handles sending feedback.
 * - SendFeedbackInput - The input type for the sendFeedback function.
 */
import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const SendFeedbackInputSchema = z.object({
  name: z.string().describe('The name of the person sending feedback.'),
  contact: z.string().optional().describe('The contact number of the person.'),
  email: z.string().email().describe('The email of the person.'),
  feedback: z.string().describe('The feedback message.'),
});
export type SendFeedbackInput = z.infer<typeof SendFeedbackInputSchema>;

export async function sendFeedback(input: SendFeedbackInput): Promise<{ success: boolean }> {
  return sendFeedbackFlow(input);
}

const emailPrompt = ai.definePrompt({
    name: 'feedbackEmailPrompt',
    input: { schema: SendFeedbackInputSchema },
    prompt: `
      You are a helpful assistant. A user has submitted feedback on the portfolio website.
      Format a professional email to be sent to the site owner.
      The site owner's email is sujalupadhyay13@gmail.com.

      The email should have the subject: "New Feedback from your Portfolio".

      The email body should contain the following information:
      - Name: {{{name}}}
      - Email: {{{email}}}
      {{#if contact}}- Contact: {{{contact}}}{{/if}}
      - Feedback: {{{feedback}}}

      Your output should be just the full, raw email content, including headers.
      Start with "Subject: <subject>" and then the body.
    `,
  });

const sendFeedbackFlow = ai.defineFlow(
  {
    name: 'sendFeedbackFlow',
    inputSchema: SendFeedbackInputSchema,
    outputSchema: z.object({ success: z.boolean() }),
  },
  async (input) => {
    // In a real application, you would integrate an email sending service here.
    // For this prototype, we'll just log the email content to the console.
    const { text } = await emailPrompt(input);
    console.log('------- EMAIL TO BE SENT -------');
    console.log(text);
    console.log('---------------------------------');
    
    // We'll simulate a successful email send.
    return { success: true };
  }
);
