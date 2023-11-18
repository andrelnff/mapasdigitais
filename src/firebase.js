import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCM2PSZjLo_1d_GwDmQCefDCF64JS2NHw0",
  authDomain: "sharp-science-386613.firebaseapp.com",
  databaseURL: "https://sharp-science-386613-default-rtdb.firebaseio.com",
  projectId: "sharp-science-386613",
  storageBucket: "sharp-science-386613.appspot.com",
  messagingSenderId: "589661007828",
  appId: "1:589661007828:web:b444cac3110d27de37f041",
  measurementId: "G-9NEJT53C2D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();

