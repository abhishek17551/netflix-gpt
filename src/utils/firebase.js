// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3y7LpQEXeIurlIL5KYEz1N3Ed-LeT1i4",
  authDomain: "netflixgpt-a3167.firebaseapp.com",
  projectId: "netflixgpt-a3167",
  storageBucket: "netflixgpt-a3167.appspot.com",
  messagingSenderId: "944909546313",
  appId: "1:944909546313:web:53007ae8f5449324852098",
  measurementId: "G-54X713GQK4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const auth = getAuth()

