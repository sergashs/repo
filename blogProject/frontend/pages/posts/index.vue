<template>
	<div class="posts-page">
		<div class="container">
			<div class="row">
				<div v-if="loading" class="col"><i class="pi pi-spin pi-spinner" style="font-size: 2rem"></i></div>
				<div v-else v-for="item in data" :key="item._id" class="col">
					<div>
						<Card>
							<template #title>
								<h3>{{ item.title }}</h3>
							</template>
							<template #content>
								{{ item.content }}
							</template>
							<template #footer>
								<Button severity="danger" :loading="loading" @click="deletePost(item.id)">delete post</Button>
							</template>
						</Card>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { message } from "ant-design-vue";
import { ref, onMounted } from "vue";
import ApiPosts from "@/api/posts";

const data = ref([]);
const loading = ref(true);
const error = ref(null);

async function getPosts() {
	// try {
	loading.value = true;
	await ApiPosts.getAllPosts()
		.then((response) => {
			data.value = response;
		})
		.catch((err) => {
			error.value = err;
			loading.value = false;
		})
		.finally(() => {
			loading.value = false;
		});
	// } catch (err) {
	// 	error.value = err;
	// 	loading.value = false;
	// } finally {
	// 	loading.value = false;
	// }
}

async function deletePost(id) {
	await ApiPosts.deletePost(id)
		.then((response) => {
			console.log(`delete post with ${id}`);
		})
		.catch((err) => {
			error.value = err;
			console.log(error);
		})
		.finally(() => {
			getPosts();
		});
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

	img {
		width: 100%;
		height: auto;
	}
}
</style>
