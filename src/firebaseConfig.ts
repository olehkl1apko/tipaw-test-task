import { initializeApp } from "firebase/app";
import { getFirestore, Timestamp } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const API_KEY = import.meta.env.VITE_FIREBASE_API_KEY;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "tipaw-9e689.firebaseapp.com",
  projectId: "tipaw-9e689",
  storageBucket: "tipaw-9e689.appspot.com",
  messagingSenderId: "1093349417573",
  appId: "1:1093349417573:web:f844fbf817e30d79dedc8c",
};

const app = initializeApp(firebaseConfig);

const projectFirestore = getFirestore(app);
const projectStorage = getStorage(app);

export { projectFirestore, projectStorage, Timestamp };
