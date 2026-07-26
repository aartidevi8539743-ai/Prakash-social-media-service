// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyDBNLzcSZW5hJJC5NPRqEDSkfEJDc-UXz0",
  authDomain: "prakashm9-9abe4.firebaseapp.com",
  projectId: "prakashm9-9abe4",
  storageBucket: "prakashm9-9abe4.firebasestorage.app",
  messagingSenderId: "401338037724",
  appId: "1:401338037724:web:5550b5d4c3e23d31964b19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Global
window.auth = auth;
window.provider = provider;
window.signInWithGoogle = function () {
  signInWithPopup(auth, provider)
    .then((result) => {
      alert("Welcome " + result.user.displayName);
      console.log(result.user);
    })
    .catch((error) => {
      alert(error.message);
    });
};

window.logout = function () {
  signOut(auth).then(() => {
    alert("Logged out successfully");
  });
};
