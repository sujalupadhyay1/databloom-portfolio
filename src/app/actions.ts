'use server';

import { enhancePortfolioDescriptions } from '@/ai/flows/enhance-portfolio-descriptions';
import { z } from 'zod';

export async function getEnhancedDescription(
  text: string
): Promise<{ data: string | null; error: string | null }> {
  const schema = z.string().min(20, { message: 'Please enter at least 20 characters for a meaningful enhancement.' });
  const validation = schema.safeParse(text);

  if (!validation.success) {
    return { data: null, error: validation.error.errors[0].message };
  }

  try {
    const result = await enhancePortfolioDescriptions({ text });
    return { data: result.enhancedText, error: null };
  } catch (e) {
    console.error(e);
    return { data: null, error: 'An unexpected error occurred. Please try again later.' };
  }
}
