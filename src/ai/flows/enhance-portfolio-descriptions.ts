// This file is machine-generated - edit with caution!
'use server';

/**
 * @fileOverview An AI-powered tool that suggests improvements to portfolio descriptions.
 *
 * - enhancePortfolioDescriptions - A function that enhances portfolio descriptions using AI.
 * - EnhancePortfolioDescriptionsInput - The input type for the enhancePortfolioDescriptions function.
 * - EnhancePortfolioDescriptionsOutput - The return type for the enhancePortfolioDescriptions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EnhancePortfolioDescriptionsInputSchema = z.object({
  text: z
    .string()
    .describe('The text describing work experience and skills that needs to be enhanced.'),
});
export type EnhancePortfolioDescriptionsInput = z.infer<
  typeof EnhancePortfolioDescriptionsInputSchema
>;

const EnhancePortfolioDescriptionsOutputSchema = z.object({
  enhancedText: z
    .string()
    .describe('The enhanced text with improved clarity and impact.'),
});
export type EnhancePortfolioDescriptionsOutput = z.infer<
  typeof EnhancePortfolioDescriptionsOutputSchema
>;

export async function enhancePortfolioDescriptions(
  input: EnhancePortfolioDescriptionsInput
): Promise<EnhancePortfolioDescriptionsOutput> {
  return enhancePortfolioDescriptionsFlow(input);
}

const enhancePortfolioDescriptionsPrompt = ai.definePrompt({
  name: 'enhancePortfolioDescriptionsPrompt',
  input: {schema: EnhancePortfolioDescriptionsInputSchema},
  output: {schema: EnhancePortfolioDescriptionsOutputSchema},
  prompt: `You are an expert portfolio enhancer. You will be given a text describing work experience and skills. You will reword the descriptions to improve clarity and impact. Return the enhanced text.

Original text: {{{text}}}`,
});

const enhancePortfolioDescriptionsFlow = ai.defineFlow(
  {
    name: 'enhancePortfolioDescriptionsFlow',
    inputSchema: EnhancePortfolioDescriptionsInputSchema,
    outputSchema: EnhancePortfolioDescriptionsOutputSchema,
  },
  async input => {
    const {output} = await enhancePortfolioDescriptionsPrompt(input);
    return output!;
  }
);
