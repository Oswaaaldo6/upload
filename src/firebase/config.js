import firebase from 'firebase/compat/app';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCyIFKsxWh-NOnrp97LbjPNk5RlqtXvjqA",
    authDomain: "upload-844fb.firebaseapp.com",
    projectId: "upload-844fb",
    storageBucket: "upload-844fb.appspot.com",
    messagingSenderId: "866570485694",
    appId: "1:866570485694:web:6a967c015a45aff1e703ef",
    measurementId: "G-FMC20D1856"
};

const app = firebase.initializeApp(firebaseConfig);
const storage = getStorage(app);
const auth = getAuth(app);

export { storage, auth };
