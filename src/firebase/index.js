import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB434I98yjrbMhlgV6hRnLbpvrqba4vk_g",
    authDomain: "zafira-fem.firebaseapp.com",
    projectId: "zafira-fem",
    storageBucket: "zafira-fem.appspot.com",
    messagingSenderId: "404279756475",
    appId: "1:404279756475:web:a7e6e45e95745391ea8b9e",
    measurementId: "G-7TJEWX19RW"
};

const app = initializeApp(firebaseConfig);

export const getFirebase = () => app;

export { getFirestore };