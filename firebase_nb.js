//Firebase live database:

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyDEOWqRAqiVgVuZNw5-Qyd0emw4hLH6WOg",
    authDomain: "name-bazaar-34aef.firebaseapp.com",
    databaseURL: "https://name-bazaar-34aef-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "name-bazaar-34aef",
    storageBucket: "name-bazaar-34aef.firebasestorage.app",
    messagingSenderId: "597127145024",
    appId: "1:597127145024:web:d52929fb19a9dc46fa21a5"
};


const app = initializeApp(firebaseConfig);

const contactFormDB = getDatabase(app);

document.getElementById("contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    const name = getElementVal("username");
    const emailid = getElementVal("useremail");
    const msgContent = getElementVal("usermessage");


    saveMessages(name, emailid, msgContent);


}

const saveMessages = (name, emailid, msgContent) => {

    set(ref(contactFormDB, 'user/' + getElementVal("username")), {
        name: name,
        email: emailid,
        message: msgContent,
    }).then(() => {
        showSuccess()
    }).catch((error) => {
        console.log("Error saving data", error)
    });

};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};

const showSuccess = () => {
    document.querySelector(".alert").style.display = "block";

    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    document.getElementById("contact-form").reset();
}