// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuMQAtgrzZ8EkhnapPpLKrO7Y34DyIelQ",
  authDomain: "task-8ae0f.firebaseapp.com",
  projectId: "task-8ae0f",
  storageBucket: "task-8ae0f.appspot.com",
  messagingSenderId: "386529960434",
  appId: "1:386529960434:web:b470ce45c4c07bd2bccb6b",
  measurementId: "G-34H8PMG5TP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
