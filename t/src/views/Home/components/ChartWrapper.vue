<template>
	<div class="chart-wrapper">
		<div class="input-holder">
			<a-input-number v-model:value="postId" :controls="false" placeholder="id of post" />
			<a-button type="primary" @click="getAllCommentsForPost">get</a-button>
		</div>
		<p>print id of post to get chart with data of authors comments (emails count)...</p>
		<Chart :prop-data="commentsForChoosedPost" />
	</div>
</template>

<script>
import Chart from "@/components/Chart";
import apiPost from "@/api/post";

export default {
	components: {
		Chart
	},
	data() {
		return {
			postId: 1,
			commentsForChoosedPost: []
		};
	},
	created() {
		this.getAllCommentsForPost();
	},
	methods: {
		async getAllCommentsForPost() {
			try {
				await apiPost.getCommentsForOnePost(this.postId).then((response) => {
					this.commentsForChoosedPost = response;
				});
			} catch (error) {
				console.log(error);
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.chart-wrapper {
	margin-bottom: 50px;
	text-align: center;

	.input-holder {
		display: flex;
		justify-content: center;
		max-width: 400px;
		margin: auto;

		.ant-input-number {
			width: 100%;
		}
	}
}
</style>
