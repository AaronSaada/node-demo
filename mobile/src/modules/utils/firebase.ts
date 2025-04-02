import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAuA-9QJpFaX_AYPEaDwHrVz_pQq3E_J2A",
  authDomain: "aaron-node-demo.firebaseapp.com",
  projectId: "aaron-node-demo",
  storageBucket: "aaron-node-demo.firebasestorage.app",
  messagingSenderId: "278791675095",
  appId: "1:278791675095:web:8b5861ca9b751066fe6492",
  measurementId: "G-59EM6DTMZY"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const firestore = getFirestore(app);
export const auth = getAuth(app);