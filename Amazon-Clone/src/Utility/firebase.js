import firebase from "firebase/compat/app";
// auth
import {getAuth} from "firebase/auth"
import "firebase/compat/firestore"
import "firebase/compat/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpMLrk2Ga7URJsO7ootNdyzebu_cPf17U",
  authDomain: "clone-d94b3.firebaseapp.com",
  projectId: "clone-d94b3",
  storageBucket: "clone-d94b3.firebasestorage.app",
  messagingSenderId: "314299919508",
  appId: "1:314299919508:web:9bff721338965745409881",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = app.firestore()