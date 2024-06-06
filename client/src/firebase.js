// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1ltzouyBQw-qtIFBZQ2a8-tvCrryXFEA",
  authDomain: "mern-estate-949b5.firebaseapp.com",
  projectId: "mern-estate-949b5",
  storageBucket: "mern-estate-949b5.appspot.com",
  messagingSenderId: "885245018951",
  appId: "1:885245018951:web:52de0113f3200e71180262",
  measurementId: "G-J27YE1GMWG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);