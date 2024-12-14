import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyDEOWqRAqiVgVuZNw5-Qyd0emw4hLH6WOg",
    authDomain: "name-bazaar-34aef.firebaseapp.com",
    databaseURL: "https://name-bazaar-34aef-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "name-bazaar-34aef",
    storageBucket: "name-bazaar-34aef.firebasestorage.app",
    messagingSenderId: "597127145024",
    appId: "1:597127145024:web:d52929fb19a9dc46fa21a5"
};

export const app = initializeApp(firebaseConfig);