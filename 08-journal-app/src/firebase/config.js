// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARt414D_hcuh3_w8QrqzXoZhi-4fCQcfs",
  authDomain: "devtalles-curso-react.firebaseapp.com",
  projectId: "devtalles-curso-react",
  storageBucket: "devtalles-curso-react.firebasestorage.app",
  messagingSenderId: "287803746894",
  appId: "1:287803746894:web:171dba593b4d4ea8a6311f"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);