// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLceaVHQ3_EpPywImup8P6tlgJqJq2mPU",
  authDomain: "lipscombplus.firebaseapp.com",
  projectId: "lipscombplus",
  storageBucket: "lipscombplus.appspot.com",
  messagingSenderId: "457355155327",
  appId: "1:457355155327:web:e71aa3864d1df73620ec4a",
  measurementId: "G-074P16XL48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);