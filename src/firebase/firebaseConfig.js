import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// If you need authentication, import it as follows:
// import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCqTqvna4GEYri_EFj2079Swsl7fdNpnSY",
    authDomain: "a2dt-f5fb7.firebaseapp.com",
    projectId: "a2dt-f5fb7",
    storageBucket: "a2dt-f5fb7.firebasestorage.app",
    messagingSenderId: "576473877537",
    appId: "1:576473877537:web:0b411eda21051d62b7e760",
    measurementId: "G-PG1CMC2ERP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore (or Auth if needed)
const db = getFirestore(app);
// const auth = getAuth(app); // Uncomment if authentication is required

export { db };
