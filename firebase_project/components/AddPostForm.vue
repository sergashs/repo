<template>
	<div class="add-post-from">
		<transition name="fade">
			<div v-if="request.show" class="alert alert-success" role="alert">Your request is success!</div>
		</transition>
		<form @submit.prevent>
			<h3 class="mb-3 pb-3">Add post form</h3>
			<input type="text" v-model="title" placeholder="title" class="form-control mb-4" />
			<input type="text" v-model="imgUrl" placeholder="img url" class="form-control mb-4" />
			<textarea v-model="description" placeholder="description" class="form-control mb-4" />
			<button class="btn btn-primary" @click="onCreatePost">Add post</button>
		</form>
	</div>
</template>

<script>
import axios from "axios";

export default {
	components: {},
	data() {
		return {
			title: "",
			description: "",
			imgUrl: "",
			request: {
				show: false,
				title: "",
				status: ""
			}
		};
	},
	methods: {
		onCreatePost() {
			axios.post(`https://posts-3103b-default-rtdb.firebaseio.com/posts.json?`, { title: this.title, description: this.description, img_url: this.imgUrl }).then((response) => {
				console.log(response);
				this.title = "";
				this.description = "";
				this.imgUrl = "";
				this.request.show = true;
				setTimeout(() => {
					this.request.show = false;
					this.$emit("onCreatePost");
				}, 1000);
			});
		}
	}
};
</script>
