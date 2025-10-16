
import * as admin from 'firebase-admin';

// IMPORTANT: Do not expose this to the client-side.
const serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT_KEY
  ? JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY)
  : undefined;

function initializeAdmin() {
  if (admin.apps.length > 0) {
    return admin.app();
  }

  if (!serviceAccount) {
    throw new Error('Missing FIREBASE_SERVICE_ACCOUNT_KEY environment variable.');
  }

  return admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export const adminApp = initializeAdmin();

export function getAdminFirestore() {
  return admin.firestore();
}

export function getAdminAuth() {
  return admin.auth();
}
