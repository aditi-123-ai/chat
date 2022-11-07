import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDV5zkAtji5EpfFs7nFHccawtA5h2TWPr0",
  authDomain: "chat-app-63a75.firebaseapp.com",
  projectId: "chat-app-63a75",
  storageBucket: "chat-app-63a75.appspot.com",
  messagingSenderId: "158574273251",
  appId: "1:158574273251:web:a155b1f3d02a5a71d4dbd6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
