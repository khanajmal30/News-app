// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuv0EewbqHze6iT2gKcOtx61EIcpNqRzQ",
  authDomain: "aconews-1a249.firebaseapp.com",
  projectId: "acowale news",
  storageBucket: "aconews-1a249.appspot.com",
  messagingSenderId: "566816815851",
  appId: "1:566816815851:web:81eac6c388709510badcae",
  measurementId: "G-XC9RCJ25QX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);