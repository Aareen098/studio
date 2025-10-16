
"use server";

import { z } from "zod";
import { collection } from "firebase/firestore";
import { addDocumentNonBlocking, initializeFirebase } from "@/firebase";

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

  try {
    const { firestore } = initializeFirebase();
    const submissionData = {
      ...validatedFields.data,
      submissionDate: new Date().toISOString(),
    };

    const submissionsCollection = collection(firestore, "contactFormSubmissions");
    await addDocumentNonBlocking(submissionsCollection, submissionData);

    return {
      success: true,
      message: "Thank you for your message! I'll get back to you soon.",
    };
  } catch (error) {
    console.error("Error submitting form to Firebase:", error);
    let errorMessage = "An unexpected error occurred.";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return {
      success: false,
      message: `There was an error saving your message: ${errorMessage}`,
    };
  }
}
