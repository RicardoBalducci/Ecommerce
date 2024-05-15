// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFTwRhVGBSOs75rQ5xH2Rfe4OPnL8mB2s",
  authDomain: "ecommerce-9e7cc.firebaseapp.com",
  projectId: "ecommerce-9e7cc",
  storageBucket: "ecommerce-9e7cc.appspot.com",
  messagingSenderId: "611837136539",
  appId: "1:611837136539:web:6f7704f8967220882b403e",
  measurementId: "G-0KK1FTSE68",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
