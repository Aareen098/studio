
"use server";

import { z } from "zod";
import { initializeFirebase } from "@/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

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

  try {
    const { firestore } = initializeFirebase();
    const submissionsCollection = collection(firestore, 'contactFormSubmissions');
    
    await addDoc(submissionsCollection, {
      ...validatedFields.data,
      submittedAt: serverTimestamp(),
    });

    return {
      success: true,
      message: "Thank you for your message! I'll get back to you soon.",
    };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again later."
    }
  }
}
