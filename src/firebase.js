// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCso9hD-Xlp2lU7NQ9WMyMrXpp2gldfS4s",
  authDomain: "chat-app-7907f.firebaseapp.com",
  projectId: "chat-app-7907f",
  storageBucket: "chat-app-7907f.appspot.com",
  messagingSenderId: "534740090892",
  appId: "1:534740090892:web:42b9c0bf655e2f580bee29"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
