import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyDCIpWPMzdt2TAccWSlg-tpme_ydHy4qLA",
	authDomain: "chat-32033.firebaseapp.com",
	projectId: "chat-32033",
	storageBucket: "chat-32033.appspot.com",
	messagingSenderId: "728261182735",
	appId: "1:728261182735:web:6b66ab915b082b594dea7a",
	measurementId: "G-7KKBB1S54Q"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();

