<template>
	<div class="add-post-page">
		<div class="container">
			<div class="form-group">
				<p>title</p>
				<InputText type="text" v-model="form.title" />
			</div>
			<div class="form-group">
				<p>author name</p>
				<InputText type="text" v-model="form.author" />
			</div>
			<div class="form-group">
				<p>content</p>
				<InputText type="text" v-model="form.content" />
			</div>
			<Button label="send" @click="addNewPost(form)" />
			{{ form }}
		</div>
	</div>
</template>

<script setup>
const form = ref({});

const { data: posts, pending } = await useAsyncData("posts", () => $fetch("http://localhost:5000/api/posts"));

async function addNewPost(form) {
	const response = await fetch("http://localhost:5000/api/posts", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json"
		},
		body: JSON.stringify({
			title: form.title,
			author: form.author,
			content: form.content
		})
	});
	const data = await response.json();
	console.log(data);
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
