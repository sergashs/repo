<template>
	<div class="home-page">
		<div class="container">
			<div class="page-navbar">
				<a-input v-model:value="search" placeholder="search in title of post" />
				<a-pagination v-model:current="paginationCurrent" :total="posts.length" v-model:page-size="paginationPageSize" show-less-items />
			</div>
			<a-input-number v-model:value="postId" :controls="false" placeholder="search in title of post" @change="getAllCommentsForPost" />
			<button @click="getAllCommentsForPost"></button>

			<Chart :prop-data="commentsForChoosedPost" />
			<a-empty v-if="loading" :description="loading.description" />
			<a-row :gutter="16" v-else>
				<a-col v-for="post in filteredList" :key="post.id" :sm="12" :md="8" :lg="6">
					<a-card :title="post.title" :bordered="false">
						<p>{{ post.body }}</p>
						<p><b>Comments num:</b> {{ post.commentsNum }}</p>
					</a-card>
				</a-col>
			</a-row>
		</div>
	</div>
</template>

<script>
import apiPost from "@/api/post";
import apiComment from "@/api/comment";
import Chart from "@/components/Chart";

export default {
	components: {
		Chart
	},
	data() {
		return {
			posts: [],
			loading: {
				status: true,
				description: ""
			},
			search: "",
			searchResuts: [],
			paginationCurrent: 1,
			paginationPageSize: 10,
			postId: 1,
			commentsForChoosedPost: []
		};
	},
	created() {
		this.getPosts();
	},
	mounted() {
		this.getAllCommentsForPost();
	},
	methods: {
		async getPosts() {
			try {
				this.loading.status = true;
				this.loading.description = "loading data";

				let commentsNum = null;
				let comments = null;

				await apiComment.getAllComments().then((res) => {
					comments = res;
				});

				await apiPost.getAllPosts().then((response) => {
					response.map((el) => {
						commentsNum = comments.filter((comment) => comment.postId == el.id).length;

						this.posts.push({ ...el, commentsNum: commentsNum });
					});
				});
			} catch (error) {
				console.log(error);
				this.loading.description = error;
			} finally {
				this.loading = false;
			}
		},
		async getAllCommentsForPost() {
			try {
				await apiPost.getCommentsForOnePost(this.postId).then((response) => {
					this.commentsForChoosedPost = ["s", "d"];

					console.log(response);
				});
			} catch (error) {
				console.log(error);
			}
		}
	},
	computed: {
		filteredList() {
			if (this.search.length > 0) {
				return this.posts.filter((post) => {
					return post.title.toLowerCase().includes(this.search.toLowerCase());
				});
			}

			const start = (this.paginationCurrent - 1) * this.paginationPageSize;
			const end = Math.min(start + this.paginationPageSize, this.posts.length);

			return this.posts.slice(start, end);
		}
	}
};
</script>

<style lang="scss" scoped>
.home-page {
	padding-top: 20px;

	.page-navbar {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-bottom: 40px;

		.ant-input {
			max-width: 400px;
			margin-bottom: 20px;
		}
	}

	.chart-holder {
		max-width: 600px;
		margin: auto;
	}
}
</style>
