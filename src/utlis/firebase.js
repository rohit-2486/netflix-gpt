// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqTXB06DxKhDodVbyxCRXUG0OTp8dQKtY",
  authDomain: "netflixgpt-2486.firebaseapp.com",
  projectId: "netflixgpt-2486",
  storageBucket: "netflixgpt-2486.appspot.com",
  messagingSenderId: "19985997059",
  appId: "1:19985997059:web:6fe584073a66fc889d5d36",
  measurementId: "G-GM7NRHLRMM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();