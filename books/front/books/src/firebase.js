// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
	apiKey: "AIzaSyB8UrsF5eDt05Qn5Woo0Hwf68stgrdmvRE",
	authDomain: "books-caa56.firebaseapp.com",
	projectId: "books-caa56",
	storageBucket: "books-caa56.firebasestorage.app",
	messagingSenderId: "964263940733",
	appId: "1:964263940733:web:a93b7339fa0117ad94d714",
	measurementId: "G-QW6YV34QQL"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
