// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_APP_ID,
};

// Initialize Firebase
let firebase_app = initializeApp(firebaseConfig);

export default firebase_app;
