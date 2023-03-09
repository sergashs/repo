<template>
	<div class="add-post-page">
		<div class="container">
			<div class="form-holder">
				<div class="form-group">
					<p>title</p>
					<InputText type="text" v-model="form.title" placeholder="title" />
				</div>

				<div class="form-group">
					<p>content</p>
					<Textarea v-model="form.content" placeholder="content" autoResize rows="5" cols="30" />
				</div>

				{{ form }} <br />

				<a-button type="primary" :loading="loading" @click="addNewPost(form)">Add post</a-button>
			</div>
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

.form-holder {
	max-width: 600px;
	width: 100%;
}
</style>
