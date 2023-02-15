import { initializeApp } from "firebase/app" ;
import { getStorage } from "firebase/storage" ; 

const firebaseConfig = {
  apiKey: "AIzaSyCSFs0owZx-eQeb0fli61hywk3i5McWTfg",
  authDomain: "trial-henry.firebaseapp.com",
  projectId: "trial-henry",
  storageBucket: "trial-henry.appspot.com",
  messagingSenderId: "613876685009",
  appId: "1:613876685009:web:0470c44f1802c8bf088df0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app) ; 

export default storage ; 