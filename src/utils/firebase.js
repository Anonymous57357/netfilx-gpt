// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArMar226LQeYmtsW7dm0N9eX3n_qbQ9LU",
  authDomain: "netflixgpt-a5c8e.firebaseapp.com",
  projectId: "netflixgpt-a5c8e",
  storageBucket: "netflixgpt-a5c8e.firebasestorage.app",
  messagingSenderId: "639599508088",
  appId: "1:639599508088:web:d2d56034a637c20be50b8d",
  measurementId: "G-ZD19M082R7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
