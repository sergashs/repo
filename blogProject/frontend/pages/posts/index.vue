<template>
	<div class="posts-page">
		<div class="container">
			<div class="row">
				<div v-if="loading" class="col"><i class="pi pi-spin pi-spinner" style="font-size: 2rem"></i></div>
				<div v-else v-for="item in data" :key="item._id" class="col">
					<div>
						<a-card>
							<h3>{{ item.title }}</h3>
							{{ item.content }}
							<br />
							<a-button type="primary" @click="editPost(item.id)">
								<template #icon><edit-outlined /></template>
							</a-button>
							<a-button type="danger" :loading="loading" @click="deletePost(item.id)">
								<template #icon><delete-outlined /></template>
							</a-button>
						</a-card>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import ApiPosts from "@/api/posts";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons-vue";

const data = ref([]);
const loading = ref(true);
const error = ref(null);
const router = useRouter();

async function getPosts() {
	loading.value = true;
	await ApiPosts.getAll()
		.then((response) => {
			data.value = response.reverse();
		})
		.catch((err) => {
			error.value = err;
			loading.value = false;
		})
		.finally(() => {
			loading.value = false;
		});
}

async function deletePost(id) {
	await ApiPosts.delete(id)
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

function editPost(id) {
	router.push(`/posts/edit/${id}`);
}

onMounted(() => {
	getPosts();
});
</script>

<style lang="scss" scoped>
.row {
	display: flex;
	flex-wrap: wrap;
	margin-left: -15px;
	margin-right: -15px;

	.col {
		width: 33.333%;
		padding-left: 15px;
		padding-right: 15px;
	}
}

.ant-card {
	margin-bottom: 30px;

	img {
		width: 100%;
		height: auto;
	}
}
</style>
