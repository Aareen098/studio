
"use server";

import { z } from "zod";
import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters long."),
});

const firebaseConfig = {
  projectId: 'studio-6796978752-8c716',
  appId: '1:363506330731:web:2bd69d0ce84a4c864a952e',
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: 'studio-6796978752-8c716.firebaseapp.com',
  measurementId: '',
  messagingSenderId: '363506330731',
};


let app: FirebaseApp;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}
const db = getFirestore(app);


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
