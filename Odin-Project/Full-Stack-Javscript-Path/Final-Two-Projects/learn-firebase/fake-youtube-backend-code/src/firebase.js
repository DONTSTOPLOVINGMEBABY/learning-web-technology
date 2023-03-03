import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyCKAdCQp4uPK1dgYvRAdOdVMxvPUvBHJzc",
  authDomain: "fake-32e47.firebaseapp.com",
  projectId: "fake-32e47",
  storageBucket: "fake-32e47.appspot.com",
  messagingSenderId: "261979478486",
  appId: "1:261979478486:web:a95042d0e25c7002212c77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig) ;
const firestore = getFirestore(app) ; 
const storage = getStorage(app) ; 
const auth = getAuth(app) ; 

export {firestore, storage, auth} ; 