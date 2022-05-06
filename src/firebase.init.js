// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUNqQldYEINoGSnwL9aQ6932kbovDT7tA",
  authDomain: "perfume-inventory.firebaseapp.com",
  projectId: "perfume-inventory",
  storageBucket: "perfume-inventory.appspot.com",
  messagingSenderId: "1093223523858",
  appId: "1:1093223523858:web:bd14d15f7b883b76561acb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;