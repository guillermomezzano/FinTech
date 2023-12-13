// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYN131BbRRD-e_Nuoxi9sWdJZA-ZecdUo",
  authDomain: "luca-822b5.firebaseapp.com",
  projectId: "luca-822b5",
  storageBucket: "luca-822b5.appspot.com",
  messagingSenderId: "114383864922",
  appId: "1:114383864922:web:0a98724ddff67384ee4463",
  measurementId: "G-M4J1NC92GD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);

export default app;
