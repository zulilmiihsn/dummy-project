// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBe9-uPfSiFgt1sBYuW_3fxLqrLkKyXCNw",
    authDomain: "dummy-next-js-e84dd.firebaseapp.com",
    projectId: "dummy-next-js-e84dd",
    storageBucket: "dummy-next-js-e84dd.appspot.com",
    messagingSenderId: "174855779259",
    appId: "1:174855779259:web:1caad9c68c7e2ac62f8a9e"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
