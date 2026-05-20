import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "baadshah-ff-arena.firebaseapp.com",
  projectId: "baadshah-ff-arena",
  storageBucket: "baadshah-ff-arena.firebasestorage.app",
  messagingSenderId: "321969559245",
  appId: "1:321969559245:web:e81e983e79db67e8f9fb84",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);