import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-42c74.firebaseapp.com",
  projectId: "reactchat-42c74",
  storageBucket: "reactchat-42c74.appspot.com",
  messagingSenderId: "1097660777312",
  appId: "1:1097660777312:web:211a7d33d7127bd8f81405"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()