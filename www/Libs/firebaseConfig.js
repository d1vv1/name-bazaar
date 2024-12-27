import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyCz6_tE99G99-SgFKnurvSlfHLyC-SsH_4",
    authDomain: "name-bazaar-9f2d0.firebaseapp.com",
    databaseURL: "https://name-bazaar-9f2d0-default-rtdb.firebaseio.com",
    projectId: "name-bazaar-9f2d0",
    storageBucket: "name-bazaar-9f2d0.appspot.com",
    messagingSenderId: "490671214479",
    appId: "1:490671214479:web:348254ee2b81e60754c5fa"
};

export const app = initializeApp(firebaseConfig);