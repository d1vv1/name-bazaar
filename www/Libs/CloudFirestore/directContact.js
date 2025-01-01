import { displayTextOnPage, fetchField } from "../firebaseFunctions.js";

await displayTextOnPage("data", "Contact Us", "Phone Nos/0", "ph1");
await displayTextOnPage("data", "Contact Us", "Phone Nos/1", "ph2");
await displayTextOnPage("data", "Contact Us", "Phone Nos/2", "ph3");
await displayTextOnPage("data", "Contact Us", "email", "mail-address");
// displayTextOnPage("data", "Contact Us", "english/blueheading1", "bh1");
// displayTextOnPage("data", "Contact Us", "english/blueheading2", "bh2");
// displayTextOnPage("data", "Contact Us", "english/para1", "para1");
// displayTextOnPage("data", "Contact Us", "english/para2", "para2");
// displayTextOnPage("data", "Contact Us", "english/para3", "para3");
// displayTextOnPage("data", "Contact Us", "english/blueheading3", "bh3");
// displayTextOnPage("data", "Contact Us", "english/points", "services-list");

const emailId = document.getElementById("mail-address");
const phone1 = document.getElementById("ph1")
const phone2 = document.getElementById("ph2")
const phone3 = document.getElementById("ph3")

const emailVal = await fetchField("data", "Contact Us", "email");
const phone1Val = await fetchField("data", "Contact Us", "Phone Nos/0");
const phone2Val = await fetchField("data", "Contact Us", "Phone Nos/1");
const phone3Val = await fetchField("data", "Contact Us", "Phone Nos/2");
console.log(phone1Val, phone2Val);

emailId.href = `mailto:${emailVal}`;
phone1.href = `https://wa.me/+91${phone1Val}`;
phone2.href = `https://wa.me/+91${phone2Val}`;
phone3.href = `https://wa.me/+91${phone3Val}`;
