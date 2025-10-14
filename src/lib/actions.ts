
"use server";

import { z } from "zod";
import { suggestProjectContent as suggestProjectContentFlow } from "@/ai/flows/suggest-project-content";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters long."),
});

export async function submitContactForm(data: z.infer<typeof contactSchema>) {
  const validatedFields = contactSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      success: false,
      message:
        "There was an error with your submission: " +
        validatedFields.error.flatten().fieldErrors,
    };
  }

  // In a real application, you would handle the form submission, e.g., send an email.
  console.log("New contact form submission:", validatedFields.data);

  return {
    success: true,
    message: "Thank you for your message! I'll get back to you soon.",
  };
}

const aiContentSchema = z.object({
  skills: z.string().min(1, "Please enter at least one skill."),
  projectDescriptions: z
    .string()
    .min(1, "Please enter at least one project description."),
});

export async function getAiSuggestions(
  data: z.infer<typeof aiContentSchema>
) {
  const validatedFields = aiContentSchema.safeParse(data);
  if (!validatedFields.success) {
    const errorMessages = Object.values(
      validatedFields.error.flatten().fieldErrors
    ).join(" ");
    return { success: false, error: errorMessages };
  }

  try {
    const result = await suggestProjectContentFlow({
      skills: validatedFields.data.skills.split(/,|\n/).map((s) => s.trim()).filter(Boolean),
      projectDescriptions: validatedFields.data.projectDescriptions
        .split("\n")
        .map((p) => p.trim()).filter(Boolean),
    });
    return { success: true, suggestions: result.suggestedContent };
  } catch (error) {
    console.error("AI suggestion error:", error);
    return { success: false, error: "Failed to get AI suggestions." };
  }
}
