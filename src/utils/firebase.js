// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClCoqDbPnpBwW1c5I6dMDmC5VJY0aHalk",
  authDomain: "netflixgpt-caaf9.firebaseapp.com",
  projectId: "netflixgpt-caaf9",
  storageBucket: "netflixgpt-caaf9.appspot.com",
  messagingSenderId: "407384319362",
  appId: "1:407384319362:web:aba95f17b185fae702db9b",
  measurementId: "G-L06NDJS5EP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
