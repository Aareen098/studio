'use server';

/**
 * @fileOverview This file defines a Genkit flow for suggesting project content based on user skills and experiences.
 *
 * It includes:
 * - `suggestProjectContent`: An async function that takes user skills and project descriptions as input and returns suggested project content.
 * - `SuggestProjectContentInput`: The input type for the suggestProjectContent function.
 * - `SuggestProjectContentOutput`: The output type for the suggestProjectContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestProjectContentInputSchema = z.object({
  skills: z
    .array(z.string())
    .describe('A list of skills and experiences the user wants to showcase.'),
  projectDescriptions: z
    .array(z.string())
    .describe('A list of existing project descriptions.'),
});
export type SuggestProjectContentInput = z.infer<
  typeof SuggestProjectContentInputSchema
>;

const SuggestProjectContentOutputSchema = z.object({
  suggestedContent: z
    .array(z.string())
    .describe(
      'A list of suggested project content that aligns with the user skills and experiences.'
    ),
});
export type SuggestProjectContentOutput = z.infer<
  typeof SuggestProjectContentOutputSchema
>;

export async function suggestProjectContent(
  input: SuggestProjectContentInput
): Promise<SuggestProjectContentOutput> {
  return suggestProjectContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestProjectContentPrompt',
  input: {schema: SuggestProjectContentInputSchema},
  output: {schema: SuggestProjectContentOutputSchema},
  prompt: `You are an AI assistant designed to suggest project content for a user's portfolio, ensuring consistency and credibility.

The user has provided the following skills and experiences:
{{#each skills}}
- {{{this}}}
{{/each}}

The user has described the following projects:
{{#each projectDescriptions}}
- {{{this}}}
{{/each}}

Based on the user's skills and project descriptions, suggest additional project content that aligns with their skills and experiences.  Each skill should be supported by at least one project description.

Output the suggested content as a list of strings.

Here are some suggested project descriptions:
`,
});

const suggestProjectContentFlow = ai.defineFlow(
  {
    name: 'suggestProjectContentFlow',
    inputSchema: SuggestProjectContentInputSchema,
    outputSchema: SuggestProjectContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
