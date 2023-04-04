// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBfkR1jrXELSZFEUzMZGMseBztplBSbTU",
  authDomain: "job-search-65588.firebaseapp.com",
  projectId: "job-search-65588",
  storageBucket: "job-search-65588.appspot.com",
  messagingSenderId: "452645403570",
  appId: "1:452645403570:web:fc498ec72187c7f34c42ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const storage = getStorage(app);