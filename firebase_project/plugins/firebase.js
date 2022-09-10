import firebase from 'firebase'

// copy the config from the console https://console.firebase.google.com/u/0/project/sign-11111/settings/general/
var firebaseConfig = {
	apiKey: "AIzaSyBkQhnOA6TffCCdMXMPRr_CY9J0glFzQx8",
	authDomain: "posts-3103b.firebaseapp.com",
	databaseURL: "https://posts-3103b-default-rtdb.firebaseio.com",
	projectId: "posts-3103b",
	storageBucket: "posts-3103b.appspot.com",
	messagingSenderId: "1011908687615",
	appId: "1:1011908687615:web:af65da386fc4bcb0847eca",
	measurementId: "G-FM8CVR9T1D"
};

let app = null
// prevent initializing firebase more than once
if (!firebase.apps.length) {
	app = firebase.initializeApp(firebaseConfig)
}
// inject it so it can be accessed as this.$firebase inside the project
export default (ctx, inject) => {
	inject('firebase', firebase)
}