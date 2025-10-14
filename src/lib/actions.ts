
"use server";

import { z } from "zod";
import * as admin from "firebase-admin";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters long."),
});

// Initialize Firebase Admin SDK
// This function ensures that the SDK is initialized only once.
function initializeFirebaseAdmin() {
  if (admin.apps.length === 0) {
    // When running in a Google Cloud environment (like Firebase Functions or Cloud Run),
    // the SDK automatically discovers service account credentials.
    // For local development, you would set the GOOGLE_APPLICATION_CREDENTIALS environment variable.
    admin.initializeApp();
  }
}

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
    initializeFirebaseAdmin();
    const db = admin.firestore();
    const submissionsCollection = db.collection('contactFormSubmissions');
    
    await submissionsCollection.add({
      ...validatedFields.data,
      submittedAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    return {
      success: true,
      message: "Thank you for your message! I'll get back to you soon.",
    };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    // In a real app, you'd want to log this error to a monitoring service
    return {
      success: false,
      message: "Something went wrong on our end. Please try again later."
    }
  }
}
