import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyB7GvG1wLPy44_du5pC-s7WOFmq0VciNNc",
    authDomain: "iti-finalproject.firebaseapp.com",
    projectId: "iti-finalproject",
    storageBucket: "iti-finalproject.appspot.com",
    messagingSenderId: "288469290570",
    appId: "1:288469290570:web:061a76f27d55e28c8320b3"
})

export const auth = app.auth()
export default app
