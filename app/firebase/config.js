import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIRREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIRREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIRREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIRREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIRREBASE_MESSAGING_SENDER,
    appId: process.env.NEXT_PUBLIC_FIRREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const auth = getAuth(app); // Authentication service
export const db = getFirestore(app); // Firestore service