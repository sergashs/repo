<template>
	<div class="post-page">
		<div class="container">
			<div v-if="loading"><loading-outlined :style="{ fontSize: '20px' }" /></div>
			<div v-else>
				<div class="content-holder">
					<h1>{{ data.title }}</h1>

					<figure v-if="data.img">
						<img :src="`http://localhost:5000/${data.img}`" alt="..." />
					</figure>

					<p>{{ data.content }}</p>

					<a-space :size="25">
						<div><eye-outlined /> {{ data.views }}</div>
						<div><message-outlined /> {{ comments.length }}</div>
					</a-space>

					<a-divider style="height: 2px; background-color: #f0f0f0; margin-top: 20px; margin-bottom: 20px" />

					<a-comment v-for="comment in comments" :key="comment.id">
						<!-- <template #actions>
						<span key="comment-basic-like">
							<a-tooltip title="Like">
								<template v-if="action === 'liked'">
									<LikeFilled @click="like" />
								</template>
								<template v-else>
									<LikeOutlined @click="like" />
								</template>
							</a-tooltip>
							<span style="padding-left: 8px; cursor: auto">
								{{ likes }}
							</span>
						</span>
						<span key="comment-basic-dislike">
							<a-tooltip title="Dislike">
								<template v-if="action === 'disliked'">
									<DislikeFilled @click="dislike" />
								</template>
								<template v-else>
									<DislikeOutlined @click="dislike" />
								</template>
							</a-tooltip>
							<span style="padding-left: 8px; cursor: auto">
								{{ dislikes }}
							</span>
						</span>
						<span key="comment-basic-reply-to">Reply to</span>
					</template> -->
						<template #author
							><a>{{ comment.username }}</a></template
						>
						<!-- <template #avatar>
						<a-avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
					</template> -->
						<template #content>
							<p>{{ comment.comment }}</p>
						</template>
						<template #datetime>
							<a-tooltip :title="dayjs().format('YYYY-MM-DD HH:mm:ss')">
								<span>{{ dayjs().from(comment.created_at) }}</span>
							</a-tooltip>
						</template>
					</a-comment>

					{{ comment }}
					<a-textarea v-model:value="comment.comment" :rows="4" placeholder="text of comment" style="margin-bottom: 15px" />

					<a-button html-type="submit" :loading="commentsLoading" type="primary" @click="createComment"> Add Comment </a-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import dayjs from "dayjs";
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import ApiNews from "@/api/news";
import ApiNewsComments from "@/api/newsComments";
import { LoadingOutlined, EyeOutlined, MessageOutlined } from "@ant-design/icons-vue";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const store = useStore();
const currentUser = computed(() => store.getters["user/user"]);
const data = ref([]);
const loading = ref(true);
const route = useRoute();
const comment = ref({});
const comments = ref([]);
const commentsLoading = ref(false);

function getPost(id) {
	loading.value = true;
	ApiNews.getOne(id)
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
}

function getComments(id) {
	ApiNewsComments.getAllForOne(id)
		.then((response) => {
			comments.value = response;
		})
		.catch((err) => {
			error.value = err;
		})
		.finally(() => {});
}

function createComment() {
	commentsLoading.value = true;

	ApiNewsComments.create({
		id: route.params.id,
		user_id: currentUser.value.id,
		comment: comment.value.comment
	})
		.then((response) => {
			if (response.status === 500) {
				return useToast.error(response.data.error.sqlMessage);
			}
			useToast.success(response);
		})
		.catch((err) => {
			commentsLoading.value = false;
		})
		.finally(() => {
			commentsLoading.value = false;
			getComments(route.params.id);
		});
}

onMounted(() => {
	getPost(route.params.id);
	getComments(route.params.id);
});
</script>

<style lang="scss" scoped>
.post-page {
	figure {
		img {
			width: 100%;
			height: auto;
		}
	}
}
</style>
