// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcWS9HnusG44oic-qOKUkMAO41RG4UU4w",
  authDomain: "food-mart-auth.firebaseapp.com",
  projectId: "food-mart-auth",
  storageBucket: "food-mart-auth.appspot.com",
  messagingSenderId: "287912821198",
  appId: "1:287912821198:web:1cc5bbd5ff012286c3eb9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;