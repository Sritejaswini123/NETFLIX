// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxOzZ7FXdxGb1-IY3A0cuLlXLxSzXnpsc",
  authDomain: "netflixgpt-248c3.firebaseapp.com",
  projectId: "netflixgpt-248c3",
  storageBucket: "netflixgpt-248c3.appspot.com",
  messagingSenderId: "508834825981",
  appId: "1:508834825981:web:6d23f842f11b9e1e2ee094",
  measurementId: "G-WRSMPJK3S7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);