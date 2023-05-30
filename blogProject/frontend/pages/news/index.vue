<template>
	<div class="posts-page">
		<div class="container">
			<a-row :gutter="20">
				<a-col v-if="loading"><loading-outlined :style="{ fontSize: '20px' }" /></a-col>
				<a-col v-else v-for="item in data" :key="item.id" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
					<a-card>
						<h3>
							<nuxt-link :to="`/news/${item.id}`">{{ item.title }} </nuxt-link>
						</h3>
						<div class="img-holder">
							<img v-if="item.img" :src="`http://localhost:5000/${item.img}`" alt="..." />
						</div>
						<p>{{ item.content }}</p>
						<a-divider style="height: 2px; background-color: #f0f0f0; margin-top: auto; margin-bottom: 10px" />
						<a-space :size="25">
							<div><eye-outlined /> {{ item.views }}</div>
							<div><message-outlined /> {{ item.comments_count }}</div>
						</a-space>

						<br />
						<!-- <a-space :size="5">
							<a-button type="primary" @click="editPost(item.id)">
								<template #icon><edit-outlined /></template>
							</a-button>
							<a-button type="danger" :loading="loadingDelete" @click="deletePost(item.id)">
								<template #icon><delete-outlined /></template>
							</a-button>
						</a-space> -->
					</a-card>
				</a-col>
			</a-row>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import ApiNews from "@/api/news";
import { DeleteOutlined, EditOutlined, LoadingOutlined, EyeOutlined, MessageOutlined } from "@ant-design/icons-vue";

const data = ref([]);
const loading = ref(true);
const loadingDelete = ref(false);
const error = ref(null);
const router = useRouter();

function getPosts() {
	loading.value = true;
	ApiNews.getAll()
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

function deletePost(id) {
	loadingDelete.value = true;
	ApiNews.delete(id)
		.then((response) => {
			console.log(`delete post with ${id}`);
		})
		.catch((err) => {
			error.value = err;
			console.log(error);
			loadingDelete.value = false;
		})
		.finally(() => {
			getPosts();
			loadingDelete.value = false;
		});
}

function editPost(id) {
	router.push(`/news/edit/${id}`);
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

	.img-holder {
		margin-bottom: 10px;
	}

	img {
		width: 100%;
		height: auto;
	}
}
</style>
