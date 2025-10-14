
"use server";

import { z } from "zod";
import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { firebaseConfig } from "@/firebase/config";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters long."),
});

// A function to initialize Firebase client SDK on the server if not already done.
function initializeFirebaseSDK() {
  if (!getApps().length) {
    try {
      return initializeApp(firebaseConfig);
    } catch (error: any) {
      console.error('Firebase client SDK initialization error on server:', error.message);
    }
  }
  return getApps()[0];
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
    const app = initializeFirebaseSDK();
    if (!app) {
        throw new Error("Firebase initialization failed on the server.");
    }
    const db = getFirestore(app);
    const submissionsCollection = collection(db, 'contactFormSubmissions');
    
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
    // In a real app, you'd want to log this error to a monitoring service
    return {
      success: false,
      message: "Something went wrong on our end. Please try again later."
    }
  }
}
