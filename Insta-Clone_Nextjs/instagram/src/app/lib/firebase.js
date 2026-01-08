// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_o-nhYAhNV5auvBgRSsgYbhJTRcpiPko",
  authDomain: "instagram-clone-f22f2.firebaseapp.com",
  projectId: "instagram-clone-f22f2",
  storageBucket: "instagram-clone-f22f2.firebasestorage.app",
  messagingSenderId: "122041527110",
  appId: "1:122041527110:web:998ce923ae7b7babcdd347",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp(); // to avoid initializing more than once
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };