import { getFirestore, doc, getDoc, getDocs, collection } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";
import {getDownloadURL, getStorage, ref} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-storage.js";
import { app } from "./firebaseConfig.js";

const db = getFirestore(app);
const storage = getStorage(app);

export async function displayTextOnPage(collectionFb, docFb, fieldPath, htmlId) {
    const element = document.getElementById(htmlId);

    if (!element) {
        console.error(`Element with ID '${htmlId}' not found on the page.`);
        return;
    }

    try {
        const content = await fetchField(collectionFb, docFb, fieldPath);

        if (content) {
            if (Array.isArray(content)) {
                const makeUL = document.createElement("ul");
                content.forEach((item) => {
                    const itemElement = document.createElement("li");
                    itemElement.textContent = item;
                    makeUL.appendChild(itemElement);
                });
                element.appendChild(makeUL);
            } else if (typeof content === "object") {
                Object.entries(content).forEach(([key, value]) => {
                    const para = document.createElement("p");
                    para.textContent = `${key}: ${value}`;
                    element.appendChild(para);
                });
            } else {
                const para = document.createElement("p");
                para.textContent = content;
                element.appendChild(para);
            }
        } else {
            element.textContent = "No content available.";
        }
    } catch (error) {
        console.error("Error displaying content:", error);
    }
}

async function fetchField(collectionName, docName, fieldPath) {
    const docRef = doc(db, collectionName, docName);

    try {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const data = docSnap.data();

            // Use `fieldPath` to access nested fields dynamically
            const content = getValueFromPath(data, fieldPath, '/'); // Use '/' as a custom separator

            return content !== undefined ? content : null;
        } else {
            console.warn(`No document found at ${collectionName}/${docName}`);
            return null;
        }
    } catch (error) {
        console.error("Error fetching document:", error);
        return null;
    }
}

function getValueFromPath(obj, path, separator = '.') {
    return path.split(separator).reduce(
        (acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined),
        obj
    );
}

export async function loadRandomImage(htmlId) {
    try {
        const querySnapshot = await getDocs(collection(db, "images"));
        const imagePaths = [];
        querySnapshot.forEach((doc) => {
            imagePaths.push(doc.data().path);
        });

        const randomIndex = Math.floor(Math.random() * imagePaths.length);
        const randomImagePath = imagePaths[randomIndex];

        const imageRef = ref(storage, randomImagePath);
        const url = await getDownloadURL(imageRef);

        const imgElement = document.getElementById(htmlId);
        imgElement.src = url;
    } catch (error) {
        console.error("Error loading image:", error);
    }
}

export async function loadImage(collectionFb, docFb, fieldPath, htmlId) {
    try {
        const imgPath = await fetchField(collectionFb, docFb, fieldPath);
        const imageRef = ref(storage, imgPath);
        const url = await getDownloadURL(imageRef);

        const imgElement = document.getElementById(htmlId);
        imgElement.src = url;
    } catch (error) {
        console.error("Error loading image:", error);
    }
}

