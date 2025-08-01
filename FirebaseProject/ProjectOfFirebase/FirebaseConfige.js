// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6sF3PjiyOBnZdAVqnsZGo7E6AkbrGwgs",
  authDomain: "fir-project-d37b9.firebaseapp.com",
  projectId: "fir-project-d37b9",
  storageBucket: "fir-project-d37b9.firebasestorage.app",
  messagingSenderId: "51610694161",
  appId: "1:51610694161:web:3ec99522e33153854f37b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db=getFirestore(app)

export  {auth,db}