// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBi5lhpUEwN-THacRtiOA_0drcMTaD1R68",
  authDomain: "pantry-manager-774d4.firebaseapp.com",
  projectId: "pantry-manager-774d4",
  storageBucket: "pantry-manager-774d4.appspot.com",
  messagingSenderId: "767364330202",
  appId: "1:767364330202:web:e50f7dd6699a45b3d1abe3",
  measurementId: "G-NTJYFGFL30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore};