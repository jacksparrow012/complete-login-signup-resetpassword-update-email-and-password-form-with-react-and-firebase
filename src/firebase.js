import firebase from "firebase/app"
import "firebase/auth"
const app = firebase.initializeApp({
    apiKey: "AIzaSyBEZmLGnBBzWcdTESJ06VfDCWlPCg-9DTY",
    authDomain: "auth-development-7436e.firebaseapp.com",
    projectId: "auth-development-7436e",
    storageBucket: "auth-development-7436e.appspot.com",
    messagingSenderId: "575751483272",
    appId: "1:575751483272:web:74b4ab0e73c5e693c2d43d",
    measurementId: "G-D3Z41LLNSW"
})
export const auth = app.auth();
export default app