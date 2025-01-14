// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "ai-planner-94643.firebaseapp.com",
  projectId: "ai-planner-94643",
  storageBucket: "ai-planner-94643.firebasestorage.app",
  messagingSenderId: "878266495830",
  appId: "1:878266495830:web:de3fc68b57901b6e1edcf7",
  measurementId: "G-1XRNBLG143"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
