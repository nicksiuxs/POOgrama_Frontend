import { getAuth } from "@firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAnalytics } from "firebase/analytics"

const firebaseConfig = {
    apiKey: "AIzaSyB6FHk7fLV9G0BtOIQLP5pC6Tv4Sa_YN4s",
    authDomain: "watchful-audio-293805.firebaseapp.com",
    projectId: "watchful-audio-293805",
    storageBucket: "watchful-audio-293805.appspot.com",
    messagingSenderId: "980004357227",
    appId: "1:980004357227:web:26bae09b09dd757da2dd2e",
    measurementId: "G-FPKX4SSSQ6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

getAnalytics(app);

export default app