
"use server";

import { z } from "zod";

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
        JSON.stringify(validatedFields.error.flatten().fieldErrors),
    };
  }

  // Since we removed Firebase Admin, we can't save to Firestore from the server anymore.
  // We'll simulate a successful submission for now.
  // In a real app, you would integrate with an email service like SendGrid or Resend here.
  
  console.log("Contact form submitted:", validatedFields.data);

  return {
    success: true,
    message: "Thank you for your message! I'll get back to you soon.",
  };
}
