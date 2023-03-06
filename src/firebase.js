

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getStorage} from "firebase/storage";
import {getFirestore,serverTimestamp} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC2Cjpy4uipD5mRSwTG4X2gyoNy62hGtik",
  authDomain: "finalproject-iti.firebaseapp.com",
  projectId: "finalproject-iti",
  storageBucket: "finalproject-iti.appspot.com",
  messagingSenderId: "888002134030",
  appId: "1:888002134030:web:30943c22093a4d9cda3c5f"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
export const myserverTimestamp=serverTimestamp()