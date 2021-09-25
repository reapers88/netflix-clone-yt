// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2a4xZLbuJvmLnf0OiFhTZYkqEkIrYXrE",
  authDomain: "netflix-clone-yt-b34b2.firebaseapp.com",
  projectId: "netflix-clone-yt-b34b2",
  storageBucket: "netflix-clone-yt-b34b2.appspot.com",
  messagingSenderId: "337306326695",
  appId: "1:337306326695:web:9c64098a1e98852f12ad82",
  measurementId: "G-G5CXB9N7JG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
