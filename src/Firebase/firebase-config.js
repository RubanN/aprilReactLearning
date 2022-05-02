import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBPIianCbF4q-BRPfvknMAjK3uZB0nH2cY",
    authDomain: "authecationapp.firebaseapp.com",
    projectId: "authecationapp",
    storageBucket: "authecationapp.appspot.com",
    messagingSenderId: "114289319139",
    appId: "1:114289319139:web:6f54bb2f3ee0ee9143f9d6",
    measurementId: "G-ZNMXYR96JX"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)