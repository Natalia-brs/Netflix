// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC7dIrrykXovSsyMovI40v34SLIyn5Pl9E",
    authDomain: "netflix-clone-9bf0b.firebaseapp.com",
    projectId: "netflix-clone-9bf0b",
    storageBucket: "netflix-clone-9bf0b.appspot.com",
    messagingSenderId: "514705663468",
    appId: "1:514705663468:web:f0a90f12c4496b71974cc9"
  };
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }