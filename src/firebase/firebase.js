import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBR7PdGMiZ96_IH7fEC6aaynr_pLXv7cq4",
    authDomain: "auth-next-c6a76.firebaseapp.com",
    databaseURL: "https://auth-next-c6a76-default-rtdb.firebaseio.com",
    projectId: "auth-next-c6a76",
    storageBucket: "auth-next-c6a76.appspot.com",
    messagingSenderId: "461951903521",
    appId: "1:461951903521:web:44fe75e0544439bc758060"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)