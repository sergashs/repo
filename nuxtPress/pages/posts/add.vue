<template>
	<div class="add-post-page">
		<div class="container">
			<div class="form-group">
				<p>title</p>

				<a-input v-model:value="form.title" placeholder="title" />
			</div>

			<div class="form-group">
				<p>content</p>
				<a-input v-model:value="form.content" placeholder="content" />
			</div>

			{{ form }}

			<a-button type="primary" :loading="loading" @click="addNewPost(form)">Add post</a-button>
		</div>
	</div>
</template>

<script setup>
import { message } from "ant-design-vue";

let form = ref({});

let loading = ref(false);

async function addNewPost(form) {
	loading.value = true;

	const response = await fetch("http://localhost:5000/api/posts", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json"
		},
		body: JSON.stringify({
			title: form.title,
			content: form.content
		})
	})
		.then((response) => {
			if (response) {
				message.success("Success, post has been added");
			} else {
				message.error("something wrong");
			}
		})
		.catch(() => {
			message.error("something wrong");
		})
		.finally(() => {
			loading.value = false;
		});

	// message.success("Success, post has been added");
}
</script>

<style lang="scss" scoped>
.container {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.form-group {
	margin-bottom: 15px;
}
</style>
