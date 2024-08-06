// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

//console.log(import.meta.env.VITE_API_KEY)

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "fir-chat-app-16086.firebaseapp.com",
  projectId: "fir-chat-app-16086",
  storageBucket: "fir-chat-app-16086.appspot.com",
  messagingSenderId: "744296104752",
  appId: "1:744296104752:web:421ea0035d5637d6d9bef5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export const provider = new GoogleAuthProvider()

export const db = getFirestore(app)