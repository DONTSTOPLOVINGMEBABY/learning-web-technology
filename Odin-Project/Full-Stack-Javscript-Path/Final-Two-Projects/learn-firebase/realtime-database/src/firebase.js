// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSFs0owZx-eQeb0fli61hywk3i5McWTfg",
  authDomain: "trial-henry.firebaseapp.com",
  databaseURL: "https://trial-henry-default-rtdb.firebaseio.com",
  projectId: "trial-henry",
  storageBucket: "trial-henry.appspot.com",
  messagingSenderId: "613876685009",
  appId: "1:613876685009:web:0470c44f1802c8bf088df0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase ; 

export {db, app}
