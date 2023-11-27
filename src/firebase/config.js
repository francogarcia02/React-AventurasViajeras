import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCmLHFltKZ5fUpBepwbUOgLPY0YR4rSUVE",
  authDomain: "aventurasviajeras-7574e.firebaseapp.com",
  projectId: "aventurasviajeras-7574e",
  storageBucket: "aventurasviajeras-7574e.appspot.com",
  messagingSenderId: "834532815883",
  appId: "1:834532815883:web:84b161d6466cdf2b68030e"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);