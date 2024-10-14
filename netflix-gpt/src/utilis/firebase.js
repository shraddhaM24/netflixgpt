// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0NiVizUomsD1y5jNQn2BelO2_2woTty8",
  authDomain: "netflixgpt-71e53.firebaseapp.com",
  projectId: "netflixgpt-71e53",
  storageBucket: "netflixgpt-71e53.appspot.com",
  messagingSenderId: "668655426789",
  appId: "1:668655426789:web:f02201cbfb3a913a73c80c",
  measurementId: "G-RYNQ758ZTS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();