// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    getAuth,
} from "firebase/auth";
import { getDatabase, ref } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD-UvKoV8DZWM6AhraNBgJjpiNQtOOzMsg",
    authDomain: "gbmessage-369c5.firebaseapp.com",
    databaseURL: "https://gbmessage-369c5-default-rtdb.firebaseio.com",
    projectId: "gbmessage-369c5",
    storageBucket: "gbmessage-369c5.appspot.com",
    messagingSenderId: "291929796791",
    appId: "1:291929796791:web:87bc58549c32b1e338dd32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);

export const signUp = async (email, pass) => {
    await createUserWithEmailAndPassword(auth, email, pass);
};
export const logIn = async (email, pass) => {
    await signInWithEmailAndPassword(auth, email, pass);
};
export const logOut = async () => {
    await signOut(auth);
};

export const userRef = ref(db, "user");
export const userNameRef = ref(db, "user/name");
export const userShowNameRef = ref(db, "user/showName");
export const chatsRef = ref(db, "chats");
export const msgsRef = ref(db, "messages");
export const getChatRefById = (id) => ref(db, `chats/${id}`);
export const getMsgsRefById = (chatId) => ref(db, `messages/${chatId}`);
export const getMsgsListRefById = (chatId) =>
    ref(db, `messages/${chatId}/messageList`);

