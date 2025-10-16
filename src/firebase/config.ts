
// For debugging Vercel environment variables
console.log("Attempting to use Firebase API Key:", process.env.NEXT_PUBLIC_FIREBASE_API_KEY);

export const firebaseConfig = {
  projectId: 'studio-6796978752-8c716',
  appId: '1:363506330731:web:2bd69d0ce84a4c864a952e',
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: 'studio-6796978752-8c716.firebaseapp.com',
  measurementId: '',
  messagingSenderId: '363506330731',
};
