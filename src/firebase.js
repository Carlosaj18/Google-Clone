// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcsxCx_9T_ezUGzj6uamyQEnVgp-LY6bU",
  authDomain: "fir-a85dc.firebaseapp.com",
  projectId: "fir-a85dc",
  storageBucket: "fir-a85dc.appspot.com",
  messagingSenderId: "364977158364",
  appId: "1:364977158364:web:27761f4a9570ea088e9c19"
};
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export { db, auth, provider };
