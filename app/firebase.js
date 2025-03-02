import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDLPg9hkhrUVlfGt2Y4HuCHiUHonPeVO_w",
  authDomain: "anneadaylariuygulama.firebaseapp.com",
  projectId: "anneadaylariuygulama",
  storageBucket: "anneadaylariuygulama.appspot.com",
  messagingSenderId: "486556145730",
  appId: "1:486556145730:web:36cdec01f84f3e98d975db",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
