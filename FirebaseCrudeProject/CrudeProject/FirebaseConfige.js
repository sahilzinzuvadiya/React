// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7eOLj6-SebObC-1hR7lOPBq9tTygE3Ao",
  authDomain: "fir-crudeproject.firebaseapp.com",
  projectId: "fir-crudeproject",
  storageBucket: "fir-crudeproject.firebasestorage.app",
  messagingSenderId: "568922798023",
  appId: "1:568922798023:web:6af223a4eebf25d6b44be2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db=getFirestore(app)

export  {auth,db}