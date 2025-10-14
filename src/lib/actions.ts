
"use server";

import { z } from "zod";
import * as admin from 'firebase-admin';

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters long."),
});

// A function to initialize Firebase Admin SDK if not already done.
function initializeFirebaseAdmin() {
  if (!admin.apps.length) {
    try {
      // Use applicationDefault for server environments like Vercel
      admin.initializeApp({
        credential: admin.credential.applicationDefault(),
      });
    } catch (error: any) {
      console.error('Firebase admin initialization error:', error.message);
      // Avoid throwing to prevent app crashes, but log the failure.
    }
  }
  return admin.firestore();
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
    // Ensure Firebase is initialized and get the Firestore instance.
    const db = initializeFirebaseAdmin();
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
