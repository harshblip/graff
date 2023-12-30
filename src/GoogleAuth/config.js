import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyASG2xhDVNVhGTGmwdCt3EMe8ngmFt270g",
  authDomain: "graff-5833c.firebaseapp.com",
  projectId: "graff-5833c",
  storageBucket: "graff-5833c.appspot.com",
  messagingSenderId: "677824251206",
  appId: "1:677824251206:web:a8fd151327a22687c65147",
  measurementId: "G-ENVZ6RGBNH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

export { auth, provider }