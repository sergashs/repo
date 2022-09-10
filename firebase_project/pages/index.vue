<template>
	<div class="home-page">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-9">
					<button @click="signInRedirect">Sign With Redirect</button>
					<button @click="signInPopup">Sign With Pop Up</button>
					<button @click="test">Test</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from "axios";

export default {
	data() {
		return {
			data: []
		};
	},
	mounted() {
		this.getFireBase();
	},
	methods: {
		getFireBase() {
			axios.get(`https://posts-3103b-default-rtdb.firebaseio.com/users.json`).then((response) => {
				this.data = response.data;
				console.log(response);
			});
		},
		async signInRedirect() {
			const provider = new this.$firebase.auth.GoogleAuthProvider();
			const redr = await this.$firebase.auth().signInWithRedirect(provider);

			console.lo(redr);
		},
		async signInPopup() {
			const provider = new this.$firebase.auth.GoogleAuthProvider();
			const result = await this.$firebase.auth().signInWithPopup(provider);
			const user = result.user;
			console.log(user);
		},
		async test() {
			const user = this.$firebase.auth().currentUser;
			const idToken = await user.getIdToken(true);
			const url = `https://posts-3103b-default-rtdb.firebaseio.com/users.jsontest.json?auth=${idToken}`;
			const test = await this.$axios.$get(url);
			console.log(test);
		}
	}
};
</script>

<style lang="scss" scoped></style>
