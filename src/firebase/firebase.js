// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYfDCQkf5YFe2TlZKVByz8gZjqSxPpVn0",
  authDomain: "restaurant-app-3abc7.firebaseapp.com",
  projectId: "restaurant-app-3abc7",
  storageBucket: "restaurant-app-3abc7.appspot.com",
  messagingSenderId: "795324541819",
  appId: "1:795324541819:web:cf35fffdda1243a1f2ebde"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)