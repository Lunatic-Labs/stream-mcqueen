// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth"

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
export const firebaseAuth = getAuth(app);

const googleProvider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
    signInWithPopup(firebaseAuth, googleProvider)
     .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });
};
