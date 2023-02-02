<template>
	<div class="posts-page">
		<div class="container">
			<div class="row">
				<div v-for="item in data" :key="item._id" class="col">
					<div>
						<Card>
							<template #header> </template>
							<template #title>
								<h3>{{ item.title }}</h3></template
							>
							<template #content> {{ item.content }}</template>
							<template #footer>
								<img v-if="item.img" :src="`http://localhost:5000/${item.img}`" alt="..." />
								<Button label="Delete" class="p-button-danger" @click="deletePost(item._id)" />
							</template>
						</Card>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const data = ref([]);
const loading = ref(false);
const error = ref(null);

async function getPosts() {
	loading.value = true;
	try {
		const response = await fetch("http://localhost:5000/api/posts");
		data.value = await response.json();
		loading.value = false;
	} catch (err) {
		error.value = err;
		loading.value = false;
	}
}

async function deletePost(id) {
	const response = await fetch(`http://localhost:5000/api/posts/${id}`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json"
		}
		// body: JSON.stringify({
		// 	title: form.title,
		// 	author: form.author,
		// 	content: form.content
		// })
	});
	const data = await response.json();
	console.log(data);

	getPosts();
}

onMounted(() => {
	getPosts();
});

// let posts = ref([]);

// async function getPosts() {
// 	posts = { posts } = await useAsyncData("posts", () => $fetch("http://localhost:5000/api/posts"));

// 	console.log(posts);
// }
</script>

<style lang="scss" scoped>
.row {
	display: flex;
	flex-wrap: wrap;
	margin-left: -15px;
	margin-right: -15px;

	.col {
		width: 33%;
		padding-left: 15px;
		padding-right: 15px;
	}
}

.p-card {
	margin-bottom: 30px;
	background: silver;

	img {
		width: 100%;
		height: auto;
	}
}
</style>
