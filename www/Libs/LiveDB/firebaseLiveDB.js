import { app } from "../firebaseConfig.js"
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";


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